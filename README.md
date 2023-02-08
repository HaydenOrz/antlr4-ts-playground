# antlr4-ts-playground

## 安装
1. 下载本仓库
```shell
git clone git@github.com:HaydenOrz/antlr4-ts-playground.git
```
2. 安装依赖
```
yarn
```

## 运行
1. 启动
```
yarn dev
```
2. 运行
```
node ./dist/demo/xxx.js
```

## demo
### calculate
一个简易的计算器只支持加法和乘法，不支持括号运算，使用 antlr4 visitor 实现

### json2Xml
将 json 转化为 xml，使用 antlr4 listener 实现

### splitFlinkSql
将一段 flinkSql 切分成一段段的语句， 使用 antlr4 listener 实现