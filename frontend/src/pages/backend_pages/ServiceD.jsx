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
            className="bg-[#155dfc] px-4 py-2 rounded-md text-white"
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
              <input
                type="file"
                className="block mb-5 w-full text-sm text-gray-500
         file:mr-4 file:py-2 file:px-4
         file:rounded-full file:border-0
         file:text-sm file:font-semibold
         file:bg-blue-50 file:text-blue-700
         hover:file:bg-blue-100"
              />
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                placeholder="Enter Service name"
              />{' '}
              <br />
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="10"
                className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
              ></textarea>
              <br />
              <label htmlFor="status" className="">
                Status
              </label>
              <select
                name="status"
                id=""
                className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
              >
                <option value="active">Active</option>
                <option value="block">Block</option>
              </select>
              <div className="mt-6 space-x-4">
                <button className="bg-green-500 rounded-md text-center px-4 py-2 text-white font-sans">
                  Save
                </button>
                <button
                  className="bg-red-500 rounded-md text-center px-4 py-2 text-white font-sans"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* Grid Section */}
            {/* <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="">Location </label>
                <input
                  type="text"
                  name="location"
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                  placeholder="Location"
                />
              </div>
              <div>
                <label htmlFor="construct">Construction Type</label>
                <select
                  name="construct"
                  id=""
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                >
                  <option value="">--Construction Type--</option>
                  <option value="Residental Construction">
                    Residental Construction
                  </option>
                  <option value="Commercial Construction">
                    Commercial Construction
                  </option>
                  <option value="Industrial Construction">
                    Industrial Construction
                  </option>
                  <option value="Infrastructure Construction">
                    Infrastructure Construction
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="sector">Sector</label>
                <select
                  name="sector"
                  id=""
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                >
                  <option value="">--Sector--</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id=""
                  className="border-1 block border-gray-400 w-[80%] py-2 px-2 rounded-md"
                >
                  <option value="active">Active</option>
                  <option value="block">Block</option>
                </select>
              </div>
            </div> */}
          </div>
        )}

        {/* Display information  */}
        <div className="mt-8 ">
          <table className="min-w-[calc(100vw-20rem)] rounded-md  table-auto md:table-fixed ">
            <thead className="text-left bg-slate-100 ">
              <tr>
                <th className="p-4 text-xl  rounded-md">ID</th>
                <th className="p-4 text-xl  rounded-md">Name</th>
                <th className="p-4 text-xl  rounded-md">Status</th>
                <th className="p-4 text-xl  rounded-md" colSpan="2">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4 font-medium text-lg border border-slate-300">
                  1
                </td>
                <td className="p-4 font-medium text-lg border border-slate-300">
                  New Project
                </td>
                <td className="p-4 font-medium text-lg border border-slate-300">
                  Active
                </td>
                <td className="p-4 font-medium text-lg border border-slate-300">
                  <button className="bg-green-500 rounded-md text-center px-4 py-2 text-white font-sans">
                    Edit
                  </button>
                </td>
                <td className=" p-4 font-medium text-lg border border-slate-300">
                  <button className="bg-red-500 rounded-md text-center px-4 py-2 text-white font-sans">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServiceD;
