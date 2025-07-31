import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 20px;
  width: 80%;
  margin: 0 auto;
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
      font-size: 1.0rem;
      line-height: 1.75;
      opacity: 0.75;
      margin-top: 30px;
      margin-bottom: 16px;
      width: 100%;
      text-align: center;
`;

const Date = styled.p`
    font-size: 1.0rem;
    line-height: 1.75;
    opacity: 0.85;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1753844704745",
    "key" : "658tijjwjku",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper data-aos="fade-up">
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>오시는 길</Title>
      </Divider>
      <Map
        id="daumRoughmapContainer1753844704745"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        부산 영도구 절영로 355 3층
        <br />
        영도 목장원 오채담
        <br />
      </Content>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>일시</Title>
      </Divider>
      <Date>
        2025. 8. 23(토) 17:00 ~
      </Date>
    </Wrapper>
  );
};

export default Location;
