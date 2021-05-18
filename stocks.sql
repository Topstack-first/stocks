/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.14-MariaDB : Database - stocks
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `briefcases` */

DROP TABLE IF EXISTS `briefcases`;

CREATE TABLE `briefcases` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_number` int(11) NOT NULL DEFAULT 0,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ACTIVO',
  `product` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ticket` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `derivative` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lotaje` double(8,2) NOT NULL DEFAULT 0.00,
  `current_balance` double(8,2) NOT NULL DEFAULT 0.00,
  `investment` double(8,2) NOT NULL DEFAULT 0.00,
  `maintenance_margin` double(8,2) NOT NULL DEFAULT 0.00,
  `long_short` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'LONG',
  `open_price` double(8,2) NOT NULL DEFAULT 0.00,
  `goal` double(8,2) NOT NULL DEFAULT 0.00,
  `stop_lost` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'LOST',
  `operation_open_date` date NOT NULL DEFAULT '1900-01-01',
  `operation_close_date` date NOT NULL DEFAULT '1900-01-01',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `briefcases` */

insert  into `briefcases`(`id`,`order_number`,`state`,`product`,`ticket`,`derivative`,`lotaje`,`current_balance`,`investment`,`maintenance_margin`,`long_short`,`open_price`,`goal`,`stop_lost`,`operation_open_date`,`operation_close_date`,`created_at`,`updated_at`) values 
(1,12170243,'ACTIVO','Rough Rice Jul \'21','RICE','FT',2.00,3620.00,3640.00,3300.00,'SHORT',14.38,12.00,'15','2021-05-05','1900-01-01',NULL,NULL),
(2,12170171,'ACTIVO','Palladium Contract\r\n','/PA\r\n','CFDs Ounces\r\n',58.00,20288.40,17243.00,8621.70,'SHORT',2972.50,2700.00,'20','2021-05-05','1900-01-01',NULL,NULL),
(3,12165727,'ACTIVO','Goldman Sachs Group Inc (GS)','GS','EQ',21.00,7538.37,7310.31,0.00,'LONG',348.11,360.00,'20','2021-04-29','1900-01-01',NULL,NULL),
(4,12165726,'ACTIVO','UnitedHealth Group Incorporated (UNH)','UNH','EQ',17.00,7050.58,6708.03,0.00,'LONG',394.59,420.00,'20','2021-04-29','1900-01-01',NULL,NULL),
(5,12165725,'ACTIVO','US Dollar Index Futures - Jun 21 (DXM1)','DXM1','FT',3.00,6915.00,6270.00,5700.00,'LONG',90.58,92.00,'20','2021-04-29','1900-01-01',NULL,NULL),
(6,12165724,'ACTIVO','Gasoline RBOB Futures - Jun 21 (GPRM1)','GPRM1','FT',3.00,18885.60,18810.00,17100.00,'LONG',2.07,2.20,'20','2021-04-29','1900-01-01',NULL,NULL),
(7,12170240,'HOLD','US Soybean Oil Contract','SBOC','FT',3.00,5496.00,6450.00,5850.00,'SHORT',63.33,59.00,'15','2021-05-05','1900-01-01',NULL,NULL),
(8,12170168,'HOLD','Wheat May \'21','WM21','FT',4.00,6695.00,8360.00,7600.00,'SHORT',727.25,700.00,'20','2021-05-05','1900-01-01',NULL,NULL),
(9,12170165,'HOLD','Corn Jul \'21 (ZCN21)','ZCN21','FT',3.00,4768.50,5610.00,5100.00,'SHORT',696.88,660.00,'15','2021-05-05','1900-01-01',NULL,NULL);

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(4,'2021_05_11_145648_create_briefcases_table',1),
(5,'2021_05_11_150406_create_transactions_table',1),
(6,'2021_05_11_190727_create_users_table',1),
(7,'2021_05_12_144926_create_states_table',2),
(8,'2021_05_12_150654_create_request_types_table',3);

/*Table structure for table `request_types` */

DROP TABLE IF EXISTS `request_types`;

CREATE TABLE `request_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `request_types` */

insert  into `request_types`(`id`,`name`,`created_at`,`updated_at`) values 
(1,'Aumento Capital','2021-05-12 15:09:09','2021-05-12 15:09:09'),
(2,'Retiro Capital','2021-05-12 15:09:09','2021-05-12 15:09:09');

/*Table structure for table `states` */

DROP TABLE IF EXISTS `states`;

CREATE TABLE `states` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `states` */

insert  into `states`(`id`,`name`,`created_at`,`updated_at`) values 
(1,'ACTIVO','2021-05-12 15:05:42','2021-05-12 15:05:42'),
(2,'MERCADO','2021-05-12 15:05:42','2021-05-12 15:05:42'),
(3,'CERRADO','2021-05-12 15:05:42','2021-05-12 15:05:42'),
(4,'HOLD','2021-05-12 15:05:42','2021-05-12 15:05:42'),
(5,'VENDIDO','2021-05-12 15:05:42','2021-05-12 15:05:42');

/*Table structure for table `transactions` */

DROP TABLE IF EXISTS `transactions`;

CREATE TABLE `transactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `investor_id` int(11) NOT NULL DEFAULT 0,
  `request_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `application_date` date NOT NULL DEFAULT '1900-01-01',
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `amount` double(8,2) NOT NULL DEFAULT 0.00,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `beneficiary_account_number` int(11) NOT NULL DEFAULT 0,
  `beneficiary_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `beneficiary_bank_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `swift_bank` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `baneficiary_bank_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `funds_accreditation_date` date NOT NULL DEFAULT '1900-01-01',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `transactions` */

insert  into `transactions`(`id`,`investor_id`,`request_type`,`application_date`,`currency`,`amount`,`comment`,`beneficiary_account_number`,`beneficiary_address`,`beneficiary_bank_name`,`swift_bank`,`baneficiary_bank_address`,`funds_accreditation_date`,`created_at`,`updated_at`) values 
(1,0,'','1900-01-01','',0.00,'',0,'','','','','1900-01-01','2021-05-18 07:38:37','2021-05-18 07:38:37'),
(2,1,'sdfsdf','2021-05-05','sdfsdf',35345.00,'sfdgdf',3534,'fgsfdg','sdfgsdf','gsdfg','','1900-01-01','2021-05-18 08:59:54','2021-05-18 08:59:54');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `document_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `document_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `residence_country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `town` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `birthday` date NOT NULL DEFAULT '1900-01-01',
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user.jpg',
  `account_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `account_number` int(11) NOT NULL DEFAULT 0,
  `account_open_date` date NOT NULL DEFAULT '1900-01-01',
  `open_balance` double(8,2) NOT NULL DEFAULT 0.00,
  `account_balance` double(8,2) NOT NULL DEFAULT 0.00,
  `last_fund_date` date NOT NULL DEFAULT '1900-01-01',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `remember_token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`first_name`,`last_name`,`document_type`,`document_name`,`nation`,`residence_country`,`town`,`birthday`,`address`,`phone`,`email`,`photo`,`account_type`,`account_number`,`account_open_date`,`open_balance`,`account_balance`,`last_fund_date`,`password`,`remember_token`,`created_at`,`updated_at`) values 
(1,'admin','First','Last','','','','','','1900-01-01','','','topstack2020@gmail.com','user.jpg','',0,'1900-01-01',8123.45,16134.65,'1900-01-01','$2y$10$csqgj4UtOrGhmxoMws9mSus5LQTcOoTxPJsn99BvzY5nADejuHG7.','','2021-05-11 19:35:05','2021-05-11 19:35:05'),
(2,'user2','First','Last','','','','','','1900-01-01','','','topstack2020@gmail.com','user.jpg','',0,'1900-01-01',5555.55,22222.22,'1900-01-01','$2y$10$csqgj4UtOrGhmxoMws9mSus5LQTcOoTxPJsn99BvzY5nADejuHG7.','','2021-05-11 19:35:05','2021-05-11 19:35:05'),
(3,'aaa','aaaaaa','admin','sdfsdf','sdfsdfsdf','sdfsdf','sdf','','2021-05-12','sdfsdf','sdfsdf235','sdffsdf435','user.jpg','',54654345,'2021-05-19',353454.00,0.00,'2021-05-13','sdfsdf345','','2021-05-18 07:53:46','2021-05-18 07:53:46');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
