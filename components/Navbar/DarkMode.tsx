"use client";

import { SwitchProps, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeSwitcher(props: SwitchProps) {
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(mounted ? "light" : "dark");
  }, [mounted, setTheme]);

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2 pt-1">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          onClick={() => setMounted(!mounted)}
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "h-8 w-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
              "dark:text-white",
            ],
          })}
        >
          {isSelected ? <FaSun /> : <FaMoon />}
        </div>
      </Component>
    </div>
  );
}
