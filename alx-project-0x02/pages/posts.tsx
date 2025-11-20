"use client";

import Header from "../components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />

      <div className="p-6">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p className="mt-2 text-gray-700">
          Here you will see all posts.
        </p>
      </div>
    </div>
  );
}
