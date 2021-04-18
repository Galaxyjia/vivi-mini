import React, { useState,useEffect } from "react";
import { View } from "@tarojs/components";
import LongCard from "@components/LongCard"
import Taro from "@tarojs/taro";

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
  login,
} from "@tarojs/taro";
import Nav from "@components/Nav"

function My() {
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

  const userLogin=(()=>{
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log(res)
          //发起网络请求
          Taro.request({
            url: 'https://vivimini.havefunentertain.com',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  })

  return (
    <View className="min-h-screen bg-white">
      <View className="w-full ">
        <View className="h-20 bg-pink-400 shadow-xl" onClick={userLogin}>
          My
        </View>
        <View className="-mt-6">
          <LongCard />
          <LongCard />
          <LongCard />
          <LongCard />
          <LongCard />
          <LongCard />
        </View>
      </View>
      <Nav index="2"/>
    </View>
  );
}

export default My;
