import React, { useState, useEffect } from 'react';
import { Row, Button, Card, Badge } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';

// import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import { NotificationManager } from '../../components/common/react-notifications';
import Breadcrumb from '../../containers/navs/Breadcrumb';

import Api from '../../helpers/api';

const api = new Api();

const clientId = {
  development: 2767226127359503,
  production: 2896786402503359
};

const redirectUri = {
  development: 'https://dev.axiora.co/app/stores',
  production: 'https://axiora.co/app/stores'
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const channels = {
  mercadolibre: 'Mercadolibre',
  shopify: 'Shopify'
};

const Stores = ({ match }) => {
  const [stores, setStores] = useState(null);
  const [codeProcessed, setCodeProcessed] = useState(false);
  const query = useQuery();

  const code = query.get('code');

  const addStore = () => {
    window.location.href = `http://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${
      clientId[process.env.REACT_APP_ENV]
    }&redirect_uri=${redirectUri[process.env.REACT_APP_ENV]}`;
  };

  useEffect(() => {
    const apiAddStore = async () => {
      if (stores !== null && code && !codeProcessed) {
        setCodeProcessed(true);
        const meliUserId = code.split('-')[2];
        const alreadyExists = stores.find(
          store => store.data.user_id === meliUserId
        );
        if (alreadyExists) {
          NotificationManager.warning(
            'Esta cuenta ya está agregada',
            'Oops',
            3000,
            null,
            null,
            ''
          );
        } else {
          await api.addStore(
            Number(meliUserId),
            code,
            redirectUri[process.env.REACT_APP_ENV]
          );
          const data = await api.getStores();
          setStores(data);
        }
      }
    };
    apiAddStore();
  }, [code, stores, codeProcessed]);

  useEffect(() => {
    const fetchStores = async () => {
      const data = await api.getStores();
      setStores(data);
    };
    fetchStores();
  }, []);

  const renderCreatedDate = date => {
    const formattedDate = new Date(date);
    return `${formattedDate.getDate()}/${
      formattedDate.getMonth() + 1
    }/${formattedDate.getFullYear()}`;
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.stores" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Button color="primary" className="mb-3" onClick={addStore}>
            Agregar cuenta de Mercadolibre
          </Button>
          <p className="mb-4">
            Para agregar una cuenta de Shopify por favor{' '}
            <a href="https://api.whatsapp.com/send/?phone=573177030039">
              contáctanos
            </a>
          </p>
          <Row>
            <Colxx xxs="12">
              {stores &&
                stores.map(store => (
                  <Card key={store.SK} className="d-flex flex-row mb-3">
                    <NavLink to="#" location={{}} className="d-flex">
                      <img
                        alt="Thumbnail"
                        src={`/assets/img/${store.channel}-logo.svg`}
                        className="list-thumbnail responsive border-0 card-img-left"
                      />
                    </NavLink>
                    <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                        <p className="list-item-heading mb-1 truncate w-40 w-sm-100">
                          {store.data.name}
                        </p>
                        <p className="mb-1 text-muted text-small w-15 w-sm-100">
                          {channels[store.channel]}
                        </p>
                        <p className="mb-1 text-muted text-small w-15 w-sm-100">
                          {renderCreatedDate(store.created_at)}
                        </p>
                        <div className="w-15 w-sm-100">
                          <Badge
                            color={
                              store.status === 'ACTIVE' ? 'primary' : 'warning'
                            }
                            pill
                          >
                            {store.status === 'ACTIVE' ? 'ACTIVA' : 'INACTIVA'}
                          </Badge>
                        </div>
                      </div>
                      {/* <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                    <FormGroup className="mb-0">
                      <CustomInput type="checkbox" id="check1" label="" />
                    </FormGroup>
                  </div> */}
                    </div>
                  </Card>
                ))}
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};

export default Stores;
