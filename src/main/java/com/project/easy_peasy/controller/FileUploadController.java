package com.project.easy_peasy.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class FileUploadController {
    private static final Logger logger = Logger.getLogger(FileUploadController.class.getName());

    @PostMapping("/upload")
    public Map<String, String> uploadFile(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();
        try {
            // 파일을 저장할 절대 경로를 정의합니다.
			// 상대경로로 입력하면 못찾음 ㅠㅠ 구글링으로도 해결법 찾지 못하다 . 
            String uploadDir = "/Users/eugene/sideproject/easy-peasy/src/main/frontend/public/";
            File uploadDirFile = new File(uploadDir);
            if (!uploadDirFile.exists()) {
                // 디렉토리가 존재하지 않으면 생성합니다.
                boolean created = uploadDirFile.mkdirs();
                if (!created) {
                    throw new IOException("업로드 디렉토리 생성에 실패했습니다.");
                }
            }

            // 업로드된 파일의 이름을 가져옵니다.
            String fileName = file.getOriginalFilename();
            if (fileName == null || fileName.isEmpty()) {
                throw new IOException("파일 이름이 누락되었습니다.");
            }

            // 파일을 저장할 위치를 설정합니다.
            File destinationFile = new File(uploadDir + File.separator + fileName);
            file.transferTo(destinationFile);


            response.put("fileName", fileName);
            return response;
        } catch (IOException e) {
            logger.severe("파일 업로드 중 오류가 발생했습니다: " + e.getMessage());
            e.printStackTrace();
            response.put("error", "파일 업로드 중 오류가 발생했습니다.");
            return response;
        }
    }
}
