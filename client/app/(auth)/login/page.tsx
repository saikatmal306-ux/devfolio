import LoginForm
from "@/components/forms/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-md">
    <LoginForm />
    <p className="mt-4 text-center text-sm text-muted-foreground">
  Don't have an account?{" "}
  <Link
    href="/register"
    className="font-medium text-primary hover:underline"
  >
    Create one
  </Link>
</p>
  </div>
</div>

  );
}