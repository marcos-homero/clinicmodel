import { FaClinicMedical } from "react-icons/fa";

import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col justify-around items-center w-fit">
      <FaClinicMedical size={64} className="text-primary" />
      <h1 className="text-primary text-xl font-bold">Intelimed</h1>
    </Link>
  );
};

export default Logo;
