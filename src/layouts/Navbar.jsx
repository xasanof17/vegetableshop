import React, { useState } from "react";
import { images } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Switch from "react-switch";
import { GrCircleQuestion } from "react-icons/gr";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { links } from "../constants";
function NextBtn({ onClick }) {
  return (
    <button
      className="bg-green p-2 absolute top-2 left-0 z-10"
      onClick={onClick}
    >
      <FiChevronLeft fontSize={20} className="text-white" />
    </button>
  );
}
function PrevBtn({ onClick }) {
  return (
    <button
      className="bg-green p-2 absolute top-2 right-0 z-10"
      onClick={onClick}
    >
      <FiChevronRight fontSize={20} className="text-white" />
    </button>
  );
}

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
  };
  return (
    <header className="header">
      <div className="w-full">
        <div className="container">
          <div className="grid grid-cols-4 gap-6 py-2">
            <div className="flex items-center justify-start">
              <Link href={"/"}>
                <a className="flex items-end justify-center space-x-2">
                  <Image src={images.logo} alt="" />
                  <div className="flex flex-col items-start text-green font-regular">
                    <h3 className="font-medium text-[20px] leading-5 capitalize">
                      Рядом
                    </h3>
                    <p className="lowercase text-base">
                      место, где полезное вкусно
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex items-center">
                  <Switch
                    onChange={() => setChecked((prev) => !prev)}
                    checked={checked}
                  />
                </div>
                <p className="flex items-center justify-center space-x-2 text-base font-regular">
                  <span className="flex items-center justify-center pointer-events-none">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6576 0.0765087C10.7677 0.140339 10.8529 0.239622 10.8993 0.358138C10.9457 0.476654 10.9505 0.607397 10.913 0.729009L8.88685 7.31251H12.6252C12.7351 7.31246 12.8426 7.34459 12.9344 7.40493C13.0262 7.46526 13.0983 7.55116 13.1419 7.65202C13.1854 7.75289 13.1985 7.86429 13.1794 7.97249C13.1604 8.08069 13.1101 8.18095 13.0347 8.26088L4.03472 17.8234C3.94764 17.916 3.83176 17.9764 3.70597 17.9947C3.58018 18.013 3.45189 17.9881 3.34203 17.9242C3.23216 17.8603 3.14719 17.761 3.10096 17.6426C3.05474 17.5242 3.04998 17.3936 3.08747 17.2721L5.1136 10.6875H1.37522C1.26536 10.6876 1.15789 10.6554 1.06608 10.5951C0.97427 10.5348 0.902136 10.4489 0.858585 10.348C0.815034 10.2471 0.801972 10.1357 0.821012 10.0275C0.840052 9.91932 0.890359 9.81907 0.965724 9.73913L9.96572 0.176634C10.0527 0.0841577 10.1684 0.0238234 10.294 0.0054408C10.4196 -0.0129418 10.5478 0.0117085 10.6576 0.0753837V0.0765087Z"
                        fill="#ED6B06"
                      />
                    </svg>
                  </span>
                  <span>Доставим за 15 минут</span>
                  <span className="flex items-center justify-center">
                    <GrCircleQuestion color="#7B7B7B" fontSize={18} />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start font-regular text-base space-x-1">
              <p className="text-brown">Минимальный заказ:</p>
              <span className="text-green">800 ₽</span>
            </div>
            <div className="flex items-center justify-end">
              <ul className="flex items-center space-x-6 text-sm text-black">
                <li>
                  <Link href={"/"}>
                    <a className="hover:text-brown">Акции</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="hover:text-brown">График доставки</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative mt-4">
        <div className="container">
          <div className=" bg-darkgreen py-3 px-6 rounded-lg">
            <form className="flex items-center space-x-6 flex-wrap">
              <div className="flex items-center justify-center">
                {/* <div className="relative"> */}
                <button className="flex items-center space-x-2 font-regular text-base text-white">
                  <span>
                    <HiOutlineMenuAlt2 fontSize={23} />
                  </span>
                  <p>Каталог продуктов</p>
                </button>
                {/* </div> */}
              </div>
              <div className="flex items-center justify-center max-w-[480px] w-full">
                <div className="relative w-full">
                  <input
                    type="search"
                    className="w-full bg-white rounded-lg py-2 px-3 border-none outline-none text-base font-regular text-black placeholder:text-[#B1B1B1]"
                    placeholder="Поиск по товарам, рецептам и статьям"
                  />
                  <button
                    type="submit"
                    className="absolute top-2 bg-white right-3 outline-green"
                  >
                    <span className="flex items-center justify-center pointer-events-none">
                      <BiSearch fontSize={23} className="text-gray" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center max-w-[280px] w-full">
                <div className="relative w-full">
                  <input
                    type="search"
                    className="w-full bg-lightgreen rounded-lg py-2 pl-[40px] px-3 border-none outline-none text-base font-regular text-white"
                    placeholder="Куда доставить?"
                    onFocus={() => setShowForm((prev) => !prev)}
                  />
                  <button
                    type="button"
                    className="absolute top-2 bg-lightgreen left-3 outline-green pointer-events-none"
                  >
                    <span className="flex items-center justify-center pointer-events-none">
                      <GoLocation fontSize={23} className="text-white" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <ul className="flex space-x-5">
                  <li>
                    <Link href={"/"}>
                      <a className="flex items-center justify-center">
                        <span className="flex items-center justify-center">
                          <AiOutlineUser fontSize={25} className="text-white" />
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <button className="flex items-center justify-center text-white text-[16px] leading-5 space-x-1">
                        <span className="flex items-center justify-center mr-2">
                          <FaShoppingBasket
                            fontSize={25}
                            className="text-white"
                          />
                        </span>
                        <span className="cash">99999</span>
                        <span>$</span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="w-full relative mt-6">
          <div className="container">
            <form className="flex items-center justify-between space-x-2 w-full">
              <div className="relative w-4/5">
                <button className="absolute top-2 left-8">
                  <span>
                    <BiSearch fontSize={24} className="text-green" />
                  </span>
                </button>
                <input
                  className="w-full py-2 pl-[65px] pr-3 bg-lightWhite outline-gray border-none rounded-md"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Улица Новый Арбат, 16"
                />
                <button className="absolute top-2 right-3 bg-lightWhite outline-green pointer-events-none">
                  <span>
                    <MdClose fontSize={24} className="text-[#B1B1B1]" />
                  </span>
                </button>
              </div>
              <input
                type="text"
                value="Кв"
                className="w-[70px] py-2 pl-4 bg-lightWhite outline-gray border-none rounded-md pointer-events-none select-none text-[#B1B1B1]"
              />
              <div className="flex items-center">
                <button
                  type="submit"
                  className="bg-green rounded-md py-2 px-8 text-base text-white"
                >
                  <span>Сохранить</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="w-full mt-4">
        <div className="container">
          <ul>
            <Slider {...settings} className="py-3">
              {links.map((link, i) => (
                <li key={i} className="links">
                  <Link href={link.href}>
                    <a className="text-primary hover:text-brown focus:text-brown font-regular duration-300">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
