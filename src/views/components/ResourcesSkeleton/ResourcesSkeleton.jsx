import React from "react";
import {
  Rectangle,
  SkeletonContainer,
  RectangleSection,
  RectangleText,
} from "./resourcesSkeletonStyledComponents";

const ResourcesSkeleton = () => {
  return (
    <SkeletonContainer>
      <RectangleText />
      <RectangleSection>
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </RectangleSection>
      <RectangleText />
      <RectangleSection>
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </RectangleSection>
      <RectangleText />
      <RectangleSection>
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </RectangleSection>
    </SkeletonContainer>
  );
};

export default ResourcesSkeleton;
