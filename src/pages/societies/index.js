import DataGatherer from "@/society/components/data-gatherer";
import GroupComponent from "@/society/components/group-component";
import Fotter from "@/society/components/fotter";
import styles from "./index.module.scss";
import Head from "next/head";

const Frame = ({ societiesData }) => {
  const siteName = `اللجنة التنسيقية لجمعيات الدعوة`;
  const imagePath = "/logo.png";
  const siteDescrription = "";
  const siteURL = "https://socites.vercel.app ";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

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
      <div className={styles.div}>
        <main className={styles.logicGate}>
          <DataGatherer />
          {/* <OvalOrchard /> */}
          <section className={styles.logicGateInner}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameParent1}>
                    <GroupComponent
                      propBackgroundImage="url('/rectangle-35@2x.png')"
                      propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                      propPadding1="var(--padding-smi) var(--padding-12xs)"
                      societiesData={societiesData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Fotter logo1="/logo-1-11@2x.png" />
      </div>
    </>
  );
};

export default Frame;

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://map.rmz.one/api/list-regions-with-societies"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      props: { societiesData: data.data.data }, // passed to the page component as props
      revalidate: 10, // Incremental Static Regeneration (ISR) - revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Failed to fetch societies data:", error);
    return { props: { societiesData: [] } };
  }
}
