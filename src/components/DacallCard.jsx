import React from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function DacallCard() {
  const gotodetails = () => {
    Taro.redirectTo({ url: "/pages/detail/detail" });
  };

  return (
    <View className="flex items-center justify-around w-full h-20 bg-white" onClick={gotodetails}>
      <View className="ring-4 ring-pink-300">
        <Image
          className={"w-14 h-14 bg-pink-500 mx-auto rounded-full shadow-xl"}
          src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
        />
      </View>
      <View className="pl-2">
        我是小S
      </View>
      <View className="pl-2">
        230本
      </View>
    </View>
  );
}
