// import { useEffect, useMemo, useRef } from "react";
// import { Button } from "@mui/material";
// import styles from "./group-component.module.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import {
//   Pagination,
//   Navigation,
//   EffectCoverflow,
//   Autoplay,
// } from "swiper/modules";
// import Link from "next/link";

// const GroupComponent = ({
//   rectangle35,
//   propBackgroundImage,
//   propPadding,
//   propPadding1,
//   societiesData,
// }) => {
//   const maskGroupStyle = useMemo(
//     () => ({
//       backgroundImage: `url(${propBackgroundImage})`,
//     }),
//     [propBackgroundImage]
//   );

//   const collisionControllerStyle = useMemo(
//     () => ({
//       padding: propPadding,
//     }),
//     [propPadding]
//   );

//   const buttonsButton3Style = useMemo(
//     () => ({
//       padding: propPadding1,
//     }),
//     [propPadding1]
//   );

//   return (
//     <>
//       {societiesData.map((area, index) => (
//         <>
//           <h2 className={styles.h2}>{area.name}</h2>
// <Swiper
//   dir="rtl"
//   loop={false}
//   className={styles.societiesSwiper}
//   slidesPerView={4.5}
// >
//   {area.societies.map((society, sIndex) => (
//     <SwiperSlide key={sIndex}>
//       <Link
//         href={`/society/${society.id}`}
//         className={styles.maskGroupParent}
//       >
//         <div className={styles.maskGroup} style={maskGroupStyle}>
//           <img
//             className={styles.maskGroupChild}
//             alt=""
//             src={rectangle35 || "path/to/default/image"} // Provide a default image path
//           />
//           <Button
//             className={styles.transitionTransmuter}
//             variant="contained"
//             sx={{
//               textTransform: "none",
//               color: "#fff",
//               fontSize: "20",
//               background:
//                 "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
//               borderRadius: "0px 0px 20px 20px",
//               "&:hover": {
//                 background:
//                   "linear-gradient(90deg, rgba(38, 95, 162, 0.64), rgba(36, 177, 116, 0.64))",
//               },
//               height: 49,
//             }}
//           >
//             {society.name}
//           </Button>
//         </div>
//         <div
//           className={styles.collisionController}
//           style={collisionControllerStyle}
//         >
//           <div className={styles.buttonsbutton7}>
//             <div
//               className={styles.buttonsbutton3}
//               style={buttonsButton3Style}
//             >
//               <div className={styles.text}>
//                 <div className={styles.go}>عرض المزيد</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </SwiperSlide>
//   ))}
// </Swiper>
//         </>
//       ))}
//     </>
//   );
// };

// export default GroupComponent;
import { useMemo } from "react";
import styles from "./group-component.module.scss"; // ✅ Import updated SCSS file
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";

const GroupComponent = ({
  rectangle35,
  propBackgroundImage,
  propPadding,
  propPadding1,
  societiesData,
}) => {
  const maskGroupStyle = useMemo(
    () => ({ backgroundImage: `url(${propBackgroundImage})` }),
    [propBackgroundImage]
  );

  const collisionControllerStyle = useMemo(
    () => ({ padding: propPadding }),
    [propPadding]
  );

  const buttonsButton3Style = useMemo(
    () => ({ padding: propPadding1 }),
    [propPadding1]
  );

  return (
    <>
      {societiesData.map((area, index) => (
        <>
          <h2 className={styles.h2}>{area.name}</h2>
          {/* <Swiper
            dir="rtl"
            loop={false}
            className={styles.societiesSwiper}
            slidesPerView={4.5}
          >
            {area.societies.map((society, sIndex) => (
              <SwiperSlide key={sIndex}>
                <Link
                  href={`/society/${society.id}`}
                  className={styles.maskGroupParent}
                >
                  <div className={styles.maskGroup} style={maskGroupStyle}>
                    <img
                      className={styles.maskGroupChild}
                      alt=""
                      src={rectangle35 || "path/to/default/image"} // Default image fallback
                    />
                    <button className={styles.transitionTransmuter}>
                      {society.name}
                    </button>
                  </div>
                  <div
                    className={styles.collisionController}
                    style={collisionControllerStyle}
                  >
                    <div className={styles.buttonsbutton7}>
                      <div
                        className={styles.buttonsbutton3}
                        style={buttonsButton3Style}
                      >
                        <div className={styles.text}>
                          <div className={styles.go}>عرض المزيد</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper> */}

          <Swiper
            dir="rtl"
            loop={false}
            className={styles.societiesSwiper}
            slidesPerView={4.5}
          >
            {area.societies.map((society, sIndex) => (
              <SwiperSlide key={sIndex}>
                <Link
                  href={`/society/${society.id}`}
                  className={styles.maskGroupParent}
                >
                  <div className={styles.maskGroup} style={maskGroupStyle}>
                    <img
                      className={styles.maskGroupChild}
                      alt=""
                      src={rectangle35 || "path/to/default/image"} // Provide a default image path
                    />
                    <button className={styles.transitionTransmuter}>
                      {society.name}
                    </button>{" "}
                  </div>
                  <div
                    className={styles.collisionController}
                    style={collisionControllerStyle}
                  >
                    <div className={styles.buttonsbutton7}>
                      <div
                        className={styles.buttonsbutton3}
                        style={buttonsButton3Style}
                      >
                        <div className={styles.text}>
                          <div className={styles.go}>عرض المزيد</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ))}
    </>
  );
};

export default GroupComponent;
