import React from "react";
import Link from "next/link";

function Button({ name, href, Icon }) {
  return (
    <Link href={href}>
      <a className="cursor-pointer uppercase bg-orange hover:bg-lightorange/70 transition-colors py-3 px-6 text-gray tracking-[2px] w-max text-sm font-normal">
        {name} {Icon && <span>{Icon}</span>}
      </a>
    </Link>
  );
}

export default Button;
