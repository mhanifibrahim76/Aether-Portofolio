import React from "react";
import Image from "next/image";

interface AboutCardProps {
  title: string;
  description: string;
  image: string;
}

const AboutCard = ({ title, description, image }: AboutCardProps) => {
  return (
    <>
      <div className="w-full max-w-xs border border-gray-300 rounded-2xl p-6 flex flex-col items-center shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gradient-to-br hover:from-[#1a2c6b] hover:to-black hover:text-white hover:border-transparent">
        <div className="bg-white rounded-full p-4 mb-4 transition-all duration-300 hover:bg-[#f1f1f1]">
          <Image src={image} alt={title} width={48} height={48} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-center">{description}</p>
      </div>
    </>
  );
};

export default AboutCard;
