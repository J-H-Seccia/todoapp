'use client';

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "./ui/button";

export function SignIn() {
  const { signIn } = useAuthActions();
  
  return (
    <Button onClick={() => void signIn("github", { redirectTo: "/authenticated" })}>
      Sign in with GitHub
    </Button>
  );
}