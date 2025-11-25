"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Определим доступные темы
const THEMES = [
  { name: "light", label: "Светлая", icon: Sun },
  { name: "dark", label: "Тёмная", icon: Moon },
  { name: "blue", label: "Голубая", icon: Palette },
  { name: "purple", label: "Пурпурная", icon: Palette },
  { name: "tweakcn-light", label: "tweakcn-light", icon: Palette },
  { name: "tweakcn-dark", label: "tweakcn-dark", icon: Palette },
  { name: "perpetuity-light", label: "perpetuity-light", icon: Palette },
  { name: "perpetuity-dark", label: "perpetuity-dark", icon: Palette },
];

export function ThemeSelector() {
  const { setTheme, theme } = useTheme();

  // const toggleTheme = () => {
  //   const currentIndex = THEMES.findIndex(t => t.name === theme);
  //   const nextIndex = (currentIndex + 1) % THEMES.length;
  //   setTheme(THEMES[nextIndex].name);
  // };

  // Или используем DropdownMenu для выбора
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Выбрать тему">
          {theme === 'dark' ? (
            <Moon className="h-5 w-5" />
          ) : theme === 'blue' ? (
            <Palette className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEMES.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => setTheme(t.name)}
          >
            <t.icon className="mr-2 h-4 w-4" />
            <span>{t.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
