import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type ToastProviderProps = {
  children: ReactNode;
};

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
}
