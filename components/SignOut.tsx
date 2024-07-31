"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOut() {
  const { signOut } = useAuthActions();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      console.log("Starting sign out process");
      await signOut();
      console.log("Sign out successful");
      router.push('/');
      console.log("Router.push called");
      router.refresh();
      console.log("Router refreshed");
    } catch (error) {
      console.error("Error during sign out:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Button onClick={handleSignOut} disabled={isSigningOut}>
      {isSigningOut ? "Signing Out..." : "Sign Out"}
    </Button>
  );
}