// import { Button } from "@mui/material";
// import styles from "./frame-component8.module.scss";

// const FrameComponent8 = () => {
//   return (
//     <div className={styles.frameParent}>
//       <Button
//         className={styles.componentChild}
//         disableElevation={true}
//         variant="outlined"
//         sx={{
//           textTransform: "none",
//           color: "#265fa2",
//           fontSize: "24",
//           borderColor: "#265fa2",
//           borderRadius: "8px",
//           "&:hover": { borderColor: "#265fa2" },
//           width: 165,
//           height: 65,
//         }}
//       >
//         بيانات خاصة
//       </Button>
//       <Button
//         className={styles.componentItem}
//         disableElevation={true}
//         variant="outlined"
//         sx={{
//           textTransform: "none",
//           color: "#265fa2",
//           fontSize: "24",
//           borderColor: "#265fa2",
//           borderRadius: "8px",
//           "&:hover": { borderColor: "#265fa2" },
//           width: 165,
//           height: 65,
//         }}
//       >
//         الاحصائيات
//       </Button>
//       <Button
//         className={styles.componentInner}
//         disableElevation={true}
//         variant="outlined"
//         sx={{
//           textTransform: "none",
//           color: "#265fa2",
//           fontSize: "24",
//           borderColor: "#265fa2",
//           borderRadius: "8px",
//           "&:hover": { borderColor: "#265fa2" },
//           width: 199,
//           height: 65,
//         }}
//       >
//         بيانات الموظفين
//       </Button>
//       <Button
//         className={styles.groupButton}
//         disableElevation={true}
//         variant="contained"
//         sx={{
//           textTransform: "none",
//           color: "#fff",
//           fontSize: "24",
//           background: "#265fa2",
//           borderRadius: "0px 0px 0px 0px",
//           "&:hover": { background: "#265fa2" },
//           width: 165,
//           height: 65,
//         }}
//       >
//         بيانات عامة
//       </Button>
//     </div>
//   );
// };

// export default FrameComponent8;

import styles from "./frame-component8.module.scss";

const FrameComponent8 = () => {
  return (
    <div className={styles.frameParent}>
      <button
        className={`${styles.componentChild} border border-[#265fa2] text-[#265fa2] text-[24px] rounded-[8px] w-[165px] h-[65px] hover:border-[#265fa2]`}
      >
        بيانات خاصة
      </button>
      <button
        className={`${styles.componentItem} border border-[#265fa2] text-[#265fa2] text-[24px] rounded-[8px] w-[165px] h-[65px] hover:border-[#265fa2]`}
      >
        الاحصائيات
      </button>
      <button
        className={`${styles.componentInner} border border-[#265fa2] text-[#265fa2] text-[24px] rounded-[8px] w-[199px] h-[65px] hover:border-[#265fa2]`}
      >
        بيانات الموظفين
      </button>
      <button
        className={`${styles.groupButton} rounded-[8px] bg-[#265fa2] text-white text-[24px] w-[165px] h-[65px] shadow-none hover:bg-[#265fa2]`}
      >
        بيانات عامة
      </button>
    </div>
  );
};

export default FrameComponent8;
