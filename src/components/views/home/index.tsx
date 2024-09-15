import { SubFooter } from "@/components/organism/subFooter";
import {
  HeadView,
  Product,
  Why,
  Solution,
  Garantie,
  Switch,
  SelfInstall,
  Certifications,
  Comments,
  More,
} from "./sections";

export const HomePage = () => {
  return (
    <main>
      <HeadView />
      <Product />
      <Solution />
      <Why />
      <Garantie />
      <Switch />
      <SelfInstall />
      <Certifications />
      <Comments />
      <More />
      <SubFooter />
    </main>
  );
};
