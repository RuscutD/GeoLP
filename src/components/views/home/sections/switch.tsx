import { Button } from "@/components/atoms/button";
import Image from "next/image";

export const Switch = () => {
  return (
    <section className="bg-secondary relative py-[24px] mt-[128px]">
      <div className="col-span-5 col-start-2">
        <h2>Tout est prévu</h2>
        <br />
        <p>
          Télécommande intuitive avec un écran de 4,3 pouces et des boutons
          tactiles ainsi qu&apos;une personnalisation des programmes.
        </p>
        <br />
        <Button value="C’est parti !" />
      </div>
      <Image
        alt="Lg"
        width={549}
        height={488}
        src="/images/switch.png"
        className="col-span-4 col-end-12 absolute bottom-[-20px]"
      />
    </section>
  );
};
