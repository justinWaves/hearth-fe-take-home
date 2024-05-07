/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import "./NavBar.scss";
import Link from "next/link";
import { bemElement, bemModifier } from "../../utils/bem-class-names";

const baseClassName = "navbar";
const bem = bemElement(baseClassName);

function NavBar() {
  return (
    <div className={baseClassName}>
      <Link href={"/"}>
        <Image
          className={bem("logo-image")}
          src={"/hearth_ai_logo.jpg"}
          alt=""
          width="45"
          height="45"
        />
      </Link>
      <input
        type="text"
        placeholder=" + Ask Hearth..."
        className={bem("input")}
      />
      <img
        src={`https://api.dicebear.com/8.x/miniavs/svg?seed=justin`}
        alt=""
        className={bem("avatar")}
      />
    </div>
  );
}

export default NavBar;
