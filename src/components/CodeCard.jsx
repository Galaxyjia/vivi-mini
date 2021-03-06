import React from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useShareAppMessage } from '@tarojs/taro'

export default function CodeCard(props) {
  const {sn,code,magazine_id} = props;

  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
      return {
        title: 'Galaxy赠送你电子刊码',
        path: `pages/detail/detail?id=${magazine_id}`,
        imageUrl:'https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
      }
    }

    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  })

  const handlecopy = ()=> {
    Taro.setClipboardData({
      data: code,
      success: function (res) {
        Taro.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }

  return (
    <View
      className="flex flex-row justify-around m-1 bg-white rounded-md shadow-xl h-14"
    >
      <View className="flex flex-col justify-around mt-2">
        <View className="w-24 pl-1">
          <Text>{sn}</Text>
        </View>
        <View className="pl-1">
          <Text className="text-xs text-gray-300">未使用{code}</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-around w-40">
        <View className="flex flex-row items-center" onClick={handlecopy}>
        <Button className="h-6 text-xs text-center text-gray-500 bg-pink-100 rounded-sm w-14 text-align-middle">复制</Button>
        </View>
        <View className="flex flex-row items-center">
        <Button open-type="share" className="h-6 text-xs text-center text-gray-500 bg-pink-100 rounded-sm w-14 text-align-middle">赠予</Button>
        </View>
      </View>
    </View>
  );
}
