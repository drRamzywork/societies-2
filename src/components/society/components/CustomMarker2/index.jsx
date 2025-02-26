
import Rectangle from '../Rectangle';
import styles from './index.module.scss'

const CustomMarker2 = ({ imageUrl, name, lat, lng, visibleSociety
  , setVisibleSociety }) => {



  const onMarkerClick = () => {
    setVisibleSociety((prev) => !prev);
  };

  return (
    <div
      onClick={onMarkerClick}

      id={styles.mapMark}>
      <img src={imageUrl}
        onClick={onMarkerClick}
        alt={name}
      />

      <div className={styles.arrow_container}>
        <Rectangle />

      </div>
    </div>
  );
};

export default CustomMarker2;