# **IGE-MOJI PROJECT** 
### team E(moji)
--------------------

<br></br>
## ABOUT
 >원하는 이모지를 **선택**, 얼굴 사진을 **업로드**하고 AI가 얼굴 표정을 **분석**하여 선택한 이모지에 맞는 얼굴 **표정**을 사진에 **붙여넣어주는** 서비스

<br></br>
<br></br>

## System Architecture

<img width="1200" alt="스크린샷 2023-02-01 오후 1 39 00" src="https://user-images.githubusercontent.com/121562023/216060082-0852cd9a-abbb-4dc6-80c1-31f0f4652fa4.png">

`Mainserver(Django)` 와 `AI-server(Flask)` 구별 기대효과
- 보편적으로 한개의 Framework 로 여러개의 서버를 구축하는 경우와 달리 한개의 서버가 다운 됐을 때 독립적으로 구동할 수 있으며 영향을 비교적 덜 받는다.


<div align=left><h1>📚 STACKS</h1></div>



|Frontend|Backend|AI|DevOps|Etc|
|:------:|:---:|:---:|:---:|:---:|
|![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)<br>![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)<br>![MUI](https://img.shields.io/badge/MUI-007FFF?&style=for-the-badge&logo=MUI&logoColor=white)</br>|![Flask](https://img.shields.io/badge/django-092E20.svg?style=for-the-badge&logo=django&logoColor=white)<br>![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Celery](https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=Celery&logoColor=white)<br>![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600.svg?style=for-the-badge&logo=RabbitMQ&logoColor=white)<br>![Gunicorn](https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=white)<br>![Redis](https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white)<br>![AmazonRDS](https://img.shields.io/badge/AmazonRDS-527FFF.svg?style=for-the-badge&logo=AmazonRDS&logoColor=white)</br>|![Tensorflow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white)</br>![Flask](https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=Flask&logoColor=white)</br>|![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)<br>![AmazonEC2](https://img.shields.io/badge/AmazonEC2-FF9900.svg?style=for-the-badge&logo=AmazonEC2&logoColor=white)<br>![Docker](https://img.shields.io/badge/docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white)<br>![AmazonS3](https://img.shields.io/badge/AmazonS3-569A31.svg?style=for-the-badge&logo=AmazonS3&logoColor=white)|![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white)<br>![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)![GoogleColab](https://img.shields.io/badge/GoogleColab-F9AB00?style=for-the-badge&logo=GoogleColab&logoColor=white) 



  
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


