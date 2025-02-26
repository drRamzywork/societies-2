import { useMemo } from "react";
import styles from "./input-port.module.css";

const InputPort = ({ prop, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.inputPort}>
      <div className={styles.div}>{prop}</div>
      <div className={styles.inputPortInner} style={frameDivStyle}>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default InputPort;
