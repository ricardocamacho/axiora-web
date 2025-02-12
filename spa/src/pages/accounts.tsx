
"use client";

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Badge, Breadcrumb, Card, Spinner } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import type { Store } from '../api';
import Api from '../api';

export default function AccountsPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  const renderCreatedDate = (date: string): string => {
    const formattedDate = new Date(date);
    return `${formattedDate.getDate()}/${
      formattedDate.getMonth() + 1
    }/${formattedDate.getFullYear()}`;
  };

  useEffect(() => {
    Api.getStores().then(stores => {
      setStores(stores);
      setLoading(false);
    });
  }, []);

  return (
    <section className="w-full p-4">
      <Breadcrumb aria-label="Default breadcrumb example" className="mb-4">
        <Breadcrumb.Item icon={HiHome}>
          <NavLink to='/'>Inicio</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Cuentas</Breadcrumb.Item>
      </Breadcrumb>
      {/* <p className="mb-4"><Button gradientDuoTone="purpleToPink">Agregar cuenta de Mercadolibre</Button></p> */}
      {loading && <div className='text-center'><Spinner color="purple" aria-label="Purple spinner example" size='xl' /></div>}
      {stores.map(store => (
        <Card className='mb-4' key={store.SK} imgSrc={`/${store.channel}-logo.svg`} horizontal>
          <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">{store.data.name}</h5>
          <p className="text-sm text-gray-500">Mercadolibre</p>
          <p className="text-sm text-gray-500">{renderCreatedDate(store.created_at)}</p>
          <p><Badge color={store.status === 'ACTIVE' ? 'purple' : 'warning'} className="inline-block">{store.status}</Badge></p>
        </Card>
      ))}
    </section>
  );
}
