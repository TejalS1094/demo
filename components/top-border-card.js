/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const TopBorderCard = ({ color, children }) => {
  let img_url;
  let bg_color;
  let border_color;
  switch (color) {
    case "green":
      img_url = "/green-hand.svg";
      border_color = "border-[#22C55E]";
      bg_color = "bg-[#22C55E]";
      break;

    case "pink":
      img_url = "/pink-hand.svg";
      border_color = "border-[#C026D3]";
      bg_color = "bg-[#C026D3]";
      break;
    case "blue":
      img_url = "/blue-hand.svg";
      border_color = "border-[#0EA5E9]";
      bg_color = "bg-[#0EA5E9]";
      break;

    default:
      img_url = "";
      border_color = "";
      bg_color = "";
      break;
  }

  return (
    <div
      className={`relative bg-[#FFFCEC] h-48 border-t-4 ${border_color} mb-7 w-full rounded-[14px] pt-[44px]  pb-8 px-7 flex  flex-col items-center justify-center`}
    >
      <div
        className={`absolute top-[-40px]  w-[68px] h-[65px] font-nunito font-bold rounded-full px-4 py-1.5   ${bg_color} text-2xl  flex items-center justify-center`}
      >
        <Image src="/green-hand.svg" width={33} height={33} alt={"hand-img"} />
      </div>

      <p className="max-w-[320px] md:w-full font-nunito text-sm lg:text-xl" dangerouslySetInnerHTML={{ __html: children }}>
      </p>
    </div>
  );
};

export default TopBorderCard;
