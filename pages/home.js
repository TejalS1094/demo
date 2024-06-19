import Button from "@/components/button";
import LiveCampaignCard from "@/components/live-campaign-card";
import ProgressBar from "@/components/progress-bar";
import Question from "@/components/question";
import TopBorderCard from "@/components/top-border-card";
import Layout1 from "@/Layouts/layout-one";
import useCartStore from "@/lib/cartStore";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  const [questionStates, setQuestionStates] = useState([]);

  const [campaignList, setCampaignList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();

  const { cartItems, clearCart } = useCartStore();

  const calculateSubtotal = () => {
    let subTotal = 0;

    cartItems.map((item) => {
      let itemTotal = item?.funding_price_per_unit * item.selectedQuantity;
      subTotal += itemTotal;
    });

    return `$${subTotal.toFixed(2)} USD`;
  };

  const createOrder = (id, user) => {
    const finalCart = {
      order_status: "Pending",
      order_amount: calculateSubtotal(),
      order_details: cartItems,
    };

    const options = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/orders`,
      data: {
        cartData: finalCart,
        userData: user?.user,
        paymentData: { session_id: id },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Order Response", response.data);

        const promises = cartItems.map((element) =>
          createSupporter(element, user)
        );

        // Use Promise.all to wait for all promises to resolve
        Promise.all(promises)
          .then(() => {
            clearCart();
          })
          .catch((error) => {
            console.error("Error in createSupporter calls", error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const createSupporter = (itm, user) => {
    const payloadData = {
      campaign: {
        ...itm,
        totalAmount: itm.selectedQuantity * itm.funding_price_per_unit,
      },
      users: user?.user,
    };

    console.log("Payload Data", payloadData);

    const options = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/supporters`,
      data: payloadData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    if (router.isReady) {
      const { session_id } = router.query;
      console.log("Session Id => ", session_id);
      const user = JSON.parse(localStorage.getItem("user_info"));
      if (session_id && user) {
        createOrder(session_id, user);
      }
    }
  }, [router.isReady]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/campaigns`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const liveCampaignList = response.data.Data.filter(
          (campaign) => campaign.status === "Live"
        );
        setCampaignList(liveCampaignList);
      })
      .catch(function (error) {
        console.error(error);
        setError(true);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  const data = [
    {
      id: "1",
      title: "Upload & Create",
      description:
        "Select available vinyl platform, download the line drawing and submit artwork.",
      border_color: "border-[#22C55E]",
      bg_color: "bg-[#22C55E]",
      text_color: "text-[#D2F4DF]",
    },
    {
      id: "2",
      title: "Campaign Creation",
      description:
        "Once artwork is approved your campaign will be created by Kick Punch Bite and you will be notified when your campaign will go live.",
      border_color: "border-[#C026D3]",
      bg_color: "bg-[#C026D3]",
      text_color: "text-[#F3D3F6]",
    },
    {
      id: "3",
      title: "Live Campaigns & Fulfillment.",
      description:
        "Your campaign is live.  If funding is met then your collaboration will go into production and be directly delivered to your supporters.",
      border_color: "border-[#0EA5E9]",
      bg_color: "bg-[#0EA5E9]",
      text_color: "text-[#CEEDFB]",
    },
  ];

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

  const socialMedia = [
    {
      id: "1",
      icon: "/instagram.svg",
      name: "instagram",
    },
    {
      id: "2",
      icon: "/youtube.svg",
      name: "youtube",
    },
    {
      id: "3",
      icon: "/tiktok.svg",
      name: "tiktok",
    },
    {
      id: "4",
      icon: "/twitter.svg",
      name: "x",
    },
  ];

  // Memoize the faqData array
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
    setQuestionStates(faqData.map(() => false));
  }, [faqData]);

  const toggleAnswer = (index) => {
    const newQuestionStates = [...questionStates];
    newQuestionStates[index] = !newQuestionStates[index];
    setQuestionStates(newQuestionStates);
  };

  return (
    <Layout1>
      <section className="max-w-[1024px] w-full flex flex-col lg:flex-row gap-[66px] px-5 lg:px-0 m-auto">
        <div className="lg:max-w-[536px] w-full">
          <h1 className="font-nunito font-bold text-3xl  md:text-5xl mb-6">
            Kick Punch Bite provides the support you need every step of the way
          </h1>
          <p className="font-nunito text-base md:text-lg text-[#404040]">
            Earn income by collaborating with a premium vinyl toy platform
            produced by Kick Punch Bite through pre-sales and crowdfunding. You
            don't spend a dime, make money, and your supporters get a limited
            edition toy with your art!
          </p>
        </div>

        <div className="pl-5 lg:pl-0">
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`relative bg-[#FFFCEC] border-l-4 ${item.border_color} mb-7 w-full rounded-[22px]   py-[22px] pl-[42px] pr-[31px]`}
              >
                <div
                  className={`absolute top-3 left-[-26px] w-[47px] h-[45px] font-nunito font-bold rounded-full px-4 py-1.5 ${item.bg_color} text-2xl ${item.text_color}`}
                >
                  {item.id}
                </div>
                <h3 className="font-nunito font-bold text-xl lg:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="font-nunito text-sm lg:text-base text-[#404040]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/*  */}
      <section className="px-5 max-w-[1024px] w-full m-auto text-center mt-24 mb-32">
        <div className="">
          <h1 className="font-nunito font-bold text-3xl  lg:text-5xl capitalize mb-5">
            Kick your creativity into high gear & allow us to make your next toy
            a reality!
          </h1>
          <p className="font-nunito text-lg text-[#404040]">
            Get started by selecting an available platform!
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
            <div className="relative w-full lg:w-1/3 rounded-3xl bg-gradient-to-b from-yellow-200 to-yellow-400 flex justify-center px-14 py-8 ">
              <div className="w-full h-full lg:w-[206px] lg:h-[280px] mb-[42px] flex  justify-center items-center">
                <Image
                  src="/mouf-front.png"
                  width={206}
                  height={280}
                  alt="mouf"
                />
              </div>

              <div className="absolute bottom-[-20px] w-[178px]">
                <Button>Start Creating</Button>
              </div>
            </div>
            <div className="relative w-full lg:w-1/3 rounded-3xl bg-gradient-to-b from-yellow-200 to-yellow-400  flex justify-center px-9 py-8">
              <div className=" w-[206px] h-[280px]  lg:w-60 lg:h-[280px] mb-[42px]">
                <div className="w-full lg:w-60 h-full flex justify-center items-center">
                  <Image
                    src="/Mouf-back.png"
                    width={240} // Corrected width
                    height={280}
                    alt="mouf"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="absolute bottom-[-20px] w-[178px]">
                <Button>Start Creating</Button>
              </div>
            </div>
            <div className="relative w-full lg:w-1/3 rounded-3xl bg-gradient-to-b from-yellow-200 to-yellow-400   flex justify-center items-center px-14 py-8">
              <div className="w-full h-full lg:w-[206px] lg:h-[280px] mb-[42px] flex items-center justify-center">
                <Image
                  src="/mouf-front.png"
                  width={206}
                  height={280}
                  alt="mouf"
                />
              </div>

              <div className="absolute bottom-[-20px] w-[178px]">
                <Button>Start Creating</Button>
              </div>
            </div>

            <div className="absolute bottom-[-15px] right-[-15px] lg:bottom-[-25px] lg:right-[-50px] z-10 w-[25px] h-[25px] lg:w-[39px] lg:h-[35px] rotate-180">
              <Image
                src="/3-green-line.svg"
                width={38}
                height={35}
                alt="green-line"
              />
            </div>
          </div>
        </div>
      </section>

      {/* live campaign */}

      <div className="overflow-x-hidden">
        <section className="live-campaing-img bg-padding-box opacity-100">
          <div className="flex flex-col lg:flex-row justify-between xl:gap-[181px] max-w-[1280px] pt-32 pb-24 px-5 md:px-10 xl:px-0 m-auto inner-content">
            {/* text */}
            <div className="lg:max-w-[428px] w-full mb-10 lg:mb-0">
              <h1 className="font-nunito font-black text-3xl lg:text-5xl lg:leading-[60px] mb-5 text-[#ffffff]">
                Live Campaigns
              </h1>
              <p className="font-nunito text-lg text-[#E4E4E7] mb-16">
                Support and make artists toys become a reality by helping them
                meet their funding goals.
              </p>
              <button className="flex gap-4">
                <p className="font-nunito font-bold text-xl text-[#FACC15]">
                  Support artists!
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35.635"
                  height="27.626"
                  viewBox="0 0 35.635 27.626"
                >
                  <path
                    id="Path_13150"
                    dataName="Path 13150"
                    d="M23.531,9.34a1.616,1.616,0,0,0-1.666,1.531c-.088.711-.163,3.685-.2,5.778-2.228,0-12.721-.711-12.721-.711-1.653,0-5.527,0-5.527,5.2v1.741c0,5.2,4,5.2,5.764,5.2l12.666-.732c.244,3.929.616,5.622.955,6.1a1.346,1.346,0,0,0,1.124.522c1.971,0,5.94-4.247,7.105-5.344,1.51-1.416,5.019-4.911,5.019-6.807C36.048,19.994,26.843,9.34,23.531,9.34Z"
                    transform="translate(-1.92 -7.838)"
                    fill="#facc15"
                    stroke="#353535"
                    stroke-width="3"
                  />
                </svg>
              </button>
            </div>

            {/* add to cart */}
            <div className="w-full overflow-y-auto h-[1245px]">
              {loading && (
                <div className="max-w-[672px] w-full mb-12">
                  <div
                    className={`w-full rounded-2xl p-5 md:py-8 md:px-10 lg:px-[64px] bg-container-black-backdrop`}
                  >
                    <div className=" w-full flex flex-col  gap-[51px] py-20 md:py-40 md:flex-row justify-center md:justify-between md:items-center "></div>
                  </div>
                </div>
              )}
              {!loading && error && (
                <div className="py-20 md:py-40">
                  <p className="font-nunito text-center text-sm md:text-lg lg:text-xl text-red-600 italic">
                    some technical error occurred!
                  </p>
                </div>
              )}
              {!loading && !error && !campaignList && (
                <div className="py-20 md:py-40">
                  <p className="font-nunito text-center text-sm text-white md:text-lg lg:text-xl italic">
                    no live campaigns!
                  </p>
                </div>
              )}

              {!loading &&
                !error &&
                campaignList &&
                campaignList.map((campaignData) => (
                  <Link
                    href={`/explore-campaign/${campaignData?.slug}`}
                    key={campaignData?._id}
                  >
                    <div className="max-w-[672px] w-full mb-12">
                      <div
                        className={`w-full rounded-2xl p-5 md:py-8 md:px-10 lg:px-[64px] bg-container-black-backdrop`}
                      >
                        <div className=" w-full flex flex-col  gap-[51px]  md:flex-row justify-center md:justify-between md:items-center ">
                          <div className="md:w-1/2 flex justify-center   mb-6 md:mb-0 ">
                            <div className="w-[120px] h-full lg:w-[220px] lg:h-[303px] rounded-lg md:rounded-xl overflow-hidden">
                              <Image
                                src={campaignData?.product_images[0]?.file_url}
                                width={220}
                                height={303}
                                alt={campaignData?.product_images[0]?.file_name}
                                className="w-full h-full lg:w-[220px] lg:h-[303px] object-contain"
                              />
                            </div>
                          </div>
                          {/* content */}

                          <div className="md:w-1/2 lg:max-w-[273px] w-full">
                            <h3 className="font-nunito font-black text-xl lg:text-2xl lg:leading-[30px] text-[#ffffff] mb-1  ">
                              {campaignData?.product_name}
                            </h3>
                            <span className="font-nunito text-sm text-[#ffffff] text-opacity-75  ">
                              Collaboration with ERK
                            </span>
                            <p
                              className="relative mt-6 mb-10 font-nunito text-sm text-[#ffffff]"
                              dangerouslySetInnerHTML={{
                                __html: campaignData?.product_desc,
                              }}
                            ></p>
                            <div className="mt-6 ">
                              <ProgressBar
                                targetAmount={16000}
                                collectedAmount={15000}
                                bg="black"
                                date={campaignData?.end_date}
                              />
                            </div>
                            <div className="mt-8 w-full">
                              <Button>Add to cart</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>

      {/* video section */}

      <section className="max-w-[1024px] m-auto flex flex-col justify-center items-center px-5">
        <div className="max-w-[769px] text-center">
          <h1 className="font-nunito font-bold  text-xl  md:text-3xl lg:text-5xl mb-5">
            Still curious about the process?
          </h1>
          <p className="font-nunito text-base lg:text-lg  text-[#404040]">
            Dig deeper into how designs become products.
          </p>
        </div>

        <div className="mt-11 lg:mt-16 relative flex justify-center items-center">
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

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full mt-8 lg:mt-12 mb-24 lg:mb-32">
          <div className="bg-image rounded-[28px] md:w-1/2 lg:py-10 lg:px-16 p-5 py-7">
            <h3 className="font-inter font-bold text-2xl lg:text-3xl">
              Inspired to create?
            </h3>
            <p className="font-nunito text-base text-[#404040] mt-3.5 mb-8">
              Your idea could be funded next!
            </p>
            <div className="lg:w-[240px]">
              <Link href={"/start-campaign"}>
                <Button>Start a Campaign</Button>
              </Link>
            </div>
          </div>
          <div className="bg-image rounded-[28px] md:w-1/2 lg:py-10 lg:px-16 p-5 py-7">
            <h3 className="font-inter font-bold text-2xl lg:text-3xl">
              Excited to collect?
            </h3>
            <p className="font-nunito text-base text-[#404040] mt-3.5 mb-8">
              Show your love to creators!
            </p>
            <div className="lg:w-[240px]">
              <Button>Support artists</Button>
            </div>
          </div>
        </div>
      </section>

      {/* exclusive solution */}

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

      {/* explore campaigns */}

      <section className="px-5 lg:px-0 ">
        <div className="max-w-[1024px] m-auto bg-yellow p-5 py-10 md:p-10 lg:py-10 lg:px-32 flex flex-col lg:flex-row gap-10 lg:gap-[97px]">
          <div className="lg:max-w-[326px]">
            <span
              className="font-nunito font-bold text-base
             lg:text-lg"
            >
              Are you an art lover?
            </span>
            <h1 className="font-nunito font-bold  text-4xl lg:text-5xl mt-4">
              Campaign Spotlight
            </h1>
            <p className="font-nunito text-base lg:text-lg text-[#404040] mt-4">
              Support and make artists toys become a reality by helping them
              meet their funding goals.
            </p>
            <div className="lg:w-60 mt-8 lg:mt-[50px]">
              <Button>Explore all campaigns</Button>
            </div>
          </div>
          {loading && (
            <div className="p-8 bg-white/50 animate-pulse rounded-2xl w-full flex flex-col justify-center items-center "></div>
          )}
          {!loading && error && (
            <div className="py-20 md:py-40">
              <p className="font-nunito text-center text-sm md:text-lg lg:text-xl text-red-600 italic">
                some technical error occurred!
              </p>
            </div>
          )}
          {!loading && !error && !campaignList && (
            <div className="py-20 md:py-40">
              <p className="font-nunito text-center text-sm text-white md:text-lg lg:text-xl italic">
                no live campaigns!
              </p>
            </div>
          )}

          {!loading && !error && campaignList && (
            <Link href={`/explore-campaign/${campaignList[0]?.slug}`}>
              <div className="p-8 bg-[#171717]  rounded-2xl w-full flex flex-col justify-center items-center ">
                <div className="flex justify-center lg:w-[195px] h-[218px] mb-8 rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src={campaignList[0]?.product_images[0]?.file_url}
                    width={195}
                    height={218}
                    alt={campaignList[0]?.product_images[0]?.file_name}
                    className="w-full lg:w-[195px] h-[218px] object-contain"
                  />
                </div>
                {/* content */}

                <div>
                  <h3 className="font-nunito font-black text-xl lg:text-2xl lg:leading-[30px] text-[#ffff] mb-1">
                    {campaignList[0]?.product_name}
                  </h3>
                  <span className="font-nunito text-sm text-[#ffff] text-opacity-75 ">
                    Collaboration with ERK
                  </span>
                  <div className="mt-6 *:">
                    <ProgressBar
                      targetAmount={16000}
                      collectedAmount={15000}
                      date={campaignList[0]?.end_date}
                    />
                  </div>
                  <div className="mt-7 w-full">
                    <Button>Add to cart</Button>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* get updates */}

      <section className="px-5 lg:px-0 mt-32">
        <div className="max-w-[576px] m-auto text-center">
          <h2 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] mb-5">
            Get Updates, Instantly!
          </h2>
          <p className="font-nunito text-base lg:text-lg text-[#404040]">
            Exclusive solution for creators to receive donations, recurring
            supports via membership and sell anything to the fans
          </p>
          <div className="mt-12">
            <h5 className="font-nunito font-bold text-base text-[#404040]">
              Follow us! @kickpunchbite
            </h5>
            <div className="flex mt-6 gap-8 justify-center items-center">
              {socialMedia.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] ">
                      <Image
                        src={item.icon}
                        width={60}
                        height={60}
                        alt={item.icon}
                        className=""
                      />
                    </div>

                    <span className="mt-[13px] uppercase font-nunito font-semibold text-[10px]/[14px]  text-[#404040]">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* frequently ask question */}

      <section className="px-5 lg:px-0 my-32">
        <div className="max-w-[769px] m-auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] mb-5">
              Frequently Asked Questions
            </h1>

            <p className="font-nunito text-base lg:text-lg text-[#404040] max-w-[576px]">
              Whether you’re a first-time backer or a seasoned creator, find
              answers to common questions about running and backing a campaign.
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
    </Layout1>
  );
};

export default Home;
