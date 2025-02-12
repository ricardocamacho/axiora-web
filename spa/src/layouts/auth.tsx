
"use client";

import { Outlet } from 'react-router';
import { Card } from "flowbite-react";

export default function AuthLayout() {
  return (
    <div className='w-full h-full fixed bg-[url(/balloon-lg.jpg)] bg-cover bg-no-repeat bg-center bg-fixed'>
      <Card className="max-w-sm mx-auto mt-48">
        <img src="/black-axiora.svg" className="mr-3 h-6 sm:h-9" alt="Axiora" />
        <Outlet />
      </Card>
    </div>
  );
}
