"use client";

import { useState } from "react";

type Props = {
  title: string;
  onSubmit: (
    data: {
      email: string;
      password: string;
    }
  ) => void;
};

export default function AuthForm({
  title,
  onSubmit,
}: Props) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit({
          email,
          password,
        });
      }}
    >
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        className="w-full border p-2 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        type="submit"
        className="w-full border p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}