import FrameComponent8 from "./frame-component8";
import styles from "./frame-component7.module.css";

const FrameComponent7 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.systemParent}>
            <img
              className={styles.systemIcon}
              loading="lazy"
              alt=""
              src="/system.svg"
            />
            <b className={styles.b}>بيانات الجمعية</b>
          </div>
          <div className={styles.componentWrapper}>
            <FrameComponent8 />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <b className={styles.b1}>الحساب البنكي</b>
          <div className={styles.wrapper}>
            <div className={styles.div}>02302032123</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.container}>
            <b className={styles.b2}>{`الحي `}</b>
          </div>
          <div className={styles.div1}>الرياض</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frame}>
            <b className={styles.b3}>اسم الجمعية</b>
          </div>
          <div className={styles.div2}>جمعية الرياض العامة</div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.dataProcessorWrapper}>
              <div className={styles.dataProcessor}>
                <b className={styles.b4}>رقم الترخيص</b>
                <div className={styles.outputAggregator}>
                  <div className={styles.errorHandler}>21312312</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.group}>
                <b className={styles.b5}>المنطقة</b>
                <div className={styles.wrapper1}>
                  <div className={styles.div3}>الرياض</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.wrapper2}>
                <b className={styles.b6}>رقم الواتساب</b>
              </div>
              <div className={styles.div4}>+102302032123</div>
            </div>
          </div>
          <div className={styles.logicGateParent}>
            <div className={styles.logicGate}>
              <div className={styles.wrapper3}>
                <b className={styles.b7}>البريد الالكتروني</b>
              </div>
              <div className={styles.communitygmailcom}>
                community@gmail.com
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameParent4}>
                <div className={styles.wrapper4}>
                  <b className={styles.b8}>رقم الجوال</b>
                </div>
                <div className={styles.div5}>+102302032123</div>
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <div className={styles.parent1}>
                <b className={styles.b9}>الموقع الالكتروني</b>
                <div className={styles.alCommunitynetWrapper}>
                  <div className={styles.alCommunitynet}>example.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameWrapper5}>
              <div className={styles.parent2}>
                <b className={styles.b10}>الاسم المختصر</b>
                <div className={styles.wrapper5}>
                  <div className={styles.div6}>جمعية الرياض</div>
                </div>
              </div>
            </div>
            <div className={styles.parent3}>
              <b className={styles.b11}>سنة بداية العمل</b>
              <div className={styles.wrapper6}>
                <div className={styles.div7}>2020</div>
              </div>
            </div>
            <div className={styles.frameWrapper6}>
              <div className={styles.parent4}>
                <b className={styles.b12}>سنة التأسيس</b>
                <div className={styles.wrapper7}>
                  <div className={styles.div8}>2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper7}>
        <div className={styles.frameParent6}>
          <div className={styles.wrapper8}>
            <b className={styles.b13}>مواقع التواصل الاجتماعي</b>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.frameParent8}>
              <div className={styles.brandsWrapper}>
                <img
                  className={styles.brandsIcon}
                  loading="lazy"
                  alt=""
                  src="/brands.svg"
                />
              </div>
              <div className={styles.alCommunity}>Facebook</div>
            </div>
            <div className={styles.frameParent9}>
              <div className={styles.brandsContainer}>
                <img
                  className={styles.brandsIcon1}
                  alt=""
                  src="/brands-1.svg"
                />
              </div>
              <div className={styles.alCommunity1}>Twitter</div>
            </div>
            <div className={styles.frameWrapper8}>
              <div className={styles.frameParent10}>
                <div className={styles.brandsFrame}>
                  <img
                    className={styles.brandsIcon2}
                    alt=""
                    src="/brands-2.svg"
                  />
                </div>
                <div className={styles.alCommunity2}>Youtube</div>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.brandsWrapper1}>
                <img
                  className={styles.brandsIcon3}
                  alt=""
                  src="/brands-3.svg"
                />
              </div>
              <div className={styles.alCommunity3}>Instagram</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
