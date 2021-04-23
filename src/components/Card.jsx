import React, { useState, useEffect} from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function Card(props) {
  const {title,total_subscribe,cover,id} = props;
  // const [id,setId] = useState('')

  const gotodetails =()=>{
    Taro.navigateTo({ url: `/pages/detail/detail?id=${id}`});
  }

  return (
    <View className="m-2 bg-white rounded-md shadow-xl h-58 w-5_12" onClick={gotodetails}>
      <View className="p-1">
        <Image
          className="w-full h-40"
          // mode="aspectFill"
          src={cover}
        />
      </View>
      <View className="w-full px-1">
        <Text className="text-xs overflow-ellipsis">{title}</Text>
      </View>
      <View className="w-full px-1">
        <Text className="text-xs text-gray-300">已订阅{total_subscribe}份</Text>
      </View>
    </View>
  );
}
