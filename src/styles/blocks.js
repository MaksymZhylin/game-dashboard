import styled from 'styled-components';

const LeftSidebarStyle = styled.div`
  min-width: 84px;
  height: 100%;
  background: #242731;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
`;

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 48px 16px 36px;
  gap: 12px;
`;

export { LeftSidebarStyle, HeaderStyle };
