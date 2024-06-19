import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MenuBar from "./menu-bar";
import useCartStore from "@/lib/cartStore";

const SimpleHeader = ({ headername, url = true }) => {
  const { cartItems } = useCartStore();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const toggleClick = () => {
    setIsOpen(!isOpen);
  };
  const whiteIconStyle = {
    color: "#FDE047",
  };
  let cartValue = cartItems.length;
  let bg_color;

  switch (headername) {
    case "simpleheader":
      bg_color = "bg-[#FCDF46]";
      break;
    default:
      bg_color;
      break;
  }

  useEffect(() => {
    const user = localStorage.getItem("user_info");

    if (user) {
      setUserData(user);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div
      className={`relative w-full flex justify-between items-center ${bg_color} py-1.5 px-5`}
    >
      <div className="max-w-[1280px] flex justify-between items-center w-full m-auto">
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

        {/* navigation */}

        {url && (
          <>
            {" "}
            <ul className="hidden md:flex gap-4 lg:gap-8 flex-grow-2  ">
              <Link href="/home">
                {" "}
                <li className="font-nunito text-sm lg:text-base ">Home</li>
              </Link>
              <Link href="/explore-campaign">
                {" "}
                <li className="font-nunito text-sm lg:text-base">
                  Explore campaigns
                </li>
              </Link>
              <Link href="/start-campaign">
                {" "}
                <li className="font-nunito text-sm lg:text-base">
                  Start a campaign
                </li>
              </Link>
              <Link href="/contact">
                {" "}
                <li className="font-nunito text-sm lg:text-base ">Contact</li>
              </Link>
            </ul>
            {/* button */}
            {!loading && !userData && (
              <div className="hidden   md:flex items-center justify-end  flex-grow-[.5] gap-3 lg:gap-5">
                <Link href="/login">
                  <p className="font-nunito font-semibold text-sm lg:text-base text-black underline">
                    Login
                  </p>
                </Link>
                <Link href="/register">
                  <div className="w-[99px] lg:w-[138px]">
                    <Button>Register</Button>
                  </div>
                </Link>
              </div>
            )}
            {!loading && userData && (
              <div className="hidden md:flex items-center justify-end flex-grow-[.5] gap-3 lg:gap-5">
                <Link href="/my-account">
                  <p className="font-nunito font-semibold text-sm lg:text-base text-black">
                    My Account
                  </p>
                </Link>
              </div>
            )}
            <Link href={"/cart"} className="relative ml-3 lg:ml-7">
              <Image src="/cart.svg" width={21} height={20} alt="cart-logo" />
              <div className="absolute right-[-50%] top-[-50%]  rounded-full   w-[19px] h-[19px] flex items-center justify-center bg-[#171717]">
                <span className="text-base text-[#FFFFFF]">{cartValue}</span>
              </div>
            </Link>
            <div className="flex ml-6 md:hidden">
              {
                <button onClick={toggleClick}>
                  {isOpen ? (
                    <div className="py-2 px-3">
                      <X />
                    </div>
                  ) : (
                    <div className="bg-black py-2 px-3 rounded-full">
                      <Menu style={whiteIconStyle} />
                    </div>
                  )}
                </button>
              }

              {isOpen && <MenuBar />}
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default SimpleHeader;
