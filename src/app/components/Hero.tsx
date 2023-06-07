"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:gap-x-6 lg:px-6">
        <div className="ml-auto pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-2 lg:pb-50 lg:pt-44 xl:col-span-6">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                ¿Compraste en reventa? Verifica tu boleto{" "}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Verificar <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-20 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Verifica tu boleto.
            </h1>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-5xl">
              Disfruta tu concierto.
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ¿Compraste en reventa? Llena nuestro formulario y te haremos saber
              si alguien más tiene el mismo boleto.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-900">
              Hemos protegido más de $100,000 MXN de estafas y clonaciones.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verificar
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                ¿Cómo funciona? <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt="NFTicketing"
            width={600}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
