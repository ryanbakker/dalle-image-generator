import Image from "next/image";

function Header() {
  return (
    <header>
      {/* Left */}
      <div>
        <Image
          src="https://links.papareact.com/4t3"
          alt="Logo"
          height={30}
          width={30}
        />

        <div>
          <h1 className="font-bold">
            The Willow <span className="text-violet-500">AI</span> Image
            Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL•E 2, Chat GPT and Microsoft Azure.
          </h2>
        </div>
      </div>

      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
