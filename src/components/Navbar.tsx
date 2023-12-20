import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
//import { useScroll } from "framer-motion";

import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { ActionIcon, Group } from "@mantine/core";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Opción 2", href: "/", current: false },
  {
    name: "Opción 3",
    href: "/gestion-legislativa",
    subMenu: [
      { name: "Opción 3 1", href: "/" },
      { name: "Opción 3 2", href: "/" },
    ],
    current: false,
  },
  {
    name: "Opción 4",
    href: "/",
    subMenu: [
      {
        name: "Opción 4 1",
        href: "/",
      },
      {
        name: "Opción 4 2",
        href: "/",
      },
    ],
    current: false,
  },
];

// const useStyles = createStyles((theme) => ({
//   social: {
//     [theme.fn.smallerThan("sm")]: {
//       marginTop: theme.spacing.xs,
//     },
//   },
// }));

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Función para detectar el scroll
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Agregar el evento de scroll al componente
    window.addEventListener("scroll", handleScroll);

    // Eliminar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { classes } = useStyles();
  return (
    <div className={`fixed z-50 w-full `}>
      <nav
        className={`flex items-center justify-between p-2 will-change-scroll bg-scroll lg:px-8 transition-all duration-700 ${
          scrolling ? "bg-gray-950" : "bg-transparent"
        }`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Eduard Espiritusanto</span>
            <img className="h-10 ml-10 w-auto" src="/logo-example.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-amber-300 active:text-amber-300"
              >
                {item.name}
              </a>
              {item.subMenu && (
                <div className="absolute top-full w-52 p-1 bg-greenEduard rounded-md py-2 hidden group-hover:block">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 w- text-sm font-semibold rounded-md leading-6 text-gray-100 hover:bg-green-800 hover:text-amber-300"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Group
            spacing={0}
            className="hover:stroke-sky-500"
            position="right"
            noWrap
          >
            <ActionIcon
              size="lg"
              className=" hover:bg-white hover:stroke-sky-500"
            >
              <a href="https://www.instagram.com/eduardespiritusanto/">
                <IconBrandTwitter className="stroke-white" size="1.05rem" />
              </a>
            </ActionIcon>
            <ActionIcon size="lg">
              <a href="https://www.instagram.com/eduardespiritusanto/">
                <IconBrandYoutube
                  className="hover:text-red-500 "
                  size="1.05rem"
                  color="white"
                />
              </a>
            </ActionIcon>
            <ActionIcon size="lg">
              <a href="https://www.instagram.com/eduardespiritusanto/">
                <IconBrandInstagram
                  className="hover:text-rose-300 "
                  size="1.05rem"
                  color="white"
                />
              </a>
            </ActionIcon>
          </Group>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Eduard Espiritusanto</span>
              <img className="h-8 w-auto" src="/logo-fp.png" alt="" />
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Registro
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
