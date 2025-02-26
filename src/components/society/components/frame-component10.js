// import { useMemo } from "react";
// import {
//   TextField,
//   InputAdornment,
//   Icon,
//   IconButton,
//   Select,
//   InputLabel,
//   MenuItem,
//   FormHelperText,
//   FormControl,
// } from "@mui/material";
// import styles from "./frame-component10.module.css";

// const selectInputStyles = {
//   borderColor: "#9d9d9d",
//   borderStyle: "SOLID",
//   borderTopWidth: "1px",
//   borderRightWidth: "1px",
//   borderBottomWidth: "1px",
//   borderLeftWidth: "1px",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   width: "100%",
//   height: "56px",
//   "& .MuiInput-underline:before": { borderBottom: "none" },
//   "& .MuiInput-underline:after": { borderBottom: "none" },
//   "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
//     borderBottom: "none",
//   },
//   "& .MuiInputBase-root": {
//     height: "100%",
//     fontFamily: "Cairo, sans-serif",
//     transform: "rotate(180deg)",
//   },
//   "& .MuiInputBase-input": {
//     color: "#666",
//     fontSize: 16,
//     fontWeight: "SemiBold",
//     fontFamily: "Cairo, sans-serif",
//     textAlign: "left",
//     padding: "0 !important",
//   },
// };

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

// const FrameComponent10 = ({ icon, propGap, propGap1 }) => {
//   const frameDiv1Style = useMemo(() => {
//     return {
//       gap: propGap,
//     };
//   }, [propGap]);

//   const frameDiv2Style = useMemo(() => {
//     return {
//       gap: propGap1,
//     };
//   }, [propGap1]);

//   return (
//     <div className={styles.frameParent}>
//       <div
//         className={styles.textInputsinputRegularParent}
//         style={frameDiv1Style}
//       >
//         <div className={styles.textInputsinputRegular}>
//           <b className={styles.b}>جنسيه المسلم</b>
//           <TextField
//             className={styles.inputField}
//             placeholder="الجنسية"
//             variant="outlined"
//             dir={"rtl"}
//             sx={{
//               "& fieldset": { borderColor: "#9d9d9d" },
//               "& .MuiInputBase-root": {
//                 height: "56px",
//                 backgroundColor: "#fff",
//                 paddingLeft: "16px",
//                 borderRadius: "8px",
//               },
//               "& .MuiInputBase-input": {
//                 paddingLeft: "-14px",
//                 color: "#666",
//                 // Apply font family and styles to input itself
//                 fontFamily: "Cairo, sans-serif",
//                 transform: "rotate(-180deg) !important",
//               },
//               "& .MuiInputBase-input::placeholder": {
//                 // Styling placeholder
//                 fontFamily: "Cairo, sans-serif",
//                 color: "#999",
//                 transform: "rotate(-360deg) !important",
//               },
//             }}
//           />
//         </div>

//         <div className={styles.input}>
//           <div className={styles.input1}>
//             <b className={styles.b1}>اختيار الجنس</b>
//             <TextField
//               className={styles.form}
//               variant="standard"
//               select
//               value={1}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment
//                     position="start"
//                     style={{ marginLeft: "15px", marginRight: "242px" }}
//                   >
//                     <img
//                       width="24px"
//                       height="24px"
//                       src="/keyboard-arrow-down.svg"
//                     />
//                   </InputAdornment>
//                 ),
//               }}
//               SelectProps={{ IconComponent: () => null }}
//               sx={selectInputStyles}
//             >
//               <MenuItem value={1}>الجنس</MenuItem>
//             </TextField>
//             <div className={styles.drowdownList}>
//               <div className={styles.dropdownItem}>
//                 <div className={styles.textWrap}>
//                   <div className={styles.option}>Option</div>
//                 </div>
//               </div>
//               <div className={styles.dropdownItem1}>
//                 <div className={styles.textWrap1}>
//                   <div className={styles.option1}>Option</div>
//                 </div>
//               </div>
//               <div className={styles.dropdownItem2}>
//                 <div className={styles.textWrap2}>
//                   <div className={styles.option2}>Option</div>
//                 </div>
//               </div>
//               <div className={styles.dropdownItem3}>
//                 <div className={styles.textWrap3}>
//                   <div className={styles.option3}>Option</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className={styles.textInputsinputRegularGroup}
//         style={frameDiv2Style}
//       >
//         <div className={styles.textInputsinputRegular1}>
//           <b className={styles.b2}>اسم الداعية</b>

//           <TextField
//             className={styles.inputField}
//             placeholder="اسم الداعية "
//             variant="outlined"
//             dir={"rtl"}
//             sx={textInputStyles}
//           />
//         </div>

//         <div className={styles.input2}>
//           <div className={styles.input3}>
//             <b className={styles.b3}>حالة الدوام</b>
//             <TextField
//               className={styles.form1}
//               variant="standard"
//               select
//               value={1}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment
//                     position="start"
//                     style={{ marginLeft: "15px", marginRight: "177px" }}
//                   >
//                     <img
//                       width="24px"
//                       height="24px"
//                       src="/keyboard-arrow-down-1.svg"
//                     />
//                   </InputAdornment>
//                 ),
//               }}
//               SelectProps={{ IconComponent: () => null }}
//               sx={selectInputStyles}
//             >
//               <MenuItem
//                 value={1}
//                 sx={{
//                   background: "red",
//                 }}
//               >
//                 اختيار حالة الدوام
//               </MenuItem>
//             </TextField>
//             <div className={styles.drowdownList1}>
//               <div className={styles.dropdownItem4}>
//                 <div className={styles.textWrap4}>
//                   <div className={styles.option4}>Option</div>
//                 </div>
//               </div>
//               <div className={styles.dropdownItem5}>
//                 <div className={styles.textWrap5}>
//                   <div className={styles.option5}>Option</div>
//                 </div>
//               </div>
//               <div className={styles.dropdownItem6}>
//                 <div className={styles.textWrap6}>
//                   <div className={styles.option6}>Option</div>
//                 </div>
//               </div>
//               <div className={styles.dropdownItem7}>
//                 <div className={styles.textWrap7}>
//                   <div className={styles.option7}>Option</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrameComponent10;

import styles from "./frame-component10.module.scss";

const FrameComponent10 = () => {
  return (
    <div className={styles.frameParent} dir="rtl">
      <div className={styles.textInputsinputRegularParent}>
        {/* Nationality Input */}

        <div className={styles.textInputsinputRegular1}>
          <input
            className="w-full pr-3 h-[56px] bg-white pl-4 rounded-lg border border-gray-400 text-gray-600  transform   placeholder-gray-400 "
            placeholder="اسم الداعية"
            type="text"
            dir="rtl"
          />
          <b className={styles.b2}>اسم الداعية</b>
        </div>
        {/* Work Status Selection */}
        <div className={styles.input2}>
          <div className={styles.input3}>
            <div className="relative w-full">
              <select className="w-full h-[56px] bg-white border border-gray-400 rounded-lg pl-4 px-3 text-gray-600 ">
                <option value="1">اختيار حالة الدوام</option>
              </select>
            </div>
            <b className={styles.b3}>حالة الدوام</b>
          </div>
        </div>
      </div>

      <div className={styles.textInputsinputRegularGroup}>
        {/* Name Input */}
        <div className={styles.textInputsinputRegular}>
          <input
            className="w-full h-[56px] bg-white pl-4 rounded-lg border border-gray-400 text-gray-600 pr-3 transform   placeholder-gray-400 "
            placeholder="الجنسية"
            type="text"
            dir="rtl"
          />
          <b className={styles.b}>جنسيه المسلم</b>
        </div>

        {/* Gender Selection */}
        <div className={styles.input}>
          <div className={styles.input1}>
            <div className="relative w-full">
              <select className="w-full h-[56px] bg-white border border-gray-400 rounded-lg pl-4 pr-3 text-gray-600 ">
                <option value="1">الجنس</option>
              </select>
            </div>
            <b className={styles.b1}>اختيار الجنس</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
