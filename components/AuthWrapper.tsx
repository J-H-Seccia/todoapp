"use client";

import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
  useConvexAuth,
} from "convex/react";
import { ReactNode, useEffect } from "react";
import { SignIn } from "@/components/SignIn";
import { useRouter, usePathname } from "next/navigation";

export function AuthWrapper({ children }: { children: ReactNode }) {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const router = useRouter();
    const pathname = usePathname();
  
    useEffect(() => {
      console.log("Auth state changed:", { isAuthenticated, isLoading, pathname });
      if (!isLoading && !isAuthenticated && pathname.startsWith('/authenticated')) {
        console.log("Redirecting to home");
        router.push('/');
      }
    }, [isAuthenticated, isLoading, router, pathname]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (!isAuthenticated) {
      return <SignIn />;
    }
  
    return <>{children}</>;
  }
