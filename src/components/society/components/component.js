import { Button } from "@mui/material";
import styles from "./component.module.css";
import Link from "next/link";

const Component = () => {
  return (
    <div className={styles.component3}>
      <div className={styles.navbar}>
        <header className={styles.conditionChecker} />
        <div className={styles.iterationManager}>
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
        <div className={styles.navbarInner}>
          <div className={styles.parent}>
            <div className={styles.div}>حوكمه الجمعيات</div>
            <div className={styles.div1}>التطوع</div>
            <div className={styles.div2}>معتمد</div>
            <div className={styles.div3}>وثائق الشهادة</div>
            <div className={styles.div4}>الجمعيات</div>
            <Link href="/" className={styles.div5}>
              الصفحة الرئيسية
            </Link>
          </div>
        </div>
        <img
          className={styles.logo1Icon}
          loading="lazy"
          alt=""
          src="/logo-1@2x.png"
        />
      </div>
      <div className={styles.component3Child} />
    </div>
  );
};

export default Component;
