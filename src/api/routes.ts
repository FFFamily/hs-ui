import { asyncRoutes } from "@/api/asyncRoutes";

export const getAsyncRoutes = () => {
  return Promise.resolve(asyncRoutes);
};
