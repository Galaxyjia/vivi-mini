import React,{useState,useRef} from "react";
import Taro from "@tarojs/taro";

import { View, Text, Button, Image } from "@tarojs/components";
import home_clicked from "@icons/home_clicked.png";
import home_default from "@icons/home_default.png";
import all_clicked from "@icons/all_clicked.png";
import all_default from "@icons/all_default.png";
import me_clicked from "@icons/me_clicked.png";
import me_default from "@icons/me_default.png";


export default function Nav(props) {
  let index = props.index
  console.log(index)

  const gotoIndex = () => {
    Taro.redirectTo({ url: "/pages/index/index" });
  };

  const gotoAll = () => {
    Taro.redirectTo({ url: "/pages/all/all" });
  };

  const gotoMy = () => {
    Taro.redirectTo({ url: "/pages/my/my" });
  };

  const gotoBlock = () => {
    Taro.redirectTo({ url: "/pages/block/block" });
  };

  return (
    <View className="flex items-center justify-center h-24 mx-auto w-50 opacity-80">
      <View className="fixed flex items-center justify-center bg-pink-100 rounded-full bottom-3">
        <View className="w-full h-full m-2" onClick={gotoIndex}>
          {
            index ==="0"?<Image src={home_clicked} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={home_default} className="w-10 h-10 rounded-full"/>
          }
        </View>
        <View className="w-full h-full mx-6" onClick={gotoAll}>
          {
            index ==="1"?<Image src={all_clicked} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={all_default} className="w-10 h-10 rounded-full"/>
          }
        </View>
        <View className="w-full h-full m-2" onClick={gotoMy}>
        {
          index ==="2"?<Image src={me_clicked} className="w-10 h-10 rounded-full shadow-xl"/>:<Image src={me_default} className="w-10 h-10 rounded-full"/>
        }
        </View>
      </View>
    </View>
  );
}
