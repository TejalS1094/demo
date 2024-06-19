import Button from "./button";
import InputBox from "./input-box";

const StartCampaignForm = () => {
  return (
    <div className="px-5 md:px-12 lg:px-32 py-16 lg:pt-[72px] lg:pb-14">
      <div className="mb-5 md:mb-8">
        <h3 className="font-inter font-bold text-2xl  lg:text-3xl text-[#ffffff]">
          Start Campaign
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
                Website/Social/Portfolio Link
              </label>
              <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                Add the URL of your platform
              </span>
            </div>
            <div className="md:max-w-[376px] w-full mt-3">
              <InputBox
                id="website"
                type="url"
                placeholder="Add the URL of your platform"
                defaultValue=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-between md:items-center">
            <div className="flex flex-col text-white md:max-w-[336px] w-full">
              <label htmlFor="website" className="font-inter text-base">
                Artwork
              </label>
              <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                Write a clear, brief title to help us quickly understand your
                product.
              </span>
            </div>
            <div className="md:max-w-[376px] w-full h-[105px] mt-3">
              <InputBox
                id="website"
                type="url"
                placeholder="Add the URL of your platform"
                defaultValue=""
              />
            </div>
          </div>
        </div>

        <div className="flex  justify-center mt-7 md:mt-12">
          <div className="md:max-w-[155px] w-full">
            <Button bg="yellow">Get Started</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StartCampaignForm;
