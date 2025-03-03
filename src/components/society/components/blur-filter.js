import styles from "./blur-filter.module.scss";

const BlurFilter = ({ societyDetails }) => {
  return (
    <div className={styles.blurFilter}>
      <div className={styles.brightnessFilter}>
        <div className={styles.contrastFilter}>
          <div className={styles.saturationFilter}>
            <div className={styles.hueRotateFilter}>
              <div className={styles.div}>{societyDetails?.name}</div>
              <div className={styles.grayscaleFilter}>
                <div className={styles.opacityFilter}>
                  <div className={styles.dropShadowFilter}>
                    <div className={styles.glowFilter}>
                      <div className={styles.div1}>
                        {societyDetails?.address}
                      </div>
                      <div className={styles.mapWrapper}>
                        <img
                          className={styles.mapIcon}
                          loading="lazy"
                          alt=""
                          src="/map.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.alCommunitygmailcomParent}>
                    <div className={styles.alCommunitygmailcom}>
                      {societyDetails?.email}
                    </div>
                    <div className={styles.communicationWrapper}>
                      <img
                        className={styles.communicationIcon}
                        loading="lazy"
                        alt=""
                        src="/communication1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.dropShadowFilter1}>
                    <div className={styles.parent}>
                      <div className={styles.div2}>
                        {" "}
                        {societyDetails.phone ? societyDetails.phone : "-"}
                      </div>
                      <div className={styles.devicesWrapper}>
                        <img
                          className={styles.devicesIcon}
                          loading="lazy"
                          alt=""
                          src="/devices1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b className={styles.b}>عن الجمعية</b>
        </div>
        <div className={styles.brightnessFilterInner}>
          <div className={styles.group}>
            <div className={styles.div3}>
              منصة تجمع الجمعيات الدولية في مكان واحد هي تطبيق رائع يوفر منصة
              مركزية لتبادل المعرفة والخبرات بين الجمعيات الدولية المختلفة. تهدف
              هذه المنصة إلى تسهيل التواصل والتعاون بين الجمعيات الدولية في
              مختلف المجالات، سواء كانت تتعلق بالتنمية المستدامة، حقوق الإنسان،
              الصحة، التعليم، أو أي مجال آخر.
            </div>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurFilter;
