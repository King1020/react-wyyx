import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.styl' //加载样式
export default class Footer extends Component {
  render() {
    return (
       <div className='footer_warp' > 
         {/* 首页 */}
        <NavLink to='/homepage' activeClassName='on' >
           <span className='footer_item '>
           <span className="item_icon">
              <i className = "iconfont iconhome"> </i>
           </span>
           <span>
             首页
           </span>
         </span>
         </NavLink>
        {/* 分类 */}
        <NavLink to='/classify' activeClassName='on'>  
          <span className='footer_item'>
           <span className="item_icon">
              <i className = "iconfont iconcopy"></i>
           </span>
           <span>
             分类
           </span>
         </span>
         </NavLink>
        {/* 识物 */}
        <NavLink to='/know' activeClassName='on'>
            <span className='footer_item'>
           <span className="item_icon">
              <i className = "iconfont iconfile"> </i>
           </span>
           <span>
             识物
           </span>
         </span>
       </NavLink>
        {/* 购物车 */}
        <NavLink to='/shopcart' activeClassName='on'>
            <span className='footer_item'>
           <span className="item_icon">
              <i className = "iconfont iconcart"> </i>
           </span>
           <span>
             购物车
           </span>
         </span>
          </NavLink>
        {/* 个人中心 */}
        <NavLink to='/person' activeClassName='on'>
            <span className='footer_item'>
           <span className="item_icon">
              <i className = "iconfont iconperson2"> </i>
           </span>
           <span>
             个人
           </span>
         </span>
         </NavLink>
       </div>
    )
  }
}