import CurvedHeader from "@/components/curved-header";
import Footer from "@/components/footer";
import HomeHeader from "@/components/home-page-header";
import StartCamapign from "@/components/start-campaign-component";
import React from "react";

const Layout1 = ({ children }) => {
  return (
    <div className=" w-full ">
      <div className="">
        {/* <CurvedHeader /> */}
        <HomeHeader />
      </div>
      <main className="mt-6 md:mt-12 lg:mt-24">{children}</main>

      <div className=" w-full">
        <div className="px-5 max-w-[1024px] m-auto relative ">
          <StartCamapign />
        </div>
        <div
          className="bg-[#FFFCEB] w-full h-40"
          style={{
            height: "166px",
            marginBlockStart: "-166px",
          }}
        ></div>
      </div>

      <footer className="  bg-[#FFFCEB]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout1;
