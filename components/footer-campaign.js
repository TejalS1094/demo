const { default: Footer } = require("./footer");
const { default: StartCamapign } = require("./start-campaign-component");

const FooterWIthCampaign = () => {
  return (
    <>
     <div className=" w-full ">
        <div className=" max-w-[1024px] m-auto relative px-5 lg:px-0 ">
          <StartCamapign />
        </div>
        <div
          className="bg-[#FFFCEB] w-full h-40"
          style={{
            height: "166px",
            marginBlockStart:"-166px"
          }}
        ></div>
      </div>

      <footer className="px-5 lg:px-0 bg-[#FFFCEB]">
        <Footer />
      </footer>
    </>
  );
};

export default FooterWIthCampaign;
