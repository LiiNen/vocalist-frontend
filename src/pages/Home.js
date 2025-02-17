import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import styled from 'styled-components';

// Core modules imports are same as usual
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import StyledLink from 'components/StyledLink';
import contentImage from 'images/microphone-2.png';
import contentImage1 from 'images/handshake.png';
import contentImage2 from 'images/tambourine.png';
import contentImage3 from 'images/mirror-ball.png';
import mockupLogo from 'images/mockup_logo2.png';
import mockup from 'images/mockup.png';
import logoWhite from 'images/logo_white.png';
import cover from 'images/cover.svg';
import logo from 'images/logo.svg';
import DownloadButton from 'components/Home/DownloadButton';

SwiperCore.use([Mousewheel, Pagination]);

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

const Container = styled.div`
  width: 100%;
  @media only screen and (min-width: 1180px) {
    width: 1180px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  gap: 20px;
  padding: 0 16px;
  width: 100%;
  @media only screen and (min-width: 800px) {
    justify-content: flex-start;
    font-size: 30px;
    text-align: left;
    margin: 0 auto;
    padding: 0 30px;
    gap: 30px;
  }
`;
const MainContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  gap: 20px;
  padding: 0 16px;
  width: 100%;
  @media only screen and (min-width: 800px) {
    font-size: 30px;
    text-align: left;
    margin: 0 auto;
    padding: 0 30px;
    gap: 30px;
  }
`;

const LogoContainer = styled.div`
  width: 250px;
  margin: 0 auto;
  @media only screen and (min-width: 800px) {
    width: 550px;
    margin: 0;
  }
`;

const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
  text-align: center;
  justify-content: space-around;
  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const CaseItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  @media only screen and (min-width: 800px) {
    width: 240px;
    flex-direction: column;
  }
`;

const PurpleButton = styled(Button)`
  color: white !important;
  background-color: #8b63ff !important;
  border: 0 !important;
  width: 160px !important;
  font-size: 14px !important;
  margin: 0 auto !important;
  padding: 5px !important;
  @media only screen and (min-width: 800px) {
    font-size: 18px !important;
    width: 220px !important;
    margin: 0 !important;
    padding: 10px !important;
  }
  &:hover {
    background-color: #7655d9 !important;
  }
`;

const Title = styled.div`
  font-size: 1.4em;
  font-weight: bold;
`;
const Content = styled.div`
  font-size: 0.9em;
  line-height: 150%;
`;
const Content2 = styled.div`
  font-size: 0.7em;
  width: 200px;
  height: 100%;
`;
const ImageContainer = styled.div`
  width: 100px;
  margin: 0 auto;

  @media only screen and (min-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 30px;
  }
`;

const Home = ({ isMobile }) => {
  return (
    <Background>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100vw',
          paddingTop: isMobile ? '48px' : '65px'
        }}
      >
        <SwiperSlide className="my-swiper-slide">
          <Container>
            <MainContainer className="text-container">
              <LogoContainer>
                <img src={cover} alt="logo" />
              </LogoContainer>
              <DownloadButton />
            </MainContainer>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container style={{ paddingBottom: '30px' }}>
            <MainContainer style={{ justifyContent: 'center', textAlign: 'center' }}>
              <CaseItem>
                <ImageContainer>
                  <img src={contentImage} alt="" />
                </ImageContainer>
              </CaseItem>
              <Title>듣기엔 좋은데 부르기엔 어려워</Title>
              <div className="flex column gap10">
                <Content>분명 들을 때는 따라 부를 수 있을 것 같았는데,</Content>
                <Content>
                  막상 불러보니 <b>내 음역대와 맞지 않아 부르기 어려웠던 적</b> 있으신가요?
                </Content>
              </div>
            </MainContainer>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <MainContainer style={{ justifyContent: 'center', textAlign: 'center' }}>
              <Title>함께 하는 노래방, 어떤 노래를 불러야 할까?</Title>
              <div className="flex column gap10">
                <Content>다른 사람들과 노래방을 갈 때, 어떤 노래를 불러야 할지 몰라서</Content>
                <Content>몰래 음악 스트리밍 사이트에서 검색해본 적도 있으신가요?</Content>
              </div>
              <CaseContainer>
                <CaseItem>
                  <ImageContainer>
                    <img src={contentImage1} alt="" />
                  </ImageContainer>
                  <div className="flex column">
                    <Content2>처음 만난 사람들과</Content2>
                    <Content2>노래방을 가야할 때</Content2>
                  </div>
                </CaseItem>
                <CaseItem>
                  <ImageContainer>
                    <img src={contentImage2} alt="" />
                  </ImageContainer>
                  <div className="flex column">
                    <Content2>회식 자리로 간 노래방</Content2>
                    <Content2>노래방을 가야할 때</Content2>
                  </div>
                </CaseItem>
                <CaseItem>
                  <ImageContainer>
                    <img src={contentImage3} alt="" />
                  </ImageContainer>
                  <div className="flex column">
                    <Content2>노래방에서</Content2>
                    <Content2>인싸가 되고 싶을 때</Content2>
                  </div>
                </CaseItem>
              </CaseContainer>
            </MainContainer>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container className="flex demo-container">
            <MainContainer2
              sytle={{
                flexGrow: 1,
                paddingTop: '20px',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Title style={{ fontSize: '1.8em', color: '#8b63ff' }}>블룸이 알려줄게요!</Title>
              <div className="flex column gap10">
                <Content>내 목소리에 딱 맞는 노래,</Content>
                <Content>내가 부르기 좋은 노래,</Content>
                <Content>이제 블룸이 알려드리겠습니다.</Content>
              </div>
              <div style={{ height: '20px' }} />
              <div className="flex column gap10">
                <Content>블룸에서 당신의 목소리를 꽃 피워보세요.</Content>
                <Content>Blooming Your Voice!</Content>
              </div>
              <StyledLink to="/demo">
                <PurpleButton variant="outlined">체험하기</PurpleButton>
              </StyledLink>
            </MainContainer2>
            <ImageContainer className="mockup-image" style={{ flexGrow: 1 }}>
              <img src={mockup} alt="" style={{ objectFit: 'contain' }} />
            </ImageContainer>
          </Container>
        </SwiperSlide>
      </Swiper>
    </Background>
  );
};

export default Home;
