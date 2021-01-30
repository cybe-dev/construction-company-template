import {
  faBars,
  faBolt,
  faHammer,
  faHandHoldingWater,
  faHome,
  faPencilRuler,
  faScrewdriver,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import Image from "next/image";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

const Home = () => {
  const [navbarShown, setNavbarShown] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Akbar Aditama - Construction Company</title>
      </Head>
      <div className="bg-lightgray min-h-screen w-full overflow-hidden">
        <div className="h-20 bg-black text-white flex justify-center items-center shadow-lg fixed top-0 left-0 right-0 z-50">
          <div className="w-full px-5 md:px-0 md:w-5/6 lg:w-4/6 xl:w-4/6 flex items-center">
            <div>Akbar Aditama</div>
            <button
              className="ml-auto flex h-6 w-6 justify-center items-center border border-white lg:hidden"
              type="button"
              onClick={() => setNavbarShown((value) => !value)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className={`${
                navbarShown ? "fixed" : "hidden"
              } top-0 left-0 right-0 h-screen bg-black bg-opacity-50 lg:hidden`}
              onClick={() => setNavbarShown((value) => !value)}
            ></div>
            <ul
              className={`navbar ml-auto absolute top-0 right-0 h-screen overflow-hidden bg-white ${
                navbarShown ? "w-4/5" : "w-0"
              } transition-all duration-500 lg:w-auto lg:static lg:text-lightgray lg:h-auto lg:bg-transparent lg:flex`}
            >
              <li className="navbar-item">
                <a
                  onClick={() => setNavbarShown((value) => !value)}
                  href="#"
                  className="navbar-link block px-5 py-2 m-2 lg:py-1 lg:m-0 text-black lg:text-lightgray hover:bg-dominant lg:hover:bg-transparent lg:hover:text-dominant uppercase"
                >
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a
                  onClick={() => setNavbarShown((value) => !value)}
                  href="#mainService"
                  className="navbar-link block px-5 py-2 m-2 lg:py-1 lg:m-0 text-black lg:text-lightgray hover:bg-dominant lg:hover:bg-transparent lg:hover:text-dominant uppercase"
                >
                  Services
                </a>
              </li>
              <li className="navbar-item">
                <a
                  onClick={() => setNavbarShown((value) => !value)}
                  href="#featuredWork"
                  className="navbar-link block px-5 py-2 m-2 lg:py-1 lg:m-0 text-black lg:text-lightgray hover:bg-dominant lg:hover:bg-transparent lg:hover:text-dominant uppercase"
                >
                  Works
                </a>
              </li>
              <li className="navbar-item">
                <a
                  onClick={() => setNavbarShown((value) => !value)}
                  href="#about"
                  className="navbar-link block px-5 py-2 m-2 lg:py-1 lg:m-0 text-black lg:text-lightgray hover:bg-dominant lg:hover:bg-transparent lg:hover:text-dominant uppercase"
                >
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a
                  onClick={() => setNavbarShown((value) => !value)}
                  href="#contact"
                  className="navbar-link block px-5 py-2 m-2 lg:py-1 lg:m-0 text-black lg:text-lightgray hover:bg-dominant lg:hover:bg-transparent lg:hover:text-dominant uppercase"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <Image
            src="/hero.jpg"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
          />
          <div className="bg-dominant-dark bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-3">
            <div className="text-xl lg:text-4xl text-white zilla-slab">
              Welcome to Construction
            </div>
            <div className="text-2xl lg:text-6xl coda-caption font-extrabold text-center text-white mt-1 lg:mt-2">
              THE <span className="text-dominant">BEST</span> COMPANY
            </div>
          </div>
          <div id="mainService" className="h-20 absolute bottom-0"></div>
        </div>
        <div className="border-t-8 border-dominant relative">
          <div id="featuredWork" className="h-20 absolute bottom-0"></div>
          <div className="w-full px-5 md:px-0 md:w-5/6 lg:w-4/6 xl:w-4/6 py-8 mx-auto">
            <h3 className="text-2xl lg:text-4xl staatliches text-black my-5 mb-8 text-center">
              Main Services
              <div className="w-20 h-1 bg-dominant mx-auto mt-2"></div>
            </h3>
            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-12 my-20">
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FontAwesomeIcon icon={faHammer} />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Construction Consultant
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Architectural Design
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FontAwesomeIcon icon={faBolt} />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Electrical System
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FontAwesomeIcon icon={faScrewdriver} />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    General Contracting
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FontAwesomeIcon icon={faPencilRuler} />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Reconstruction Services
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FontAwesomeIcon icon={faHandHoldingWater} />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Plumbilg Services
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black relative">
          <div id="about" className="h-20 absolute bottom-0"></div>
          <div className="w-full px-5 md:px-0 md:w-5/6 lg:w-4/6 xl:w-4/6 py-8 mx-auto">
            <h3 className="text-2xl lg:text-3xl staatliches text-white my-5 mb-8">
              Featured Work
              <div className="w-20 h-1 bg-dominant mt-2"></div>
            </h3>
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-12 my-20">
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/1.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Luxury Buildings
                  </span>
                  <span className="zilla-slab text-dominant">Construction</span>
                </div>
              </div>
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/2.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Luxury Buildings
                  </span>
                  <span className="zilla-slab text-dominant">Construction</span>
                </div>
              </div>
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/3.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Luxury Buildings
                  </span>
                  <span className="zilla-slab text-dominant">Construction</span>
                </div>
              </div>
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/4.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Luxury Buildings
                  </span>
                  <span className="zilla-slab text-dominant">Construction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lightgray">
          <div className="w-full px-5 md:px-0 md:w-5/6 lg:w-4/6 xl:w-4/6 py-8 mx-auto flex flex-col lg:flex-row">
            <div className="flex-1 lg:mr-20 mb-12 lg:mb-0 relative">
              <h3 className="text-2xl lg:text-3xl staatliches text-black my-5 mb-8">
                About Us
                <div className="w-20 h-1 bg-dominant mt-2"></div>
              </h3>
              <p className="roboto text-black-2">
                Building isn’t just a job. At the Construction Company, it is
                our passion. With every project we undertake, we set the bar
                high and provide the best people in the industry, with a true
                love of what we do to make our Customers’ vision a reality.
              </p>
              <div id="contact" className="h-20 absolute bottom-0"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl staatliches text-black my-5 mb-8">
                Contact
                <div className="w-20 h-1 bg-dominant mt-2"></div>
              </h3>
              <div className="flex roboto mb-3">
                <span className="text-black w-1/5">
                  <b>Address:</b>
                </span>
                <span className="text-black flex-1">
                  Dusun II, RT. 000/RW. 000, Desa Betung, Kec. Gelumbang, Kab.
                  Muara Enim, Sumatera Selatan - 31171
                </span>
              </div>
              <div className="flex roboto mb-3">
                <span className="text-black w-1/5">
                  <b>Phone:</b>
                </span>
                <span className="text-black flex-1">+6281271762774</span>
              </div>
              <div className="flex roboto">
                <span className="text-black w-1/5">
                  <b>Email:</b>
                </span>
                <span className="text-black flex-1">
                  personal@akbaraditama.com
                </span>
              </div>
              <div className="my-12 flex">
                <a
                  href="#"
                  className="w-8 h-8 border border-lightgray-3 bg-lightgray-2 justify-center items-center text-black flex hover:bg-dominant hover:border-transparent hover:text-white"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border ml-3 border-lightgray-3 bg-lightgray-2 justify-center items-center text-black flex hover:bg-dominant hover:border-transparent hover:text-white"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border ml-3 border-lightgray-3 bg-lightgray-2 justify-center items-center text-black flex hover:bg-dominant hover:border-transparent hover:text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lightgray-2">
          <div className="w-full px-5 md:px-0 md:w-5/6 lg:w-4/6 xl:w-4/6 py-8 mx-auto text-black-2 text-center lg:text-left">
            <h6>&copy;2018 Akbar Aditama, All Rights Reserved</h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
