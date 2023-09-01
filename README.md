# antlr4-ts-playground

<br/>

## 安装 & 使用

1. 下载

```shell
git clone git@github.com:HaydenOrz/antlr4-ts-playground.git
```

2. 安装依赖

```shell
pnpm install
```

<br/>

## packages/parser-core

### CalculatorParser

#### calculate 方法

- 功能： 一个简易的计算器,
  - 支持加减乘除运算
  - 支持括号运算
  - 乘除运算优先级高于加减运算
- 实现方式： antlr4 visitor

<br/>

### JsonParser

#### translate2Xml 方法

- 功能：将 json 转化为 xml
- 实现方式：antlr4 listener

<br/>

### FlinkParser

#### split

- 功能：将 flinkSql 按语句切分
- 实现方式：antlr4 listener

#### getSuggestionListAtSyntaxErrors

- 功能：分析 sql 中的语法错误信息，并在错误的位置提供输入建议
- 实现方式：antlr4 listener、 ANTLRErrorListener、antlr4-c3

### SelectStatementParser

- 功能：解析简单的 select sql 语句

## packages/monaco-languages

- 实现 flinkSQL 的 `高亮` 、`自动补全`、`飘红提示功能`
- 引入 packages/parser-core 中的 flinkParser

## packages/web-editor

- 一个简单的 web-editor 的 demo
