// import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
// import styles from "./frame-component9.module.css";
// const textInputStyles = {
//   "& fieldset": { borderColor: "#9d9d9d" },
//   "& .MuiInputBase-root": {
//     height: "56px",
//     backgroundColor: "#fff",
//     paddingLeft: "16px",
//     borderRadius: "8px",
//   },
//   "& .MuiInputBase-input": {
//     paddingLeft: "-14px",
//     color: "#666",
//     // Apply font family and styles to input itself
//     fontFamily: "Cairo, sans-serif",
//     transform: "rotate(-180deg) !important",
//   },
//   "& .MuiInputBase-input::placeholder": {
//     // Styling placeholder
//     fontFamily: "Cairo, sans-serif",
//     color: "#999",
//     transform: "rotate(-360deg) !important",
//   },
// };
// const FrameComponent9 = () => {
//   return (
//     <div className={styles.textInputsinputRegularParent}>
//       <div className={styles.textInputsinputRegular}>
//         <b className={styles.b}>رقم الجوال</b>
//         <TextField
//           className={styles.inputField}
//           placeholder="الجوال"
//           variant="outlined"
//           dir="rtl"
//           sx={textInputStyles}
//         />
//       </div>
//       <div className={styles.textInputsinputRegular1}>
//         <b className={styles.b1}>البريد الالكتروني</b>
//         <TextField
//           className={styles.inputField1}
//           placeholder="البريد الالكتروني"
//           variant="outlined"
//           dir="rtl"
//           sx={textInputStyles}
//         />
//       </div>
//     </div>
//   );
// };

// export default FrameComponent9;

import styles from "./frame-component9.module.scss";

const FrameComponent9 = () => {
  return (
    <div className={styles.textInputsinputRegularParent}>
      <div className={styles.textInputsinputRegular}>
        <input
          className="w-full h-[56px] bg-white pl-4 rounded-lg border border-gray-400 text-gray-600 pr-3   placeholder-gray-400"
          placeholder="الجوال"
          type="text"
          dir="rtl"
        />
        <b className={styles.b}>رقم الجوال</b>
      </div>
      <div className={styles.textInputsinputRegular1}>
        <input
          className="w-full h-[56px] bg-white pl-4 rounded-lg border border-gray-400 text-gray-600 pr-3   placeholder-gray-400"
          placeholder="البريد الالكتروني"
          type="email"
          dir="rtl"
        />
        <b className={styles.b1}>البريد الالكتروني</b>
      </div>
    </div>
  );
};

export default FrameComponent9;
