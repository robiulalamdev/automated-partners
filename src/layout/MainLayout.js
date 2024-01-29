import Header from "@/components/shared/Header/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex-col justify-between min-h-screen h-full w-full max-w-theme mx-auto">
      <Header />
      <div className="flex-grow w-full h-full">{children}</div>
    </div>
  );
};

export default MainLayout;
