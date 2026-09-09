import React from "react";
import * as LucideIcons from "lucide-react";

interface IconRendererProps {
  name?: string;
  fallbackEmoji?: string;
  className?: string;
  size?: number;
}

export function IconRenderer({
  name,
  fallbackEmoji,
  className = "w-5 h-5",
  size = 20,
}: IconRendererProps) {
  if (name && name in LucideIcons) {
    const LucideIcon = LucideIcons[
      name as keyof typeof LucideIcons
    ] as React.ComponentType<{
      className?: string;
      size?: number;
    }>;
    if (LucideIcon) {
      return <LucideIcon className={className} size={size} />;
    }
  }

  if (fallbackEmoji) {
    return <span className={className}>{fallbackEmoji}</span>;
  }

  return null;
}
