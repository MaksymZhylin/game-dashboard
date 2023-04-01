import styled from 'styled-components';

const Container = styled.table`
  display: relative;
  border-collapse: collapse;
  text-align: center;
  overflow: hidden;
`;

const Head = styled.thead``;

const HeadTR = styled.tr``;

const STH = styled.th`
  font-weight: normal;
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  line-height: 12px;
  font-weight: 500;
  padding-bottom: 8px;
`;

const Body = styled.tbody``;

const BodyTR = styled.tr`
  :hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

const STD = styled.td`
  padding: 16px 32px;
  color: #ffffff;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
`;

export { Container, Body, BodyTR, STD, STH, Head, HeadTR };
