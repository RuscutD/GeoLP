/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export const SubFooter = () => {
  const Footer = [
    {
      icon: "3",
      title: "Livraison en 48h",
      subTitle: "Livraison gratuite dès 80€ d'achat et express en 48 heures",
    },
    {
      icon: "4",
      title: "Paiement sécurisé",
      subTitle:
        "Votre paiement en ligne est 100% sécurisé. Vous pouvez régler en 3X sans frais",
    },
    {
      icon: "2",
      title: "Une relation de confiance entre nous",
      subTitle:
        "Geoplanete c'est 13 ans de présence sur le web et des milliers de clients satisfaits",
    },
    {
      icon: "1",
      title: "Besoin de conseils ?",
      subTitle:
        "Notre équipe est disponible de : 8h30 à 19h00 au 01 89 62 34 35",
    },
  ];

  return (
    <section className="bg-thirdary">
      {Footer.map((elm: any, i: number) => {
        return (
          <div key={i} className="col-span-3">
            <Image
              src={`/images/${elm.icon}.png`}
              alt="icon"
              height={50}
              width={50}
            />
            <h5 className="font-bold">{elm.title}</h5>
            <p>{elm.subTitle}</p>
          </div>
        );
      })}
    </section>
  );
};
