import React from "react";
import styled from "styled-components";
import { Divider } from "antd";

const Wrapper = styled.div`
    padding-top: 42px;
    margin: 0 auto;
    width: 70%;
`;

const Title = styled.p`
    font-size: 1rem;
    color: var(--title-color);
    font-weight: bold;
    opacity: 0.85;
    margin-bottom: 0;
    text-align: center;
`;

const Content = styled.p`
    font-size: 0.72rem;
    line-height: 1.75;
    opacity: 0.75;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
`;

const PlayerInfo = styled.p`
    font-size: 0.875rem;
    line-height: 1.75;
    opacity: 0.85;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
`;

const Greeting = () => {
  return (
      <Wrapper data-aos="fade-up">
          <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
              <Title>모시는 글</Title>
          </Divider>
          <Content>
              안녕하세요,
              <br/>
              사랑하는 영도구리틀야구단 가족 여러분!
              <br/>
              <br/>
              다사다난 했던 선수들이 디딤돌인
              <br/>
              영도구리틀야구단을 떠나
              <br/>
              더 험난한 무대로 여정을 떠나려고 합니다.
              <br/>
              그 동안의 성과를 함께 나누며
              <br/>
              서로의 노고를 격려하는
              <br/>
              시간을 가질 예정입니다.
              <br/>
              많은 분들이 참석하셔서
              <br/>
              자리를 빛내주시길 바랍니다.
              <br/>
              <br/>
              우리 영도구리틀야구단 선수들과 함께
              <br/>
              꿈과 열정을 나누는
              <br/>
              뜻깊은 시간이 되기를 기대합니다.
              <br/>
              <br/>
              감사합니다!
          </Content>
          <PlayerInfo data-aos="fade-up">
              영도구 진민기 (대신중학교)
              <br/>
              영도구 황지훈 (원동중학교)
              <br/>
              영도구 김건우 (센텀중학교)
              <br/>
              영도구 김지성 (센텀중학교)
              <br/>
              영도구 조형찬 (대신중학교)
              <br/>
              영도구 유정훈 (대신중학교)
          </PlayerInfo>
      </Wrapper>
  );
};

export default Greeting;
