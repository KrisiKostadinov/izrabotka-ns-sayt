import Image from "next/image";
import Link from "next/link";

export default function DisplayLogo() {
  return (
    <Link
      href={"/"}
      className="max-md:w-[40px] max-md:h-[40px] w-[60px] h-[60px] z-20"
    >
      <Image
        src="/logo.png"
        alt={process.env.NEXT_PUBLIC_WEBSITE_TITLE as string}
        className="w-full h-full"
        width={80}
        height={80}
      />
    </Link>
  );
}
