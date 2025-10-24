"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../../Input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Separator } from "../../separator";

const schema = z
  .object({
    email: z.email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <div className="pt-12">
      <h2 className="text-4xl font-bold mb-2">Create your account</h2>
      <p className="text-3xl text-[#004715] font-semibold mb-10">
        Unlock exclusive access.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} placeholder="jane@example.com" />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="•••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-secondary absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Repeat Password</Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="•••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-secondary absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <Button type="submit" className="mt-4 w-full">
          Register
        </Button>
      </form>
      <div className="flex items-center gap-6 my-6">
        <Separator className="flex-1" />
        <span className="text-xs text-gray-500">OR</span>
        <Separator className="flex-1" />
      </div>

      <div className="flex flex-col gap-4">
        <Button
          variant="outline"
          type="button"
          className="w-full border-gray-600"
        >
          <Image src="/github.png" alt="github" width={25} height={24} />
          Github
        </Button>
        <Button
          variant="outline"
          type="button"
          className="w-full border-gray-600"
        >
          <Image src="/google.png" alt="google" width={25} height={24} />
          Google
        </Button>
      </div>
    </div>
  );
}
