import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/mainImage1.jpeg";
import GalleryPhoto2 from "../assets/mainImage2.jpeg";
import GalleryPhoto3 from "../assets/mainImage3.jpeg";
import GalleryPhoto4 from "../assets/mainImage4.jpeg";
import GalleryPhoto5 from "../assets/mainImage5.jpeg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
  
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
];

const Gallery = () => {
  return (
    <Wrapper data-aos="fade-up">
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>오늘의 주인공</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
