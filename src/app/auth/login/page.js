"use client";
import { setUser } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    // Implement login logic here
    // If login is successful, redirect to home page
    console.log(data);
    dispatch(setUser(data));
    const isLoggedIn = true; // Replace this with actual login check logic
    if (isLoggedIn) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-2 p-2 w-full border rounded"
              {...register("username")}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 p-2 w-full border rounded"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
