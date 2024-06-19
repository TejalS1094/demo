import CurvedHeader from "@/components/curved-header";
import FooterWIthCampaign from "@/components/footer-campaign";
import Image from "next/image";

const BlogPage = () => {
  const data = [
    {
      date: "28 Feb 2024",
      description:
        "Ut Enim Ad Minima Veniam, Quis Nostru Nonyum Exercitationem Ullam Corporis",
      img_url: "/blogs/blog-img.png",
    },
    {
      date: "28 Feb 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod",
      img_url: "/blogs/blog-img-2.png",
    },
    {
      date: "28 Feb 2024",
      description:
        "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium",
      img_url: "/blogs/blog-img-3.png",
    },
    {
      date: "28 Feb 2024",
      description:
        "In Blandit Mauris Nec Magna Placerat, Id Aliquam Velit Hendrerit. Etiam Ac",
      img_url: "/blogs/blog-img-4.png",
    },
    {
      date: "28 Feb 2024",
      description:
        "Nulla Malesuada Tempus Odio, Id Maximus Sem Faucibus Sit Amet",
      img_url: "/blogs/blog-img-5.png",
    },
    {
      date: "28 Feb 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod",
      img_url: "/blogs/blog-img-6.png",
    },
  ];
  return (
    <>
      <CurvedHeader>
        <div className="text-center ">
          <div className="max-w-[671px] w-full">
            <h1 className="font-nunito font-black text-3xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[75px] mb-5">{`Find Good Reads`}</h1>
            <p className="font-nunito text-sm md:text-lg lg:text-xl">{`Exclusive solution for creators to receive donations, recurring supports via membership and sell anything to the fans.`}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[18px] items-center justify-center mt-6 md:mt-12">
            <div className="w-full sm:w-[395px] md:h-[59px]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="border border-[#171717] w-full h-full rounded-full bg-[#FDE047] font-nunito text-base lg:text-xl text-[#171717] placeholder:text-[#171717] py-2.5 px-4"
              />
            </div>

            <div className="  max-w-[164px] w-full  md:h-[59px]">
              <button
                className={` w-full h-full flex items-center justify-center rounded-full  bg-[#171717]   py-4`}
              >
                <p
                  className={`font-nunito font-bold  text-base lg:text-xl text-[#FDE047]`}
                >
                  Subscribe
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="artist-blank-header"></div>
      </CurvedHeader>

      <section className="px-5 md:px-0 my-16 md:mb-32 md:mt-24">
        <div className="max-w-[1024px] w-full m-auto flex flex-col justify-center">
          <h2 className="font-nunito font-black text-3xl  lg:text-5xl lg:leading-[30px]    mb-12">
            All Blogs
          </h2>

          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-5 md:gap-10 mb-6 md:mb-12"
              >
                <div className="md:max-w-[516px] w-full rounded-xl ">
                  <Image
                    src={item.img_url}
                    width={516}
                    height={268}
                    alt="blog-img"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="font-nunito text-sm text-[#404040] mb-3">
                   {item.date}
                  </span>
                  <h3 className="font-nunito font-bold lg:text-2xl lg:leading-[30px] text-[#171717]">
                 {item.description}
                  </h3>
                  <div className="flex mt-5 md:mt-7 gap-1.5">
                    <span className="font-nunito font-bold text-base text-[#f2cc00]">
                      Read
                    </span>
                    <div className="w-[17px] h-[17px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 13.837 13.758"
                      >
                        <g
                          id="Group_51604"
                          data-name="Group 51604"
                          transform="translate(6.146 -0.026) rotate(45)"
                        >
                          <g id="arrow-1-n_1_">
                            <path
                              id="Path_7689"
                              data-name="Path 7689"
                              d="M10.092,6.313A.829.829,0,0,1,9.5,6.064l-4.1-4.1-4.1,4.1A.829.829,0,0,1,.129,4.937L4.812.245a.829.829,0,0,1,1.172,0l0,0,4.683,4.692a.793.793,0,0,1-.58,1.376Z"
                              transform="translate(0 0.037)"
                              fill="#f2cc00"
                            />
                            <path
                              id="Path_7690"
                              data-name="Path 7690"
                              d="M.829,13.263A.829.829,0,0,1,0,12.434V.829a.829.829,0,1,1,1.658,0V12.434A.829.829,0,0,1,.829,13.263Z"
                              transform="translate(4.572)"
                              fill="#f2cc00"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* footer */}

      <section>
        <FooterWIthCampaign/>
      </section>
    </>
  );
};

export default BlogPage;
