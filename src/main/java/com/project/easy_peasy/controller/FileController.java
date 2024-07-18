package com.project.easy_peasy.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class FileController {

    private static final Logger logger = Logger.getLogger(FileController.class.getName());

    @PostMapping("/upload")

    public Map<String, String> uploadFile(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();
        try {
            // 서버의 파일 저장 경로를 가져옵니다.

            //사용자 home 밑에 file 디렉토리 만들어서 저장됨
            //테스트시 참고
            String uploadDir = System.getProperty("user.home") + "/files/";
            File uploadDirFile = new File(uploadDir);
            if (!uploadDirFile.exists()) {
                // 업로드 디렉토리가 존재하지 않으면 생성합니다.
                boolean created = uploadDirFile.mkdirs();
                if (!created) {
                    throw new IOException("업로드 디렉토리 생성에 실패했습니다.");
                }
            }

            // 업로드된 파일의 원래 파일 이름을 가져옵니다.
            String fileName = file.getOriginalFilename();
            if (fileName == null || fileName.isEmpty()) {
                throw new IOException("파일 이름이 누락되었습니다.");
            }

            // 파일을 서버의 업로드 디렉토리에 저장합니다.
            File destinationFile = new File(uploadDir + File.separator + fileName);
            file.transferTo(destinationFile);

            response.put("fileName", fileName);
            return response;
        } catch (IOException e) {
            // 파일 업로드 중 오류가 발생하면 로그를 남기고 에러 메시지를 반환합니다.
            logger.severe("파일 업로드 중 오류가 발생했습니다: " + e.getMessage());
            e.printStackTrace();
            response.put("error", "파일 업로드 중 오류가 발생했습니다.");
            return response;
        }
    }

    @CrossOrigin
    @GetMapping("/load")
    public ResponseEntity<?> loadFile(@RequestParam String fileName) {
        String path = System.getProperty("user.home") + "/files/"; // 이미지가 저장된 위치
        Resource resource = new FileSystemResource(path + fileName);
        return new ResponseEntity<>(resource, HttpStatus.OK);
    }

}
