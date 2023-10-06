import React from "react";

const Fallback = () => {
  return (
    <div className="w-full min-w-[280px] min-h-[320px] lg:h-[500px] xl:h-[600px] rounded-lg bg-gray-200 flex justify-center items-center">
      There&#96;s no data in this range
    </div>
  );
};

export default Fallback;
