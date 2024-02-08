import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PropsWithChildren } from "react";

const AvatarIcon = ({ children }: PropsWithChildren) => {
  return (
    <Avatar className="mx-1">
      <AvatarFallback className="bg-black text-white dark:bg-white dark:text-black">
        {children}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
