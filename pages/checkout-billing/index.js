/* eslint-disable react/no-unescaped-entities */
import CustomMenu from "@/components/custom-dropdown";
import Footer from "@/components/footer";
import SimpleHeader from "@/components/header";
import InputBox from "@/components/input-box";
import WhiteShopCard from "@/components/white-shop-card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Cart = () => {
  const router = useRouter();
  const [count, setCount] = useState();

  const handleIncrement = () => {};

  const handleDecrement = () => {};

  return (
    <>
      <div>
        <SimpleHeader headername="simpleheader" />
      </div>

      <section className="mt-12 px-5 md:px-10 xl:px-0 max-w-[1280px] m-auto">
        <h1 className="font-nunito font-black text-3xl lg:text-5xl lg:leading-[60px] text-[#171717] mb-9">
          Checkout
        </h1>
        {/* bar */}
        <div className="flex justify-center items-center rounded-xl py-[18px] bg-[#FFFCEC]">
          <div className="flex items-center justify-center gap-[10.5px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.496"
                height="16.496"
                viewBox="0 0 16.496 16.496"
              >
                <path
                  id="Path_13313"
                  dataName="Path 13313"
                  d="M16.729,2H3.767A1.77,1.77,0,0,0,2,3.767V16.729A1.77,1.77,0,0,0,3.767,18.5H16.729A1.77,1.77,0,0,0,18.5,16.729V3.767A1.77,1.77,0,0,0,16.729,2ZM14.776,8.321,9.768,13.034a.59.59,0,0,1-.8.011L6.322,10.688a.589.589,0,1,1,.782-.88l2.248,2,4.615-4.344a.589.589,0,0,1,.808.858Z"
                  transform="translate(-2 -2)"
                  fill="#22C55E"
                  opacity="1"
                />
              </svg>
            </div>
            <h3 className="font-nunito font-semibold text-base capitalize">
              Review Cart
            </h3>
          </div>
          <div className="dash-border mx-[14.5px]"></div>
          <div className="flex items-center justify-center gap-[10.5px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.496"
                height="16.496"
                viewBox="0 0 16.496 16.496"
              >
                <path
                  id="Path_13313"
                  dataName="Path 13313"
                  d="M16.729,2H3.767A1.77,1.77,0,0,0,2,3.767V16.729A1.77,1.77,0,0,0,3.767,18.5H16.729A1.77,1.77,0,0,0,18.5,16.729V3.767A1.77,1.77,0,0,0,16.729,2ZM14.776,8.321,9.768,13.034a.59.59,0,0,1-.8.011L6.322,10.688a.589.589,0,1,1,.782-.88l2.248,2,4.615-4.344a.589.589,0,0,1,.808.858Z"
                  transform="translate(-2 -2)"
                  fill="#22C55E"
                  opacity="1"
                />
              </svg>
            </div>
            <h3 className="font-nunito font-semibold text-base capitalize">
              {" "}
              Shipping
            </h3>
          </div>
          <div className="dash-border mx-[14.5px]"></div>
          <div className="flex items-center justify-center gap-[10.5px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.496"
                height="16.496"
                viewBox="0 0 16.496 16.496"
              >
                <path
                  id="Path_13313"
                  dataName="Path 13313"
                  d="M16.729,2H3.767A1.77,1.77,0,0,0,2,3.767V16.729A1.77,1.77,0,0,0,3.767,18.5H16.729A1.77,1.77,0,0,0,18.5,16.729V3.767A1.77,1.77,0,0,0,16.729,2ZM14.776,8.321,9.768,13.034a.59.59,0,0,1-.8.011L6.322,10.688a.589.589,0,1,1,.782-.88l2.248,2,4.615-4.344a.589.589,0,0,1,.808.858Z"
                  transform="translate(-2 -2)"
                  fill="#171717"
                  opacity="0.24"
                />
              </svg>
            </div>
            <h3 className="font-nunito font-semibold text-base capitalize">
              Payment
            </h3>
          </div>
        </div>

        <div className="flex gap-16 flex-col xl:flex-row mt-14 w-full">
          {/* form */}
          <div className="w-full">
            <h2 className="font-nunito font-extrabold text-3xl">
             Billing Details
            </h2>

               {/* checkbox */}
            <div className="flex items-center gap-[10.5px] mt-8">
              <input type="checkbox" className="checkout-checkbox" />
              <span className="font-nunito font-semibold ">
              Same as shipping address
              </span>
            </div>
            <form className="xl:max-w-[624px] mt-[30px]">
              <div className="flex gap-6 mb-6 w-full">
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="first_name"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Eg. John"
                    className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="last_name"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Eg. John"
                    className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-6 mb-6 w-full">
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="first_name"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Eg. John"
                    className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="last_name"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Eg. John"
                    className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                  />
                </div>
              </div>
              {/* country */}
              <div className="flex gap-6 mb-6 w-full">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="Country"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    Country
                  </label>
                  <CustomMenu
                    placeholder="Select country of delivery"
                    options={[
                      {
                        label: "Nigeria",
                        value: "Nigeria",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* state and city */}
              <div className="flex gap-6 mb-6 w-full">
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="first_name"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    State
                  </label>
                  {/* <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Eg. John"
                    className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                  /> */}
                  <CustomMenu placeholder="Select state" options={[]} />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="last_name"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    City
                  </label>
                  <CustomMenu placeholder="Select City" options={[]} />
                </div>
              </div>
              {/* address 1 */}
              <div className="flex gap-6 mb-6 w-full">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="street_address"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    name="street_address"
                    id="street_address"
                    placeholder="Street address"
                    className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                  />
                </div>
              </div>
              {/* address 2*/}
              <div className="flex gap-6 mb-6 w-full">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="street_address_2"
                    className="font-nunito font-semibold text-base mb-[14px]"
                  >
                    Address 2{" "}
                    <span className="font-nunito text-sm">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="street_address_2"
                    id="street_address_2"
                    placeholder="Apartment, suite, etc."
                    className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                  />
                </div>
              </div>

            
            </form>
             <div className="mt-14">
              <button className="w-full h-full bg-[#FCDF46] py-5 flex items-center justify-center font-nunito font-bold text-xl rounded-[50px]">
             Pay now
              </button>
            </div>
            
          </div>
          {/* order summary */}
          <div className="block mt-10  bg-container-black px-9 pt-10 pb-[38px] xl:max-w-[505px] w-full rounded-[30px]  max-h-[710px]">
            <h3 className="font-nunito font-extrabold text-2xl leading-[30px] mb-6 text-[#ffffff]">
              Order Summary
            </h3>

            <div className="border-b border-t border-[#ffffff]/[0.56] pt-7 pb-[3px] ">
              <div className="flex justify-between items-center mb-[26px] border-b border-[#ffffff]/[0.56] pb-7">
                <div className="flex items-center gap-4">
                  <div className="w-[102px] h-[134px] rounded-xl">
                    <Image
                      src="/erk-checkout.png"
                      width={102}
                      height={134}
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-nunito font-extrabold text-base text-[#ffffff]">
                      ERK / 6" Domer
                    </h3>
                    <p className="font-nunito text-xs leading-[18px] text-[#E4E4E7]">
                      Collaboration with ERK
                    </p>
                    <div className="flex items-center   gap-4 mt-5">
                      <div className="w-[18px] h-[18px] bg-[#FCDF46] flex justify-center items-center rounded-full">
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
                      </div>
                      <p className="font-nunito font-extrabold text-base text-[#ffffff]">
                        2
                      </p>
                      <div className="w-[18px] h-[18px] bg-[#FCDF46] flex justify-center items-center  rounded-full">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="  font-nunito font-bold text-base text-[#FFFFFF] text-right">
                    $400.00 USD
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-[26px]">
                <p className="font-nunito text-base text-[#ffffff]/[56%]">
                  Subtotal
                </p>
                <p className="font-nunito text-base text-[#ffffff] text-right">
                  $400.00 USD
                </p>
              </div>
              <div className="flex justify-between mb-[26px]">
                <p className="font-nunito text-base text-[#ffffff]/[56%]">
                  Shipping
                </p>
                <p className="font-nunito text-base text-[#ffffff]/[80%] text-right">
                  *Calculated at next step
                </p>
              </div>
              <div className="flex justify-between mb-[26px]">
                <p className="font-nunito text-base text-[#ffffff]/[56%]">
                  Discount applied
                </p>
                <p className="font-nunito text-base text-[#ffffff] text-right">
                  - $80.00 USD
                </p>
              </div>
            </div>
            <div className="flex justify-between my-7">
              <p className="font-nunito text-base text-[#ffffff]/[56%]">
                Estimated Total
              </p>
              <p className="font-nunito text-base text-[#ffffff] text-right">
                $320.00 USD
              </p>
            </div>
        
          </div>

        
        </div>

       
      </section>
      <div className=" px-5 mb-10 md:px-10  lg:px-20 mt-16 lg:mt-32">
        <div className="lower border-t pt-7 flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between w-full ">
          <p className="font-nunito text-xs leading-[18px] text-[#404040]">
            Copyright © 2024 Kick Punch Bite
          </p>
          <div className="flex gap-1">
            <Link href="/terms-of-use">
              <span className="font-nunito text-xs leading-[18px] text-[#404040] border-r-2 pr-1">
                Terms of Use
              </span>
            </Link>

            <Link href="/privacy-policy">
              <span className="font-nunito text-xs leading-[18px] text-[#404040]">
                {" "}
                Privacy Policy
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
