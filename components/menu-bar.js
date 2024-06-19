import Link from "next/link";
import Button from "./button";

const MenuBar = () => {
  return (
    <div className="absolute left-0 top-[53px] z-10 height w-full flex flex-col justify-between bg-[#FCDF46]  p-5">
      <ul>
        <Link href="/home">
          {" "}
          <li className="font-nunito  text-base py-3 hover:underline">Home</li>
        </Link>
        <Link href="/explore-campaign">
          {" "}
          <li className="font-nunito text-base py-3 hover:underline">Explore campaigns</li>
        </Link>
        <Link href="/start-campaign">
          {" "}
          <li className="font-nunito text-base py-3 hover:underline">Start a campaign</li>
        </Link>
        <Link href="/contact">
          {" "}
          <li className="font-nunito text-base py-3 hover:underline">Contact</li>
        </Link>
      </ul>
      <div className="flex items-center justify-end  gap-5 mt-auto">
        <Link href="/register">
          <p className="font-nunito font-semibold text-sm lg:text-base text-black underline">
            Login
          </p>
        </Link>
        <div className="w-[99px] lg:w-[138px]">
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
