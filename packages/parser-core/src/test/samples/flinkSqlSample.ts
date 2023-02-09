export const flinkSql1 = `
-- ******* 第1段 *********
SELECT * FROM AA;


-- ******* 第2段 *********
SHOW TABLES; 


-- ******* 第3段 *********
DROP TABLE BB; -- 第3段


-- ******* 第4段 *********
CREATE TABLE USER_LOG
(
    CUST_NO            BIGINT,
    CLICK_BANNER_FREQ  DECIMAL,
    CLICK_ARTICLE_FREQ DECIMAL,
    CLICK_PUSH         BIGINT,
    BIZ_DATE           BIGINT
) WITH (
      TYPE = 'KAFKA',
      BOOTSTRAPSERVERS = '172.16.100.109:9092',
      OFFSETRESET = 'LATEST',
      TOPIC = 'TEST1-1-2',
      CHARSETNAME = 'UTF-8',
      TIMEZONE = 'ASIA/SHANGHAI',
      UPDATEMODE = 'APPEND',
      ENABLEKEYPARTITIONS = 'FALSE',
      TOPICISPATTERN = 'FALSE',
      ZOOKEEPERQUORUM = '172.16.100.109:2181/KAFKA',
      PARALLELISM = '1'
      );


-- ******* 第5段 *********
CREATE TABLE SIDE1
(
    CUST_NO            BIGINT,
    CLICK_BANNER_FREQ  DECIMAL,
    CLICK_ARTICLE_FREQ DECIMAL,
    CLICK_PUSH         BIGINT,
    BIZ_DATE           BIGINT,
    PRIMARY KEY (CUST_NO),
    PERIOD FOR SYSTEM_TIME
) WITH (
      TYPE = 'ORACLE',
      URL = 'JDBC:ORACLE:THIN:@172.16.100.243:1521:ORCL',
      USERNAME = 'TIEZHU',
      PASSWORD = '******',
      TABLENAME = 'TEST_2',
      PARALLELISM = '1',
      BATCHSIZE = '1',
      BATCHWAITINTERVAL = '10000',
      ALLREPLACE = 'FALSE',
      SCHEMA = 'SHIXIAO',
      CACHE = 'LRU',
      CACHETTLMS = '60000000',
      CACHESIZE = '10000',
      ASYNCTIMEOUT = '60000',
      PARALLELISM = '1',
      ASYNC.SIDE.CLIENTSHARE='TRUE'
      );

-- ******* 第6段 *********
CREATE TABLE SIDE2
(
    CUST_NO            BIGINT,
    CLICK_BANNER_FREQ  DECIMAL,
    CLICK_ARTICLE_FREQ DECIMAL,
    CLICK_PUSH         BIGINT,
    BIZ_DATE           BIGINT,
    PRIMARY KEY (CUST_NO),
    PERIOD FOR SYSTEM_TIME
) WITH (
      TYPE = 'ORACLE',
      URL = 'JDBC:ORACLE:THIN:@172.16.100.243:1521:ORCL',
      USERNAME = 'TIEZHU',
      PASSWORD = '******',
      TABLENAME = 'TEST_3',
      PARALLELISM = '1',
      BATCHSIZE = '1',
      BATCHWAITINTERVAL = '10000',
      ALLREPLACE = 'FALSE',
      SCHEMA = 'SHIXIAO',
      CACHE = 'LRU',
      CACHETTLMS = '60000000',
      CACHESIZE = '10000',
      ASYNCTIMEOUT = '60000',
      PARALLELISM = '1',
      ASYNC.SIDE.CLIENTSHARE='TRUE'
      );


-- ******* 第7段 *********
CREATE VIEW VIEWTABLE AS
SELECT ST.CUST_NO,
       MST.CLICK_BANNER_FREQ,
       MST2.CLICK_ARTICLE_FREQ,
       ST.CLICK_PUSH,
       ST.BIZ_DATE
FROM USER_LOG ST
         LEFT JOIN
     SIDE1 MST
     ON ST.CUST_NO = MST.CUST_NO
         LEFT JOIN
     SIDE2 MST2
     ON ST.CUST_NO = MST2.CUST_NO;


-- ******* 第8段 *********
CREATE TABLE SINK2
(
    CUST_NO            BIGINT,
    CLICK_BANNER_FREQ  DECIMAL,
    CLICK_ARTICLE_FREQ DECIMAL,
    CLICK_PUSH         DECIMAL,
    BIZ_DATE           BIGINT
) WITH (
      TYPE = 'CONSOLE'
      );


-- ******* 第9段 *********      
INSERT
INTO SINK2
SELECT CUST_NO,
       CLICK_BANNER_FREQ,
       CLICK_ARTICLE_FREQ,
       CLICK_PUSH,
       BIZ_DATE
FROM VIEWTABLE;
`

export const flinkSql2 = 
`CREATE  (
    window_time BIGINT,
    topic STRING,
    bid_word_count BIGINT
  ) WITH (
    ""
  );
`