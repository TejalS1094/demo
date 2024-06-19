import Image from "next/image";
import Button from "./button";

/* eslint-disable react/no-unescaped-entities */
const StartCamapign = () => {
  const data = [
    {
      icon: "/rocket.svg",
      title: "Share & Create",

      border_color: "border-[#22C55E]",
      bg_color: "bg-[#22C55E]",
      text_color: "text-[#D2F4DF]",
    },
    {
      icon: "/bulb.svg",
      title: "Campaign Creation",

      border_color: "border-[#C026D3]",
      bg_color: "bg-[#C026D3]",
      text_color: "text-[#F3D3F6]",
    },
    {
      icon: "/money.svg",
      title: "Earn Money",

      border_color: "border-[#0EA5E9]",
      bg_color: "bg-[#0EA5E9]",
      text_color: "text-[#CEEDFB]",
    },
  ];

  let buttonClass = "bg-[#171717] py-[18px]";
  let fontClass = "text-lg lg:text-xl text-[#FDE047]";
  return (
    <div className="bg-yellow p-5 py-10 md:p-10 lg:p-20 flex flex-col md:flex-row gap-[30px] md:gap-[60px] lg:gap-[90px]">
      <div className="md:max-w-[417px] flex flex-col justify-center">
        <h1 className="font-nunito font-black text-3xl lg:text-5xl lg:leading-[60px] text-center md:text-left">
          It's Easy to Make and Sell Premium Art with Us!
        </h1>
        <div className="mt-12 md:w-[254px]">
          <button
            className={` w-full h-full flex items-center justify-center rounded-full ${buttonClass}`}
          >
            <p className={`font-nunito font-bold ${fontClass}`}>
              Start a campaign
            </p>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="pl-5 lg:pl-0">
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`relative bg-[#FFFCEC] border-l-4 ${item.border_color} mb-[30px] w-full rounded-[22px]   py-[24px] pl-[42px] pr-[31px]`}
              >
                <div
                  className={`absolute top-4 left-[-26px] w-[47px] h-[45px] font-nunito font-bold rounded-full flex justify-center items-center ${item.bg_color} text-2xl `}
                >
                  <div className="w-[27px] h-[25px]">
                    <Image
                      src={item.icon}
                      width={27}
                      height={25}
                      alt={item.title}
                    />
                  </div>
                </div>
                <h3 className="font-nunito font-bold text-xl lg:text-2xl">
                  {item.title}
                </h3>
                <p className="font-nunito text-sm lg:text-base text-[#404040]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StartCamapign;
