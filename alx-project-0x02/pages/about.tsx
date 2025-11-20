"use client";

import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />

      <div className="p-6">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p className="mt-2 text-gray-700">
          This is the about page.
        </p>
      </div>
    </div>
  );
}
