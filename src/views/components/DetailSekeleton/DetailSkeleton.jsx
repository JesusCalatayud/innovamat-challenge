import React from "react";
import Text from "../Text/Text";
import {
  DetailSkeletonContainer,
  VideoTitleRectangle,
  YoutubeRectangle,
} from "./detailSekeletonStyledComponents";

const DetailSkeleton = () => {
  return (
    <DetailSkeletonContainer>
      <Text bold>Cargando contenido...</Text>
      <VideoTitleRectangle />
      <YoutubeRectangle />
    </DetailSkeletonContainer>
  );
};

export default DetailSkeleton;
