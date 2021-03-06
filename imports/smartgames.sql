-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: smartgames
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id_game` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `value` double NOT NULL,
  `image` varchar(255) NOT NULL,
  `discount` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id_game`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Overwatch','Overwatch é um jogo de tiro em equipe que conta com um elenco diversificado de heróis poderosíssimos. Viaje pelo mundo, monte uma equipe e dispute objetivos em combates 6v6 de tirar o fôlego.\n',160,'https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182'),(2,'Spider-Man','Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens, mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.\n',116.9,'https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182'),(3,'God Of War','É um novo começo para Kratos. Vivendo como um homem longe da sombra dos deuses, ele se aventura pelas selvagens florestas nórdicas com seu filho Atreus, lutando para cumprir uma missão profundamente pessoal. O Santa Monica Studio e o diretor de criação Cory Barlog lançam um novo começo para um dos personagens mais conhecidos dos jogos. Vivendo como um homem, fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e a uma segunda oportunidade de ser pai. Junto ao seu filho, Atreus, os dois vão se aventurar pelas selvagens florestas nórdicas e lutar para cumprir uma missão profundamente pessoal.\n',69.9,'https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182'),(4,'Ghost of Tsushima','No final do século XIII, o império mongol devastou nações inteiras durante sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo o que está entre o Japão continental e uma enorme frota invasora mongol comandada pelo implacável e sagaz general Khotun Khan. À medida que a ilha queima na esteira da primeira onda do assalto mongol, o guerreiro samurai Jin Sakai mantém-se como um dos último membros sobreviventes de seu clã. Ele está decidido a proteger seu povo e recuperar seu lar, independente do que aconteça, custe o que custar. Será preciso romper com as tradições que o tornaram um guerreiro para forjar um novo caminho do Fantasma e declarar uma guerra incomum pela liberdade de Tsushima.\n',249,'https://upload.wikimedia.org/wikipedia/pt/thumb/d/dc/Ghost_of_Tsushima_capa.png/270px-Ghost_of_Tsushima_capa.png',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182'),(5,'Tom Clancy\'s Splinter Cell: Double Agent','Vivencie a tensão incessante e os dilemas da vida de um agente duplo. Minta. Mate. Prejudique. Traia. Tudo para proteger os inocentes. Até onde você iria para ganhar a confiança do inimigo? Como o agente secreto Sam Fisher, você deve se infiltrar num grupo terrorista cruel e destruí-lo internamente. Você precisará ponderar muito bem as consequências dos seus atos. Mate terroristas demais e estragará seu disfarce. Hesite e milhões morrerão. Faça o que for preciso para completar a missão, mas procure sobreviver.\n',36,'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwb3dccb35/images/large/56c4948a88a7e300458b482c.jpg?sw=341&sh=450&sm=fit',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182'),(6,'God of War III','Kratos está devolta, ainda com a vingança pulsando forte em suas veias. O Olimpo e seus deuses é o seu alvo, não importa o preço que o Deus da Guerra irá pagar. Neste terceiro e épico capítulo você irá controlar Kratos através de batalhas celestiais contra os deuses mais poderosos de todo o Olimpo – inclusive voltará ao inferno e acertar as contas com seu pai colossal e poderoso, Kronos. Deuses como Hermes e Hades não serão páreo para seu poder, os olhos ardentes daquele que busca vingança que nem a mais cruel das mortes pode deter. Enfrente desafios arrasadores e enfrente monstros poderosos como a Quimera, o Cérberus e muitos outros seres místicos que estão ali apenas para acabar com sua existência. Não pare por nada até enfrentar o deus dos deuses: Zeus, e acabar com isso de uma vez por todas.\n',60,'https://s3.amazonaws.com/comparegame/thumbnails/41421/large.jpg',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182'),(7,'Watch Dogs 2','Junte-se ao Dedsec, um grupo notório de hackers, para executar o maior hack da história; Derrube o ctOS 2.0, um sistema operacional invasivo que está sendo usado por um gênio do crime para monitorar e manipular os cidadãos em uma escala massiva.\n',249,'https://s3.amazonaws.com/comparegame/thumbnails/42209/large.jpg',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182'),(8,'Batman arkham city','Batman: Arkham City é um jogo eletrônico de Ação-Aventura e Stealth, baseado na série de quadrinhos Batman da DC Comics. O jogo é distribuído para: PlayStation 3, Xbox 360 e Microsoft Windows. Foi desenvolvido pela Rocksteady Studios e foi publicado pela Warner Bros. Interactive Entertainment e DC Entertainment.\n',30,'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f0/Batman_arkham_city_logo.jpg/200px-Batman_arkham_city_logo.jpg',0,'2021-07-21 20:27:25.499182','2021-07-21 20:27:25.499182');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_platforms_platforms`
--

DROP TABLE IF EXISTS `games_platforms_platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games_platforms_platforms` (
  `gamesIdGame` int NOT NULL,
  `platformsIdPlatform` int NOT NULL,
  PRIMARY KEY (`gamesIdGame`,`platformsIdPlatform`),
  KEY `IDX_81fb8b9afb8a44ee071010cfcf` (`gamesIdGame`),
  KEY `IDX_fdb9cd753c5a3a6f38e6c2f739` (`platformsIdPlatform`),
  CONSTRAINT `FK_81fb8b9afb8a44ee071010cfcf5` FOREIGN KEY (`gamesIdGame`) REFERENCES `games` (`id_game`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_fdb9cd753c5a3a6f38e6c2f7393` FOREIGN KEY (`platformsIdPlatform`) REFERENCES `platforms` (`id_platform`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_platforms_platforms`
--

LOCK TABLES `games_platforms_platforms` WRITE;
/*!40000 ALTER TABLE `games_platforms_platforms` DISABLE KEYS */;
INSERT INTO `games_platforms_platforms` VALUES (1,1),(1,2),(1,3),(1,4),(2,1),(3,1),(4,1),(5,2),(5,5),(5,6),(5,7),(6,1),(6,6),(7,1),(7,2),(7,3),(8,2),(8,7),(8,8);
/*!40000 ALTER TABLE `games_platforms_platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_stores_stores`
--

DROP TABLE IF EXISTS `games_stores_stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games_stores_stores` (
  `gamesIdGame` int NOT NULL,
  `storesIdStore` int NOT NULL,
  PRIMARY KEY (`gamesIdGame`,`storesIdStore`),
  KEY `IDX_507d74fee3b66ae93ed0bcb004` (`gamesIdGame`),
  KEY `IDX_eac60856c0b9c91f5e2529abe9` (`storesIdStore`),
  CONSTRAINT `FK_507d74fee3b66ae93ed0bcb0047` FOREIGN KEY (`gamesIdGame`) REFERENCES `games` (`id_game`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_eac60856c0b9c91f5e2529abe99` FOREIGN KEY (`storesIdStore`) REFERENCES `stores` (`id_store`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_stores_stores`
--

LOCK TABLES `games_stores_stores` WRITE;
/*!40000 ALTER TABLE `games_stores_stores` DISABLE KEYS */;
INSERT INTO `games_stores_stores` VALUES (1,1),(1,2),(2,1),(2,2),(2,3),(3,1),(3,2),(4,2),(4,3),(5,1),(5,2),(5,3),(6,2),(6,3),(7,1),(7,2),(8,1),(8,2),(8,3);
/*!40000 ALTER TABLE `games_stores_stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platforms` (
  `id_platform` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id_platform`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
INSERT INTO `platforms` VALUES (1,'PS4','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013'),(2,'PC','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013'),(3,'Xbox One','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013'),(4,'Switch','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013'),(5,'PS2','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013'),(6,'PS3','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013'),(7,'Xbox','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013'),(8,'WiiU','2021-07-21 20:27:28.290013','2021-07-21 20:27:28.290013');
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `id_store` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id_store`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES (1,'Loja Tambóre',-23.506093876913297,-46.83500068403224,'2021-07-21 20:27:27.626599','2021-07-21 20:27:27.626599'),(2,'Loja União',-23.54068495951624,-46.76593946622028,'2021-07-21 20:27:27.626599','2021-07-21 20:27:27.626599'),(3,'Loja Iguatemi',-23.50477029611507,-46.8487484401651,'2021-07-21 20:27:27.626599','2021-07-21 20:27:27.626599');
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-21 21:02:55
