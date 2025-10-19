import React from 'react';
import Cover from '../images/cover.jpg';

import Safety from '../images/icon-work-effort.svg';
import CheckMark from '../images/icon-checkmark.svg';
import Sustainability from '../images/icon-sustainability.svg';
import Effort from '../images/icon-employee-ownership.svg';

function Home() {
  return (
    <div>
      <div className="ml-18 mt-18 mr-12 flex flex-col-reverse md:flex-row min-h-[calc(100vh-4rem)]  ">
        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold max-w-md text-center md:text-left md:text-5xl">
              Crafting dreams with precision and excellence
            </h1>
            <p className="mt-10 mb-5 text-2xl font-medium text-[#FF9013] italic">
              We are committed to delivering high-quality construction solutions
              that combine innovation, precision, and sustainability.
            </p>
            <p className="tex-md">
              At Unity Constructions, we believe that every project is more than
              just bricks and mortar—it is a vision brought to life. Our
              platform showcases a diverse portfolio of completed and ongoing
              projects, highlights our wide range of services, and gives you a
              closer look at the people behind the work.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <img src={Cover} className="w-full " alt="" />
        </div>
      </div>

      {/* About Us */}
      <div className="ml-18 flex flex-col space-y-20">
        <div>
          <h1 className="text-4xl font-bold max-w-md text-center md:text-left md:text-5xl">
            We know every decision has an impact
          </h1>
        </div>

        <div className="flex flex-col space-y-12 md:sapce-y-0 md:flex-row md:justify-around md:space-x-6">
          {/* Each block */}
          <div className="flex flex-col space-y-4 max-w-md">
            <div className="">
              <img src={Safety} alt="" className="mx-auto md:mx-0" />
            </div>

            <div className="">
              <h1 className="text-center md:text-left font-bold text-2xl">
                Safety
              </h1>
              <p className="text-center md:text-left text-lg">
                We will never compromise the safety of our people. Our goal is
                zero incidents and our lost time frequency rate is industry
                leading.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 max-w-md">
            <div className="">
              <img src={CheckMark} alt="" className="mx-auto md:mx-0" />
            </div>

            <div className="">
              <h1 className="text-center md:text-left font-bold text-2xl">
                Quality
              </h1>
              <p className="text-center md:text-left text-lg">
                Consistency ensures success. We see projects through and
                proactively develop solutions to exceed expectations.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 max-w-md">
            <div className="">
              <img src={Sustainability} alt="" className="mx-auto md:mx-0" />
            </div>

            <div className="">
              <h1 className="text-center md:text-left font-bold text-2xl">
                Sustainability
              </h1>
              <p className="text-center md:text-left text-lg">
                We don’t just build sustainably—we lead with purpose, driving
                impact across every project, every partner, and every place we
                work.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 max-w-md">
            <div className="">
              <img src={Effort} alt="" className="mx-auto md:mx-0" />
            </div>

            <div className="">
              <h1 className="text-center md:text-left font-bold text-2xl">
                Stewardship
              </h1>
              <p className="text-center md:text-left text-lg">
                Our culture of giving empowers employees to support
                communities—driving meaningful change through shared purpose and
                generosity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
    </div>
  );
}

export default Home;
