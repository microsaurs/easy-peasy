import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/FileImport.css";
import TitleComponent from "../Main/TitleComponent";

const FileImportComponent = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const dragFileRef = useRef(null);

  const onUpload = async (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      
      try {
        const response = await fetch("http://localhost:8080/upload", {
          method: "POST",
          body: formData
        });

        if (!response.ok) {
          throw new Error("파일 업로드 실패");
        }

        const data = await response.json();
        const { fileName } = data;

        // 페이지 이동 시 파일 이름을 state로 전달
        navigate("/service", { state: { fileName } });
      } catch (error) {
        console.error("파일 업로드 중 오류 발생:", error);
      }
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    onUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (dragFileRef.current) {
      dragFileRef.current.classList.add("dragging");
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (dragFileRef.current) {
      dragFileRef.current.classList.remove("dragging");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (dragFileRef.current) {
      dragFileRef.current.classList.remove("dragging");
    }
    const file = e.dataTransfer.files[0];
    onUpload(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div id="file-import-component">
      <TitleComponent />
      <div id="content">
        <div id="open-finder" onClick={handleClick}>
          <div>👀 이미지 불러오기</div>
          <div>jpg, png, ~ 파일을 불러오세요</div>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileSelect}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
        <div
          id="drag-file"
          ref={dragFileRef}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          파일을 여기로 끌어오시는 것도 가능해요!
        </div>
      </div>
    </div>
  );
};

export default FileImportComponent;
