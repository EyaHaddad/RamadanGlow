import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useGreetings() {
  return useQuery({
    queryKey: [api.greetings.list.path],
    queryFn: async () => {
      const res = await fetch(api.greetings.list.path);
      if (!res.ok) throw new Error("Failed to fetch greetings");
      return api.greetings.list.responses[200].parse(await res.json());
    },
  });
}
