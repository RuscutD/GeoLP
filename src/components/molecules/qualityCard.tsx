import { Tag } from "../atoms/tag";

type qualityCardType = {
  tag: string;
  content: string;
  open: boolean;
  video: string;
  col: string;
  key?: number;
};

export const QualityCard = ({
  tag,
  content,
  video,
  col,
  key,
}: qualityCardType) => {
  return (
    <div
      className={`blueBorderComponent flex relative overflow-hidden ${col}`}
      key={key}
    >
      <video
        src={`/images/${video}.mp4`}
        className="h-full w-full -z-10 absolute object-cover left-0"
        loop
        autoPlay
        muted
      ></video>
      <Tag value={tag} className="tag" />
      <div className="flex items-center gap-2 ">
        <p>{content}</p>
      </div>
    </div>
  );
};
