import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 18px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
    font-size: 1.5rem;
    color: var(--title-color);
    font-weight: bold;
    opacity: 0.85;
    margin-bottom: 0;
    text-align: center;
`;

const Content = styled.p`
    font-size: 0.9rem;
    line-height: 1.75;
    opacity: 0.75;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
`;

const SubContent = styled.p`
    font-size: 0.9rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;
const ContactButton = styled.div`
  width: 10.75rem;
  border: 4px solid #efddde;
  padding: 2.188rem 0;
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper data-aos="fade-up">
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
          <Title>참석자</Title>
      </Divider>
      <Content data-aos="fade-up">
        참석자와 인원을 입력해주세요.
      </Content>

      <ButtonWrap>
        <ContactButton data-aos="fade-up"     onClick={() => {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfpoFwRcXBucKPqGQGiqcA7-UuJTGuIPen7FuD3_BNL-ouNqQ/viewform?usp=dialog";
        }}
        >
          <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#829fe0"
          />
          <br />
          <SubContent>참석자 입력</SubContent>
        </ContactButton>
      </ButtonWrap>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
