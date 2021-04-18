import React, { useEffect } from "react";
import { View ,WebView} from "@tarojs/components";
import LongCard from "@components/LongCard"

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";
import DetailNav from "@components/DetailNav"

function CodePlus(props) {
  const {url} = props
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
    <WebView src={url}/>
    </View>
  );
}

export default CodePlus;
