-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2020 at 11:32 PM
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
  `description` text NOT NULL,
  `country` varchar(20) NOT NULL,
  `img` varchar(40) NOT NULL DEFAULT 'noimage.png',
  `name` varchar(40) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id_uniq`, `type`, `category`, `description`, `country`, `img`, `name`, `price`) VALUES
(31, 1, 'Corks', 'It is obtained from the bridge of the cortex in the oak’s th', 'Germany', 'jepo036btr.jpg', 'One Piece Natural cork', 1),
(32, 1, 'Corks', 'There are two or more pieces of cork glued together. The cor', 'Poland', '2h9j5wagvi.jpg', 'Multi-Piece cork', 1),
(33, 1, 'Corks', 'Finally there is the glass cork. It’s an innovation since th', 'Italy', 'zkmijlh4xc.jpg', 'Glass cork', 5),
(34, 1, 'Corks', 'High quality synthetic corks provide the best air-tight seal', 'Germany', 'bn6jq4xlzo.jpg', 'Synthetic wine cork', 1),
(35, 1, 'Caps', 'Made out of metal', 'Romania', 'x1no4dzqp8.jpg', 'Neumarkt beer cap', 1),
(36, 1, 'Caps', 'Made out of metal', 'Romania', 'z06hpqnu75.jpg', 'Ursus Beer Cap', 1),
(37, 1, 'Caps', 'Made out of metal', 'Romania', 'yq8n06gzpc.jpg', 'Ciucas beer cap', 1),
(38, 1, 'Labels', 'Old beer label', 'Romania', 'rcedv25kia.jpg', 'Zarand', 11),
(39, 1, 'Labels', 'Old beeeeeeeeeeeeer label', 'Romania', 'ypjl189vnb.jpg', 'Bajor Sor', 111),
(40, 1, 'Labels', 'Old beer label', 'Romania', '7ahgm40y8k.jpg', 'Carpatina', 9999),
(41, 2, 'Corks', 'rubber', 'Romania', '5nwat0kv1c.jpg', 'Rubber cork', 2),
(42, 2, 'Corks', 'Made for ice', 'Romania', 'j3fsq7xop4.jpg', 'Ice cork', 5),
(43, 2, 'Corks', 'Made out of aluminium, brown', 'Romania', 'pw5slqz37r.jpg', 'Aluminium cork', 1),
(44, 2, 'Caps', 'Made out of plastic, green', 'Romania', 'mdvp2yreqn.jpg', 'Dorna Cap', 1),
(45, 2, 'Caps', 'Made for kids', 'Romania', 'qotx925a37.jpg', 'Aqua Carpatica kids', 5),
(46, 2, 'Caps', 'Red, made out of plastic', 'United Kingdom', 't4cwls91km.jpg', 'Coca Cola', 1),
(47, 2, 'Labels', 'Pepsi bottle at 0.5 label', 'Romania', 'r2tp1ovd5x.jpg', 'Pepsi 0.5', 2),
(48, 2, 'Labels', 'with cherries', 'Romania', 'n9rgjbqzix.jpg', 'Coca Cola cherry', 2),
(49, 2, 'Labels', 'With vanilla!', 'Romania', 'kl791quviw.jpg', 'Coca Cola Vanilla', 5),
(50, 2, 'Corks', 'Natural cork closures are made from punching through a piece of cork strip, like a biscuit cutter through dough. The natural structure of cork is perfect for ageing wine as it allows just the right amount of oxygen to come in contact with the wine to allow it to mature. Many wines are not intended to mature in the bottle of course, so only those higher quality wines are suited to using natural corks.', 'Ro', 'oq0jihnb47.jpg', 'Test', 22);

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
('test', 31, 29),
('test', 32, 30),
('test', 34, 31),
('test', 38, 32),
('test', 43, 33),
('test', 42, 34),
('test', 45, 35),
('test', 40, 36),
('test', 49, 37),
('test2', 35, 38),
('test2', 38, 39),
('test2', 37, 40),
('test2', 47, 41),
('test2', 46, 42),
('test2', 48, 43),
('test2', 49, 44),
('admin', 49, 45),
('admin', 40, 46),
('admin', 39, 47),
('admin', 35, 48),
('admin', 34, 49),
('admin', 31, 50);

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
(35, 'test2@gmail.com', 'test2', 'ad0234829205b9033196ba818f7a872b'),
(36, 'admin@admin.com', 'admin', '21232f297a57a5a743894a0e4a801fc3');

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
  MODIFY `id_uniq` int(11) NOT NULL AUTO_INCREMENT COMMENT 'item id ', AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `itemsowned`
--
ALTER TABLE `itemsowned`
  MODIFY `id_relationship` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
