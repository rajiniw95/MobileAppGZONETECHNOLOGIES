-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 06, 2017 at 05:11 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `GZoneMobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `house_number` int(11) NOT NULL,
  `street_name` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) DEFAULT NULL,
  `postal_code` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `house_number`, `street_name`, `city`, `country`, `postal_code`) VALUES
(1, 56, 'Parliament Drive', 'Kotte', NULL, '10100'),
(2, 222, 'park street', 'colombo 7', 'sri lanka', '10999');

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `profile_image` varchar(500) DEFAULT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `login_id` int(11) DEFAULT NULL,
  `phone_number_id` int(11) DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  `deposit_amount_id` int(11) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`id`, `first_name`, `middle_name`, `last_name`, `email`, `profile_image`, `cart_id`, `login_id`, `phone_number_id`, `address_id`, `deposit_amount_id`, `password`) VALUES
(1, 'namal', NULL, 'alwis', 'na@gmail.com', NULL, 1, 2, 3, 1, 1, '1234');

-- --------------------------------------------------------

--
-- Table structure for table `agent_rating`
--

CREATE TABLE `agent_rating` (
  `id` int(11) NOT NULL,
  `contentt` varchar(100) DEFAULT NULL,
  `agent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `agent_rating`
--

INSERT INTO `agent_rating` (`id`, `contentt`, `agent_id`) VALUES
(1, 'satisfactory ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cash_on_delivery`
--

CREATE TABLE `cash_on_delivery` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cash_on_delivery`
--

INSERT INTO `cash_on_delivery` (`id`) VALUES
(1),
(2);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'television'),
(2, 'DVD Player');

-- --------------------------------------------------------

--
-- Table structure for table `collection_point`
--

CREATE TABLE `collection_point` (
  `id` int(11) NOT NULL,
  `agent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `collection_point`
--

INSERT INTO `collection_point` (`id`, `agent_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `courier`
--

CREATE TABLE `courier` (
  `id` int(11) NOT NULL,
  `charge` decimal(10,0) NOT NULL,
  `phone_number_id` int(11) NOT NULL,
  `courier_serviceprovider_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courier`
--

INSERT INTO `courier` (`id`, `charge`, `phone_number_id`, `courier_serviceprovider_id`, `address_id`) VALUES
(1, '800', 3, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `courier_serviceprovider`
--

CREATE TABLE `courier_serviceprovider` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone_number_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courier_serviceprovider`
--

INSERT INTO `courier_serviceprovider` (`id`, `first_name`, `middle_name`, `last_name`, `email`, `phone_number_id`) VALUES
(1, 'chandika', NULL, 'perera', 'cp@gmail.com', 4);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `profile_image` varchar(500) DEFAULT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `phone_number_id` int(11) DEFAULT NULL,
  `login_id` int(11) DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `first_name`, `middle_name`, `last_name`, `email`, `profile_image`, `cart_id`, `phone_number_id`, `login_id`, `address_id`, `password`) VALUES
(1, 'Jill', NULL, 'Silva', 'js@gmail.com', NULL, 1, 3, 3, 2, '123');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_method`
--

CREATE TABLE `delivery_method` (
  `id` int(11) NOT NULL,
  `type` varchar(40) NOT NULL,
  `collection_point_id` int(11) DEFAULT NULL,
  `courier_id` int(11) DEFAULT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `delivery_method`
--

INSERT INTO `delivery_method` (`id`, `type`, `collection_point_id`, `courier_id`, `status`) VALUES
(1, 'tv', 1, NULL, 'delivered'),
(2, '', NULL, 1, 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `deposit_amount`
--

CREATE TABLE `deposit_amount` (
  `id` int(11) NOT NULL,
  `commission` decimal(10,0) DEFAULT NULL,
  `deposit_amount` decimal(10,0) DEFAULT NULL,
  `status` varchar(40) NOT NULL,
  `cash_collected` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `deposit_amount`
--

INSERT INTO `deposit_amount` (`id`, `commission`, `deposit_amount`, `status`, `cash_collected`) VALUES
(1, '700', '9000', 'pending', '30000');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `user_name`, `password`, `role`) VALUES
(1, 'admin', 'admin', ''),
(2, 'john', 'john', 'agent'),
(3, 'jill', 'jill', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `online_payment`
--

CREATE TABLE `online_payment` (
  `id` int(11) NOT NULL,
  `cardholder_name` varchar(50) DEFAULT NULL,
  `card_number` int(11) DEFAULT NULL,
  `cvv` int(11) DEFAULT NULL,
  `expiry_date` varchar(50) DEFAULT NULL,
  `paypal_id` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `online_payment`
--

INSERT INTO `online_payment` (`id`, `cardholder_name`, `card_number`, `cvv`, `expiry_date`, `paypal_id`) VALUES
(1, 'p perera', 672930182, 123, '05/2017', 'pperera');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `delivery_method_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `date`, `quantity`, `price`, `delivery_method_id`, `payment_id`, `discount`) VALUES
(4, '2017-12-12', 2, '900000', 2, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order_has_product`
--

CREATE TABLE `order_has_product` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_has_product`
--

INSERT INTO `order_has_product` (`order_id`, `product_id`) VALUES
(4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `type` varchar(40) NOT NULL,
  `payment_amount` decimal(10,0) NOT NULL,
  `cash_on_delivery_id` int(11) DEFAULT NULL,
  `online_payment_id` int(11) DEFAULT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`id`, `type`, `payment_amount`, `cash_on_delivery_id`, `online_payment_id`, `status`) VALUES
(1, 'tv', '100000', 1, NULL, 'pending'),
(2, 'tv', '200999', NULL, 1, 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `phone_number`
--

CREATE TABLE `phone_number` (
  `id` int(11) NOT NULL,
  `phone_number` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `phone_number`
--

INSERT INTO `phone_number` (`id`, `phone_number`) VALUES
(1, '0777237488'),
(2, '0777729183'),
(3, '0115773829'),
(4, '0723627184');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT '0',
  `price` int(11) DEFAULT '0',
  `model` varchar(25) DEFAULT '0',
  `image` varchar(500) DEFAULT '0',
  `dicount` decimal(10,0) DEFAULT '0',
  `segment_id` int(11) DEFAULT '0',
  `quantity` int(11) DEFAULT '0',
  `category_id` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `model`, `image`, `dicount`, `segment_id`, `quantity`, `category_id`) VALUES
(2, 'tv', '32\" television', 79000, 'Sony ', NULL, '0', 1, 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_rating`
--

CREATE TABLE `product_rating` (
  `id` int(11) NOT NULL,
  `content` varchar(100) DEFAULT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_rating`
--

INSERT INTO `product_rating` (`id`, `content`, `product_id`) VALUES
(1, 'Extremely satisfied', 2);

-- --------------------------------------------------------

--
-- Table structure for table `segment`
--

CREATE TABLE `segment` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `segment`
--

INSERT INTO `segment` (`id`, `name`) VALUES
(1, 'electronics'),
(2, 'mobile phones '),
(3, 'mobile phone accessories '),
(4, 'clothing');

-- --------------------------------------------------------

--
-- Table structure for table `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL,
  `cart_cost` decimal(10,0) DEFAULT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shopping_cart`
--

INSERT INTO `shopping_cart` (`id`, `cart_cost`, `order_id`) VALUES
(1, '90000', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_agent_cart1_idx` (`cart_id`),
  ADD KEY `fk_agent_login1_idx` (`login_id`),
  ADD KEY `fk_agent_phone_number1_idx` (`phone_number_id`),
  ADD KEY `fk_agent_address1_idx` (`address_id`),
  ADD KEY `fk_agent_deposit_amount1_idx` (`deposit_amount_id`);

--
-- Indexes for table `agent_rating`
--
ALTER TABLE `agent_rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_agent_rating_agent1_idx` (`agent_id`);

--
-- Indexes for table `cash_on_delivery`
--
ALTER TABLE `cash_on_delivery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collection_point`
--
ALTER TABLE `collection_point`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_collection_point_agent1_idx` (`agent_id`);

--
-- Indexes for table `courier`
--
ALTER TABLE `courier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_courier_phone_number1_idx` (`phone_number_id`),
  ADD KEY `fk_courier_courier_serviceprovider1_idx` (`courier_serviceprovider_id`),
  ADD KEY `fk_courier_address1_idx` (`address_id`);

--
-- Indexes for table `courier_serviceprovider`
--
ALTER TABLE `courier_serviceprovider`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_courier_serviceprovider_phone_number1_idx` (`phone_number_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_customer_cart1_idx` (`cart_id`),
  ADD KEY `fk_customer_phone_number1_idx` (`phone_number_id`),
  ADD KEY `fk_customer_login1_idx` (`login_id`),
  ADD KEY `fk_customer_address1_idx` (`address_id`);

--
-- Indexes for table `delivery_method`
--
ALTER TABLE `delivery_method`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_delivery_method_collection_point1_idx` (`collection_point_id`),
  ADD KEY `fk_delivery_method_courier1_idx` (`courier_id`);

--
-- Indexes for table `deposit_amount`
--
ALTER TABLE `deposit_amount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `online_payment`
--
ALTER TABLE `online_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_delivery_method1_idx` (`delivery_method_id`),
  ADD KEY `fk_order_payment1_idx` (`payment_id`);

--
-- Indexes for table `order_has_product`
--
ALTER TABLE `order_has_product`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `fk_order_has_product_product1_idx` (`product_id`),
  ADD KEY `fk_order_has_product_order1_idx` (`order_id`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_payment_cash_on_delivery1_idx` (`cash_on_delivery_id`),
  ADD KEY `fk_payment_online_payment1_idx` (`online_payment_id`);

--
-- Indexes for table `phone_number`
--
ALTER TABLE `phone_number`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_segment1_idx` (`segment_id`),
  ADD KEY `fk_product_category1_idx` (`category_id`);

--
-- Indexes for table `product_rating`
--
ALTER TABLE `product_rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_rating_product1_idx` (`product_id`);

--
-- Indexes for table `segment`
--
ALTER TABLE `segment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_shopping_cart_order1_idx` (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `agent_rating`
--
ALTER TABLE `agent_rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cash_on_delivery`
--
ALTER TABLE `cash_on_delivery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `collection_point`
--
ALTER TABLE `collection_point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `courier`
--
ALTER TABLE `courier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `courier_serviceprovider`
--
ALTER TABLE `courier_serviceprovider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `delivery_method`
--
ALTER TABLE `delivery_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `deposit_amount`
--
ALTER TABLE `deposit_amount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `online_payment`
--
ALTER TABLE `online_payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `phone_number`
--
ALTER TABLE `phone_number`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `product_rating`
--
ALTER TABLE `product_rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `segment`
--
ALTER TABLE `segment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `fk_agent_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_agent_cart1` FOREIGN KEY (`cart_id`) REFERENCES `shopping_cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_agent_deposit_amount1` FOREIGN KEY (`deposit_amount_id`) REFERENCES `deposit_amount` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_agent_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_agent_phone_number1` FOREIGN KEY (`phone_number_id`) REFERENCES `phone_number` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `agent_rating`
--
ALTER TABLE `agent_rating`
  ADD CONSTRAINT `fk_agent_rating_agent1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `collection_point`
--
ALTER TABLE `collection_point`
  ADD CONSTRAINT `fk_collection_point_agent1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `courier`
--
ALTER TABLE `courier`
  ADD CONSTRAINT `fk_courier_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_courier_courier_serviceprovider1` FOREIGN KEY (`courier_serviceprovider_id`) REFERENCES `courier_serviceprovider` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_courier_phone_number1` FOREIGN KEY (`phone_number_id`) REFERENCES `phone_number` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `courier_serviceprovider`
--
ALTER TABLE `courier_serviceprovider`
  ADD CONSTRAINT `fk_courier_serviceprovider_phone_number1` FOREIGN KEY (`phone_number_id`) REFERENCES `phone_number` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `fk_customer_address1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_customer_cart1` FOREIGN KEY (`cart_id`) REFERENCES `shopping_cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_customer_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_customer_phone_number1` FOREIGN KEY (`phone_number_id`) REFERENCES `phone_number` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `delivery_method`
--
ALTER TABLE `delivery_method`
  ADD CONSTRAINT `delivery_method_ibfk_1` FOREIGN KEY (`courier_id`) REFERENCES `courier` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_delivery_method_collection_point1` FOREIGN KEY (`collection_point_id`) REFERENCES `collection_point` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_order_delivery_method1` FOREIGN KEY (`delivery_method_id`) REFERENCES `delivery_method` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_payment1` FOREIGN KEY (`payment_id`) REFERENCES `payment_method` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order_has_product`
--
ALTER TABLE `order_has_product`
  ADD CONSTRAINT `fk_order_has_product_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_has_product_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD CONSTRAINT `fk_payment_cash_on_delivery1` FOREIGN KEY (`cash_on_delivery_id`) REFERENCES `cash_on_delivery` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_payment_online_payment1` FOREIGN KEY (`online_payment_id`) REFERENCES `online_payment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_product_segment1` FOREIGN KEY (`segment_id`) REFERENCES `segment` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `product_rating`
--
ALTER TABLE `product_rating`
  ADD CONSTRAINT `fk_product_rating_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD CONSTRAINT `fk_shopping_cart_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
