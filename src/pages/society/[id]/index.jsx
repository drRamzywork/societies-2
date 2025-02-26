// import { Button } from "@mui/material";
// import BlurFilter from "@/components/society/components/blur-filter";
// import InputPort from "@/components/society/components/input-port";
// import FrameComponent7 from "@/components/society/components/frame-component7";
// import Fotter from "@/components/society/components/fotter";
// import styles from "./index.module.css";
// import DataGatherer from "@/components/society/components/data-gatherer";

// const Frame1 = ({ societyDetails }) => {

//   return (
//     <div className={styles.div}>

//       {/* <Component /> */}
//       <DataGatherer />
//       <main className={styles.inner}>
//         <section className={styles.frameGroup}>
//           <div className={styles.frameWrapper}>
//             <div className={styles.frameContainer}>
//               <div className={styles.component4Wrapper}>
//                 <Button
//                   className={styles.component4}
//                   endIcon={<img width="28px" height="28px" src="/vector.svg" />}
//                   disableElevation={true}
//                   variant="contained"
//                   href="/societies"
//                   sx={{
//                     background: "#f5f5f5",
//                     borderRadius: "24px",
//                     "&:hover": { background: "#f5f5f5" },
//                     height: 76,

//                     '.MuiButton-endIcon': {
//                       margin: '0 !important'
//                     }
//                   }}
//                 />
//               </div>
//               <div className={styles.wrapperRectangle35}>
//                 <img
//                   className={styles.wrapperRectangle35Child}
//                   loading="lazy"
//                   alt=""
//                   src="/rectangle-35@2x.png"
//                 />
//               </div>
//             </div>
//           </div>
//           <BlurFilter societyDetails={societyDetails} />
//           <div className={styles.frameDiv}>
//             <div className={styles.dataHubParent}>
//               <div className={styles.dataHub}>
//                 <div className={styles.div1}>
//                   منصة تجمع الجمعيات الدولية في مكان واحد هي تطبيق رائع يوفر
//                   منصة مركزية لتبادل المعرفة والخبرات بين الجمعيات الدولية
//                   المختلفة. تهدف هذه المنصة إلى تسهيل التواصل والتعاون بين
//                   الجمعيات الدولية في مختلف المجالات، سواء كانت تتعلق بالتنمية
//                   المستدامة، حقوق الإنسان، الصحة، التعليم، أو أي مجال آخر.
//                 </div>
//               </div>
//               <b className={styles.b}>الخدمات المقدمة</b>
//               <div className={styles.inputPortWrapper}>
//                 <InputPort prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه" />
//               </div>
//             </div>
//             <div className={styles.frameWrapper1}>
//               <InputPort
//                 prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم"
//                 propPadding="var(--padding-xs) 0px 0px"
//               />
//             </div>
//             <div className={styles.frameWrapper2}>
//               <InputPort
//                 prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه"
//                 propPadding="var(--padding-2xs) 0px 0px"
//               />
//             </div>
//             <b className={styles.b1}>مشاركات الجمعية</b>
//             <div className={styles.frameParent1}>
//               <div className={styles.parent1}>
//                 <div className={styles.div2}>
//                   مشاركة في افطار العديد من العمال في الحرم المكي
//                 </div>
//                 <div className={styles.parent2}>
//                   <div className={styles.div3}>
//                     <p
//                       className={styles.p}
//                     >{`مشاركة في تنظيم ألبات العمل في البيئة والاهتمام `}</p>
//                     <p className={styles.p1}>بنظافة المنطقة</p>
//                   </div>
//                   <div className={styles.div4}>
//                     مشاركة في تنظيم الاحتفالات العامة والخاصة بمنطقة الرياض
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.frameWrapper3}>
//                 <div className={styles.ellipseParent}>
//                   <div className={styles.frameChild} />
//                   <div className={styles.frameItem} />
//                   <div className={styles.frameInner} />
//                 </div>
//               </div>
//               <div className={styles.frameParent2}>
//                 <div className={styles.parent3}>
//                   <div className={styles.div5}>
//                     مشاركة في تنظيم الاحتفالات العامة والخاصة بمنطقة الرياض
//                   </div>
//                   <div className={styles.ellipseWrapper}>
//                     <div className={styles.ellipseDiv} />
//                   </div>
//                 </div>
//                 <div className={styles.frameParent3}>
//                   <div className={styles.parent4}>
//                     <div className={styles.div6}>
//                       <p className={styles.p2}>
//                         مشاركة في الاستثمار العام في معظم الشركات الكبري في
//                       </p>
//                       <p className={styles.p3}>
//                         {" "}
//                         الرياض ومساعدة المشاريع الصغيرة
//                       </p>
//                     </div>
//                     <div className={styles.ellipseContainer}>
//                       <div className={styles.frameChild1} />
//                     </div>
//                   </div>
//                   <div className={styles.parent5}>
//                     <div className={styles.div7}>
//                       <p className={styles.p4}>
//                         مشاركة في الاستثمار العام في معظم الشركات الكبري في
//                       </p>
//                       <p className={styles.p5}>
//                         {" "}
//                         الرياض ومساعدة المشاريع الصغيرة
//                       </p>
//                     </div>
//                     <div className={styles.ellipseFrame}>
//                       <div className={styles.frameChild2} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <FrameComponent7 />
//         </section>
//       </main>
//       <Fotter logo1="/logo-1-11@2x.png" />
//     </div>
//   );
// };

// export default Frame1;





// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const url = `https://map.rmz.one/api/get-society/${id}`;
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   const societyDetails = await response.json();

//   return {
//     props: { societyDetails: societyDetails.data },
//   };
// }


import BlurFilter from "@/components/society/components/blur-filter";
import InputPort from "@/components/society/components/input-port";
import FrameComponent7 from "@/components/society/components/frame-component7";
import Fotter from "@/components/society/components/fotter";
import DataGatherer from "@/components/society/components/data-gatherer";
import styles from "./index.module.scss"; // ✅ Import updated SCSS file
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Frame1 = ({ societyDetails }) => {
  const siteName = `اللجنة التنسيقية لجمعيات الدعوة`;
  const imagePath = "/logo.png";
  const siteDescrription = "";
  const siteURL = "https://socites.vercel.app ";
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
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
        <DataGatherer />

        <main className={styles.inner}>
          <section className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.component4Wrapper}>
                  <Link href="/societies" className={styles.component4}>
                    <Image width={76} height={76} src="/vector.svg" alt="icon" />
                  </Link>
                </div>

                {/* Image */}
                <div className={styles.wrapperRectangle35}>
                  <img
                    className={styles.wrapperRectangle35Child}
                    loading="lazy"
                    alt={societyDetails?.name}
                    src={societyDetails?.logo}
                  />
                </div>
              </div>
            </div>

            {/* Blur Filter */}
            <BlurFilter societyDetails={societyDetails} />

            {/* Content Section */}
            <div className={styles.frameDiv}>
              <div className={styles.dataHubParent}>
                <div className={styles.dataHub}>
                  <p className={styles.div1}>
                    منصة تجمع الجمعيات الدولية في مكان واحد هي تطبيق رائع يوفر
                    منصة مركزية لتبادل المعرفة والخبرات بين الجمعيات الدولية
                    المختلفة. تهدف هذه المنصة إلى تسهيل التواصل والتعاون بين
                    الجمعيات الدولية في مختلف المجالات، سواء كانت تتعلق بالتنمية
                    المستدامة، حقوق الإنسان، الصحة، التعليم، أو أي مجال آخر.
                  </p>
                </div>

                {/* Services Section */}
                <b className={styles.b}>الخدمات المقدمة</b>
                <div className={styles.inputPortWrapper}>
                  <InputPort
                    prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه تليق بهم"
                  />
                </div>
              </div>

              <div className={styles.frameWrapper1}>
                <InputPort
                  prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه"
                />
              </div>

              <div className={styles.frameWrapper2}>
                <InputPort
                  prop="مساعدة الشباب في الحصول علي فرص عمل جديده وجديره بهم و الحرص علي الحصول علي مكانة مميزه"
                />
              </div>

              {/* Participations Section */}
              <b className={styles.b1}>مشاركات الجمعية</b>
              <div className={styles.frameParent1}>
                <div className={styles.parent1}>
                  <p className={styles.div2}>
                    مشاركة في افطار العديد من العمال في الحرم المكي
                  </p>
                  <div className={styles.parent2}>
                    <p className={styles.div3}>
                      مشاركة في تنظيم ألبات العمل في البيئة والاهتمام بنظافة المنطقة
                    </p>
                    <p className={styles.div4}>
                      مشاركة في تنظيم الاحتفالات العامة والخاصة بمنطقة الرياض
                    </p>
                  </div>
                </div>

                {/* Dots Indicators */}
                <div className={styles.frameWrapper3}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                </div>
              </div>
            </div>

            {/* Other Components */}
            <FrameComponent7 />
          </section>
        </main>

        <Fotter logo1="/logo-1-11@2x.png" />
      </div>
    </>

  );
};

export default Frame1;

// Fetching Data
export async function getServerSideProps(context) {
  const { id } = context.params;
  const url = `https://map.rmz.one/api/get-society/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const societyDetails = await response.json();

  return {
    props: { societyDetails: societyDetails?.data },
  };
}
