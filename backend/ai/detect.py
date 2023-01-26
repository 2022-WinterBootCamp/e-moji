"""Run inference with a YOLOv5 model on images, videos, directories, streams

Usage:
    $ python path/to/detect.py --source path/to/img.jpg --weights yolov5s.pt --img 640
"""

# 여기에 필요한 모델 코드 넣어주시면 됩니다.

from deepface import DeepFace
from fer import FER
import cv2
import urllib.request
import numpy as np

def detect(img):
    
    emotion_detector = FER(mtcnn=True)
    test_img = cv2.imread(img)
    analysis = emotion_detector.detect_emotions(test_img)

    return analysis

import os
import time
from PIL import Image
# 다운받을 이미지 url
url = "https://lotofsense.com/wp-content/uploads/2022/09/tileburnedin.jpg"

# time check
start = time.time()

# curl 요청
os.system("curl " + url + " > savesavesavesave.jpg")

# 이미지 다운로드 시간 체크
print(time.time() - start)

# 저장 된 이미지 확인
img = Image.open("savesavesavesave.jpg")
