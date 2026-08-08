"use client";

import {
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  queryClient,
} from "@/lib/react-query";

import ToasterProvider from "@/components/providers/toaster-provider";

import AuthLoader from "@/components/auth/auth-loader";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <ToasterProvider />

      <AuthLoader />

      {children}
    </QueryClientProvider>
  );
}