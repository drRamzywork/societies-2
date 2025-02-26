// import { Button } from "@mui/material";
// import styles from "./data-gatherer.module.css";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const DataGatherer = () => {
//   const router = useRouter();

//   const data = [
//     {
//       title: "الصفحة الرئيسية",
//       link: "/",
//     },
//     {
//       title: "الجمعيات",
//       link: "/societies",
//     },
//     {
//       title: "وثائق الشهادة ",
//       link: "/certification-documents",
//     },
//     {
//       title: "معتمد",
//       link: "/certified",
//     },
//     {
//       title: "التطوع",
//       link: "/volunteering",
//     },
//     {
//       title: "حوكمة المجتمعات",
//       link: "/governance-of-societies",
//     },
//   ];
//   return (
//     <header className={styles.dataGatherer}>
//       <div className={styles.dataGathererChild} />
//       <div className={styles.shapeArray}>
//         <Button
//           className={styles.button}
//           disableElevation={true}
//           variant="contained"
//           sx={{
//             textTransform: "none",
//             color: "#fff",
//             fontSize: "20",
//             background: "#265fa2",
//             borderRadius: "9px",
//             "&:hover": { background: "#265fa2" },
//             height: 47,
//           }}
//         >
//           تسجيل دخول
//         </Button>
//       </div>
//       <div className={styles.boxBundlerWrapper}>
//         <div className={styles.boxBundler}>
//           {data.reverse().map((item, index) => (
//             <Link
//               key={index}
//               href={item.link}
//               className={`${styles.div} ${
//                 router.pathname === item.link ? styles.active : ""
//               }`}
//             >
//               {item.title}
//             </Link>
//           ))}
//         </div>
//       </div>
//       <img
//         className={styles.logo1Icon}
//         loading="lazy"
//         alt=""
//         src="/logo-1@2x.png"
//       />
//     </header>
//   );
// };

// export default DataGatherer;

import styles from "./data-gatherer.module.scss"; // ✅ Import updated SCSS file
import Link from "next/link";
import { useRouter } from "next/router";

const DataGatherer = () => {
  const router = useRouter();

  const data = [
    { title: "الصفحة الرئيسية", link: "/" },
    { title: "الجمعيات", link: "/societies" },
    { title: "وثائق الشهادة ", link: "/certification-documents" },
    { title: "معتمد", link: "/certified" },
    { title: "التطوع", link: "/volunteering" },
    { title: "حوكمة المجتمعات", link: "/governance-of-societies" },
  ];

  return (
    <header className={styles.dataGatherer}>
      <div className={styles.dataGathererChild} />

      {/* Login Button */}
      <div className={styles.shapeArray}>
        <button className={`${styles.button} w-full`}>تسجيل دخول</button>
      </div>

      {/* Navigation */}
      <div className={styles.boxBundlerWrapper}>
        <div className={styles.boxBundler}>
          {data.reverse().map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`${styles.div} ${
                router.pathname === item.link ? styles.active : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <Link href={"/"}>
        <img
          className={styles.logo1Icon}
          loading="lazy"
          alt="logo"
          src="/logo-1@2x.png"
        />
      </Link>
    </header>
  );
};

export default DataGatherer;
