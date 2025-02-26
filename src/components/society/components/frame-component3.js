import { useCallback, useMemo, useState } from "react";
import FrameComponent4 from "./frame-component4";
import styles from "./frame-component3.module.css";
import CustomMarker from "./CustomMarker";
import CheckBox from "./CheckBox";
import { GoogleMap, OverlayView, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const options = {
  styles: [{ featureType: "all", stylers: [{ visibility: "on" }] }],
  disableDefaultUI: true,
  zoomControl: true,
};

const FrameComponent3 = ({ societiesListSocieties }) => {
  const [selectedSocietiesData, setSelectedSocietiesData] = useState([]);

  const onCheckboxIconClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const calculateMapCenter = (data) => {
    if (!data.length) return { lat: 24.774265, lng: 46.738586 }; // Default center when no data
    const totalLocations = data.length;
    const latLngSum = data.reduce(
      (acc, curr) => ({
        lat: acc.lat + parseFloat(curr.lat),
        lng: acc.lng + parseFloat(curr.long),
      }),
      { lat: 0, lng: 0 }
    );

    return {
      lat: latLngSum.lat / totalLocations,
      lng: latLngSum.lng / totalLocations,
    };
  };

  const calculateZoomLevel = (data) => {
    if (!data.length) return 6; // Default zoom when no elements
    let bounds = new window.google.maps.LatLngBounds();
    data.forEach((item) => {
      bounds.extend(new window.google.maps.LatLng(item.lat, item.long));
    });
    // This approximation helps to decide zoom level based on bounds
    const diagonalLength =
      google.maps.geometry.spherical.computeDistanceBetween(
        bounds.getNorthEast(),
        bounds.getSouthWest()
      );

    if (diagonalLength < 1000) return 6; // close zoom for close markers
    if (diagonalLength < 5000) return 13; // medium zoom for moderate distance
    return 6; // default zoom for wider area
  };

  const mapCenter = useMemo(
    () => calculateMapCenter(selectedSocietiesData),
    [selectedSocietiesData]
  );
  const zoomLevel = useMemo(
    () => calculateZoomLevel(selectedSocietiesData),
    [selectedSocietiesData]
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC0fUYASQXlqfp1d5EFSIT7_0lg0_OIxq0",
    libraries: ["places", "geometry"],
  });

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.logo1Wrapper}>
            <img className={styles.logo1Icon} alt="" src="/logo-1-1@2x.png" />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.wrapper}>
              <div className={styles.div}>
                اللجنة التنسيقية لجمعيات الدعوة بالمملكة
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.searchParent}>
                  <img
                    className={styles.searchIcon}
                    loading="lazy"
                    alt=""
                    src="/search.svg"
                  />
                  <div className={styles.buttonWrapper}>
                    <div className={styles.button}>
                      <b className={styles.b}>بحث</b>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent4 prop="خريطه المملكة العربية" />
            </div>
          </div>
        </div>
        <div className={styles.imageHubWrapper}>
          <div className={styles.imageHub}>
            <CheckBox
              societiesListSocieties={societiesListSocieties}
              selectedSocietiesData={selectedSocietiesData}
              setSelectedSocietiesData={setSelectedSocietiesData}
            />

            {/* <div className={styles.parent5}>
              <div className={styles.div7}>جمعية الرياض العامة</div>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/rectangle-69@2x.png"
                />
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-38.svg"
                />
                <div className={styles.wrapperFrame39}>
                  <img
                    className={styles.wrapperFrame39Child}
                    loading="lazy"
                    alt=""
                    src="/frame-39.svg"
                  />
                </div>
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/frame-38.svg"
                />
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/frame-38.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
                <img
                  className={styles.frameChild4}
                  loading="lazy"
                  alt=""
                  src="/group-4.svg"
                />
                <img
                  className={styles.frameChild5}
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div> */}

            <div className={styles.parent5}>
              <div className={styles.div7}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={mapCenter}
                  zoom={zoomLevel}
                  options={options}
                >
                  {selectedSocietiesData.map((society) => (
                    <OverlayView
                      key={society.id}
                      position={{
                        lat: parseFloat(society.lat),
                        lng: parseFloat(society.long),
                      }}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                      <div className="societie">
                        <div className={styles.RoundedMarkIcon}>
                          <CustomMarker
                            center={mapCenter}
                            lat={society.lat}
                            lng={society.long}
                            imageUrl={"/place.jpeg"}
                          />
                        </div>
                        <div className={styles.markName}>
                          <p>{society.name}</p>
                        </div>
                      </div>
                    </OverlayView>
                  ))}
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;

// import CheckBox from '../CheckBox';
