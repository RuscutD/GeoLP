/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/atoms/button";
import { Tag } from "@/components/atoms/tag";

import { Comment } from "@/components/molecules/comment";
import { CommentsList } from "@/data/comments";

export const Comments = () => {
  return (
    <section className="blueBorderSection">
      <h2 className="col-span-12 text-center">Ils adorent !</h2>
      <Tag
        className="tag col-span-2 text-center col-start-6"
        value="⭐️ ⭐️ ⭐️ ⭐️ ⭐️"
      />
      <br />
      <h5 className="col-span-12 text-center">Basé sur 8 avis</h5>
      <br />
      {CommentsList.map((comment: any, i: number) => {
        return (
          <Comment
            name={comment.name}
            date={comment.date}
            comment={comment.comment}
            key={i}
          />
        );
      })}
      <br />
      <div className="col-span-4 col-start-5 flex justify-center">
        <Button value="Découvrez les autres avis" />
      </div>
    </section>
  );
};
