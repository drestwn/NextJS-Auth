"use client";
// to give all children the session
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const SessionWrapper = ({
  children,
  session,
}: {
  children: ReactNode;
  session: any;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
