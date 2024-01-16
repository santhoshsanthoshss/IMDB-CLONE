import React, { useState } from "react";

const Pagination = () => {
  const [pageNum, setpageNum] = useState(1);
  const prev = () => {
    if (pageNum > 1) {
      setpageNum(pageNum - 1);
    }
  };

  const nex = () => {
    setpageNum(pageNum + 1);
  };
  return (
    <div className="flex  justify-center relative bottom-24">
      <div
        className="border-2 p-2 cursor-pointer rounded-l-xl border-blue-400"
        onClick={prev}
      >
        Prev
      </div>
      <div className="border-2 p-2 cursor-pointer  border-blue-400">
        {pageNum}
      </div>
      <div
        className="border-2 p-2 cursor-pointer rounded-r-xl border-blue-400"
        onClick={nex}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
