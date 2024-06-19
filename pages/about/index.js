/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/button";
import CurvedHeader from "@/components/curved-header";
import FooterWIthCampaign from "@/components/footer-campaign";
import SwiperCardComponent from "@/components/swiper-card";
import TopBorderCard from "@/components/top-border-card";
import Image from "next/image";
import { useRouter } from "next/router";

const AboutPage = (props) => {
  const router = useRouter()
  const dontionData = [
    {
      id: "1",
      color: "green",
      content:
        "We don't label them as <strong>'customers'</strong>. They are your valued supporters.",
    },
    {
      id: "2",
      color: "pink",
      content:
        "You can <strong>reach out to a real person </strong>, when want advice to get started quickly.",
    },
    {
      id: "3",
      color: "blue",
      content:
        "Rest assured your <strong>supporters</strong> get receive the highest quality product on the market.",
    },
  ];
    const handleClick=()=>{
    router.push('/start-campaign')
  }
  return (
    <>
      <CurvedHeader>
        <div className="text-center mb-16">
          <h1 className="font-nunito font-black text-5xl leading-[60px]  md:text-[56px] md:leading-[65px] lg:text-6xl  lg:leading-[75px] text-[#171717]">
            About Kick Punch Bite
          </h1>
        </div>
        <div className="artist-blank-header"></div>
      </CurvedHeader>
      <div className="-mt-[100px] flex justify-center px-5 lg:px-0 max-w-[1024px] m-auto">
        <div className="bg-container-black rounded-[30px] py-10 md:py-[72px] px-5 sm:px-10 md:px-20 flex flex-col justify-center items-center">
          <h4 className="font-nunito font-semibold text-base lg:text-lg text-[#F2CC00] mb-5 lg:mb-6">
            Our Mission
          </h4>
          <p className="font-nunito font-bold text-2xl lg:text-4xl lg:leading-[45px] text-[#FFFFFF] text-center">
            We empower creators to bring visions to life through crowdfunding.
          </p>
        </div>
      </div>

      {/* section 2 */}
      <section className="px-5 my-16 md:mt-32">
        <div className="max-w-[1024px] m-auto pb-10 lg:pb-20 border-b border-[#171717]/[0.24]">
          <span className="font-nunito font-semibold text-base lg:text-lg mb-4">
            How it began{" "}
          </span>
          <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] text-[#171717] mb-[30px]">
            Our Story
          </h1>
          <p className="font-nunito text-base lg:text-lg text-[#404040]    custom-columns">
            Sed ut perspiciatis unde omnis iste natus error sit voluptate
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architect beatae vitae
            dicta sunt explicabo. Nemo enim ipsam non voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet.
          </p>
        </div>
      </section>

      {/* section 3 */}

      <section className="px-5 my-16 md:mb-32 md:mt-20">
        <div className="flex flex-col md:flex-row items-center gap-9 md:gap-[84px] max-w-[1024px] m-auto ">
          {/* text container */}
          <div>
            <h2 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] text-[#171717] capitalize ">
              What Are Our Creative Campaigns All About?
            </h2>
            <p className="font-nunito text-base lg:text-lg text-[#404040] mt-4 lg:mt-6">
              Are you an artist with a creative project that needs funding? Look
              no further – our platform is here to bring your vision to life.
              <br></br>
              <br></br>
              Crowdfunding offers artists like you the opportunity to showcase
              your work, engage with your community, and secure the resources
              needed to turn your ideas into reality.
            </p>
            <div className="mt-10 lg:mt-14 lg:max-w-[160px]">
              <Button bg="yellow">Get started </Button>
            </div>
          </div>
          {/* image container */}
          <div className="lg:max-w-[404px] w-full lg:h-[539px] ">
            <Image
              src="/how-it-works.png"
              width={404}
              height={539}
              alt="how-it-works-image"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="px-5 max-w-[1024px] m-auto  flex flex-col justify-center items-center">
        <div className="lg:px-10 w-full text-center">
          <h1 className="font-nunito font-bold text-4xl  lg:text-5xl lg:leading-[60px] ">
            Create another way to earn income & give supporters something new.
          </h1>
          <p className="font-nunito text-base lg:text-lg text-[#404040] mt-5 ">
            Kick Punch Bite is here to help make it happen!
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8 md:flex-row">
          {dontionData.map((item, index) => {
            return (
              <div key={item.id}>
                <TopBorderCard color={item.color}>{item.content}</TopBorderCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* cmapigns card */}

      <div className=" black-curve-image pt-28 pb-16  px-5 lg:pl-20 lg:py-32">
        <div className=" w-full m-auto">
     
          <SwiperCardComponent
            title="Our Community Impact"
            description="Support from art lovers like you made it happen!"
            onClick={handleClick}
          />
        </div>
        </div>

      {/* section 6 meet our team */}

      <section className="px-5 lg:px-0 max-w-[1024px] w-full m-auto text-center mt-24 mb-32">
        <div className="flex flex-col items-center">
          <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl capitalize mb-5 max-w-[672px]">
            Meet Our Team - We're Art Lovers, Just Like You!
          </h1>
          <p className="font-nunito text-lg text-[#404040]">
            Exclusive solution for creators to receive donations.
          </p>
        </div>
        <div className="px-5 lg:px-0">
          <div className="relative flex flex-col lg:flex-row gap-8  mt-16">
            {/* green line image */}
            <div className="absolute top-[-10px] left-[-20px]  lg:top-[-25px] lg:left-[-25px] z-10 w-[25px] h-[25px] lg:w-[39px] lg:h-[35px]  ">
              <Image
                src="/3-green-line.svg"
                width={38}
                height={35}
                alt="green-line"
              />
            </div>

            {/* container */}
            <div className="">
              <div className="">
                <Image
                  src="/about/mike-brooks-scott.png"
                  width={317}
                  height={374}
                  alt="owner"
                  className="w-full"
                />
              </div>
              <div className="text-left mt-6">
                <h4 className="font-nunito font-black text-xl lg:text-2xl text-[#171717] mb-1">
                  Mike Brooks Scott
                </h4>
                <span className="font-nunito text-base text-[#404040]">
                  Owner
                </span>
              </div>
            </div>
            <div className=" ">
              <div className="">
                <Image
                  src="/about/james-brekiss.png"
                  width={317}
                  height={374}
                  alt="creative-director"
                  className="w-full"
                />
              </div>
              <div className="text-left mt-6">
                <h4 className="font-nunito font-black text-xl lg:text-2xl text-[#171717] mb-1">
                  James Brekiss
                </h4>
                <span className="font-nunito text-base text-[#404040]">
                  Creative Director
                </span>
              </div>
            </div>
            <div className="">
              <div className="relative">
                <Image
                  src="/about/Lindsy-thomas.png"
                  width={317}
                  height={374}
                  alt="partner"
                  className="w-full"
                />
                <div className="absolute bottom-[-15px] right-[-15px] lg:bottom-[-25px] lg:right-[-50px] z-10 w-[25px] h-[25px] lg:w-[39px] lg:h-[35px] rotate-180">
                  <Image
                    src="/3-green-line.svg"
                    width={38}
                    height={35}
                    alt="green-line"
                  />
                </div>
              </div>
              <div className="text-left mt-6">
                <h4 className="font-nunito font-black text-xl lg:text-2xl text-[#171717] mb-1">
                  Lindsy Thomas
                </h4>
                <span className="font-nunito text-base text-[#404040]">
                  Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section>
        <FooterWIthCampaign />
      </section>
    </>
  );
};

export default AboutPage;
