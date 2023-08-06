import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">The right price for your research.</h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eum
            aperiam saepe quibusdam aut facilis ab sapiente repellat cum quas?
          </p>
        </div>
        {/*Card*/}
        <div className="grid md:grid-cols-2 gap-8 px-3">
          <div className="bg-white text-slate-900 rounded-xl py-4 px-6 shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200  text-indigo-900 rounded-xl text-sm">Standard</span>
            <div>
              <p className="text-5xl font-bold py-4 flex">
                $49 <span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />you Lorem ipsum, dolor sit
                         </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor sit hup lip
                              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor sit
                              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor sit
                              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor
                              </p>
              <button className="w-full py-2 my-4 border-gray-950 bg-gray-950 hover:border-gray-950  hover:text-gray-950">Get Started</button>
            </div> 
          </div>
          <div className="bg-white text-slate-900 rounded-xl py-4 px-6 shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200  text-indigo-900 rounded-xl text-sm">Premium</span>
            <div>
              <p className="text-5xl font-bold py-4 flex">
                $100 <span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />you Lorem ipsum, dolor sit
                         </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor sit hup lip
                              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor sit
                              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor sit
                              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor
                              </p>
              <button className="w-full py-2 my-4 border-gray-950 bg-gray-950 hover:border-gray-950  hover:text-gray-950">Get Started</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
