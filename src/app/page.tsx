import Image from "next/image";
import Link from "next/link";
import Button from "@/elements/Button/Button";
import "./homepage.scss";
import { bemElement } from "../utils/bem-class-names";

export default function Home() {
  const baseClassName = "homepage";
  const bem = bemElement(baseClassName);

  return (
    <main className={baseClassName}>
      <Image
        src={"/hearth_ai_logo.jpg"}
        alt=""
        width="100"
        height="100"
        className={bem("main-image")}
      />

      <div className={bem("login-container")}>
        <h1 className={bem("heading")}>Thank you for reviewing! 🤝</h1>
        <p className={bem("subheading")}>I appreciate your time</p>

        <Link href={"/dashboard"}>
          <Button className={bem("login-button")}> Log In</Button>
        </Link>
      </div>
    </main>
  );
}
