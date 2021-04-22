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
import Taro from "@tarojs/taro";

function Dacall() {
  const [data, setData] = useState();
  const [dacalldata,setDacallData] = useState();
  // 可以使用所有的 React Hooks
  useEffect(() => {
    Taro.request({
      url: "https://vivimini.havefunentertain.com/api/magazine/call_detail?magazine_id=1&user_id=6",
      header: {
        // 'content-type': 'application/x-www-form-urlencoded', // 默认值
        "X-Requested-With": "XMLHttpRequest",
        "X-Token":
          "49f8B1UEAwcDBARVVAVVDVYDAgQLUQdUCFsNBgFUXAoGAwNUVQxXVAVVBgcCBAAOAQIOBwgBVAQDCAwDAQ",
      },
      method: "GET",
      // dataType:'其他'
    }).then((res) => {
      console.log(res.data);
      setData(() => res.data);
    });
  }, []);

  useEffect(() => {
    Taro.request({
      url: "https://vivimini.havefunentertain.com/api/magazine/called_users?magazine_id=1&user_id=6&page=1&pagesize=5",
      header: {
        // 'content-type': 'application/x-www-form-urlencoded', // 默认值
        "X-Requested-With": "XMLHttpRequest",
        "X-Token":
          "49f8B1UEAwcDBARVVAVVDVYDAgQLUQdUCFsNBgFUXAoGAwNUVQxXVAVVBgcCBAAOAQIOBwgBVAQDCAwDAQ",
      },
      method: "GET",
      // dataType:'其他'
    }).then((res) => {
      console.log(res.data);
      setDacallData(() => res.data);
    });
  }, []);

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
          {
            data&&data.user
          }
          <Image
            className={"w-20 h-20 bg-pink-500 mt-2 mx-auto p-1 rounded-full "}
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          />
        </View>
        <View className="flex items-center justify-center mt-2">ViVi全球后援会</View>
        <View className="flex justify-around mt-2">
          <View>
            <View className="flex items-center justify-center">
              {
                data&&data.stats.total_subscribe
              }
             </View>
            <View>累计订阅</View>
          </View>
          <View>
            <View className="flex items-center justify-center">
              {
                data&&data.stats.myself_subscribe
              }
            </View>
            <View>独自订阅</View>
          </View>
          <View>
            <View className="flex items-center justify-center">
            {
              data&&data.stats.other_support
            }
            </View>
            <View>亲友打call</View>
          </View>
        </View>
        <View className="flex items-center justify-center mt-2">打call贡献值</View>
        <View className="flex items-center justify-center my-2 text-sm text-gray-500">贡献份数将计入此用户名下</View>

        <View>
            {
              dacalldata&&dacalldata.data.lists.map((item,index)=>(
                <DacallCard nick_name={item.nick_name} avatar_url={item.avatar_url} total_subscribe={item.total_subscribe}/>
              ))
            }
        </View>
      </View>
      <Nav />
    </View>
  );
}

export default Dacall;
