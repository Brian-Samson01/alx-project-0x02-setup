"use client";

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md shadow p-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>

      <p className="mt-2 text-gray-700">
        <span className="font-semibold">Email: </span>{email}
      </p>

      <p className="mt-2 text-gray-700">
        <span className="font-semibold">Address: </span>
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
