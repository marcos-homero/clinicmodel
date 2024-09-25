import { FaClinicMedical } from "react-icons/fa";

import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col justify-around items-center w-fit">
      <FaClinicMedical size={64} className="text-primary" />
      <h1 className="text-primary text-xl font-bold">Intelimed</h1>
    </div>
  );
};

export default Logo;
