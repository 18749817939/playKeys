import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Header from '../../component/header/index'
import Content from '../../component/content/index'
import './index.less'

export default class Play extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: null
    }
  }

  componentWillMount () { 
    const type = Taro.getCurrentInstance().router.params.type
    this.setState({type})
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {type} = this.state
    return (
      <View className='play-container'>
        <Header></Header>
        <Content type={type}></Content>
        <View className='footer'>
          <View className='more-btn'>更多</View>
        </View>
      </View>
    )
  }
}