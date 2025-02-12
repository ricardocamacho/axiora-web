
"use client";

import { useEffect } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../hooks';
import { signupUser, selectCurrentUserStatus } from '../redux/auth-slice';

export default function UserRegister() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUserStatus = useAppSelector(selectCurrentUserStatus);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    dispatch(signupUser({ email: data.email, password: data.password }));
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
          id="email" type="email"
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
          id="password" type="password"
          { ...register("password", {
            required: 'Por favor ingresa tu contraseña',
            minLength: { value: 3, message: 'La contraseña debe tener más de 3 caracteres' }
          } ) }
        />
        {errors.password && <p className="text-sm text-red-600">{String(errors.password.message)}</p>}
      </div>
      <Button type="submit" gradientDuoTone="purpleToPink" disabled={currentUserStatus === 'pending'}>Regístrate</Button>
      <p className="text-sm ">Si tienes cuenta, <NavLink to="/user/login" className="text-purple-700 hover:underline">Inicia sesión</NavLink></p>
    </form>
  );
}
