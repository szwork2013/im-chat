CREATE TABLE `tb_msg` (
	`id` CHAR(32) NOT NULL COMMENT '程序生成uuid',
	`date` CHAR(13) NOT NULL COMMENT 'js时间戳',
	`content` VARCHAR(1000) NOT NULL,
	`sender` VARCHAR(10) NOT NULL,
	`receiver` VARCHAR(10) NOT NULL,
	`isread` VARCHAR(1) NOT NULL COMMENT '0 未读  1已读',
	INDEX `id` (`id`)
)
COLLATE='gbk_chinese_ci'
ENGINE=InnoDB
;
