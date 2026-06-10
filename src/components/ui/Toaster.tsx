"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "bg-card border border-border text-foreground rounded-xl shadow-premium",
          success: "border-success/30",
          error: "border-destructive/30",
        },
      }}
    />
  );
}
