import { useMemo } from "react";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ prop, propDisplay, propMinWidth }) => {
  const div1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={styles.parent}>
      <div className={styles.div} style={div1Style}>
        {prop}
      </div>
      <div className={styles.dataCollector}>
        <div className={styles.shapeStack} />
      </div>
    </div>
  );
};

export default FrameComponent4;
