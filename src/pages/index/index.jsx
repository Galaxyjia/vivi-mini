import React, { useEffect } from "react";
import { View, Text, Input, Image, Button } from "@tarojs/components";
import SwiperCard from "@components/SwiperCard";
import Card from "@components/Card";

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";

import Nav from "@components/Nav";

function Index() {
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
      <SwiperCard />
      <View className="flex items-center justify-center mx-auto mt-3 w-1_2">
        <Text>热门期刊</Text>
      </View>
      <View className="w-full p-3">
        <View className="flex flex-wrap w-full mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </View>

      <Nav index="0"/>
    </View>
  );
}

export default Index;
