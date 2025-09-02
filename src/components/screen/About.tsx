import AboutCard from "../AboutCard";
import { dataAbout } from "../model";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="w-full h-full flex justify-center items-center md:px-24 px-6">
      <div className="py-16 bg-white text-center text-[#1f2559] w-full max-w-7xl">
        <div className=" mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We Create Experiences That Transform Brand, Grow Businesses and Make
            People’s Lives Better.
          </p>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataAbout.map((item, index) => (
              <AboutCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
