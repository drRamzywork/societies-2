// import styles from "./frame-component5.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// const FrameComponent5 = () => {
//   return (
//     <>
//       <div className={styles.carouselWrapper}>
//         <div className={styles.carousel}>
//           <Swiper
//             modules={[Pagination, Navigation, Autoplay]}
//             effect="coverflow"
//             centeredSlides={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             slidesPerView={2}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 30,
//               depth: 100,
//               modifier: 5,
//               slideShadows: true,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//           >
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 className={styles.slidesBoxIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </SwiperSlide>
//           </Swiper>

//           <div className={styles.slidesNavigation}>
//             <div className={styles.clickArea}>
//               <img
//                 className={styles.arrowLeftIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/arrow-left.svg"
//               />
//             </div>
//             <div className={styles.slideIndicator}>
//               <img
//                 className={styles.dotIndictaor1}
//                 loading="lazy"
//                 alt=""
//                 src="/dot-indictaor--1.svg"
//               />
//               <img
//                 className={styles.dotIndictaor2}
//                 loading="lazy"
//                 alt=""
//                 src="/dot-indictaor--2.svg"
//               />
//               <img
//                 className={styles.dotIndictaor3}
//                 loading="lazy"
//                 alt=""
//                 src="/dot-indictaor--2.svg"
//               />
//               <img
//                 className={styles.dotIndictaor4}
//                 loading="lazy"
//                 alt=""
//                 src="/dot-indictaor--2.svg"
//               />
//               <img
//                 className={styles.dotIndictaor5}
//                 loading="lazy"
//                 alt=""
//                 src="/dot-indictaor--2.svg"
//               />
//             </div>
//             <div className={styles.clickArea1}>
//               <img
//                 className={styles.arrowRightIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/arrow-right.svg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FrameComponent5;

// Import Swiper React components and Swiper styles
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
import styles from "./frame-component5.module.css";

// Component
const FrameComponent5 = () => {
  return (
    <div
      id="hero_sec"
      style={{
        width: "100%",
      }}
    >
      <Swiper
        dir="rtl"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChangeTransitionStart={(swiper) => {
          swiper.slides.forEach((slide) => {
            if (!slide.classList.contains("swiper-slide-active")) {
              slide.classList.add(styles.slideInactive);
            }
          });
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          swiper.slides.forEach((slide) => {
            slide.classList.remove(styles.slideInactive);
          });
        }}
      >
        <SwiperSlide>
          <img src="/slides-box@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides-box@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides-box@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides-box@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides-box@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides-box@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides-box@2x.png" />
        </SwiperSlide>
        {/* ... other slides */}
      </Swiper>

      {/* Pagination and Navigation are automatically included with the Swiper component */}
    </div>
  );
};

export default FrameComponent5;

// +++++++++++++++++++++++++++++++++++++++++++++
// import React, { useEffect } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import ClassNames from "embla-carousel-class-names";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./swiper/EmblaCarouselArrowButtons";
// import { DotButton, useDotButton } from "./swiper/EmblaCarouselDotButton";

// const FrameComponent5 = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "center",
//       draggable: true,
//       containScroll: "trimSnaps",
//     },
//     [ClassNames(), AutoScroll({ playOnInit: false })]
//   );

//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide embla__class-names" key={index}>
//               <img
//                 className="embla__slide__img"
//                 loading="lazy"
//                 alt=""
//                 src="/slides-box@2x.png"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>

//         <div className="embla__dots">
//           {scrollSnaps.map((_, index) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={"embla__dot".concat(
//                 index === selectedIndex ? " embla__dot--selected" : ""
//               )}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrameComponent5;
// +++++++++++++++++++++++++++++++++++++++++++++
