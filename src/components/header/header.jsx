import React, { Component } from 'react'
import './index.styl'
import {FullSlip,SlipItem} from 'react-fullslip'
export default class Header extends Component {
  render() {
    return (
       <div className="header_warp">
    {/* <!-- 头部 --> */}
    <div className="home_header">
      {/* <!-- logo图片 --> */}
      <img src={require('../../assets/imgs/logo.png')} alt='logo'/>
      <div className="home_header_sou">
        <i className="iconfont iconfangdajing"></i>
        <span className="placeholder">搜索商品,共22715款好物</span>
      </div>
      <div className="home_header_deng">
        <span className="btn">登录</span>
      </div>
    </div>
    {/* <!-- 推荐 --> */}
    <div className="wrapper2">
      <div className="home_nav">
          <div className="home_list">
          <FullSlip>
               <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>推荐</span>
          </a>
          </SlipItem>
          <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>居家生活</span>
          </a>
          </SlipItem>
         <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>服饰鞋包</span>
          </a>
         </SlipItem>
         <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>美食酒水</span>
          </a>
         </SlipItem>
          <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>个护清洁</span>
          </a>
          </SlipItem>
         <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>母婴亲子</span>
          </a>
         </SlipItem>
          <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>运动旅行</span>
          </a>
          </SlipItem>
          <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>数码家电</span>
          </a>
          </SlipItem>
         <SlipItem>
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>全球特色</span>
          </a>
         </SlipItem>
        
          </FullSlip>
       </div>
      </div>
      <div className="home_icon">
        <i className="iconfont iconsanjiaoxing"></i>
      </div>
    </div>
  </div>
    )
  }
}
