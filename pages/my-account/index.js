import Button from "@/components/button";
import Footer from "@/components/footer";
import SimpleHeader from "@/components/header";
import InputBox from "@/components/input-box";
import { Contact } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MyAccountPage = () => {
  const [orderDetail, setOrderDetail] = useState(false);

  const handleOrderDetail = () => {
    setOrderDetail(true);
  };
  return (
    <>
      <div>
        <SimpleHeader headername="simpleheader" />
      </div>
      <section className="mt-12 mb-32 px-5 md:px-10 xl:px-0 max-w-[1280px] m-auto">
        <div className="flex mb-9">
          <span className="font-nunito font-bold text-sm text-[#404040]">
            Home
          </span>
          <span className="font-nunito font-bold text-sm text-[#000000]">{`> My Account`}</span>
        </div>

        <div className="mb-9">
          <h1 className="font-nunito font-black text-3xl lg:text-5xl lg:leading-[60px] text-[#171717]">
            My Account
          </h1>
        </div>
        <div className="bg-container-black rounded-[36px] px-5 py-6 md:px-10  md:py-10 lg:py-[72px] lg:px-32">
          <Tabs className="  w-full  m-auto">
            <div className="fw-full lex overflow-x-auto mb-8 md:mb-12">
              <TabList className="w-full flex flex-row gap-5 border-b border-[#FFFFFF]/[0.48]  flex-shrink-0 overflow-x-auto my-account-tabs">
                {["Personal Information", "Password Security", "My Orders"].map(
                  (item, index) => (
                    <Tab
                      key={item}
                      className="font-nunito   text-sm text-[#FFFFFF] focus:border-b-2 focus:border-[#FCDF46] transition-all pb-3 cursor-pointer"
                    >
                      {item}
                    </Tab>
                  )
                )}
              </TabList>
            </div>

            {!orderDetail ? (
              <>
                <TabPanel>
                  <div className="flex flex-col">
                    <h1 className="font-nunito font-bold text-3xl  text-[#ffffff]">
                      Personal Information
                    </h1>
                  </div>
                  <div className="mt-7 lg:mt-[30px] max-w-[672px] w-full">
                    <form className=" ">
                      <div className="space-y-4 md:space-y-8">
                        <div className="flex flex-col md:flex-row  justify-between md:items-center">
                          <div className="flex flex-col text-white  md:max-w-[336px] w-full">
                            <label
                              htmlFor="name"
                              className="font-inter text-base"
                            >
                              Name
                            </label>
                            <span className="font-inter text-sm text-[#ffffff]/[64%] md:mt-2.5">
                              Enter your full name
                            </span>
                          </div>
                          <div className="md:max-w-[376px] w-full mt-3">
                            <InputBox
                              id="name"
                              type="name"
                              placeholder="John Doe"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row  justify-between md:items-center">
                          <div className="flex flex-col text-white md:max-w-[336px] w-full">
                            <label
                              htmlFor="email"
                              className="font-inter text-base"
                            >
                              Email Address
                            </label>
                            <span className="font-inter text-sm text-[#ffffff]/[64%] md:mt-2.5">
                              Enter your business email address
                            </span>
                          </div>
                          <div className="md:max-w-[376px] w-full mt-3">
                            <InputBox
                              id="email"
                              type="email"
                              placeholder="johndoe@gmail.com"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row  justify-between md:items-center">
                          <div className="flex flex-col text-white md:max-w-[336px] w-full">
                            <label
                              htmlFor="phone"
                              className="font-inter text-base"
                            >
                              Phone Number
                            </label>
                            <span className="font-inter text-sm text-[#ffffff]/[64%] md:mt-2.5">
                              Enter your contact information
                            </span>
                          </div>
                          <div className="md:max-w-[376px] w-full mt-3">
                            <InputBox
                              id="phone"
                              type="tel"
                              placeholder="123 456 7890"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-7 md:mt-14">
                        <h3 className="font-nunito font-semibold text-2xl leading-[30px] text-[#ffffff]">
                          Your preferences
                        </h3>
                        <div className="flex mb-14 items-center gap-2 mt-4">
                          <input
                            type="checkbox"
                            className="w-4 h-4  checkbox-custom"
                          />
                          <p className="font-nunito font-semibold text-base text-[#FFFFFF]">
                            Subscribe to Kick Punch Bite Updates
                          </p>
                        </div>
                        <div className="md:max-w-[155px] w-full">
                          <Button bg="yellow">Update changes</Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col">
                    <h1 className="font-nunito font-bold text-3xl  text-[#ffffff]">
                      Change Password
                    </h1>
                  </div>
                  <div className="mt-7 lg:mt-[30px] max-w-[672px] w-full">
                    <form className=" ">
                      <div className="space-y-4 md:space-y-8">
                        <div className="flex flex-col md:flex-row  justify-between md:items-center">
                          <div className="flex flex-col text-white md:max-w-[336px] w-full">
                            <label
                              htmlFor="password"
                              className="font-inter text-base"
                            >
                              Current password
                            </label>
                            <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                              Enter your current account password
                            </span>
                          </div>
                          <div className="md:max-w-[376px] w-full mt-3">
                            <InputBox
                              id="password"
                              type="password"
                              placeholder="********"
                              defaultValue=""
                            />
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row  justify-between md:items-center">
                          <div className="flex flex-col text-white md:max-w-[336px] w-full">
                            <label
                              htmlFor="password"
                              className="font-inter text-base"
                            >
                              Password
                            </label>
                            <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                              Create your password
                            </span>
                          </div>
                          <div className="md:max-w-[376px] w-full mt-3">
                            <InputBox
                              id="password"
                              type="password"
                              placeholder="********"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row  justify-between md:items-center">
                          <div className="flex flex-col text-white md:max-w-[336px] w-full">
                            <label
                              htmlFor="password"
                              className="font-inter text-base"
                            >
                              Confirm password
                            </label>
                            <span className="font-inter text-sm text-[#ffffff]/[62%] md:mt-2.5">
                              Re-enter your password
                            </span>
                          </div>
                          <div className="md:max-w-[376px] w-full mt-3">
                            <InputBox
                              id="password"
                              type="password"
                              placeholder="********"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-7 md:mt-12">
                        <div className="md:max-w-[212px] w-full">
                          <Button bg="yellow">Change password</Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col mb-8">
                    <h1 className="font-nunito font-bold text-3xl  text-[#ffffff]">
                      My Orders
                    </h1>
                  </div>
                  {/* orders */}
                  <div>
                    <div className="bg-[#ffffff]/[0.12] rounded-3xl px-5 py-6 lg:px-12 lg:py-9 ">
                      <div className="flex items-center flex-col lg:flex-row gap-[14px]">
                        <div className="bg-[#171717]/[0.36] px-6 py-2.5 rounded-[50px]">
                          <p className="font-inter font-semibold text-sm text-[#ffffff]">
                            Order ID #1234567
                          </p>
                        </div>
                        <p className="font-nunito font-sm leading-7 text-[#E4E4E7]">
                          Order placed on March 22, 2024
                        </p>
                      </div>
                      <div className="flex justify-between md:items-center flex-col md:flex-row my-[30px] gap-y-6 gap-x-5">
                        <div className=" flex justify-center">
                          <div className="w-full h-[240px] md:h-full md:w-[102px]">
                            <Image
                              src="/erk-checkout.png"
                              width={102}
                              height={134}
                              alt="image"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <div className="min-h-[77px]">
                          <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                            Product name
                          </p>
                          <p className="font-nunito font-bold text-base text-[#ffffff] mb-1.5">{`ERK / 6" Domer`}</p>
                          <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7]">
                            Collaboration with ERK
                          </p>
                        </div>
                        <div className="min-h-[77px]">
                          <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                            Total
                          </p>
                          <p className="font-nunito font-bold text-base text-[#ffffff] mb-1.5">{`$377.00 USD`}</p>
                        </div>
                        <div className="min-h-[77px]">
                          <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                            Quantity
                          </p>
                          <p className="font-nunito font-bold text-base text-[#ffffff] mb-1.5">{`2`}</p>
                        </div>
                        <div className="min-h-[77px]">
                          <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                            Status
                          </p>
                          <p className="w-[87px] bg-[#22C55E3D] py-2 px-4 rounded-md font-inter font-semibold text-xs text-[#ffffff] mb-1.5">{`Delivered`}</p>
                        </div>
                      </div>
                      <div>
                        <button
                          className="underline font-nunito text-xs leading-[18px] text-[#E4E4E7]"
                          onClick={handleOrderDetail}
                        >
                          View order details
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="md:w-[262px] mt-10 md:mt-14">
                      <Button bg="yellow">Explore more campaigns</Button>
                    </div>
                  </div>
                </TabPanel>
              </>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-nunito font-bold text-3xl text-[#ffffff]">
                    Order ID #1234567
                  </h3>
                  <button className="font-nunito text-sm text-[#ffffff]/[64%]" onClick={()=>{setOrderDetail(false)}}>
                    {` < Go back to all orders`}
                  </button>
                </div>
                <div className="bg-[#ffffff]/[0.12] rounded-3xl px-5 py-6 lg:px-12 lg:pt-12 lg:pb-[51px]">
                  <div className="flex items-center flex-col lg:flex-row gap-[14px]">
                    <div className="bg-[#171717]/[0.36] px-6 py-2.5 rounded-[50px]">
                      <p className="font-inter font-semibold text-sm text-[#ffffff]">
                        Order ID #1234567
                      </p>
                    </div>
                    <p className="font-nunito font-sm leading-7 text-[#E4E4E7]">
                      Order placed on March 22, 2024
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row  justify-between md:items-center    my-[30px] gap-y-6 gap-x-5 mb-14">
                    <div className=" flex justify-center">
                      <div className="w-full h-[240px] md:h-full md:w-[102px]">
                        <Image
                          src="/erk-checkout.png"
                          width={102}
                          height={134}
                          alt="image"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="min-h-[77px]">
                      <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                        Product name
                      </p>
                      <p className="font-nunito font-bold text-base text-[#ffffff] mb-1.5">{`ERK / 6" Domer`}</p>
                      <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7]">
                        Collaboration with ERK
                      </p>
                    </div>
                    <div className="min-h-[77px]">
                      <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                        Total
                      </p>
                      <p className="font-nunito font-bold text-base text-[#ffffff] mb-1.5">{`$377.00 USD`}</p>
                    </div>
                    <div className="min-h-[77px]">
                      <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                        Quantity
                      </p>
                      <p className="font-nunito font-bold text-base text-[#ffffff] mb-1.5">{`2`}</p>
                    </div>
                    <div className="min-h-[77px]">
                      <p className=" font-nunito text-xs leading-[18px] text-[#E4E4E7] mb-[11px]">
                        Status
                      </p>
                      <p className="w-[87px] bg-[#22C55E3D] py-2 px-4 rounded-md font-inter font-semibold text-xs text-[#ffffff] mb-1.5">{`Delivered`}</p>
                    </div>
                  </div>
                  {/* payment summary */}
                  <div className="flex flex-col lg:flex-row  justify-between xl:gap-[211px] mb-14">
                    <div className="mb-5 lg:mb-0">
                      <h3 className="font-nunito font-bold text-xl text-[#ffffff] mb-2">
                        Payment Summary
                      </h3>
                      <p className="font-nunito text-sm text-[#ffffff]/[64%]">
                        Your total payment summary
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-14 justify-between mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]/[56%]">
                          Subtotal
                        </p>
                        <p className="font-nunito text-base text-[#ffffff]">
                          $400.00 USD
                        </p>
                      </div>
                      <div className="flex gap-14 justify-between mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]/[56%]">
                          Shipping
                        </p>
                        <p className="font-nunito text-base text-[#ffffff]">
                          $43.00 USD
                        </p>
                      </div>
                      <div className="flex gap-14 justify-between mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]/[56%]">
                          Discount applied
                        </p>
                        <p className="font-nunito text-base text-[#ffffff]">
                          - $80.00 USD
                        </p>
                      </div>
                      <div className="flex gap-14 justify-between">
                        <p className="font-nunito text-base text-[#ffffff]/[56%]">
                          Total
                        </p>
                        <p className="font-nunito text-base text-[#ffffff]">
                          $377.00 USD
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* shipping detail */}
                  <div className="flex flex-col lg:flex-row  justify-between xl:gap-[211px] mb-14">
                    <div className="mb-5 lg:mb-0">
                      <h3 className="font-nunito font-bold text-xl text-[#ffffff] mb-2">
                        Payment Summary
                      </h3>
                      <p className="font-nunito text-sm text-[#ffffff]/[64%]">
                        Your total payment summary
                      </p>
                    </div>
                    <div className=" ">
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          John Doe
                        </p>
                      </div>
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          johndoe@gmail.com
                        </p>
                      </div>
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          123 456 789
                        </p>
                      </div>
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          Auburn, Alabama USA
                        </p>
                      </div>
                      <div className="">
                        <p className="font-nunito text-base text-[#ffffff]">
                          Abby Road 36830
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* billing details */}

                  <div className="flex flex-col lg:flex-row  justify-between xl:gap-[211px] mb-14">
                    <div className="mb-5 lg:mb-0">
                      <h3 className="font-nunito font-bold text-xl text-[#ffffff] mb-2">
                        Billing Details
                      </h3>
                      <p className="font-nunito text-sm text-[#ffffff]/[64%]">
                        Your entered billing details
                      </p>
                    </div>
                    <div className=" ">
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          John Doe
                        </p>
                      </div>
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          johndoe@gmail.com
                        </p>
                      </div>
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          123 456 789
                        </p>
                      </div>
                      <div className="mb-[14px]">
                        <p className="font-nunito text-base text-[#ffffff]">
                          Auburn, Alabama USA
                        </p>
                      </div>
                      <div className="">
                        <p className="font-nunito text-base text-[#ffffff]">
                          Abby Road 36830
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* tracking order */}

                  <div className="flex flex-col lg:flex-row justify-between xl:gap-[211px] mb-14">
                    <div className="mb-5 lg:mb-0">
                      <h3 className="font-nunito font-bold text-xl text-[#ffffff] mb-2">
                        Track Order
                      </h3>
                      <p className="font-nunito text-sm text-[#ffffff]/[64%]">
                        Check the progress of your order
                      </p>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-y-4">
                      <div className=" ">
                        <div className="w-5 h-5 mb-2">
                          <Image
                            src="/fund.svg"
                            width={20}
                            height={20}
                            alt="funded"
                            className="w-full"

                          />
                        </div>

                        <p className="font-nunito text-base text-[#ffffff]">
                          Funded
                        </p>
                      </div>
                      <div className="white-dash-border mx-[14.5px]"/>
                      <div className=" ">
                        <div className="w-5 h-5 mb-2">
                          <Image
                            src="/production.svg"
                            width={20}
                            height={20}
                            alt="Production"
                            className="w-full"

                          />
                        </div>

                        <p className="font-nunito text-base text-[#ffffff]">
                          Production
                        </p>
                      </div>
                      <div className="white-dash-border mx-[14.5px]"/>

                      <div className=" ">
                        <div className="w-[25px] h-5 mb-2">
                          <Image
                            src="/shipped.svg"
                            width={25}
                            height={20}
                            alt="Shipped"
                            className="w-full"
                          />
                        </div>
                        <p className="font-nunito text-base text-[#ffffff]">
                          Shipped
                        </p>
                      </div>
                      <div className="white-dash-border mx-[14.5px]"/>

                      <div className=" ">
                        <div className="w-5 h-5 mb-2 ">
                          <Image
                            src="/delivered.svg"
                            width={17}
                            height={20}
                            alt="Delivered"
                            className="w-full"

                          />
                        </div>

                        <p className="font-nunito text-base text-[#ffffff]">
                          Delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* need help */}
                <div className="mt-[46px]">

                  <p className="font-nunito font-semibold text-base text-[#ffffff]/[0.8] mb-2.5">Need help with your order?</p>
                  <Link href="/contact" className="underline font-nunito font-semibold text-base text-[#FCDF46]" >Contact Us </Link>
                </div>
              </div>
            )}
          </Tabs>
        </div>
      </section>
      <section className="mt-12 lg:mt-24">
        <Footer />
      </section>
    </>
  );
};

export default MyAccountPage;
