from fer import FER
import cv2
import numpy as np
import math
from PIL import Image

img = cv2.imread('bts_variety.jpeg')
detector = FER(mtcnn=True) # MTCNN Facial Recognition

result = detector.detect_emotions(img) # 이미지의 인물 디텍션, 감정 검출

def convertTransparent(path): #아무거나 지정해주기(path) 그래야 Return 값나옴
    img = Image.open(path).convert("RGBA") #https://fitjimong.tistory.com/62 (png. transparent값도 지정가능)
    datas = img.getdata() # 이미지의 픽셀값 가져오기
    #이모티콘의 box영역의 색깔을 나타내는 것 투명해야함.
    newData = []
    for item in datas:
        if item[0] == 255 and item[1] == 255 and item[2] == 255:
            newData.append((255, 255, 255, 0)) #투명한 것(Rgba 255,255,255,0)
        elif item[0] > 255:
            newData.append((0, 0, 0, 255)) # 검은색(Rgba 0,0,0,255)
        else:
            newData.append(item) #해당 부분이 255,255,255,0이되면 이모티콘 자체가 투명해짐.

    img.putdata(newData)
    return img

# 리스트 요소 별로 순차적으로 Dominant 감정 표시
coordinate = []
top_emotions = []
emoticon_new_size = []
src = []
emoji = ['happy_emoji.png', 'surprise_emoji.jpeg', 'sad_emoji.png', 'neutral_emoji.png', 'fear_emoji.jpeg', 'disgust_emoji.jpeg', 'angry_emoji.jpeg']
for i in range(len(result)):
    top_emotions = [max(e["emotions"], key = lambda key: e["emotions"][key]) for e in result]
    
    coordinate.append(result[i]["box"][:2])
    emoticon_new_size.append(result[i]["box"][2:])
    
    # 감정별로 다른 이모지를 Input으로 하는 부분
    if top_emotions[i] == 'happy':
        foregrnd_img = emoji[0]
        
    elif top_emotions[i] == 'surprise':
        foregrnd_img = emoji[1]
        
    elif top_emotions[i] == 'sad':
        foregrnd_img = emoji[2]
    
    elif top_emotions[i] == 'neutral':
        foregrnd_img = emoji[3]
    elif top_emotions[i] == 'fear':
        foregrnd_img = emoji[4]
    elif top_emotions[i] == 'disgust':
        foregrnd_img = emoji[5]
    else :
        foregrnd_img = emoji[6]
    
    src.append(foregrnd_img)
  

    fore_img = np.array(convertTransparent(foregrnd_img)) #경로 지정해도될듯
    fore_height, fore_width, fore_channels = fore_img.shape

    backgrnd_img = cv2.imread('bts_variety.jpeg')
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

# # save the image
    fResult = "synthetic_image.png"
    cv2.imwrite(fResult, img)