import React from 'react';

function AboutUs() {
  return (
    <div className="">
      {/* Heading Overview */}

      <div className="m-12 md:m-24 flex flex-col space-y-12">
        <div>
          <h1 className="text-[#00502f] text-3xl font-bold md:max-w-[80%] text-center md:text-left md:text-5xl">
            Driven by Ownership. Engineered for Possibility. Defined by Impact.
          </h1>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-medium">
            PCL builds projects that shape communities—from small renovations to
            complex, billion-dollar developments. From modular construction to
            advanced digital technologies to cutting-edge sustainability, we
            bring the right tools, talent, and mindset to every challenge.
          </p>

          <p className="text-xl font-medium">
            We redefine full-service and bring expertise across all project
            types, at all scales and under all procurement models. As innovative
            solution providers and construction specialists, we leverage our
            expertise to customize the right approach for your project,
            maximizing value for the best price.
          </p>

          <p className="text-xl font-medium">
            Our project experience spans every scale, from $20,000 upgrades to
            $3.5-billion developments, backed by proven expertise across all
            delivery models. Flexible, focused and innovative: we're focused on
            achieving your project vision and business goals.
          </p>
        </div>
      </div>

      {/* Large Number Section */}

      <div className=" bg-[#36383d] mt-24 p-12">
        <div className="ml-24 text-white text-3xl font-extralight md:max-w-[80%] text-center md:text-left md:text-5xl mb-12">
          Unity Construction by numbers
        </div>
        <div className="grid grid-cols-3 gap-8 mt-24 ml-24  ">
          {/* Each Number with text block */}
          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">100%</h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Employee Owned
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">100%</h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Employee Owned
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">100%</h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Employee Owned
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">100%</h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Employee Owned
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">100%</h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Employee Owned
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">100%</h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Employee Owned
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
