var alcoMaster = new Vue({
  el: '#alcoMaster',
  data: {
    sys_userInfo: Object,
    userCount: 1,
  },
  mounted: function() {
    this.sys_userInfo = JSON.parse(localStorage.getItem('sys_userInfo'))
    this.getValueAndPower()
  },
  methods: {
    getValueAndPower: function() {
      var _this = this
      axios({
        url: base_url + '/user/getValueAndPower',
        method: 'POST',
        // 请求体重发送的数据
        params: {
          id: _this.sys_userInfo.id,
        },
        timeout: 50000,
        // 设置请求头
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(function(res) {
        if (res.status == '200') {
          _this.userCount = res.data.data.userCount
        }
      })
    },
  },
})
