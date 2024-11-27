// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/cloudflare";
import { useOutletContext } from "@remix-run/react";
import type { User } from "../utils/types";
import { HeroCarousel } from "~/components/home/HeroCarousel";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Nocturn Clothing" },
    { name: "description", content: "Welcome to Nocturn Clothing" },
  ];
};

export default function Index() {
  const { user } = useOutletContext<{ user: User | null }>();
  
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold">
          Welcome {user?.name ? `back, ${user.name}` : "to Nocturn Clothing"}
        </h1>
      </div>
      <HeroCarousel />
    </div>
  );
}