import { Component } from 'react'

import { View } from '@tarojs/components'
import './index.less'
// import toolsIcon from '../../assets/header-tools-icon'

export default class Header extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='header-container'>
        <View className='branch'>
          <View className='tools-icon'></View>
          <View>当前部门：电子工程学院</View>
        </View>
        <View className='infor'>
          <View className='infor-icon'></View>
          <View>请假外出、返校权限查询</View>
        </View>
        {/* <Image src='../../assets/header-tools-icon.png'></Image> */}
      </View>
    )
  }
}