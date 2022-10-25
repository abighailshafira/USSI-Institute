import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/image/icon-ussi.ico";

const Footer = () => {
  return (
    <>
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,192C480,192,549,224,617,250.7C685.7,277,754,299,823,298.7C891.4,299,960,277,1029,245.3C1097.1,213,1166,171,1234,160C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>

        <div className="bg-slate-800">
          <div className="container text-white text-center md:text-left">
            <div className="flex flex-wrap justify-center pt-10 ">
              <div className="w-full mb-6 md:w-1/2 lg:w-1/4 ">
                <h6 className="text-white uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                  <img src={Image} alt="USSI" className="w-5 mr-2 animate-bounce" />
                  USSI Institute
                </h6>
                <p>
                  Gading Regency Blok A2 No.2 <br />
                  Soekarna - Hatta <br />
                  Bandung, Jawa Barat, Indonesia
                </p>

                <div className="mt-3">
                  <p className="flex items-center justify-center md:justify-start mb-1">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                      ></path>
                    </svg>
                    ussiinstitute@ussi-software.com
                  </p>
                  <p className="flex items-center justify-center md:justify-start mb-1">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                      ></path>
                    </svg>
                    022-7319962 - 7313084
                  </p>
                </div>
              </div>

              <div className="w-full mb-6 md:w-1/2 lg:w-1/4">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-white ">Products</h6>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    Angular
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    React
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-gray-600">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="w-full mb-6 md:w-1/2 lg:w-1/4">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-white ">Tautan</h6>
                <p className="mb-4">
                  <Link to="/">
                    <a className="text-white">Beranda</a>
                  </Link>
                </p>

                <p className="mb-4">
                  <Link to="/pelatihan">
                    <a className="text-white">Pelatihan</a>
                  </Link>
                </p>

                <p className="mb-4">
                  <Link to="/pendaftaran">
                    <a className="text-white">Pendaftaran</a>
                  </Link>
                </p>
              </div>

              <div className="w-full mb-6 md:w-1/2 lg:w-1/4">
                <div className="flex justify-center md:justify-start lg:justify-end">
                  <a href="#" target="_blank" className="w-9 h-9 mr-3 text-slate-30 flex justify-center text-white ">
                    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" className="w-9 h-9 mr-3 text-slate-30 flex justify-center text-white ">
                    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                      <title>Facebook</title>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" className="w-9 h-9 mr-3 text-slate-30 flex justify-center text-white ">
                    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-slate-700 text-center p-6">
              <span className="text-slate-500 text-xs font-medium py-5">
                Copyright © 2022{" "}
                <a href="#" className="font-bold">
                  USSI INSTITUTE
                </a>
                . All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
