import {
  Layout,
  Navbar,
  Hero,
  Auctions,
  FeaturesInfo,
  Stats,
} from "../components";
import features1 from "../assets/features1.png";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Auctions />
      <FeaturesInfo
        title="Sapien ipsum scelerisque convallis fusce"
        caption="Overline"
        desc="Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo."
        url={features1.src}
      />
      <Stats />
    </Layout>
  );
}
