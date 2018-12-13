/*
Navicat MySQL Data Transfer

Source Server         : database1808
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : wanmei

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-12-13 15:07:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `gools`
-- ----------------------------
DROP TABLE IF EXISTS `gools`;
CREATE TABLE `gools` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `price` float(7,2) unsigned NOT NULL,
  `urls` varchar(9999) NOT NULL,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gools
-- ----------------------------
INSERT INTO `gools` VALUES ('1', 'SteelSeries赛睿 Rival 700 有线游戏鼠标rgb幻彩呼吸灯', '629.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-25/50f84bb2a333483e9e9d2dfaf228dacb.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/aa2e62c7ae6249d9a245efe1f0465638.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/9b9e53ee1dbc43e080b042d2f73444d3.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/a9641b7078b7469d874f1538c6a9e876.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-20/321e90c6749c4ee2806dc475df3a7002_160.jpg');
INSERT INTO `gools` VALUES ('2', 'steelseries/赛睿 Arctis 7寒冰7 头戴式无线游戏耳机麦', '1349.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-20/fe969e581d2d45719977be34c881e9ad.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-20/724b02ae474643588116cc566166bafa.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-20/bb3cfb71b3e045c292acffff68419e8f.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-25/b19d1b26b1134dab954e63ac927c38e3_160.jpg');
INSERT INTO `gools` VALUES ('3', 'teelseries/赛睿 Arctis Pro 寒冰 Pro 头戴式 游戏耳机耳麦', '1499.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-26/18fbc393969640259691fcbcd54915e1.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/18fbc393969640259691fcbcd54915e1.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/279ecc7a5f9a4d91997189c28f282b75.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/eb9a7f9a87ae426fbde97dce23cfc645.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-26/e280710b9faa4432b4e7f951103b5c80_160.jpg');
INSERT INTO `gools` VALUES ('4', '赛睿 rival 600 有线游戏鼠标rgb宏编程双传感防滑侧裙配重', '659.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-26/1e9b7cd13eca444eab7a8b3df3696482.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/4e0d5a9fdaa741dbb3d4df9ec9ef5cc8.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/20b8a3e716b54280835362ce10c0cd8d.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-26/d4dca05806744e368b07e1bd45041933_160.jpg');
INSERT INTO `gools` VALUES ('5', 'SteelSeries赛睿 Rival 700 有线游戏鼠标rgb幻彩呼吸灯', '699.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-25/50f84bb2a333483e9e9d2dfaf228dacb.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/aa2e62c7ae6249d9a245efe1f0465638.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/9b9e53ee1dbc43e080b042d2f73444d3.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/a9641b7078b7469d874f1538c6a9e876.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-20/1f081573f16f4c89af51b29931acec93_160.jpg');
INSERT INTO `gools` VALUES ('6', 'SteelSeries赛睿 Rival 700 有线游戏鼠标rgb幻彩呼吸灯', '199.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-20/fe969e581d2d45719977be34c881e9ad.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-20/724b02ae474643588116cc566166bafa.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-20/bb3cfb71b3e045c292acffff68419e8f.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-18/da24ca0d6a0843d086f8c7c79e125975_160.jpg');
INSERT INTO `gools` VALUES ('7', '赛睿 Rival 300s 有线RGB游戏鼠标  csgo', '319.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-26/18fbc393969640259691fcbcd54915e1.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/18fbc393969640259691fcbcd54915e1.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/279ecc7a5f9a4d91997189c28f282b75.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-26/eb9a7f9a87ae426fbde97dce23cfc645.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-19/15b0aefece3543b8be54b011ad64b5f9_160.jpg');
INSERT INTO `gools` VALUES ('8', '赛睿 Apex M500 专业游戏背光机械键盘有线104cherry樱... ', '819.00', 'http://img.shop.wanmei.com/upload/product_show/2018-04-25/50f84bb2a333483e9e9d2dfaf228dacb.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/aa2e62c7ae6249d9a245efe1f0465638.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/9b9e53ee1dbc43e080b042d2f73444d3.jpg,http://img.shop.wanmei.com/upload/product_show/2018-04-25/a9641b7078b7469d874f1538c6a9e876.jpg', 'http://img.shop.wanmei.com/upload/product/2018-04-23/e1dde6d7d1e849d7b735a5436b1e5638_160.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(13) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `uid` varchar(18) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('7', '13358425565', '发给', '96e79218965eb72c92a549dd5a330112', '111111111111111111', '2018-12-11 19:34:01');
INSERT INTO `user` VALUES ('8', '13358425564', '发给', '96e79218965eb72c92a549dd5a330112', '111111111111111111', '2018-12-11 19:35:17');
INSERT INTO `user` VALUES ('9', '13358425563', '发给', '96e79218965eb72c92a549dd5a330112', '111111111111111111', '2018-12-11 19:35:49');
INSERT INTO `user` VALUES ('10', '13888888889', '发给', '96e79218965eb72c92a549dd5a330112', '111111111111111111', '2018-12-11 19:37:03');
INSERT INTO `user` VALUES ('11', '13888888887', '发给', '96e79218965eb72c92a549dd5a330112', '111111111111111111', '2018-12-11 19:39:17');
INSERT INTO `user` VALUES ('12', '12345678910', '发给', '96e79218965eb72c92a549dd5a330112', '111111111111111111', '2018-12-11 21:30:30');
INSERT INTO `user` VALUES ('13', '17862870971', '发给', '8d9b70f4c38800169ce5070fba9ef6a3', '', '2018-12-13 11:36:16');
