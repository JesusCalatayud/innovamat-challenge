import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Gradient = styled.div`
  height: 30px;
  width: 100vw;
  left: 0;
  top: 138px;
  position: fixed;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
`;

export { Header, SubHeader, Gradient };
