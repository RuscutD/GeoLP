import Image from "next/image";

type ringType = {
  value?: string;
  title: string;
  image?: string;
};

export const Ring = ({ value, title, image }: ringType) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-[24px]">
      {image ? (
        <div className="greenRing">
          <Image
            alt="logo"
            width={130}
            height={130}
            src={`/images/${image}.png`}
          />
        </div>
      ) : (
        <h4 className="redRing">
          {" "}
          <span className="font-bold text-[24px]">{value}</span> &nbsp;ans
        </h4>
      )}
      <h4 className="uppercase">{title}</h4>
    </div>
  );
};
