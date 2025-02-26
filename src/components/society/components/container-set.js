import { Button } from "@mui/material";
import styles from "./container-set.module.css";
import Link from "next/link";

const ContainerSet = () => {
  return (
    <header className={styles.containerSet}>
      <div className={styles.containerSetChild} />
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
      <div className={styles.containerSetInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>حوكمه الجمعيات</div>
          </div>
          <div className={styles.div1}>التطوع</div>
          <div className={styles.frameGroup}>
            <div className={styles.container}>
              <div className={styles.div2}>معتمد</div>
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frame}>
            <div className={styles.div3}>وثائق الشهادة</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div4}>الجمعيات</div>
          </div>
          <Link href="/" className={styles.div5}>
            الصفحة الرئيسية
          </Link>{" "}
        </div>
      </div>
      <img
        className={styles.logo1Icon}
        loading="lazy"
        alt=""
        src="/logo-1@2x.png"
      />
    </header>
  );
};

export default ContainerSet;
