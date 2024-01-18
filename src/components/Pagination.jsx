import React from "react";

const Pagination = ({ pageNum, onNext, prev, nex, onprev }) => {
  return (
    <div className="flex  justify-center mt-16">
      <div
        className="border-2 p-2 cursor-pointer rounded-l-xl border-blue-400"
        onClick={() => {
          onprev(pageNum - 1);
        }}
      >
        Prev
      </div>
      <div className="border-2 p-2 cursor-pointer  border-blue-400">
        {pageNum}
      </div>
      <div
        className="border-2 p-2 cursor-pointer rounded-r-xl border-blue-400"
        onClick={() => {
          onNext(pageNum + 1);
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
