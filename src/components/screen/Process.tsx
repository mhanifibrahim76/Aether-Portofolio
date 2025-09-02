"use client";

import Image from "next/image";
import { steps } from "../model";

const Process = () => {
  return (
    <section className="w-full h-full flex justify-center items-center md:px-24 px-6">
      <div className="w-full bg-[#232f7e] text-white rounded-t-lg md:rounded-t-[75px] lg:rounded-[] px-6 py-20 max-w-7xl">
        <div className="w-full flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-6">
            Our Process
          </h2>
        </div>
        <div className="mx-auto flex flex-col lg:flex-row items-center">
          {/* Left: Image */}
          <div className="flex-1 flex justify-end">
            <Image
              src="/image/process-image.png"
              alt="Our Process"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* Right: Steps */}
          <div className="flex-1 mt-10 lg:mt-0 space-y-10">
            <div className="space-y-8 mx-[30px] md:mx-[60px]">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 flex flex-col justify-between h-full">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={30}
                      height={30}
                      className="min-w-[24px]"
                    />
                    <div className="flex flex-col justify-between h-full text-white text-center font-extrabold">
                      <p className="text-xl leading-none">•</p>
                      <p className="text-xl leading-none">•</p>
                      <p className="text-xl leading-none">•</p>
                      <p className="text-xl leading-none">•</p>
                      <p className="text-xl leading-none">•</p>
                    </div>
                  </div>

                  <div className="max-w-[200px]">
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-200">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
