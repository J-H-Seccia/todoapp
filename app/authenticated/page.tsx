"use client"
import {SignOut} from '@/components/SignOut';

export default function AuthenticatedHome() {
  return (
    <div>
      <h1>Welcome, authenticated user!</h1>
      <SignOut />
      {/* Other authenticated content */}
    </div>
  )
}