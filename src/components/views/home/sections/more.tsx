import { Button } from "@/components/atoms/button";

export const More = () => {
  return (
    <section className="blueBorderSection">
      <h2 className="col-span-12 text-center">Envie d&apos;en savoir plus ?</h2>
      <br />
      <p className="col-span-8 text-center col-start-3">
        Pour accéder à des informations complémentaires et en savoir davantage
        sur la <b>LG Therma V 9 kW</b>, nous vous invitons à visiter notre site
        <b> Geoplanete.fr</b>. Vous y trouverez des informations supplémentaires
        qui pourraient vous être utiles.
      </p>
      <br />
      <div className="col-span-6 col-start-4 flex justify-center">
        <Button value="Accéder à Geoplanéte.fr" />
      </div>
    </section>
  );
};
