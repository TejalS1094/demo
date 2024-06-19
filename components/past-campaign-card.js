import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const PastCampaignCard = ({ padding, loading, error, data }) => {
  let padding_X;
  switch (padding) {
    case "36":
      padding_X = "px-9";
      break;
    case "72":
      padding_X = "px-[72px]";
      break;
    default:
      padding_X = "px-[72px]";

      break;
  }
  return (
    <>
      {loading && (
        <div
          className={`w-full rounded-2xl h-[430px] md:h-64 lg:h-80 bg-slate-300 animate-pulse`}
        ></div>
      )}

      {!loading && !error && data && (
        <div
          className={`w-full flex justify-center items-center border border-t-4 border-t-[#22C55E] rounded-[14px] p-5  md:py-10  md:${padding_X} bg-[#FFFDF7] `}
        >
          <div className=" w-full flex flex-col  md:flex-row justify-center md:justify-between md:items-center ">
            <div className="md:w-1/2 flex justify-center h-full lg:h-[253px] mb-6 md:mb-0 ">
              <div className="w-[120px] h-full lg:w-[210px] bg-radial-1">
                <Image
                  src="/Mask Group 56@2x.png"
                  width={210}
                  height={210}
                  alt="img"
                  className="w-full h-full lg:w-[210px] lg:h-[210px] object-contain"
                />
              </div>
            </div>
            {/* content */}

            <div className="md:w-1/2 lg:max-w-[273px] w-full">
              <div className="max-w-[184px] flex gap-1.5 rounded-full px-[18px] py-2 bg-[#1FB155] mb-6">
                <h3 className="font-nunito font-black text-xl lg:text-2xl text-[#D2F4DF]">
                  $23,500
                </h3>
                <span className="font-nunito  text-base lg:text-lg text-[#D2F4DF]">
                  raised
                </span>
              </div>

              <h3 className="font-nunito font-black text-xl lg:text-2xl lg:leading-[30px] text-[#171717] mb-1 text-left">
                MOUF / 6" Domer
              </h3>
              <p className="font-nunito text-sm text-[#171717] text-opacity-75  text-left">
                Collaboration with ERK
              </p>
              <p className="font-nunito text-sm text-[#404040] truncate  md:whitespace-normal text-left">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <div className="flex mt-[18px] gap-[5.2px]">
                <Image
                  src="/time-black.svg"
                  width={11}
                  height={11}
                  alt="timer-img"
                />
                <span
                  className={`font-nunito text-sm  text-[#171717]  group-hover:text-[#ffff]`}
                >
                  3d left
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PastCampaignCard;
