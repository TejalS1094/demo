import Button from "@/components/button";
import ContactFooter from "@/components/contact-footer";
import CurvedHeader from "@/components/curved-header";
import InputBox from "@/components/input-box";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const router = useRouter();
  const [url, setUrl] = useState(true);

  useEffect(() => {
    if (router.asPath === "/contact") {
      setUrl(false);
    }
  }, []);

  return (
    <>
      <div
        className={`relative w-full flex justify-between items-center bg-[#FCDF46] py-1.5 px-5 md:px-10 lg:px-20`}
      >
        <div className="  flex justify-between items-center w-full m-auto">
          <div className="logo flex-grow">
            <Link href={"/"}>
              <Image
                src="/kick-fund-bite-logo.svg"
                width={71}
                height={61}
                alt="logo"
                className="w-[51px] h-[41px] lg:w-[71px] lg:h-[61px]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden ">
        <div className=" curve-bg bg-yellow-300 pt-6 lg:pt-12  bg-opacity-100 mix-blend-hue">
          <div className="inner-content px-5 md:px-10 lg:px-20">
            {/* navigation */}
            <div>
              <span>
                <Link href={"/"}>Home</Link>{" "}
              </span>
              <span>{"> Contact"}</span>
            </div>

            <div className="mt-8 flex flex-col justify-center items-center">
              <div className="text-center mb-14">
                <h1 className="font-nunito font-black text-5xl leading-[60px]  md:text-[56px] md:leading-[65px] lg:text-6xl  lg:leading-[75px] text-[#171717]">
                  Connect With Us
                </h1>
                <div className="">
                  <p className="font-nunito text-lg lg:text-xl text-[#171717] mt-5 text-center max-w-[671px] m-auto">
                    Whether you have questions, feedback, or want to learn more
                    about launching or supporting a campaign, we&apos;re here to
                    help!
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
        <div className="bg-container-black rounded-[36px]">
          <div className="px-5 md:px-12 lg:px-32 py-16 lg:pt-[72px] lg:pb-14">
            <div className="mb-5 md:mb-8">
              <h3 className="font-inter font-bold text-2xl  lg:text-3xl text-[#ffffff]">
                Get in Touch
              </h3>
            </div>
            <form className=" ">
              <div className="space-y-4 md:space-y-8">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div className="flex flex-col text-white md:max-w-[336px] w-full">
                    <label htmlFor="name" className="font-inter text-base">
                      Name
                    </label>
                    <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                      Enter your full name
                    </span>
                  </div>
                  <div className="md:max-w-[376px] w-full mt-3">
                    <InputBox
                      id="name"
                      type="text"
                      placeholder="Eg. John Doe"
                      defaultValue=""
                    />
                  </div>
                </div>
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
                <div className="flex flex-col md:flex-row  justify-between md:items-center">
                  <div className="flex flex-col text-white md:max-w-[336px] w-full">
                    <label htmlFor="phone" className="font-inter text-base">
                      Phone Number
                    </label>
                    <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                      Enter your contact information
                    </span>
                  </div>
                  <div className="md:max-w-[376px] w-full mt-3">
                    <InputBox
                      id="phone"
                      type="tel"
                      placeholder="Eg. 123 456 7890"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  justify-between md:items-center">
                  <div className="flex flex-col text-white md:max-w-[336px] w-full">
                    <label htmlFor="website" className="font-inter text-base">
                      Message
                    </label>
                    <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                      Enter any additional comments you may want to add
                    </span>
                  </div>
                  <div className="md:max-w-[376px] w-full h-[144px] mt-3">
                    <textarea
                      placeholder="Type here"
                      className="w-full h-full  input-bg outline-none text-[#ffff]/50 text-base px-4 py-3"
                    />
                  </div>
                </div>
              </div>

              <div className="flex  justify-center mt-7 md:mt-12">
                <div className="md:max-w-[155px] w-full">
                  <Button bg="yellow">Submit enquiry</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mt-32">
        <ContactFooter />
      </div>
    </>
  );
};

export default ContactPage;
