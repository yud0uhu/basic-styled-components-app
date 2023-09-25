/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css`
  margin: 0 auto;
  padding: 15px;
  max-width: 585px;
`;

const textStyles = css`
  color: var(--hiContrast);
`;

const imageContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const imageStyle = css`
  width: 100px;
  height: auto;
  border-radius: var(--1);
`;

const Container = ({ children }) => {
  return <div css={containerStyle}>{children}</div>;
};

const Text = ({ children }) => {
  return <h1 css={textStyles}>{children}</h1>;
};

const ImageContainer = ({ children }) => {
  return <div css={imageContainerStyle}>{children}</div>;
};

const Image = (props) => {
  return <img css={imageStyle} {...props} />;
};

const PhotoListComponent = ({ text, photoList }) => {
  return (
    <Container>
      <Text>PhotoListComponent from Emotion CSS.</Text>
      <p style={{ margin: 0 }}>text: {text}</p>

      <ul
        css={css`
          padding: 0;
          margin: 0;
          list-style: none;
        `}
      >
        {photoList.map((photo) => (
          <li
            css={css`
              list-style: none;
            `}
            key={photo.id}
          >
            <ImageContainer>
              <Image src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </ImageContainer>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PhotoListComponent;
