-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2022 at 06:57 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `becha_bikri`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(3) NOT NULL,
  `product_name` varchar(10) NOT NULL,
  `product_price` int(11) NOT NULL,
  `payment` tinyint(4) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `product_name`, `product_price`, `payment`, `quantity`, `date`) VALUES
(1, 'Rice', 2500, 0, 0, '2022-12-01'),
(2, 'Rice', 2500, 2, 0, '2022-12-01'),
(3, 'Flour', 1000, 0, 0, '2022-12-18'),
(4, 'Flour', 1000, 0, 0, '2022-12-18'),
(5, 'Flour', 1000, 0, 0, '2022-12-18'),
(6, 'Flour', 1000, 0, 0, '2022-12-18'),
(7, 'Flour', 1000, 0, 0, '2022-12-18'),
(8, 'Flour', 1000, 0, 0, '2022-12-18'),
(9, 'Flour', 1000, 0, 0, '2022-12-18'),
(10, 'Flour', 1000, 1, 3, '2022-12-18');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(3) NOT NULL,
  `name` varchar(10) NOT NULL,
  `details` varchar(100) NOT NULL,
  `price` int(3) NOT NULL,
  `image` varchar(50) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `details`, `price`, `image`, `date`) VALUES
(1, 'Rice', 'Fresh rice has no extra harmful chemicals.', 2500, '', '2022-11-30'),
(2, 'Flour', 'Fresh flour has no extra harmful chemicals.', 1000, '', '2022-11-30'),
(3, 'Sugar', 'Fresh Sugar no harmful chemical included', 100, '', '2022-11-30'),
(4, 'test', 'test', 99, '', '2022-11-30'),
(5, 'test', 'test', 9, '', '2022-11-30'),
(6, 'test', 'test', 99, '', '2022-11-30'),
(7, 'Shoes', 'Shoes for casual uses', 1500, '', '2022-12-18');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(3) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  `confirm_password` varchar(10) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `email`, `password`, `confirm_password`, `date`) VALUES
(1, 'dipu@gmail.com', '12345', '12345', '2022-12-01'),
(2, '', '', '', '2022-12-01'),
(3, '', '', '', '2022-12-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
