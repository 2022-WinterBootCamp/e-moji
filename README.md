[English](./README.md) | [한국어](./README_KR.md)
# IGE-MOJI?

> An AI-powered service that **analyzes facial expressions** and applies the detected expression to a selected **emoji template**.

<br></br>

## Main Flow

![team_e_IGEMOJI_Flow](https://user-images.githubusercontent.com/121562023/216638353-a20a1582-b256-42eb-bb41-6c6ae7be8e1e.jpg)

- **Main Feature**
  - Select an emoji template.
  - Analyze the facial expression in an uploaded image using AI.
  - Generate a result by applying the detected expression to the selected emoji template.

- **Additional Features**
  - Create and delete custom emoji templates.
  - Share emoji templates with other users.

## Features

- ***Main Page***

<img src="https://user-images.githubusercontent.com/121562023/216717832-619db5a1-4ccc-4d78-a738-00027302e75e.gif" width="65%">

- ***Login***

<img src="https://user-images.githubusercontent.com/121562023/216719934-5baa2d26-f1f8-4b98-bcf9-ad90eac3b315.gif" width="65%">

- ***Emoji Select & Use***

<img src="https://user-images.githubusercontent.com/121562023/216720145-5e9ce14e-88f3-46f3-a5b5-f53a80df756c.gif" width="65%">

- ***Emoji Create***

<img src="https://user-images.githubusercontent.com/121562023/216720259-7d089a2b-81b2-4948-a12c-5649bf60cab5.gif" width="65%">

- ***Top 3 Ranking***

<img src="https://user-images.githubusercontent.com/121562023/216720434-69a55475-a946-4ad3-be0f-7cfb9d1b42b7.gif" width="65%">

## System Architecture

<img width="1200" alt="System Architecture" src="https://user-images.githubusercontent.com/121562023/216060082-0852cd9a-abbb-4dc6-80c1-31f0f4652fa4.png">

### Frontend

- **MUI**
  - React UI library based on interactive components.
  - Enables fast and efficient development of high-quality user interfaces.
  - Provides strong compatibility with React.

- **Redux**
  - State management library for JavaScript applications.
  - Simplifies application state management.
  - Makes it easier to inspect and manage website state.

<br></br>

### Backend

- **RabbitMQ**
  - Open-source message broker based on AMQP (Advanced Message Queuing Protocol).
  - Supports flexible routing rules.
  - Supports message expiration and delayed message delivery.
  - Simplifies communication between producers and consumers.

- **Celery**
  - Distributed asynchronous task queue based on message passing.
  - Supports scalable background task processing.
  - Can be customized with serializers, compression schemes, logging, schedulers, consumers, and producers.

- **Separated Main Server and AI Server**
  - **Main Server (Django)**
    - Supports multiple applications within a single project.
    - Provides a built-in ORM.
  - **AI Server (Flask)**
    - Lightweight framework suitable for AI inference services.
  - The two frameworks are separated so each can be used according to its strengths.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **DevOps** | <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=black"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"> <img src="https://img.shields.io/badge/S3%20Bucket-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=black"> |
| **Frontend** | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=black"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"> |
| **Backend** | <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=black"> <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=RabbitMQ&logoColor=black"> <img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=Celery&logoColor=black"> <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=black"> |
| **Database** | <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black"> <img src="https://img.shields.io/badge/AmazonRDS-527FFF?style=for-the-badge&logo=AmazonRDS&logoColor=black"> |
| **AI** | <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=OpenCV&logoColor=black"> <img src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=black"> <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=black"> <img src="https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&logoColor=black"> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"> |
| **Monitoring** | <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=black"> <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=black"> |
| **Others** | <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=black"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=black"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=black"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=black"> |

<br></br>

## Backend API

<img width="749" alt="Backend API" src="https://user-images.githubusercontent.com/121562023/216704040-9b0dfc04-95ac-4dbe-bad7-f37add243f29.png">

### Users API

- `api/v1/users/`
  - `GET`: Check whether a user ID already exists.
  - `POST`: Create a new user account.

- `api/v1/users/auth`
  - `POST`: Log in.

- `api/v1/users/mypage/{case}`
  - `GET`: Retrieve user-specific data.
    - `case1`: Emojis used by the user.
    - `case2`: Emojis created by the user.

### Faces API

- `/api/v1/faces/tasks/`
  - `POST`: Submit an uploaded image for asynchronous facial-expression analysis.

- `/api/v1/faces/tasks/{task_id}`
  - `GET`: Check whether the analysis task is complete.
  - The frontend polls this endpoint using the task ID.

- `/api/v1/faces/ranking`
  - `GET`: Retrieve emoji rankings.

### Emojis API

- `/api/v1/emojis/`
  - `POST`: Add a user-created emoji.
  - `GET`: Retrieve emoji information by ID.

- `/api/v1/emojis/pages/{page_number}`
  - `GET`: Retrieve paginated emoji data for the main page.

## AI

### OpenCV

<img width="613" alt="OpenCV Face Detection" src="https://user-images.githubusercontent.com/121562023/216668440-c19afb08-a2f6-4f76-938b-de46b09b423f.png">

<img width="613" alt="AI Emotion Recognition" src="https://user-images.githubusercontent.com/121562023/216668601-c75c0bf1-1c5d-4e80-9236-3e2389bc2b64.png">

- Combines the Python FER library, deep learning, and OpenCV to detect faces and recognize emotions from images.
- Uses either a Haar Cascade classifier or MTCNN (Multi-task Cascaded Convolutional Networks) to obtain emotion scores.
- Extracts the dominant emotion and loads an emoji that corresponds to the detected facial expression.

### Rembg

<img src="https://user-images.githubusercontent.com/121562023/216721967-ab8b8826-b8a2-4b00-a7b0-e8624f3ed03f.png" width="70%">

- Uses image segmentation to separate the subject from the background and improve visual clarity.

<br></br>

## Dataset

<img width="1193" alt="Dataset" src="https://user-images.githubusercontent.com/121562023/216587882-c3961bc4-4a23-4dcb-af5b-37839305a9aa.png">

## JWT

- **Library**
  - `djangorestframework-jwt`

- **JWT Settings**
  - Configures JWT default settings.

<img width="200" alt="JWT Settings" src="https://user-images.githubusercontent.com/121562023/216395399-26160577-790d-493e-93c5-18325845f6d9.png">

- **Bcrypt**
  - Password-hashing library used to securely store sensitive user information such as passwords.

- **Redux**
  - Stores the access token on the client side.

## Monitoring

### Prometheus

- Collects metrics related to API requests and responses.
- Collects metric data from the corresponding node.

<img width="1000" alt="Prometheus Metrics" src="https://user-images.githubusercontent.com/121562023/216610551-9500844b-6c94-40a1-8ce1-2667cdbd454d.png">

### Grafana

- Visualizes metrics collected by Prometheus.

<img width="1200" alt="Grafana Dashboard" src="https://user-images.githubusercontent.com/121562023/216264603-fa949b72-a62d-4f09-8a44-733572aa8aba.png">

# Members of Team-E

| Name | Development Area | Profile |
|---|---|---|
| Jeongwoo Lee | Frontend, Backend, DevOps | https://github.com/raylee0519 |
| Gyeongeun Park | Frontend, DevOps | https://github.com/devGEP |
| Yerin Jeong | Frontend | https://github.com/Jungyell |
| Daehee Kim | Backend | https://github.com/Dan2er |
| Soyoon Park | Backend, DevOps | https://github.com/velyvelylovely |
| Hyunjin Jo | AI | https://github.com/chojinie/ |
