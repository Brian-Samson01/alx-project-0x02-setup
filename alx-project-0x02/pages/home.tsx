import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="mt-4">Welcome to the Home page.</p>
      </main>
    </>
  );
}
