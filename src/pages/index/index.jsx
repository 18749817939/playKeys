import { Component } from 'react'

import { View, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      num: null,
      windowHeight: null
    }
  }

  componentWillMount() {

    // this.getInfor()
    this.getSystem()
  }

  componentDidMount() {
  }

  componentWillUnmount() { }
  getInfor = async () => {
    const user = await Taro.getStorage({ key: 'user' })
    const { name, num } = user.data
    this.setState({ name })
    this.setState({ num })
  }
  getSystem = async () => {
    await Taro.getSystemInfo({
      success: res => {
        const windowHeight = res.windowHeight
        this.setState({ windowHeight })
      }
    })
  }
  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { num, name, windowHeight } = this.state
    const numInput = (e) => {
      this.setState({
        num: e.target.value
      })
    }
    const nameInput = (e) => {
      this.setState({
        name: e.target.value
      })
    }
    const onClick = (goOut) => {
      Taro.removeStorage({
        key: 'user'
      })
      if (num && name) {
        Taro.setStorage({
          key: 'user',
          data: {
            num: num,
            name: name
          },
          success: () => {
            Taro.navigateTo({
              url: `/pages/play/index?type=${goOut}`
            })
          }

        })
      } else {
        Taro.showModal({
          title: '提示',
          content: '学号或姓名不能为空！',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }

    }
    return (
      <View className='index' style={{ height: windowHeight }}>
        {/* <View className='view'>{num}</View> */}
        {/* <View className='view'>{name}</View> */}
        <Input placeholder='请输入学号' placeholderClass='phcolor' className='input1' onInput={numInput} type='text' value={num ? num : null} />
        <Input placeholder='请输入姓名' placeholderClass='phcolor' className='input2' onInput={nameInput} type='text' value={name ? name : null} />
        <View className='btn-container'>
          <Button className='btn1' onClick={() => onClick('go')}></Button>
          <Button className='btn2' onClick={() => onClick('out')}></Button>
        </View>
        <View className='bgc'></View>
      </View>
    )
  }
}
