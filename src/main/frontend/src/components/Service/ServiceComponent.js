// import React, { useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import "../../assets/css/Service.css";
// import TitleComponent from "../Main/TitleComponent";
// import path from "../../../public";

// const BorderColor = () => {
//   // 기본 색상 코드 배열
//   const colors = [
//     "#FF0000", // Red
//     "#00FF00", // Green
//     "#0000FF", // Blue
//     "#FFFF00", // Yellow
//     "#00FFFF", // Cyan
//     "#FF00FF", // Magenta
//     "#808080", // Gray
//     "#FFA500", // Orange
//     "#800080", // Purple
//     "#FFC0CB"  // Pink
//   ];

//   return (
//     <div id="border-color">
//       <div>테두리 색상</div>
//       <div id="colors">
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             className="color-chips"
//             style={{ backgroundColor: color }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const BorderTickness = () => {
//   return (
//     <div id="border-thickness">
//       <div>테두리 두께</div>
//       <input id="input-thickness" type="number" min={1} max={15} />
//     </div>
//   );
// };

// const Label = () => {
//   return <div></div>;
// };

// const ExportAs = () => {
//   return <div></div>;
// };

// const SettingBar = () => {
//   return (
//     <div id="setting-bar">
//       <BorderColor />
//       <BorderTickness />
//       {/* 
//       <Label />
//       <ExportAs /> */}
//     </div>
//   );
// };

// function ServiceComponent() {
// 	const location = useLocation();
// 	const fileName = location.state?.fileName;
	
// 	console.log(fileName);
// 	const imageUrl = path + `${fileName}`;
// 	console.log(imageUrl);

	
// 	const Image = () => {
// 		return (
// 			<img id="img" src={imageUrl}></img>
// 		);
// 	}

//   return (
//     <div id="service-component">
//       <TitleComponent />
//       <div id="content">
//         <input
//           id="filename"
//           type="text"
//           placeholder="이미지 파일명"
//           required
//           maxLength={20}
//         />
//         <div id="canvas-container">
//           <div id="canvas">
// 			<Image />
//           </div>
//           <SettingBar />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceComponent;
