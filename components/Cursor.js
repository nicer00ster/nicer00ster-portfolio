import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const CursorSpan = styled.span`
  font-weight: 100;
  color: palegreen;
  font-size: 1em;
  padding-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

const Cursor = ({ className }) => (
  <CursorSpan className={className}>█</CursorSpan>
);

export default Cursor;
