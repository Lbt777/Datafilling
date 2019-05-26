<template>
  <div class="container">
    <div class="mid-nav"><span class="container-describe01">首页</span>
      <span>/</span>
      <span  class="container-describe02">家政服务</span>
    </div>
    <div class="parting-line"></div>
    <div class="primary">
      <ul class="serve clearfix">
          <li v-for="(nav,index) in contentdes" :key="index">
          <div class="primary-dev primary-dev01">
          <i></i>
          <a href="#"><h6>{{nav.hname}}</h6></a>
          <a href="#"><p>{{nav.hdescribe}}</p></a>
          <a href="#/housesub">
          <img class="btn-prev01" src="./img/index-icon-1.png">
          <img class="btn-prev02" src="./img/index-icon-3-1.png">
          </a>
          </div>
          </li>
      </ul>
    </div>
    <copyright/>
  </div>
</template>
<script>
// 侧边
import copyright from 'com/publicstyle/copyright'
// import {housekeep} from 'api/request'
export default {
  components: {
    copyright
  },
  data () {
    return {
      // 创建空数组保存data
      contentdes: []
    }
  },
  mounted () {
    // housekeep((data) => {
    //   // 保存到空数组中
    //   console.log('打印')
    // this.contentdes = data[0].data
    //   console.log(this.contentdes)
    //   console.log('打印')
    // })
  }

}
</script>
<style lang="less" scoped>
 @import "~static/css/common.less";
  .container{
    //  position: relative;
    // top: 620px;
    max-width: 1200px;
    margin: 0 auto;
    .mid-nav{
      height: 40px;
       background:@whiteColor;
    }
  }
  .container-describe01 {
    color: @darkgreyColor;
    font-family: "Microsoft YaHei";
    font-size: 19px;
    padding: 0 10px;
    line-height: 40px;
    margin-left: 50px;
  .container-describe02{
      font-size: 16px;
    }
  }
  .parting-line{
    max-width: 1200px;
    height: 15px;
    background: #F0F0F0;
  }
  .primary{
    width: 950px;
    height: 806px;
    float: left;
    background: @whiteColor;
  }
  .primary-right{
    width: 240px;
    height: 806px;
    float: right;
    background: white;
    text-align: center;
    .img01{
      margin-top: 60px;
    }
    .img02{
      margin-top: 90px;
    }
  }
  .serve{
    padding:55px 0px 0px 0px;
  }
 .container .primary .serve li {
    margin-top: 60px;
 }

 .container .primary ul li i{
    display: block;
    width: 45px;
    height: 2px;
    background-color: @darkorangeColor;
    margin-bottom: 10px;
  }
  .container .primary ul li a h6{
    color: @darkorangeColor;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .primary-dev{
  width: 300px;
    height: 150px;
    margin-left: 130px;
  }
  .primary-dev01{}
  .container .primary ul li p{
    color: @grayColor;
    font-size: 16px;
    margin-bottom: 20px;
  }
.btn-prev01{
  display: inline-block;
}
.btn-prev02{
  display: none;
}
</style>
