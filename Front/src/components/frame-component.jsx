import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/about-us')
  }
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-14 pr-5 pl-[25px] box-border max-w-full text-left text-base text-text-color-secondary font-inter ${className}`}
    >
      <div className="w-[1281px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:w-[888px]">
        <div className="w-[177px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-5xl font-mclaren">
          <div className=" leading-[29px] inline-block min-w-[111px] whitespace-nowrap z-[1]">
            Nomadic
          </div>
        </div>
        <div className="w-[393px] flex flex-row items-center justify-start gap-[25px] max-w-full text-center mq750:hidden">
          <div className=" flex flex-1 items-center justify-start gap-[5px]">
            <div className=" leading-[120%] flex items-center justify-center z-[1]">
              Destination
            </div>
            <img
              className=" w-2 h-2 object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/arrow-10.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-[5px]">
            <div className="flex-1 leading-[20px] whitespace-nowrap z-[1]">
              Browse Trips
            </div>
            <img
              className=" w-2 h-2 object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/arrow-10.svg"
            />
          </div>
          <div onClick={()=>handleClick()} className="flex-1 relative leading-[20px] whitespace-nowrap z-[1] cursor-pointer" >
            About Us
          </div>
        </div>
        <div className="w-[111px] relative leading-[20px] text-right flex items-center shrink-0 z-[1]">
          Account
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
