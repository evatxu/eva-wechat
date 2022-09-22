import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";

export default class Pick extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Pick!</Text>
      </View>
    );
  }
}
