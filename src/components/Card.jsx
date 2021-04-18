import React from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function Card(props) {
  const {title,total_subscribe,cover} = props;
  const gotodetails =()=>{
    Taro.redirectTo({ url: "/pages/detail/detail" });
  }

  return (
    <View className="h-48 m-2 bg-white rounded-md shadow-xl w-5_12" onClick={gotodetails}>
      <View className="p-1">
        <Image
          className="w-full h-32"
          // mode="aspectFill"
          src={cover}
        />
      </View>
      <View className="pl-2">
        <Text className="text-xs">{title}</Text>
      </View>
      <View className="pl-2">
        <Text className="text-xs text-gray-300">已订阅{total_subscribe}份</Text>
      </View>
    </View>
  );
}
