import styles from "./newsbar.module.css";
import Marquee from "react-fast-marquee";

const Newsbar = () => {
  return (
    <div className={styles.newsbar}>
      <div className={styles.newsbarChild} />
      <div className={styles.component1}>
        <div className={styles.frameParent}>
          <Marquee
            speed={200}
            pauseOnHover={true}
            gradient={true}
            gradientColor={"#265fa22b"}
            gradientWidth={100}
            pauseOnClick={true}
          >
            <div className={styles.parent}>
              <div className={styles.div}>زياده عدد المسلمين 200 فرد اليوم</div>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>زياده عدد المسلمين 200 فرد اليوم</div>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>زياده عدد المسلمين 200 فرد اليوم</div>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>زياده عدد المسلمين 200 فرد اليوم</div>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>زياده عدد المسلمين 200 فرد اليوم</div>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>زياده عدد المسلمين 200 فرد اليوم</div>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </Marquee>

          {/* <div className={styles.group}>
            <div className={styles.div1}>زياده عدد المسلمين 200 فرد اليوم</div>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameItem} />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.div2}>زياده عدد المسلمين 200 فرد اليوم</div>
            <div className={styles.ellipseFrame}>
              <div className={styles.frameInner} />
            </div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.ellipseDiv} />
            <div className={styles.div3}>زياده عدد المسلمين 200 فرد اليوم</div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameChild1} />
            <div className={styles.div4}>زياده عدد المسلمين 200 فرد اليوم</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild2} />
            <div className={styles.div5}>زياده عدد المسلمين 200 فرد اليوم</div>
          </div>
          <div className={styles.ellipseParent1}>
            <div className={styles.frameChild3} />
            <div className={styles.div6}>زياده عدد المسلمين 200 فرد اليوم</div>
          </div>
          <div className={styles.ellipseParent2}>
            <div className={styles.frameChild4} />
            <div className={styles.div7}>زياده عدد المسلمين 200 فرد اليوم</div>
          </div>
          <div className={styles.ellipseParent3}>
            <div className={styles.frameChild5} />
            <div className={styles.div8}>زياده عدد المسلمين 200 فرد اليوم</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Newsbar;
