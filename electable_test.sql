-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 01 Mars 2023 à 14:47
-- Version du serveur :  5.7.38-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `electable_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `affectationagent`
--

CREATE TABLE `affectationagent` (
  `idAffectation` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `actif` bit(1) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `bureauVote_id` bigint(20) NOT NULL,
  `phase_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `affectationagent`
--

INSERT INTO `affectationagent` (`idAffectation`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `actif`, `date`, `version`, `bureauVote_id`, `phase_id`, `user_id`) VALUES
(1, '2023-01-13 09:48:54.652000', 'admin', b'1', '2023-01-13 09:48:54.652000', 'admin', b'1', '2023-01-13 09:48:48.640000', 1, 1, 1, 5),
(2, '2023-01-17 12:27:01.055000', 'admin', b'1', '2023-01-17 12:27:01.055000', 'admin', b'1', '2023-01-17 12:22:24.793000', 1, 2, 1, 7);

-- --------------------------------------------------------

--
-- Structure de la table `agentTerrain`
--

CREATE TABLE `agentTerrain` (
  `idAgentTerrain` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `actif` bit(1) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `coordinateur_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `agentTerrain`
--

INSERT INTO `agentTerrain` (`idAgentTerrain`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `actif`, `adresse`, `confirmation_token`, `email`, `nom`, `password`, `prenom`, `telephone`, `version`, `coordinateur_id`) VALUES
(1, '2023-01-13 09:46:56.590000', 'admin', b'1', '2023-01-13 10:00:28.390000', 'admin', b'0', 'Djelibougou', NULL, 'csogoba@iserv-ml.com', 'Sogoba', NULL, 'Colette N', '00000', 1, 1),
(2, '2023-01-13 10:06:08.375000', 'admin', b'1', '2023-01-13 10:06:08.375000', 'admin', b'0', 'Faladje', NULL, 'kbah@iserv-ml.com', 'Bah', NULL, 'Kady', '1111', 1, 1),
(3, '2023-01-17 12:26:00.209000', 'admin', b'1', '2023-01-17 12:26:00.209000', 'admin', b'0', 'bamako', NULL, 'tdembele@iserv-ml.com', 'Dembele', NULL, 'Tata', '&é\"\'(-è', 1, 1),
(4, '2023-01-30 11:16:44.528000', 'admin', b'1', '2023-01-30 11:16:44.528000', 'admin', b'0', 'Kati', NULL, 'mdembele@iserv-ml.com', 'Dembele', NULL, 'Mariam', '12345678999', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `alliance`
--

CREATE TABLE `alliance` (
  `idAlliance` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `commune_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `alliance`
--

INSERT INTO `alliance` (`idAlliance`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `libelle`, `version`, `commune_id`) VALUES
(1, '2023-01-13 09:50:57.215000', 'admin', b'1', '2023-01-13 09:50:57.215000', 'admin', 'UDD - ADP MALIBA', 'UDD - ADP MALIBA', 1, 1),
(2, '2023-01-13 09:51:20.843000', 'admin', b'1', '2023-01-13 09:51:20.843000', 'admin', 'RPM-SADI', 'RPM-SADI', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `allianceImport`
--

CREATE TABLE `allianceImport` (
  `id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `creePar` varchar(255) DEFAULT NULL,
  `modifierPar` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `bureauVote`
--

CREATE TABLE `bureauVote` (
  `idBureauVote` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `femme` varchar(255) DEFAULT NULL,
  `homme` varchar(255) DEFAULT NULL,
  `nbAgentElectoraux` varchar(255) DEFAULT NULL,
  `nbElecteurs` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `centre_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `bureauVote`
--

INSERT INTO `bureauVote` (`idBureauVote`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `adresse`, `femme`, `homme`, `nbAgentElectoraux`, `nbElecteurs`, `nom`, `version`, `centre_id`) VALUES
(1, '2023-01-13 09:42:28.233000', 'admin', b'1', '2023-01-13 09:42:28.233000', 'admin', 'Titibougou', '20', '80', '2', '100', 'Bureau 1', 1, 1),
(2, '2023-01-17 12:25:27.813000', 'admin', b'1', '2023-01-17 12:25:27.813000', 'admin', 'Bureau 2', '2', '20', '1', '22', 'Bureau 2', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `candidat`
--

CREATE TABLE `candidat` (
  `idCandidat` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `alliance_id` bigint(20) NOT NULL,
  `partie_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `candidat`
--

INSERT INTO `candidat` (`idCandidat`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `nom`, `prenom`, `version`, `alliance_id`, `partie_id`) VALUES
(1, '2023-01-13 09:53:36.518000', 'admin', b'1', '2023-01-13 09:53:36.518000', 'admin', 'Keita', 'Ibrahim Boubacar', 1, 2, 2),
(2, '2023-01-13 09:53:54.859000', 'admin', b'1', '2023-01-13 09:53:54.859000', 'admin', 'Diallo', 'Aliou', 1, 1, 4);

-- --------------------------------------------------------

--
-- Structure de la table `candidatImport`
--

CREATE TABLE `candidatImport` (
  `id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `centre`
--

CREATE TABLE `centre` (
  `idCentre` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `quartier_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `centre`
--

INSERT INTO `centre` (`idCentre`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `version`, `quartier_id`) VALUES
(1, '2023-01-13 09:41:32.995000', 'admin', b'1', '2023-01-13 09:41:32.995000', 'admin', 'Centre 1', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `cercle`
--

CREATE TABLE `cercle` (
  `idCercle` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `region_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `cercle`
--

INSERT INTO `cercle` (`idCercle`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `libelle`, `version`, `region_id`) VALUES
(1, '2023-01-13 09:39:08.103000', 'admin', b'1', '2023-01-13 09:39:08.103000', 'admin', 'Bamako', 'Bamako', 1, 1),
(2, '2023-03-01 14:12:22.287000', 'admin', b'1', '2023-03-01 14:12:22.287000', 'admin', 'Sikasso', 'Sikasso', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `commune`
--

CREATE TABLE `commune` (
  `idCommune` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `cercle_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `commune`
--

INSERT INTO `commune` (`idCommune`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `libelle`, `version`, `cercle_id`) VALUES
(1, '2023-01-13 09:39:32.179000', 'admin', b'1', '2023-01-13 09:39:32.179000', 'admin', 'Commune 1', 'Commune 1', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `coordinateur`
--

CREATE TABLE `coordinateur` (
  `idCoordinateur` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `notification` bit(1) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `coordinateur`
--

INSERT INTO `coordinateur` (`idCoordinateur`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `adresse`, `email`, `nom`, `notification`, `prenom`, `telephone`, `version`) VALUES
(1, '2023-01-13 09:46:18.808000', 'admin', b'1', '2023-01-13 09:46:18.808000', 'admin', 'Sebenikoro', 'afofana@iserv-ml.com', 'Fofana', b'0', 'Abdoulaye', '000', 1);

-- --------------------------------------------------------

--
-- Structure de la table `demandeAppel`
--

CREATE TABLE `demandeAppel` (
  `idDemande` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `commentaire` varchar(255) DEFAULT NULL,
  `motif` varchar(255) DEFAULT NULL,
  `traite` bit(1) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `election`
--

CREATE TABLE `election` (
  `idElection` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `dateElection` datetime(6) DEFAULT NULL,
  `nbElecteurs` int(11) DEFAULT NULL,
  `suffrage` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `election`
--

INSERT INTO `election` (`idElection`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `dateElection`, `nbElecteurs`, `suffrage`, `type`, `version`) VALUES
(1, '2023-01-13 09:48:06.920000', 'admin', b'1', '2023-01-13 09:48:06.920000', 'admin', '2023-02-12 00:00:00.000000', 1000, 1000, 'LEGISLATIVE', 1),
(2, '2023-01-25 13:53:42.718000', 'admin', b'1', '2023-01-25 13:53:42.718000', 'admin', '2023-01-01 00:00:00.000000', 2000, 222, 'PRESIDENTIELLE', 1);

-- --------------------------------------------------------

--
-- Structure de la table `erreur_Resultat`
--

CREATE TABLE `erreur_Resultat` (
  `id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `agent` varchar(255) DEFAULT NULL,
  `bureau` varchar(255) DEFAULT NULL,
  `candidat` varchar(255) DEFAULT NULL,
  `centre` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `phase` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `incident`
--

CREATE TABLE `incident` (
  `idincident` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `dateIncident` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `valider` bit(1) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `affectation_id` bigint(20) NOT NULL,
  `typeIncident_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `incident`
--

INSERT INTO `incident` (`idincident`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `dateIncident`, `description`, `valider`, `version`, `affectation_id`, `typeIncident_id`) VALUES
(1, '2023-01-13 10:24:39.399000', 'SogobaColette N', b'1', '2023-01-13 10:24:39.399000', 'SogobaColette N', 'MPE', '2023-01-13 10:24:20.618000', 'Manque de papier', b'0', 1, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `initialisation`
--

CREATE TABLE `initialisation` (
  `id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `creePar` varchar(255) DEFAULT NULL,
  `modifierPar` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `parti`
--

CREATE TABLE `parti` (
  `idParti` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `parti`
--

INSERT INTO `parti` (`idParti`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `nom`, `version`) VALUES
(1, '2023-01-13 09:50:00.238000', NULL, b'1', '2023-01-13 09:50:00.238000', NULL, 'UDD', 'UDD', NULL),
(2, '2023-01-13 09:50:09.506000', NULL, b'1', '2023-01-13 09:50:09.506000', NULL, 'RPM', 'RPM', NULL),
(3, '2023-01-13 09:50:19.472000', NULL, b'1', '2023-01-13 09:50:19.472000', NULL, 'SADI', 'SADI', NULL),
(4, '2023-01-13 09:50:27.555000', NULL, b'1', '2023-01-13 09:50:27.555000', NULL, 'ADP MALIBA', 'ADP MALIBA', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `idPays` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `codeiso3` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`idPays`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `codeiso3`, `nom`, `version`) VALUES
(1, '2023-01-13 09:00:32.989000', NULL, b'1', '2023-01-13 09:00:32.989000', NULL, 'Ml', 'Mali', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `phase_Election`
--

CREATE TABLE `phase_Election` (
  `idPhase` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `active` bit(1) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `datePhase` datetime(6) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `ellection_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `phase_Election`
--

INSERT INTO `phase_Election` (`idPhase`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `active`, `code`, `datePhase`, `libelle`, `version`, `ellection_id`) VALUES
(1, '2023-01-13 09:48:34.616000', 'admin', b'1', '2023-01-13 09:48:34.616000', 'admin', b'0', NULL, '2023-01-20 00:00:00.000000', 'PREMIER TOUR', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `quartier`
--

CREATE TABLE `quartier` (
  `idQuartier` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `commune_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `quartier`
--

INSERT INTO `quartier` (`idQuartier`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `libelle`, `version`, `commune_id`) VALUES
(1, '2023-01-13 09:40:40.417000', 'admin', b'1', '2023-01-13 09:40:40.417000', 'admin', 'Titibougou', 'Titibougou', 1, 1),
(2, '2023-01-13 09:40:46.803000', 'admin', b'0', '2023-01-13 09:40:46.803000', 'admin', 'Titibougou', 'Titibougou', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

CREATE TABLE `rapport` (
  `idrapport` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `contenu` int(11) DEFAULT NULL,
  `dateRapport` datetime(6) DEFAULT NULL,
  `disponibiliteMateriel` bit(1) DEFAULT NULL,
  `heureOuverture` datetime(6) DEFAULT NULL,
  `motifRenvoi` varchar(255) DEFAULT NULL,
  `nbAgentElectauraux` int(11) DEFAULT NULL,
  `renvoiPossible` bit(1) DEFAULT NULL,
  `respectProcedureOuverture` bit(1) DEFAULT NULL,
  `tauxParticipation` double DEFAULT NULL,
  `valider` bit(1) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `affectation_id` bigint(20) NOT NULL,
  `typerapport_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `rapport`
--

INSERT INTO `rapport` (`idrapport`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `contenu`, `dateRapport`, `disponibiliteMateriel`, `heureOuverture`, `motifRenvoi`, `nbAgentElectauraux`, `renvoiPossible`, `respectProcedureOuverture`, `tauxParticipation`, `valider`, `version`, `affectation_id`, `typerapport_id`) VALUES
(1, NULL, 'SogobaColette N', b'1', '2023-01-17 12:40:13.632000', 'SogobaColette N', NULL, '2023-01-17 00:00:00.000000', b'1', '1970-01-01 12:39:00.000000', NULL, 1, b'0', b'1', 20, b'1', 1, 1, 2),
(2, '2023-01-30 11:23:56.553000', 'SogobaColette N', b'1', '2023-01-30 11:28:00.917000', 'SogobaColette N', NULL, '2023-01-30 11:27:46.272000', b'0', '1970-01-01 11:23:00.000000', 'informaton non correcte\n', 1, b'0', b'1', NULL, NULL, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

CREATE TABLE `region` (
  `idRegion` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `pays_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `region`
--

INSERT INTO `region` (`idRegion`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `libelle`, `version`, `pays_id`) VALUES
(1, '2023-01-13 09:38:43.638000', 'admin', b'1', '2023-01-13 09:38:43.638000', 'admin', 'Koulikoro', 'Koulikoro', 1, 1),
(2, '2023-03-01 14:06:52.720000', 'admin', b'1', '2023-03-01 14:06:52.720000', 'admin', 'Sikasso', 'Sikasso', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `resultat`
--

CREATE TABLE `resultat` (
  `idResultat` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `dateResultat` datetime(6) DEFAULT NULL,
  `motifRenvoi` varchar(255) DEFAULT NULL,
  `renvoiePossible` bit(1) DEFAULT NULL,
  `suffrage` int(11) DEFAULT NULL,
  `valider` bit(1) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `affectation_id` bigint(20) NOT NULL,
  `candidat_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `resultat`
--

INSERT INTO `resultat` (`idResultat`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `dateResultat`, `motifRenvoi`, `renvoiePossible`, `suffrage`, `valider`, `version`, `affectation_id`, `candidat_id`) VALUES
(1, '2023-01-30 11:41:47.756000', 'SogobaColette N', b'1', '2023-01-30 11:41:47.756000', 'SogobaColette N', '2023-01-30 11:41:30.438000', '', b'0', 20, b'0', 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `nom`, `roles`, `version`) VALUES
(1, 'ROLE_USER', NULL, NULL, NULL),
(2, 'ROLE_ADMIN', NULL, NULL, NULL),
(3, 'ROLE_SUPER_ADMIN', NULL, NULL, NULL),
(4, 'ROLE_AGENT', NULL, NULL, NULL),
(5, 'ROLE_COORDINATEUR', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `statistique`
--

CREATE TABLE `statistique` (
  `idstatistique` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `date_statistique` datetime(6) DEFAULT NULL,
  `motifRenvoi` varchar(255) DEFAULT NULL,
  `nb_bulletin_null` int(11) DEFAULT NULL,
  `nb_femme_votant` int(11) DEFAULT NULL,
  `nb_homme_votant` int(11) DEFAULT NULL,
  `renvoiePossible` bit(1) DEFAULT NULL,
  `valider` bit(1) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `affectation_id` bigint(20) NOT NULL,
  `phase_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `statistique`
--

INSERT INTO `statistique` (`idstatistique`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `date_statistique`, `motifRenvoi`, `nb_bulletin_null`, `nb_femme_votant`, `nb_homme_votant`, `renvoiePossible`, `valider`, `version`, `affectation_id`, `phase_id`) VALUES
(1, '2023-01-30 11:29:23.825000', 'SogobaColette N', b'1', '2023-01-30 11:29:23.825000', 'SogobaColette N', '2023-01-30 11:29:04.977000', '', 2, 18, 80, b'1', b'1', 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `typeincident`
--

CREATE TABLE `typeincident` (
  `idTypeIncident` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `typeincident`
--

INSERT INTO `typeincident` (`idTypeIncident`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `libelle`, `version`) VALUES
(1, '2022-06-29 15:39:14.000000', 'admin', b'1', '2022-06-29 15:39:14.000000', 'admin', 'Autre', 'Autre', 1),
(2, '2022-06-30 08:59:53.000000', 'admin', b'1', '2022-06-30 08:59:53.000000', 'admin', 'MMES', 'Manque de matériel électoral essentiel', 1),
(3, '2022-06-30 09:00:13.000000', NULL, b'1', '2022-06-30 09:00:13.000000', NULL, 'AAE', 'Absence(s) des agents électoraux (moins de 3 agents présents', NULL),
(4, '2022-06-30 09:00:29.000000', NULL, b'1', '2022-06-30 09:00:29.000000', NULL, 'VME', 'Vol de matériel électoral', NULL),
(5, '2022-06-30 09:00:47.000000', NULL, b'1', '2022-06-30 09:00:47.000000', NULL, 'IVE', 'Incident de violence électorale', NULL),
(6, '2022-06-30 09:01:20.000000', NULL, b'1', '2022-06-30 09:01:20.000000', NULL, 'ACIBV', 'Activité de campagne à l\'intérieur du bureau de vote', NULL),
(7, '2022-06-30 09:01:40.000000', NULL, b'1', '2022-06-30 09:01:40.000000', NULL, 'ADC', 'Achat de conscience', NULL),
(8, '2022-06-30 09:02:05.000000', NULL, b'1', '2022-06-30 09:02:05.000000', NULL, 'RPEEV', 'Refus de permettre à un électeur éligible de voter', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `typerapport`
--

CREATE TABLE `typerapport` (
  `idTypeRapport` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `debutPlage` time DEFAULT NULL,
  `finPlage` time DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `typerapport`
--

INSERT INTO `typerapport` (`idTypeRapport`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `code`, `debutPlage`, `finPlage`, `libelle`, `version`) VALUES
(1, '2022-06-23 11:17:01.000000', 'admin', b'1', '2022-06-23 11:17:01.000000', 'admin', 'OUVERTURE', '08:00:00', '12:00:00', 'PREMIER TOUR OUVERTURE ', 1),
(2, '2022-06-23 11:16:30.000000', 'admin', b'1', '2022-06-23 11:16:30.000000', 'admin', 'MIDI', '08:00:00', '12:00:00', 'PREMIER TOUR MIDI ', 1);

-- --------------------------------------------------------

--
-- Structure de la table `type_incident`
--

CREATE TABLE `type_incident` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `iduser` bigint(20) NOT NULL,
  `createdAt` datetime(6) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` bit(1) NOT NULL,
  `updatedAt` datetime(6) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `credential_expiredAt` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_canonical` varchar(255) DEFAULT NULL,
  `expiredAt` datetime(6) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `groupe` varchar(255) DEFAULT NULL,
  `lastLogin` datetime(6) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_requested_at` datetime(6) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `userrole` varchar(255) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `credential_expired_at` datetime(6) DEFAULT NULL,
  `expired_at` datetime(6) DEFAULT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`iduser`, `createdAt`, `createdBy`, `stat`, `updatedAt`, `updatedBy`, `adresse`, `confirmation_token`, `credential_expiredAt`, `email`, `email_canonical`, `expiredAt`, `gender`, `groupe`, `lastLogin`, `lastName`, `nom`, `password`, `password_requested_at`, `phone`, `prenom`, `salt`, `userrole`, `version`, `created_at`, `created_by`, `updated_at`, `updated_by`, `credential_expired_at`, `expired_at`, `last_login`, `last_name`) VALUES
(2, '2022-06-23 10:59:36.000000', 'admin', b'1', '2022-06-23 10:59:36.000000', 'admin', 'Baco Djicoroni', NULL, NULL, 'admin', NULL, NULL, NULL, NULL, NULL, NULL, 'N\'Diaye', '$2a$10$L52JmeFRjcb3mC2P1IsJIucns85VgNUhT1vE3pFSRlAy/7HZu/UYq', NULL, '+22370963687', 'Ba', NULL, 'SUPERVISEUR_CENI', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '2023-01-13 09:43:16.970000', 'admin', b'0', '2023-01-13 09:43:16.970000', 'admin', 'Sebenikoro', NULL, NULL, 'afofana@iserv-ml.com', NULL, NULL, NULL, NULL, NULL, NULL, 'Fofana', '$2a$10$/Z7l6npTmbnzhSIBdH97QObnzcY4cuIub1qaxPJ9/J5te07J8Fo4q', NULL, '000000', 'Abdoulaye', NULL, 'UTILISATEUR_CENI', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, '2023-01-13 09:46:19.140000', 'admin', b'1', '2023-01-13 09:46:19.140000', 'admin', 'Sebenikoro', NULL, NULL, 'afofana@iserv-ml.com', NULL, NULL, NULL, NULL, NULL, NULL, 'Fofana', '$2a$10$/Z7l6npTmbnzhSIBdH97QObnzcY4cuIub1qaxPJ9/J5te07J8Fo4q', NULL, '000', 'Abdoulaye', NULL, 'ROLE_COORDINATEUR', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, '2023-01-13 09:46:56.397000', 'admin', b'1', '2023-01-13 09:46:56.397000', 'admin', 'Djelibougou', NULL, NULL, 'csogoba@iserv-ml.com', NULL, NULL, '', NULL, NULL, NULL, 'Sogoba', '$2a$10$02vNvoqoJHpB/DSwiVBJnODbWAh5N1S4YgCsCKyrb2e4TlTNaVzF6', NULL, '0000', 'Colette N', NULL, 'ROLE_AGENT', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, '2023-01-13 10:06:08.243000', 'admin', b'1', '2023-01-13 10:06:08.243000', 'admin', 'Faladje', NULL, NULL, 'kbah@iserv-ml.com', NULL, NULL, '', NULL, NULL, NULL, 'Bah', '$2a$10$m.HNumv6JDe2XZyzcwbuSOWLyP.C0E1G.BynyfOhtptL43x592ejy', NULL, '1111', 'Kady', NULL, 'ROLE_AGENT', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, '2023-01-17 12:26:00.073000', 'admin', b'1', '2023-01-17 12:26:00.073000', 'admin', 'bamako', NULL, NULL, 'tdembele@iserv-ml.com', NULL, NULL, '', NULL, NULL, NULL, 'Dembele', '123123', NULL, '&é\"\'(-è', 'Tata', NULL, 'ROLE_AGENT', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, '2023-01-30 11:14:48.425000', 'admin', b'1', '2023-01-30 11:14:48.425000', 'admin', 'Kati', NULL, NULL, 'mdembele@iserv-ml.com', NULL, NULL, '', NULL, NULL, NULL, 'Dembele', '0000', NULL, '12345678', 'Mariam t', NULL, 'ROLE_AGENT', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, '2023-01-30 11:16:44.001000', 'admin', b'1', '2023-01-30 11:16:44.001000', 'admin', 'Kati', NULL, NULL, 'mdembele@iserv-ml.com', NULL, NULL, '', NULL, NULL, NULL, 'Dembele', '0000', NULL, '12345678999', 'Mariam', NULL, 'ROLE_AGENT', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_role`
--

CREATE TABLE `user_role` (
  `id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ussd_demande_appel`
--

CREATE TABLE `ussd_demande_appel` (
  `demande_id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `agent_telephone` varchar(255) DEFAULT NULL,
  `demande_etat` varchar(255) DEFAULT NULL,
  `demande_motif` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ussd_incident`
--

CREATE TABLE `ussd_incident` (
  `incident_id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `agent_telephone` varchar(255) DEFAULT NULL,
  `incident_desc` varchar(255) DEFAULT NULL,
  `incident_etat` varchar(255) DEFAULT NULL,
  `incident_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ussd_rapport`
--

CREATE TABLE `ussd_rapport` (
  `rapport_id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `agent_telephone` varchar(255) DEFAULT NULL,
  `motif_renvoi` varchar(255) DEFAULT NULL,
  `nb_agent_electauraux` int(11) DEFAULT NULL,
  `rapport_etat` varchar(255) DEFAULT NULL,
  `rapport_heure_ouvert` varchar(255) DEFAULT NULL,
  `rapport_respect_procedure` bit(1) NOT NULL,
  `rapport_ressource_dispo` bit(1) NOT NULL,
  `rapport_taux_participation` int(11) DEFAULT NULL,
  `rapport_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ussd_resultat`
--

CREATE TABLE `ussd_resultat` (
  `id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `agent_telephone` varchar(255) DEFAULT NULL,
  `motif_renvoi` varchar(255) DEFAULT NULL,
  `resultat_code_candidat` varchar(255) DEFAULT NULL,
  `resultat_etat` varchar(255) DEFAULT NULL,
  `resultat_suffrage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ussd_statistic`
--

CREATE TABLE `ussd_statistic` (
  `resultat_id` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdBy` varchar(255) DEFAULT NULL,
  `stat` tinyint(1) DEFAULT '1',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(255) DEFAULT NULL,
  `agent_telephone` varchar(255) DEFAULT NULL,
  `motif_envoi` varchar(255) DEFAULT NULL,
  `resultat_etat` varchar(255) DEFAULT NULL,
  `resultat_nb_billetin_vide` int(11) DEFAULT NULL,
  `resultat_nb_femme_votant` int(11) DEFAULT NULL,
  `resultat_nb_homme_votant` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `affectationagent`
--
ALTER TABLE `affectationagent`
  ADD PRIMARY KEY (`idAffectation`),
  ADD KEY `FKnaa9cw36lvi0wxg000hjxyr3y` (`bureauVote_id`),
  ADD KEY `FK4yjagdepq614re1myi9findlq` (`phase_id`),
  ADD KEY `FKjgt5j2ottxkwjujq5b24lhmsg` (`user_id`);

--
-- Index pour la table `agentTerrain`
--
ALTER TABLE `agentTerrain`
  ADD PRIMARY KEY (`idAgentTerrain`),
  ADD KEY `FKsjx1k4100towutsxqp1pakkn3` (`coordinateur_id`);

--
-- Index pour la table `alliance`
--
ALTER TABLE `alliance`
  ADD PRIMARY KEY (`idAlliance`),
  ADD KEY `FKgvom5qfx2rjly2vpxoriih31u` (`commune_id`);

--
-- Index pour la table `allianceImport`
--
ALTER TABLE `allianceImport`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `bureauVote`
--
ALTER TABLE `bureauVote`
  ADD PRIMARY KEY (`idBureauVote`),
  ADD KEY `FKjk6gd3dhy0m575sfnb3xpoy5f` (`centre_id`);

--
-- Index pour la table `candidat`
--
ALTER TABLE `candidat`
  ADD PRIMARY KEY (`idCandidat`),
  ADD KEY `FKax58b58shpl5igi1aq82vfimm` (`alliance_id`),
  ADD KEY `FKd0164lcgwng1cx1olo9eqfpu6` (`partie_id`);

--
-- Index pour la table `candidatImport`
--
ALTER TABLE `candidatImport`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `centre`
--
ALTER TABLE `centre`
  ADD PRIMARY KEY (`idCentre`),
  ADD KEY `FK2d8jtm9nqunb0ojxflx79skqr` (`quartier_id`);

--
-- Index pour la table `cercle`
--
ALTER TABLE `cercle`
  ADD PRIMARY KEY (`idCercle`),
  ADD UNIQUE KEY `UK_mtrtf73s3emkyprir2b6emeya` (`code`),
  ADD KEY `FKdfd9msay4gmiputk4s5xdd5ty` (`region_id`);

--
-- Index pour la table `commune`
--
ALTER TABLE `commune`
  ADD PRIMARY KEY (`idCommune`),
  ADD KEY `FKg6vd7ho8qivvdn8oa2990s5rt` (`cercle_id`);

--
-- Index pour la table `coordinateur`
--
ALTER TABLE `coordinateur`
  ADD PRIMARY KEY (`idCoordinateur`),
  ADD UNIQUE KEY `UK_sbyxby6exa03792r3glff7l5v` (`telephone`);

--
-- Index pour la table `demandeAppel`
--
ALTER TABLE `demandeAppel`
  ADD PRIMARY KEY (`idDemande`),
  ADD KEY `FKd1swkuvj3vw1l9rvrwdvvpmo0` (`user_id`);

--
-- Index pour la table `election`
--
ALTER TABLE `election`
  ADD PRIMARY KEY (`idElection`);

--
-- Index pour la table `erreur_Resultat`
--
ALTER TABLE `erreur_Resultat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `incident`
--
ALTER TABLE `incident`
  ADD PRIMARY KEY (`idincident`),
  ADD KEY `FKb0hbxjnaf692dk33wlayx1sv7` (`affectation_id`),
  ADD KEY `FKivgbigljialut3usj2u509fwe` (`typeIncident_id`);

--
-- Index pour la table `initialisation`
--
ALTER TABLE `initialisation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `parti`
--
ALTER TABLE `parti`
  ADD PRIMARY KEY (`idParti`),
  ADD UNIQUE KEY `UK_pg81tv6d3rl5lns4hqfb0efig` (`code`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`idPays`),
  ADD UNIQUE KEY `UK_9o3gmbayipnnqqtjiq7pju8ys` (`codeiso3`);

--
-- Index pour la table `phase_Election`
--
ALTER TABLE `phase_Election`
  ADD PRIMARY KEY (`idPhase`),
  ADD KEY `FKe5nfce1015k88l8ym565lv99v` (`ellection_id`);

--
-- Index pour la table `quartier`
--
ALTER TABLE `quartier`
  ADD PRIMARY KEY (`idQuartier`),
  ADD KEY `FK1y7t5ejlx7xl3n9shhrgjuaa0` (`commune_id`);

--
-- Index pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD PRIMARY KEY (`idrapport`),
  ADD KEY `FKeedxe69lqpp72kuk4ed7uatf5` (`affectation_id`),
  ADD KEY `FKms3ga9041jrutx8er1mef80qd` (`typerapport_id`);

--
-- Index pour la table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`idRegion`),
  ADD UNIQUE KEY `UK_kntnlvx8xwbfrg1flw2mnwa9v` (`code`),
  ADD KEY `FK3ypxrvo06oogq5orufss0bxdt` (`pays_id`);

--
-- Index pour la table `resultat`
--
ALTER TABLE `resultat`
  ADD PRIMARY KEY (`idResultat`),
  ADD KEY `FK3o7o6du9d4qw371jcnhre30he` (`affectation_id`),
  ADD KEY `FK2trbhu9va6jq02qukbpwykhl9` (`candidat_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`);

--
-- Index pour la table `statistique`
--
ALTER TABLE `statistique`
  ADD PRIMARY KEY (`idstatistique`),
  ADD KEY `FKmb9e7tqblvd46rgordgwwucyl` (`affectation_id`),
  ADD KEY `FK8m1bt7rxt2go5nf3auaq2bqid` (`phase_id`);

--
-- Index pour la table `typeincident`
--
ALTER TABLE `typeincident`
  ADD PRIMARY KEY (`idTypeIncident`),
  ADD UNIQUE KEY `UK_4p6gifhuu42es5nvjfw3k02dw` (`code`),
  ADD UNIQUE KEY `UK_68srk297h2iabmompkspc3eyx` (`libelle`);

--
-- Index pour la table `typerapport`
--
ALTER TABLE `typerapport`
  ADD PRIMARY KEY (`idTypeRapport`);

--
-- Index pour la table `type_incident`
--
ALTER TABLE `type_incident`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`);

--
-- Index pour la table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ussd_demande_appel`
--
ALTER TABLE `ussd_demande_appel`
  ADD PRIMARY KEY (`demande_id`);

--
-- Index pour la table `ussd_incident`
--
ALTER TABLE `ussd_incident`
  ADD PRIMARY KEY (`incident_id`);

--
-- Index pour la table `ussd_rapport`
--
ALTER TABLE `ussd_rapport`
  ADD PRIMARY KEY (`rapport_id`);

--
-- Index pour la table `ussd_resultat`
--
ALTER TABLE `ussd_resultat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ussd_statistic`
--
ALTER TABLE `ussd_statistic`
  ADD PRIMARY KEY (`resultat_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `affectationagent`
--
ALTER TABLE `affectationagent`
  MODIFY `idAffectation` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `agentTerrain`
--
ALTER TABLE `agentTerrain`
  MODIFY `idAgentTerrain` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `alliance`
--
ALTER TABLE `alliance`
  MODIFY `idAlliance` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `allianceImport`
--
ALTER TABLE `allianceImport`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `bureauVote`
--
ALTER TABLE `bureauVote`
  MODIFY `idBureauVote` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `candidat`
--
ALTER TABLE `candidat`
  MODIFY `idCandidat` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `candidatImport`
--
ALTER TABLE `candidatImport`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `centre`
--
ALTER TABLE `centre`
  MODIFY `idCentre` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `cercle`
--
ALTER TABLE `cercle`
  MODIFY `idCercle` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `commune`
--
ALTER TABLE `commune`
  MODIFY `idCommune` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `coordinateur`
--
ALTER TABLE `coordinateur`
  MODIFY `idCoordinateur` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `demandeAppel`
--
ALTER TABLE `demandeAppel`
  MODIFY `idDemande` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `election`
--
ALTER TABLE `election`
  MODIFY `idElection` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `erreur_Resultat`
--
ALTER TABLE `erreur_Resultat`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `incident`
--
ALTER TABLE `incident`
  MODIFY `idincident` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `initialisation`
--
ALTER TABLE `initialisation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `parti`
--
ALTER TABLE `parti`
  MODIFY `idParti` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `pays`
--
ALTER TABLE `pays`
  MODIFY `idPays` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `phase_Election`
--
ALTER TABLE `phase_Election`
  MODIFY `idPhase` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `quartier`
--
ALTER TABLE `quartier`
  MODIFY `idQuartier` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `rapport`
--
ALTER TABLE `rapport`
  MODIFY `idrapport` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `region`
--
ALTER TABLE `region`
  MODIFY `idRegion` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `resultat`
--
ALTER TABLE `resultat`
  MODIFY `idResultat` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `statistique`
--
ALTER TABLE `statistique`
  MODIFY `idstatistique` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `typeincident`
--
ALTER TABLE `typeincident`
  MODIFY `idTypeIncident` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `typerapport`
--
ALTER TABLE `typerapport`
  MODIFY `idTypeRapport` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `type_incident`
--
ALTER TABLE `type_incident`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `iduser` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `ussd_demande_appel`
--
ALTER TABLE `ussd_demande_appel`
  MODIFY `demande_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `ussd_incident`
--
ALTER TABLE `ussd_incident`
  MODIFY `incident_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `ussd_rapport`
--
ALTER TABLE `ussd_rapport`
  MODIFY `rapport_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `ussd_resultat`
--
ALTER TABLE `ussd_resultat`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `ussd_statistic`
--
ALTER TABLE `ussd_statistic`
  MODIFY `resultat_id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `affectationagent`
--
ALTER TABLE `affectationagent`
  ADD CONSTRAINT `FK4yjagdepq614re1myi9findlq` FOREIGN KEY (`phase_id`) REFERENCES `phase_Election` (`idPhase`),
  ADD CONSTRAINT `FKjgt5j2ottxkwjujq5b24lhmsg` FOREIGN KEY (`user_id`) REFERENCES `users` (`iduser`),
  ADD CONSTRAINT `FKnaa9cw36lvi0wxg000hjxyr3y` FOREIGN KEY (`bureauVote_id`) REFERENCES `bureauVote` (`idBureauVote`);

--
-- Contraintes pour la table `agentTerrain`
--
ALTER TABLE `agentTerrain`
  ADD CONSTRAINT `FKsjx1k4100towutsxqp1pakkn3` FOREIGN KEY (`coordinateur_id`) REFERENCES `coordinateur` (`idCoordinateur`);

--
-- Contraintes pour la table `alliance`
--
ALTER TABLE `alliance`
  ADD CONSTRAINT `FKgvom5qfx2rjly2vpxoriih31u` FOREIGN KEY (`commune_id`) REFERENCES `commune` (`idCommune`);

--
-- Contraintes pour la table `bureauVote`
--
ALTER TABLE `bureauVote`
  ADD CONSTRAINT `FKjk6gd3dhy0m575sfnb3xpoy5f` FOREIGN KEY (`centre_id`) REFERENCES `centre` (`idCentre`);

--
-- Contraintes pour la table `candidat`
--
ALTER TABLE `candidat`
  ADD CONSTRAINT `FKax58b58shpl5igi1aq82vfimm` FOREIGN KEY (`alliance_id`) REFERENCES `alliance` (`idAlliance`),
  ADD CONSTRAINT `FKd0164lcgwng1cx1olo9eqfpu6` FOREIGN KEY (`partie_id`) REFERENCES `parti` (`idParti`);

--
-- Contraintes pour la table `centre`
--
ALTER TABLE `centre`
  ADD CONSTRAINT `FK2d8jtm9nqunb0ojxflx79skqr` FOREIGN KEY (`quartier_id`) REFERENCES `quartier` (`idQuartier`);

--
-- Contraintes pour la table `cercle`
--
ALTER TABLE `cercle`
  ADD CONSTRAINT `FKdfd9msay4gmiputk4s5xdd5ty` FOREIGN KEY (`region_id`) REFERENCES `region` (`idRegion`);

--
-- Contraintes pour la table `commune`
--
ALTER TABLE `commune`
  ADD CONSTRAINT `FKg6vd7ho8qivvdn8oa2990s5rt` FOREIGN KEY (`cercle_id`) REFERENCES `cercle` (`idCercle`);

--
-- Contraintes pour la table `demandeAppel`
--
ALTER TABLE `demandeAppel`
  ADD CONSTRAINT `FKd1swkuvj3vw1l9rvrwdvvpmo0` FOREIGN KEY (`user_id`) REFERENCES `users` (`iduser`);

--
-- Contraintes pour la table `incident`
--
ALTER TABLE `incident`
  ADD CONSTRAINT `FKb0hbxjnaf692dk33wlayx1sv7` FOREIGN KEY (`affectation_id`) REFERENCES `affectationagent` (`idAffectation`),
  ADD CONSTRAINT `FKivgbigljialut3usj2u509fwe` FOREIGN KEY (`typeIncident_id`) REFERENCES `typeincident` (`idTypeIncident`);

--
-- Contraintes pour la table `phase_Election`
--
ALTER TABLE `phase_Election`
  ADD CONSTRAINT `FKe5nfce1015k88l8ym565lv99v` FOREIGN KEY (`ellection_id`) REFERENCES `election` (`idElection`);

--
-- Contraintes pour la table `quartier`
--
ALTER TABLE `quartier`
  ADD CONSTRAINT `FK1y7t5ejlx7xl3n9shhrgjuaa0` FOREIGN KEY (`commune_id`) REFERENCES `commune` (`idCommune`);

--
-- Contraintes pour la table `rapport`
--
ALTER TABLE `rapport`
  ADD CONSTRAINT `FKeedxe69lqpp72kuk4ed7uatf5` FOREIGN KEY (`affectation_id`) REFERENCES `affectationagent` (`idAffectation`),
  ADD CONSTRAINT `FKms3ga9041jrutx8er1mef80qd` FOREIGN KEY (`typerapport_id`) REFERENCES `typerapport` (`idTypeRapport`);

--
-- Contraintes pour la table `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `FK3ypxrvo06oogq5orufss0bxdt` FOREIGN KEY (`pays_id`) REFERENCES `pays` (`idPays`);

--
-- Contraintes pour la table `resultat`
--
ALTER TABLE `resultat`
  ADD CONSTRAINT `FK2trbhu9va6jq02qukbpwykhl9` FOREIGN KEY (`candidat_id`) REFERENCES `candidat` (`idCandidat`),
  ADD CONSTRAINT `FK3o7o6du9d4qw371jcnhre30he` FOREIGN KEY (`affectation_id`) REFERENCES `affectationagent` (`idAffectation`);

--
-- Contraintes pour la table `statistique`
--
ALTER TABLE `statistique`
  ADD CONSTRAINT `FK8m1bt7rxt2go5nf3auaq2bqid` FOREIGN KEY (`phase_id`) REFERENCES `phase_Election` (`idPhase`),
  ADD CONSTRAINT `FKmb9e7tqblvd46rgordgwwucyl` FOREIGN KEY (`affectation_id`) REFERENCES `affectationagent` (`idAffectation`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
