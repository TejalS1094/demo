import Button from "@/components/button";
import Footer from "@/components/footer";
import FooterWIthCampaign from "@/components/footer-campaign";
import SimpleHeader from "@/components/header";
import Image from "next/image";

const BlogDetail = () => {
  return (
    <>
      <div>
        <SimpleHeader headername="simpleheader" />
      </div>
      {/* naviagtion */}
      <section className=" px-5 md:px-10 2xl:px-0   max-w-[1280px] w-full m-auto">
        <div className="pt-8">{`Home > Blogs > Ut Enim Ad Minima Veniam, Quis Nostru Nonyum`}</div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between lg:gap-12 xl:gap-16  px-5 md:px-10 2xl:px-0 my-12 max-w-[1280px] w-full m-auto">
        {/* content section */}
        <div className="max-w-[869px]">
          <h1 className="font-nunito font-black text-3xl md:text-[56px] md:leading-[65px] lg:text-6xl lg:leading-[75px] text-[#171717]">
            Ut Enim Ad Minima Veniam, Quis Nostru Nonyum
          </h1>
          <div className="flex justify-between items-center mt-5 mb-8 md:mb-12">
            <span className="font-nunito text-lg lg:text-xl text-[#171717]">
              30 Jan 2024
            </span>
            <div className="flex gap-4 ">
              <Image src="/share.svg" width={16} height={18} alt="share-img" />
              <span className="font-nunito text-sm md:text-base text-[#404040]">
                Share blog
              </span>
            </div>
          </div>
          {/* content with image */}
          <div className="blog-content">
            <div className="mb-8 md:mb-12">
              <Image
                src="/blogs/blog-img.png"
                width={896}
                height={434}
                alt="blog-img"
              />
            </div>
            {/* content */}
            <div className="contents">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet urna sed erat feugiat tincidunt. Nunc vitae lobortis neque,
                et auctor justo.
              </p>
              <p>
                Nam feugiat neque et odio ullamcorper imperdiet. Integer sit
                amet ultricies quam. Vivamus pellentesque ligula erat, quis
                viverra sem viverra eu.
              </p>

              <p>Praesent rhoncus.</p>

              {/* <h3 className="font-nunito font-bold text-xl lg:text-2xl text-[#171717] mb-[18px] mt-12"></h3> */}
              <h3>Proin posuere viverra tellus vel vehicular?</h3>
              <p>
                Sed ut erat diam. Maecenas consectetur ante dui. Aenean elit
                justo, eleifend ut magna sollicitudin, consectetur hendrerit
                ipsum. Aenean quis erat quis mauris elementum tincidunt id
                consectetur mi. Mauris lobortis libero eu nulla euismod, in
                mattis mauris pulvinar. Integer vitae metus odio. Pellentesque
                tincidunt orci lacus, eu pharetra magna molestie et. Aliquam ac
                sem hendrerit, efficitur augue non, efficitur orci. Mauris
                mollis mi vitae auctor porttitor.
              </p>
              <p>
                Aenean convallis lectus quis ex congue vestibulum. Duis
                consequat nibh aliquam interdum malesuada. Proin interdum magna
                eu eros tristique feugiat. Ut eleifend imperdiet magna, sed
                sagittis tellus pretium nec. Nunc vitae erat in arcu luctus
                lobortis.
              </p>
              <p>
                In blandit mauris nec magna placerat, id aliquam velit
                hendrerit. Etiam ac nisi nisi. Nullam venenatis, orci eu mattis
                fermentum.
              </p>

              <h3>Phasellus semper dolor et enim in rhoncus enim egestas.</h3>
              <p>
                Ut a nisl vitae dolor vehicula facilisis vel eget magna. Integer
                id mauris eu urna tristique cursus vel ac nulla. Fusce gravida
                orci ac nulla volutpat, eget tristique sapien varius. Etiam
                tempus sapien vel egestas congue. Fusce pretium at tortor non
                tincidunt. Ut et nisl non nunc pulvinar ultrices. Praesent sit
                amet aliquet sapien. Donec volutpat blandit lectus in ultricies.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Donec dolor nibh, vestibulum ut accumsan
                nec, posuere in elit. Proin eleifend vitae neque in dictum.
                Vestibulum eget turpis sed dui ornare semper in sed odio. In
                aliquam a risus faucibus interdum. Sed at euismod lectus, sed
                dignissim massa.
              </p>
              <ol>
                <li>
                  <h3>1. Nunc vitae erat in arcu luctus lobortis:</h3>
                  <p>
                    Praesent in lacus odio. Cras pretium, ex at tincidunt
                    ornare, eros risus molestie enim, sit amet rutrum dui urna
                    eget elit. Nulla pretium nisi odio, sit amet scelerisque
                    dolor elementum quis. Sed eu tortor pulvinar, viverra leo
                    sed, interdum purus. Etiam id justo non purus eleifend
                    lobortis. Duis pulvinar ante sit amet mattis posuere. Mauris
                    placerat blandit aliquet.
                  </p>
                </li>
                <li>
                  <h3>2. Aenean elit justo, eleifend ut magna sollicitudin:</h3>
                  <p>
                    Sed ut erat diam. Maecenas consectetur ante dui. Aenean elit
                    justo, eleifend ut magna sollicitudin, consectetur hendrerit
                    ipsum. Aenean quis erat quis mauris elementum tincidunt id
                    consectetur mi. Mauris lobortis libero eu nulla euismod, in
                    mattis mauris pulvinar.
                  </p>
                </li>
                <li>
                  <h3>3. Mauris lobortis libero eu nulla euismod</h3>
                  <p>
                    Ut et nisl non nunc pulvinar ultrices. Praesent sit amet
                    aliquet sapien. Donec volutpat blandit lectus in ultricies.
                    Cras tincidunt arcu sed molestie finibus. Vestibulum vitae
                    leo in arcu dapibus faucibus. In tempor massa arcu, sed
                    efficitur nisl malesuada sed.
                  </p>
                </li>
              </ol>

              <h3>Vestibulum ante ipsum primis in faucibus?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet urna sed erat feugiat tincidunt. Nunc vitae lobortis neque,
                et auctor justo. Nam feugiat neque et odio ullamcorper
                imperdiet. Integer sit amet ultricies quam. Vivamus pellentesque
                ligula erat, quis viverra sem viverra eu. Praesent rhoncus eu mi
                sit amet lacinia. Proin posuere viverra tellus vel vehicula.
                Pellentesque nec vestibulum turpis, a aliquam mi. In egestas
                magna eu nisl pellentesque.
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <Image src="/share.svg" width={16} height={18} alt="share-img" />
            <span className="font-nunito text-sm md:text-base text-[#404040]">
              Share blog
            </span>
          </div>
        </div>

        {/* side section*/}
        <div className=" mt-8 lg:mt-0 ">
          <div className="flex gap-6 justify-between">
            <div className="md:w-[320px] bg-container-black rounded-2xl px-5 md:px-[30px] py-6 md:pt-8 md:pb-9">
              <h2 className="font-nunito font-bold text-2xl leading-[30px] mb-6 text-[#ffff]">
                Ad Minima Veniam, Quis Nostru Exercitat Ullam Corporis?
              </h2>
              <div>
                <button
                  className={`w-full h-full flex items-center justify-center rounded-full border border-[#FDE047] py-2.5 lg:py-3 mb-3`}
                >
                  <p
                    className={`font-nunito font-bold  text-sm lg:text-base text-[#FDE047]`}
                  >
                    Support artists
                  </p>
                </button>
                <Button bg="yellow">Start a campaign</Button>
              </div>
            </div>

            {/* subscirbe */}
            <div className="mt-9 hidden flex-grow md:inline-block  lg:hidden ">
              <h3 className="font-nunito font-bold text-2xl leading-[30px] text-[#171717]">
                Join Our Newsletter!
              </h3>
              <div className="flex flex-col md:flex-row gap-y-5 md:gap-2.5 mt-[18px] ">
                <div className="w-full lg:max-w-[198px]">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-[#171717] rounded-[20px] bg-[#ffff] font-nunito text-sm text-[#404040] py-2.5 px-4"
                  />
                </div>

                <div className="md:w-[112px]">
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          {/* related post */}
          <div className="mt-9">
            <h3 className="font-nunito text-2xl leading-[30px] mb-6">
              Related Posts
            </h3>

            <ul>
              {[1, 2, 3].map((item, index) => {
                return (
                  <li key={index} className="border-b border-[#171717] pb-5 ">
                    <span className="font-nunito text-xs">1 March 2024</span>
                    <div className="flex justify-between lg:gap-[18px] items-center mt-2.5">
                      <p className="font-nunito font-bold text-base max-w-[286px]  md:w-full lg:max-w-[286px]">
                        Ad Minima Veniam, Quis Nostru Exercitationem Ullam
                        Corporis
                      </p>
                      <div className="w-[19px] h-[19px]">
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
                  </li>
                );
              })}
            </ul>
          </div>

          {/* subscirbe */}
          <div className="mt-9 ">
            <h3 className="font-nunito font-bold text-2xl leading-[30px] text-[#171717]">
              Join Our Newsletter!
            </h3>
            <div className="flex flex-col md:flex-row gap-y-5 md:gap-2.5 mt-[18px] ">
              <div className="md:max-w-[198px]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-[#171717] rounded-[20px] bg-[#ffff] font-nunito text-sm text-[#404040] py-2.5 px-4"
                />
              </div>

              <div className="md:w-[112px]">
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default BlogDetail;
