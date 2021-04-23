import React from "react";
import Taro from "@tarojs/taro";
import { useShareAppMessage } from '@tarojs/taro'

import { View, Text, Button, Image } from "@tarojs/components";
import home_clicked from "@icons/home_clicked.png";
import home_default from "@icons/home_default.png";
import share_clicked from "@icons/share_clicked.png";
import share_default from "@icons/share_default.png";
import normal_clicked from "@icons/normal_clicked.png";
import normal_default from "@icons/normal_default.png";
import plus_clicked from "@icons/plus_clicked.png";
import plus_default from "@icons/plus_default.png";

export default function DetailNav(props) {
  // let index = props.index
  // let magazine_id = props.id
  const {index,magazine_id,path,path2} = props

  console.log(index)

  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
      return {
        title: 'Vivi电子刊',
        path: `pages/detail/detail?id=${magazine_id}`,
        // imageUrl:'https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
      }
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  })

  const gotoIndex = () => {
    Taro.redirectTo({ url: "/pages/index/index"});
  };

  const gotoShare = () => {

  };

  const gotoNormal = () => {
    Taro.redirectTo({ url: `/pages/normal/normal?path=${path}`});
  };

  const gotoPlus = () => {
    Taro.redirectTo({ url: `/pages/plus/plus?path=${path2}`});
  };

  return (
    <View className="flex items-center justify-center h-24 mx-auto w-50 opacity-80">
      <View className="fixed flex items-center justify-center bg-pink-100 rounded-full bottom-3">
        <View className="w-full h-full m-1" onClick={gotoIndex}>
        {
          index ==="0"?<Image src={home_clicked} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={home_default} className="w-10 h-10 rounded-full"/>
        }
        </View>
        <View className="w-full h-full m-1" onClick={gotoShare}>
        {
          // index ==="1"?<Image src={share_clicked} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={share_default} className="w-10 h-10 rounded-full"/>
        }
        <Button id="button" openType="share" className="w-10 h-10 m-1 rounded-full"><Image src={share_clicked} className="w-10 h-10 -ml-4 rounded-full shadow-xl"></Image></Button>
        </View>
        <View className="w-full h-full m-1" onClick={gotoNormal}>
        {
          index ==="2"?<Image src={normal_clicked} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={normal_default} className="w-10 h-10 rounded-full"/>
        }
        </View>
        <View className="w-full h-full m-1" onClick={gotoPlus}>
        {
          index ==="3"?<Image src={plus_clicked} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={plus_default} className="w-10 h-10 rounded-full"/>
        }
        </View>
      </View>
    </View>
  );
}
