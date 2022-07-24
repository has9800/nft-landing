import { Layout, Navbar, Hero, Auctions } from "../components";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Auctions />
    </Layout>
  );
}
