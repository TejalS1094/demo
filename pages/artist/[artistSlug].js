import CurvedHeader from "@/components/curved-header";
import FooterWIthCampaign from "@/components/footer-campaign";
import LiveCampaignCard from "@/components/live-campaign-card";
import PastCampaignCard from "@/components/past-campaign-card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ArtistPage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [campaignData, setCampaignData] = useState(null);
  const [campaignError, setCampaignError] = useState(false);
  const [campaignLoading, setCampaignLoading] = useState(true);

  const artistCampaignList = (artistSlug) => {
    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/campaigns`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const artitstData = response.data.Data.filter(
          (campaign) => campaign?.artist?.slug === artistSlug
        );
        setCampaignData(artitstData);
        setCampaignError(false);
      })
      .catch(function (error) {
        console.error(error);
        setCampaignError(true);
      })
      .finally(() => setCampaignLoading(false));
  };

  useEffect(() => {
    if (router.isReady && router.query) {
      const { artistSlug } = router.query;

      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/artists/slug/${artistSlug}`,
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
          setError(false);
          artistCampaignList(artistSlug);
        })
        .catch(function (error) {
          console.error(error);
          setError(true);
        })
        .finally(() => setLoading(false));
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <div>
        <CurvedHeader>
          <div className="text-center mb-7  md:mb-9 lg:mb-12">
            {loading && (
              <>
                <div className="h-9 w-80 md:h-12 md:w-[480px] lg:h-14 lg:w-[680px] bg-white/40 rounded-lg animate-pulse mx-auto mb-5"></div>
                <div className="h-4 w-72 md:h-5 md:w-[430px] lg:h-6 lg:w-[480px] bg-white/40 rounded-lg animate-pulse mx-auto"></div>
              </>
            )}

            {!loading && error && (
              <p className="font-nunito text-sm md:text-lg lg:text-xl text-red-600 italic">
                some technical error occurred!
              </p>
            )}

            {!loading && !error && data && (
              <>
                <h1 className="font-nunito font-black text-3xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[75px] mb-5">{`Meet the Artist - ${data?.artist?.artist_name}`}</h1>
                <p className="font-nunito text-sm md:text-lg lg:text-xl">{`80 supporters · 4 campaigns · Since 17 March, 2023`}</p>
              </>
            )}
          </div>

          <div className="artist-blank-header"></div>
        </CurvedHeader>

        {/* profile pic */}
        <div className="-mt-[50px] md:-mt-[100px] flex justify-center px-5 lg:px-0">
          <div
            className={`w-[150px] h-[150px] lg:w-[252px] lg:h-[252px] rounded-full ${
              loading ? "bg-slate-300 animate-pulse" : ""
            }`}
          >
            {!loading && !error && data && (
              <Image
                src="/profile-pic.png"
                width={252}
                height={252}
                alt="profile-pic"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>

      {/* about section */}
      <section className="px-5 md:px-0 mt-9 md:mt-16 max-w-[672px] m-auto">
        <div className="mb-6 md:mb-8">
          {loading && (
            <>
              <h2 className="font-nunito font-extrabold text-2xl lg:text-3xl mb-4 md:mb-6">
                About Artist
              </h2>
              <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5 mb-5">
                <p className="h-3 w-full md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
                <p className="h-3 w-full md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
                <p className="h-3 w-1/2 md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
              </div>

              <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5">
                <p className="h-3 w-full md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
                <p className="h-3 w-full md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
                <p className="h-3 w-full md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
                <p className="h-3 w-3/4 md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
              </div>
            </>
          )}
          {!loading && !error && data && (
            <>
              <h2 className="font-nunito font-extrabold text-2xl lg:text-3xl mb-4 md:mb-6">
                About {data?.artist?.artist_name}
              </h2>
              <p className="font-nunito text-sm md:text-base lg:text-lg text-[#404040] mb-6">
                {`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`}
              </p>
              <p className="font-nunito text-sm md:text-base lg:text-lg text-[#404040]">
                {`At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`}
              </p>
            </>
          )}
        </div>

        {loading && (
          <div className="mb-6 md:mb-8">
            <h3 className="font-nunito font-bold text-base lg:text-lg mb-2.5 md:mb-3">
              Portfolio Link
            </h3>
            <p className="h-3 w-3/4 md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
          </div>
        )}

        {!loading && !error && data && (
          <div className="mb-6 md:mb-8">
            <h3 className="font-nunito font-bold text-base lg:text-lg mb-2.5 md:mb-3">
              Portfolio Link
            </h3>
            <Link href={`/artist/${data?.artist?.slug}`}>
              <p className="font-nunito text-base lg:text-lg underline overflow-break">
                {`https://kickpunchbite.com/artist/${data?.artist?.slug}`}
              </p>
            </Link>
          </div>
        )}

        {loading && (
          <>
            <h3 className="font-nunito font-bold text-base lg:text-lg mb-2.5 md:mb-3">
              Email
            </h3>
            <p className="h-3 w-64 md:h-4 lg:h-5 bg-slate-300 rounded animate-pulse"></p>
          </>
        )}

        {!loading && !error && data && (
          <div>
            <h3 className="font-nunito font-bold text-base lg:text-lg mb-2.5 md:mb-3">
              Email
            </h3>
            <a
              href={`mailto:${data?.artist?.artist_email}`}
              className="font-nunito text-base lg:text-lg underline"
            >
              {data?.artist?.artist_email}
            </a>
          </div>
        )}
      </section>
      {/* live campaigns */}

      <section className="max-w-[672px] w-full m-auto px-5 md:px-0 mt-12 md:mt-16 lg:mt-24">
        {loading && (
          <h2 className="font-nunito font-extrabold text-2xl lg:text-3xl">
            Live Campaigns
          </h2>
        )}

        {!error && data && (
          <h2 className="font-nunito font-extrabold text-2xl lg:text-3xl">
            Live Campaigns
          </h2>
        )}

        {campaignLoading && (
          <div
            className={`w-full mt-8 rounded-2xl h-[430px] md:h-64 lg:h-80 bg-slate-300 animate-pulse`}
          ></div>
        )}

        {!campaignLoading && campaignError && (
          <div className="py-20 md:py-40">
            <p className="font-nunito text-center text-sm md:text-lg lg:text-xl text-red-600 italic">
              some technical error occurred!
            </p>
          </div>
        )}

        {!campaignLoading && !campaignError && !campaignData && (
          <div className="py-20 md:py-40">
            <p className="font-nunito text-center text-sm text-white md:text-lg lg:text-xl italic">
              no live campaigns!
            </p>
          </div>
        )}

        {!campaignLoading &&
          !campaignError &&
          campaignData &&
          campaignData
            ?.filter((cmp) => cmp?.status === "Live")
            ?.map((campaign) => (
              <div key={campaign?._id} className="w-full mt-8">
                <div className="mb-6">
                  {/* bg props is used to change the bg color bg normal is used for applying the bg-black-container */}
                  <LiveCampaignCard
                    bg="bgnormal"
                    loading={campaignLoading}
                    error={campaignError}
                    data={campaign}
                  />
                </div>
              </div>
            ))}
      </section>

      <section className="max-w-[672px] w-full m-auto px-5 md:px-0 mt-12 md:mt-16 lg:mt-24">
        {loading && (
          <h2 className="font-nunito font-extrabold text-2xl lg:text-3xl">
            Past Successful Campaigns
          </h2>
        )}

        {!error && data && (
          <h2 className="font-nunito font-extrabold text-2xl lg:text-3xl">
            Past Successful Campaigns
          </h2>
        )}

        {campaignLoading && (
          <div
            className={`w-full mt-8 rounded-2xl h-[430px] md:h-64 lg:h-80 bg-slate-300 animate-pulse`}
          ></div>
        )}

        {!campaignLoading && campaignError && (
          <div className="py-20 md:py-40">
            <p className="font-nunito text-center text-sm md:text-lg lg:text-xl text-red-600 italic">
              some technical error occurred!
            </p>
          </div>
        )}

        {!campaignLoading && !campaignError && !campaignData && (
          <div className="py-20 md:py-40">
            <p className="font-nunito text-center text-sm text-white md:text-lg lg:text-xl italic">
              no live campaigns!
            </p>
          </div>
        )}

        {!campaignLoading &&
          !campaignError &&
          campaignData &&
          campaignData
            ?.filter((cmp) => cmp?.status === "Completed")
            ?.map((campaign) => (
              <div key={campaign?._id} className="w-full mt-8">
                <div className="mb-6">
                  {/* bg props is used to change the bg color bg normal is used for applying the bg-black-container */}
                  <PastCampaignCard
                    bg="bgnormal"
                    loading={campaignLoading}
                    error={campaignError}
                    data={campaign}
                  />
                </div>
              </div>
            ))}
      </section>
      {/* footer */}

      <section className="mt-12 md:mt-24 lg:mt-32">
        <FooterWIthCampaign />
      </section>
    </>
  );
};

export default ArtistPage;
