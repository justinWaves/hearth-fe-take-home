import Image from "next/image";
import Link from "next/link";
import Button from "@/elements/Button/Button";
import "./homepage.scss";
import { bemElement } from "../utils/bem-class-names";
import { joinClassNames } from "../utils/join-class-names";

interface IHomePageProps {
  className?: string;
}

export default function Home({ className = "" }: IHomePageProps) {
  const baseClassName = "homepage";
  const bem = bemElement(baseClassName);

  return (
    <main className={joinClassNames(baseClassName, className)}>
      <Image
        src={"/hearth_ai_logo.jpg"}
        alt=""
        width="100"
        height="100"
        className={bem("main-image")}
      />

      <div className={bem("login-container")}>
        <Link href={"/dashboard"}>
          <Button className={bem("login-button")}> Log In</Button>
        </Link>
      </div>
    </main>
  );
}
