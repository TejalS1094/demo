import Image from "next/image";
import SimpleHeader from "./header";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <>
      <div className="">
        <SimpleHeader headername="simpleheader" />
      </div>
      <div className="overflow-x-hidden ">
        <div className=" curve-bg bg-yellow-300 pt-6 lg:pt-[90px] bg-opacity-100 mix-blend-hue">
          <div className="inner-content ">
            {/* navigation header */}

            <div className=" px-5  md:px-10  xl:px-20">
              {/* content */}
              <div className="">
                <h1 className="font-nunito font-black text-center text-4xl md:text-5xl lg:text-[56px]/[65px] xl:text-6xl xl:leading-[75px] mb-2.5 lg:mb-5 text-[#171717]">
                  Support Artists or Sell Your Art!
                </h1>
                <div className="flex justify-center w-full text-center">
                  <p className="max-w-[671px] w-full font-nunito text-center text-lg  lg:text-xl text-[#171717] z-2">
                    Exclusive solution for creators to receive donations,
                    recurring supports via membership and sell anything to the
                    fans.
                  </p>
                </div>
              </div>
              {/* button */}
              <div className=" relative flex flex-col items-center gap-3 lg:gap-4 justify-center mt-5 lg:mt-14">
                <div className="w-1/2 flex flex-col md:flex-row  gap-3 lg:gap-4 justify-center">
                  <div className="w-full lg:w-[270px] z-10">
                    <Link href={"/start-campaign"}>
                      <button className="font-nunito w-full bg-[#171717]  rounded-full py-3 lg:py-5 text-base lg:text-xl text-[#FDE047]">
                        Start a campaign
                      </button>
                    </Link>
                  </div>
                  <div className="w-full lg:w-[270px] z-10">
                    <Link href={"/explore-campaign"}>
                      <button className="font-nunito w-full border-2 border-[#171717] rounded-full py-3 lg:py-5 text-base lg:text-xl text-[#171717]">
                        Explore Campaigns
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full relative top-[-50px] md:top-[-88px]">
                  <Image
                    src="/arc.svg"
                    width={100}
                    height={100}
                    alt="arc-img"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0  px-5  md:px-10  xl:px-20">
              <Image
                src="/double.png"
                width={344}
                height={344}
                alt="single-image"
                className="w-[120px] h-[120px]  md:w-[250px] md:h-[250px] lg:w-[344px] lg:h-[344px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-[100px] md:-mt-[16%]  lg:-mt-[18%]  z-3  px-5 lg:px-0  max-w-[1024px] w-full  m-auto ">
        <Image
          src="/single.png"
          width={261}
          height={356}
          alt="single-image"
          className="w-[100px] md:w-[200px] md:h-[261px] lg:w-[261px] lg:h-[356px]"
        />
      </div>
    </>
  );
};

export default HomeHeader;
