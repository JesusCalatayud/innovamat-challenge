import styled from "styled-components";

const DetailSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const YoutubeRectangle = styled.div`
  width: 640px;
  height: 390px;

  background-color: #dee2e6;
  border-radius: 5px;
  animation: loading 1s ease infinite alternate;

  @keyframes loading {
    from {
      background-color: #dee2e6;
    }
    to {
      background-color: #ced4da;
    }
  }
`;

const VideoTitleRectangle = styled.div`
  width: 250px;
  height: 30px;

  background-color: #dee2e6;
  border-radius: 5px;
  animation: loading 1s ease infinite alternate;

  @keyframes loading {
    from {
      background-color: #dee2e6;
    }
    to {
      background-color: #ced4da;
    }
  }
`;

export { YoutubeRectangle, VideoTitleRectangle, DetailSkeletonContainer };
