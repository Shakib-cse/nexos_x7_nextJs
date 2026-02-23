"use client";

import { Loader2 } from "lucide-react";
import SvgIcon from "@/components/commonLayout/HomePage/Logo";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Logo */}
      <div className="mb-6">
        <SvgIcon />
      </div>

      {/* Simple Spinner */}
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />

      {/* Text */}
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
