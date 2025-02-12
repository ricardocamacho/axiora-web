
"use client";

import { useState } from 'react';
import { NavLink } from "react-router";
import { Alert, Breadcrumb, Button, Card, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { HiHome } from "react-icons/hi";
import Api from '../api';

export default function InventoryPage() {
  const [alerts, setAlerts] = useState<any>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    const alertsArray: any = [];
    Api.updateInventory(data.sku, Number(data.quantity)).then((response) => {
      if (response.mercadolibre) {
        response.mercadolibre.forEach((store: any) => {
          store.forEach((item: any) => {
            const updated =
              item.updated ||
              item.variations?.some((variation: any) => variation.updated);
              alertsArray.push({
              color: updated ? 'success' : 'danger',
              message: `Item de Mercadolibre con ID ${item.id} ${
                updated
                  ? 'fue actualizado'
                  : `no pudo ser actualizado${
                      item.reason ? ` (${item.reason})` : ''
                    }`
              }`
            });
          });
        });
      }
      if (response.shopify) {
        response.shopify.forEach((item: any) => {
          alertsArray.push({
            color: 'success',
            message: `Item de Shopify ${
              item.inventory_level.updated_at
                ? 'fue actualizado'
                : 'no pudo ser actualizado'
            }`
          });
        });
      }
      setAlerts(alertsArray);
    });
  };

  return (
    <section className="w-full p-4">
      <Breadcrumb aria-label="Default breadcrumb example" className="mb-4">
        <Breadcrumb.Item icon={HiHome}>
          <NavLink to='/'>Inicio</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Inventario</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-4 mb-4">
            <div className='grow'>
              <div className="mb-2 block">
                <Label htmlFor="sku" value="SKU" />
              </div>
              <TextInput
                id="sku" type="text" required
                { ...register("sku", {
                  required: 'Por favor ingresa el SKU',
                } ) }
              />
              {errors.sku && <p className="text-sm text-red-600">{String(errors.sku.message)}</p>}
            </div>
            <div className='grow'>
              <div className="mb-2 block">
                <Label htmlFor="quantity" value="Cantidad" />
              </div>
              <TextInput
                id="quantity" type="number" required
                { ...register("quantity", {
                  required: 'Por favor ingresa la cantidad'
                } ) }
              />
              {errors.quantity && <p className="text-sm text-red-600">{String(errors.quantity.message)}</p>}
            </div>
          </div>
          <Button type="submit" gradientDuoTone="purpleToPink">Actualizar inventario</Button>
        </form>
        {alerts !== null && alerts.length > 0
          ? alerts.map((alert: any, idx: number) => (
              <Alert color={alert.color} key={idx}>
                {alert.message}
              </Alert>
            ))
          : null}
        {alerts !== null && alerts.length === 0 ? (
          <Alert color="info">
            No se encontraron items con este SKU
          </Alert>
        ) : null}
      </Card>
    </section>
  );
}
