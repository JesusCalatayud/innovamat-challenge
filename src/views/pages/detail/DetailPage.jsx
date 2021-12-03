import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./youtubePlayerStyles.css";
import YouTube from "react-youtube";
import { fetchResourceDetail } from "../../../application/actions/detail/detailActions";
import { useParams } from "react-router-dom";
import Text from "../../components/Text/Text";
import BackButton from "../../components/BackButton/BackButton";
import {
  DetailPageContainer,
  DetailPageHeader,
} from "./detailPageStyledComponents";
import DetailSkeleton from "../../components/DetailSekeleton/DetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { resourceId } = useParams();
  const resourceDetail = useSelector(({ detail }) => detail.resourceDetail);
  const loading = useSelector(({ detail }) => detail.detailLoading);
  const error = useSelector(({ detail }) => detail.detailError);
  const { title, videoId, description } = resourceDetail;

  useEffect(() => {
    dispatch(fetchResourceDetail(resourceId));
  }, [resourceId]);

  return (
    <DetailPageContainer>
      {loading ? (
        <DetailSkeleton />
      ) : (
        <div>
          {error ? (
            <ErrorMessage err={error} />
          ) : (
            <>
              <DetailPageHeader>
                <BackButton />
                <Text bold size="lg" color="black">
                  {title}
                </Text>
              </DetailPageHeader>
              <YouTube videoId={videoId} containerClassName="youtube-player" />
              <Text color="black">{description}</Text>
            </>
          )}
        </div>
      )}
    </DetailPageContainer>
  );
};

export default DetailPage;
