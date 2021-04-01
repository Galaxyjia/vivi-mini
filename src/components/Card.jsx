import React from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function Card() {
  const gotodetails =()=>{
    Taro.redirectTo({ url: "/pages/detail/detail" });
  }

  return (
    <View className="h-48 m-2 bg-white rounded-md shadow-xl w-5_12" onClick={gotodetails}>
      <View className="p-1">
        <Image
          className="w-full h-32"
          mode="aspectFill"
          src="https://dummyimage.com/380x380"
        />
      </View>
      <View className="pl-2">
        <Text>ViVi电子刊</Text>
      </View>
      <View className="pl-2">
        <Text className="text-xs text-gray-300">已订阅5.0万份</Text>
      </View>
    </View>
  );
}
