import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import styles from '@/styles/landing.module.scss';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Map from '@/components/Home/Map';

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from 'framer-motion';

const LandingV1 = ({ dataAllCitiesMap, dataAllPlaces, dataAllPoetries }) => {
  const carouselItems = [{ img: "/imgs/bg/4.jpg" }, { img: "/imgs/bg/3.jpg" }, { img: "/imgs/bg/2.jpg" }, { img: "/imgs/bg/1.jpg" }, { img: "/imgs/bg/4.jpg" }, { img: "/imgs/bg/3.jpg" }, { img: "/imgs/bg/2.jpg" }, { img: "/imgs/bg/1.jpg" }, { img: "/imgs/bg/4.jpg" }, { img: "/imgs/bg/3.jpg" }, { img: "/imgs/bg/2.jpg" }, { img: "/imgs/bg/1.jpg" }, { img: "/imgs/bg/4.jpg" }, { img: "/imgs/bg/3.jpg" }, { img: "/imgs/bg/2.jpg" }, { img: "/imgs/bg/1.jpg" }]
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentDot, setCurrentDot] = useState(0);
  const breakpoints = {
    1: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }

  return (
    <>
      <Navbar />
      <section id='landing' className={styles.landing}>
        <div className={styles.sec_container}>


          <Map dataAllCitiesMap={dataAllCitiesMap} dataAllPlaces={dataAllPlaces} dataAllPoetries={dataAllPlaces} />




        </div>
        <div className={styles.img_bg_container}>
          <div className={styles.imgs_container}>
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setCurrentDot(swiper.realIndex)}
              speed={500}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4000,
              }}

              loop={true}
              id="swiper-carosel"
              dir={'ltr'}
            >
              {carouselItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.img initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, type: "tween" }} src={item.img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <img src={'/imgs/bg/4.jpg'} alt="" /> */}

          </div>


          <div className={styles.layer} />



        </div>
      </section>
    </>
  )
}

export default LandingV1