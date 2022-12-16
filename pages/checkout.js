import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Usemycontext } from "../src/components/context/Context";
import { PaystackButton } from "react-paystack";
import { usePaystackPayment } from "react-paystack";
function Checkout() {
  const {
    dispatch,
    store: { cart },
  } = Usemycontext();

  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const vat = (20 / 100) * total;
  const shipping = 50;

  const [Name, SetName] = useState("");

  const [Email, SetEmail] = useState("");
  const [Phoneno, SetPhoneno] = useState("");
  const [Address, SetAddress] = useState("");
  const [City, SetCity] = useState("");
  const [Zipcode, SetZipcode] = useState("");
  const [Country, SetCountry] = useState("");
  const [validate, setvalidate] = useState(false);
  const router = useRouter();

  const checkname = () => {
    const nameEl = document.getElementById("name");
    if (Name === "") {
      nameEl.nextElementSibling.classList.add("invalid");
      nameEl.nextElementSibling.innerHTML = "name cannot be empty";
      setvalidate(false);
      const timeout = setTimeout(() => {
        nameEl.nextElementSibling.innerHTML = "";
        nameEl.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else {
      nameEl.nextElementSibling.classList.remove("invalid");
      setvalidate(true);
    }
  };

  const checkphone = () => {
    const phoneEl = document.getElementById("pnum");
    if (phoneEl.value === "") {
      phoneEl.nextElementSibling.classList.add("invalid");
      phoneEl.nextElementSibling.innerHTML = "phone number cannot be empty";
      setvalidate(false);
      const timeout = setTimeout(() => {
        phoneEl.nextElementSibling.innerHTML = "";
        phoneEl.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else if (phoneEl.value.length < 11) {
      phoneEl.nextElementSibling.classList.add("invalid");
      phoneEl.nextElementSibling.innerHTML = "phone number is not complete";
      setvalidate(false);
      const timeout = setTimeout(() => {
        phoneEl.nextElementSibling.innerHTML = "";
        phoneEl.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else if (isNaN(phoneEl.value)) {
      phoneEl.nextElementSibling.classList.add("invalid");
      phoneEl.nextElementSibling.innerHTML = "input is not a number";
      setvalidate(false);
      const timeout = setTimeout(() => {
        phoneEl.nextElementSibling.innerHTML = "";
        phoneEl.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else {
      phoneEl.nextElementSibling.classList.remove("invalid");
      setvalidate(true);
    }
  };

  const isvalid = () => {
    const email = document.getElementById("email");
    if (Email === "") {
      email.nextElementSibling.classList.add("invalid");
      email.nextElementSibling.innerHTML = "email cannot be empty";
      setvalidate(false);
      const timeout = setTimeout(() => {
        email.nextElementSibling.innerHTML = "";
        email.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else if (!validateEmail(Email)) {
      email.nextElementSibling.classList.add("invalid");
      email.nextElementSibling.innerHTML = "invalid email";
      setvalidate(false);
      const timeout = setTimeout(() => {
        email.nextElementSibling.innerHTML = "";
        email.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else {
      email.nextElementSibling.classList.remove("invalid");
      setvalidate(true);
    }
  };

  function validateEmail(email) {
    // eslint-disable-next-line
    let validEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
  }
  const checkotherinput = () => {
    const addy = document.getElementById("address");
    const zip = document.getElementById("zipcode");
    const city = document.getElementById("city");
    const country = document.getElementById("country");
    if (addy.value === "") {
      addy.nextElementSibling.classList.add("invalid");
      addy.nextElementSibling.innerHTML = " you need to enter a valid address";
      setvalidate(false);
      const timeout = setTimeout(() => {
        addy.nextElementSibling.innerHTML = "";
        addy.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    }
    if (zip.value === "") {
      zip.nextElementSibling.classList.add("invalid");
      zip.nextElementSibling.innerHTML = "your address zip code is required";
      setvalidate(false);
      const timeout = setTimeout(() => {
        zip.nextElementSibling.innerHTML = "";
        zip.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else {
      zip.nextElementSibling.classList.remove("invalid");
      setvalidate(true);
    }

    if (city.value === "") {
      city.nextElementSibling.classList.add("invalid");
      city.nextElementSibling.innerHTML = " your city is required";
      setvalidate(false);
      const timeout = setTimeout(() => {
        city.nextElementSibling.innerHTML = "";
        city.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else {
      city.nextElementSibling.classList.remove("invalid");
      setvalidate(true);
    }

    if (country.value === "") {
      country.nextElementSibling.classList.add("invalid");
      country.nextElementSibling.innerHTML = " your country is required";
      setvalidate(false);
      const timeout = setTimeout(() => {
        country.nextElementSibling.innerHTML = "";
        country.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 3000);
    } else {
      city.nextElementSibling.classList.remove("invalid");
      setvalidate(true);
    }
  };

  const gt = Math.round(total + shipping + vat);
  const pay = gt * 740 * 100;
  const config = {
    reference: new Date().getTime().toString(),
    email: Email,
    amount: pay, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.PAYSTACK_KEY,
  };

  const initPayment = usePaystackPayment(config);

  const onSuccess = () => {
    setTimeout(() => dispatch({ type: "TOGGLE_THANKYOU_MODAL" }), 1500);
    dis;
  };
  const handleformsubmit = async (e) => {
    if (cart.length === 0) return;
    checkname();
    checkphone();
    isvalid();
    checkotherinput();
    if (Name && validate) {
      initPayment(onSuccess);
    }
  };

  return (
    <section className="px-5 xs:px-6 md:px-10 lg:px-5">
      <div className="mx-auto max-w-screen-lg py-10 bg-lightgray">
        <div
          className="pb-6 lg:pb-8 cursor-pointer"
          onClick={() => router.back()}
        >
          Go Back
        </div>

        <div className="space-y-5 sm:gap-5 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-3">
          <form
            className="lg:col-span-2 bg-white rounded-md px-[22px] lg:px-11 pt-5 pb-3"
            onSubmit={handleformsubmit}
          >
            <h3 className="pb-6 text-2xl lg:text-3xl">CHECKOUT</h3>
            <div className="space-y-8 lg:space-y-1">
              <div className="lg:pb-12">
                <p className="text-lightorange font-semibold tracking-[1px] mb-5 lg:font-bold">
                  BILLING DETAILS
                </p>
                <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 flex flex-col font-semibold lg:font-bold"
                    >
                      Name
                      <input
                        type="text"
                        id="name"
                        placeholder="Alex Walter"
                        value={Name}
                        className="inputstyle"
                        onChange={(e) => SetName(e.target.value)}
                        required
                      />
                      <small className="text-xs"></small>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 flex flex-col font-semibold lg:font-bold"
                    >
                      Email
                      <input
                        type="email"
                        id="email"
                        placeholder="alexwalter@mail.com"
                        value={Email}
                        className="inputstyle"
                        onChange={(e) => SetEmail(e.target.value)}
                        required
                      />
                      <small className="text-xs" />
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="pnum"
                      className="mb-1 flex flex-col font-semibold lg:font-bold"
                    >
                      Phone Number
                      <input
                        type="num"
                        id="pnum"
                        placeholder="+1354-8236-731"
                        value={Phoneno}
                        className="inputstyle"
                        onChange={(e) => SetPhoneno(e.target.value)}
                        required
                      />
                      <small className="text-xs" />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-lightorange font-semibold tracking-[1px] mb-5 lg:font-bold">
                  SHIPPING INFO
                </p>
                <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                  <div className="lg:col-span-2">
                    <label
                      htmlFor="pnum"
                      className="mb-1 flex flex-col font-semibold lg:font-bold"
                    >
                      Address
                      <input
                        type="num"
                        id="address"
                        placeholder="1137 Williams Avenue"
                        value={Address}
                        className="inputstyle"
                        onChange={(e) => SetAddress(e.target.value)}
                        required
                      />
                      <small className="text-xs" />
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="pnum"
                      className="mb-1 flex flex-col font-semibold lg:font-bold"
                    >
                      ZipCode
                      <input
                        type="num"
                        id="zipcode"
                        placeholder="10001"
                        value={Zipcode}
                        className="inputstyle"
                        onChange={(e) => SetZipcode(e.target.value)}
                        required
                      />
                      <small className="text-xs" />
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="pnum"
                      className="mb-1 flex flex-col font-semibold lg:font-bold"
                    >
                      City
                      <input
                        type="num"
                        id="city"
                        placeholder="NewYork"
                        value={City}
                        className="inputstyle"
                        onChange={(e) => SetCity(e.target.value)}
                        required
                      />
                      <small />
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="pnum"
                      className="mb-1 flex flex-col font-semibold lg:font-bold"
                    >
                      Country
                      <input
                        type="num"
                        id="country"
                        placeholder="Country"
                        value={Country}
                        className="inputstyle"
                        onChange={(e) => SetCountry(e.target.value)}
                        required
                      />
                      <small />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="bg-white rounded-md h-min w-full py-6 px-[22px] lg:px-7 lg:py-6 font-bold">
            <h3 className="text-2xl pb-6">SUMMARY</h3>
            <div className="mb-5">
              {cart.length > 0
                ? cart.map((c) => (
                    <div className="mb-4 flex cursor-pointer" key={c.id}>
                      <div>
                        <img
                          src={c.image.mobile}
                          alt={c.cartname}
                          className="w-14 h-14 rounded-md"
                        />
                      </div>
                      <div className="pl-3 w-full flex justify-between items-center ">
                        <div>
                          <span className="flex flex-1 text-black font-bold">
                            {c.cartname}
                          </span>
                          <span className="text-black/40 text-sm font-bold">
                            ${c.price.toLocaleString("en-US")}
                          </span>
                        </div>
                        <div className="self-start pt-1 text-black/60">
                          x{c.quantity}
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-black/60">TOTAL</span>{" "}
                  <span className="font-bold text-[16px]">
                    ${total.toLocaleString("en-US")}
                  </span>
                </div>
                {cart.length > 0 && (
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-black/60">
                      SHIPPING
                    </span>{" "}
                    <span className="font-bold text-[16px]">${shipping}</span>
                  </div>
                )}
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-black/60">
                    VAT(INCLUDED)
                  </span>{" "}
                  <span className="font-bold">
                    ${Math.round(vat).toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex justify-between mt-6">
                  <span className="font-semibold text-black/60">
                    GRAND TOTAL
                  </span>{" "}
                  <span className="font-bold text-orange">
                    $
                    {cart.length > 0
                      ? Math.round(total + shipping + vat).toLocaleString(
                          "en-US"
                        )
                      : 0}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleformsubmit}
                className="font-semibold tracking-[1px] mt-6 p-4 uppercase bg-orange w-full text-white border-0 outline-0 cursor-pointer"
              >
                continue & pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
