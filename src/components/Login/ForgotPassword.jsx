import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <>
        <section className="pt-36">
          <div className="container mt-24 max-w-lg">
            <div className="w-full px-4">
              <div className="mx-auto text-center mb-3">
                <h1 className="text-3xl font-bold text-slate-800">Forgot Password</h1>
              </div>
            </div>

            <div className="flex items-center justify-center mx-auto rounded-lg shadow-xl bg-white max-w-4xl">
              <div className="w-full p-10 text-slate-800">
                <form>
                  <div className="mb-4">
                    <label for="email" className="text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      placeholder="Email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 text-white font-medium text-base tracking-wide leading-snug rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out"
                  >
                    Send Reset Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default ForgotPassword;
