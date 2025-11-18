import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Welcome to ALX Project 2</h1>
        <p className="mt-4">This is your Next.js + TypeScript + Tailwind setup.</p>
      </main>
    </>
  );
}
