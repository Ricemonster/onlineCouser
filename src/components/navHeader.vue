<template>
  <div id="Header">
    <div class="header-container">
      <!-- 左侧导航栏 -->
      <div class="header-container-left">
        <a>小米商城</a>
        <a>MIUI</a>
        <a>IoT</a>
        <a>云服务</a>
        <a>天星数科</a>
        <a>有品</a>
        <a>小爱开放平台</a>
        <a>企业团购</a>
        <a>资质证照</a>
        <a
          id="aboutme"
          @mouseover="showAuthorQrcode = true"
          @mouseleave="showAuthorQrcode = false"
          >关于我
          <div class="xiaosanjiao" v-show="showAuthorQrcode"></div>
          <transition name="mybox">
            <div
              style="z-index: 50"
              v-show="showAuthorQrcode"
              id="author_qrcode"
            >
              <img
                src="../assets/images/aboutMe.jpg"
                alt="关于作者"
                width="90"
                height="90"
                style="margin: 18px auto 12px; display: block"
              />
              <div key="div2" style="margin-left: 10px; margin-top: -20px">
                来和我聊聊啊！
              </div>
            </div>
          </transition>
        </a>
      </div>
      <!-- 右侧功能栏 -->
      <div class="header-container-right">
        <a>登录</a>
        <a>注册</a>
        <a>消息通知</a>
        <a
          id="shopcard"
          @mouseover="showCard(true)"
          @mouseleave="showCard(false)"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cart"></use>
          </svg>
          <span style="margin-left: 7px">购物车</span>
          <span style="margin-left: 7px">(0)</span>
          <transition name="mycard">
            <div
              style="z-index: 100"
              v-show="showShopCard"
              class="shopcard-box"
            >
              <Spin v-if="showLoading"></Spin>
              <div v-else>购物车中还没有商品，赶紧选购吧！</div>
            </div>
          </transition>
        </a>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottomBox">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-nav">
          <ul @mouseover="showGoodsList = true" @mouseleave="showgoods">
            <li><a href="">小米手机</a></li>
            <li><a href="">Redmi 红米</a></li>
            <li><a href="">电视</a></li>
            <li><a href="">笔记本</a></li>
            <li><a href="">家电</a></li>
            <li><a href="">路由器</a></li>
            <li><a href="">智能硬件</a></li>
            <li><a href="">服务</a></li>
            <li><a href="">社区</a></li>
          </ul>
        </div>
        <div class="header-search" :class="{ enterClass: enterOrleave }">
          <input
            @focus="showShopingCar"
            @blur="enterOrleave = false"
            type="text"
            placeholder="路由器"
            placeholder-style="color:#757575"
          />
          <div class="hader-btn" :class="{ enterClassA: enterOrleave }">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-search"></use>
            </svg>
          </div>
        </div>
        <!-- inputHotSearch -->
        <div v-show="enterOrleave" class="hotSearch">
          <div v-for="(item, index) in hotSearch" :key="index" class="hotItme">
            <a>{{ item }}</a>
          </div>
        </div>
      </div>
      <!-- 显示商品下拉栏 -->
      <transition name="goods">
        <!-- 进入后触发事件 问题是会再一次触发动画事件 -->
        <div
          v-if="showGoodsList"
          @mouseover="shoGoods"
          @mouseleave="showGoodsList = false"
          class="goodsList"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { Spin, Icon } from "view-design";
export default {
  name: "navHeader",
  data() {
    return {
      showAuthorQrcode: false, // 控制作者二维码显示
      showShopCard: false, // 显示购物车
      showLoading: true,
      enterOrleave: false, // 输入框是进入还是离开
      hotSearch: ["耳机", "空调", "手机", "全部商品", "小米10"],
      showGoodsList: false,
    };
  },
  components: {
    Spin,
    Icon,
  },
  methods: {
    showCard(value) {
      this.showShopCard = value;
      let that = this;
      // 请求购物车信息
      setTimeout(function () {
        that.showLoading = false;
      }, 2000);
    },
    showShopingCar() {
      this.enterOrleave = true;
    },
    showgoods() {
      // 标签栏移出事件
      let that = this;
      this.goodsCard = setTimeout(function () {
        that.showGoodsList = false;
      }, 500);
    },
    shoGoods() {
      // 在移出的时候移动到了我们的商品页面
      clearTimeout(this.goodsCard);
    },
    // 商品栏切换事件
    changeTabbar() {},
  },
};
</script>

<style scoped>
#Header {
  width: 100%;
  background: #333;
}
.header-container {
  height: 40px;
  font-size: 12px;
  width: 1226px;
  /* 居中显示，margin上下依然可以使用 */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header-container-left {
  height: 100%;
  line-height: 40px;
}
.header-container-left a {
  text-decoration: none;
  color: #b0b0b0;
  display: inline-block;
  margin-right: 20px;
}
.header-container-left a:hover {
  cursor: pointer;
  color: #ffffff;
}
/* 作者展示二维码 */
#aboutme {
  position: relative;
}
.xiaosanjiao {
  width: 0px;
  height: 0px;
  position: absolute;
  z-index: 100;
  left: 10px;
  top: 22px;
  border-width: 9px;
  border-style: solid;
  border-color: transparent transparent #ffffff transparent;
}
#author_qrcode {
  position: absolute;
  width: 124px;
  height: 140px;
  text-align: center;
  background: #ffffff;
  top: 40px;
  left: -110%;
  color: #333 !important;
  box-shadow: 0 1px 5px #aaa;
  font-size: 14px;
  overflow: hidden;
}
.header-container-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header-container-right a {
  text-decoration: none;
  display: inline-block;
  color: #b0b0b0;
  margin-right: 10px;
}
.header-container-right a:hover {
  cursor: pointer;
  color: #ffffff;
}
#shopcard {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  background: #424242;
  margin-left: 20px;
}
#shopcard:hover {
  color: #ff6700 !important;
  background: #ffffff;
}
#shopcard:hover svg {
  filter: #ff6700;
}
#shopcard svg {
  font-size: 17px;
}
.shopcard-box {
  position: absolute;
  height: 130px;
  right: 0px;
  width: 316px;
  color: #424242;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  top: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
/* 头部栏底部部分 */
.header-bottom {
  width: 100%;
  height: 100px;
  background: #ffffff;
}
.header-bottomBox {
  width: 1226px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}
/* 头部logo */
.header-logo {
  display: inline-block;
  height: 60px;
  width: 60px;
  background-color: #ff6700;
  overflow: hidden;
}
.header-logo a {
  display: inline-block;
  width: 120px;
  height: 60px;
}
.header-logo a:before {
  content: "";
  display: inline-block;
  height: 60px;
  width: 60px;
  background: url(//s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat 50%
    50%;
  transition: margin 0.2s;
}
.header-logo a:after {
  content: "";
  display: inline-block;
  height: 60px;
  width: 60px;
  background: url(//s02.mifile.cn/assets/static/image/mi-home.png) no-repeat 60%
    60%;
}
.header-logo a:hover:before {
  margin-left: -60px;
  transition: margin 0.2s;
}
.header-nav {
  margin-left: 30px;
}
.header-nav ul {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header-nav ul li {
  margin-right: 20px;
}
.header-nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}
.header-nav ul li a:hover {
  color: #ff6700;
}
.header-search {
  position: absolute;
  right: 10px;
  height: 50px;
  border: 1px solid #e0e0e0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-search:hover {
  border: 1px solid #b0b0b0;
}
.header-search:hover .hader-btn {
  border-left: 1px solid #b0b0b0;
}
.header-search .hader-btn svg {
  font-size: 20px;
}
.hader-btn {
  height: 100%;
  width: 50px;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.hader-btn:hover {
  background: #ff6700;
}
.hader-btn:hover svg {
  color: #ffffff;
}
.header-search input {
  outline: none;
  margin-left: 10px;
  border: none;
}
.enterClass {
  border: 1px solid #ff6700 !important;
}
.enterClassA {
  border-left: 1px solid #ff6700 !important;
}
.hotSearch {
  position: absolute;
  width: 210px;
  background: #ffffff;
  border: 1px solid #ff6700;
  border-top: none;
  right: 60px;
  top: 75px;
}
.hotItme {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  padding-left: 20px;
}
.hotItme:hover {
  background: #F1F3F4;
}
.hotItme a {
  color: #757575 !important;
  text-decoration: none;
}
.goodsList {
  height: 270px;
  width: 100%;
  background: #FFFFFF;
  position: absolute;
  top: 140px;
  left: 0px;
  border: 1px solid #E0E0E0;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
  overflow: hidden;
}
/* 加载状态 */
.shopcard-box >>> .ivu-spin-dot {
  background-color: #ff6700 !important;
  width: 40px !important;
  height: 40px !important;
}
/* 作者二维码过渡动画 */
.mybox-enter-active,
.mybox-leave-active {
  transition: height 0.3s ease;
}
.mybox-leave-active,
.mybox-enter {
  height: 0px !important;
}
.mybox-leave,
.mybox-enter-active {
  height: 130px;
}
/* 购物车过渡动画 */
.mycard-enter-active,
.mycard-leave-active {
  transition: height 0.3s ease;
}
.mycard-leave-active,
.mycard-enter {
  height: 0px !important;
}
.mycard-leave,
.mycard-enter-active {
  height: 130px;
}
/* tabbar栏的下拉动画 */
.goods-enter-active,
.goods-leave-active {
  transition: height 0.5s ease;
}
.goods-leave-active,
.goods-enter {
  height: 0px !important;
}
.goods-leave,
.goods-enter-active {
  height: 270px;
}
</style>