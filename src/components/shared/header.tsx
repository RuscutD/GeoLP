import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Button } from "../atoms/button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <header
      className={`duration-300 ${scroll ? "bg-header" : "bg-transparent"}`}
    >
      <div className="flex items-center gap-1 p-3">
        <Image
          alt="Geoplanete Logo"
          width={214}
          height={54}
          src="/images/logo.png"
        />
        <p>|</p>
        <h5 className="uppercase">Store</h5>
      </div>
      <div className="flex items-center gap-6">
        <a href="" download="/images/ficheProduit.pdf">
          <div className=" flex items-center gap-3 hover:font-bold duration-150 hover:border-solid hover:border-2 p-[12px] rounded-[32px]">
            <h5>Fiche produit</h5>
            <Icon icon="eva:download-fill" />
          </div>
        </a>
        <Button value="Acheter" />
      </div>
    </header>
  );
};
