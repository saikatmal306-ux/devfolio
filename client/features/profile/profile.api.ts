import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getMyProfile,
  updateMyProfile,
  getProfileByUsername,
} from "./profile.service";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMyProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
};

export const usePublicProfile = (
  username: string
) => {
  return useQuery({
    queryKey: ["public-profile", username],

    queryFn: () =>
      getProfileByUsername(username),

    enabled: !!username,
  });
};

