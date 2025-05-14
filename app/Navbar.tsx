import Image from "next/image";
import Socials from "./Socials";

export default function Navbar() {
  return (
    <div className="py-8 px-24 justify-between items-center flex">
      <div>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={180}
          height={180}
          className="object-cover"
        />
      </div>
      <div className="flex space-x-4 text-[#ad59e8] font-semibold">
        <p>Home</p>
        <p>Lineup</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
}
