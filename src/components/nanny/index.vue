<template>
  <div class="container conten"> <!--中间内容-->
    <div class="l-wrap fl"><!--左边内容-->
      <img :src="api+img"/>
    </div> <!--左边内容-->
    <div class="r-wrap fr"><!--右边内容-->
      <copyright/>
    </div> <!--右边内容-->
  </div><!--中间内容-->
</template>
<script>
// 侧边
import {api} from 'api/index'
import copyright from 'com/publicstyle/copyright'
import {nanny} from 'api/request'
export default {
  data () {
    return {
      img: '',
      api
    }
  },
  components: {
    copyright
  },
  mounted () {
    nanny({
      nanny_id: 1
    }, (res) => {
      console.log(res)
      this.img = res.img
    })
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .conten{
    padding-top: 30px;
    .l-wrap{
      width: 79%;
      margin-top: 25px;
      .lusive-box{
        padding: 40px 0 60px;
        margin-bottom: 30px;
        background-color: @whiteColor;
        .tlusive{
          text-align: center;
          margin-bottom: 30px;
          .tlusive-list{
            border-bottom: 1px solid #d3d3d3;
            padding-bottom: 15px;
            font-weight: normal;
          }
          .icon-zs{
            background: url("./image/zhuanshu.png") no-repeat;
            display: block;
            width: 183px;
            height: 15px;
            margin: -1px auto 0;
          }
        }
        .icon-jzlc{
          width: 16px;
          height: 268px;
          background: url(./image/jzlc.png) no-repeat center;
        }
        .blusive-zlist{
          margin-left: 170px;
          text-align: right;
          margin-right: 20px;
        }
        .blusive-ylist{
          margin-right: 168px;
          margin-left: 20px;
        }
        .blusive ul li:first-child{
          font-size: 20px;
          color: @grayorangeColor;
        }
        .blusive ul li{
          margin-bottom: 45px;
          float: none;
        }
        .blusive ul li span{
          font-size: 12px;
          color: @lightgrey;
        }
        .blusive img{
          max-width: 100%;
          margin: 0 47px 0 47px;
        }
      }
      .price-service{
        padding: 0 40px 0 40px;
        text-align: center;
      }
      .price-service tr td{
        background-color: @bglightdark;
        padding: 10px 6px 10px 9px;
        font-size: 14px;
      }
      .price-service tr:first-child td:first-child{
        width: 36%;
      }
      .price-service tr:first-child td:last-child{
        width: 45%;
      }
      .price{
        padding: 40px 0 35px;
      }
      .quality{
        padding: 40px 0 0 0;
        .quality-assurance{
          width: 100%;
          height: 480px;
          position: relative;
          background: url(./image/zlbz.jpg) no-repeat right bottom;
        }
        .quality-assurance ul li{
          position: absolute;
        }
        .quality-assurance ul .li1{
          left: 130px;
        }
        .quality-assurance ul .li1:hover {
          left: 130px;
          top: -15px;
        }
        .quality-assurance ul .li2{
          left: 235px;
          top: 60px;
        }
        .quality-assurance ul .li2:hover {
          left: 245px;
          top: 50px;
        }
        .quality-assurance ul .li3{
          left: 235px;
          top: 230px;
        }
        .quality-assurance ul .li3:hover {
          left: 245px;
          top: 240px;
        }
        .quality-assurance ul .li4{
          left: 130px;
          top: 240px;
        }
        .quality-assurance ul .li4:hover {
          left: 130px;
          top: 255px;
        }
        .quality-assurance ul .li5{
          left: 20px;
          top: 230px;
        }
        .quality-assurance ul .li5:hover {
          left: 10px;
          top: 240px;
        }
        .quality-assurance ul .li6{
          left: 20px;
          top: 60px;
        }
        .quality-assurance ul .li6:hover {
          left: 10px;
          top: 50px;
        }
      }
      .procedure-contract{
        text-align: center;
        margin: 0px 65px;
        .procedure-contract-list{
          background: #e1e1e1;
        }
      }
      .procedure ul li{
        width: 25%;
        height: 200px;
        float: left;
        margin-bottom: 80px;
        border-bottom: 1px dashed #a7a7a7;
      }
      .procedure ul li .procedure-contract-list{
        background-color: #e1e1e1;
        padding-top: 25px;
        margin: 0 30px 0 30px;
        height: 150px;
        .procedure-img{
          margin-bottom: 25px;
        }
      }
      .procedure ul li .procedure-contract-list:hover{
        color: @whiteColor;
        background-color: @orangeColor;
      }
      .procedure ul li span{
        display: block;
        width: 37px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        background: url("./image/qylc17.png") no-repeat center;
        color: @whiteColor;
        font-size: 20px;
        margin: 37px auto 0;
      }
      .procedure ul li:first-child span{
        margin: 56px ;
      }
      .procedure ul li .procedure-contract-list .procedure-img img:first-child{
        display: inline-block;
      }
      .procedure ul li .procedure-contract-list:hover .procedure-img img:first-child{
        display: none;
      }
      .procedure ul li .procedure-contract-list .procedure-img img:last-child{
        display: none;
      }
      .procedure ul li .procedure-contract-list:hover .procedure-img img:last-child{
        display: inline-block;
      }
      .procedure ul li .procedure-contract-list span:hover{
        background: url("./image/qylc18.png") no-repeat center;
      }
    }
    .r-wrap{
      width: 20%;
    }
  }
</style>
