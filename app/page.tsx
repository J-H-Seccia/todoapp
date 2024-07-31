"use client";

import { SignIn } from "@/components/SignIn";
import { AuthWrapper } from "@/components/AuthWrapper";

export default function Home() {
  return (
    <AuthWrapper>
      <div className="flex flex-col items-center justify-between p-24">
        <SignIn />
      </div>
    </AuthWrapper>
  );
}
