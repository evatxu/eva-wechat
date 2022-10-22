import { View, Text } from "@tarojs/components";
import "./index.less";

const Index = () => {
  const items = [
    {
      value: 1,
      label: '自提'
    },
    {
      value: 2,
      label: '外卖'
    },
    {
      value: 3,
      label: '注册会员'
    },
    {
      value: 4,
      label: '个人资料'
    },
  ]
  return (
    <View className='w-10_12 m-auto'>
      <View className='flex'>
        {
          items.map(item => (<View className='bg-red-300 px-3' key={item.value}>
            <Text>{item.label}</Text>
          </View>))
        }
      </View>
    </View>
  );
};

export default Index;
