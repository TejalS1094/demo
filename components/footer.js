import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const Footer = () => {
  const socialMedia = [
    {
      title: "Instagram",
      icon: "/footer-insta.svg",
      href: "/#",
    },
    {
      title: "Youtube",
      icon: "/footer-yt.svg",
      href: "/#",
    },
    {
      title: "Tiktok",
      icon: "/footer-tiktok.svg",
      href: "/#",
    },
    {
      title: "X",
      icon: "/footer-x.svg",
      href: "/#",
    },
  ];
  return (
    <div className="bg-[#FFFCEB] px-5 md:px-0">
      <div className="max-w-[1027px] m-auto pt-[60px] pb-14">
        <div className="upper flex flex-col md:flex-row mb-[31px] justify-between">
          <div className="w-[73px] h-[72px]  ">
            <div>
              <Image
                src="/kick-fund-bite-logo.svg"
                width={73}
                height={72}
                alt="footer-logo"
                className="w-[73px] h-full"
              />
            </div>
          </div>

          {/* menus */}
          <div className="w-full mt-8 lg:mt-0  lg:mr-[90px]  lg:max-w-[450px] ">
            <ul className="flex flex-col lg:flex-row  flex-wrap gap-x-8 gap-y-[22px] items-start justify-start">
              <Link href={"/"}>
                <li className="  font-nunito font-semibold text-base text-[#000000]">
                  Explore campaigns
                </li>
              </Link>
              <Link href={"/"}>
                <li className=" font-nunito font-semibold text-base text-[#000000]">
                  How it Works
                </li>
              </Link>
              <Link href={"/"}>
                <li className="  font-nunito font-semibold text-base text-[#000000]">
                  About
                </li>
              </Link>
              <Link href={"/"}>
                <li className="  font-nunito font-semibold text-base text-[#000000]">
                  Contact
                </li>
              </Link>
              <Link href={"/"}>
                <li className=" font-nunito font-semibold text-base text-[#000000]">
                  Start a campaign
                </li>
              </Link>
              <Link href={"/"}>
                <li className=" font-nunito font-semibold text-base text-[#000000]">
                  FAQs
                </li>
              </Link>
              <Link href={"/"}>
                <li className="  font-nunito font-semibold text-base text-[#000000]">
                  Blogs
                </li>
              </Link>
            </ul>
          </div>

          {/*  */}
          <div className="mt-8 md:mt-0">
            {/* subscribe  */}
            <div>
              <p className="font-nunito font-semibold text-base text-[#404040]">
                Join our newsletter!
              </p>
              <div className="flex flex-col md:flex-row gap-y-5 md:gap-2 mt-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-[#171717] rounded-[20px] bg-[#FFFCEB] font-nunito text-sm text-[#404040] py-2.5 px-4"
                />
                <div className="md:w-[104px]">
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
            {/* social media */}
            <div className="mt-11 ">
              <ul className="flex md:justify-end gap-1.5">
                {socialMedia.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link href={item.href}>
                        <Image
                          src={item.icon}
                          width={22}
                          height={23}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* privacy and copyrights */}
        <div className="lower border-t pt-7 flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between w-full">
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
    </div>
  );
};

export default Footer;
