"use client"
import { Authenticated, AuthLoading } from "convex/react";


export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Authenticated>
      {children}
    </Authenticated>
  )
}