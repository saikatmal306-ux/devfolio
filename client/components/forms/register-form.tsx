"use client";

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
  registerSchema,
  RegisterFormValues,
} from "@/features/auth/auth.schemas";

import { useRegister } from "@/features/auth/auth.api";

export default function RegisterForm() {
  const registerMutation =
    useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver:
      zodResolver(
        registerSchema
      ),
  });

  const onSubmit = (
    data: RegisterFormValues
  ) => {
    registerMutation.mutate(
      data,
      {
        onSuccess: () => {
          toast.success(
            "Account created"
          );
        },

        onError: () => {
          toast.error(
            "Registration failed"
          );
        },
      }
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Register
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
            disabled={
              registerMutation.isPending
            }
          >
            {registerMutation.isPending
              ? "Loading..."
              : "Register"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}