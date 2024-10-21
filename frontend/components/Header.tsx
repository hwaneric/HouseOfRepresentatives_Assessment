import Image from "next/image";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b shadow-lg mb-8">
      <Image
        className="m-4 rounded-sm"
        alt={"Office of the Clerk Logo"}
        src={`/clerk-logo-web.svg`}
        width={500}
        height={400}
      />
    </nav>
  );
}
