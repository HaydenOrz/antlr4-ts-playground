# antlr4-ts-playground

<br/>

## 安装 & 使用
1. 下载本仓库
```shell
git clone git@github.com:HaydenOrz/antlr4-ts-playground.git
```
2. 安装依赖
```shell
pnpm i
```

<br/>
<br/>

## packages/parser-core
### CalculatorParser
#### calculate 方法
+ 功能： 一个简易的计算器, 只支持加法和乘法，不支持括号运算
+ 实现方式： antlr4 visitor

<br/>

### JsonParser
#### translate2Xml 方法
+ 功能：将 json 转化为 xml
+ 实现方式：antlr4 listener

<br/>

### FlinkParser
#### split
+ 功能：将一段 flinkSql 切分成一段段的语句
+ 实现方式：antlr4 listener

#### getSuggestionListAtSyntaxErrors
+ 功能：分析 sql 中的语法错误信息，并在错误的位置提供输入建议
+ 实现方式：antlr4 listener、 ANTLRErrorListener、antlr4-c3

<br/>
