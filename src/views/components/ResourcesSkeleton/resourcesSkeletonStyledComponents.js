import styled from "styled-components";

const SkeletonContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Rectangle = styled.div`
  width: 200px;
  height: 280px;
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

const RectangleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const RectangleText = styled.div`
height: 30px;
width: 280px;

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

`;

export { SkeletonContainer, Rectangle, RectangleSection, RectangleText };
