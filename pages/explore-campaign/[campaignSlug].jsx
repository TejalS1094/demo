import LoadingCard from "@/components/LoadingCard";
import Button from "@/components/button";
import Footer from "@/components/footer";
import SimpleHeader from "@/components/header";
import Question from "@/components/question";
import WhiteShopCard from "@/components/white-shop-card";
import useCartStore from "@/lib/cartStore";
import axios from "axios";
import { format, formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const CampaignDetailPage = () => {
  const [questionStates, setQuestionStates] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [campaignList, setCampaignList] = useState(null);
  const [listLoading, setListLoading] = useState(true);
  const [listError, setListError] = useState(false);

  const router = useRouter();
  let collectedAmount = 97;
  let targetAmount = 100;
  const percentage = (collectedAmount / targetAmount) * 100;

  const { cartItems, addToCart } = useCartStore();

  const faqData = useMemo(
    () => [
      {
        question: "How does crowdfunding work?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "What happens if a campaign doesn't reach its funding goal?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "How do I know if a campaign is legitimate?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "What happens after a campaign reaches its funding goal?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "Can I cancel my pledge or request a refund?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
    ],
    []
  );

  useEffect(() => {
    if (router.isReady && router.query) {
      const { campaignSlug } = router.query;

      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/campaigns/slug/${campaignSlug}`,
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.Data);
          setData(response.data.Data);
          setError(false);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
          setError(true);
          setLoading(false);
        });

      const listOptions = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/campaigns`,
      };

      axios
        .request(listOptions)
        .then(function (response) {
          console.log(response.data);

          const subArrIds = new Set(cartItems.map((item) => item._id));
          const filteredArray = response.data.Data.filter(
            (itm) => itm.status === "Live"
          );
          const filteredMainArr = filteredArray.filter(
            (item) => !subArrIds.has(item._id)
          );

          const filteredData = filteredMainArr
            .filter((itm) => itm.slug !== campaignSlug)
            .slice(0, 2);
          setCampaignList(filteredData);
        })
        .catch(function (error) {
          console.error(error);
          setListError(true);
        })
        .finally(function () {
          setListLoading(false);
        });
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <SimpleHeader headername="simpleheader" />

      {loading && "Loading..."}
      {!loading && error && "Something went wrong!"}
      {!loading && !error && data && (
        <section className="max-w-[1280px] w-full m-auto px-5 pt-6 lg:pt-12 md:px-10 xl:px-0">
          {/* navigation */}
          <div className="flex">
            <span className="font-nunito text-sm text-[#404040]">
              <Link href={"/"}>Home</Link>
              {" > "}
              <Link href={"/explore-campaign"}>Explore Campaigns</Link>
              {" > "}
            </span>
            <span className="font-nunito font-semibold text-sm text-[#000000]">
              {data?.slug}
            </span>
          </div>

          <div className="flex  flex-col lg:flex-row justify-between gap-16 mt-14">
            {/* images */}
            <div className="grid grid-cols-2 gap-6">
              {data?.product_images?.length > 0 &&
                data?.product_images.map((file, index) => (
                  <div key={index}>
                    <Image
                      src={file?.file_url}
                      width={371}
                      height={485}
                      alt={file?.file_name}
                      className="rounded-lg md:rounded-3xl"
                    />
                  </div>
                ))}
            </div>
            {/* content */}
            <div className="lg:max-w-[450px]">
              <div className="pb-12 border-b border-[#404040]/[0.24]">
                <div className="bg-[#22C55E14] border border-[#22C55E] rounded-2xl px-8 pt-[22px] pb-[25px]">
                  <div className="flex mb-3">
                    <h4 className="font-nunito font-extrabold text-3xl text-[#171717]">
                      2,162%
                    </h4>
                    <span className="font-nunito font-extrabold text-lg text-[#171717]">
                      funded
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="w-full h-[14px] border rounded-full border-[#E4E4E7] bg-[#E4E4E7] overflow-hidden">
                      <div
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: "#22C55E",
                          height: "14px",
                          transition: "width 0.5s ease",
                        }}
                      ></div>
                    </div>
                  </div>
                  <p className="font-nunito font-smibold text-sm text-[#404040]">
                    80 supporters
                  </p>
                </div>

                <div className="mt-9">
                  <div className="mb-9">
                    <h2 className="font-nunito font-black text-4xl text-[#1717171] mb-1.5">
                      {data?.product_name}
                    </h2>
                    <p className="font-nunito text-lg text-[#404040]">
                      Collaboration with{" "}
                      <Link
                        className="underline"
                        href={`/artist/${data?.artist?.slug}`}
                      >
                        {data?.artist?.artist_name}
                      </Link>
                    </p>
                  </div>

                  <div className="mb-5">
                    <div className="flex justify-between mb-4">
                      <p className="font-nunito font-semibold text-base text-[#171717]/[0.9]">
                        Price
                      </p>
                      <p className="font-nunito font-semibold text-base text-[#171717]">
                        ${(data?.funding_price_per_unit).toFixed(2)} USD
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-nunito font-semibold text-base text-[#171717]/[0.9]">
                        Quantity
                      </p>
                      <div className="flex gap-3">
                        <button
                          className="w-[18px] h-[18px] bg-[#FCDF46] flex justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() =>
                            setSelectedQuantity((prev) => prev - 1)
                          }
                          disabled={selectedQuantity == 0}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="3"
                            viewBox="0 0 18 3"
                          >
                            <line
                              id="Line_12"
                              data-name="Line 12"
                              x2="15"
                              transform="translate(1.5 1.5)"
                              fill="none"
                              stroke="#404040"
                              strokeLinecap="round"
                              strokeWidth="3"
                            />
                          </svg>
                        </button>
                        <p className="font-nunito font-semibold text-base text-[#171717]">
                          {selectedQuantity}
                        </p>
                        <button
                          className="w-[18px] h-[18px] bg-[#FCDF46] flex justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() =>
                            setSelectedQuantity((prev) => prev + 1)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="9"
                            viewBox="0 0 15.767 16.983"
                          >
                            <path
                              d="M151.475,142.315h-5.256v-5.661a1.318,1.318,0,1,0-2.628,0v5.661h-5.256a1.419,1.419,0,0,0,0,2.831h5.256v5.661a1.318,1.318,0,1,0,2.628,0v-5.661h5.256a1.419,1.419,0,0,0,0-2.831Z"
                              transform="translate(-137.022 -135.238)"
                              fill="#404040"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* buttons */}

                  <div className="mb-9">
                    <div className="mb-3">
                      {cartItems.some((itm) => itm._id === data._id) ? (
                        <Link href={"/cart"}>
                          <button className=" w-full h-full font-nunito font-extrabold text-base text-[#171717] py-3 border border-[#171717] flex items-center justify-center rounded-[50px]">
                            View Cart
                          </button>
                        </Link>
                      ) : (
                        <button
                          className=" w-full h-full font-nunito font-extrabold text-base text-[#171717] py-3 border border-[#171717] flex items-center justify-center rounded-[50px]"
                          onClick={() => {
                            if (selectedQuantity !== 0) {
                              let productData = { ...data, selectedQuantity };
                              console.log("Final Product Data : ", productData);
                              addToCart(productData);
                            } else {
                              alert("Please select quantity first!");
                            }
                          }}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                    <div>
                      <Button bg="yellow">Buy now</Button>
                    </div>
                  </div>

                  {/* shipment production logos */}
                  <div className="flex justify-between md:gap-11">
                    <div className="flex gap-[11px]">
                      <div className="w-9 h-9">
                        <Image
                          src="/campaign-sold.svg"
                          width={36}
                          height={36}
                          alt="product-sold"
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-nunito font-bold text-xl text-[#171717]">
                          4,324
                        </h4>
                        <p className="font-nunito   text-base text-[#171717]/[0.9]">
                          products sold
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[11px]">
                      <div className="w-9 h-9">
                        <Image
                          src="/campaign-calendar.svg"
                          width={36}
                          height={36}
                          alt="product-sold"
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-nunito font-bold text-xl text-[#171717]">
                          {formatDistance(new Date(), new Date(data?.end_date))}
                        </h4>
                        <p className="font-nunito   text-base text-[#171717]/[0.9]">
                          to go
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[11px]">
                      <div className="w-9 h-9">
                        <Image
                          src="/campaign-shipment.svg"
                          width={36}
                          height={36}
                          alt="product-sold"
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-nunito font-bold text-xl text-[#171717]">
                          {format(new Date(data?.shipment_date), "MMMM d")}
                        </h4>
                        <p className="font-nunito   text-base text-[#171717]/[0.9]">
                          shipment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* meet the artist */}
              <div className="mt-8 pb-8 border-b border-[#404040]/[0.24]">
                <h3 className="font-nunito font-bold text-lg text-[#404040]">
                  Meet the artist
                </h3>
                <div className="flex gap-[7px] mb-3">
                  <div className="w-[18] h-[17]">
                    <Image
                      src="/star-icon.svg"
                      width={17}
                      height={18}
                      alt="stars"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="font-nunito text-lg text-[#404040]">
                    {data?.artist?.artist_name}
                  </p>
                </div>
                <Link
                  href="#"
                  className="underline font-nunito text-base text-[#404040"
                >
                  See all products by {data?.artist?.artist_name}
                </Link>
              </div>

              {/* product detail */}

              <div className="py-[18.5px] border-b border-[#404040]/[0.24]">
                <div className="flex justify-between items-center">
                  <h3 className="font-nunito font-bold text-lg text-[#404040]">
                    Product Details
                  </h3>

                  <button className="w-[11px] h-[12px]">
                    <Image
                      src="/add.svg"
                      width={11}
                      height={12}
                      alt="close-button"
                      className="w-full h-full"
                    />
                  </button>
                </div>

                {/* details */}

                <div>
                  <p
                    className="font-nunito text-base text-[#404040]"
                    dangerouslySetInnerHTML={{
                      __html: data?.product_desc,
                    }}
                  ></p>
                  <div className="mt-[22px] mb-6">
                    <h5 className="font-nunito font-bold text-xs leading-[18px] text-[#171717] uppercase mb-3">
                      DIMENSIONS
                    </h5>
                    <p className="font-nunito text-sm text-[#404040] mb-[11px]">
                      • {data?.product_size}
                    </p>
                    {/* <p className="font-nunito text-sm text-[#404040]">
                      • Width: 20cm
                    </p> */}
                  </div>
                  <div className="mt-[22px] mb-6">
                    <h5 className="font-nunito font-bold text-xs leading-[18px] text-[#171717] uppercase mb-3">
                      MATERIALS
                    </h5>
                    <p
                      className="font-nunito text-sm text-[#404040] mb-[11px]"
                      dangerouslySetInnerHTML={{
                        __html: data?.product_material,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="py-[18.5px] border-b border-[#404040]/[0.24]">
                <div className="flex justify-between items-center">
                  <h3 className="font-nunito font-bold text-lg text-[#404040]">
                    Shipping and Returns
                  </h3>

                  <button className="w-[11px] h-[12px]">
                    <Image
                      src="/add.svg"
                      width={11}
                      height={12}
                      alt="close-button"
                      className="w-full h-full"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* section 3 */}
      <section className="max-w-[1280px] w-full m-auto px-5 md:px-10 xl:px-0 mt-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-1/3 bg-container-black text-center py-8 px-6 lg:py-12 lg:px-[46px] rounded-[36px]">
            <div className="flex  justify-center">
              <div className="w-[60px] h-[71px] mb-9">
                <Image
                  src="/light-icon.svg"
                  width={60}
                  height={71}
                  alt="icons"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="font-nunito font-black text-2xl text-[#ffffff] mb-4">
                Innovative Design
              </h3>
              <p className="font-nunito text-base text-[#E4E4E7]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 bg-container-black text-center py-8 px-6 lg:py-12 lg:px-[46px] rounded-[36px]">
            <div className="flex  justify-center">
              <div className="w-[60px] h-[71px] mb-9">
                <Image
                  src="/premium-icon.svg"
                  width={60}
                  height={71}
                  alt="icons"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div>
              <h3 className="font-nunito font-black text-2xl text-[#ffffff] mb-4">
                Premium Materials
              </h3>
              <p className="font-nunito text-base text-[#E4E4E7]">
                Et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 bg-container-black text-center py-8 px-6 lg:py-12 lg:px-[46px] rounded-[36px]">
            <div className="flex  justify-center">
              <div className="w-[60px] h-[71px] mb-9">
                <Image
                  src="/light-icon.svg"
                  width={60}
                  height={71}
                  alt="icons"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div>
              <h3 className="font-nunito font-black text-2xl text-[#ffffff] mb-4">
                Impactful Contributions
              </h3>
              <p className="font-nunito text-base text-[#E4E4E7]">
                Stet clita kasd gubergren. consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* video section */}
      <section className="max-w-[1280px] w-full m-auto px-5 md:px-10 xl:px-0 mt-20">
        <div className="flex flex-col lg:flex-row gap-[76px]">
          <div className="lg:max-w-[459px]">
            <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] text-[#171717] mb-5">
              Curious About How We Turn Ideas Into Final Product?
            </h1>
            <p className="font-nunito text-base lg:text-lg text-[#404040]">
              Watch our visual history video!
            </p>
            <div className="md:w-[168px] mt-12">
              <Button bg="yellow">Watch video</Button>
            </div>
          </div>
          <div className=" lg:max-w-[745px] relative flex justify-center items-center">
            <Image src="/video.png" width={1024} height={489} alt="vidoe-img" />
            <div className="absolute w-[40px] h-[40px] lg:w-[92px] lg:h-[92px]">
              <Image
                src="/play-btn-img.svg"
                width={92}
                height={92}
                alt="play-btn-img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* faqs */}
      <section className="px-5 lg:px-0 my-32">
        <div className="max-w-[769px] m-auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] mb-5">
              Frequently Asked Questions
            </h1>

            <p className="font-nunito text-base lg:text-lg text-[#404040] max-w-[576px]">
              Exclusive solution for creators to receive donations, recurring
              supports via membership and sell anything to the fans
            </p>
          </div>

          <div className="mt-8 lg:mt-16 max-w-[672px] w-full">
            {faqData.map((item, index) => (
              <Question
                key={index}
                question={item.question}
                answer={item.answer}
                isAnswerShown={questionStates[index]}
                toggleAnswer={() => toggleAnswer(index)}
              />
            ))}
          </div>

          <div className="w-[176px]">
            <Button>View all FAQs</Button>
          </div>
        </div>
      </section>
      {/* you may also like */}
      <section className="max-w-[1280px] w-full m-auto px-5 md:px-10 xl:px-0 mt-20">
        <div>
          <h1 className="font-nunito font-black text-3xl lg:text-4xl text-[#171717] mb-8">
            You May Also Like
          </h1>
          <div className="grid lg:grid-cols-2 gap-12">
            {listLoading &&
              [1, 2].map((data, index) => (
                <div key={index} className="w-full">
                  <LoadingCard />
                </div>
              ))}
            {!listLoading && listError && (
              <div className="py-20 md:py-40 md:col-span-2 xl:col-span-3">
                <p className="font-nunito text-center text-sm md:text-lg lg:text-xl text-red-600 italic">
                  some technical error occurred!
                </p>
              </div>
            )}
            {!listLoading && !listError && campaignList.length == 0 && (
              <div className="py-10 md:py-20 md:col-span-2 xl:col-span-3">
                <p className="font-nunito text-center text-sm md:text-lg lg:text-xl italic">
                  no live campaigns!
                </p>
              </div>
            )}
            {!listLoading &&
              !listError &&
              campaignList.length != 0 &&
              campaignList.map((campaignData) => (
                <WhiteShopCard data={campaignData} key={campaignData?._id} />
              ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="mt-32">
        <Footer />
      </section>
    </>
  );
};

export default CampaignDetailPage;
