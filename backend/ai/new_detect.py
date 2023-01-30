from fer import FER
from utils import emotions
import cv2
import numpy as np
import os
from PIL import Image
import urllib.request

def ai_detect(url):

    # 다운받을 이미지 url
    url = "https://lotofsense.com/wp-content/uploads/2022/09/tileburnedin.jpg"

    url_to_image(url)
    Image.open(url)
    
    emotion_detector = FER(mtcnn=True)
    test_img = cv2.imread(url)
    # analysis = emotion_detector.detect_emotions(test_img)

    dominant_emotion, emotion_score = emotion_detector.top_emotion(test_img)

    result = emotions(dominant_emotion)
    
    return result

def url_to_image(url):
    resp = urllib.request.urlopen(url)
    image = np.asarray(bytearray(resp.read()), dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)

    return image