"use client";

import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-md shadow p-4 bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>

      <p className="mt-4 text-sm text-gray-500">
        <span className="font-semibold">User ID:</span> {userId}
      </p>
    </div>
  );
};

export default PostCard;
