import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  rectangle105,
  group75248,
  rectangle106,
  propHeight,
  propFlex,
  propPadding,
  propBackgroundImage,
  propBackgroundImage1,
  propPadding1,
  propPadding2,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  const firstNewsContentStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
    };
  }, [propPadding, propBackgroundImage]);

  const firstNewsTitleStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const firstNewsSummaryStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const firstNewsButtonStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div
      className={`self-stretch h-[348.4px] rounded-[27.91px] bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[18.4px] box-border gap-[10.1px] z-[2] text-left text-lgi-2 text-white font-cairo ${className}`}
      style={groupDivStyle}
    >
      <div className="self-stretch h-[348.4px] relative rounded-[27.91px] bg-white hidden" />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start">
        <div
          className="self-stretch flex-1 rounded-[27.91px] flex flex-row items-start justify-end pt-[20.2px] px-3.5 pb-5 bg-[url('/rectangle-105@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]"
          style={firstNewsContentStyle}
        >
          <img
            className="h-[222.3px] w-[279.8px] relative rounded-[27.91px] object-cover hidden"
            alt=""
            src={rectangle105}
          />
          <img
            className="h-[34.6px] w-[34.6px] relative z-[2]"
            loading="lazy"
            alt=""
            src={group75248}
          />
        </div>
        <div
          className="self-stretch rounded-t-none rounded-b-[27.91px] flex flex-row items-start justify-start pt-[3.8px] px-[69px] pb-[7.4px] bg-[url('/rectangle-106@2x.png')] bg-cover bg-no-repeat bg-[top] whitespace-nowrap z-[2] mt-[-46.2px] mq450:pl-5 mq450:pr-5 mq450:box-border"
          style={firstNewsTitleStyle}
        >
          <img
            className="h-[47.2px] w-[279.8px] relative rounded-t-none rounded-b-[27.91px] object-cover hidden"
            alt=""
            src={rectangle106}
          />
          <b className="relative z-[3]">دولة الشرق تنهار</b>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 text-center text-sm-5 text-black"
        style={firstNewsSummaryStyle}
      >
        <p className="m-0 flex-1 relative z-[1]">
          العديد من الخسائر في قسم المالية التابع لجمعية الشرق
        </p>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-smi-5 font-montserrat"
        style={firstNewsButtonStyle}
      >
        <div className="w-[112.9px] rounded-[23.23px] bg-color-blue flex flex-row items-start justify-start py-[13.9px] px-6 box-border whitespace-nowrap z-[1]">
          <b className="h-[8.7px] flex-1 relative font-bold flex items-center">
            قراءة المزيد
          </b>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  rectangle105: PropTypes.string,
  group75248: PropTypes.string,
  rectangle106: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propPadding1: PropTypes.any,
  propPadding2: PropTypes.any,
};

export default GroupComponent;
