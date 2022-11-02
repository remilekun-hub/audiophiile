import React from "react";
import Link from "next/link";

function Button({ name, href, Icon }) {
  return (
    <Link href={href}>
      <a className="cursor-pointer uppercase hover:bg-lightorange/70 transition-colors px-6 py-3 mt-4 bg-orange tracking-[1px] text-white font-bold  w-max text-sm">
        {name} {Icon && <span>{Icon}</span>}
      </a>
    </Link>
  );
}

export default Button;
