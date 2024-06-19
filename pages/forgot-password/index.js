/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/button";
import InputBox from "@/components/input-box";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <>
      <div
        className={`relative w-full flex justify-between items-center bg-[#FCDF46] py-1.5 px-5 md:px-10 lg:px-20`}
      >
        <div className="  flex justify-between items-center w-full m-auto">
          <div className="logo flex-grow">
            <Image
              src="/kick-fund-bite-logo.svg"
              width={71}
              height={61}
              alt="logo"
              className="w-[51px] h-[41px] lg:w-[71px] lg:h-[61px]"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden ">
        <div className=" curve-bg bg-yellow-300 pt-6 lg:pt-12  bg-opacity-100 mix-blend-hue">
          <div className="inner-content px-5 md:px-10 lg:px-20">
            <div className="mt-8 flex flex-col justify-center items-center">
              <div className="text-center mb-14">
                <h1 className="font-nunito font-black text-5xl leading-[60px]  md:text-[56px] md:leading-[65px] lg:text-6xl  lg:leading-[75px] text-[#171717]">
                  Forgot Password?
                </h1>
                <div className="">
                  <p className="font-nunito text-lg lg:text-xl text-[#171717] mt-5 text-center max-w-[671px] m-auto">
                    Don't worry, you can create a new one.
                  </p>
                </div>
              </div>
              <div
                style={{
                  height: "165px",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="-mt-[165px] flex justify-center px-5 lg:px-0">
        <div className="bg-container-black rounded-[36px] max-w-[1024px] w-full">
          <div className="px-5 md:px-12 lg:px-32 py-16 lg:pt-[72px] lg:pb-14">
            <div className="mb-5 md:mb-8">
              <h3 className="font-inter font-bold text-2xl  lg:text-3xl text-[#ffffff]">
                Restore Your Password
              </h3>
            </div>
            <form className=" ">
              <div className="space-y-4 md:space-y-8">
                <div className="flex flex-col md:flex-row  justify-between md:items-center">
                  <div className="flex flex-col text-white  md:max-w-[336px] w-full">
                    <label htmlFor="email" className="font-inter text-base">
                      Email Address
                    </label>
                    <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                      Enter your business email address
                    </span>
                  </div>
                  <div className="md:max-w-[376px] w-full mt-3">
                    <InputBox
                      id="email"
                      type="email"
                      placeholder="Eg. johndoe@gmail.com"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>

              <div className="mt-7 md:mt-12">
                <div className="md:max-w-[222px] w-full">
                  <Button bg="yellow">Get verification link</Button>
                </div>
              </div>
            </form>
          </div>
       
        </div>
      </div>
      {/* footer */}
      <div className=" px-5 mb-10 md:px-10  lg:px-20">
        <div className="max-w-[1027px] m-auto pt-[60px] pb-14"></div>
        <div className="lower border-t pt-7 flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between w-full ">
          <p className="font-nunito text-xs leading-[18px] text-[#404040]">
            Copyright © 2024 Kick Punch Bite
          </p>
          <div className="flex gap-1">
            <Link href="/terms-of-use">
              <span className="font-nunito text-xs leading-[18px] text-[#404040] border-r-2 pr-1">
                Terms of Use
              </span>
            </Link>

            <Link href="/privacy-policy">
              <span className="font-nunito text-xs leading-[18px] text-[#404040]">
                {" "}
                Privacy Policy
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
