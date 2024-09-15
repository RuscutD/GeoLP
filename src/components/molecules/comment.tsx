import Image from "next/image";

type commentType = {
  name: string;
  date: string;

  comment: string;
};

export const Comment = ({ name, date, comment }: commentType) => {
  return (
    <div className="bg-thirdary rounded-[32px] p-[32px] gap-[24px] flex flex-col col-span-5">
      <div className="flex gap-[12px] justify-between">
        <div className="flex gap-[24px]">
          <Image
            alt="profilePicture"
            width={68}
            height={68}
            src="/images/profile.png"
            className="rounded-[999px]"
          />
          <div className="text-left">
            <h3 className="font-bold">{name}</h3>
            <p>Publié le {date}</p>
          </div>
        </div>
        <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
      </div>
      <p className="text-left">{comment}</p>
    </div>
  );
};
