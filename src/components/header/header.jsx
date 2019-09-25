import React, { Component } from 'react'
import Navlist from './Navlist/Navlist'
import './index.styl'
export default class Header extends Component {
  render() {
    return (
  <div className="header_warp">
    {/* <!-- 头部 --> */}
    <div className="home_header">
      {/* <!-- logo图片 --> */}
      <img src={require('../../assets/imges/logo.png')} alt='logo'/>
      <div className="home_header_sou">
        <i className="iconfont iconfangdajing"></i>
        <span className="placeholder">搜索商品,共22715款好物</span>
      </div>
      <div className="home_header_deng">
        <span className="btn">登录</span>
      </div>
    </div>
   <Navlist/>
  </div>
    )
  }
}
