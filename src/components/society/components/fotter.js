import styles from "./fotter.module.css";

const Fotter = ({ logo1 }) => {
  return (
    <footer className={styles.fotter}>
      <div className={styles.fotterChild} />
      <div className={styles.fotterInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>تواصل معنا</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div1}>البريد الالكتروني</div>
          </div>
          <textarea
            dir="rtl"
            className={styles.frameItem}
            placeholder="الرسالة"
            rows={4}
            cols={17}
          />
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <b className={styles.b}>ارسال</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <div className={styles.div2}>
            <p className={styles.p}>الموقع الالكتروني للجنة التنسيقية</p>
            <p className={styles.p1}>لجمعيات الدعوة بالمملكة</p>
          </div>
          <div className={styles.logo1Wrapper}>
            <img className={styles.logo1Icon} alt="" src={logo1} />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.facebookParent}>
            <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
            <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
            <img
              className={styles.snapchatIcon}
              alt=""
              src="/snapchat@2x.png"
            />
            <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
          </div>
        </div>
      </div>
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent3}>
                <div className={styles.container}>
                  <b className={styles.b1}>ارقام التواصل</b>
                </div>
                <img
                  className={styles.devicesIcon}
                  loading="lazy"
                  alt=""
                  src="/devices.svg"
                />
              </div>
            </div>
            <div className={styles.div3}>01231234124 - 231231202</div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.frame}>
                  <b className={styles.b2}>البريد الالكتروني</b>
                </div>
                <img
                  className={styles.communicationIcon}
                  loading="lazy"
                  alt=""
                  src="/communication.svg"
                />
              </div>
              <div className={styles.routingHub}>
                <div className={styles.silimilongmailcom}>
                  silimilon@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
