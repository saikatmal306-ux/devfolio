"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  loginSchema,
  LoginFormValues,
} from "@/features/auth/auth.schemas";

import { useLogin } from "@/features/auth/auth.api";

export default function LoginForm() {
  const login = useLogin();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (
    data: LoginFormValues
  ) => {
    login.mutate(data, {
      onSuccess: () => {
        toast.success(
          "Login successful"
        );
        router.push(
      "/dashboard"
    );
      },

      onError: () => {
        toast.error(
          "Login failed"
        );
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Login
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-4"
        >
          <div>
            <Input
              placeholder="Email"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={login.isPending}
          >
            {login.isPending
              ? "Loading..."
              : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}