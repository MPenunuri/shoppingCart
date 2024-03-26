import { useEffect, useState } from "react";
import styled, { StyleSheetManager } from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props.imgsrc ? `url(${props.imgsrc})` : "none"};
  background-size: 100% 100%;
  background-position: top;
  z-index: -1;
`;

export default function BackgroundLayout() {
  const [imgSrc, setImageSrc] = useState();

  useEffect(() => {
    (async function getImg() {
      const img = await import(
        "../assets/milad-fakurian-E8Ufcyxz514-unsplash.jpg"
      );
      setImageSrc(img.default);
    })();
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "imgSrc"}>
      <BackgroundContainer
        imgsrc={imgSrc}
        aria-hidden="true"
      ></BackgroundContainer>
    </StyleSheetManager>
  );
}
