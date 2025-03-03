import { motion } from "framer-motion";
import styles from "./data-gatherer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const DataGatherer = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const data = [
    { title: "الصفحة الرئيسية", link: "/" },
    { title: "الجمعيات", link: "/societies" },
    { title: "وثائق الشهادة ", link: "/certification-documents" },
    { title: "معتمد", link: "/certified" },
    { title: "التطوع", link: "/volunteering" },
    { title: "حوكمة المجتمعات", link: "/governance-of-societies" },
  ];

  return (
    <>
      <header className={styles.dataGatherer}>
        <div className={styles.dataGathererChild} />

        {/* Login Button */}
        <div className={styles.shapeArray}>
          <button className={`${styles.button} w-full`}>تسجيل دخول</button>
        </div>

        <div className={styles.burger_menu} onClick={() => setMenu(true)}>
          <button className={`${styles.button} w-full`}>
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Navigation */}
        <div className={styles.boxBundlerWrapper}>
          <div className={styles.boxBundler}>
            {data.reverse().map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${styles.div} ${
                  router.pathname === item.link ? styles.active : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <Link href={"/"}>
          <img
            className={styles.logo1Icon}
            loading="lazy"
            alt="logo"
            src="/logo-1@2x.png"
          />
        </Link>
      </header>
      {menu && (
        <div className={styles.layer} dir="rtl" onClick={() => setMenu(false)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className={styles.menu_container}
          >
            <div className="container">
              <ul>
                {data.map((link, idx) => (
                  <li className={""} key={idx}>
                    <Link href={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default DataGatherer;
