"use client";

import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/20/solid";
import HowWorks from "./How_It_Works";

const features = [
  {
    name: "Llena el formulario",
    description:
      "Ingresa tus datos de contacto y la información del boleto que quieres verificar.",
    href: "#",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Protegemos la información de tu boleto",
    description: "Encriptamos los datos ingresados para mantenerlos seguros.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Te notificamos",
    description:
      "Si en algún momento la información del boleto de otro usuario es identica a la tuya.",
    href: "#",
    icon: ExclamationTriangleIcon,
  },
];

export default function Features() {
  return (
    <>
      <div className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <HowWorks />
    </>
  );
}
