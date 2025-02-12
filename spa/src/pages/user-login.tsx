
"use client";

import { useEffect } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../hooks';
import { loginUser, selectCurrentUserStatus } from '../redux/auth-slice';

export default function UserLogin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUserStatus = useAppSelector(selectCurrentUserStatus);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (currentUserStatus === 'succeeded') {
      navigate('/');
    }
  }, [currentUserStatus])

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email" type="email" required
          { ...register("email", {
            required: 'Por favor ingresa tu email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Email inválido'
            }
          } ) }
        />
        {errors.email && <p className="text-sm text-red-600">{String(errors.email.message)}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Contraseña" />
        </div>
        <TextInput
          id="password" type="password" required
          { ...register("password", {
            required: 'Por favor ingresa tu contraseña',
            minLength: { value: 3, message: 'La contraseña debe tener más de 3 caracteres' }
          } ) }
        />
        {errors.password && <p className="text-sm text-red-600">{String(errors.password.message)}</p>}
      </div>
      <Button type="submit" gradientDuoTone="purpleToPink" disabled={currentUserStatus === 'pending'}>Iniciar Sesión</Button>
      {currentUserStatus === 'failed' && <p className="text-sm text-red-600">Email o contraseña incorrectos</p>}
      <p className="text-sm ">Si no tienes cuenta, <NavLink to="/user/register" className="text-purple-700 hover:underline">Regístrate</NavLink></p>
    </form>
  );
}
