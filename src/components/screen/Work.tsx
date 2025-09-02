import Image from "next/image";
import { forwardRef } from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { src: "/icon/work-rilex.png", alt: "Rilex" },
  { src: "/icon/work-getwork.png", alt: "Getwork" },
  { src: "/icon/work-getart.png", alt: "Getart" },
  { src: "/icon/work-getstock.png", alt: "Getstock" },
  { src: "/icon/work-lebabies.png", alt: "Le Babies" },
  { src: "/icon/work-roastkuy.png", alt: "Roastkuy" },
  { src: "/icon/work-propertree.png", alt: "Propertree" },
  { src: "/icon/work-indomaret.png", alt: "Indomaret" },
];

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="work" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">
          The Work
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Marquee
            pauseOnHover={true}
            speed={40}
            gradient={true}
            gradientColor="#ffffff"
            gradientWidth={200}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-28 h-auto relative flex items-center justify-center mx-8" // ⬅ kasih margin horizontal biar ada jarak antar logo
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={112}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
});

Work.displayName = "Work";

export default Work;
