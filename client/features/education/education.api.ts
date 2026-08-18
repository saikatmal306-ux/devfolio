import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "./education.service";

export interface EducationInput {
  institution: string;

  degree: string;

  fieldOfStudy: string;

  startDate: string;

  endDate?: string;

  current?: boolean;

  description?: string;
}

export const useEducation =
  () =>
    useQuery({
      queryKey: ["education"],
      queryFn: getEducation,
    });

export const useCreateEducation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: createEducation,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["education"],
        });
      },
    });
  };

export const useUpdateEducation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: ({
        id,
        payload,
      }: {
        id: string;
        payload: EducationInput;
      }) =>
        updateEducation(
          id,
          payload
        ),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["education"],
        });
      },
    });
  };

export const useDeleteEducation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: deleteEducation,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["education"],
        });
      },
    });
  };