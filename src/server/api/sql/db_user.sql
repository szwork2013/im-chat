CREATE TABLE `db_user` (
	`id` MEDIUMINT(9) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`password` VARCHAR(50) NOT NULL,
	`note` VARCHAR(100) NOT NULL,
	INDEX `id` (`id`)
)
COMMENT='用户表'
COLLATE='gbk_chinese_ci'
ENGINE=InnoDB
AUTO_INCREMENT=3
;
