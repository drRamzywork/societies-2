import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './index.module.scss'
import { RotatingLines } from 'react-loader-spinner';

import { Pagination, } from 'swiper/modules';
import Button from '@/components/Utils/Button';
import Link from 'next/link';

const ErasPlacesSlider = ({ places, activeCity, setActiveCity }) => {
  const swiperRef = useRef(null);
  const swiperVerticalRef = useRef(null);
  const filteredPlaces = places?.filter(place => place.svgX !== null && place.svgY !== null);


  const [imageLoadingStates, setImageLoadingStates] = useState(
    filteredPlaces?.reduce((acc, city) => {
      acc[city.id] = city.icon ? true : false;
      return acc;
    }, {})
  );

  useEffect(() => {
    if (activeCity != null && swiperRef.current) {
      const index = filteredPlaces?.findIndex(city => city.id === activeCity);

      if (index !== -1) {
        swiperRef.current.swiper.slideTo(index);
      }
    }

    if (activeCity != null && swiperVerticalRef.current) {
      const index = filteredPlaces?.findIndex(city => city.id === activeCity);
      if (index !== -1) {
        swiperVerticalRef.current.swiper.slideTo(index);

      }
    }

  }, [activeCity, places, filteredPlaces]);


  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {

      const swiper = swiperRef.current.swiper;
      const newIndex = swiper.realIndex;

      const newActiveCity = filteredPlaces[newIndex].id;
      setActiveCity(newActiveCity);
    }
  }

  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };

  const handleImageLoad = cityId => {
    setImageLoadingStates(prev => ({ ...prev, [cityId]: false }));
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  };


  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>
      {isMobileView === true && <div className={styles.swiper_container} dir='rtl'>
        <Swiper
          ref={swiperRef}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          direction='horizontal'
          slidesPerView={2.5}
          spaceBetween={16}
          dir={'rtl'}
          className="places-swiper" >

          {filteredPlaces?.map((city, index) =>




            <SwiperSlide className={styles.places_container} key={city.id1} >
              <div className={`${styles.places} ${city.id === activeCity ? styles.active : ''}`}>
                {/* <div className={styles.img_container} onClick={() => onPlaceClick(city.id)}>
    {imageLoadingStates[city.id] && (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}

      />
    )}

    <img
      style={{ display: imageLoadingStates[city.id] ? 'none' : 'block' }}
      src={'/imgs/bg/3.jpg'}
      alt={city?.name}
      onLoad={() => handleImageLoad(city.id)}
    />

  </div>
  <div className={styles.name}>
    <p>{city.name}</p>
  </div> */}


                <Link href='/society/22' target='_blank' className={styles.box}>
                  <div className={styles.img_container}>
                    {imageLoadingStates[city.id] && (
                      <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}

                      />
                    )}

                    <img
                      style={{ display: imageLoadingStates[city.id] ? 'none' : 'block' }}
                      src={'/imgs/bg/3.jpg'}
                      alt={city?.name}
                      onLoad={() => handleImageLoad(city.id)}
                    />


                    <div className={styles.title} >
                      <h3 > جمعية الرياض العامة </h3>
                    </div>
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.desc}>
                      <p> جمعية متخصصة في رعاية الشباب       </p>
                    </div>

                    <div className={styles.button_container}>
                      <Button> قراءة المزيد</Button>
                    </div>

                  </div>

                </Link >
              </div>
            </SwiperSlide>
          )
          }
        </Swiper>
      </div >}

      {isMobileView === false && <div className={styles.swiper_container} dir='rtl'>
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          direction={"vertical"}
          breakpoints={{
            // 300: {
            //   slidesPerView: 1.8,
            //   spaceBetween: 10,
            // },
            // 400: {
            //   slidesPerView: 2.1,
            //   spaceBetween: 10,
            // },
            // 414: {
            //   slidesPerView: 2.5,
            //   spaceBetween: 11,
            // },
            // 450: {


            //   slidesPerView: 2.5,
            //   spaceBetween: 11,
            // },
            // 640: {


            //   slidesPerView: 2.5,
            //   spaceBetween: 10,
            // },
            // 768: {


            //   slidesPerView: 2.5,
            //   spaceBetween: 10,
            // },
            // 1204: {
            //   slidesPerView: 2.5,
            //   spaceBetween: 16,
            // },

            1: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },

          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          centeredSlides={true}
          className={styles.vertical_swiper}>

          {filteredPlaces?.map((city, index) =>
            <SwiperSlide className={styles.places_container} key={city.id + 1} >
              <div className={`${styles.places} ${city.id === activeCity ? styles.active : ''}`}>
                {/* <div className={styles.img_container} onClick={() => onPlaceClick(city.id)}>
                  {imageLoadingStates[city.id] && (
                    <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}

                    />
                  )}

                  <img
                    style={{ display: imageLoadingStates[city.id] ? 'none' : 'block' }}
                    src={'/imgs/bg/3.jpg'}
                    alt={city?.name}
                    onLoad={() => handleImageLoad(city.id)}
                  />

                </div>
                <div className={styles.name}>
                  <p>{city.name}</p>
                </div> */}


                <Link href='/society/22' target='_blank' className={styles.box}>
                  <div className={styles.img_container}>
                    {imageLoadingStates[city.id] && (
                      <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}

                      />
                    )}

                    <img
                      style={{ display: imageLoadingStates[city.id] ? 'none' : 'block' }}
                      src={'/imgs/bg/3.jpg'}
                      alt={city?.name}
                      onLoad={() => handleImageLoad(city.id)}
                    />


                    <div className={styles.title} >
                      <h3 > جمعية الرياض العامة </h3>
                    </div>
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.desc}>
                      <p> جمعية متخصصة في رعاية الشباب       </p>
                    </div>

                    <div className={styles.button_container}>
                      <Button> قراءة المزيد</Button>
                    </div>

                  </div>

                </Link >
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div >}


    </>
  )
}

export default ErasPlacesSlider