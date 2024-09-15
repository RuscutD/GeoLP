import { Ring } from "@/components/atoms/ring";

export const Certifications = () => {
  return (
    <section className="flex-col items-center pt-[0]">
      <h2 className="col-span-12 text-center">Certifications Européennes ✅</h2>
      <br />
      <br />
      <div className="flex gap-[64px] col-span-4 col-start-5">
        <Ring title="Eurovent" image="eurovent" />
        <Ring title="EHPA" image="ehpa" />
        <Ring title="Keymark" image="keymark" />
      </div>
    </section>
  );
};
