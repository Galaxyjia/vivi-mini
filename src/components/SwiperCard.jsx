import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Swiper,
  SwiperItem,
  Image,
} from "@tarojs/components";

export default function SwiperCard() {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const swiperChange = (e) => {
    console.log(e.detail.current);
    setSwiperIndex(e.detail.current);
  };

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
        <SwiperItem>
          <View className="h-full m-1 demo-text-1 ">
            <Image
              className={
                swiperIndex == "0"
                  ? "w-full bg-pink-500 h-80 p-3 transform scale-110"
                  : "w-full bg-pink-500 h-80 mt-2 mx-auto p-1"
              }
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <View className="flex flex-col items-center justify-center">
              <Text className="font-bold">ViVi电子刊</Text>
              <Text className="text-xs text-gray-300">销售5.0万份</Text>
            </View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="h-full m-1 demo-text-2">
            <Image
              className={
                swiperIndex == "1"
                ? "w-full bg-pink-500 h-80 p-3 transform scale-110"
                : "w-full bg-pink-500 h-80 mt-2 p-1"
              }
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <View className="flex flex-col items-center justify-center">
              <Text className="font-bold">ViVi电子刊</Text>
              <Text className="text-xs text-gray-300">销售5.0万份</Text>
            </View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="h-full m-1 demo-text-3">
            <Image
              className={
                swiperIndex == "2"
                ? "w-full bg-pink-500 h-80 p-3 transform scale-110"
                : "w-full bg-pink-500 h-80 mt-2 p-1"
              }
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <View className="flex flex-col items-center justify-center">
              <Text className="font-bold">ViVi电子刊</Text>
              <Text className="text-xs text-gray-300">销售5.0万份</Text>
            </View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="h-full m-1 demo-text-1">
            <Image
              className={
                swiperIndex == "3"
                ? "w-full bg-pink-500 h-80 p-3 transform scale-110"
                : "w-full bg-pink-500 h-80 mt-2 p-1"
              }
              src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
            />
            <View className="flex flex-col items-center justify-center">
              <Text className="font-bold">ViVi电子刊</Text>
              <Text className="text-xs text-gray-300">销售5.0万份</Text>
            </View>
          </View>
        </SwiperItem>
      </Swiper>
    </View>
  );
}
