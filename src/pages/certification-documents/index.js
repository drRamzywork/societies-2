import FrameComponent11 from "@/society/components/frame-component11";
import FrameComponent10 from "@/society/components/frame-component10";
import FrameComponent9 from "@/society/components/frame-component9";
import ContactFooter from "@/society/components/contact-footer";
import styles from "./index.module.css";
import DataGatherer from "@/society/components/data-gatherer";
import Fotter from "@/components/society/components/fotter";

const Page2 = () => {
  return (
    <div className={styles.page21}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/6334210-1@2x.png" />
          <img className={styles.icon1} alt="" src="/6334210-2@2x.png" />
        </div>
        <div className={styles.group}>
          <img className={styles.icon2} alt="" src="/6334210-1-1@2x.png" />
          <img className={styles.icon3} alt="" src="/6334210-2-1@2x.png" />
        </div>
        <div className={styles.container}>
          <img className={styles.icon4} alt="" src="/6334210-1-1@2x.png" />
          <img className={styles.icon5} alt="" src="/6334210-2-1@2x.png" />
        </div>
      </div>
      <section className={styles.frameGroup}>
        {/* <FrameComponent11 /> */}
        <DataGatherer />
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.wrapper}>
              <h1 className={styles.h1}>وثائق الشهادة للمسلمين الجدد</h1>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frame}>
                    <h1 className={styles.h11}>تسجيل المسلمين الجدد</h1>
                  </div>
                  <div className={styles.buttonsbutton2Parent}>
                    <div className={styles.buttonsbutton2}>
                      <div className={styles.text}>
                        <div className={styles.div}>اضافة داعية</div>
                      </div>
                    </div>
                    <div className={styles.buttonsbutton1}>
                      <div className={styles.buttonsbutton11}>
                        <div className={styles.text1}>
                          <div className={styles.go}>داعية مسجل</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <FrameComponent10 />
                  <FrameComponent9 />
                </div>
                <ContactFooter />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.infoParent}>
        <img className={styles.infoIcon} alt="" src="/info.svg" />
        <div className={styles.buttonsbutton4}>
          <div className={styles.text2}>
            <div className={styles.div1}>طباعه الوثيقة</div>
          </div>
        </div>
      </div>
      <Fotter logo1="/logo-1-11@2x.png" />
    </div>
  );
};

export default Page2;
