from deepface import DeepFace
from fer import FER
import cv2

def ai_detect(img):
    
    emotion_detector = FER(mtcnn=True)
    test_img = cv2.imread(img)
    analysis = emotion_detector.detect_emotions(test_img)

    return analysis