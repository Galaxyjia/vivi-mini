import React from "react";
import { View, Text, Button, Image } from "@tarojs/components";

export default function DacallCard(props) {
  const {nick_name,avatar_url,total_subscribe} = props;

  return (
    <View className="flex items-center justify-around w-full h-20 bg-white" >
      <View className="ring-4 ring-pink-300">
        <Image
          className={"w-14 h-14 bg-pink-500 mx-auto rounded-full shadow-xl"}
          src={avatar_url}
        />
      </View>
      <View className="pl-2">
        {nick_name}
      </View>
      <View className="pl-2">
        {total_subscribe}本
      </View>
    </View>
  );
}
