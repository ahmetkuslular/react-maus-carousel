import React from 'react';
import styled, { css } from 'styled-components';

const Dots = ({ position, count = 4, activeDot = 0 }) => {
  const renderDots = () => {
    let dots = [];
    for (let i = 0; i < count; i++) {
      const isActive = i === activeDot;
      dots.push(<Dot isActive={isActive} />);
    }
    return dots;
  };
  return (
    <Container position={position}>
      <DotsWrapper count={count} position={position}>
        {renderDots()}
      </DotsWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  ${({ position }) => getDotsPosition(position)};
  ${({ position }) => getDotsPositionStartEnd(position)};
`;

const DotsWrapper = styled.ul`
  padding: 0;
  display: grid;
  margin: 20px;

  align-items: center;
  ${({ position, count }) => getDotsAlign(position, count)};
      list-style: none;
`;

const Dot = styled.li`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: darkgray;
  transition: opacity .6s ease;
  z-index: 99;
  opacity: 0.5;

  ${({ isActive }) =>
    isActive &&
    css`
      background: red;
      opacity: 1;
    `};
`;

const LineDot = styled.li`
  width: 12px;
  height: 2px;
  border-radius: 1.5px;
  background-color: #cccccc;
  transition: width,height .6s ease;
  z-index: 99;
  ${({ isActive }) =>
  isActive &&
  css`
      width: 24px;
      height: 3px;
      background: red;
    `};
`

const getDotsPosition = (position) => {
  switch (position) {
    case 'top':
    case 'topStart':
    case 'topEnd':
      return css`
        top: 0;
        width: 100%;
        justify-content: center;
      `;
    case 'bottom':
    case 'bottomStart':
    case 'bottomEnd':
      return css`
        bottom: 0;
        width: 100%;
        justify-content: center;
      `;
    case 'left':
    case 'leftStart':
    case 'leftEnd':
      return css`
        left: 0;
        height: 100%;
        align-items: center;
      `;
    case 'right':
    case 'rightStart':
    case 'rightEnd':
      return css`
        right: 0;
        height: 100%;
        align-items: center;
      `;
  }
  return css``;
};
const getDotsPositionStartEnd = (position) => {
  switch (position) {
    case 'topStart':
    case 'bottomStart':
      return css`
        justify-content: flex-start;
      `;
    case 'topEnd':
    case 'bottomEnd':
      return css`
        justify-content: flex-end;
      `;
    case 'leftStart':
    case 'rightStart':
      return css`
        align-items: flex-start;
      `;
    case 'leftEnd':
    case 'rightEnd':
      return css`
        align-items: flex-end;
      `;
  }
  return css``;
};

const getDotsAlign = (position, count) => {
  switch (position) {
    case 'top':
    case 'topStart':
    case 'topEnd':
    case 'bottom':
    case 'bottomStart':
    case 'bottomEnd':
      return css`
        grid-template-columns: repeat(${count}, 10px);
        column-gap: 10px;
      `;
    case 'left':
    case 'leftStart':
    case 'leftEnd':
    case 'right':
    case 'rightStart':
    case 'rightEnd':
      return css`
        grid-template-rows: repeat(${count}, 10px);
        row-gap: 10px;
      `;
  }
  return css`
    grid-template-columns: repeat(${count}, 10px);
    column-gap: 10px;
  `;
};

export default Dots;
