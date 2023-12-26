import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h- screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500 h-5 w-5"></div>
    </div>
  );
};

export default Loader;
