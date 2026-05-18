"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Switch>
      {({ isSelected }) => (
        <>
          <Switch.Control
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`h-7 w-12 rounded-full border border-black/10 dark:border-white/10 transition-all duration-300 ${
              isSelected
                ? "bg-linear-to-r from-[#f472b6] via-[#a855f7] to-[#22d3ee] shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                : "bg-slate-200"
            }`}
          >
            <Switch.Thumb
              className={`size-6 rounded-full bg-white shadow-sm flex items-center justify-center transition-all duration-300 ${
                isSelected ? "ms-5 shadow-lg" : ""
              }`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Moon className="size-4 text-[#a855f7] transition-all" />
                ) : (
                  <Sun className="size-4 text-[#eab308] transition-all" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
};

export default ThemeSwitch;
