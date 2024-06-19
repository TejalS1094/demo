/* eslint-disable react/no-unescaped-entities */
import LoadingCard from "@/components/LoadingCard";
import Footer from "@/components/footer";
import SimpleHeader from "@/components/header";
import InputBox from "@/components/input-box";
import WhiteShopCard from "@/components/white-shop-card";
import useCartStore from "@/lib/cartStore";
import axios from "axios";
import { sub } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useCartStore();

  const router = useRouter();

  const calculateSubtotal = () => {
    let subTotal = 0;

    cartItems.map((item) => {
      let itemTotal = item?.funding_price_per_unit * item.selectedQuantity;
      subTotal += itemTotal;
    });

    return `$${subTotal.toFixed(2)} USD`;
  };

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
        const subArrIds = new Set(cartItems.map((item) => item._id));
        const filteredArray = response.data.Data.filter(
          (itm) => itm.status === "Live"
        );
        const filteredMainArr = filteredArray.filter(
          (item) => !subArrIds.has(item._id)
        );
        setCampaignList(filteredMainArr);
      })
      .catch(function (error) {
        console.error(error);
        setError(true);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [cartItems]);

  return (
    <>
      <div>
        <SimpleHeader headername="simpleheader" />
      </div>

      <section className="mt-12 px-5 md:px-10 lg:px-20">
        <h1 className="font-nunito font-black text-3xl lg:text-5xl lg:leading-[60px] text-[#171717] mb-9">
          My cart
        </h1>
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
                  fill="#171717"
                  opacity="0.24"
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

        <div className="flex gap-16 mt-14 w-full">
          {/* table */}
          <div className="w-full">
            <div className="border border-[#E4E4E7] p-6 rounded-[36px] w-full overflow-x-auto">
              <table className="w-full overflow-x-auto">
                <thead className="border-b pb-4">
                  <tr className="font-nunito font-bold text-base text-[#171717] text-left">
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    return (
                      <tr key={item?._id} className="border-b last:border-0">
                        <td className="py-6">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 rounded-xl">
                              <Image
                                src={item?.product_images[0]?.file_url}
                                width={102}
                                height={134}
                                alt={item?.product_images[0]?.file_name}
                                className="w-full h-full"
                              />
                            </div>
                            <div>
                              <h3 className="font-nunito font-extrabold text-base text-[#171717]">
                                {item?.product_name}
                              </h3>
                              <p className="font-nunito text-xs leading-[18px] text-[#404040]">
                                Collaboration with {item?.artist?.artist_name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-6">
                          <div className="flex items-center   gap-4">
                            <button
                              className="w-[18px] h-[18px] bg-[#FCDF46] flex justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                              onClick={() => {
                                let updatedQuantity = item.selectedQuantity - 1;
                                let updatedItem = {
                                  ...item,
                                  selectedQuantity: updatedQuantity,
                                };

                                updateCartItem(updatedItem);
                              }}
                              disabled={item.selectedQuantity === 1}
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
                              {item?.selectedQuantity}
                            </p>
                            <button
                              className="w-[18px] h-[18px] bg-[#FCDF46] flex justify-center items-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                              onClick={() => {
                                let updatedQuantity = item.selectedQuantity + 1;
                                let updatedItem = {
                                  ...item,
                                  selectedQuantity: updatedQuantity,
                                };

                                updateCartItem(updatedItem);
                              }}
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
                        </td>
                        <td className="py-6">
                          ${(item?.funding_price_per_unit).toFixed(2)} USD
                        </td>
                        <td className="py-6">
                          $
                          {(
                            (item?.funding_price_per_unit).toFixed(2) *
                            item.selectedQuantity
                          ).toFixed(2)}{" "}
                          USD
                        </td>
                        <td className="py-6">
                          <button onClick={() => removeFromCart(item?._id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                            >
                              <g
                                id="Group_52303"
                                dataName="Group 52303"
                                transform="translate(-985 -462)"
                              >
                                <circle
                                  id="Ellipse_600"
                                  dataName="Ellipse 600"
                                  cx="8.5"
                                  cy="8.5"
                                  r="8.5"
                                  transform="translate(985 462)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_13365"
                                  dataName="Path 13365"
                                  d="M144.762,139.028h-2.815V136a.706.706,0,1,0-1.407,0v3.032h-2.815a.76.76,0,0,0,0,1.516h2.815v3.032a.706.706,0,1,0,1.407,0v-3.032h2.815a.76.76,0,0,0,0-1.516Z"
                                  transform="translate(992.469 271.782) rotate(45)"
                                  fill="#fff"
                                />
                              </g>
                            </svg>
                            <span className="font-nunito text-xs leading-[18px] text-[#404040]">
                              Remove
                            </span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* summmary */}
            <div className="block mt-10 lg:hidden bg-container-black px-9 pt-10 pb-[38px] lg:max-w-[420px] w-full rounded-[30px] lg:max-h-[568px]">
              <h3 className="font-nunito font-extrabold text-2xl leading-[30px] mb-8 text-[#ffffff]">
                Cart Summary
              </h3>
              <div className="flex gap-3 mb-9 w-full">
                <div className="w-full">
                  <InputBox
                    type="text"
                    name="coupone"
                    id="coupone"
                    placeholder="Enter discount code"
                    defaultValue=""
                    disabled
                    title="Coming soon..."
                    className="disabled:opacity-50"
                  />
                </div>
                <button
                  className="rounded-lg bg-[#ffffff] px-8 py-3 font-nunito font-bold text-base disabled:opacity-50"
                  disabled
                  title="Coming soon..."
                >
                  Apply
                </button>
              </div>
              <div className="border-b border-[#ffffff]/[0.56] pb-[3px]">
                <div className="flex justify-between mb-[26px]">
                  <p className="font-nunito text-base text-[#ffffff]/[56%]">
                    Item(s)
                  </p>
                  <p className="font-nunito text-base text-[#ffffff] text-right">
                    4 items
                  </p>
                </div>
                <div className="flex justify-between mb-[26px]">
                  <p className="font-nunito text-base text-[#ffffff]/[56%]">
                    Subtotal
                  </p>
                  <p className="font-nunito text-base text-[#ffffff] text-right">
                    {calculateSubtotal()}
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
                    0
                  </p>
                </div>
              </div>
              <div className="flex justify-between my-7">
                <p className="font-nunito text-base text-[#ffffff]/[56%]">
                  Estimated Total
                </p>
                <p className="font-nunito text-base text-[#ffffff] text-right">
                  {calculateSubtotal()}
                </p>
              </div>
              <div>
                <button className="w-full h-full bg-[#FCDF46] py-5 flex items-center justify-center font-nunito font-bold text-xl rounded-[50px]">
                  Proceed to checkout
                </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-20">
              <h2 className="font-nunito font-extrabold text-3xl text-[#171717] mb-[30px]">
                You May Also Like
              </h2>
              {loading && (
                <div className="lg:max-w-[616px]">
                  <LoadingCard />
                </div>
              )}
              {!loading && error && (
                <div className="py-20 md:py-40">
                  <p className="font-nunito text-center text-sm md:text-lg lg:text-xl text-red-600 italic">
                    some technical error occurred!
                  </p>
                </div>
              )}
              {!loading && !error && campaignList.length == 0 && (
                <div className="py-20 md:py-40">
                  <p className="font-nunito text-center text-sm md:text-lg lg:text-xl italic">
                    no live campaigns!
                  </p>
                </div>
              )}

              {!loading &&
                !error &&
                campaignList.length !== 0 &&
                campaignList && (
                  <div className="lg:max-w-[616px]">
                    <WhiteShopCard data={campaignList[0]} />
                  </div>
                )}
            </div>
          </div>
          {/* cart summary */}
          <div className="hidden lg:block bg-container-black px-9 pt-10 pb-[38px] max-w-[420px] w-full rounded-[30px] max-h-[568px]">
            <h3 className="font-nunito font-extrabold text-2xl leading-[30px] mb-8 text-[#ffffff]">
              Cart Summary
            </h3>
            <div className="flex gap-3 mb-9">
              <div>
                <InputBox
                  type="text"
                  name="coupone"
                  id="coupone"
                  placeholder="Enter discount code"
                  defaultValue=""
                  disabled
                  title="Coming soon..."
                />
              </div>
              <button
                className="rounded-lg bg-[#ffffff] px-8 py-3 font-nunito font-bold text-base disabled:opacity-50"
                disabled
                title="Coming soon..."
              >
                Apply
              </button>
            </div>
            <div className="border-b border-[#ffffff]/[0.56] pb-[3px]">
              <div className="flex justify-between mb-[26px]">
                <p className="font-nunito text-base text-[#ffffff]/[56%]">
                  Item(s)
                </p>
                <p className="font-nunito text-base text-[#ffffff] text-right">
                  {cartItems.length} items
                </p>
              </div>
              <div className="flex justify-between mb-[26px]">
                <p className="font-nunito text-base text-[#ffffff]/[56%]">
                  Subtotal
                </p>
                <p className="font-nunito text-base text-[#ffffff] text-right">
                  {calculateSubtotal()}
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
                  0
                </p>
              </div>
            </div>
            <div className="flex justify-between my-7">
              <p className="font-nunito text-base text-[#ffffff]/[56%]">
                Estimated Total
              </p>
              <p className="font-nunito text-base text-[#ffffff] text-right">
                {calculateSubtotal()}
              </p>
            </div>
            <div>
              <Link href={"/checkout-shipping"}>
                <button className="w-full h-full bg-[#FCDF46] py-5 flex items-center justify-center font-nunito font-bold text-xl rounded-[50px]">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 lg:mt-32">
        <Footer />
      </section>
    </>
  );
};

export default Cart;
