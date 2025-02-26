import FrameComponent4 from "./frame-component4";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.inputProcessorWrapper}>
      <div className={styles.inputProcessor}>
        <FrameComponent4
          prop="شركائنا"
          propDisplay="inline-block"
          propMinWidth="113px"
        />
        <div className={styles.errorHandlerWrapper}>
          <div className={styles.errorHandler}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/rectangle-30@2x.png"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/rectangle-29@2x.png"
              />
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/rectangle-28@2x.png"
              />
              <img
                className={styles.rectangleIcon}
                loading="lazy"
                alt=""
                src="/rectangle-30@2x.png"
              />
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/rectangle-28@2x.png"
              />
              <img
                className={styles.frameChild2}
                loading="lazy"
                alt=""
                src="/rectangle-29@2x.png"
              />
              <img
                className={styles.frameChild3}
                loading="lazy"
                alt=""
                src="/rectangle-30@2x.png"
              />
            </div>
            <div className={styles.errorHandlerInner}>
              <div className={styles.parent}>
                <div className={styles.div}>تمويل المملكه</div>
                <div className={styles.div1}>تمويل المملكه</div>
                <div className={styles.div2}>دبي للتأمين</div>
                <div className={styles.div3}>تمويل المملكه</div>
                <div className={styles.div4}>دبي للتأمين</div>
                <div className={styles.div5}>تمويل المملكه</div>
                <div className={styles.div6}>دبي للتأمين</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
