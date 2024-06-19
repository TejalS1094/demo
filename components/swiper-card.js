import Image from "next/image";
import PastCampaignCard from "./past-campaign-card";
import Button from "./button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.min.css";
// Import Swiper styles
import "swiper/css";

const SwiperCardComponent = ({ title, description ,onClick}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:pr-5 lg:pr-20">
        <div className="mb-5 md:mb-0">
          <h2 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] text-[#ffffff] mb-4 text-left md:text-center">
            {title}
          </h2>
          <p className="font-nunito text-base lg:text-lg text-[#ffffff] text-left">
            {description}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="w-[41px] h-[41px] bg-[#FCDF46] rounded-full flex justify-center items-center swiper-button-prev">
            <Image
              src="/about/left-icon.svg"
              width={10}
              height={17}
              alt="left-arrow"
            />
          </button>
          <button className="w-[41px] h-[41px] bg-[#FCDF46] rounded-full flex justify-center items-center swiper-button-next">
            <Image
              src="/about/right-icon.svg"
              width={10}
              height={17}
              alt="left-arrow"
            />
          </button>
        </div>
      </div>
      {/* cards */}
      <div className="w-full mt-6 md:mt-12 lg:mt-[68px] flex">
        <Swiper
          modules={[Navigation]}
          spaceBetween={36}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: {
              spaceBetween: 36,
              slidesPerView: 2,
            },
          }}
          className="flex w-full"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <SwiperSlide key={index} className="max-w-[517px]">
                <PastCampaignCard padding="36" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex justify-center w-full">
        <div className="md:max-w-[205px] w-full mt-5 md:mt-12 lg:mt-14">
          <Button bg="yellow" onClick={onClick}> Start a campaign</Button>
        </div>
      </div>
    </div>
  );
};

export default SwiperCardComponent;
