'use client';
// import { SessionProvider } from "next-auth/react";
import { AuthProvider } from '@/contexts'
export default function SiteProviders({ children }) {
  return (
    // <SessionProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    // </SessionProvider>
  )
}