'use client'

import { useRouter } from "next/navigation";

export default function useGoTo(page: string) {
  const router = useRouter();

  router.push(page);
}
