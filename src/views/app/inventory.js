import React, { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  CardBody,
  FormGroup,
  Label,
  Row
} from 'reactstrap';
import { Formik, Form, Field } from 'formik';

import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';

import Api from '../../helpers/api';

const api = new Api();

const Inventory = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const updateInventory = async ({ sku, quantity }) => {
    setLoading(true);
    const alerts = [];
    const response = await api.updateInventory(sku, quantity);
    if (response.mercadolibre) {
      response.mercadolibre.forEach(store => {
        store.forEach(item => {
          const updated = item.variations.some(variation => variation.updated);
          alerts.push({
            color: updated ? 'success' : 'danger',
            message: `Item de Mercadolibre con ID ${item.id} ${
              updated ? 'fue actualizado' : 'no pudo ser actualizado'
            }`
          });
        });
      });
    }
    if (response.shopify) {
      response.shopify.forEach(item => {
        alerts.push({
          color: 'success',
          message: `Item de Shopify ${
            item.inventory_level.updated_at
              ? 'fue actualizado'
              : 'no pudo ser actualizado'
          }`
        });
      });
    }
    setResults(alerts);
    setLoading(false);
  };

  const validateSKU = value => {
    let error;
    if (!value) {
      error = 'Por favor ingresa un SKU';
    }
    return error;
  };

  const validateQuantity = value => {
    let error;
    if (value === '') {
      error = 'Por favor ingresa la cantidad';
    }
    return error;
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.inventory" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p className="mb-4">
            Actualice el inventario en todas sus cuentas vinculadas
          </p>
          <Card>
            <CardBody>
              <Formik
                initialValues={{
                  sku: '',
                  quantity: ''
                }}
                onSubmit={updateInventory}
              >
                {({ errors, touched }) => (
                  <Form className="av-tooltip tooltip-label-right">
                    <FormGroup row>
                      <Colxx sm={6}>
                        <FormGroup>
                          <Label>SKU</Label>
                          <Field
                            className="form-control"
                            name="sku"
                            validate={validateSKU}
                          />
                          {errors.sku && touched.sku && (
                            <div className="invalid-feedback d-block">
                              {errors.sku}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={6}>
                        <FormGroup>
                          <Label>Cantidad</Label>
                          <Field
                            className="form-control"
                            name="quantity"
                            type="number"
                            validate={validateQuantity}
                          />
                          {errors.quantity && touched.quantity && (
                            <div className="invalid-feedback d-block">
                              {errors.quantity}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                    </FormGroup>

                    <Button color="primary" type="submit" disabled={loading}>
                      Actualizar inventario
                    </Button>
                  </Form>
                )}
              </Formik>
              <Row className="mt-4">
                <Colxx sm={12}>
                  {loading && <div className="loading" />}
                  {results !== null && results.length > 0
                    ? results.map((result, idx) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Alert color="success" key={idx}>
                          {result.message}
                        </Alert>
                      ))
                    : null}
                  {results !== null && results.length === 0 ? (
                    <Alert color="info">
                      No se encontraron items con este SKU
                    </Alert>
                  ) : null}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default Inventory;
