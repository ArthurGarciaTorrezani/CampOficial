-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: testetutu
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `path` (`path`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,'d56d33181e4a65e7ef54de375b0a31c2.jpg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\d56d33181e4a65e7ef54de375b0a31c2.jpg','2024-04-21 15:05:13','2024-04-21 15:05:13'),(2,'9f8f387df709dad78805ac7e7da3199d.jpg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\9f8f387df709dad78805ac7e7da3199d.jpg','2024-04-21 15:06:25','2024-04-21 15:06:25'),(3,'fe44d1bbc87b2971ca97df0e9ffc24d2.jpg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\fe44d1bbc87b2971ca97df0e9ffc24d2.jpg','2024-04-21 15:07:15','2024-04-21 15:07:15'),(4,'62c471702c18ce4dcde13ce9493a2f48.jpg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\62c471702c18ce4dcde13ce9493a2f48.jpg','2024-04-22 17:18:44','2024-04-22 17:18:44'),(5,'601736d93603d3854bd38cb7a7ebc286.jpeg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\601736d93603d3854bd38cb7a7ebc286.jpeg','2024-04-22 17:20:20','2024-04-22 17:20:20'),(6,'3ae944cc869e9906f405c6a223b5de85.jpeg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\3ae944cc869e9906f405c6a223b5de85.jpeg','2024-04-22 17:26:59','2024-04-22 17:26:59'),(7,'e06941f3907f8e434e61c645887e9bcc.jpeg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\e06941f3907f8e434e61c645887e9bcc.jpeg','2024-04-22 17:32:02','2024-04-22 17:32:02'),(8,'ec38bfb188d3742fda698fb69aed146a.jpg','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\ec38bfb188d3742fda698fb69aed146a.jpg','2024-04-22 17:34:06','2024-04-22 17:34:06'),(9,'1e95dcd06f399cc67c75a6160ba3b524.png','C:\\Users\\Arthur\\Documents\\GitHub\\CampOficial\\src\\public\\img\\uploads\\1e95dcd06f399cc67c75a6160ba3b524.png','2024-07-01 16:47:28','2024-07-01 16:47:28');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240421145701-create-teams.js'),('20240421145810-create-users.js'),('20240421150015-create-files.js'),('20240421150103-add-avatar-fields-to-user.js'),('20240421150205-add-captain-fields-to-team.js'),('20240421150240-add-captain-name.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `amountplayers` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `captain_id` int DEFAULT NULL,
  `captain_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teams_captain_id_foreign_idx` (`captain_id`),
  CONSTRAINT `teams_captain_id_foreign_idx` FOREIGN KEY (`captain_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (7,'qwerqw',1,'2024-04-26 17:36:56','2024-04-26 17:36:56',3,'1'),(8,'qwerqwaaa',1,'2024-04-26 17:37:04','2024-04-26 17:37:04',3,'1'),(9,'asdfafaa',5,'2024-04-26 17:39:38','2024-04-26 17:39:48',3,'1'),(10,'testeeee21423',3,'2024-07-01 15:17:29','2024-07-01 15:17:44',6,'jailson');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `ra` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `team_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `avatar_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ra` (`ra`),
  UNIQUE KEY `email` (`email`),
  KEY `team_id` (`team_id`),
  KEY `users_avatar_id_foreign_idx` (`avatar_id`),
  CONSTRAINT `users_avatar_id_foreign_idx` FOREIGN KEY (`avatar_id`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'123','123','torrezaniarthur@gmail.com1','$2a$08$MC/PX0CJAHDF8MCx4AINPe8FAVylRVLHPK7Pqk7.CcJQiWoGqyFga',10,'2024-04-21 15:03:42','2024-07-01 16:47:28',9),(2,'123','123456','12345@gmail.com','$2a$08$xnXJS36ydCJ3wDlPL2n/.ujNYr9moUChLbK7etFbVAPaex35lnBPy',10,'2024-04-21 15:08:51','2024-07-01 15:17:40',NULL),(3,'1','1','torrezaniarthur@gmail.com','$2a$08$OEMNL2PHdZy4uXg7XTyniu7wmtFFnLdzaKbx8ntgznXkLk0O23Tau',9,'2024-04-22 16:07:51','2024-04-26 17:39:38',8),(4,'aaa','aaa','torrezaniarthur@gmail.coma','$2a$08$tyy4oJqny/1q4e9SVPOcaeyjrnubUl8X2qZTwK94rwkfg39MGURvm',9,'2024-04-24 00:45:11','2024-04-26 17:39:43',NULL),(5,'teste','teste','torrezaniarthur@gmail.comteste','$2a$08$EQgEs8p9BFqVIXUaUbaKzeiIpUmYTCiRLAmlit4Cu3JOG10jFtju2',9,'2024-04-26 17:10:47','2024-04-26 17:39:48',NULL),(6,'jailson','9999','jailson@gmail.com','$2a$08$5l2fSOORnGCAzZugeOTbQOPCxHp6pEhj2Y5BO2OFaslEoD3TT8OHS',10,'2024-07-01 15:17:03','2024-07-01 15:17:29',NULL),(8,'yuyu','yuyu','yuyu@gmail.com','$2a$08$/bW.SeF2dJn9pA2zh/wUOesJdgN4VCoHZDWu5Ni9dOALjeUpCEv7.',NULL,'2024-07-01 15:55:19','2024-07-01 15:55:19',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'testetutu'
--

--
-- Dumping routines for database 'testetutu'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 16:54:43
