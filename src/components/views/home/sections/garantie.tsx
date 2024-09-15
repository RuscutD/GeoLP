import { Ring } from "@/components/atoms/ring";
import Image from "next/image";

export const Garantie = () => {
  return (
    <section className="mx-0">
      <Image
        alt="Lg"
        width={549}
        height={488}
        src="/images/lg.png"
        className="col-span-4"
      />
      <div className="col-span-6 col-end-12">
        <h2>Les garanties LG</h2>
        <br />
        <p>
          La garantie indiquée sur la fiche produit LG, correspond à une
          installation réalisée par un professionnel. La garantie est bien de 1
          an compresseur et pièces si l&apos;installation est réalisée par un
          particulier.
        </p>
        <br />
        <br />
        <div className="flex justify-between ">
          <Ring value="5" title="GARANTIE COMPRESSEUR" />
          <Ring value="3" title="GARANTIE Pieces" />
          <Ring value="3" title="GARANTIE MAIN-D’OEUVRE" />
        </div>
      </div>
    </section>
  );
};
