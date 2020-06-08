-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2020 at 07:16 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `colr`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS itemsowned;
DROP TABLE IF EXISTS users;

CREATE TABLE `items` (
  `id_uniq` int(11) NOT NULL COMMENT 'item id ',
  `type` int(4) NOT NULL COMMENT 'alcohol 1, non alc 2',
  `category` varchar(30) NOT NULL COMMENT 'corks/ caps/ labels',
  `description` varchar(60) NOT NULL,
  `country` varchar(10) NOT NULL,
  `img` mediumtext NOT NULL COMMENT 'image in base64',
  `name` varchar(40) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id_uniq`, `type`, `category`, `description`, `country`, `img`, `name`, `price`) VALUES
(3, 1, 'dasdsa', 'dsadsadsa', 'dsad', '[object File]', 'dsasda', 23),
(5, 1, 'dasdsa', 'dsadsadsa', 'dsad', '[object File]', 'dsasda', 23),
(6, 1, 'dasdsa', 'dsadsadsa', 'dsad', '[object File]', 'dsasda', 23),
(7, 1, 'cass', 'das', 'dsadas', '[object File]', 'dasd', 22),
(9, 0, 'das', 'dasd', 'dasdas', '[object File]', 'das', 0),
(10, 1, 'dasdas', 'dasdsa', '1dsadsa', '[object File]', 'ddasdsadas', 0),
(11, 1, 'dasdas', 'dasdsa', '1dsadsa', '[object File]', 'ddasdsadas', 0),
(12, 1, 'dasdas', 'dasdsa', '1dsadsa', '[object File]', 'ddasdsadas', 0),
(13, 1, 'dasdas', 'dasdsa', '1dsadsa', '[object File]', 'ddasdsadas', 0),
(14, 2, 'Labels', 'Coke', 'Romania', 'undefined', 'Suc', 5),
(15, 1, 'Corks', 'da', 'romania', 'undefined', 'Ciuc', 5);

-- --------------------------------------------------------

--
-- Table structure for table `itemsowned`
--

CREATE TABLE `itemsowned` (
  `username` varchar(60) NOT NULL,
  `id_item` int(8) NOT NULL,
  `id_relationship` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `itemsowned`
--

INSERT INTO `itemsowned` (`username`, `id_item`, `id_relationship`) VALUES
('ffs', 2, 1),
('ffs', 2, 3),
('ffs', 3, 4),
('ffs', 4, 5),
('ffss', 4, 6),
('test', 1, 7),
('test', 3, 8),
('test', 5, 9),
('test', 6, 10),
('test', 4, 11),
('test', 14, 12);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(8) NOT NULL,
  `email` varchar(40) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `user`, `password`) VALUES
(35, 'admin@colr.com', 'admin', '81dc9bdb52d04dc20036dbd8313ed055'),
(52, 'asdasaaa', '11ssaaasds', 'c20ad4d76fe97759aa27a0c99bff6710'),
(62, '12311', '12311', '202cb962ac59075b964b07152d234b70'),
(63, '123111', '123111', '202cb962ac59075b964b07152d234b70'),
(65, '12311111', '12311121', '202cb962ac59075b964b07152d234b70'),
(66, '123111113', '123111212', '202cb962ac59075b964b07152d234b70'),
(67, '123111113a', '123111212a', '202cb962ac59075b964b07152d234b70'),
(69, 'asda', 'aa', '202cb962ac59075b964b07152d234b70'),
(70, 'asdas', 'aaa', '202cb962ac59075b964b07152d234b70'),
(71, 'asdasa', 'aaas', '202cb962ac59075b964b07152d234b70'),
(72, 'a', 'a', '0cc175b9c0f1b6a831c399e269772661'),
(73, 'as', 'as', '4124bc0a9335c27f086f24ba207a4912'),
(74, 'asa', 'asa', '4124bc0a9335c27f086f24ba207a4912'),
(75, 'asaa', 'asaa', '4124bc0a9335c27f086f24ba207a4912'),
(76, 'asaaa', 'asaaa', '4124bc0a9335c27f086f24ba207a4912'),
(77, 'asaaah', 'asaaah', '4124bc0a9335c27f086f24ba207a4912'),
(78, 'asaaahg', 'asaaahg', '4124bc0a9335c27f086f24ba207a4912'),
(79, 'asaaahgf', 'asaaahgf', '4124bc0a9335c27f086f24ba207a4912'),
(80, 'asaaahgfe', 'asaaahgfz', '4124bc0a9335c27f086f24ba207a4912'),
(81, '1', '2', '4124bc0a9335c27f086f24ba207a4912'),
(82, '12', '21', '4124bc0a9335c27f086f24ba207a4912'),
(83, '124', '213', '4124bc0a9335c27f086f24ba207a4912'),
(84, '1242', '2132', '4124bc0a9335c27f086f24ba207a4912'),
(85, '12424', '21324', '4124bc0a9335c27f086f24ba207a4912'),
(86, '124241', '213241', '4124bc0a9335c27f086f24ba207a4912'),
(87, '1242412', '2132411', '4124bc0a9335c27f086f24ba207a4912'),
(88, '12424121', '21324111', '4124bc0a9335c27f086f24ba207a4912'),
(89, '3', '3', '4124bc0a9335c27f086f24ba207a4912'),
(90, '4', '4', '4124bc0a9335c27f086f24ba207a4912'),
(91, '45', '45', '4124bc0a9335c27f086f24ba207a4912');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id_uniq`);

--
-- Indexes for table `itemsowned`
--
ALTER TABLE `itemsowned`
  ADD PRIMARY KEY (`id_relationship`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id_uniq` int(11) NOT NULL AUTO_INCREMENT COMMENT 'item id ', AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `itemsowned`
--
ALTER TABLE `itemsowned`
  MODIFY `id_relationship` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;