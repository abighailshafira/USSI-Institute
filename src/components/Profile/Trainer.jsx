import React, { Component } from "react";
import Slider from "react-slick";
import Image1 from "../../assets/image/trainer-1.jpg";
import Image2 from "../../assets/image/trainer-2.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "green" }} onClick={onClick} />;
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="pt-24">
        {" "}
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-10">
              <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">Trainer UI</h1>
              <h2 className="text-base text-slate-500">Didukung oleh pemateri yang kompeten dibidangnya</h2>
            </div>
          </div>

          <Slider {...settings}>
            <div className="px-5 py-5">
              <div className="bg-white rounded-md shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img src={Image1} className="w-full rounded-t-lg" />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ left: `0`, bottom: `0` }}>
                    <path
                      fill="#fff"
                      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>

                <div className="p-5">
                  <h5 className="text-lg font-bold mb-2">Rukanda Tahyana</h5>

                  <p>DIREKTUR UTAMA PT. USSI PPS</p>
                </div>
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="bg-white rounded-md shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img src={Image2} className="w-full rounded-t-lg" />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ left: 0, bottom: 0 }}>
                    <path
                      fill="#fff"
                      d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>

                <div className="p-5">
                  <h5 className="text-lg font-bold mb-2">Dede Hendrawan P.</h5>

                  <p>MANAGER USSI INSTITUTE</p>
                </div>
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="bg-white rounded-md shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="w-full rounded-t-lg" />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ left: 0, bottom: 0 }}>
                    <path
                      fill="#fff"
                      d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>

                <div className="p-5">
                  <h5 className="text-lg font-bold mb-2">Naufal Azhfar Zaid</h5>

                  <p>STAFF USSI INSTITUTE</p>
                </div>
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="bg-white rounded-md shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="w-full rounded-t-lg" />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ left: `0`, bottom: `0` }}>
                    <path
                      fill="#fff"
                      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>

                <div className="p-5">
                  <h5 className="text-lg font-bold mb-2">Firli Arwandi</h5>

                  <p>STAFF USSI INSTITUTE</p>
                </div>
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="bg-white rounded-md shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-full rounded-t-lg" />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ left: 0, bottom: 0 }}>
                    <path
                      fill="#fff"
                      d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>

                <div className="p-5">
                  <h5 className="text-lg font-bold mb-2">Halley Frank</h5>

                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium accusamus voluptatum deleniti atque corrupti.</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
