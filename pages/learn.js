import Head from "next/head";
import { Sidebar } from "../components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex ">
        {/* sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}
