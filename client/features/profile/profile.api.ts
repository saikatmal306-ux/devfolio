import { useQuery } from "@tanstack/react-query";

import { getMyProfile } from "./profile.service";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });
};