<template>
<div class="regainpw">
<div class="title"><p>更改密码</p></div>
    <div class="firstinput">
        <span class="p1">现&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;码：&nbsp;</span>
        <div class="inputmsg">
        <el-input placeholder="请输入现密码" v-model="password"></el-input>
        </div>
    </div><br><br>
    <div class="input">
        <span class="p1">新&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;码：&nbsp;</span>
        <div class="inputmsg">
        <el-tooltip effect="dark" content="密码由6到18位数字或字母组成" placement="bottom">
        <el-input placeholder="请输入新密码" v-model="newPassword"></el-input>
        </el-tooltip>
        </div>
    </div><br><br>
    <!--<div class="input">
        <span class="p1">确认新密码：&nbsp;&nbsp;</span>
        <div class="inputmsg">
        <el-tooltip effect="dark" content="密码由6到18位数字或字母组成" placement="bottom">
        <el-input placeholder="请再次输入新密码" v-model="confirmpassword"></el-input>
        </el-tooltip>
        </div>
    </div><br>-->

    <div class="changebtn">
        <el-button @click="back">&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</el-button>
        <el-button type="primary" @click="change">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</el-button>
    </div>  
</div>
</template>

<script>
import store from 'src/store'

export default {
  data () {
    return {
      password: '',
      newPassword: ''
      // confirmpassword: ''
    }
  },
  methods: {
    async change () {
      if (this.password !== '' && this.newpassword !== '') {
        await store.dispatch('user/resetPassword', {
          password: this.password,
          newPassword: this.newPassword
        })
        this.$message({
          showClose: true,
          message: '更改密码成功！请重新登录！',
          type: 'success'
        })
        this.$router.push({path: '/'})
      } else {
        this.$message({
          showClose: true,
          message: '请输入现密码或原密码！',
          type: 'error'
        })
      }
    },
    back: function () {
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  color:#20a0ff;
  text-align: center;
  margin-left: 280px;
  border-bottom: 2px solid #20a0ff;
  width: 360px;
}

.regainpw{
  background-color: #eef1f6;
  padding: 20px;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  height: 350px;
}

.p1{
  font-size: 18px;
  color: #20a0ff;
  float: left;
  padding: 5px;
  margin-left: 300px;
}

.firstinput{
  margin-top: 20px;
  padding: 10px;
}

.input{
  padding: 10px;
}

.changebtn{
  margin-top: 30px;
  margin-left: 360px;
}

.inputmsg{
  float: left;
}
</style>
