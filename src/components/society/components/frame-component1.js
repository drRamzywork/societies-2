import FrameComponent4 from "./frame-component4";
import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <FrameComponent4
          prop="انجازاتنا"
          propDisplay="inline-block"
          propMinWidth="115px"
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.groupDiv}>
              <div className={styles.wiredFlat1992ThePope2Wrapper}>
                <img
                  className={styles.wiredFlat1992ThePope2Icon}
                  loading="lazy"
                  alt=""
                  src="/wiredflat1992thepope-2@2x.png"
                />
              </div>
              <div className={styles.div}>عدد المسلمون الجدد</div>
              <div className={styles.wrapper}>
                <b className={styles.b}>120</b>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.box1Wrapper}>
                <img
                  className={styles.box1Icon}
                  loading="lazy"
                  alt=""
                  src="/box-1@2x.png"
                />
              </div>
              <div className={styles.div1}>الخدمات المقدمه</div>
              <div className={styles.container}>
                <b className={styles.b1}>120</b>
              </div>
            </div>
            <div className={styles.growth1Parent}>
              <img
                className={styles.growth1Icon}
                loading="lazy"
                alt=""
                src="/growth-1@2x.png"
              />
              <div className={styles.dataAggregator}>
                <div className={styles.div2}>المستفدين منا</div>
              </div>
              <div className={styles.frame}>
                <b className={styles.b2}>12,000+</b>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.wiredFlat1992ThePope1Wrapper}>
                <img
                  className={styles.wiredFlat1992ThePope1Icon}
                  loading="lazy"
                  alt=""
                  src="/wiredflat1992thepope-1@2x.png"
                />
              </div>
              <div className={styles.div3}>عدد المسلمون الجدد</div>
              <div className={styles.frameDiv}>
                <b className={styles.b3}>12,000+</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
