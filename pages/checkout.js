import React, { useState } from "react";

function Checkout() {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phoneno, SetPhoneno] = useState("");
  return (
    <section className="px-4 mx-auto max-w-screen-lg py-5 bg-lightgray">
      <div>Go Back</div>

      <div className="space-y-5 sm:gap-5 sm:space-y-0 sm:grid sm:grid-cols-3">
        <div className="sm:col-span-2 bg-white rounded-md px-4 pt-5 pb-3">
          <h3 className="pb-6">CHECKOUT</h3>
          <form>
            <p className="text-orange">BILLING DETAILS</p>
            <div className=" gap-4 grid grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Alex Walter"
                  value={Name}
                  className="inputstyle"
                  onChange={(e) => SetName(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="alexwalter@mail.com"
                  value={Email}
                  className="inputstyle"
                  onChange={(e) => SetEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="pnum" className="mb-1">
                  Phone Number
                </label>
                <input
                  type="num"
                  id="pnum"
                  placeholder="+1354-8236-731"
                  value={Phoneno}
                  className="inputstyle"
                  onChange={(e) => SetPhoneno(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white rounded-md h-min w-full px-4">SUMMARY</div>
      </div>
    </section>
  );
}

export default Checkout;
