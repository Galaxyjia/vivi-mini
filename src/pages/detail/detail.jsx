import React, { useEffect } from "react";
import { View, Image, Text } from "@tarojs/components";
import LongCard from "@components/LongCard";

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";
import DetailNav from "@components/DetailNav";

function Detail() {
  // 可以使用所有的 React Hooks
  useEffect(() => {});

  // 对应 onReady
  useReady(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Taro 文档】-> 【进阶指南】->【Hooks】
  usePullDownRefresh(() => {});

  return (
    <View className="min-h-screen bg-white">
      <View className="w-full">
        <View className="z-0">
          <Image
            className={"w-full h-36 bg-pink-400"}
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
        </View>

        <View className="h-20 bg-pink-400 shadow-xl">
        <Image
        className={"w-full h-full bg-pink-400"}
        src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
      />
        </View>
        <View className="z-50 -mt-6">
          <View className="p-3 bg-green-700 h-36 rounded-3xl">detail</View>
        </View>
      </View>
      <DetailNav />
    </View>
  );
}

export default Detail;
