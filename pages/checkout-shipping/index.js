/* eslint-disable react/no-unescaped-entities */
import CustomMenu from "@/components/custom-dropdown";
import SimpleHeader from "@/components/header";
import useCartStore from "@/lib/cartStore";
import { Menu } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import * as yup from "yup";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import { useRouter } from "next/router";
import axios from "axios";

const Cart = () => {
  const router = useRouter();

  const [userLoading, setUserLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [isSame, setIsSame] = useState(true);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);

  const { cartItems, updateCartItem, removeFromCart } = useCartStore();

  const calculateSubtotal = () => {
    let subTotal = 0;

    cartItems.map((item) => {
      let itemTotal = item?.funding_price_per_unit * item.selectedQuantity;
      subTotal += itemTotal;
    });

    return `$${subTotal.toFixed(2)} USD`;
  };

  let countryOptions = [
    {
      label: "India",
      value: "India",
    },
    {
      label: "Canada",
      value: "Canada",
    },
    {
      label: "Australia",
      value: "Australia",
    },
  ];

  let stateOptions = [
    {
      label: "Maharashtra",
      value: "Maharashtra",
    },
    {
      label: "Alberta",
      value: "Alberta",
    },
    {
      label: "Victoria",
      value: "Victoria",
    },
  ];

  let cityOptions = [
    {
      label: "Pune",
      value: "Pune",
    },
    {
      label: "Toronto",
      value: "Toronto",
    },
    {
      label: "Brisbane",
      value: "Brisbane",
    },
  ];

  const initialValues = {
    first_name: userData?.user?.shippingAddress?.first_name ?? "",
    last_name: userData?.user?.shippingAddress?.last_name ?? "",
    email: userData?.user?.shippingAddress?.email ?? "",
    country: userData?.user?.shippingAddress?.country ?? "",
    state: userData?.user?.shippingAddress?.state ?? "",
    city: userData?.user?.shippingAddress?.city ?? "",
    street_address: userData?.user?.shippingAddress?.street_address ?? "",
    street_address_2: userData?.user?.shippingAddress?.street_address_2 ?? "",

    billing_first_name: userData?.user?.billingAddress?.first_name ?? "",
    billing_last_name: userData?.user?.billingAddress?.last_name ?? "",
    billing_email: userData?.user?.billingAddress?.email ?? "",
    billing_country: userData?.user?.billingAddress?.country ?? "",
    billing_state: userData?.user?.billingAddress?.state ?? "",
    billing_city: userData?.user?.billingAddress?.city ?? "",
    billing_street_address:
      userData?.user?.billingAddress?.street_address ?? "",
    billing_street_address_2:
      userData?.user?.billingAddress?.street_address_2 ?? "",
  };

  const validationSchema = yup.lazy(() => {
    let billinObject = {
      billing_first_name: !isSame ? yup.string().required("Required") : "",
      billing_last_name: !isSame ? yup.mixed().required("Required") : "",
      billing_email: !isSame ? yup.string().email().required("Required") : "",
    };

    return yup.object().shape({
      ...billinObject,
      first_name: yup.string().required("Required"),
      last_name: yup.string().required("Required"),
      email: yup.string().email().required("Required"),
    });
  });

  const handlePayment = async () => {
    const newData = cartItems.map((itm) => ({
      name: itm?.product_name,
      image: itm?.product_images[0]?.file_url,
      quantity: itm?.selectedQuantity,
      price: itm?.funding_price_per_unit,
    }));
    // console.log("NEW DATA => ", newData);

    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      items: newData,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const shipping_ddress = {
      first_name: values?.first_name,
      last_name: values?.last_name,
      email: values?.email,
      country: values?.country,
      state: values?.state,
      city: values?.city,
      street_address: values?.street_address,
      street_address_2: values?.street_address_2,
    };

    var billing_address;

    if (isSame) {
      billing_address = {
        first_name: values?.first_name,
        last_name: values?.last_name,
        email: values?.email,
        country: values?.country,
        state: values?.state,
        city: values?.city,
        street_address: values?.street_address,
        street_address_2: values?.street_address_2,
      };
    } else {
      billing_address = {
        first_name: values?.billing_first_name,
        last_name: values?.billing_last_name,
        email: values?.billing_email,
        country: values?.billing_country,
        state: values?.billing_state,
        city: values?.billing_city,
        street_address: values?.billing_street_address,
        street_address_2: values?.billing_street_address_2,
      };
    }

    const newUserData = {
      ...userData?.user,
      shippingAddress: shipping_ddress,
      billingAddress: billing_address,
    };

    const userInfo = {
      ...userData,
      user: newUserData,
    };
    localStorage.setItem("user_info", JSON.stringify(userInfo));

    handlePayment();

    setLoading(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_info"));

    if (user?.user) {
      setUserData(user);
      setUserLoading(false);
    } else {
      alert("You have to login first!");
      router.push("/login?redirect_to=/checkout-shipping");
      setUserLoading(false);
    }
  }, []);

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
          {userLoading ? (
            <div className="w-full">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="w-full">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="xl:max-w-[624px] mt-8" id="shipping-form">
                    <div className="w-full">
                      <h2 className="font-nunito font-extrabold text-3xl mb-6">
                        Shipping Details
                      </h2>

                      <div className="flex gap-6 mb-6 w-full">
                        <div className="flex flex-col w-1/2 relative">
                          <label
                            htmlFor="first_name"
                            className="font-nunito font-semibold text-base mb-[14px]"
                          >
                            First Name
                          </label>
                          <Field
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="Eg. John"
                            className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                          />

                          <ErrorMessage
                            name="first_name"
                            component="p"
                            className="absolute top-0 right-0 text-red-600 text-sm"
                          />
                        </div>
                        <div className="flex flex-col w-1/2 relative">
                          <label
                            htmlFor="last_name"
                            className="font-nunito font-semibold text-base mb-[14px]"
                          >
                            Last Name
                          </label>
                          <Field
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Eg. John"
                            className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                          />
                          <ErrorMessage
                            name="last_name"
                            component="p"
                            className="absolute top-0 right-0 text-red-600 text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex gap-6 mb-6 w-full">
                        <div className="flex flex-col w-full relative">
                          <label
                            htmlFor="email"
                            className="font-nunito font-semibold text-base mb-[14px]"
                          >
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Eg. john@gmail.com"
                            className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="absolute top-0 right-0 text-red-600 text-sm"
                          />
                        </div>
                      </div>

                      {/* country */}
                      <div className="flex gap-6 mb-6 w-full">
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="country"
                            className="font-nunito font-semibold text-base mb-[14px]"
                          >
                            Country
                          </label>
                          <Menu
                            as="div"
                            className={`relative rounded-lg bg-[#E4E4E7]/[0.24]  py-2 px-2 md:pl-3 md:pr-2.5 w-full`}
                          >
                            <Menu.Button className="relative flex items-center justify-between w-full">
                              {values?.country?.label ? (
                                <span className="font-nunito font-bold text-sm md:text-base text-[#171717]">
                                  {values?.country?.label}{" "}
                                </span>
                              ) : (
                                <span
                                  className={`font-nunito text-sm md:text-base text-[#404040]/[80%]`}
                                >
                                  Select country
                                </span>
                              )}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.777"
                                height="4.593"
                                viewBox="0 0 7.777 4.593"
                              >
                                <path
                                  id="white_dropdown_arrow"
                                  data-name="white dropdown arrow"
                                  d="M23.5,43.81a.509.509,0,0,1-.225-.093L20.094,40.54a.318.318,0,0,1,.449-.449L23.5,43.042l2.949-2.952a.318.318,0,1,1,.449.449l-3.175,3.175c-.059.06-.25.081-.225.093Z"
                                  transform="translate(-19.598 -39.594)"
                                  fill="#171717"
                                  stroke="#171717"
                                  strokeWidth="0.75"
                                />
                              </svg>
                            </Menu.Button>

                            <Menu.Items
                              className="w-full flex flex-col absolute left-0 mt-4  origin-top-right divide-y divide-gray-100 rounded-lg bg-white  ring-1 ring-black/5 focus:outline-none z-10"
                              style={{ boxShadow: "0px 3px 12px #00000014" }}
                            >
                              {countryOptions.map((option, index) => (
                                <Menu.Item
                                  key={index}
                                  className="py-2 px-2 md:pl-3 md:pr-2.5 text-left"
                                >
                                  {({ active }) => (
                                    <button
                                      className={`font-nunito text-sm md:text-base text-[#171717] ${
                                        active
                                          ? "bg-gray-100 text-black"
                                          : "bg-white text-black"
                                      }`}
                                      onClick={() => {
                                        setFieldValue("country", option);
                                      }}
                                    >
                                      {option.label}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Menu>
                        </div>
                      </div>

                      {/* state and city */}
                      <div className="flex gap-6 mb-6 w-full">
                        <div className="flex flex-col w-1/2">
                          <label
                            htmlFor="state"
                            className="font-nunito font-semibold text-base mb-[14px]"
                          >
                            State
                          </label>
                          <Menu
                            as="div"
                            className={`relative rounded-lg bg-[#E4E4E7]/[0.24]  py-2 px-2 md:pl-3 md:pr-2.5 w-full`}
                          >
                            <Menu.Button className="relative flex items-center justify-between w-full">
                              {values?.state?.label ? (
                                <span className="font-nunito font-bold text-sm md:text-base text-[#171717]">
                                  {values?.state?.label}{" "}
                                </span>
                              ) : (
                                <span
                                  className={`font-nunito text-sm md:text-base text-[#404040]/[80%]`}
                                >
                                  Select state
                                </span>
                              )}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.777"
                                height="4.593"
                                viewBox="0 0 7.777 4.593"
                              >
                                <path
                                  id="white_dropdown_arrow"
                                  data-name="white dropdown arrow"
                                  d="M23.5,43.81a.509.509,0,0,1-.225-.093L20.094,40.54a.318.318,0,0,1,.449-.449L23.5,43.042l2.949-2.952a.318.318,0,1,1,.449.449l-3.175,3.175c-.059.06-.25.081-.225.093Z"
                                  transform="translate(-19.598 -39.594)"
                                  fill="#171717"
                                  stroke="#171717"
                                  strokeWidth="0.75"
                                />
                              </svg>
                            </Menu.Button>

                            <Menu.Items
                              className="w-full flex flex-col absolute left-0 mt-4  origin-top-right divide-y divide-gray-100 rounded-lg bg-white  ring-1 ring-black/5 focus:outline-none z-10"
                              style={{ boxShadow: "0px 3px 12px #00000014" }}
                            >
                              {stateOptions.map((option, index) => (
                                <Menu.Item
                                  key={index}
                                  className="py-2 px-2 md:pl-3 md:pr-2.5 text-left"
                                >
                                  {({ active }) => (
                                    <button
                                      className={`font-nunito text-sm md:text-base text-[#171717] ${
                                        active
                                          ? "bg-gray-100 text-black"
                                          : "bg-white text-black"
                                      }`}
                                      onClick={() => {
                                        setFieldValue("state", option);
                                      }}
                                    >
                                      {option.label}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Menu>
                        </div>
                        <div className="flex flex-col w-1/2">
                          <label
                            htmlFor="city"
                            className="font-nunito font-semibold text-base mb-[14px]"
                          >
                            City
                          </label>
                          <Menu
                            as="div"
                            className={`relative rounded-lg bg-[#E4E4E7]/[0.24]  py-2 px-2 md:pl-3 md:pr-2.5 w-full`}
                          >
                            <Menu.Button className="relative flex items-center justify-between w-full">
                              {values?.city?.label ? (
                                <span className="font-nunito font-bold text-sm md:text-base text-[#171717]">
                                  {values?.city?.label}{" "}
                                </span>
                              ) : (
                                <span
                                  className={`font-nunito text-sm md:text-base text-[#404040]/[80%]`}
                                >
                                  Select city
                                </span>
                              )}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.777"
                                height="4.593"
                                viewBox="0 0 7.777 4.593"
                              >
                                <path
                                  id="white_dropdown_arrow"
                                  data-name="white dropdown arrow"
                                  d="M23.5,43.81a.509.509,0,0,1-.225-.093L20.094,40.54a.318.318,0,0,1,.449-.449L23.5,43.042l2.949-2.952a.318.318,0,1,1,.449.449l-3.175,3.175c-.059.06-.25.081-.225.093Z"
                                  transform="translate(-19.598 -39.594)"
                                  fill="#171717"
                                  stroke="#171717"
                                  strokeWidth="0.75"
                                />
                              </svg>
                            </Menu.Button>

                            <Menu.Items
                              className="w-full flex flex-col absolute left-0 mt-4  origin-top-right divide-y divide-gray-100 rounded-lg bg-white  ring-1 ring-black/5 focus:outline-none z-10"
                              style={{ boxShadow: "0px 3px 12px #00000014" }}
                            >
                              {cityOptions.map((option, index) => (
                                <Menu.Item
                                  key={index}
                                  className="py-2 px-2 md:pl-3 md:pr-2.5 text-left"
                                >
                                  {({ active }) => (
                                    <button
                                      className={`font-nunito text-sm md:text-base text-[#171717] ${
                                        active
                                          ? "bg-gray-100 text-black"
                                          : "bg-white text-black"
                                      }`}
                                      onClick={() => {
                                        setFieldValue("city", option);
                                      }}
                                    >
                                      {option.label}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Menu>
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
                          <Field
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
                            <span className="font-nunito text-sm">
                              (optional)
                            </span>
                          </label>
                          <Field
                            type="text"
                            name="street_address_2"
                            id="street_address_2"
                            placeholder="Apartment, suite, etc."
                            className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <h2 className="font-nunito font-extrabold text-3xl pt-5">
                      Billing Details
                    </h2>

                    <div className="flex items-center gap-[10.5px] my-3">
                      <input
                        type="checkbox"
                        className="checkout-checkbox"
                        id="sameCheck"
                        checked={isSame}
                        onChange={() => setIsSame(!isSame)}
                      />
                      <label
                        className="font-nunito font-semibold"
                        htmlFor="sameCheck"
                      >
                        Same as shipping address
                      </label>
                    </div>

                    {!isSame && (
                      <>
                        <div className="flex gap-6 mb-6 w-full">
                          <div className="flex flex-col w-1/2 relative">
                            <label
                              htmlFor="billing_first_name"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              First Name
                            </label>
                            <Field
                              type="text"
                              name="billing_first_name"
                              id="billing_first_name"
                              placeholder="Eg. John"
                              className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                            />
                            <ErrorMessage
                              name="billing_first_name"
                              component="p"
                              className="absolute top-0 right-0 text-red-600 text-sm"
                            />
                          </div>
                          <div className="flex flex-col w-1/2 relative">
                            <label
                              htmlFor="billing_last_name"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              Last Name
                            </label>
                            <Field
                              type="text"
                              name="billing_last_name"
                              id="billing_last_name"
                              placeholder="Eg. John"
                              className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                            />
                            <ErrorMessage
                              name="billing_last_name"
                              component="p"
                              className="absolute top-0 right-0 text-red-600 text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex gap-6 mb-6 w-full">
                          <div className="flex flex-col w-full relative">
                            <label
                              htmlFor="billing_email"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              Email
                            </label>
                            <Field
                              type="email"
                              name="billing_email"
                              id="billing_email"
                              placeholder="Eg. john@gmail.com"
                              className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                            />
                            <ErrorMessage
                              name="billing_email"
                              component="p"
                              className="absolute top-0 right-0 text-red-600 text-sm"
                            />
                          </div>
                        </div>

                        {/* country */}
                        <div className="flex gap-6 mb-6 w-full">
                          <div className="flex flex-col w-full">
                            <label
                              htmlFor="billing_country"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              Country
                            </label>
                            <Menu
                              as="div"
                              className={`relative rounded-lg bg-[#E4E4E7]/[0.24]  py-2 px-2 md:pl-3 md:pr-2.5 w-full`}
                            >
                              <Menu.Button className="relative flex items-center justify-between w-full">
                                {values?.billing_country?.label ? (
                                  <span className="font-nunito font-bold text-sm md:text-base text-[#171717]">
                                    {values?.billing_country?.label}{" "}
                                  </span>
                                ) : (
                                  <span
                                    className={`font-nunito text-sm md:text-base text-[#404040]/[80%]`}
                                  >
                                    Select country
                                  </span>
                                )}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="7.777"
                                  height="4.593"
                                  viewBox="0 0 7.777 4.593"
                                >
                                  <path
                                    id="white_dropdown_arrow"
                                    data-name="white dropdown arrow"
                                    d="M23.5,43.81a.509.509,0,0,1-.225-.093L20.094,40.54a.318.318,0,0,1,.449-.449L23.5,43.042l2.949-2.952a.318.318,0,1,1,.449.449l-3.175,3.175c-.059.06-.25.081-.225.093Z"
                                    transform="translate(-19.598 -39.594)"
                                    fill="#171717"
                                    stroke="#171717"
                                    strokeWidth="0.75"
                                  />
                                </svg>
                              </Menu.Button>

                              <Menu.Items
                                className="w-full flex flex-col absolute left-0 mt-4  origin-top-right divide-y divide-gray-100 rounded-lg bg-white  ring-1 ring-black/5 focus:outline-none z-10"
                                style={{
                                  boxShadow: "0px 3px 12px #00000014",
                                }}
                              >
                                {countryOptions.map((option, index) => (
                                  <Menu.Item
                                    key={index}
                                    className="py-2 px-2 md:pl-3 md:pr-2.5 text-left"
                                  >
                                    {({ active }) => (
                                      <button
                                        className={`font-nunito text-sm md:text-base text-[#171717] ${
                                          active
                                            ? "bg-gray-100 text-black"
                                            : "bg-white text-black"
                                        }`}
                                        onClick={() => {
                                          setFieldValue(
                                            "billing_country",
                                            option
                                          );
                                        }}
                                      >
                                        {option.label}
                                      </button>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Menu>
                          </div>
                        </div>

                        {/* state and city */}
                        <div className="flex gap-6 mb-6 w-full">
                          <div className="flex flex-col w-1/2">
                            <label
                              htmlFor="billing_state"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              State
                            </label>
                            <Menu
                              as="div"
                              className={`relative rounded-lg bg-[#E4E4E7]/[0.24]  py-2 px-2 md:pl-3 md:pr-2.5 w-full`}
                            >
                              <Menu.Button className="relative flex items-center justify-between w-full">
                                {values?.billing_state?.label ? (
                                  <span className="font-nunito font-bold text-sm md:text-base text-[#171717]">
                                    {values?.billing_state?.label}{" "}
                                  </span>
                                ) : (
                                  <span
                                    className={`font-nunito text-sm md:text-base text-[#404040]/[80%]`}
                                  >
                                    Select state
                                  </span>
                                )}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="7.777"
                                  height="4.593"
                                  viewBox="0 0 7.777 4.593"
                                >
                                  <path
                                    id="white_dropdown_arrow"
                                    data-name="white dropdown arrow"
                                    d="M23.5,43.81a.509.509,0,0,1-.225-.093L20.094,40.54a.318.318,0,0,1,.449-.449L23.5,43.042l2.949-2.952a.318.318,0,1,1,.449.449l-3.175,3.175c-.059.06-.25.081-.225.093Z"
                                    transform="translate(-19.598 -39.594)"
                                    fill="#171717"
                                    stroke="#171717"
                                    strokeWidth="0.75"
                                  />
                                </svg>
                              </Menu.Button>

                              <Menu.Items
                                className="w-full flex flex-col absolute left-0 mt-4  origin-top-right divide-y divide-gray-100 rounded-lg bg-white  ring-1 ring-black/5 focus:outline-none z-10"
                                style={{
                                  boxShadow: "0px 3px 12px #00000014",
                                }}
                              >
                                {stateOptions.map((option, index) => (
                                  <Menu.Item
                                    key={index}
                                    className="py-2 px-2 md:pl-3 md:pr-2.5 text-left"
                                  >
                                    {({ active }) => (
                                      <button
                                        className={`font-nunito text-sm md:text-base text-[#171717] ${
                                          active
                                            ? "bg-gray-100 text-black"
                                            : "bg-white text-black"
                                        }`}
                                        onClick={() => {
                                          setFieldValue(
                                            "billing_state",
                                            option
                                          );
                                        }}
                                      >
                                        {option.label}
                                      </button>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Menu>
                          </div>
                          <div className="flex flex-col w-1/2">
                            <label
                              htmlFor="billing_city"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              City
                            </label>
                            <Menu
                              as="div"
                              className={`relative rounded-lg bg-[#E4E4E7]/[0.24]  py-2 px-2 md:pl-3 md:pr-2.5 w-full`}
                            >
                              <Menu.Button className="relative flex items-center justify-between w-full">
                                {values?.billing_city?.label ? (
                                  <span className="font-nunito font-bold text-sm md:text-base text-[#171717]">
                                    {values?.billing_city?.label}{" "}
                                  </span>
                                ) : (
                                  <span
                                    className={`font-nunito text-sm md:text-base text-[#404040]/[80%]`}
                                  >
                                    Select city
                                  </span>
                                )}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="7.777"
                                  height="4.593"
                                  viewBox="0 0 7.777 4.593"
                                >
                                  <path
                                    id="white_dropdown_arrow"
                                    data-name="white dropdown arrow"
                                    d="M23.5,43.81a.509.509,0,0,1-.225-.093L20.094,40.54a.318.318,0,0,1,.449-.449L23.5,43.042l2.949-2.952a.318.318,0,1,1,.449.449l-3.175,3.175c-.059.06-.25.081-.225.093Z"
                                    transform="translate(-19.598 -39.594)"
                                    fill="#171717"
                                    stroke="#171717"
                                    strokeWidth="0.75"
                                  />
                                </svg>
                              </Menu.Button>

                              <Menu.Items
                                className="w-full flex flex-col absolute left-0 mt-4  origin-top-right divide-y divide-gray-100 rounded-lg bg-white  ring-1 ring-black/5 focus:outline-none z-10"
                                style={{
                                  boxShadow: "0px 3px 12px #00000014",
                                }}
                              >
                                {cityOptions.map((option, index) => (
                                  <Menu.Item
                                    key={index}
                                    className="py-2 px-2 md:pl-3 md:pr-2.5 text-left"
                                  >
                                    {({ active }) => (
                                      <button
                                        className={`font-nunito text-sm md:text-base text-[#171717] ${
                                          active
                                            ? "bg-gray-100 text-black"
                                            : "bg-white text-black"
                                        }`}
                                        onClick={() => {
                                          setFieldValue("billing_city", option);
                                        }}
                                      >
                                        {option.label}
                                      </button>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Menu>
                          </div>
                        </div>

                        {/* address 1 */}
                        <div className="flex gap-6 mb-6 w-full">
                          <div className="flex flex-col w-full">
                            <label
                              htmlFor="billing_street_address"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              Address 1
                            </label>
                            <Field
                              type="text"
                              name="billing_street_address"
                              id="billing_street_address"
                              placeholder="Street address"
                              className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                            />
                          </div>
                        </div>

                        {/* address 2*/}
                        <div className="flex gap-6 mb-6 w-full">
                          <div className="flex flex-col w-full">
                            <label
                              htmlFor="billing_street_address_2"
                              className="font-nunito font-semibold text-base mb-[14px]"
                            >
                              Address 2{" "}
                              <span className="font-nunito text-sm">
                                (optional)
                              </span>
                            </label>
                            <Field
                              type="text"
                              name="billing_street_address_2"
                              id="billing_street_address_2"
                              placeholder="Apartment, suite, etc."
                              className="bg-[#E4E4E7]/[0.24] px-4 pt-[14px] pb-3 rounded-lg"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* checkbox */}
                    {/* <div className="flex items-center gap-[10.5px] mt-10">
                      <input type="checkbox" className="checkout-checkbox" />
                      <span className="font-nunito font-semibold ">
                        Create your Kick Punch Bite account
                      </span>
                    </div>
                    <div className="flex items-center gap-[10.5px]">
                      <input type="checkbox" className="checkout-checkbox" />
                      <span className="font-nunito font-semibold ">
                        Save this information for later
                      </span>
                    </div> */}

                    <div className="mt-14">
                      <button
                        className="w-full h-full bg-[#FCDF46] py-5 flex items-center justify-center font-nunito font-bold text-xl rounded-[50px] disabled:opacity-50"
                        type="submit"
                        // onClick={createCheckOutSession}
                        disabled={loading}
                      >
                        Pay now
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )}

          {/* order summary */}
          <div className="block h-fit mt-10  bg-container-black px-9 pt-10 pb-[38px] xl:max-w-[505px] w-full rounded-[30px]  ">
            <h3 className="font-nunito font-extrabold text-2xl leading-[30px] mb-6 text-[#ffffff]">
              Order Summary
            </h3>

            <div className="border-b border-t border-[#ffffff]/[0.56] pt-7 pb-[3px] ">
              <div className="space-y-7 mb-7">
                {cartItems.map((item) => (
                  <div
                    className="flex justify-between items-center"
                    key={item?._id}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-[102px] h-[134px]">
                        <Image
                          src={item?.product_images[0]?.file_url}
                          width={102}
                          height={134}
                          alt={item?.product_images[0]?.file_name}
                          className="w-full h-full rounded-xl"
                        />
                      </div>
                      <div>
                        <h3 className="font-nunito font-extrabold text-base text-[#ffffff]">
                          {item?.product_name}
                        </h3>
                        <p className="font-nunito text-xs leading-[18px] text-[#E4E4E7]">
                          Collaboration with {item?.artist?.artist_name}
                        </p>
                        <div className="flex items-center   gap-4 mt-5">
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
                          <p className="font-nunito font-extrabold text-base text-[#ffffff]">
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
                      </div>
                    </div>
                    <div>
                      <p className="  font-nunito font-bold text-base text-[#FFFFFF] text-right">
                        ${(item?.funding_price_per_unit).toFixed(2)} USD
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between pt-7 mb-[26px] border-t border-[#ffffff]/[0.56]">
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
          </div>
        </div>

        {/* shiiping method */}
        {/* <div className="xl:max-w-[624px] mt-[46px]">
          <h2 className="font-nunito font-bold text-3xl text-[#171717] mb-5">
            Shipping method
          </h2>
          <p className="py-3 px-4 bg-[#E4E4E7]/[0.24]  italic text-base text-[#171717]/[80%] font-nunito font-semibold rounded-lg ">
            Enter shipping details to view available shipping methods.
          </p>
        </div> */}
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
