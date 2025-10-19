import React from 'react';

function Services() {
  return (
    <div>
      <div>
        <div className="mt-16 container mx-auto flex flex-col space-y-5">
          <h3 className="mx-auto text-2xl font-bold">Our Services </h3>
          <h1 className="mx-auto text-4xl ">Our Construction Services</h1>
          <p className="mx-auto text-xl">
            We offer a diverse array of construction services, spanning
            residential, commercial, and industrial projects.
          </p>
        </div>

        <div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                alt="card-image"
                class="h-full w-full object-cover rounded-md"
              />
            </div>
            <div class="p-4">
              <div class="mb-2 flex items-center justify-between">
                <p class="text-slate-800 text-xl font-semibold">
                  Apple AirPods
                </p>
              </div>
              <p class="text-slate-600 leading-normal font-light">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
              <button
                class="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
