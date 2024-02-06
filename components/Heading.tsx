import { PropsWithChildren } from "react";

const Heading = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-center text-3xl font-extrabold text-red-500">
      {children}
    </h1>
  );
};

export default Heading;
