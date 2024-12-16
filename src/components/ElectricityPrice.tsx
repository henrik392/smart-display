import Image from "next/image";

const ElectricityPrice = () => {
  return (
    <div className="w-full h-auto">
      <Image
        src="/images/look-at-this-graph-nickelback.gif"
        alt="Electricity Price"
        layout="responsive"
        width={478}
        height={270}
      />
    </div>
  );
};

export default ElectricityPrice;