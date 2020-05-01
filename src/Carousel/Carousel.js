import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Dots from './Dots';

function Carousel({
  images = [],
  renderImage,
  align = 'horizontal',
  showDots,
  dotsPosition = 'bottom',
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeItem = (index) => {
    setActiveIndex(index);
  };

  let tempItems = [];
  for (let i = 0; i < images.length; i++) {
    tempItems.push(<GridItem key={i} onMouseEnter={() => changeItem(i)} />);
  }

  const renderItem = () => {
    if (renderImage) {
      return renderImage(images[activeIndex]);
    }
    return <Image src={images[activeIndex]} />;
  };

  return (
    <Container>
      <Content>{renderItem()}</Content>
      {showDots && <Dots position={dotsPosition} activeDot={activeIndex} />}
      <Grid count={images.length} align={align}>
        {tempItems}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  ${({ align, count }) => getCarouselAlign(align, count)};
`;

const GridItem = styled.div`
  background: transparent;
  z-index: 9;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Image = styled.img`
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  align-items: center;
  display: block;
  height: 100%;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  vertical-align: top;
  width: auto;
`;

const getCarouselAlign = (align, count) => {
  switch (align) {
    case 'horizontal':
      return css`
        grid-template-columns: repeat(${count}, 1fr);
      `;
    case 'vertical':
      return css`
        grid-template-rows: repeat(${count}, 1fr);
      `;
  }
  return css`
    grid-template-columns: repeat(${count}, 1fr);
  `;
};

export default Carousel;
