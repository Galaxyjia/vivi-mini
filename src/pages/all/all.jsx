import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import Nav from "@components/Nav";
import Card from "@components/Card";
import Taro from "@tarojs/taro";
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";

function All() {
  // const [userName, setUserName] = useState("Hello World!!!!");
  // 可以使用所有的 React Hooks
  // 可以使用所有的 React Hooks
  const [data,setData] = useState()

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
      <View className="w-full p-3">
        <View className="flex flex-wrap w-full mx-auto">
        {
          data&&data.data&&data.data.lists.map((item,index)=>(
            <Card key={index} title={item.title} total_subscribe={item.total_subscribe} cover={item.cover}/>
          ))
        }
        </View>
      </View>
      <Nav index="1" />
    </View>
  );
}

export default All;
