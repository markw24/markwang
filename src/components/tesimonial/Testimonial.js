import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import applestock from "./applestockproject.png";
import QmindHack from "./hackathon.png";
import safecycle from "./safecycle.png";
import excel from "./spreadsheetproject.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 duration-300 rounded-md text-2xl text-gray-500 flex justify-center items-center absolute top-0 right-0 shadow-sm cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 duration-300 rounded-md text-2xl text-gray-500 flex justify-center items-center absolute top-0 right-20 shadow-sm cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "1px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "7px",
                height: "7px",
                color: "black",
                background: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "5px",
                height: "5px",
                color: "black",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="text-white w-auto h-auto lgl:p-10 flex flex-col justify-center items-center mb-12"
    >
      <div className="flex justify-center items-center text-center text-white">
        <Title des="my projects"></Title>
      </div>
      <div>
        below are some of the major coding projects i've completed. feel free to
        click on the image of each slide to learn more about the project!
      </div>
      <div className="flex flex-col p-1 justify-center max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="flex items-center justify-center">
            <div className="bg-black">
              <div className="w-full h-full flex flex-col lgl:flex-row justify-between pt-5">
                <div className="w-full lgl:w-[50%] h-full bg-black p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start">
                  <a
                    href="https://github.com/markw24/QMINDhackathon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="md:h-40 md:w-90 lgl:h-72 mt-5 rounded-lg justify-center"
                      src={QmindHack}
                      alt="Project Two"
                    />
                  </a>
                </div>
                <div className="w-full lgl:w-[60%] h-[30] flex flex-row justify-between">
                  <div className="w-full h-[100%] bg-black rounded-lg pt-[1] lgl:p-8 flex flex-col gap-4 lgl:gap-8 justify-center items-center">
                    <div className="flex flex-col text-center justify-between lgl:items-center py-6 border-b-2 border-b-white-500">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          Plant Classifier using a Random Forest Classifier
                          model
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          Made through Python with main libraries of Tensorflow
                          and scikit-learn
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      In this hackathon, we were given a raw dataset of plant
                      species with their respective features. As a team, we
                      developed a random forest classifier model to predict the
                      species of the plant. We were able to attain an 86%
                      accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================ Slider Two ================== */}

          <div className="flex items-center justify-center">
            <div className="bg-black">
              <div className="w-full h-full flex flex-col lgl:flex-row justify-between pt-5">
                <div className="w-full lgl:w-[50%] h-full bg-black p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start">
                  <a
                    href="https://github.com/markw24/SafeCycle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="md:h-40 md:w-90 lgl:h-72 mt-5 rounded-lg justify-center"
                      src={safecycle}
                      alt="Project Two"
                    />
                  </a>
                </div>
                <div className="w-full lgl:w-[60%] h-[30] flex flex-row justify-between">
                  <div className="w-full h-[100%] bg-black rounded-lg pt-[1] lgl:p-8 flex flex-col gap-4 lgl:gap-8 justify-center items-center">
                    <div className="flex flex-col text-center justify-between lgl:items-center py-6 border-b-2 border-b-white-500">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          SafeCycle, an interactive map website created using
                          Django framework
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          Used main languages of Python, HTML, Javascript, CSS
                          with Django framework
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      After identifying the problem that beginner cyclists in
                      Kingston, Ontario are not able to identify the safest
                      routes to take, I worked with a team to develop SafeCycle,
                      an interactive map that allows users to input feedback
                      regarding different roads in Kingston for users to
                      identify the safest routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================ Slider Three ================== */}
          <div className="flex items-center justify-center">
            <div className="bg-black">
              <div className="w-full h-full flex flex-col lgl:flex-row justify-between pt-5">
                <div className="w-full lgl:w-[50%] h-full bg-black p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start">
                  <a
                    href="https://github.com/markw24/applestockpredictor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="md:h-40 mt-5 md:w-90 lgl:h-72 pt-3 rounded-lg justify-center"
                      src={applestock}
                      alt="Project Two"
                    />
                  </a>
                </div>
                <div className="w-full lgl:w-[60%] h-[30] flex flex-row justify-between">
                  <div className="w-full h-[100%] bg-black rounded-lg pt-[1] lgl:p-8 flex flex-col gap-4 lgl:gap-8 justify-center items-center">
                    <div className="flex flex-col text-center justify-between lgl:items-center py-6 border-b-2 border-b-white-500">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          Apple Inc. Stock Price Prediction using Decision Tree
                          and Linear Regression
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          Made through Python with main libraries of Tensorflow
                          and scikit-learn
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      With a passion for learning more about the finance and
                      investing industry, I developed two AI models that could
                      predict the stock price behaviour of Apple stock, one
                      model powered by a linear regression model and the other
                      by a descision tree regressor. The accuracy of the
                      decision tree regressor resulted in a higher degree of
                      accuracy than the linear tree regressor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Four */}
          <div className="flex items-center justify-center">
            <div className="bg-black">
              <div className="w-full h-full flex flex-col lgl:flex-row justify-between pt-5">
                <div className="w-full lgl:w-[50%] h-full bg-black p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start">
                  <a
                    href="https://github.com/markw24/excelspreadsheet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="md:h-40 mt-5 md:w-90 lgl:h-72 pt-5 rounded-lg justify-center"
                      src={excel}
                      alt="Project Two"
                    />
                  </a>
                </div>
                <div className="w-full lgl:w-[60%] h-[30] flex flex-row justify-between">
                  <div className="w-full h-[100%] bg-black rounded-lg pt-[1] lgl:p-8 flex flex-col gap-4 lgl:gap-8 justify-center items-center">
                    <div className="flex flex-col text-center justify-between lgl:items-center py-6 border-b-2 border-b-white-500">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          Excel Spreadsheet using Linked Lists and 2D array
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          Programmed through language C
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      To apply the data structures and algorithms course I have
                      been taking, I created an Excel spreadsheet with just the
                      language C, leveraging 2D arrays, struct datatypes, and
                      linked lists. The spreadsheet is able to take inputs of
                      numbers or strings, and it can read addition formulas
                      referenced by the cell location, just as how a normal
                      Excel sheet would work. Data within the cells can update
                      depending on their formulas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
