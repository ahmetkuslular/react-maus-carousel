import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Carousel from './Carousel';

const tempImages = [
  'https://productimages.hepsiburada.net/l/37/600-888/10554921779250.jpg',
  'https://productimages.hepsiburada.net/l/37/600-888/10554921812018.jpg',
  'https://productimages.hepsiburada.net/l/37/280-413/10554921844786.jpg',
  'https://productimages.hepsiburada.net/l/37/600-888/10554921877554.jpg',
];

const dotsPositions = [
  'bottom',
  'bottomStart',
  'bottomEnd',
  'top',
  'topStart',
  'topEnd',
  'left',
  'leftStart',
  'leftEnd',
  'right',
  'rightStart',
  'rightEnd',
];

const carouselAlign = ['horizontal', 'vertical'];

const showDotsItems = [true, false];

const App = () => {
  const [dotsPosition, setDotsPosition] = useState('bottom');
  const [align, setAlign] = useState('horizontal');
  const [showDots, setShowDots] = useState(true);

  const renderDotsPositionButtons = () => {
    const buttons = [];

    dotsPositions.map((item) =>
      buttons.push(
        <Button onClick={() => setDotsPosition(item)} selected={dotsPosition === item}>
          {item}
        </Button>,
      ),
    );
    return buttons;
  };

  const renderCarouselAlignButtons = () => {
    const buttons = [];

    carouselAlign.map((item) =>
      buttons.push(
        <Button onClick={() => setAlign(item)} selected={align === item}>
          {item}
        </Button>,
      ),
    );
    return buttons;
  };

  const renderShowDotsButtons = () => {
    const buttons = [];

    showDotsItems.map((item) =>
      buttons.push(
        <Button onClick={() => setShowDots(item)} selected={showDots === item}>
          {item + ''}
        </Button>,
      ),
    );
    return buttons;
  };

  return (
    <Container>
      <Wrapper>
        <Carousel
          images={tempImages}
          dotsPosition={dotsPosition}
          align={align}
          showDots={showDots}
        />
      </Wrapper>
      <Settings>
        <h2>Carosel Align</h2>
        {renderCarouselAlignButtons()}
        <h2>Show Dots</h2>
        {renderShowDotsButtons()}
        <h2>Dots Position</h2>
        {renderDotsPositionButtons()}
      </Settings>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Settings = styled.div`
  flex: 1;
  padding: 0 20px;
`;
const Button = styled.button`
  min-width: 20px;
  margin: 2px 5px;
  ${({ selected }) =>
    selected &&
    css`
      background: greenyellow;
    `};
  outline: none;
`;
const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid red;
`;

export default App;
