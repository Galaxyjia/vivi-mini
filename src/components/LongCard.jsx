import React from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function LongCard() {
  const gotoCode = () => {
    Taro.redirectTo({ url: "/pages/code/code" });
  };

  return (
    <View className="flex items-center justify-center p-1 m-2 bg-white shadow-xl h-36">
      <Image
        className="w-24 h-32 shadow-xl"
        mode="aspectFill"
        src="https://dummyimage.com/380x380"
      />
      <View className="flex flex-col items-start justify-between h-32 ml-2 ">
        <Text className="ml-2 text-font-bold">ViVi电子刊</Text>
        <Text className="ml-2 text-xs text-gray-300">240份订阅</Text>
        <View className="flex justify-around ml-2">
          <View className="w-20 text-xs text-center text-white bg-pink-400 rounded-sm shadow-xl" onClick={gotoCode}>
            查看更多
          </View>
          <View className="w-20 ml-2 text-xs text-center text-white bg-pink-400 rounded-sm shadow-xl">
            晒贡献
          </View>
        </View>
      </View>
    </View>
  );
}
