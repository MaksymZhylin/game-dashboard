import styled from 'styled-components';

const Flex = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
  flex-grow: ${(props) => props.flexGrow};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  overflow-y: ${(props) => props.overflowY};
  overflow-x ${(props) => props.overflowX};
  display: flex;
  background: ${(props) => props.background};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  top: ${(props) => props.top};
`;

export default Flex;
