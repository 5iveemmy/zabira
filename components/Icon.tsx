import Link from "next/link";
import React from "react";

interface Props {
  icon: React.ReactNode;
  link?: string;
  className?: string;
}

const Icon: React.FC<Props> = ({ icon, link, className }) => {
  return (
    <Link href={link as string} target="_blank" rel="noopener noreferrer">
      <div className={`${className || ""}`}>{icon}</div>
    </Link>
  );
};

export default Icon;
