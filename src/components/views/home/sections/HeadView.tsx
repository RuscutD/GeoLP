import { Button } from "@/components/atoms/button";
import { Tag } from "@/components/atoms/tag";
import Image from "next/image";

export const HeadView = () => {
  return (
    <section className="h-screen pl-0">
      <video
        src="/images/backgroundVideo.mp4"
        className="object-cover absolute h-screen w-screen -z-10 top-0 left-0"
        loop
        autoPlay
        muted
      ></video>
      <div className="col-span-5 flex items-center">
        <Image
          alt="chaudière"
          src="/images/side.png"
          width={703}
          height={553}
        />
      </div>
      <div className="items-end justify-center flex-col flex gap-[12px] col-span-7">
        <Tag value="Promo" className="promotionTag tag" />
        <h3>Pompe à chaleur</h3>
        <h1 className="text-end">
          LG Therma V 9 kW - Monobloc S R32 - Monophasé
        </h1>
        <div className="flex flex-col items-end pb-[12px]">
          <p className="oldPrice">4 985,00 €</p>
          <p className="price">3 899,00 €</p>
        </div>
        <Button value="Acheter maintenant" />
      </div>
    </section>
  );
};
