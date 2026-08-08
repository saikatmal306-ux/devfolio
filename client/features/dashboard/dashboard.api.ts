import { useQuery } from "@tanstack/react-query";

import { getDashboardStats }
from "./dashboard.service";

export const useDashboardStats =
  () =>
    useQuery({
      queryKey: ["dashboard"],

      queryFn:
        getDashboardStats,
    });