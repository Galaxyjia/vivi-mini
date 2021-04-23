import React,{useState} from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function LongCard(props) {
  const {title,total_subscribe,cover} = props;
  const [isSharePic,setIsSharePic] = useState()
  const gotoCode = () => {
    Taro.redirectTo({ url: "/pages/code/code?magazine_id=" });
  };

  const shareImage = () =>{
    Taro.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

  return (
    <View className="flex items-center justify-start p-1 m-2 bg-white shadow-xl h-36">
      <Image
        className="w-24 h-32 shadow-xl"
        mode="aspectFill"
        src={cover}
      />
      <View className="flex flex-col items-start justify-between h-32 ml-2 ">
        <Text className="w-32 ml-2 text-font-bold">{title}</Text>
        <Text className="w-32 ml-2 text-xs text-gray-300">{total_subscribe}份订阅</Text>
        <View className="flex justify-around ml-2">
          <View className="w-20 text-xs text-center text-white bg-pink-400 rounded-sm shadow-xl" onClick={gotoCode}>
            查看更多
          </View>
          <View className="w-20 ml-2 text-xs text-center text-white bg-pink-400 rounded-sm shadow-xl" onClick={shareImage}>
            晒贡献
          </View>
        </View>
      </View>
    </View>
  );
}
