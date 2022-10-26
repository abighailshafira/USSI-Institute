import "../../App.css";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../assets/image/flyer/1-OBOX.png";
import pic2 from "../../assets/image/flyer/2-AUDITTI.png";
import pic3 from "../../assets/image/flyer/3-OBOX.png";
import pic4 from "../../assets/image/flyer/4-acl.png";
import pic5 from "../../assets/image/flyer/5-sdm.png";
import pic6 from "../../assets/image/flyer/6-mikrotik.png";
import pic7 from "../../assets/image/flyer/7-lapbul.png";
import pic8 from "../../assets/image/flyer/8-rbb.png";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute cursor-pointer z-10 right-0 top-[45%] bg-white rounded-full shadow-xl p-3" onClick={onClick}>
        <HiOutlineChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute cursor-pointer z-10 left-0 top-[45%] bg-white rounded-full shadow-xl p-3" onClick={onClick}>
        <HiOutlineChevronLeft />
      </div>
    );
  };

  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="container max-w-7xl pt-24">
      <div className="w-full px-4">
        <div className="mx-auto text-center mb-16">
          <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">Riwayat Pelatihan</h1>
          <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum!</p>
        </div>
      </div>

      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={idx} className="p-5" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
