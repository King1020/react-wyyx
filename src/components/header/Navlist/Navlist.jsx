import React, { Component } from 'react'
import './navlist.styl'
export default class Navlist extends Component {
  render() {
    return (
       <div className='list_warp'>
          {/* <!-- 推荐 --> */}
      <div className="home_nav">
          <div className="home_list">
            <a  href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item xuan">
            <span>推荐</span>
          </a>
   
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>居家生活</span>
          </a>
      
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>服饰鞋包</span>
          </a>
      
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>美食酒水</span>
          </a>
     
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>个护清洁</span>
          </a>
      
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>母婴亲子</span>
          </a>
      
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>运动旅行</span>
          </a>
       
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>数码家电</span>
          </a>
       
            <a href="https://m.you.163.com/item/list?categoryId=1005000" className="home_item">
            <span>全球特色</span>
          </a>
     
       </div>
      </div>
      <div className="home_icon">
        <i className="iconfont iconsanjiaoxing"></i>
      </div>
    </div>
    )
  }
}
