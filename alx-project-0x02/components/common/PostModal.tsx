"use client";
import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({ title, content });

    // Reset form
    setTitle("");
    setContent("");

    // Close modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label className="block mb-2 font-semibold">Content</label>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
