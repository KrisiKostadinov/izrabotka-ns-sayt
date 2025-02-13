import { ReactNode } from "react";

import NavigationBar from "@/components/navbar";

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <header className="relative bg-black-100 flex flex-col justify-between items-center overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <NavigationBar />
        </div>
      </header>
      {children}
    </>
  );
}