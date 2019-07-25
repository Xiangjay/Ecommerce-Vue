# Demo Project —— E-commerce

### An E-commerce Demo SPA using Vue.js + Node.js + MongoDB

模拟电商网站，从登陆 --> 产品展示 --> 加入购物车 --> 购物车列表 --> 修改购物车列表 --> 订单确认 --> 地址列表
由于时间关系只做到这，剩下的除了支付功能其他的逻辑基本和前面的功能差不多。

``` bash
#数据库备份文件在 ./mongobackup/dump 里，数据库集合导出文件在./mongobackup/export 里，后端代码在 ./server 下

```

## Build Setup

``` bash

1. install dependencies -- npm install
2. 通过 mongorestore 或者 mongoimport 把数据导入到数据库，然后修改 ./server/routers/users.js， 确保数据库连接正确。
3. 启动 mongoDB
4. 启动后台 node 服务 -- cd ./server, node bin/www
5. 启动前端 vue 项目 -- ./, npm start
```