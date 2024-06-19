import LoadingCard from "@/components/LoadingCard";
import CustomMenu from "@/components/custom-dropdown";
import FooterWIthCampaign from "@/components/footer-campaign";
import SimpleHeader from "@/components/header";
import ShopCard from "@/components/shop-card";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const ExploreCampaignPage = () => {
  const [campaignList, setCampaignList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  return (
    <>
      <SimpleHeader headername="simpleheader" />

      <section className="mt-12 mb-32 px-5 lg:px-20">
        {/* navigation show */}
        <div className="flex">
          <span>
            <Link href={"/"}>Home</Link>
          </span>
          <span>{">"}</span>
          <span>Explore Campaign</span>
        </div>

        {/* explore  */}

        <div className="mt-12">
          {/* headings */}
          <div>
            <h1 className="font-nunito font-black text-5xl  lg:text-6xl lg:leading-[75px] text-[#171717]">
              Explore Campaigns
            </h1>
            <p className="font-nunito text-lg lg:text-xl text-[#171717] mt-5">
              Explore exciting art campaigns by talented artists. Your support
              helps them continue creating and sharing their unique works.
            </p>
          </div>
          <div className="mt-20">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <div>
                <h3 className="font-nunito font-bold text-lg lg:text-xl">
                  Shop collections
                </h3>
              </div>

              {/* filter section */}
              <div className="mt-5 md:mt-0">
                {/* sorting */}
                <div className="flex  flex-row md:items-center gap-5 md:gap-8">
                  <div className="flex gap-3 flex-col md:flex-row ">
                    <div className="flex items-center gap-[5px]">
                      <div className="w-[11px] h-[11px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10.969"
                          height="11.085"
                          viewBox="0 0 10.969 11.085"
                        >
                          <g
                            fill="#404040"
                            data-name="Layer 51"
                            transform="translate(-3.136 -3)"
                          >
                            <path
                              d="M8.261 6.364a.426.426 0 10.6-.6l-2.5-2.5a.426.426 0 00-.6 0l-2.5 2.5a.426.426 0 10.6.6l1.775-1.772v9.145a.426.426 0 00.853 0V4.592z"
                              data-name="Path 13175"
                              transform="translate(0 -.078)"
                            ></path>
                            <path
                              d="M20.864 10.8a.426.426 0 00-.6 0l-1.772 1.772V3.426a.426.426 0 00-.853 0v9.145L15.864 10.8a.426.426 0 10-.6.6l2.5 2.5a.426.426 0 00.6 0l2.5-2.5a.426.426 0 000-.6z"
                              data-name="Path 13176"
                              transform="translate(-6.884)"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <span className="font-nuntio font-bold text-sm text-[#404040]">
                        Sort:
                      </span>
                    </div>
                    <div className="w-[150px] md:w-[179px]">
                      <CustomMenu
                        options={[
                          {
                            label: "Recently Uploaded",
                          },
                          {
                            label: "  Uploaded",
                          },
                        ]}
                        placeholder="Sort"
                      />
                    </div>
                  </div>
                  <div className="flex  gap-3 flex-col md:flex-row ">
                    <div className="flex items-center gap-[5px]">
                      <div className="w-[13px] h-[13px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.971"
                          height="12.971"
                          viewBox="0 0 12.971 12.971"
                        >
                          <g
                            data-name="Group 52006"
                            transform="translate(0 -.003)"
                          >
                            <g
                              data-name="Group 52001"
                              transform="translate(0 .003)"
                            >
                              <g data-name="Group 52000">
                                <path
                                  fill="#404040"
                                  d="M12.574 1.233h-2.46a1.627 1.627 0 00-3.155 0H.4a.4.4 0 000 .794h6.559a1.627 1.627 0 003.155 0h2.46a.4.4 0 000-.794zM8.537 2.462a.833.833 0 11.833-.833.834.834 0 01-.833.833z"
                                  data-name="Path 13177"
                                  transform="translate(0 -.003)"
                                ></path>
                              </g>
                            </g>
                            <g
                              data-name="Group 52003"
                              transform="translate(0 9.72)"
                            >
                              <g data-name="Group 52002">
                                <path
                                  fill="#404040"
                                  d="M12.574 384.8h-2.46a1.627 1.627 0 00-3.155 0H.4a.4.4 0 000 .794h6.559a1.627 1.627 0 003.155 0h2.46a.4.4 0 000-.794zm-4.037 1.23a.833.833 0 11.833-.833.834.834 0 01-.833.832z"
                                  data-name="Path 13178"
                                  transform="translate(0 -383.57)"
                                ></path>
                              </g>
                            </g>
                            <g
                              data-name="Group 52005"
                              transform="translate(0 4.862)"
                            >
                              <g data-name="Group 52004">
                                <path
                                  fill="#404040"
                                  d="M12.574 193.02H6.012a1.627 1.627 0 00-3.155 0H.4a.4.4 0 000 .794h2.46a1.627 1.627 0 003.155 0h6.562a.4.4 0 000-.794zm-8.139 1.23a.833.833 0 11.833-.833.834.834 0 01-.834.832z"
                                  data-name="Path 13179"
                                  transform="translate(0 -191.79)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="font-nuntio font-bold text-sm text-[#404040]">
                        Filter:
                      </span>
                    </div>
                    <div className=" w-[150px] md:w-[179px]">
                      <CustomMenu
                        options={[
                          {
                            label: "Recently Uploaded",
                          },
                          {
                            label: "  Uploaded",
                          },
                        ]}
                        placeholder="Select status"
                      />
                    </div>
                  </div>
                </div>

                {/* filtering */}
              </div>
            </div>

            {/* card listing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between mt-4">
              {loading &&
                [1, 2, 3, 4, 5, 6].map((data, index) => (
                  <div key={index}>
                    <LoadingCard />
                  </div>
                ))}
              {!loading && error && (
                <div className="py-20 md:py-40 md:col-span-2 xl:col-span-3">
                  <p className="font-nunito text-center text-sm md:text-lg lg:text-xl text-red-600 italic">
                    some technical error occurred!
                  </p>
                </div>
              )}
              {!loading && !error && !campaignList && (
                <div className="py-20 md:py-40 md:col-span-2 xl:col-span-3">
                  <p className="font-nunito text-center text-sm md:text-lg lg:text-xl italic">
                    no live campaigns!
                  </p>
                </div>
              )}
              {!loading &&
                !error &&
                campaignList &&
                campaignList.map((campaignData) => (
                  <div key={campaignData?._id}>
                    <ShopCard data={campaignData} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <FooterWIthCampaign />
    </>
  );
};

export default ExploreCampaignPage;
