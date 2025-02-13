"use client";

import PageWrapper from "@/components/page-wrapper";
import { FaSpinner } from "react-icons/fa";

export default function LoadingComponent() {
  return (
    <PageWrapper>
      <div className="text-white w-full min-h-screen flex justify-center items-center">
        <FaSpinner className="animate-spin repeat-infinite w-20 h-20" />
      </div>
    </PageWrapper>
  );
}