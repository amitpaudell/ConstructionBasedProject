import React from 'react';
import Cover from '../images/cover.jpg';
function Home() {
  return (
    <div className="m-18 flex flex-col-reverse md:flex-row   ">
      {/* Left Content */}
      <div className="md:w-1/2">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold max-w-md text-center md:text-left md:text-5xl">
            Crafting dreams with precision and excellence
          </h1>
          <p className="mt-10 mb-5 text-2xl font-medium text-orange-500 italic">
            We are committed to delivering high-quality construction solutions
            that combine innovation, precision, and sustainability.
          </p>
          <p className="tex-md">
            At Unity Constructions, we believe that every project is more than
            just bricks and mortar—it is a vision brought to life. Our platform
            showcases a diverse portfolio of completed and ongoing projects,
            highlights our wide range of services, and gives you a closer look
            at the people behind the work.
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2">
        <img src={Cover} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default Home;
