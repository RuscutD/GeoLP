import { Tag } from "@/components/atoms/tag";
import Image from "next/image";

export const Product = () => {
  return (
    <section>
      <div className="col-span-6 flex flex-col justify-center">
        <h2>Les plus du produit</h2>
        <br />
        <div className="flex font-bold gap-4">
          <Tag className="tag" value="Puissance" sub="9kW" />
          <Tag className="tag" value="Réfrigerant" sub="R32" />
          <Tag className="tag" value="Temp. sortie d’eau" sub="65°C" />
          <Tag className="tag" value="Courant" sub="Monophasé" />
        </div>
        <br />
        <br />
        <p>
          Les pompes à chaleur air-eau LG THERMA V sont des systèmes de
          chauffage innovants qui produisent du chauffage, du refroidissement et
          si besoin de l&apos;eau chaude sanitaire.
        </p>
      </div>
      <Image
        alt="ThermaV"
        width={700}
        height={700}
        src="/images/therma.png"
        className="col-span-5 col-end-13"
      />
    </section>
  );
};
