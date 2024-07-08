import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Main.css";


import step1 from '../../assets/images/step1.JPG';
import step2 from '../../assets/images/step2.JPG';
import step3 from '../../assets/images/step3.JPG';
import TitleComponent from "./TitleComponent";



// Step 데이터
const stepsData = [
  {
    step: "STEP 1",
    description: "상세기획이 필요한 \n 이미지/화면안을 \n 가져온다",
    image: step1
  },
  {
    step: "STEP 2",
    description: "영역 정의서가 필요한 \n 영역을 드래그하고, \n 쉽게 넘버링한다",
    image: step2
  },
  {
    step: "STEP 3",
    description: "벌써 완료! \n 이미지를 저장하고 \n 활용한다!",
    image: step3
  },
];

// Steps 컴포넌트
const Steps = () => (
  <div id="steps">
    {stepsData.map(({ step, description, image }, index) => (
      <div key={index} className="step">
        <div className="step-title">{step}</div>
        <img
          src={image}
          className="step-img"
        />
        <div className="step-desc">
          {description}
        </div>
      </div>
    ))}
  </div>
);

// MainComponent 컴포넌트
const MainComponent = () => {
  const navigate = useNavigate();

  const goToStart = () => {
    navigate("/file");
  };

  return (
    <div id="main-component">
      <TitleComponent />
      <div id="description">
        서비스기획자/PM을 위한 <span>세상 쉬운</span> 상세계획서 작성 툴
      </div>
      <div id="btn-box">
        <button id="start-btn" onClick={goToStart}>
          시작하기
        </button>
      </div>
      <Steps />
    </div>
  );
};

export default MainComponent;
