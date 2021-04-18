import React, { useState,useEffect } from "react";
import { View, Image, Text,RichText} from "@tarojs/components";
import Taro from "@tarojs/taro";
import Rank from "@components/Rank";

import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";
import DetailNav from "@components/DetailNav";

function Detail() {
  // const {id} = props;
  const [data,setData]= useState()
  const [rankdata,setRankData] = useState()
  // 可以使用所有的 React Hooks
  // 可以使用所有的 React Hooks
  useEffect(() => {
    Taro.request({
      url:`https://vivimini.havefunentertain.com/api/magazine/detail?id=1`,
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

  useEffect(() => {
    Taro.request({
      url:`https://vivimini.havefunentertain.com/api/magazine/rank_lists?magazine_id=1&page=1&pagesize=5`,
      header: {
        // 'content-type': 'application/x-www-form-urlencoded', // 默认值
        "X-Requested-With":"XMLHttpRequest",
        'X-Token':'49f8B1UEAwcDBARVVAVVDVYDAgQLUQdUCFsNBgFUXAoGAwNUVQxXVAVVBgcCBAAOAQIOBwgBVAQDCAwDAQ'
      },
      method:"GET"
      // dataType:'其他'
    }).then(res=>{
        console.log(res.data)
        setRankData(()=>res.data)
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
    <View className="min-h-screen bg-white">
      <View className="w-full">
        <View className="z-0">
          <Image
            className={"w-full h-36 bg-green-400"}
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
        </View>
        <View className="z-50">
          <View className="p-3 bg-gray-200 rounded-3xl">
          {
            data&&data.data&&
            <RichText nodes={data.data.content} />
          }
          </View>
        </View>
        <View className="flex items-center justify-center h-8">
          <View>订阅排行版</View>
        </View>
        <View>
        {
          rankdata&&rankdata.data&&console.log(rankdata.data.lists)&&rankdata.data.lists.map((item,index)=>(
            <Rank />
          ))
        }
        </View>
      </View>
      <DetailNav />
    </View>
  );
}

export default Detail;
