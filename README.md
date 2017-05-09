# vue-admin

**注：目录bug比较**

**使用方法**
 - 配合[https://github.com/ilyq/flask-vue-blog](https://github.com/ilyq/flask-vue-blog)后端使用

**nginx配置**
 - 参考[https://router.vuejs.org/zh-cn/essentials/history-mode.html](https://router.vuejs.org/zh-cn/essentials/history-mode.html)
```
location / {
  try_files $uri $uri/ /index.html;
}
```

**效果**：
主页
![](https://github.com/ilyq/vue-blog/blob/master/images/1.png)
admin
![](https://github.com/ilyq/vue-blog/blob/master/images/2.png)


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
