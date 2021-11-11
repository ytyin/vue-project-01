<template>
    <div class="wxpublic">
        <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username" state="success"> </mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" state="error"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" state="warn"></mt-field>
        <mt-field label="自我介绍" placeholder="输入您的消息并点击回车" type="textarea" rows="4" v-model="introduction"></mt-field> -->
        
        <label for="">用户名:</label><input label="用户名" placeholder="请输入用户名" v-model="username" /><br/>
        <label for="">邮箱:</label><input label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" /><br/>
        <label for="">手机号:</label><input label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" /><br/>
        <label for="">自我介绍:</label><input label="自我介绍" placeholder="输入您的消息并点击回车" type="textarea" rows="4" v-model="introduction"/><br/>
    </div>
</template>

<script nonce='lingoace1635325506928global'>
export default {
    data(){
        return {
            randomOnlykey : '',
            username : '',
            email : '',
            phone : '',
            introduction : ''
        }
    },
    created(){
        // localStorage.removeItem('nonce')
        // this.randomOnlykey = 'lingoace'+ new Date().getTime() + 'global'
        // console.log(111,this.randomOnlykey)
        // if(this.randomOnlykey){
        //     localStorage.setItem('nonce',`nonce-${this.randomOnlykey}`)
        // }
    }
}


</script>

<style lang="scss" scoped>
/deep/.mint-cell-wrapper{
    // .mint-cell-title{
    //     display: inline-block;
    //     width: 100px;  
    // } 
}
.wxpublic{
    label,input{
        width: 50%;
    }
}
</style>