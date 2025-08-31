"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientRedirect({
  to = "/",
  delay = 5000,
  replace = true,
}) {
  const router = useRouter();
  useEffect(() => {
    const t = setTimeout(
      () => (replace ? router.replace(to) : router.push(to)),
      delay
    );
    return () => clearTimeout(t);
  }, [to, delay, replace, router]);
  return null;
}
