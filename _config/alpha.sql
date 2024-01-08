-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 08 jan. 2024 à 00:47
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `alpha`
--

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `notf_id` int(11) NOT NULL,
  `content` varchar(256) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `passwordrecovery`
--

CREATE TABLE `passwordrecovery` (
  `id_pwd` int(11) NOT NULL,
  `pwd_reset_email` varchar(100) NOT NULL,
  `pwd_reset_selector` varchar(50) NOT NULL,
  `pwd_reset_token` text NOT NULL,
  `pwd_reset_expires` text NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `passwordrecovery`
--

INSERT INTO `passwordrecovery` (`id_pwd`, `pwd_reset_email`, `pwd_reset_selector`, `pwd_reset_token`, `pwd_reset_expires`, `user_id`) VALUES
(1, 'maryamjr03@gmail.com', '83e83a9fdeb89753', '?)+??\ZW??ێ?^?o?e?󒼑?W?!', '1704663434', 3),
(2, 'maryamjr03@gmail.com', '74cb40cf120a4d92', '??\'G?${&	#o? ܚ????????2?_?', '1704666087', 3),
(3, 'maryamjr03@gmail.com', 'cd506732d7eda98d', '\\p?;????w^\057 ?\n@b?K?????&?wq', '1704666340', 3),
(4, 'maryamjr03@gmail.com', '6bab4ec6d4847902', '?y?vx,?????k?f=3b~m?)?˧,0??', '1704666608', 3),
(5, 'maryamjr03@gmail.com', '3e2d4122b5a2f376', '-?\r3?gC???I?G?:Dm??V??HAX\n?tQ?j', '1704667169', 3),
(6, 'maryamjr03@gmail.com', '734f384aad47e684', 'M\Z??q&Z\'?? ???YΪ?0?2?e.??SNՇ?', '1704667493', 3),
(7, 'maryamjr03@gmail.com', '80a064abe2223fff', '}-?DKԳ?f??Zl?S???m??↧??\\', '1704667654', 3),
(8, 'maryamjr03@gmail.com', 'df6626538ce22c17', '&-??zϩ??/а??	?cƞ?\'8?????', '1704668012', 3),
(9, 'maryamjr03@gmail.com', 'ab207b18e395624c', '?bU?AņNj\rZ??w,????þ{???xkk??', '1704668197', 3),
(10, 'maryamjr03@gmail.com', 'c4891013d4384d7a', '?l?\n????v?}?h?????Ǟ???k', '1704668269', 3),
(11, 'maryamjr03@gmail.com', 'f021ce4ca133025a', '?S??d?=?????by?ܒ?U?	?T$??B???W', '1704668367', 3),
(12, 'maryamjr03@gmail.com', 'e27bf07f2dbe290f', '??o???Kb*qb2?3??&???????0Ձz;??', '1704668521', 3),
(13, 'maryamjr03@gmail.com', '962b445ba0f0db52', '?)?J`???M_$?!H??K?[Cw??3k3ߧN', '1704669413', 3),
(14, 'maryamjr03@gmail.com', '9a8be0db927c1363', ' \0YB?N?U\n?O??w4R*Ŕ???CjHq', '1704669891', 3),
(15, 'maryamjr03@gmail.com', 'b38ed2ebfd6f9061', '?goq??K?x?yǧ?.??d?Zq/?\Z?o?m<???', '1704672139', 3),
(16, 'maryamjr03@gmail.com', '26a5dee7c4c3322c', '??z???G??D>u`?S??H??+g?J?J/', '1704673237', 3),
(17, 'maryamjr03@gmail.com', '16a03b51eea3b9a2', '7?_??טn\Z?ƽ։????RW?\'?3?Fm?-\n?C', '1704673520', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `picture` text NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_id`, `picture`, `username`, `email`, `password`) VALUES
(1, '1701695229avatar5.jpg', 'maryam', 'maryam@gmail.com', '$2y$10$rVRpqcoZ5/UGP.itVsENU.knDQkpIYjMxgQaX0lHfdoiwvEn.Cvt.'),
(2, 'profil maryam.jpg', 'Hafsa', 'hafsa@gmail.com', '$2y$10$d.eAVZejlkmvxnhn5DT.H.rDZHFyGpWlP3ksbdcUd1gd3hI/3xtYC'),
(3, 'profil maryam.jpg', 'mery', 'maryamjr03@gmail.com', '$2y$10$BiGswhAEvnSxa/mb/Ybrbe/1lE0ppn/Sx1bjIFEAfiUyv8RVWYCZi');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notf_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `passwordrecovery`
--
ALTER TABLE `passwordrecovery`
  ADD PRIMARY KEY (`id_pwd`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `notf_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `passwordrecovery`
--
ALTER TABLE `passwordrecovery`
  MODIFY `id_pwd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `passwordrecovery`
--
ALTER TABLE `passwordrecovery`
  ADD CONSTRAINT `passwordrecovery_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
