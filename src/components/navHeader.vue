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
            <div v-show="showAuthorQrcode" id="author_qrcode">
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
            <div v-show="showShopCard" class="shopcard-box">
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
      </div>
    </div>
  </div>
</template>

<script>
import { Spin } from "view-design";
export default {
  name: "navHeader",
  data() {
    return {
      showAuthorQrcode: false, // 控制作者二维码显示
      showShopCard: false, // 显示购物车
      showLoading: true,
    };
  },
  components: {
    Spin,
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
  transition: margin 0.3s;
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
  transition: margin 0.3s;
}

/* 使用伪类来做logo轮播,使用图片的形式用hover控制left的间距 */
/* .logo:before{
  content: '';
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url(//s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat 50% 50%;
}
.logo:after{
  content: '';
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url(//s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat 50% 50%;
}
.logo:hover:before{
    margin-left: 0px;
} */

/* 加载状态 */
.shopcard-box >>> .ivu-spin-dot {
  background-color: #ff6700 !important;
  width: 40px !important;
  height: 40px !important;
}
/* 作者二维码过渡动画 */
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
</style>