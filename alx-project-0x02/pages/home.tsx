"use client";
import { useState } from "react";
import PostModal from "../components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Add New Post
      </button>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Display posts */}
      <div className="mt-6 space-y-4">
        {posts.length === 0 && <p className="text-gray-500">No posts yet.</p>}

        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
