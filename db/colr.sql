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
(34, 'test@test.com', 'test', '098f6bcd4621d373cade4e832627b4f6'),
(35, 'test2@gmail.com', 'test2', 'ad0234829205b9033196ba818f7a872b');

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
