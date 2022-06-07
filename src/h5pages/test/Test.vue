<template>
  <div class="parent">I'm a test page</div>
</template>

<script>
import moment from "moment-timezone";

export default {
  created() {
    const time = new Date()
    // console.log(moment.tz.guess())
    // 如果你不知道你自己当前所在地的时区，请使用此代码查看.
    moment(time).tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm"); // 北京时间
    moment(time).format("YYYY-MM-DD HH:mm"); // 上海时间
    // https://www.cnblogs.com/kuki/p/15166013.html
    console.log("用户时区：", moment.tz.guess(true));
    console.log("时区列表：", moment.tz.names());
    console.log("字符串化的时区列表：", JSON.stringify(moment.tz.names()));
    const timeZones = moment.tz.names()
    var offsetTmz=[];
    for(var i in timeZones)
    {
        // console.log(`${moment.tz(timeZones[i])},------,${moment.tz(timeZones[i]).format('Z')}`)
        offsetTmz.push(`(GMT${moment.tz(timeZones[i]).format('Z')}) ${timeZones[i]}`);
    }
    console.log('处理后的时区列表：', offsetTmz)
  },
};
</script>

<style lang="scss" scoped>
.parent {
  background: greenyellow;
}
</style>
