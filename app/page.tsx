import { CgArrowTopRightO } from "react-icons/cg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="hidden md:inline-flex">
        <Image
          src={"/hero.png"}
          alt="hero"
          fill
          className="object-cover -z-50"
        />
      </div>
      <div className="lg:hidden">
        <Image
          src={"/mobilehero.png"}
          alt="hero"
          fill
          className="object-cover -z-50"
        />
      </div>
      <div className=" px-24 pt-6">
        <h1 className="text-[180px] tracking-tighter w-[45%] leading-35 font-bold">
          Groove. Overflow. Spin.
        </h1>
      </div>
      <div className="flex items-center space-x-2 border max-w-[150px] ml-26 mt-12 rounded-2xl p-2">
        <button className="text-center">See more</button>
        <CgArrowTopRightO />
      </div>
    </div>
  );
}
