import React from "react";
import Image1 from "../../assets/image/logo-audit.png";

const DivisiAudit = () => {
  return (
    <>
      <section id="detail-pelatihan" className="pt-40">
        <div className="container lg:-mb-24">
          <div className="flex flex-wrap">
            <div className="w-full mb-10 lg:w-1/2">
              <img src={Image1} alt="USSI Institute" className="w-60 pt-0 sm:w-72 sm:pt-10 mx-auto transition duration-300 ease-in-out" />
            </div>

            <div className="w-full lg:w-1/2 mt-4">
              <h2 className="font-semibold text-lg text-cyan-500 mb-0">Divisi</h2>
              <h1 className="text-3xl font-bold mb-4 text-slate-800">Audit Kepatuhan TI</h1>
              <p className="text-lg text-slate-500 text-justify mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolores esse delectus incidunt. Quasi, rem voluptates tenetur numquam nam, eaque voluptate asperiores unde sunt enim beatae autem perspiciatis minus
                exercitationem culpa quae libero, animi voluptas amet non officia dolorum? Sit repudiandae, distinctio voluptatibus consequuntur eaque iste alias deserunt repellat doloremque?
              </p>
              <p className="text-lg text-slate-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti commodi odio ipsa perferendis nisi alias fugiat. Nihil soluta quae suscipit est, quo voluptas dolor reiciendis! Commodi similique sequi consequatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DivisiAudit;
