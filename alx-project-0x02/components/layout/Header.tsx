import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">ALX Project</h1>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
