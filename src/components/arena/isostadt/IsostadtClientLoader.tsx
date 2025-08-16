"use client";

import dynamic from "next/dynamic";

// Client-only dynamic load to avoid SSR for the interactive shell
const DynamicShell = dynamic(() => import("./IsostadtShell"), { ssr: false });

export default function IsostadtClientLoader() {
  return <DynamicShell />;
}
