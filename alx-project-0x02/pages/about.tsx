import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="mt-4">This page gives information about the project.</p>
      </main>
    </>
  );
}
