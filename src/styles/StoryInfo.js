import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  gap: 22px;
  background: #242731;
  box-shadow: 0px 8px 28px rgba(48, 48, 49, 0.1);
  border-radius: 8px;
  flex: none;
  order: ${(props) => props.order};
  flex-grow: 1;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;

  background: ${(props) => props.background};
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Number = styled.div`
  font-size: 44px;
  line-height: 48px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 400;
`;

const Subtext = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #a2a4a8;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-weight: 500;
`;

export { Container, Info, Icon, Text, Number, Subtext };
