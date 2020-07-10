Page({
  data: {
    name: '微信'
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
    console.log(option)
  }
})