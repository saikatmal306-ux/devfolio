"use client";

import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { useAuthStore } from "@/features/auth/auth.store";
import { useLogout } from "@/features/auth/auth.api";
import { useProfile } from "@/features/profile/profile.api";

export default function UserDropdown() {
  const router = useRouter();

  const logout = useLogout();

  const { data: profile } = useProfile();

  const user = useAuthStore(
    (state) => state.user
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="outline-none cursor-pointer"
      >
        <Avatar>
  <AvatarImage
    src={profile?.data?.profileImage}
    alt={profile?.data?.fullName}
  />

  <AvatarFallback>
    {user?.data?.email
      ?.charAt(0)
      .toUpperCase() ?? "U"}
  </AvatarFallback>
</Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <DropdownMenuLabel>
          {user?.data?.email}
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
                toast.success(
                  "Logged out"
                );

                router.replace("/login");
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