import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ServiceDetails() {
  const [service, setService] = useState(null);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const id = queryParams.get('q');

  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch(`http://localhost:4000/api/construct/${id}`);
      const json = await response.json();

      if (response.ok) {
        setService(json);
      }
    };
    fetchService();
  }, [id]);

  return (
    <div>
      {service && (
        <div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={service.image}
                alt="card-image"
                class="h-full w-full object-cover rounded-md"
              />
            </div>
            <div class="p-4">
              <div class="mb-2 flex items-center justify-between">
                <p class="text-slate-800 text-xl font-semibold">
                  {service.title}
                </p>
              </div>
              <p class="text-slate-600 leading-normal font-light">
                {service.description}
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
      )}
    </div>
  );
}

export default ServiceDetails;
