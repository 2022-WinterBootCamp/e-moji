from fer import FER
import cv2
import numpy as np
import requests
from utils import upload_s3

from PIL import Image

def ai_emoji(url, emoji) :
    url = 'https://file.mk.co.kr/meet/neds/2022/06/image_readtop_2022_521870_16552521075075658.jpg'

    image_nparray = np.asarray(bytearray(requests.get(url).content), dtype=np.uint8)
    img = cv2.imdecode(image_nparray, cv2.IMREAD_COLOR)

    detector = FER(mtcnn=True) # MTCNN Facial Recognition

    result = detector.detect_emotions(img) # 이미지의 인물 디텍션, 감정 검출

    def convertTransparent(foregrnd_img): #아무거나 지정해주기(path) 그래야 Return 값나옴
        img = cv2.cvtColor(foregrnd_img, cv2.COLOR_RGB2RGBA)

        return img

    # 리스트 요소 별로 순차적으로 Dominant 감정 표시
    coordinate = []
    top_emotions = []
    emoticon_new_size = []
    src = []

    emoji = ['http://what-moji.s3.ap-northeast-2.amazonaws.com/9c1ba590-cfd7-4f4a-9814-4162958a6174.jpg', 'http://what-moji.s3.ap-northeast-2.amazonaws.com/bed587c5-3905-45a0-8f02-036cb89eeb00.jpg', 'http://what-moji.s3.ap-northeast-2.amazonaws.com/de1099e8-244d-478f-8140-7f0354877c6c.jpg', 'http://what-moji.s3.ap-northeast-2.amazonaws.com/b968b3f0-ca85-4dad-91f5-dac57e554a29.jpg', 'http://what-moji.s3.ap-northeast-2.amazonaws.com/3c4d738f-90a8-44f1-bf8a-abb2310ee377.jpg', 'http://what-moji.s3.ap-northeast-2.amazonaws.com/3146695e-8546-4e03-8dc4-8432dcb4c2fd.jpg', 'http://what-moji.s3.ap-northeast-2.amazonaws.com/5e7c6574-6a8b-4cc0-b235-eea65848a463.jpg']
    for i in range(len(result)):
        top_emotions = [max(e["emotions"], key = lambda key: e["emotions"][key]) for e in result]
        
        coordinate.append(result[i]["box"][:2])
        emoticon_new_size.append(result[i]["box"][2:])
        
        res = 0
        # 감정별로 다른 이모지를 Input으로 하는 부분
        if top_emotions[i] == 'neutral':
            res = emoji[0]
        elif top_emotions[i] == 'angry':
            res = emoji[1]
        elif top_emotions[i] == 'disgust':
            res = emoji[2]
        elif top_emotions[i] == 'fear':
            res = emoji[3]
        elif top_emotions[i] == 'happy':
            res = emoji[4]
        elif top_emotions[i] == 'sad':
            res = emoji[5]
        else :
            res = emoji[6] 
            
        f_image_nparray = np.asarray(bytearray(requests.get(res).content), dtype=np.uint8)
        foregrnd_img = cv2.imdecode(f_image_nparray, cv2.IMREAD_COLOR)
            
        src.append(foregrnd_img)
        print(foregrnd_img)

        fore_img = np.array(convertTransparent(foregrnd_img)) #경로 지정해도될듯
        fore_height, fore_width, fore_channels = fore_img.shape

        image_nparray = np.asarray(bytearray(requests.get(url).content), dtype=np.uint8)
        backgrnd_img = cv2.imdecode(image_nparray, cv2.IMREAD_COLOR)
        backgrnd_height, backgrnd_width, backgrnd_channels = backgrnd_img.shape
        
        
        if backgrnd_channels < 4:   # b_c : 3
            backgrnd_img = cv2.cvtColor(backgrnd_img, cv2.COLOR_BGR2BGRA)
            TARGET_PIXEL_AREA = (backgrnd_height * backgrnd_width) * 0.02 # 이모티콘이 붙여질 타겟 영역의 픽셀값
                
        fore_img_new_h = emoticon_new_size[i][0] # 사이즈 값 바로 불러오기
        fore_img_new_w = emoticon_new_size[i][1]

        if fore_img_new_h == fore_img_new_w:
            pass
        elif fore_img_new_h > fore_img_new_w:
            fore_img_new_w = fore_img_new_h
        else:
            fore_img_new_h = fore_img_new_w

        fore_img = cv2.resize(fore_img, dsize=(fore_img_new_w, fore_img_new_h))

        
        x_offset = coordinate[i][0] #364
        y_offset = coordinate[i][1] #133

        y1, y2 = y_offset, y_offset + fore_img_new_h #fore_img.shape[0] #초기값 + 이모지 높이
        x1, x2 = x_offset, x_offset + fore_img_new_h #fore_img.shape[1] #초기값 + 이모지 너비
        alpha_fore_img = fore_img[:, :, 3] / 255.0
        alpha_l = 1.0 - alpha_fore_img


        for c in range(0, 3): #0,1,2
            img[y1:y2, x1:x2, c] = (alpha_fore_img * fore_img[:, :, c] + alpha_l * img[y1:y2, x1:x2, c])

    # save the image
        fResult = "synthetic_image.jpg"
        cv2.imwrite(fResult, img)
    
    result_img =upload_s3(fResult)
    return result_img