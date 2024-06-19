/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ProgressBar from "./progress-bar";
import Button from "./button";

const LoadingCard = () => {
  return (
    <div className="w-full rounded-2xl py-48 md:p-40 bg-[#E4E4E7] animate-pulse"></div>
  );
};

export default LoadingCard;
