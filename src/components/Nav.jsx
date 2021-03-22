import React from "react";
import Taro from "@tarojs/taro";

import { View, Text, Button, Image } from "@tarojs/components";
export default function Nav() {
  const gotoIndex = () => {
    Taro.redirectTo({ url: "/pages/index/index" });
  };

  const gotoAll = () => {
    Taro.redirectTo({ url: "/pages/all/all" });
  };

  const gotoMy = () => {
    Taro.redirectTo({ url: "/pages/my/my" });
  };

  const gotoBlock = () => {
    Taro.redirectTo({ url: "/pages/block/block" });
  };

  return (
    <View className="h-24 mx-auto w-1_2 opacity-70">
      <View className="fixed flex items-center justify-center bg-pink-300 rounded-full bottom-3">
        <View className="w-full h-full m-1" onClick={gotoIndex}>
          Index
        </View>
        <View className="w-full h-full m-1" onClick={gotoAll}>
          All
        </View>
        <View className="w-full h-full m-1" onClick={gotoMy}>
          My
        </View>
        <View className="w-full h-full m-1" onClick={gotoBlock}>
          Block
        </View>
      </View>
    </View>
  );
}
