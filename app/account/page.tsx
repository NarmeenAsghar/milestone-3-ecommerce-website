import React from "react";

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full bg-[#312F30]">
        {/* top div */}
        <div className="flex items-center justify-center h-full mt-20">
            <h1 className="font-[Italiana] text-[40px] font-semibold text-[#FFF4E9] md:mb-4">
              My Account
            </h1>
        </div>

      {/* form section */}
      <div className="min-h-screen flex justify-center items-center px-20">

          <div className="flex flex-col md:flex-row justify-between gap-20 w-full md:h-[537px]">
            {/* login section */}
            <div className="md:w-[400px] mt-10 order-2">
            <h1 className="font-semibold text-[36px] text-[#FFF4E9] font-[Bodoni Moda] mb-4 mt-1">Log In</h1>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="username or email address"
                    className="block font-[Bodoni Moda] font-medium text-[16px] text-[#FFF4E9] pb-4"
                  >
                     Username or email address
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#312F30] font-[Bodoni Moda] font-medium text-[16px]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block font-[Bodoni Moda] font-medium text-[16px] text-[#FFF4E9] pb-4"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#312F30] font-[Bodoni Moda] font-medium text-[16px]"
                    required
                  />
                </div>

                <div className="mb-4 mt-8 flex flex-row gap-4">
                  <label
                    htmlFor="remember me"
                    className="block font-[Bodoni Moda] font-medium text-[16px] text-[#FFF4E9] pb-4"
                  >
                    Remember me
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="remember me"
                    placeholder=""
                    className="w-[30px] h-[27px] p-3 border-[1px] border-[#9f9f9f] rounded-[5px] text-[#312F30] font-[Bodoni Moda] font-medium text-[16px]"
                    required
                  />
                </div>

                <div className="flex flex-row justify-center items-center gap-10">
                <button
                  type="submit"
                  className="w-[200px] py-3 md:mr-2 border-[1px] border-[#FFF4E9] rounded-[15px] font-[Bodoni Moda] font-light text-[16px] text-[#FFF4E9]"
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="font-[Bodoni Moda] font-light text-[16px] text-[#FFF4E9]"
                >
                  Lost Your Password?
                </button>
                </div>
              </form>
            </div>

            {/* register section */}
            <div className="md:w-[435px] mt-11 order-2">
                <h1 className="font-semibold text-[36px] text-[#FFF4E9] font-[Bodoni Moda] mb-4">Register</h1>
              <form>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-[Bodoni Moda] font-medium text-[16px] text-[#FFF4E9] pb-4"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#312F30] font-[Bodoni Moda] font-medium text-[16px] mb-5"
                    required
                  />
                </div>

                <p className="font-[Bodoni Moda] font-light text-[16px] text-[#FFF4E9] mb-4">
                A link to set a new password will be sent to your email address.
                </p>

                <p className="font-[Bodoni Moda] font-light text-[16px] text-[#FFF4E9] mb-7">
                Your personal data will be used to support your experience throughout this website, 
                to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.
                </p>

                <button
                  type="submit"
                  className="w-[237px] py-3 border-[1px] border-[#FFF4E9] rounded-[15px] font-[Bodoni Moda] font-light text-[16px] text-[#FFF4E9]"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
    </section>
  );
}

export default page;

