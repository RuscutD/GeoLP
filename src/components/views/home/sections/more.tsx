import { Button } from "@/components/atoms/button";

export const More = () => {
  return (
    <section className="blueBorderSection">
      <h2 className="col-span-12 text-center">Envie d&apos;en savoir plus ?</h2>
      <br />
      <p className="col-span-6 text-center col-start-4">
        La garantie indiquée sur la fiche produit LG, correspond à une
        installation réalisée par un professionnel. La garantie est bien de 1 an
      </p>
      <br />
      <div className="col-span-6 col-start-4 flex justify-center">
        <Button value="Acheter maintenant" />
      </div>
    </section>
  );
};
