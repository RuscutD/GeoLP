/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/button";

export const Footer = () => {
  return (
    <footer className="p-[64px] pb-[0]">
      <div className="col-span-3">
        <Image src="/images/logo.png" alt="logo" width={250} height={100} />
        <br />
        <div className="flex gap-[24px]">
          <Link href="https://www.facebook.com/Geoplanete" target="_blank">
            <Icon icon="eva:facebook-fill" width={25} height={25} />
          </Link>
          <Link href="https://www.instagram.com/?hl=fr" target="_blank">
            <Icon icon="mdi:instagram" width={25} height={25} />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank">
            <Icon icon="ri:linkedin-fill" width={25} height={25} />
          </Link>
        </div>
      </div>
      <div className="col-span-2">
        <h5 className="font-bold uppercase">À propos de Geoplanete.fr</h5>
        <br />
        <Link
          href="https://geoplanete.fr/content/2-mentions-legales?_gl=1*zu73sg*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Mentions légales
          </p>
        </Link>
        <Link
          href="https://geoplanete.fr/content/3-cgv?_gl=1*urti32*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">CGV</p>
        </Link>
        <Link
          href="https://geoplanete.fr/content/4-qui-sommes-nous-?_gl=1*urti32*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Qui sommes-nous ?
          </p>
        </Link>
      </div>
      <div className="col-span-2">
        <h5 className="font-bold uppercase">Aide & Conseils</h5>
        <br />
        <Link
          href="https://geoplanete.fr/?_gl=1*skz7as*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Gérer mes cookies
          </p>
        </Link>
        <Link
          href="https://geoplanete.fr/faqs?_gl=1*tfyy2b*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">FAQ</p>
        </Link>
        <Link
          href="https://geoplanete.fr/blog?_gl=1*skz7as*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Les conseils
          </p>
        </Link>
        <Link
          href="https://geoplanete.fr/content/5-paiement-securise?_gl=1*skz7as*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Paiement sécurisé
          </p>
        </Link>
        <Link
          href="https://geoplanete.fr/content/6-mise-en-service?_gl=1*12wgf5j*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Mise en service
          </p>
        </Link>
      </div>
      <div className="col-span-3">
        <h5 className="font-bold uppercase">Livraison & SAV</h5>
        <br />
        <Link
          href="https://geoplanete.fr/marques?_gl=1*12wgf5j*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Les marques
          </p>
        </Link>
        <Link
          href="https://geoplanete.fr/content/1-livraison?_gl=1*rqhpxl*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            La livraison
          </p>
        </Link>
        <Link
          href="https://geoplanete.fr/content/8-les-retours?_gl=1*rqhpxl*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Les retours
          </p>
        </Link>
        <Link
          href="https://geoplanete.fr/content/9-les-garanties-fabricants?_gl=1*rqhpxl*_up*MQ..&gclid=CjwKCAjwooq3BhB3EiwAYqYoEizEL0hTyU64OYJJnKSc9XyQTWXsfJ9Lv_6sjvzow1Ki_nYLMdT8xRoCydUQAvD_BwE&gbraid=0AAAAAoN-k3hllPMYn98J2_THw71u5HNqV"
          target="_blank"
        >
          <p className="cursor-pointer hover:text-green duration-150">
            Les garanties
          </p>
        </Link>
      </div>
      <div className="col-span-2 col-end-13 text-center">
        <p> contact@geoplanete.fr</p>
        <p>Prix affichés en TTC</p>
        <br />
        <Button value="Nous contacter" />
      </div>
      <div className="col-span-12 text-center text-[12px]">
        <br />
        <p className="text-center">
          Marchand approuvé par la Société des Avis Garantis,{" "}
          <a
            href="https://www.societe-des-avis-garantis.fr/geoplanete/"
            target="_blank"
            className="text-thirdary cursor-pointer hover:text-green"
          >
            cliquez ici pour vérifier.
          </a>
        </p>
        <p className="text-center pb-[12px]">
          © 2022 Geoplanete • Tous droits réservés
        </p>
      </div>
    </footer>
  );
};
