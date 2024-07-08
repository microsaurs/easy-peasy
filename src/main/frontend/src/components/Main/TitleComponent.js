import React from "react";
import "../../assets/css/Title.css";

import logo from "../../assets/images/logo.png";

// Title 컴포넌트
const TitleComponent = () => (
	<div id="title">
	  <img id="logo" src={logo} alt="Logo" />
	  <div>이지피지</div>
	  <div>Easy Peasy</div>
	</div>
  );

export default TitleComponent;
