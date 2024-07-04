import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Main.css";
import logo from "../../assets/images/logo.png";

const Title = () => {
  return (
    <div id="title">
      <img id="logo" src={logo} />
      <div>이지피지</div>
      <div>Easy Peasy</div>
    </div>
  );
};

const stepsData = [
  {
    step: "STEP 1",
    description: "상세기획이 필요한 \n 이미지/화면안을 \n 가져온다",
  },
  {
    step: "STEP 2",
    description: "영역 정의서가 필요한 \n 영역을 드래그하고, \n 쉽게 넘버링한다",
  },
  {
    step: "STEP 3",
    description: "벌써 완료! \n 이미지를 저장하고 \n 활용한다!",
  },
];

const Steps = () => {
  return (
    <div className="steps">
      {stepsData.map(({ step, description }, index) => (
        <div key={index} className="step">
          <div className="step-title">{step}</div>
          <img
            src={require(`../../assets/images/step${index + 1}.JPG`)}
            className="step-image"
          />
          <div className="step-description">
            {description.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const MainComponent = () => {
  const navigate = useNavigate();

  const goToStart = () => {
    navigate("/file");
  };

  return (
    <div id="main-component">
      <Title />
      <div id="description">
        서비스기획자/PM을 위한 <span>세상 쉬운</span> 상세계획서 작성 툴
      </div>
      <div id="btn-box">
        <button onClick={goToStart}>
          시작하기
        </button>
      </div>
      <Steps />
    </div>
  );
};

export default MainComponent;
