"use client";

import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const formattedData: UserProps[] = data.map((user: any) => ({
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
      }));

      setUsers(formattedData);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Header />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Users</h1>

        <div className="space-y-4">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
