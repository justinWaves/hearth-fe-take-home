import Image from "next/image";
import Link from "next/link";
import Button from "@/elements/Button/Button";
import "./homepage.scss";

export default function Home() {
  return (
    <main className="homepage">
      <Image src={"/hearth_ai_logo.jpg"} alt="" width="100" height="100" />
      <Link href={"/dashboard"}>
        <Button className={"homepage__login-button"}> Log In</Button>
      </Link>
    </main>
  );
}
