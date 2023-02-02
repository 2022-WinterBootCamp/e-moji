# **IGE-MOJI PROJECT** 
### team E(moji)
--------

## ABOUT
 >원하는 이모지를 **선택**, 얼굴 사진을 **업로드**하고 AI가 얼굴 표정을 **분석**하여
 >선택한 이모지에 맞는 얼굴 **표정**을 사진에 **붙여넣어주는** 서비스
<p align="center">
<img width="49%" alt="스크린샷 2023-02-03 오전 12 13 15" src="https://user-images.githubusercontent.com/121562023/216372047-a2112514-5ded-4c64-a070-c6a314a8ff20.png"><img width="48%" alt="스크린샷 2023-02-03 오전 12 14 00" src="https://user-images.githubusercontent.com/121562023/216372543-caa878d8-4a62-4e85-9cea-3b520bf39f9a.png">

</p>

<br></br>
<br></br>

## System Architecture

<img width="1200" alt="스크린샷 2023-02-01 오후 1 39 00" src="https://user-images.githubusercontent.com/121562023/216060082-0852cd9a-abbb-4dc6-80c1-31f0f4652fa4.png">

`Mainserver(Django)` 와 `AI-server(Flask)` 구별 기대효과
- 보편적으로 한개의 Framework 로 여러개의 서버를 구축하는 경우와 달리 한개의 서버가 다운 됐을 때 독립적으로 구동할 수 있으며 영향을 비교적 덜 받는다.

<br></br>

## Features
 - Main Feature : 사용자가 업로드한 이미지속 사람의 표정을 AI가 분석하여 이모지를 생성
 - Additional Feature : 생성한 이모지를 공유



<div align=left><h1>📚 STACKS</h1></div>



## 🌵 **Tech Stack**
|Dev-Ops|<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=black"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"> <img src="https://img.shields.io/badge/S3%20Bucket-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon#20RDS&logoColor=black"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=black"> |
|----------|:-------------:|
|__Frontend__| <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=black"> <img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=black"> |
|__Backend__| <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=black"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black"> <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=RabbitMQ&logoColor=black"> <img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=Elasticsearch&logoColor=black"> <img src="https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=Kibana&logoColor=black"> <img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=Celery&logoColor=black"> <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=black"> |
|__DB__| <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black"> |
|__AI__| <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=black"> <img src="https://img.shields.io/badge/YOLOv5-00FFFF?style=for-the-badge&logo=YOLO&logoColor=black"> <img src="https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&logoColor=black"> |
|__Monitoring__| <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=black"> <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=black"> <img src="https://img.shields.io/badge/cAdvisor-2496ED?style=for-the-badge&logo=cAdvisor&logoColor=white"> |
|__Others__| <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=black"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=black"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=black"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=black"> |



  
<br></br>
<br></br>



## ERD 

<img width="728" alt="ERD" src="https://user-images.githubusercontent.com/121562023/216205865-56d7a7e6-6f63-40ff-816a-825374ac4eb9.png">




## Backend API
<img width="1438" alt="스크린샷 2023-02-01 오후 5 02 28" src="https://user-images.githubusercontent.com/121562023/216236771-40ac9723-11f1-4fbb-ad0e-dbce8f7b9b85.png">



### **users api**

- ***api/v1/users/***
    - `GET` : 아이디 중복 확인
    - `POST` : 회원가입
<br></br>
- ***api/v1/users/auth***
    - `GET` : 토큰 인증 요청
    - `POST` : 로그인
  <br></br>
  ```
  Bcrypt : 데이터베이스에 유저의 정보를 저장할 때, 비밀번호와 같이 암호화가 필요한 데이터를 쉽게 다룰 수 있도록 해주는 password hashing 라이브러리다.
  ```
- ***api/v1/users/mypage/?case=${type}*** <br></br>
  - `GET` : 마이페이지 데이터 조회 <br></br>
    > case1 : 내가 했던 이모지<br>case2 : 내가 만든 이모지

### **faces api**
- ***/api/v1/faces/***
    
    - `POST` : 얼굴 사진 업로드
    - `GET` : 얼굴 사진 AI 결과


### **emojis api**
- ***/api/v1/emojis/***

    - `POST` : 사용자의 이모지 추가

- ***/api/v1/emojis/top3***

    - `GET` : 랭킹 조회


## Monitoring

<img width="1405" alt="스크린샷 2023-01-26 오후 2 41 27" src="https://user-images.githubusercontent.com/121562023/216264603-fa949b72-a62d-4f09-8a44-733572aa8aba.png">

api요청과 그에 대한 결과에 대한 promethues을 통해 Metric 데이터를 수집하고 grafana를 통해 시각화


