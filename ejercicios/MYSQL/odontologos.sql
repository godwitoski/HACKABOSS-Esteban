CREATE DATABASE  IF NOT EXISTS `odontologos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `odontologos`; 
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: odontologos
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `cobertura`
--

DROP TABLE IF EXISTS `cobertura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cobertura` (
  `id_cobertura` int NOT NULL,
  `id_obrasocial` int NOT NULL,
  `id_practica` int NOT NULL,
  `cobertura` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id_cobertura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cobertura`
--

LOCK TABLES `cobertura` WRITE;
/*!40000 ALTER TABLE `cobertura` DISABLE KEYS */;
INSERT INTO `cobertura` VALUES (1,125,1233,15),(2,125,6654,18),(3,125,4698,23),(4,125,6566,50),(5,125,1456,50),(6,125,9841,100),(7,125,4457,100),(8,133,1233,25),(9,133,6654,23),(10,133,4698,100),(11,133,6566,25),(12,133,1456,50),(13,133,9841,50),(14,133,4457,25),(15,406,1233,70),(16,406,6654,80),(17,406,4698,60),(18,406,6566,50),(19,406,1456,100),(20,406,9841,100),(21,406,4457,25),(22,771,1233,10),(23,771,6654,25),(24,771,4698,25),(25,771,6566,50),(26,771,1456,50),(27,771,9841,100),(28,771,4457,100),(29,223,1233,50),(30,223,6654,50),(31,223,4698,50),(32,223,6566,50),(33,223,1456,80),(34,223,9841,80),(35,223,4457,100),(36,694,1233,30),(37,694,6654,25),(38,694,4698,25),(39,694,6566,25),(40,694,1456,50),(41,694,9841,50),(42,694,4457,100);
/*!40000 ALTER TABLE `cobertura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultas`
--

DROP TABLE IF EXISTS `consultas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultas` (
  `id_consulta` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `id_paciente` int NOT NULL,
  `id_practica` int NOT NULL,
  `id_odontologo` int NOT NULL,
  PRIMARY KEY (`id_consulta`),
  UNIQUE KEY `id_consulta_UNIQUE` (`id_consulta`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultas`
--

LOCK TABLES `consultas` WRITE;
/*!40000 ALTER TABLE `consultas` DISABLE KEYS */;
INSERT INTO `consultas` VALUES (123,'2021-12-12',917,1233,6831),(124,'2022-06-25',1505,6654,1283),(125,'2021-07-30',603,1233,6831),(126,'2021-08-21',917,4698,6831),(127,'2021-08-05',129,4698,1197),(128,'2021-08-15',603,6566,1283),(129,'2021-09-03',103,1233,1128),(130,'2021-09-10',917,9841,6831),(131,'2021-10-12',966,4457,1197),(132,'2021-11-03',917,4457,1283),(133,'2021-11-06',1505,4698,1283),(134,'2021-11-10',917,4698,6831),(135,'2021-11-10',603,6566,6831),(136,'2021-11-10',405,9841,1128);
/*!40000 ALTER TABLE `consultas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obrasocial`
--

DROP TABLE IF EXISTS `obrasocial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `obrasocial` (
  `id_obrasocial` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_obrasocial`),
  UNIQUE KEY `id_obrasocial_UNIQUE` (`id_obrasocial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obrasocial`
--

LOCK TABLES `obrasocial` WRITE;
/*!40000 ALTER TABLE `obrasocial` DISABLE KEYS */;
INSERT INTO `obrasocial` VALUES (125,'PAMI','Av. Gral. Paz 215','244556'),(133,'APROSS','Av. Figueroa Alcorta 566','332122'),(233,'PARTICULAR',NULL,NULL),(406,'OSPIA','Av. Colon 456','235568'),(694,'DASPU','Av. Valparaiso 368','336654'),(771,'OSTEL','25 de Mayo 120','246689');
/*!40000 ALTER TABLE `obrasocial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `odontologos`
--

DROP TABLE IF EXISTS `odontologos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `odontologos` (
  `id_odontologo` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_odontologo`),
  UNIQUE KEY `id_odontologo_UNIQUE` (`id_odontologo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `odontologos`
--

LOCK TABLES `odontologos` WRITE;
/*!40000 ALTER TABLE `odontologos` DISABLE KEYS */;
INSERT INTO `odontologos` VALUES (1128,'Perez','Martin','Colon 3566','4806654'),(1197,'Mariani','Ana','Av. Patria 511','4529983'),(1283,'Matzin','Juan','Juan B. Justop 1255','4718855'),(6831,'Udzick','Jose','Belgrano 456 Dto E','4223566');
/*!40000 ALTER TABLE `odontologos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes` (
  `id_paciente` int NOT NULL,
  `dni` varchar(45) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `id_obrasocial` int NOT NULL,
  PRIMARY KEY (`id_paciente`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (103,'23129486','Jose','Torres','Lamadrid 306',125),(129,'19465886','Juan','Palacios','Jjuy 3506',223),(405,'19668910','Marisa','Anchorena','Colon 405 dto3',694),(603,'63316876','Beatriz','Moretti','Anacreonte 1122',771),(917,'33113216','Martin','Garcia','Urquiza 2566',125),(966,'17455128','Dario','Sosa','Baigorri 53',133),(1505,'18495688','Andrea','Zarate','Estados Unidos 36',406);
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practicas`
--

DROP TABLE IF EXISTS `practicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `practicas` (
  `id_practica` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id_practica`),
  UNIQUE KEY `id_practica_UNIQUE` (`id_practica`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practicas`
--

LOCK TABLES `practicas` WRITE;
/*!40000 ALTER TABLE `practicas` DISABLE KEYS */;
INSERT INTO `practicas` VALUES (1233,'limpieza dental',25),(1456,'arreglo simple',35),(4457,'cirugia',420),(4698,'trat. de conducto simple',150),(6566,'trat. de conducto doble',235),(6654,'extraccion',70),(9841,'consulta',15);
/*!40000 ALTER TABLE `practicas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-09 14:32:32
