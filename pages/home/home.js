Page({
  data: {
    name: '微信',
    UserInfo: {}
  },
  onClick: function(){
    if(this.data.name==='微信'){
      this.setData({
        name: 'QQ'
      })
    }
    else{
      this.setData({
        name: '微信'
      })
    }
  },
  getUI: function(option){
    console.log(option.detail['rawData'])
    const detail = option.detail['rawData']
    this.setData({
      UserInfo: detail
    })
  }
})