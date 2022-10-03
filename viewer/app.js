import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import SelectGift from './components/SelectGift'
import SelectNum from './components/SelectNum'
const hyExt = global.hyExt
const { View, Text, Button,BackgroundImage,ScrollView,Image ,Tab } = UI

let SoccerUrl = "http://apis.juhe.cn/fapig/football/rank?key=07379a8e27141d3dfb979152d2baba49&type=zhongchao";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value:1,
      giftInfo: [],
      giftIndex: 1,
      giftNum: 1,
      
      Microrecording_title1: "",
      Microrecording_title2: "",
      Microrecording_title3: "",
      
      textBar_custom_info: "",
      textBar_custom_passwd: "",
      textBar_intro_pic1: "",

      Microrecording_pic1: "",
      Microrecording_pic2: "",
      Microrecording_pic3: "",

      textBar_goods_show: "",
      default_step: 1,
      user_nick:"",
      user_id:"",
      giftMsg: [],

      soccerInfo: {},
      soccerInfo_1: {},
      soccerInfo_2: {},
      soccerInfo_3: {},
      soccerInfo_4: {},
      soccerInfo_5: {},
      soccerInfo_6: {},
      soccerInfo_7: {},

      textBar_thing_1:"",
      textBar_thing_2:"",
      textBar_thing_3:"",

      textBar_goods_1:"",
      textBar_goods_2:"",
      textBar_goods_3:"",

    }
  }

    showGiftChange(data){
      const {itemName, sendNick, sendItemCount} = data;
      let old_msg = this.state.giftMsg;
      const msg = `${sendNick}送${sendItemCount}个${itemName}~\n`;
      old_msg.push(msg);
      if(old_msg.length>30)
        old_msg.shift();
      this.setState({giftMsg:old_msg});
  }

  getGiftInfo(){
    hyExt.context.getGiftConf().then(giftInfo => {
      if(giftInfo){
        this.setState({
          giftInfo: giftInfo.filter((item,i)=>{
            return item.giftName&&/https/.test(item.giftGif)
          })
        })
      }
    })
  }

    onGiftChange(){
      callback = this.showGiftChange.bind(this);
      hyExt.context.onGiftChange({}, callback).then(() => {
        console.log('监听当前直播间礼物变化消息成功')
      }).catch(err => {
        console.log('监听当前直播间礼物变化消息失败，错误信息：' + err.message)
      })
    }

  messageEventListener(){

    hyExt.storage.getItem('record_pic1').then(res => {
      this.setState({
        Microrecording_pic1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_message1').then(res => {
      this.setState({
        Microrecording_title1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('pic_goods_1').then(res => {
      this.setState({
        textBar_goods_1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })


    hyExt.storage.getItem('pic_goods_2').then(res => {
      this.setState({
        textBar_goods_2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })


    hyExt.storage.getItem('pic_goods_3').then(res => {
      this.setState({
        textBar_goods_3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })


    hyExt.storage.getItem('commodity_link1').then(res => {
      this.setState({
        textBar_thing_1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })


    hyExt.storage.getItem('commodity_link2').then(res => {
      this.setState({
        textBar_thing_2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })


    hyExt.storage.getItem('commodity_link3').then(res => {
      this.setState({
        textBar_thing_3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })


    hyExt.storage.getItem('record_message2').then(res => {
      this.setState({
        Microrecording_title2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_message3').then(res => {
      this.setState({
        Microrecording_title3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('personal_content').then(res => {
      this.setState({
        textBar_custom_info: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('personal_title').then(res => {
      this.setState({
        textBar_custom_passwd: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('personal_pic').then(res => {
      this.setState({
        textBar_intro_pic1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_pic2').then(res => {
      this.setState({
        Microrecording_pic2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_pic3').then(res => {
      this.setState({
        Microrecording_pic3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('goods_show').then(res => {
      this.setState({
        textBar_goods_show: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })
  }

  changeGift(step){
    if(step === undefined)  //无参数则按上一次操作来
      step = this.state.default_step;
    else
      this.setState({default_step:step})  //有参数则保存操作

    var {giftIndex} = this.state;
    const maxlen = this.state.giftInfo.length;
    giftIndex = (giftIndex + step + maxlen)%maxlen;

    this.setState({
      giftIndex: giftIndex
    })
  }

  changeNum(step){
    var {giftNum} = this.state;
    giftNum = (giftNum + step)>1?(giftNum + step):1;
    this.setState({
      giftNum: giftNum
    })
  }

  componentDidMount() {
    hyExt.onLoad(()=> {
      hyExt.context.getUserInfo().then(userInfo => {
        hyExt.logger.info('获取用户信息成功', userInfo.userNick);
        console.log('获取用户id成功', userInfo.userUnionId);
        this.setState({
          user_nick: userInfo.userNick,
          user_id:userInfo.userUnionId
        })
        this.getGiftInfo();
        this.messageEventListener();
      })
    });
    this.onGiftChange();
    this.getSoccerInfo();
  }

  getSoccerInfo() {
    let args = [];
    args[0] = {};
    args[0].header = { "x-header": "foo" };
    args[0].url = SoccerUrl;
    args[0].method = "GET";
    args[0].data = { foo: "bar" };
    args[0].dataType = "json";
    hyExt.logger.info("发送HTTP请求：" + JSON.stringify(args));
    hyExt
      .request(args[0])
      .then((resp) => {
        let weatherData = resp.data.result;
        this.setState({
          soccerInfo: Object.assign({}, weatherData.ranking[0]),
          soccerInfo_1: Object.assign({}, weatherData.ranking[1]),
          soccerInfo_2: Object.assign({}, weatherData.ranking[2]),
          soccerInfo_3: Object.assign({}, weatherData.ranking[3]),
          soccerInfo_4: Object.assign({}, weatherData.ranking[4]),
          soccerInfo_5: Object.assign({}, weatherData.ranking[5]),
          soccerInfo_6: Object.assign({}, weatherData.ranking[6]),
          soccerInfo_7: Object.assign({}, weatherData.ranking[7]),
        });
      })
      .catch((err) => {
        hyExt.logger.info("发送HTTP请求失败，错误信息：" + err.message);
      });
  }

  sendGift(){
    const giftCount = this.state.giftNum;
    const giftIndex = this.state.giftIndex;
    const giftId = this.state.giftInfo[giftIndex].giftId;
    hyExt.context.sendGift({giftId,giftCount}).then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err);
    })
  }npx


  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render () {
     const { soccerInfo,  soccerInfo_1, soccerInfo_2, soccerInfo_3, soccerInfo_4, soccerInfo_5
      , soccerInfo_6, soccerInfo_7} = this.state;
    const {giftInfo, textBar_goods_1,textBar_goods_2,textBar_goods_3,giftIndex, giftNum,Microrecording_title1,textBar_thing_1,textBar_thing_2,textBar_thing_3,Microrecording_pic1,textBar_custom_info,Microrecording_title2,
      textBar_custom_passwd,Microrecording_title3,textBar_goods_show,textBar_intro_pic1,Microrecording_pic2,Microrecording_pic3} = this.state;
    return (
      giftInfo[giftIndex]?
      <ScrollView className="scrollview" nestedScrollEnabled={true} scrollViewRef={this.$refs} onScroll={this.onScroll}>
        <View className="container">         
            <BackgroundImage className="backgroundImage" src={require('./images/bg_title.jpg')}>
                <View className='titleView'>
                  <Text className="titleText">虎牙空间</Text>
                </View>
            </BackgroundImage>
        </View>
        <Tab 
            className="tab"
            value={this.state.value}
            data={[{
                value: 1,
                label: '商品档'
              },
              {
                value: 2,
                label: '足球档'
              },
              {
                value: 3,
                label: '微记录'
              },
              {
                value: 4,
                label: '个人档'
              }
            ]}
            onChange={item => this.handleChange('value', item.value)}
          />
        <View className="container">
                <BackgroundImage className="backgroundImage" src={require('./images/bg_body.jpg')}>
        {(() => {switch(this.state.value){
              case 1:
                return (

                  <View className="text">
                  <Text className="title">空间，记录优质商品</Text>
                  <Text className="groupNum">{textBar_goods_show?textBar_goods_show:"暂未收到主播发送的消息~"}</Text>
                  <Text className="title">主播正在展示的商品及链接如下 </Text>
                  <View className='picImageView'>{textBar_goods_show == "商品1"
                        ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={textBar_goods_1}></Image>
                        :textBar_goods_show == "商品2"?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={textBar_goods_2}></Image>
                        :<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={textBar_goods_3}></Image>
                      }
                    </View>
                  <Text className="groupNum">{textBar_goods_show == "商品1"?textBar_thing_1:
                  textBar_goods_show == "商品2"?textBar_thing_2
                  :textBar_goods_3
                  }</Text> 
          

                  <Text className="title">主播其他的商品及链接如下 </Text>                  
                   <View className='picImageView'>{textBar_goods_1
                        ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={textBar_goods_1}></Image>
                        :<Text className="msg">暂未收到主播发送的图片~</Text> }
                    </View>
                    <Text className="groupNum">{textBar_thing_1?textBar_thing_1:"暂未收到主播发送的消息~"}</Text> 
                   <View className='picImageView'>{textBar_goods_2
                        ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={textBar_goods_2}></Image>
                        :<Text className="msg">暂未收到主播发送的图片~</Text> }
                    </View>

                    <Text className="groupNum">{textBar_thing_2?textBar_thing_2:"暂未收到主播发送的消息~"}</Text> 
                   <View className='picImageView'>{textBar_goods_3
                        ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={textBar_goods_3}></Image>
                        :<Text className="msg">暂未收到主播发送的图片~</Text> }
                    </View>
                    <Text className="groupNum">{textBar_thing_3?textBar_thing_3:"暂未收到主播发送的消息~"}</Text> 

                </View>

                )

                case 2:
                return (
                  <View className="text">
                  <Text className="title">和主播一同关注中超足球</Text>
                  
            <Text className="msg">{`排名：${soccerInfo.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo["scores"] || "--"}`}
            </Text>

            <Text className="msg">{`排名：${soccerInfo_1.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo_1["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo_1["scores"] || "--"}`}
            </Text>

            <Text className="msg">{`排名：${soccerInfo_2.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo_2["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo_2["scores"] || "--"}`}
            </Text>

            <Text className="msg">{`排名：${soccerInfo_3.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo_3["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo_3["scores"] || "--"}`}
            </Text>

            <Text className="msg">{`排名：${soccerInfo_4.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo_4["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo_4["scores"] || "--"}`}
            </Text>

            <Text className="msg">{`排名：${soccerInfo_5.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo_5["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo_5["scores"] || "--"}`}
            </Text>

            <Text className="msg">{`排名：${soccerInfo_6.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo_6["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo_6["scores"] || "--"}`}
            </Text>

            <Text className="msg">{`排名：${soccerInfo_7.rank_id || "--"}`}</Text>
            <Text className="groupNum">
              {`球队名称：${soccerInfo_7["team"] || "--"}`} ,{" "}
              {`积分：${soccerInfo_7["scores"] || "--"}`}
            </Text>


            <Text className="title">赠送礼物，和主播一同助力中超足球</Text>

            <SelectGift data={giftInfo[giftIndex]} changeGift={this.changeGift.bind(this)}></SelectGift>
                    <SelectNum num={giftNum} changeNum={this.changeNum.bind(this)}></SelectNum>
                    <Button 
                          className='senderButton' 
                          style={{ borderRadius: 50 }}
                          type='primary'
                          size='md'
                          textColorInverse
                          onPress={() => this.sendGift()}>
                            <Text className="btnText">赠送</Text>
                    </Button>

                 
                </View>
                )
              case 3:
                return (
                  <View className="text">
                    <Text className="title">空间，记录美好直播</Text>
                    
                    <Text className="groupNum">{Microrecording_title1?Microrecording_title1:"暂未收到主播发送的消息~"}</Text> 

                     <View className='picImageView'>{Microrecording_pic1
                          ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={Microrecording_pic1}></Image>
                          :<Text className="msg">暂未收到主播发送的图片~</Text> }
                      </View>
                      <Text className="groupNum">{Microrecording_title2?Microrecording_title2:"暂未收到主播发送的消息~"}</Text> 

                     <View className='picImageView'>{Microrecording_pic2
                          ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={Microrecording_pic2}></Image>
                          :<Text className="msg">暂未收到主播发送的图片~</Text> }
                      </View>
                      <Text className="groupNum">{Microrecording_title3?Microrecording_title3:"暂未收到主播发送的消息~"}</Text> 

                     <View className='picImageView'>{Microrecording_pic3
                          ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={Microrecording_pic3}></Image>
                          :<Text className="msg">暂未收到主播发送的图片~</Text> }
                      </View>
                   
                  </View>
                )
              case 4:
                const {giftMsg} = this.state;
                //sdk调用获取了一个键值对map
                const giftMsgs = giftMsg.map((item,index)=>{
                  return (<Text>{item}</Text>)
                })

                return (                              
                      <View className='text'>                  
                     <View className='introImage'>                      
                     <Text >{textBar_custom_passwd?textBar_custom_passwd:"暂未收到主播发送的消息~"}</Text>                       
                       {textBar_intro_pic1
                          ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={textBar_intro_pic1}></Image>
                          :<Text className="msg">暂未收到主播发送的图片~</Text> }                     
                      </View>  
                      <Text >
                            <Text numberOfLines={5} style={{fontFamily: "Cochin"}}>{textBar_custom_info?textBar_custom_info:"暂未收到主播发送的消息~"}
                            </Text>
                          </Text>


                    <SelectGift data={giftInfo[giftIndex]} changeGift={this.changeGift.bind(this)}></SelectGift>
                    <SelectNum num={giftNum} changeNum={this.changeNum.bind(this)}></SelectNum>
                    <Button 
                          className='senderButton' 
                          style={{ borderRadius: 50 }}
                          type='primary'
                          size='md'
                          textColorInverse
                          onPress={() => this.sendGift()}>
                            <Text className="btnText">赠送</Text>
                    </Button>

                          <Text className="baseText">赞赏礼物信息</Text>
                          <View className="giftMsg">
                            <ScrollView><Text className="giftText" >{giftMsgs}</Text></ScrollView>
                          </View>
                  </View>
                      
                )
              default:
                return null
            }
          }
        )()}
        </BackgroundImage>
        </View>
        </ScrollView>       
      :
      <Text>loading......</Text>
    )
  }
}

export default App
