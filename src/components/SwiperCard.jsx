import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Swiper,
  SwiperItem,
  Image,
} from "@tarojs/components";

import Taro from "@tarojs/taro";

export default function SwiperCard(props) {
  const {datarecommand} = props;
  const [swiperIndex, setSwiperIndex] = useState(0);

  const swiperChange = (e) => {
    // console.log(e.detail.current);
    setSwiperIndex(e.detail.current);
  };

  const gotodetails =(id)=>{
    Taro.navigateTo({ url: `/pages/detail/detail?id=${id}`});
  }

  return (
    <View className="w-full bg-white rounded-md shadow-xl h-100">
      <Swiper
        className="h-full"
        indicatorColor="#FBCFE8"
        indicatorActiveColor="#EC4899"
        current="0"
        circular="true"
        easing-function="easeInCubic"
        interval="2000"
        duration="300"
        indicatorDots
        autoplay
        onChange={swiperChange}
        previous-margin="90rpx"
        next-margin="90rpx"
      >
        {
          datarecommand&&datarecommand.data.lists.map((item,index)=>(
            <SwiperItem key={`m-`} onClick={()=>gotodetails(item.id)}>
            <View className="h-full m-1 demo-text-1">
              <Image
                className={
                  swiperIndex == `${index}`
                  ? "w-full  h-80 p-3"
                  : "w-full  h-80 mt-2 p-1"
                }
                src={item.cover}
              />
              <View className="flex flex-col items-center justify-center">
                <Text className="text-xs font-bold">{item.title}</Text>
                <Text className="text-xs text-gray-300">已订阅{item.total_subscribe}份</Text>
              </View>
            </View>
            </SwiperItem>
          ))
        }
      </Swiper>
    </View>
  );
}
