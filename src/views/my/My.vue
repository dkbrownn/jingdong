<template>
  <div class="wrapper">
    <div class="background"></div>
    <div class="my_edit iconfont">&#xe6f5;</div>
    <div class="my_msg">
      <img class="my_msg_channel" src="https://atts.w3cschool.cn/attachments/image/20210430/1619754533536135.png">
      <div class="my_msg_name">热心市民李先生</div>
      <div class="my_msg_level"><span class="iconfont">&#xe637;</span>16</div>
      <div class="my_msg_id">ID:166666666</div>
      <div class="my_msg_shop">
        <div class="red_envelope">红包<span>0</span></div>
        <div class="coupons">优惠券<span>9</span></div>
        <div class="fresh_beans">鲜豆<span>111</span></div>
        <div class="white">白条<span>13</span></div>
      </div>
      <div class="my_settings">
        <div class="my_settings_envelope iconfont"><span class="left">&#xe644;</span> 我的钱包 <span class="right">&#xe601;</span></div>
        <div class="my_settings_address iconfont"><span class="left"> &#xe629;</span > 我的地址 <span class="right">&#xe601;</span></div>
        <div class="my_settings_help iconfont"><span class="left"> &#xe609;</span> 客服与帮助 <span class="right">&#xe601;</span></div>
      </div>
    </div>
  </div>
  <Docker/>
</template>

<script>
import Docker from '../home/Docker.vue'
export default {
  name: 'My',
  components: { Docker }
}
</script>
<style lang="scss" scoped>
.wrapper{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  padding: 0.18rem;
  .background{
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:1.59rem;
    background-size: 100% 1.59rem;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
    background-repeat: no-repeat;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
  }
  .my_edit{
    position:absolute;
    top:.4rem;
    right:.21rem;
    transform: scale(1.3);
    color:#FFFFFF;
  }
  .my_msg{
    position:absolute;
    top:.91rem;
    left:.18rem;
    right:.18rem;
    height:1.95rem;
    background: #FFFFFF;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
    border-radius: .08rem;
    &_channel{
      height:.94rem;
      width:.94rem;
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      top:-.5rem;
      border-radius: .5rem;
    }
    &_name{
      font-family: PingFangSC-Regular;
      font-size: .24rem;
      color: #262628;
      letter-spacing: 0.19px;
      text-align: center;
      line-height: .36rem;
      margin-top:.59rem;
    }
    &_level{
      position:absolute;
      top:.7rem;
      right:.37rem;
      bottom:1.18rem;
      left:2.67rem;
      background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
      border-radius: 1rem;
      border-radius: .08rem;
      height:.15rem;
      width:.35rem;
      font-size: .12rem;
      color: #FFFFFF;
      span{
        color: #FFC700;
        font-size:.12rem;
      }
    }
    &_id{
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      color: #C1C0C9;
      text-align: center;
      line-height:.17rem;
      margin-bottom:.12rem;
    }
    &_shop{
      border-top:.01rem solid  #F1F1F1;
      height:.67rem;
      align-items: center;
      display: flex;
      .red_envelope{
        font-family: PingFangSC-Regular;
        font-size: .12rem;
        color: #C1C0C9;
        display:flex;
        flex-direction: column;
        flex:1;
        text-align: center;
        span{
          padding-top:.03rem;
          font-family: PingFangSC-Regular;
          font-size: .2rem;
          color: #262628;
        }
      }
      .coupons{
        font-family: PingFangSC-Regular;
        font-size: .12rem;
        color: #C1C0C9;
        display:flex;
        flex-direction: column;
        flex:1;
        text-align: center;
        span{
          padding-top:.03rem;
          font-family: PingFangSC-Regular;
          font-size: .2rem;
          color: #262628;
        }
      }
      .fresh_beans{
        font-family: PingFangSC-Regular;
        font-size: .12rem;
        color: #C1C0C9;
        display:flex;
        flex-direction: column;
        flex:1;
        text-align: center;
        span{
          padding-top:.03rem;
          font-family: PingFangSC-Regular;
          font-size: .2rem;
          color: #262628;
        }
      }
      .white{
        font-family: PingFangSC-Regular;
        font-size: .12rem;
        color: #C1C0C9;
        display:flex;
        flex-direction: column;
        flex:1;
        text-align: center;
        span{
          padding-top:.03rem;
          font-family: PingFangSC-Regular;
          font-size: .2rem;
          color: #262628;
        }
      }
    }
  }
  .my_settings{
    height:1.5rem;
    margin-top:.16rem;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
    border-radius: .08rem;
    font-family: PingFangSC-Regular;
    &_envelope{
      padding:.16rem .17rem 0 .17rem;
      margin-bottom:.13rem;
      font-size: .14rem;
      color: #262626;
      line-height:.2rem;
      display: flex;
      align-items: center;
      .left{
        color: #ED4A47;
        border-radius: .08rem;
        border-radius: .08rem;
        margin-right:.12rem;
      }
      .right{
        position:absolute;
        right:.16rem;
        color:#C2C4CA;
        line-height: .12rem;

      }
    }
    &_address{
      padding:.13rem .17rem 0 .17rem;
      margin-bottom:.13rem;
      font-size: .14rem;
      color: #262626;
      line-height:.2rem;
      display: flex;
      align-items: center;
      .left{
        color: #32C5FF;
        border-radius: .08rem;
        border-radius: .08rem;
        margin-right:.12rem;
      }
      .right{
        position:absolute;
        right:.16rem;
        color:#C2C4CA;
        line-height: .12rem;
      }
    }
    &_help{
      padding:.13rem .17rem 0 .17rem;
      margin-bottom:.13rem;
      font-size: .14rem;
      color: #262626;
      line-height:.2rem;
      display: flex;
      align-items: center;
      .left{
        color: rgba(143,19,255,0.91);
        border-radius: .08rem;
        border-radius: .08rem;
        margin-right:.12rem;
      }
      .right{
        position:absolute;
        right:.16rem;
        color:#C2C4CA;
        line-height: .12rem;
      }
    }
  }
}
</style>
