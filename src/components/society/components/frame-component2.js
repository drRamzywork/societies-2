import FrameComponent4 from "./frame-component4";
import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-31@2x.png"
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <FrameComponent4
                prop="من نحن"
                propDisplay="inline-block"
                propMinWidth="109px"
              />
              <div className={styles.wrapper}>
                <div className={styles.div}>
                  منصة تجمع الجمعيات الدولية في مكان واحد هي تطبيق رائع يوفر
                  منصة مركزية لتبادل المعرفة والخبرات بين الجمعيات الدولية
                  المختلفة. تهدف هذه المنصة إلى تسهيل التواصل والتعاون بين
                  الجمعيات الدولية في مختلف المجالات، سواء كانت تتعلق بالتنمية
                  المستدامة، حقوق الإنسان، الصحة، التعليم، أو أي مجال آخر.
                </div>
              </div>
            </div>
            <div className={styles.div1}>
              تهدف هذه المنصة إلى تسهيل التواصل والتعاون بين الجمعيات الدولية في
              مختلف المجالات
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
