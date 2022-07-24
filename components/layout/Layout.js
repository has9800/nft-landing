import "./layout.module.css";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;