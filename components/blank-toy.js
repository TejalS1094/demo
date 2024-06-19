import Image from "next/image";
import Button from "./button";

const BlankToy = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-container-black top-curved-bg pt-28 pb-16  px-5 lg:px-0 lg:py-24 ">
        <div className=" max-w-[1053px] w-full m-auto">
          <div className=" inner-content text-center">
            <div>
              <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] text-white">
                It really is this easy.
              </h1>
              <p className="font-nuntio text-base lg:text-lg text-[#E4E4E7] mt-5">
                Choose your platform- add your art - get funded - make
                collectors smile.
              </p>
              <div className="flex justify-center">
                <div className="lg:max-w-[162px] w-full mt-9">
                  <Button bg="yellow">Collaborate</Button>
                </div>
              </div>
            </div>
            <div className=" w-full  mt-6">
              <Image
                src="/from-blank-to-toy.svg"
                width={100}
                height={100}
                alt="blank-toy"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlankToy;
