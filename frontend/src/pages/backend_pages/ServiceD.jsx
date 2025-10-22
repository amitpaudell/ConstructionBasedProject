import React, { useState } from 'react';

function ServiceD() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="p-12 min-h-[calc(100vh-4rem)]   min-w-[calc(100vw-12rem)]">
      {/* upper part */}
      <div className="flex flex-col items-center md:flex-row justify-around space-y-5 ">
        <div>
          <h1 className="text-3xl font-bold md:text-left text-center">
            Services
          </h1>
        </div>

        <div>
          <button
            className="bg-[#155dfc] px-4 py-2 rounded-md "
            onClick={() => setShowForm(!showForm)}
          >
            Create
          </button>
        </div>
      </div>

      {/* Lower part */}
      <div>
        {/* Form Part */}
        {showForm && (
          <div className="p-6 flex flex-col bg-[#f2f4f7] rounded-2xl">
            <div>
              <h3 className="font-medium text-xl">Create a new project</h3>
            </div>
            <form action="" className="">
              <label htmlFor="">Upload an Image</label>
              <br />
              <input type="file" />
            </form>
          </div>
        )}

        {/* Display information  */}
        <div>
          <h1>asda</h1>
        </div>
      </div>
    </div>
  );
}

export default ServiceD;
