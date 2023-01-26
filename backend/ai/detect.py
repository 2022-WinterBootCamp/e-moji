from deepface import DeepFace
from fer import FER
from utils import emotions
import cv2
import numpy as np
import os
from PIL import Image

def ai_detect(url):

    # 다운받을 이미지 url
    url = "https://lotofsense.com/wp-content/uploads/2022/09/tileburnedin.jpg"

    # curl 요청
    os.system("curl " + url + " > savesavesavesave.jpg")

    # 저장 된 이미지 확인
    img = Image.open("savesavesavesave.jpg")
    
    emotion_detector = FER(mtcnn=True)
    test_img = cv2.imread("savesavesavesave.jpg")
    # analysis = emotion_detector.detect_emotions(test_img)

    dominant_emotion, emotion_score = emotion_detector.top_emotion(test_img)

    result = emotions(dominant_emotion)
    
    return result