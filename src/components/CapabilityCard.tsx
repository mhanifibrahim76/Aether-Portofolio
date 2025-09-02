import Image from "next/image";

interface CapabilityProps {
  title: string;
  description: string;
  image: string;
}

const CapabilityCard = ({ image, title, description }: CapabilityProps) => {
  return (
    <div className="flex flex-row justify-start items-center gap-4 p-4">
      <div className="flex flex-row items-center gap-4 p-4">
        {/* Image */}
        <div className="flex-shrink-0 h-full">
          <Image src={image} alt={title} width={35} height={35} />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CapabilityCard;
