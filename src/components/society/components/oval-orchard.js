import GroupComponent from "./group-component";
import styles from "./oval-orchard.module.css";

const OvalOrchard = () => {
  return (
    <section className={styles.ovalOrchard}>
      <div className={styles.pathwayPlannerParent}>
        <div className={styles.pathwayPlanner}>
          <h2 className={styles.h2}>الجمعيات</h2>
        </div>
        <h2 className={styles.h21}>جمعيات الرياض</h2>
        <div className={styles.canvasCanvasWrapper}>
          <div className={styles.canvasCanvas}>
            <div className={styles.alignAlchemist}>
              <div className={styles.distributeDistributor}>
                <img
                  className={styles.arrowLeftIcon}
                  loading="lazy"
                  alt=""
                  src="/arrow-left1.svg"
                />
              </div>
            </div>
            <div className={styles.layerLayered}>
              <GroupComponent rectangle35="/rectangle-35@2x.png" />
              <GroupComponent
                rectangle35="/rectangle-35@2x.png"
                propBackgroundImage="url('/rectangle-35@2x.png')"
                propPadding="0px var(--padding-40xl) 0px var(--padding-38xl-5)"
                propPadding1="var(--padding-smi) 0px"
              />
              <GroupComponent
                rectangle35="/rectangle-35@2x.png"
                propBackgroundImage="url('/rectangle-35@2x.png')"
                propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                propPadding1="var(--padding-smi) var(--padding-12xs)"
              />
              <GroupComponent
                rectangle35="/rectangle-35@2x.png"
                propBackgroundImage="url('/rectangle-35@2x.png')"
                propPadding="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
                propPadding1="var(--padding-smi) var(--padding-12xs)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OvalOrchard;
