"use client";
import { useMemo } from "react";
import { Container, Section } from "@/components/craft";
import { Link } from "next-view-transitions";
import Logo from "@/components/shared/logo";
import { USEFULS_LINKS } from "@/menu.config";
import { Partners } from "./partners";

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <>

      <footer className="bg-blue dark:bg-primary text-white">
        <div className="relative bottom-1 z-10">
          <div className="flex h-[6px] w-[80%] mx-auto z-10">
            <div className="bg-[#0095c9] w-full"></div>
            <div className="bg-[#fff24b] w-full"></div>
            <div className="bg-[#db3832] w-full"></div>
          </div>
        </div>
        <Section className="font-CooperHewitt-Medium relative bg-cover bg-center  text-white">
          <Container className="grid md:grid-cols-4 grid-cols-1 gap-4">
            <div className="text-gray3 text-[12px] space-y-6">
              <Logo type="light" />
              <div className="space-y-2 text-sm">
                <p>
                  République Démocratique du Congo, Kinshasa/Gombe, 30 Avenue de la Justice Kinshasa, Gombe
                </p>
              </div>
            </div>
            <div className="space-y-4 md:pl-[2em] mt-6 md:mt-0">
              <h2 className="uppercase text-white">Accès rapide</h2>
              <ul className="text-sm space-y-2 text-gray3">
                {USEFULS_LINKS.map(
                  (
                    { name, href }: { name: string; href: string },
                    index: number
                  ) => (
                    <li className="hover:text-[#FFF14A] hover:pl-1 transition-all duration-200" key={index}>
                      <Link
                        className="hover:underline underline-offset-4 capitalize"

                        href={href}
                      >
                        {name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4 md:pl-[2em] mt-6 md:mt-0">
              <h2 className="uppercase text-white">Liens utiles</h2>
              <ul className="text-sm space-y-2 text-gray3">
                {USEFULS_LINKS.map(
                  (
                    { name, href }: { name: string; href: string },
                    index: number
                  ) => (
                    <li className="hover:text-[#FFF14A] hover:pl-1 transition-all duration-200" key={index}>
                      <Link
                        className="hover:underline underline-offset-4 capitalize"

                        href={href}
                      >
                        {name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4 md:pl-[2em] mt-6 md:mt-0">
              <h2 className="uppercase text-white">
                Établissements publics et structures
              </h2>
              <ul className="text-sm space-y-2 text-gray3">
                <li className="hover:text-[#FFF14A] hover:pl-1 transition-all duration-200">
                  <Link
                    className="hover:underline underline-offset-4 capitalize"
                    target="_blank"
                    href="https://www.rgph-rdc.org"
                  >
                    BCR
                  </Link>
                </li>
                <li className="hover:text-[#FFF14A] hover:pl-1 transition-all duration-200">
                  <Link
                    className="hover:underline underline-offset-4 capitalize"
                    target="_blank"
                    href="https://www.pgai-rdc.org"
                  >
                    PGAI
                  </Link>
                </li>
                <li className="hover:text-[#FFF14A] hover:pl-1 transition-all duration-200">
                  <Link
                    className="hover:underline underline-offset-4 capitalize"
                    target="_blank"
                    href="https://www.itierdc.net"
                  >
                    ITIE RDC
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
          <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
            <p className="md:text-center w-full">
              Tous droits réservés © Ministère de la Santé Publique, Hygiène et Prévention | {year}
            </p>
          </Container>
        </Section>
      </footer>
    </>
  );
};
