import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "./experience.service";

export interface ExperienceInput {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

export const useExperiences =
  () =>
    useQuery({
      queryKey: ["experiences"],
      queryFn: getExperiences,
    });

export const useCreateExperience =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: createExperience,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["experiences"],
        });
      },
    });
  };

export const useUpdateExperience =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: ({
        id,
        payload,
      }: {
        id: string;
        payload: ExperienceInput;
      }) =>
        updateExperience(
          id,
          payload
        ),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["experiences"],
        });
      },
    });
  };

export const useDeleteExperience =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: deleteExperience,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["experiences"],
        });
      },
    });
  };