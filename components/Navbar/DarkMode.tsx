"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from "@nextui-org/react";
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
    <div className="flex flex-col gap-2">
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
            ],
          })}
        >
          {isSelected ? <FaSun /> : <FaMoon />}
        </div>
      </Component>
    </div>
  );
}
