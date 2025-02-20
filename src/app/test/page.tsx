import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-around items-center h-full">
      <Image
        src="/2_receive.png"
        alt="Logo"
        className="h-full"
        width={500}
        height={500}
      />
      <Image
        src="/logo.png"
        alt="Logo"
        className="h-full"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
