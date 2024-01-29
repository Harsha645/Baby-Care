import React from "react";

export default function Monitor() {
  return (
    <section>
      <div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 mt-4 ">
          <p className="text-lg font-semibold">Add Your Baby Images For verification</p>
          <input
            type="file"
            id="image"
            // onChange={onChange}
            accept=".jpg,.png,.jpeg"
            required
            className="w-3/4 px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
          <button
            type="submit"
            className="w-3/4 mt-4 bg-green-400 text-white px-7 py-3 rounded font-medium uppercase text-lg shadow-md hover:bg-green-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-600"
          >
            Submit
          </button>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 mt-10">
          <p className="text-lg font-semibold">Add Sleeping Position Image</p>
          <input
            type="file"
            id="image"
            // onChange={onChange}
            accept=".jpg,.png,.jpeg"
            required
            className="w-3/4 px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
          <button
            type="submit"
            className="w-3/4 mt-4 bg-blue-600 text-white px-7 py-3 rounded font-medium uppercase text-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            Submit
          </button>
          <div className="mt-6 ">
            <p className="text-lg font-semibold">Notification</p>
            <div className="w-3/4 h-96 bg-white rounded border-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
