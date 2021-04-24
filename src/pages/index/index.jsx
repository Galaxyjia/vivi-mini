import React, { useState,useEffect } from "react";
import { View, Text, Input, Image, Button } from "@tarojs/components";
import SwiperCard from "@components/SwiperCard";
import Card from "@components/Card";
import Taro from "@tarojs/taro";
import {getMagezineLists,getRecommendMagezineLists} from "@service/api"

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";

import Nav from "@components/Nav";

function Index() {
  const [data,setData] = useState()
  const [datarecommand,setDataRecommand] = useState()
  // 可以使用所有的 React Hooks
  useEffect(() => {
    getMagezineLists().then(res=>{
          console.log(res.data)
          setData(()=>res.data)
      })
  },[]);

  useEffect(() => {
    getRecommendMagezineLists().then(res=>{
        console.log("recommend: ",res.data)
        setDataRecommand(()=>res.data)
    })
  },[]);

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
      {
        datarecommand&&<SwiperCard datarecommand={datarecommand}/>
      }
      <View className="flex items-center justify-center mx-auto mt-3 w-1_2">
        <Text>热门期刊</Text>
      </View>
      <View className="w-full">
        <View className="flex flex-wrap w-full mx-auto">
        {
          data&&data.data&&data.data.lists.map((item,index)=>(
            <View className="m-1 w-36">
              <Card key={index} title={item.title} total_subscribe={item.total_subscribe} cover={item.cover} id={item.id}/>
            </View>
          ))
        }
        </View>
      </View>
      <Nav index="0"/>
    </View>
  );
}

export default Index;
