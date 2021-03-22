import React, { useEffect } from "react";
import { View, Image, Text, Icon,Button } from "@tarojs/components";
import SwiperCard from "@components/SwiperCard";
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from "@tarojs/taro";
import Nav from "@components/Nav";

function Block() {
  // 可以使用所有的 React Hooks
  useEffect(() => {});

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
    <View className="min-h-screen bg-pink-300">
      <SwiperCard />
      <Nav />
      <View className="h-24 m-2 bg-gray-300 rounded-md shadow-xl w-5_12">
        <Image
          className="w-12 h-12"
          src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
        />
      </View>
      <View className="h-32 m-2 bg-white rounded-md shadow-xl w-5_12">
        <View className="p-2">
          <Image
            className="w-full h-28"
            mode="aspectFill"
            src="https://dummyimage.com/380x380"
          />
        </View>
      </View>
      <View className="h-48 m-2 bg-white rounded-md shadow-xl w-5_12">
        <View className="p-2">
          <Image
            className="w-full h-44"
            mode="aspectFill"
            src="https://dummyimage.com/380x380"
          />
        </View>
      </View>
      <View className="h-48 m-2 bg-white rounded-md shadow-xl w-5_12">
        <View className="p-1">
          <Image
            className="w-full h-32"
            mode="aspectFill"
            src="https://dummyimage.com/380x380"
          />
        </View>
        <View className="pl-2">
          <Text>电子刊</Text>
        </View>
        <View className="pl-2">
          <Text className="text-xs text-gray-300">已订阅5.0万份</Text>
        </View>
      </View>
      <View className="relative p-20 px-4 py-10 bg-white shadow-lg rounded-3xl">

        <View className="py-8 text-base leading-6 text-gray-700">
          <View className="py-4">
            An advanced online playground for Tailwind CSS, including support
            for things like:
          </View>
          <View className="list-disc">
            <View className="flex items-start mb-1">
              <View className="flex items-center h-6">
                <View className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500"></View>
              </View>
              <Text className="ml-2">
                Customizing your
                <Text className="px-2 text-sm font-bold text-gray-900">
                  tailwind.config.js
                </Text>
                file
              </Text>
            </View>
            <View className="flex items-start mb-1">
              <View className="flex items-center h-6">
                <View className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500"></View>
              </View>
              <Text className="ml-2">
                Extracting classes with
                <Text className="px-2 text-sm font-bold text-gray-900">
                  @apply
                </Text>
              </Text>
            </View>
            <View className="flex items-start">
              <View className="flex items-center h-6">
                <View className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-500"></View>
              </View>
              <Text className="ml-2">Code completion with instant preview</Text>
            </View>
          </View>
          <View className="py-4">
            Perfect for learning how the framework works, prototyping a new
            idea, or creating a demo to share online.
          </View>
        </View>
        <View className="pt-6 text-lg font-bold leading-6">
          <Text>Want to dig deeper into Tailwind?</Text>
          <Text className="text-cyan-600">Read the docs &rarr;</Text>
        </View>
      </View>
      <View className='flex flex-col'>
        <Icon size='60' type='success' />
        <Icon size='60' type='info' />
        <Icon size='60' type='warn' color='#ccc' />
        <Icon size='60' type='warn' />
        <Icon size='60' type='waiting' />
        <Icon size='20' type='success_no_circle' />
        <Icon size='20' type='warn' />
        <Icon size='20' type='success' />
        <Icon size='20' type='download' />
        <Icon size='20' type='clear' color='red' />
        <Icon size='20' type='search' />
      </View>
      <View>
      <Button className='bg-green-700'>Button1</Button>
      <Button className='bg-pink-700'>Button2</Button>
      </View>
      </View>
  );
}

export default Block;
