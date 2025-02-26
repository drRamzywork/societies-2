// import { Button } from "@mui/material";
// import styles from "./contact-footer.module.css";

// const ContactFooter = () => {
//   return (
//     <div className={styles.contactFooter}>
//       <div className={styles.checkboxunchecked} dir="rtl">
//         <input className={styles.checkbox} type="checkbox" />
//         <div className={styles.unchecked}>
//           بالضغط علي زر التاكيد فأنك توافق علي الشروط المقدمه من الموقع
//         </div>
//       </div>

//       <Button
//         className={styles.button}
//         disableElevation={true}
//         variant="contained"
//         sx={{
//           textTransform: "none",
//           color: "#fff",
//           fontFamily: "var(--font-cairo)",
//           fontSize: "24px",
//           fontWeight: "500 !important",
//           background: "#265fa2",
//           borderRadius: "9px",
//           "&:hover": { background: "#265fa2" },
//           height: 47,
//           width: 144,
//         }}
//       >
//         تسجيل
//       </Button>
//     </div>
//   );
// };

// export default ContactFooter;

import styles from "./contact-footer.module.scss";

const ContactFooter = () => {
  return (
    <div className={styles.contactFooter}>
      <div className={styles.checkboxunchecked} dir="rtl">
        <input className={styles.checkbox} type="checkbox" />
        <div className={styles.unchecked}>
          بالضغط علي زر التاكيد فأنك توافق علي الشروط المقدمه من الموقع
        </div>
      </div>

      <button className="w-[144px] h-[47px] text-white text-[24px] font-medium bg-[#265fa2] rounded-[9px] hover:bg-[#265fa2]">
        تسجيل
      </button>
    </div>
  );
};

export default ContactFooter;
