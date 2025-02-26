import PropTypes from "prop-types";

const LoginForm = ({ className = "" }) => {
  return (
    <header
      className={`w-[1310px] flex flex-row items-start justify-between gap-[20px] max-w-full ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0">
        <div className="rounded-[24.14px] bg-color-green flex flex-row items-center justify-center p-[15px] z-[2]">
          <img
            className="h-[23px] w-[25px] relative"
            loading="lazy"
            alt=""
            src="/imgs/vector1.svg"
          />
        </div>
      </div>
      <img
        className="h-[107px] w-[123px] relative object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/imgs/logo1@2x.png"
      />
      <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0">
        <div className="rounded-[24.14px] bg-color-blue flex flex-row items-center justify-center py-[14.5px] px-[15px] z-[2]">
          <img
            className="h-boundvariablesdata w-[26px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/imgs/system1.svg"
          />
        </div>
      </div>
    </header>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
