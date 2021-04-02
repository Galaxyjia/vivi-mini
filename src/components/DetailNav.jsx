import React from "react";
import Taro from "@tarojs/taro";

import { View, Text, Button, Image } from "@tarojs/components";
export default function DetailNav() {
  const gotoIndex = () => {
    Taro.redirectTo({ url: "/pages/index/index"});
  };

  const gotoShare = () => {

  };

  const gotoNormal = () => {
    Taro.redirectTo({ url: "/pages/normal/normal"});
  };

  const gotoPlus = () => {
    Taro.redirectTo({ url: "/pages/plus/plus"});
  };

  return (
    <View className="h-24 mx-auto w-1_2 opacity-70">
      <View className="fixed flex items-center justify-center bg-pink-300 rounded-full bottom-3">
        <View className="w-full h-full m-1" onClick={gotoIndex}>
          Index
        </View>
        <View className="w-full h-full m-1" onClick={gotoShare}>
          share
        </View>
        <View className="w-full h-full m-1" onClick={gotoNormal}>
          normal
        </View>
        <View className="w-full h-full m-1" onClick={gotoPlus}>
          plus
        </View>
      </View>
    </View>
  );
}
