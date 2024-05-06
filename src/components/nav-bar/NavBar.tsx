import React from "react";
import Image from "next/image";
import "./NavBar.scss";
import Link from "next/link";

const baseClassName = "navbar";

function NavBar() {
  return (
    <div className={baseClassName}>
      <Link href={"/"}>
        <Image
          className="navbar__logo-image"
          src={"/hearth_ai_logo.jpg"}
          alt=""
          width="50"
          height="50"
        />
      </Link>
    </div>
  );
}

export default NavBar;
