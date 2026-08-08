"use client";

import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuthStore } from "@/features/auth/auth.store";
import { useLogout } from "@/features/auth/auth.api";

export default function UserDropdown() {
  const router = useRouter();

  const logout = useLogout();

  const user = useAuthStore((state) => state.user) as {
    email?: string;
  } | null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
  <Avatar className="cursor-pointer">
    <AvatarFallback>
      {user?.email?.charAt(0).toUpperCase() ?? "U"}
    </AvatarFallback>
  </Avatar>
</DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          {user?.email}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() =>
            logout.mutate(undefined, {
              onSuccess: () => {
                toast.success("Logged out");
                router.push("/login");
              },
            })
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}