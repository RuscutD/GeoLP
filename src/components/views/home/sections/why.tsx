/* eslint-disable @typescript-eslint/no-explicit-any */
import { QualityCard } from "@/components/molecules/qualityCard";

import { QualitiesList } from "@/data/qualities";

export const Why = () => {
  return (
    <section>
      <h2 className="col-span-12 text-left">
        Pourquoi choisir la gamme Therma V ? 🍃
      </h2>
      {QualitiesList.map((quality: any, i: number) => {
        return (
          <QualityCard
            col={quality.col}
            tag={quality.tag}
            content={quality.content}
            video={quality.video}
            open={quality.open}
            key={i}
          />
        );
      })}
    </section>
  );
};
