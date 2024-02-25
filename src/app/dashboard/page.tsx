"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  useEffect(() => {
    if (session === null) {
      redirect("/");
    }
  }, [session]);
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Congrats!</h1>
          <p className="text-lg mb-4">You're already in.</p>
          <p className="text-sm text-gray-500 m-2">
            Check your cookies for data.
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              signOut({ callbackUrl: "/", redirect: true });
            }}
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </>
  );
}
