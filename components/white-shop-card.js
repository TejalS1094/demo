/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ProgressBar from "./progress-bar";
import Button from "./button";
import Link from "next/link";

const WhiteShopCard = ({ data }) => {
  return (
    <Link href={`/explore-campaign/${data?.slug}`}>
      <div className="flex-1 shop-card border border-[#E4E4E7] rounded-2xl p-5 md:py-8 md:px-10 bg-[#ffffff] group">
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-10">
          <div className="flex justify-center h-[120px] lg:h-[253px] mb-6 md:mb-0">
            <div className="w-[120px] h-full lg:w-[186px] bg-img">
              <Image
                src={data?.product_images[0]?.file_url}
                width={186}
                height={253}
                alt={data?.product_images[0]?.file_name}
                className="w-full h-full lg:w-[186px] lg:h-[253px] object-contain rounded-xl"
              />
            </div>
          </div>
          {/* content */}

          <div className="flex-grow">
            <h3 className="font-nunito font-black text-xl lg:text-2xl lg:leading-[30px] text-[#171717] mb-1 group-hover:text-[#ffff]">
              {data?.product_name}
            </h3>
            <span className="font-nunito text-sm text-[#171717] text-opacity-75 group-hover:text-[#ffff]">
              Collaboration with {data?.artist?.artist_name}
            </span>
            <div className="mt-6 ">
              <ProgressBar
                targetAmount={16000}
                collectedAmount={15000}
                bg="white"
                date={data?.end_date}
              />
            </div>
            <div className="mt-8 w-full">
              <Button>Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WhiteShopCard;
