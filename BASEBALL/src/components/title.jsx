import React from "react";
import styled from "styled-components";
import InvitationImage from "../assets/image1.jpg";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";

const Layout = styled.div`
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    padding-top: 48px;
`;


const TitleText = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--title-color, #333);
    margin-bottom: 16px;
    animation: fadein 2s;
`;

const SubTitle = styled.p`
    font-size: 1.32rem;
    font-weight: bold;
    opacity: 0.8;
    margin-bottom: 4032;
`;

const Title = () => {
  return (
    <Layout>
        <TitleText>INVITATION</TitleText>
        <SubTitle>
            영도구리틀야구단
            <br />
            납회식에 초대합니다.
        </SubTitle>
    </Layout>
  );
};

export default Title;
