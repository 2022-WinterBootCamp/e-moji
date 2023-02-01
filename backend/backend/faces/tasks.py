from __future__ import absolute_import, unicode_literals
from backend.celery import app
from .utils import get_ai_result
from django.http import JsonResponse

@app.task
def ai_task(request): #ai서버에 태스크 보내주고 결과 받아오기
    r = get_ai_result(request)
    if r["ai_results"] == 0:
        return {"ai_results":0, "result":0}
    return {"ai_results":r["ai_results"], "result":r["result"] }