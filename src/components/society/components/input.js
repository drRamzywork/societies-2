import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import styles from "./input.module.css";
const selectInputStyles = {
  borderColor: "#9d9d9d",
  borderStyle: "SOLID",
  borderTopWidth: "1px",
  borderRightWidth: "1px",
  borderBottomWidth: "1px",
  borderLeftWidth: "1px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  width: "100%",
  height: "56px",
  "& .MuiInput-underline:before": { borderBottom: "none" },
  "& .MuiInput-underline:after": { borderBottom: "none" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottom: "none",
  },
  "& .MuiInputBase-root": {
    height: "100%",
    fontFamily: "Cairo, sans-serif",
    transform: "rotate(180deg)",
  },
  "& .MuiInputBase-input": {
    color: "#666",
    fontSize: 16,
    fontWeight: "SemiBold",
    fontFamily: "Cairo, sans-serif",
    textAlign: "left",
    padding: "0 !important",
  },
};
const Input = ({ prop, propAlignSelf, propWidth }) => {
  const inputStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className={styles.input} style={inputStyle}>
      <div className={styles.input1}>
        <b className={styles.b}>{prop}</b>
        <TextField
          className={styles.form}
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "15px", marginRight: "195px" }}
              >
                <img
                  width="24px"
                  height="24px"
                  src="/keyboard-arrow-down.svg"
                />
              </InputAdornment>
            ),
          }}
          SelectProps={{ IconComponent: () => null }}
          sx={selectInputStyles}
        >
          <MenuItem value={1}>اختيار الجمعية</MenuItem>
        </TextField>
        <div className={styles.drowdownList}>
          <div className={styles.dropdownItem}>
            <div className={styles.textWrap}>
              <div className={styles.option}>Option</div>
            </div>
          </div>
          <div className={styles.dropdownItem1}>
            <div className={styles.textWrap1}>
              <div className={styles.option1}>Option</div>
            </div>
          </div>
          <div className={styles.dropdownItem2}>
            <div className={styles.textWrap2}>
              <div className={styles.option2}>Option</div>
            </div>
          </div>
          <div className={styles.dropdownItem3}>
            <div className={styles.textWrap3}>
              <div className={styles.option3}>Option</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
