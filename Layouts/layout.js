import CurvedHeader from "@/components/curved-header";
import Footer from "@/components/footer";
import HomeHeader from "@/components/home-page-header";
import StartCamapign from "@/components/start-campaign-component";
import React from "react";

const Layout1 = ({ children }) => {
  return (
    <div className=" w-full ">
      <div className="relative">
        {/* <CurvedHeader /> */}
      </div>
      <main className="mt-24">{children}</main>

      <div className="relative w-full h-[166px]">
        <div className="px-5 max-w-[1024px] m-auto">
          <StartCamapign />
        </div>
        <div
          className="    bg-[#FFFCEB] w-full h-40"
          style={{
            height: "166px",
            position: "absolute",
            bottom: "0",
            zIndex: "-1",
          }}
        ></div>
      </div>
      <footer className="px-5 lg:px-0 bg-[#FFFCEB]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout1;
