import styled from 'styled-components';

const Form = styled.form`
  width: 500px;
  height: 544px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 48px;
  margin-top: 100px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

const MainText = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

const Subtext = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #9496a6;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #242731;
  padding: 10px 16px;
  border: 1px solid #3d4250;
  border-radius: 8px;
  color: #7d7f8e;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
`;

const Submit = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background: #8941ff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

const FooterText = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FooterLink = styled.a`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #78b4ed;
  flex: none;
  order: 1;
  flex-grow: 0;
  text-decoration: none;
`;

export {
  Form,
  Text,
  MainText,
  Subtext,
  InputContainer,
  Input,
  Submit,
  Footer,
  FooterText,
  FooterLink,
};
