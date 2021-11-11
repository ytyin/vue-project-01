###### 1.在 @vue/cli中，vue create 和 vue serve 及 vue build的区别
###### 2.创建html文件
###### 3.link引入css属性 && import 引入css样式
###### 4. uView组件库依赖sass需安装 npm i node-sass -D npm i sass-loader -D 前提是 uni-app的项目
###### 5. route配置问题: route/index.js或是 main.js同级的route.js都可以，原因是：书写方式错误  new Router({routes: []})这样的配置方式才是可以的
###### 6.github本地的推送到远程新创建的仓库，报错，不能origin连接上
###### 7.https://blog.csdn.net/weixin_42752574/article/details/115816585 sass版本过高也会导致报错 卸载重新安装那两个包，或者是手动更改版本号，然后删除node_moudles包，再npm i。 不要直接手动改完之后npm i,并不是像你想象的自动更新了。 https://blog.csdn.net/qq_38157825/article/details/114318772 版本号参考这个解决了"echarts": "^4.9.0" 这个也是由于版本过高，编译不通过报错导致项目跑不起来。https://blog.csdn.net/qq_39687662/article/details/119301662 版本号参考这个解决了
###### 8.一些组件库的使用：element-ui/v-charts/vue-baidu-map
