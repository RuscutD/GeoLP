import { Button } from "@/components/atoms/button";
import Image from "next/image";

export const Solution = () => {
  return (
    <section className="bg-secondary mx-0">
      <Image
        alt="illustration"
        width={632}
        height={557}
        src="/images/function.png"
        className="col-span-5"
      />
      <div className="col-span-6 col-end-13 flex flex-col justify-center">
        <h2>Une solution “Tout-en-un”</h2>
        <br />
        <p>
          La Therma V est constituée de 3 composants principaux et est environ 4
          fois plus efficace qu&apos;une chaudière. Plus longtemps vous
          l&apos;utilisez, plus vous économisez sur les coûts du chauffage.
        </p>
        <br />
        <p>
          La pompe à chaleur LG THERMA V Monobloc est une solution tout-en-un
          &apos;eau chaude jusqu&apos;à 65°C pour un confort optimal dans votre
          maison.
        </p>
        <br />
        <div>
          <Button value="Demander un devis" />
        </div>
      </div>
    </section>
  );
};
