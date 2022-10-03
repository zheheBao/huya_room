import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
const hyExt = global.hyExt;
const { View, Text, Button, Input, ScrollView,BackgroundImage,Image} = UI

class App extends Component {
  constructor () {
    super()

    this.state = {
      giftInfo: [],
      giftIndex: 1,
      giftNum: 1,
      
      commodity_link1:'',
      commodity_link2:'',
      commodity_link3:'',

      record_message1:'',
      record_message2: '',
      record_message3:'',

      personal_content:'',
      personal_title:'',
      personal_pic: '',

      goods_show:'',

      record_pic1:'',
      record_pic2: '',
      record_pic3: '',

      pic_goods_1:'',
      pic_goods_2:'',
      pic_goods_3:'',
    }

  }

  componentDidMount() {
    this.messageEventListener();
  }

  easySetItem(key,value){
    //sdk调用
    hyExt.logger.info('设置小程序简易存储键值对：' + JSON.stringify(key)+JSON.stringify(value))
    hyExt.storage.setItem(key, value).then(() => {
    hyExt.logger.info('设置小程序简易存储键值对成功')
    }).catch(err => {
      hyExt.logger.info('设置小程序简易存储键值对失败，错误信息：' + err.message)
    })
  }

  emitMessage(){

    let { pic_goods_1,pic_goods_2,pic_goods_3, commodity_link3,commodity_link1,
      commodity_link2,record_pic1,record_message2,personal_content,goods_show,record_message1, 
      record_message3,personal_title,personal_pic,record_pic2,record_pic3} = this.state;
    
    this.easySetItem('record_pic1',record_pic1);
    this.easySetItem('record_message2',record_message2);
    this.easySetItem('personal_content',personal_content);
    this.easySetItem('goods_show',goods_show);
    this.easySetItem('record_message1',record_message1);
    this.easySetItem('record_message3',record_message3);
    this.easySetItem('personal_title',personal_title);
    this.easySetItem('personal_pic',personal_pic);
    this.easySetItem('record_pic2',record_pic2);
    this.easySetItem('record_pic3',record_pic3);

    this.easySetItem('commodity_link1',commodity_link1);
    this.easySetItem('commodity_link2',commodity_link2);
    this.easySetItem('commodity_link3',commodity_link3);

    this.easySetItem('pic_goods_1',pic_goods_1);
    this.easySetItem('pic_goods_2',pic_goods_2);
    this.easySetItem('pic_goods_3',pic_goods_3);
  }

  uploadImage(pic_item){
    hyExt.logger.info('上传图片')
    //sdk调用
    hyExt.fs.uploadImg().then(msgInfo => {
      hyExt.logger.info('上传图片成功，返回：' + JSON.stringify(msgInfo))
      switch(pic_item){
        case 0:
          this.setState({ record_pic1: msgInfo.url})  
          break
        case 1:
          this.setState({ personal_pic: msgInfo.url}) 
          break 
        case 2:
          this.setState({ record_pic2: msgInfo.url}) 
          break
        case 3:
          this.setState({ record_pic3: msgInfo.url})
          break 
        case 4:
        this.setState({ pic_goods_1: msgInfo.url})
        break 
        
        case 5:
        this.setState({ pic_goods_2: msgInfo.url})
        break 

        case 6:
        this.setState({ pic_goods_3: msgInfo.url})
        break 

        default:
          break
      }
       
    }).catch(err => {
      hyExt.logger.info('上传图片失败，错误信息：' + err.message)
    })
  }

  messageEventListener(){

    hyExt.storage.getItem('record_pic1').then(res => {
      this.setState({
        record_pic1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_message1').then(res => {
      this.setState({
        record_message1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('commodity_link1').then(res => {
      this.setState({
        commodity_link1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('commodity_link2').then(res => {
      this.setState({
        commodity_link2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('commodity_link3').then(res => {
      this.setState({
        commodity_link3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_message2').then(res => {
      this.setState({
        record_message2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_message3').then(res => {
      this.setState({
        record_message3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('personal_content').then(res => {
      this.setState({
        personal_content: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('personal_title').then(res => {
      this.setState({
        personal_title: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('personal_pic').then(res => {
      this.setState({
        personal_pic: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_pic2').then(res => {
      this.setState({
        record_pic2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('record_pic3').then(res => {
      this.setState({
        record_pic3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })


    hyExt.storage.getItem('pic_goods_1').then(res => {
      this.setState({
        pic_goods_1: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('pic_goods_2').then(res => {
      this.setState({
        pic_goods_2: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('pic_goods_3').then(res => {
      this.setState({
        pic_goods_3: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })

    hyExt.storage.getItem('goods_show').then(res => {
      this.setState({
        goods_show: res
      })
    }).catch(err => {
      hyExt.logger.info('获取小程序简易存储键值对失败，错误信息：' + err.message)
    })
  }

  render () {
    const { record_pic1,personal_pic,record_pic2,record_pic3,pic_goods_1,pic_goods_2,pic_goods_3} = this.state;

    return (
      <ScrollView className="scrollview" nestedScrollEnabled={true} scrollViewRef={this.$refs} onScroll={this.onScroll}>
      <BackgroundImage className="backgroundImage" src={require('./images/bg_body.jpg')}>
        <View className='container'>
            <BackgroundImage className="title-backgroundImage" src={require('./images/bg_title.jpg')}>
              <View className='titleView'>
                <Text className="titleText">虎牙空间-主播端</Text>
              </View>
            </BackgroundImage>
            <View>
              <View className='section'>
              <Text className="baseText">客户端展示商品</Text>
                <Input className='input' blurOnSubmit={false} placeholder={this.state.goods_show?this.state.goods_show:'输入主播准备介绍的商品信息'} value={this.state.goods_show} onChange={v => this.setState({ goods_show: v })} />
                <Text className="baseText">商品1</Text>
                <Input className='input' blurOnSubmit={false} placeholder={this.state.commodity_link1?this.state.commodity_link1:'输入商品1介绍信息'} value={this.state.commodity_link1} onChange={v => this.setState({ commodity_link1: v })} />
                <View className='section'>
                  <Button 
                    className='button' 
                    style={{ borderRadius: 50 }}
                    type='primary'
                    size='md'
                    textColorInverse
                    onPress={() => this.uploadImage(4)}>
                      <Text className="baseText">上传商品1</Text>
                  </Button>
                  <View className='picImageView'>{pic_goods_1
                    ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={pic_goods_1}></Image>
                    :<Text className="msg">暂未上传图片~</Text> }
                  </View>
                </View>


                <Text className="baseText">商品2</Text>
                <Input className='input' blurOnSubmit={false} placeholder={this.state.commodity_link2?this.state.commodity_link2:'输入商品2介绍信息'} value={this.state.commodity_link2} onChange={v => this.setState({ commodity_link2: v })} />                
                <View className='section'>
                  <Button 
                    className='button' 
                    style={{ borderRadius: 50 }}
                    type='primary'
                    size='md'
                    textColorInverse
                    onPress={() => this.uploadImage(5)}>
                      <Text className="baseText">上传商品2</Text>
                  </Button>
                  <View className='picImageView'>{pic_goods_2
                    ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={pic_goods_2}></Image>
                    :<Text className="msg">暂未上传图片~</Text> }
                  </View>
                </View>


                <Text className="baseText">商品3</Text>
                <Input className='input' blurOnSubmit={false} placeholder={this.state.commodity_link3?this.state.commodity_link3:'输入商品3介绍信息'} value={this.state.commodity_link3} onChange={v => this.setState({ commodity_link3: v })} />               
                <View className='section'>
                  <Button 
                    className='button' 
                    style={{ borderRadius: 50 }}
                    type='primary'
                    size='md'
                    textColorInverse
                    onPress={() => this.uploadImage(6)}>
                      <Text className="baseText">上传商品3</Text>
                  </Button>
                  <View className='picImageView'>{pic_goods_3
                    ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={pic_goods_3}></Image>
                    :<Text className="msg">暂未上传图片~</Text> }
                  </View>
                </View>

               
                <Text className="baseText"  >微记录1</Text>
                <Input className='password' secureTextEntry={false} blurOnSubmit={false} placeholder={this.state.record_message1?this.state.record_message1:'输入第一条微记录内容'} value={this.state.record_message1} onChange={v => this.setState({ record_message1: v })} />
                <View className='section'>
                  <Button 
                    className='button' 
                    style={{ borderRadius: 50 }}
                    type='primary'
                    size='md'                  
                    textColorInverse
                    onPress={() => this.uploadImage(0)}>
                      <Text className="baseText">上传图片1</Text>
                  </Button>
                  <View className='picImageView'>{record_pic1
                    ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={record_pic1}></Image>
                    :<Text className="msg">暂未上传图片~</Text> }
                  </View>
                </View>


                <Text className="baseText">微记录2</Text>
                <Input className='input' blurOnSubmit={false} placeholder={this.state.record_message2?this.state.record_message2:'输入第二条微记录内容'} value={this.state.record_message2} onChange={v => this.setState({ record_message2: v })} />
                
                <View className='section'>
                  <Button 
                    className='button' 
                    style={{ borderRadius: 50 }}
                    type='primary'
                    size='md'
                    textColorInverse
                    onPress={() => this.uploadImage(2)}>
                      <Text className="baseText">上传图片2</Text>
                  </Button>
                  <View className='picImageView'>{record_pic2
                    ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={record_pic2}></Image>
                    :<Text className="msg">暂未上传图片~</Text> }
                  </View>
                </View>
                
            
                <Text className="baseText" >微记录3</Text>
                <Input className='password' secureTextEntry={false} blurOnSubmit={false} placeholder={this.state.record_message3?this.state.record_message3:'输入第三条微记录内容'} value={this.state.record_message3} onChange={v => this.setState({ record_message3: v })} />
                
                <View className='section'>
                  <Button 
                    className='button' 
                    style={{ borderRadius: 50 }}
                    type='primary'
                    size='md'
                    textColorInverse
                    onPress={() => this.uploadImage(3)}>
                      <Text className="baseText">上传图片3</Text>
                  </Button>
                  <View className='picImageView'>{record_pic3
                    ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={record_pic3}></Image>
                    :<Text className="msg">暂未上传图片~</Text> }
                  </View>
                </View>
                
                                
                <Text className="baseText" >个人档标题</Text>
                <Input className='password' secureTextEntry={false} blurOnSubmit={false} placeholder={this.state.personal_title?this.state.personal_title:'输入个人档标题'} value={this.state.personal_title} onChange={v => this.setState({ personal_title: v })} />
                <Text className="baseText">个人档内容</Text>
                <Input className='input' blurOnSubmit={false} placeholder={this.state.personal_content?this.state.personal_content:'输入个人档内容'} value={this.state.personal_content} onChange={v => this.setState({ personal_content: v })} />
                
                
                <View className='section'>
                  <Button 
                    className='button' 
                    style={{ borderRadius: 50 }}
                    type='primary'
                    size='md'
                    textColorInverse
                    onPress={() => this.uploadImage(1)}>
                      <Text className="baseText">照片上传</Text>
                  </Button>
                  <View className='picImageView'>{personal_pic
                    ?<Image className="picImage" mode="contain" onLoad={this.imgLoad} src={personal_pic}></Image>
                    :<Text className="msg">暂未上传图片~</Text> }
                  </View>
                </View>
                
                
              </View>
              <View className='section'>
                <Button 
                  className='submitButton' 
                  style={{ borderRadius: 50 }}
                  type='primary'
                  size='md'
                  textColorInverse
                  onPress={() => this.emitMessage()}>
                    <Text className="submitText">向用户广播信息</Text>
                </Button>
              </View>
            </View>
          </View>
        </BackgroundImage>
        </ScrollView>
    )
  }
}
export default App;