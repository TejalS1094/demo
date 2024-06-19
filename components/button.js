import React from "react";

const Button = ({ bg = null, onClick, children, type }) => {
  const buttonText = bg
    ? bg.toLowerCase().replace(/\s/g, "")
    : children.toLowerCase().replace(/\s/g, "");
  let buttonClass;
  let fontClass;

  // extract the children and make it small case and remove the spacing
  if (bg) {
    switch (buttonText) {
      case "yellow":
        buttonClass = "bg-[#FDE047] py-2.5 lg:py-3";
        fontClass = "text-base text-[#171717]";
        break;

      case "black":
        buttonClass = "bg-[#171717]   py-2.5 lg:py-3";
        fontClass = "text-sm lg:text-base text-[#FDE047]";
        break;

      default:
        buttonClass = "bg-[#171717]  py-3";
        fontClass = "text-sm lg:text-base text-[#FDE047]";
        break;
    }
  } else {
    switch (buttonText) {
      case "subscribe":
        buttonClass = "bg-[#171717] py-2.5";
        fontClass = "text-sm text-[#FDE047]";
        break;

      case "register":
        buttonClass = "bg-[#171717] py-2.5 lg:py-3";
        fontClass = "text-sm lg:text-base text-[#FDE047]";
        break;

      case "startcreating":
        buttonClass = "bg-[#171717] py-2.5 lg:py-3";
        fontClass = "text-sm lg:text-base text-[#FDE047]";
        break;

      case "addtocart":
        buttonClass = "bg-[#FDE047] py-3";
        fontClass = "text-sm lg:text-basetext-[#171717]";
        break;

      case "viewallfaqs":
        buttonClass = "bg-[#FDE047] py-3";
        fontClass = "text-sm lg:text-base text-[#171717]";
        break;

      default:
        buttonClass = "bg-[#171717]  py-3";
        fontClass = "text-sm lg:text-base text-[#FDE047]";
        break;
    }
  }

  return (
    <button
      className={` w-full h-full flex items-center justify-center rounded-full ${buttonClass}`}
      onClick={onClick}
      type={type ? type : "button"}
    >
      <p className={`font-nunito font-bold ${fontClass}`}>{children}</p>
    </button>
  );
};

export default Button;
