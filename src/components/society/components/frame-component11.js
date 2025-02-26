// import { Button } from "@mui/material";
// import styles from "./frame-component11.module.css";

// const FrameComponent11 = () => {
//   return (
//     <header className={styles.rectangleParent}>
//       <div className={styles.frameChild} />
//       <div className={styles.buttonWrapper}>
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
//       <div className={styles.frameWrapper}>
//         <div className={styles.frameParent}>
//           <div className={styles.wrapper}>
//             <div className={styles.div}>حوكمه الجمعيات</div>
//           </div>
//           <div className={styles.container}>
//             <div className={styles.div1}>التطوع</div>
//           </div>
//           <div className={styles.div2}>معتمد</div>
//           <div className={styles.frameGroup}>
//             <div className={styles.frame}>
//               <div className={styles.div3}>وثائق الشهادة</div>
//             </div>
//             <div className={styles.frameItem} />
//           </div>
//           <div className={styles.frameDiv}>
//             <div className={styles.div4}>الجمعيات</div>
//           </div>
//           <div className={styles.div5}>الصفحة الرئيسية</div>
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

// export default FrameComponent11;

import styles from "./frame-component11.module.scss";

const FrameComponent11 = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.buttonWrapper}>
        <button className="w-[140px] h-[47px] text-white text-[20px] font-medium bg-[#265fa2] rounded-[9px] hover:bg-[#265fa2]">
          تسجيل دخول
        </button>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>حوكمه الجمعيات</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div1}>التطوع</div>
          </div>
          <div className={styles.div2}>معتمد</div>
          <div className={styles.frameGroup}>
            <div className={styles.frame}>
              <div className={styles.div3}>وثائق الشهادة</div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div4}>الجمعيات</div>
          </div>
          <div className={styles.div5}>الصفحة الرئيسية</div>
        </div>
      </div>
      <img
        className={styles.logo1Icon}
        loading="lazy"
        alt="Logo"
        src="/logo-1@2x.png"
      />
    </header>
  );
};

export default FrameComponent11;
