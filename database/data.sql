-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for arms
DROP DATABASE IF EXISTS `arms`;
CREATE DATABASE IF NOT EXISTS `arms` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `arms`;

-- Dumping structure for table arms.log
DROP TABLE IF EXISTS `log`;
CREATE TABLE IF NOT EXISTS `log` (
  `ID_LOG` bigint(20) NOT NULL AUTO_INCREMENT,
  `DTM_CREATE` datetime DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  `MESSAGE` text,
  `USER_ID` varchar(100) DEFAULT NULL,
  `IP` varchar(100) DEFAULT NULL,
  `MAC` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_LOG`)
) ENGINE=InnoDB AUTO_INCREMENT=3979 DEFAULT CHARSET=latin1;

-- Dumping data for table arms.log: ~2,488 rows (approximately)
DELETE FROM `log`;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` (`ID_LOG`, `DTM_CREATE`, `STATUS`, `MESSAGE`, `USER_ID`, `IP`, `MAC`) VALUES
	(1491, '2018-04-03 15:52:48', 1, 'LOGIN SUCCESS', 'user', '0.0.0.0', 'abc.abc.abc'),
	
	(3978, '2018-09-04 12:38:44', 1, 'LOGIN SUCCESS', 'user', '0.0.0.0', 'abc.abc.abc');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;

-- Dumping structure for table arms.menu
DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `ID` varchar(50) NOT NULL,
  `ACTIVE` int(11) NOT NULL,
  `LEVEL_MENU` int(11) NOT NULL,
  `MENU_NAME` varchar(50) NOT NULL,
  `PARENT_ID` varchar(50) NOT NULL,
  `PATH_NAME` varchar(50) NOT NULL,
  `CLASS_STYLE` varchar(100) NOT NULL,
  `MENU_TYPE` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table arms.menu: ~5 rows (approximately)
DELETE FROM `menu`;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`ID`, `ACTIVE`, `LEVEL_MENU`, `MENU_NAME`, `PARENT_ID`, `PATH_NAME`, `CLASS_STYLE`, `MENU_TYPE`) VALUES
	('D0001', 1, 1, 'Graphs', '', '/graphs', 'fa fa-lg fa-fw fa-bar-chart-o', 1),
	('D00011', 1, 2, 'ChartJs', 'D0001', '/graphs/chart-js', 'fa fa-lg fa-fw fa-exchange', 2),
	('D0002', 1, 1, 'Tables', '', '/tables', 'fa fa-lg fa-fw fa-table', 1),
	('D00021', 1, 2, 'Data Tables', 'D0002', '/tables/datatables', 'fa fa-lg fa-fw fa-table', 1),
	('D0003', 1, 1, 'Maps', '', '/maps', 'fa fa-lg fa-fw fa-map-marker', 2),
	('M0004', 1, 1, 'Management', '', '/home', 'fa fa-lg fa-fw fa-cog', 1),
	('M0005', 1, 2, 'User Management', 'M0004', '/user-management', '', 2),
	('M0006', 1, 2, 'Role Management', 'M0004', '/role-management', '', 2),
	('M0007', 1, 1, 'Latihan', '', '/latihan', 'fa fa-lg fa-fw fa-asterisk', 2),
	('M0008', 1, 1, 'Request', '', '/request', 'fa fa-lg fa-fw fa-asterisk', 2);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Dumping structure for table arms.menu_access
DROP TABLE IF EXISTS `menu_access`;
CREATE TABLE IF NOT EXISTS `menu_access` (
  `ID` int(11) NOT NULL,
  `DESCRIPTION` varchar(100) NOT NULL,
  `DEPARTMENT` varchar(100) NOT NULL,
  `PHYSICAL_DELIVERY_OFFICE_NAME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table arms.menu_access: ~2 rows (approximately)
DELETE FROM `menu_access`;
/*!40000 ALTER TABLE `menu_access` DISABLE KEYS */;
INSERT INTO `menu_access` (`ID`, `DESCRIPTION`, `DEPARTMENT`, `PHYSICAL_DELIVERY_OFFICE_NAME`) VALUES
	(1, 'Admin', 'Admin', ''),
	(3, 'Petugas Pelaporan', 'Petugas Pelaporan', '');
/*!40000 ALTER TABLE `menu_access` ENABLE KEYS */;

-- Dumping structure for table arms.menu_role
DROP TABLE IF EXISTS `menu_role`;
CREATE TABLE IF NOT EXISTS `menu_role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ACCESS_ID` varchar(50) NOT NULL,
  `MENU_ID` varchar(50) NOT NULL,
  `PARENT_ID` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

-- Dumping data for table arms.menu_role: ~18 rows (approximately)
DELETE FROM `menu_role`;
/*!40000 ALTER TABLE `menu_role` DISABLE KEYS */;
INSERT INTO `menu_role` (`ID`, `ACCESS_ID`, `MENU_ID`, `PARENT_ID`) VALUES
	(8, '001', 'M0001', ''),
	(9, '001', 'M0002', 'M0001'),
	(10, '001', 'M0004', ''),
	(11, '001', 'M0005', 'M0004'),
	(12, '001', 'M0006', 'M0004'),
	(13, '001', 'M0012', 'M0004'),
	(14, '001', 'M0014', 'M0004'),
	(15, '001', 'M0015', 'M0004'),
	(16, '002', 'M0001', ''),
	(17, '002', 'M0002', 'M0001'),
	(18, '002', 'M0009', ''),
	(19, '002', 'M0013', 'M0009'),
	(20, '002', 'M0016', 'M0009'),
	(26, 'user', 'D0001', '');
/*!40000 ALTER TABLE `menu_role` ENABLE KEYS */;

-- Dumping structure for table arms.m_user_management
DROP TABLE IF EXISTS `m_user_management`;
CREATE TABLE IF NOT EXISTS `m_user_management` (
  `LOGIN_ID` varchar(50) NOT NULL,
  `NAME_USER` varchar(100) DEFAULT NULL,
  `POSITION_ID` int(11) DEFAULT NULL,
  `TELEPHONE` varchar(20) DEFAULT NULL,
  `NIP` varchar(30) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  `CREATED_DATE` datetime DEFAULT NULL,
  `CREATED_BY` varchar(255) DEFAULT NULL,
  `MODIFY_DATE` datetime DEFAULT NULL,
  `MODIFY_BY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`LOGIN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table arms.m_user_management: ~3 rows (approximately)
DELETE FROM `m_user_management`;
/*!40000 ALTER TABLE `m_user_management` DISABLE KEYS */;
INSERT INTO `m_user_management` (`LOGIN_ID`, `NAME_USER`, `POSITION_ID`, `TELEPHONE`, `NIP`, `PASSWORD`, `STATUS`, `CREATED_DATE`, `CREATED_BY`, `MODIFY_DATE`, `MODIFY_BY`) VALUES
	('001', 'admin', 1, '021-9999999', '0100100101', 'admin', 0, NULL, NULL, NULL, NULL),
	('1', 'coba', 1, '121212121', 'dashboardAdmin', 'P@ssword123', 0, NULL, NULL, NULL, NULL),
	('user', 'user', 2, '098776323232', '121312323', 'user', 0, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `m_user_management` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
