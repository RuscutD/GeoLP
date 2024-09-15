import Link from "next/link";

type buttonType = {
  value: string;
};

export const Button = ({ value }: buttonType) => {
  return (
    <Link
      href="https://geoplanete.fr/2309-lg-therma-v-9-kw-monobloc-s-monophas%C3%A9.html?fast_search=fs&_gl=1*3623s*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
      target="_blank"
    >
      <button className="text-[14px]">{value}</button>
    </Link>
  );
};
