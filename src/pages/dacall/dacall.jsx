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
import {getDacallDetail,getDacallCaller} from "@service/api"

function Dacall() {
  const [data, setData] = useState();
  const [dacalldata,setDacallData] = useState();
  let { magazine_id,user_id } = getCurrentInstance().router.params
  console.log(magazine_id,user_id)
  // 可以使用所有的 React Hooks
  useEffect(() => {
    getDacallDetail(magazine_id,user_id).then((res) => {
      console.log(res.data);
      setData(() => res.data);
    });
  }, []);

  useEffect(() => {
    getDacallCaller(magazine_id,user_id).then((res) => {
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
        <View className="flex items-center justify-center mt-2">
          {
            data&&data.user&&
            data.user.nick_name
          }
        </View>
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
