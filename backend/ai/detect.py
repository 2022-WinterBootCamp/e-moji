"""Run inference with a YOLOv5 model on images, videos, directories, streams

Usage:
    $ python path/to/detect.py --source path/to/img.jpg --weights yolov5s.pt --img 640
"""

# 여기에 필요한 모델 코드 넣어주시면 됩니다.

from deepface import DeepFace
from fer import FER
import cv2

def detect(img):
    
    emotion_detector = FER(mtcnn=True)
    test_img = cv2.imread(img)
    analysis = emotion_detector.detect_emotions(test_img)

    return analysis

