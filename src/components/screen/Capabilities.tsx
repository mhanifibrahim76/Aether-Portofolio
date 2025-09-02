import CapabilityCard from "../CapabilityCard";
import { dataCapabilities } from "../model";

const Capabilities = () => {
  return (
    <section className="w-full h-full flex justify-center items-center md:px-24 px-6">
      <div className="py-16 bg-white text-center text-[#1f2559] max-w-7xl">
        <div className=" mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Capabilities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataCapabilities.map((item, index) => (
              <CapabilityCard
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
};

export default Capabilities;
