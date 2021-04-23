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
import Taro,{getCurrentInstance} from "@tarojs/taro";
import {getDacallDetail} from "@service/api"

function Dacall() {
  const [data, setData] = useState();
  const [dacalldata,setDacallData] = useState();
  let { magazine_id,user_id } = getCurrentInstance().router.params
  console.log(magazine_id,user_id)
  // 可以使用所有的 React Hooks
  useEffect(() => {
    Taro.request({
      url: `https://vivimini.havefunentertain.com/api/magazine/call_detail?magazine_id=${magazine_id}&user_id=${user_id}`,
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
      url: `https://vivimini.havefunentertain.com/api/magazine/called_users?magazine_id=${magazine_id}&user_id=${user_id}&page=1&pagesize=5`,
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
            data&&data.user&&
            <Image
            className={"w-20 h-20 bg-pink-500 mt-2 mx-auto rounded-full"}
            src={data.user.avatar_url}
          />
          }

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
                data&&data.stats.myself_subscribe?data.stats.myself_subscribe:"0"
              }
            </View>
            <View>独自订阅</View>
          </View>
          <View>
            <View className="flex items-center justify-center">
            {
              data&&data.stats&&data.stats.other_support?data.stats.other_support:"0"
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
