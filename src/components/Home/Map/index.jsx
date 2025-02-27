import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { AnimatePresence, motion } from 'framer-motion';
import { ErasPlacesSlider } from '@/components/ErasComponents';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Map = ({ dataAllCitiesMap, dataAllPlaces,
  dataAllPoetries }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);
  const [places, setPlaces] = useState(null);
  const [isPointsActive, seIsPointsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (activeIndex !== null) {
      setPlaces(dataAllCitiesMap[activeIndex]?.places)
    }
  }, [activeIndex])

  useEffect(() => {
    // Select all elements with the class name .land
    const elements = document.querySelectorAll('.land');

    // Add dynamic IDs to the selected elements
    elements.forEach((element, index) => {
      element.setAttribute('id', `land-${index}`);
    });
  }, []);


  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    const elementsWithLandClassOnly = document.querySelectorAll('.land:not(.activeLand)');

    if (activeLand) {
      activeLand.classList.remove('activeLand');
      seIsPointsActive(false)
    }

    if (dataIndex) {
      setActiveLand(dataIndex);
      dataIndex.classList.add('activeLand');
      seIsPointsActive(true)
    }

    if (isPointsActive === true) {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.add('hiddenPoints');
      });
    } else {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.remove('hiddenPoints');
      });

    }

  }, [activeIndex, activeLand])

  const handleZoomToLand = (landIndex) => {

    setActiveIndex(landIndex);
    seIsPointsActive(false)
  };

  const [cityData, setCityData] = useState(null)
  const [isSafari, setIsSafari] = useState(false);
  const [activeCity, setActiveCity] = useState(null);

  useEffect(() => {
    // Detect Safari browser
    setIsSafari(navigator.vendor.includes("Apple"));

  }, []);


  const convertSVGPathsToJSX = (svgString) => {
    const paths = svgString.split("</path>");
    return paths.map((path, index) => (
      <g key={index} dangerouslySetInnerHTML={{ __html: path + "</path>" }} />
    ));
  };


  const handlePlaceWindow = async (placeId) => {
    setActiveCity(placeId);

    // Check if dataAllPlaces is an array before using the find method
    const filtredPlaces = Array.isArray(dataAllPlaces)
      ? dataAllPlaces.find((place) => place.id === placeId)
      : null;

    // Proceed only if filtredPlaces is not null
    if (filtredPlaces) {
      const filteredPoetries = dataAllPoetries.filter((poetry) => poetry.placeId === placeId);

      setCityData(filtredPlaces);
    } else {
      // Handle the case where filtredPlaces is null
      // e.g., set some default data, show a message, etc.
    }
  };



  const popUpRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setCityData(null);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpRef]);



  const svgRef = useRef(null);
  const [landCenters, setLandCenters] = useState([]);

  useEffect(() => {
    if (svgRef.current) {
      const lands = svgRef.current.querySelectorAll('.land');
      const centers = Array.from(lands).map(land => {
        const bbox = land.getBBox();
        const name = land.getAttribute('data-name');

        let xOffset = -20;
        let yOffset = -30;

        if (name === "تبوك") {
          xOffset = -20;
          yOffset = -70;
        } else if (name === "جازان") {
          xOffset = -2;
          yOffset = -2;
        } else if (name === "عسير") {
          xOffset = -2;
          yOffset = -25;
        } else if (name === "الباحة") {
          xOffset = 0;
          yOffset = -5;
        } else if (name === "مكة") {
          xOffset = 15;
          yOffset = -25;
        } else if (name === "المدينة المنورة") {
          xOffset = -10;
          yOffset = 0;
        } else if (name === "الجوف") {
          xOffset = -10;
          yOffset = 0;
        } else if (name === "الحدود الشمالية") {
          xOffset = 10;
          yOffset = 0;
        } else if (name === "القصيم") {
          xOffset = -2;
          yOffset = -15;
        }
        else if (name === "المنطقة الشرقية") {
          xOffset = -2;
          yOffset = -15;
        }
        else if (name === "نجران") {
          xOffset = -2;
          yOffset = -2;
        }




        return {
          x: bbox.x + bbox.width / 2 + xOffset,
          y: bbox.y + bbox.height / 2 + yOffset,
          name: name
        };
      });
      setLandCenters(centers);
    }
  }, []);

  const rotatedCities = {
    "الحدود الشمالية": 19,
    "المنطقة الشرقية": 25,
    "مكة": -10,
    "المدينة": 30,
  };



  return (
    <>
      <section id='Places' className={styles.Places} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>

        <div className="container">

          {cityData && (
            <div className={styles.layer} />
          )}

          <div className={styles.map_container}>
            <div className={styles.map} dir='ltr'>

              <xml version="1.0" encoding="UTF-8" standalone="no" />
              <svg
                // id="svg1"
                width="858"
                height="724"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${isSafari ? "saudi-map safari" : "saudi-map"}`}
                viewBox="90 90 758 624"
                ref={svgRef}
              >
                {dataAllCitiesMap?.map((land, index) => (
                  <g className="land" data-name={land.name} key={index} id={land.svgPathId} onClick={() => handleZoomToLand(index)}>
                    {convertSVGPathsToJSX(land.svgPath)}
                  </g>
                ))}


                {
                  landCenters.map((land, index) => (
                    <foreignObject key={index} x={land.x} y={land.y}>
                      <div
                        style={rotatedCities[land.name] ? { transform: `rotate(${rotatedCities[land.name]}deg)` } : {}}
                        className="city-container" xmlns="http://www.w3.org/1999/xhtml" onClick={() => handleZoomToLand(index)}>




                        {activeIndex == index ?
                          <div className={`city-name `} id="p1">

                            <div id='name'>
                              <motion.a
                                href='/societies'
                                className="details"
                              // initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              // animate={{ opacity: 1, scale: 1, y: 0 }}
                              // transition={{ duration: 0.8, ease: "easeOut" }}
                              // viewport={{ once: true, amount: 0.2 }}
                              >
                                <div className="img_container">
                                  <Image width={73} height={69} src={'/1.png'} alt={"1"} />

                                </div>
                                <div className="text_container">
                                  <div className="title">
                                    <p>عدد الجمعيات</p>
                                  </div>

                                  <hr />
                                  <div className="desc">
                                    <p>
                                      جمعية  <span>15</span>
                                    </p>
                                  </div>
                                </div>

                              </motion.a>
                            </div>
                          </div>
                          :
                          <div className={`city-name `} id="p1">
                            <div id='name'>


                              <p>
                                {land.name}
                              </p>
                            </div>
                          </div>

                        }

                      </div>
                    </foreignObject>
                  ))}

              </svg>

            </div >


            {places !== null &&
              <AnimatePresence >
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className={styles.slider_wrap}
                >
                  <ErasPlacesSlider
                    places={places}
                    setActiveCity={setActiveCity}
                    activeCity={activeCity} onPlaceClick={handlePlaceWindow} />

                </motion.div>
              </AnimatePresence>
            }

          </div>
        </div>


      </section >
    </>
  )
}

export default Map