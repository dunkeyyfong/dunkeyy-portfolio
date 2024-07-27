"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";

export const Heading = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1>DunkeyyFong</h1>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
