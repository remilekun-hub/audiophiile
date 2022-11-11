import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { usestripe } from "../lib/usestripecheckout";
import { Usemycontext } from "../src/components/context/Context";

function Checkout() {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phoneno, SetPhoneno] = useState("");
  const [Address, SetAddress] = useState("");
  const [City, SetCity] = useState("");
  const [Zipcode, SetZipcode] = useState("");
  const [Country, SetCountry] = useState("");
  const [validate, setvalidate] = useState(false);
  const router = useRouter();
  const {
    store: { cart },
  } = Usemycontext();
  console.log({ cart });

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, []);

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
      }, 5000);
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
      }, 5000);
    } else if (phoneEl.value.length < 11) {
      phoneEl.nextElementSibling.classList.add("invalid");
      phoneEl.nextElementSibling.innerHTML = "phone number is not complete";
      setvalidate(false);
      const timeout = setTimeout(() => {
        phoneEl.nextElementSibling.innerHTML = "";
        phoneEl.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 5000);
    } else if (isNaN(phoneEl.value)) {
      phoneEl.nextElementSibling.classList.add("invalid");
      phoneEl.nextElementSibling.innerHTML = "input is not a number";
      setvalidate(false);
      const timeout = setTimeout(() => {
        phoneEl.nextElementSibling.innerHTML = "";
        phoneEl.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 5000);
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
      }, 5000);
    } else if (!validateEmail(Email)) {
      email.nextElementSibling.classList.add("invalid");
      email.nextElementSibling.innerHTML = "invalid email";
      setvalidate(false);
      const timeout = setTimeout(() => {
        email.nextElementSibling.innerHTML = "";
        email.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 5000);
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
    if (addy.value === "") {
      addy.nextElementSibling.classList.add("invalid");
      addy.nextElementSibling.innerHTML = " you need to enter a valid address";
      setvalidate(false);
      const timeout = setTimeout(() => {
        addy.nextElementSibling.innerHTML = "";
        addy.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 5000);
    }
    if (zip.value === "") {
      zip.nextElementSibling.classList.add("invalid");
      zip.nextElementSibling.innerHTML =
        " you need to enter your address zip code";
      setvalidate(false);
      const timeout = setTimeout(() => {
        zip.nextElementSibling.innerHTML = "";
        zip.nextElementSibling.classList.remove("invalid");
        return clearTimeout(timeout);
      }, 5000);
    } else {
      zip.nextElementSibling.classList.remove("invalid");
      setvalidate(true);
    }
  };

  const handleformsubmit = (e) => {
    e.preventDefault();
    usestripe();
  };

  return (
    <section className="px-5 xs:px-6 md:px-10 lg:px-5">
      <div className="mx-auto max-w-screen-lg py-10 bg-lightgray">
        <div className="pb-6 lg:pb-8">Go Back</div>

        <div className="space-y-5 sm:gap-5 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-3">
          <form
            className="lg:col-span-2 bg-white rounded-md px-5 lg:px-11 pt-5 pb-3"
            onSubmit={handleformsubmit}
          >
            <h3 className="pb-6 text-3xl">CHECKOUT</h3>
            <div>
              <div className="lg:pb-12">
                <p className="text-lightorange font-medium mb-4 lg:font-bold">
                  BILLING DETAILS
                </p>
                <div className=" gap-4 grid grid-cols-1 lg:grid-cols-2">
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
                <p className="text-lightorange font-medium mb-4 lg:font-bold">
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
          <div className="bg-white rounded-md h-min w-full p-4 lg:px-7 lg:py-6 font-bold">
            SUMMARY
            <div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-black/60">TOTAL</span>{" "}
                  <span className="font-semibold text-[16px] font-medium">
                    {`$ ${cart
                      .reduce((acc, cur) => acc + cur.price, 0)
                      .toLocaleString("en-US")}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-black/60">SHIPPING</span>{" "}
                  <span className="font-medium lg:font-bold">5000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-black/60">
                    VAT(INCLUDED)
                  </span>{" "}
                  <span className="font-medium lg:font-bold">5000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-black/60">
                    GRAND TOTAL
                  </span>{" "}
                  <span className="font-medium lg:font-bold text-orange">
                    5000
                  </span>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleformsubmit}
                className=" mt-6 p-4 uppercase bg-orange w-full text-white border-0 outline-0 cursor-pointer"
              >
                continue and pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
