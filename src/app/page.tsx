import MindVault from "@/components/MindVault";
// import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Mind Vault App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MindVault />
    </div>
  );
}
