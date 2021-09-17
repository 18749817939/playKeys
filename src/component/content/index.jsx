import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:null,
      num:null,
      time:null
     };
  }
  componentWillMount() {
    this.getInfor()
    this.getTime()
  }
  dateFormat = (time) => {
    if (!time) return ''
    return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
      + " " +
      `${time.getHours()}:${time.getMinutes()>=10?time.getMinutes():'0'+time.getMinutes()}:${time.getSeconds()>=10?time.getSeconds():'0'+time.getSeconds()}`
  }
  getInfor = async () => {
    const user = await Taro.getStorage({ key: 'user' })
    const { name, num } = user.data
    this.setState({ name })
    this.setState({ num })
  }
  getTime=()=>{
    const newTime = new Date()
    const time = this.dateFormat(newTime)
    this.setState({time})
  }
  render() {
    const {name,num,time}=this.state
    return (
      <View className='content-container'>
        <View className='name-container'>
          <View >姓名</View>
          <View className='name'>{name}</View>
        </View>
        <View className='college-container'>
          <View >学院</View>
          <View className='college'>电子工程学院</View>
        </View>
        <View className='sure-container'>
          <View className='sure-space'></View>
          <View className='sure'>
            <View className='color-change'></View>
          </View>
        </View>
        <View className='state-container'>
          <View >状态码</View>
          <View className='state'>
            <View className='state-code'></View>
          </View>
        </View>
        <View className='allow-container'>
          <View className='allow-space'></View>
          <View className='allow'>允许{
            this.props.type==='go'?'出':'入'
          }校</View>
        </View>
        <View className='num-container'>
          <View >学工号</View>
          <View className='num'>{num}</View>
        </View>
        <View className='time-container'>
          <View >出入校时间</View>
          <View className='time'>{time}</View>
        </View>
        <View className='footer-bar-container'>
          <View className='footer-space'></View>
          <View className='footer-bar'></View>
        </View>
      </View>
    );
  }
}

export default Content;