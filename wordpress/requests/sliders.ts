import { queryOptions } from "@tanstack/react-query";
import { getSliders } from "../collections/sliders";

export const slidersQuery = queryOptions({
  queryKey: ["sliders"],
  queryFn: getSliders,
});
