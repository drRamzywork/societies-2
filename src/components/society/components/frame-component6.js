import { Button } from "@mui/material";
import styles from "./frame-component6.module.css";

const FrameComponent6 = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <header className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.buttonWrapper}>
            <Button
              className={styles.button}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "#265fa2",
                borderRadius: "9px",
                "&:hover": { background: "#265fa2" },
                height: 47,
              }}
            >
              تسجيل دخول
            </Button>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.parent}>
              <div className={styles.div}>حوكمه الجمعيات</div>
              <div className={styles.div1}>التطوع</div>
              <div className={styles.div2}>معتمد</div>
              <div className={styles.div3}>وثائق الشهادة</div>
              <div className={styles.div4}>الجمعيات</div>
              <div className={styles.group}>
                <div className={styles.div5}>الصفحة الرئيسية</div>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameItem} />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.logo1Icon}
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
        </header>
      </div>
    </div>
  );
};

export default FrameComponent6;
