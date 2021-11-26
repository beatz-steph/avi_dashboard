import Head from "next/head";
import {
  DashboardLayout,
  MiniCard,
  TranslateCard,
  CircularChart,
  LineChart,
  ChapterCard,
} from "../../components";

import { Add } from "../../assets/icon";

const chapterData = [
  {
    title: "Chapter 1",
    imgUrl: "",
    Topic: "Going to School",
    total: 100,
    current: 70,
  },
  {
    title: "Chapter 2",
    imgUrl: "",
    Topic: "Nature",
    total: 100,
    current: 60,
  },
  {
    title: "Chapter 3",
    imgUrl: "",
    Topic: "Household",
    total: 100,
    current: 40,
  },
  {
    title: "Chapter 4",
    imgUrl: "",
    Topic: "Science",
    total: 100,
    current: 20,
  },
];

export default function Learn() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex mb-20">
        <div className="mr-20">
          <MiniCard />
        </div>
        <TranslateCard />
      </div>

      {/* chart section */}

      <div className="border-t border-b border-[#DADADA] flex">
        <CircularChart className="w-[40%] border-r border-[#DADADA] px-10 py-10" />
        <LineChart className="w-[50%] ml-auto" />
      </div>

      {/* chapter */}
      <div className="mt-20">
        <h1 className="text-3xl text-[#4B4B4B] font-semibold mb-16">
          Chapters
        </h1>
        <div className="flex">
          <div className="flex flex-wrap max-w-[90%]">
            {chapterData.map((item, index) => (
              <ChapterCard key={`Chapters-index-${index}`} {...item} />
            ))}
          </div>

          {/* add chapter */}
          <div>
            <div className="w-20 h-20 rounded-full bg-[#D3D3D3] p-4 cursor-pointer">
              <Add />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Learn.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
