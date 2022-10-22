import "../App.css";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "../assets/image/Consulting-rafiki.png";
import pic2 from "../assets/image/Creative writing-rafiki.png";
import pic3 from "../assets/image/Football Goal-rafiki.png";
import pic4 from "../assets/image/Researchers-rafiki.png";
import pic5 from "../assets/image/User research-rafiki.png";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const images = [pic1, pic2, pic3, pic4, pic5];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div classNameName="absolute cursor-pointer z-10 right-0 top-[45%] bg-white rounded-full shadow-xl p-3" onClick={onClick}>
        <HiOutlineChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div classNameName="absolute cursor-pointer z-10 left-0 top-[45%] bg-white rounded-full shadow-xl p-3" onClick={onClick}>
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
    <div className="container max-w-6xl pt-36">
      <div className="w-full px-4">
        <div className="mx-auto text-center mb-16">
          <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">History Pelatihan</h1>
          <h2 className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum!</h2>
        </div>
      </div>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
