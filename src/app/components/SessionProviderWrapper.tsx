"use client"; // Ensures this runs only on the client side

import { SessionProvider } from "next-auth/react";

const SessionProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
