import React, { useState,useEffect } from "react";
import { View, Text, Input, Image, Button } from "@tarojs/components";
import SwiperCard from "@components/SwiperCard";
import Card from "@components/Card";
import Taro from "@tarojs/taro";

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";

import Nav from "@components/Nav";

function Index() {
  const [data,setData] = useState()
  const [title,setTitle] = useState()
  const [total_subtotal,setTotalSubtotal] = useState()
  // 可以使用所有的 React Hooks
  useEffect(() => {
    Taro.request({
      url:'https://vivimini.havefunentertain.com/api/magazine/lists?page=1&pagesize=5&is_recommend=-1&sort=-listorder,-id',
      header: {
        // 'content-type': 'application/x-www-form-urlencoded', // 默认值
        "X-Requested-With":"XMLHttpRequest",
        'X-Token':'49f8B1UEAwcDBARVVAVVDVYDAgQLUQdUCFsNBgFUXAoGAwNUVQxXVAVVBgcCBAAOAQIOBwgBVAQDCAwDAQ'
      },
      method:"GET"
      // dataType:'其他'
    }).then(res=>{
        console.log(res.data)
        setData(()=>res.data)
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
      <SwiperCard />
      <View className="flex items-center justify-center mx-auto mt-3 w-1_2">
        <Text>热门期刊</Text>
      </View>
      <View className="w-full p-3">
        <View className="flex flex-wrap w-full mx-auto">
        {
          data&&data.data&&data.data.lists.map((item,index)=>(
            <Card key={index} title={item.title} total_subscribe={item.total_subscribe} />
          ))
        }
        </View>
      </View>

      <Nav index="0"/>
    </View>
  );
}

export default Index;
