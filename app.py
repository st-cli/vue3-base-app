# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 14:53
# @Author  : ZH
# @File : dingding.py 
# @Software: PyCharm
import os

import uvicorn
from fastapi import FastAPI, File, UploadFile
import hmac

import requests
import base64
import time
import hashlib
import urllib.parse

app = FastAPI()

def send_out_ding(send_data):

    headers = {
        # Already added when you pass json= but not when you pass data=
        'Content-Type': 'application/json',
    }

    json_data = {
        'msgtype': 'markdown',
        'markdown': {
            'title':"[sentry]监控平台通知",
            'text': f"## 项目名称: {send_data.get('project_name')} \n ### 错误级别:{send_data.get('level')} \n #### 错误信息:{send_data.get('message')} \n #### [点击查看详情]({send_data.get('url')})",
        },
        'at':{
            "isAtAll": True
        }
    }

    response = requests.post('https://oapi.dingtalk.com/robot/send?access_token=51eb8fdf2285b02644fd03faaaa1333a54a458b806a2229b7609a9ad3dc674ea', headers=headers, json=json_data)

    print(response.json())


@app.post("/api/dingtalk/notification")
async def handle_json(
        data: dict
):
    send_out_ding(send_data=data)
    return {}


    pass


if __name__ == '__main__':
    uvicorn.run('app:app', port=8111, host='0.0.0.0', reload=False, proxy_headers=False, debug=False)
