import Image from "next/image";
import LandingV1 from "@/components/Home/LandingV1";
import Version from "@/components/Home/version";
import Head from "next/head";

export default function Home({
  dataAllCitiesMap,
  dataAllPlaces,
  dataAllPoetries,
  societiesJson,
  regionsData,
}) {
  const siteName = `اللجنة التنسيقية لجمعيات الدعوة`;
  const imagePath = "/logo.png";
  const siteDescrription = "";
  const siteURL = "https://socites2.vercel.app ";
  const societiesArray = societiesJson?.data || [];

  const regionMap = new Map(
    regionsData.map((region) => [
      region.id,
      {
        name: region.name.replace(/^(منطقة|المنطقة)\s*/, ""),
        societies_count: region.societies_count,
      },
    ])
  );

  const updatedCitiesMap = dataAllCitiesMap.map((city) => {
    const region = regionMap.get(city.id); // البحث مباشرةً باستخدام id

    return {
      ...city,
      name: region?.name || city.name, // تحديث الاسم عند وجود تطابق
      societies_count: region?.societies_count ?? city.societies_count ?? 0, // تحديث عدد الجمعيات
    };
  });

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <meta name="theme-color" content="#275b2d" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <link rel="apple-touch-icon" href={`${siteURL}${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`${siteURL}${imagePath}`} />
        <meta name="author" content={siteName} />
        <meta name="description" content={siteDescrription} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta name="msapplication-TileColor" content="#275b2d" />
        <meta
          name="msapplication-TileImage"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={"ar"} />
        <meta property="og:locale:alternate" content={"ar"} />
        <meta property="og:url" content={`${siteURL}/`} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:image" content={`${siteURL}${imagePath}`} />
        <meta itemProp="name" content={siteName} />
        <meta itemProp="author" content={siteName} />
        <meta itemProp="image" content={`${siteURL}${imagePath}`} />
        <meta itemProp="description" content={siteDescrription} />
        <meta name="twitter:image" content={`${siteURL}${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:image:src" content={`${siteURL}${imagePath}`} />
        <meta name="twitter:description" content={siteDescrription} />
      </Head>

      <LandingV1
        dataAllCitiesMap={updatedCitiesMap}
        dataAllPlaces={dataAllPlaces}
        dataAllPoetries={dataAllPoetries}
      />
    </>
  );
}
import fs from "fs";
import path from "path";
import React from "react";

export async function getStaticProps() {
  const jsonFilePath = path.join(process.cwd(), "public", "data");

  let dataAllPlaces = [];
  let dataAllPoetries = [];
  let dataAllCitiesMap = [];

  const response = await fetch("https://map.rmz.one/api/list-societies");
  const societiesJson = await response.json();
  const regionsRes = await fetch("https://map.rmz.one/api/get-regions");
  const regionsData = await regionsRes.json();

  try {
    dataAllPlaces = JSON.parse(
      fs.readFileSync(path.join(jsonFilePath, "dataAllPlaces.json"), "utf8")
    );
    dataAllPoetries = JSON.parse(
      fs.readFileSync(path.join(jsonFilePath, "dataAllPoetries.json"), "utf8")
    );
    dataAllCitiesMap = JSON.parse(
      fs.readFileSync(path.join(jsonFilePath, "dataAllCitiesMap.json"), "utf8")
    );
  } catch (error) {
    console.error("Error reading local JSON files:", error);

    return {
      props: {
        dataAllPlaces: [],
        dataAllPoetries: [],
        dataAllCitiesMap: [],
        regionsData: [],
        error: error.message,
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      dataAllPlaces,
      dataAllPoetries,
      dataAllCitiesMap,
      societiesJson: societiesJson?.data,
      regionsData: regionsData?.data?.data,
    },
    revalidate: 10,
  };
}
