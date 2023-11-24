"use client";
import { Skeleton } from "keep-react";

export const SkeletonComponent = () => {
  return (
    <div className="w-full py-5">
      <Skeleton animation={true}>
        <div className="w-full  skeletonClass">
          <Skeleton.Line height="h-[170px]" />
        </div>
        <div className="w-full skeletonClass">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-full  skeletonClass">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-full skeletonClass">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-full skeletonClass">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-full skeletonClass">
          <Skeleton.Line height="h-[46px]" />
        </div>
      </Skeleton>
    </div>
  );
};
