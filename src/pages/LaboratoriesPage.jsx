import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LaboratoriesPage() {
  const { t } = useTranslation();

  const labs = [
    { id: 1, image: "/images/lab1.jpg", title: t("labs.lab1") },
    { id: 2, image: "/images/lab2.jpg", title: t("labs.lab2") },
    { id: 3, image: "/images/lab3.jpg", title: t("labs.lab3") },
    { id: 4, image: "/images/lab4.jpg", title: t("labs.lab4") },
  ];

  const sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  };

  return (
    <section
      id="laboratories"
      className="relative bg-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-10">
        {t("labs.title")}
      </h2>

      <div className="w-full max-w-5xl">
        <Slider {...sliderSettings}>
          {labs.map((lab) => (
            <div key={lab.id} className="px-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-[70vh] object-cover"
                />
              </div>
              <p className="text-center mt-4 text-lg font-medium text-gray-700">
                {lab.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

