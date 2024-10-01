import { FaClinicMedical } from "react-icons/fa";

import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex w-fit flex-col items-center justify-around">
      <FaClinicMedical size={64} className="text-primary" />
      <h1 className="text-xl font-bold text-primary">Intelimed</h1>
    </Link>
  );
};

export default Logo;
