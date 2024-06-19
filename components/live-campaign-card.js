/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./button";
import ProgressBar from "./progress-bar";

const LiveCampaignCard = ({ bg, loading, error, data }) => {
  let bg_color = bg.toLowerCase().replace(/\s/g, "");
  let bg_class;

  switch (bg_color) {
    case "bgbackdrop":
      bg_class = "bg-container-black-backdrop";
      break;

    case "bgnormal":
      bg_class = "bg-container-black";
      break;

    default:
      bg_class = "bg-container-black";
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
        <div className={`w-full rounded-2xl p-5 md:py-8 md:px-10 ${bg_class}`}>
          <div className=" w-full flex flex-col   md:flex-row justify-center md:justify-between md:items-center ">
            <div className="md:w-1/2 flex justify-center  lg:h-[253px] mb-6 md:mb-0 ">
              <div className="w-[120px] h-full lg:w-[225px]">
                <Image
                  src={data?.product_images[0]?.file_url}
                  width={225}
                  height={253}
                  alt={data?.product_images[0]?.file_name}
                  className="w-full h-full lg:w-[225px] lg:h-[253px] object-contain"
                />
              </div>
            </div>
            {/* content */}

            <div className="md:w-1/2 lg:max-w-[273px] w-full">
              <h3 className="font-nunito font-black text-xl lg:text-2xl lg:leading-[30px] text-[#ffffff] mb-1  ">
                {data?.product_name}
              </h3>
              <span className="font-nunito text-sm text-[#ffffff] text-opacity-75  ">
                Collaboration with {data?.artist?.artist_name}
              </span>
              <div className="mt-6 ">
                <ProgressBar
                  targetAmount={16000}
                  collectedAmount={15000}
                  bg="black"
                  date={data?.end_date}
                />
              </div>
              <div className="mt-8 w-full">
                <Button>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveCampaignCard;
