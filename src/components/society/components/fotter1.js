import styles from "./fotter1.module.css";

const Fotter1 = () => {
  return (
    <footer className={styles.fotter}>
      <div className={styles.fotterChild} />
      <div className={styles.fotterInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <h3 className={styles.h3}>تواصل معنا</h3>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>البريد الالكتروني</div>
          </div>
          <textarea
            className={styles.frameItem}
            placeholder="الرسالة"
            rows={4}
            cols={17}
          />
          <div className={styles.sendButton}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <b className={styles.b}>ارسال</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.websiteFooter}>
        <div className={styles.parent}>
          <h3 className={styles.h31}>
            <p className={styles.p}>الموقع الالكتروني للجنة التنسيقية</p>
            <p className={styles.p1}>لجمعيات الدعوة بالمملكة</p>
          </h3>
          <div className={styles.facebookTwitter}>
            <img className={styles.logo1Icon} alt="" src="/logo-1-11@2x.png" />
          </div>
        </div>
        <div className={styles.devicesInstanceWrapper}>
          <div className={styles.devicesInstance}>
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className={styles.twitterIcon}
              loading="lazy"
              alt=""
              src="/twitter.svg"
            />
            <img
              className={styles.snapchatIcon}
              loading="lazy"
              alt=""
              src="/snapchat@2x.png"
            />
            <img
              className={styles.youtubeIcon}
              loading="lazy"
              alt=""
              src="/youtube.svg"
            />
          </div>
        </div>
      </div>
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent1}>
                <div className={styles.container}>
                  <h3 className={styles.h32}>ارقام التواصل</h3>
                </div>
                <img
                  className={styles.devicesIcon}
                  loading="lazy"
                  alt=""
                  src="/devices.svg"
                />
              </div>
            </div>
            <div className={styles.div1}>01231234124 - 231231202</div>
          </div>
          <div className={styles.inputAreaFooter}>
            <div className={styles.frameParent2}>
              <div className={styles.emailInputParent}>
                <div className={styles.emailInput}>
                  <h3 className={styles.h33}>البريد الالكتروني</h3>
                </div>
                <img
                  className={styles.communicationIcon}
                  loading="lazy"
                  alt=""
                  src="/communication.svg"
                />
              </div>
              <div className={styles.silimilongmailcomWrapper}>
                <h3 className={styles.silimilongmailcom}>
                  silimilon@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter1;
