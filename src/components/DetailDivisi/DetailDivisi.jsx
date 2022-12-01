import React from "react";
import Image1 from "../../assets/image/logo-audit.png";
import Image2 from "../../assets/image/divisi-ussi.png";

const DetailDivisi = ({ data }) => {
  console.log(data);
  return (
    <>
      <section id="detail-pelatihan" className="pt-40 bg-gradient-to-b from-slate-100">
        <div className="container lg:-mb-24">
         {data?.map((item) => (   
            <div className="flex flex-wrap">
              <div className="w-full mb-10 lg:w-1/2">
                <img src={item.image} alt="USSI Institute" className="w-96 mx-auto transition duration-300 ease-in-out" />
              </div>

              <div className="w-full lg:w-1/2 mt-4">
                <h2 className="font-semibold text-lg text-cyan-500 mb-0">Divisi</h2>
                <h1 className="text-3xl font-bold mb-4 text-slate-800">{item.divisi_name}</h1>
                <p className="textbase text-slate-500 text-justify mb-6">
                  {item.desc}
                </p>
                <p className="textbase text-slate-500 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti commodi odio ipsa perferendis nisi alias fugiat. Nihil soluta quae suscipit est, quo voluptas dolor reiciendis! Commodi similique sequi consequatur.
                </p>
              </div>
            </div>
            ))}
          </div>
      </section>
    </>
  );
};

export default DetailDivisi;
