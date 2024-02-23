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
          <p className="text-sm text-gray-500">
            Check your local storage for data.
          </p>
          <button
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
