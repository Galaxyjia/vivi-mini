import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import Nav from "@components/Nav";
import DacallCard from "@components/DacallCard";
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";

function Dacall() {
  // const [userName, setUserName] = useState("Hello World!!!!");
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
    <View className="min-h-screen bg-gray-100">
      <View className="w-full">
        <View className="flex items-center justify-center">
          <Image
            className={"w-20 h-20 bg-pink-500 mt-2 mx-auto p-1 rounded-full "}
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
        </View>
        <View className="flex items-center justify-center mt-2">ViVi全球后援会</View>
        <View className="flex justify-around mt-2">
          <View>
            <View>22,250</View>
            <View>累计订阅</View>
          </View>
          <View>
            <View>22,250</View>
            <View>独自订阅</View>
          </View>
          <View>
            <View>22,250</View>
            <View>他人助力</View>
          </View>
        </View>
        <View className="flex items-center justify-center mt-2">助力清单</View>

        <View >
          <DacallCard />
          <DacallCard />
          <DacallCard />
          <DacallCard />
          <DacallCard />
          <DacallCard />
        </View>
      </View>
      <Nav />
    </View>
  );
}

export default Dacall;
