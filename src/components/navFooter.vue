<template>
  <div id="Footer">
    <div class="content">
      <div id="left">
        <div class="svgBox">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bokeyuan"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhihu1"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantizhongwen"></use>
          </svg>
        </div>
        <div class="slogon">Copyright © 2020 城外三石 记录学习-热爱生活</div>
        <div style="margin-top: 20px; font-size: 14px">
          网站已经诞生: {{ daysold }}
        </div>
      </div>
      <div id="right">
        <div class="right-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQqun"></use>
          </svg>
          <span style="padding-left: 10px">766140773</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navFooter",
  data() {
    return {
      daysold: "", // 网站运行天数
    };
  },
  mounted() {
    this.settimeA = setInterval(this.alredy, 1000);
  },
  destroyed() {
    clearInterval(this.settimeA);
  },
  methods: {
    // 网站运行天数
    alredy() {
      var now = new Date();
      //月、日、年，小时、分、秒
      var grt = new Date("11/10/2020 16:42:00"); //此处修改你的建站时间或者网站上线时间
      now.setTime(now.getTime() + 250);
      let days = (now - grt) / 1000 / 60 / 60 / 24;
      let dnum = Math.floor(days);
      let hours = (now - grt) / 1000 / 60 / 60 - 24 * dnum;
      let hnum = Math.floor(hours);
      if (String(hnum).length == 1) {
        hnum = "0" + hnum;
      }
      let minutes = (now - grt) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum;
      let mnum = Math.floor(minutes);
      if (String(mnum).length == 1) {
        mnum = "0" + mnum;
      }
      let seconds =
        (now - grt) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum;
      let snum = Math.round(seconds);
      if (snum == 60) {
        snum = 0;
      }

      if (String(snum).length == 1) {
        snum = "0" + snum;
      }
      this.daysold =
        dnum + " 天 " + hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    },
  },
};
</script>

<style scoped>
#Footer {
  width: 100%;
  height: 200px;
  background: #fafafa;
}
.content {
  height: 100%;
  width: 1226px;
  margin: 0 auto;
  border-top: 1px solid #e1e1e1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.content svg {
  font-size: 40px;
  margin-right: 40px;
}
.content svg:hover {
  fill: #ff6700;
}
.slogon {
  margin-top: 20px;
  font-size: 15px;
  color: #c8c9c9;
}
#right {
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#right svg {
  font-size: 100px;
  margin: 0;
}
#right .right-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
}
</style>
