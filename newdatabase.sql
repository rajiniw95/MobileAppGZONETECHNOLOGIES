-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2018 at 09:45 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `advertisements`
--

CREATE TABLE `advertisements` (
  `addID` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `path` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`addID`, `name`, `path`) VALUES
(1, 'Galaxy S8', 'assets\\adds\\imageOne.jpg'),
(2, 'Headset', 'assets\\adds\\imageTwo.jpg'),
(3, 'TV', 'assets\\adds\\imageThree.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `agentID` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `profile_photo` varchar(500) NOT NULL,
  `address` varchar(250) NOT NULL,
  `tel_no` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`agentID`, `user_name`, `password`, `fname`, `lname`, `profile_photo`, `address`, `tel_no`) VALUES
(1, 'agent1', 'agent111', 'Peter', 'Parker', 'assets\\img\\20160822033636.jpg', '40, Mal Road, Colombo', '0772637288'),
(2, 'agent2', 'agent222', 'John', 'SmithASSS', 'assets\\img\\8_19.jpg', '70, Flower Road, Kandy', '0775446344'),
(3, 'agent3', 'agent333', 'Jill', 'Selva', 'assets\\img\\images.jpg', '90, Dias Road, Galle', '0774354422');

-- --------------------------------------------------------

--
-- Table structure for table `agent_address`
--

CREATE TABLE `agent_address` (
  `id` int(11) NOT NULL,
  `house_number` varchar(50) NOT NULL,
  `street_name` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) DEFAULT NULL,
  `postal_code` varchar(45) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `amout_to_be_deposit`
--

CREATE TABLE `amout_to_be_deposit` (
  `to_deposit_id` int(11) NOT NULL,
  `total_amount` int(20) DEFAULT NULL,
  `agent_agent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cash_on_delivery`
--

CREATE TABLE `cash_on_delivery` (
  `cash_on_delivery_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`) VALUES
(1, 'Mobile & Tablets'),
(2, 'Computer & Laptops'),
(3, 'Electronics'),
(4, 'Other Products');

-- --------------------------------------------------------

--
-- Table structure for table `collection_point`
--

CREATE TABLE `collection_point` (
  `id` int(11) NOT NULL,
  `agent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `courier`
--

CREATE TABLE `courier` (
  `courier_id` int(11) NOT NULL,
  `charge` decimal(10,0) NOT NULL,
  `phone_number_id` varchar(45) NOT NULL,
  `courier_serviceprovider_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `courier_serviceprovider`
--

CREATE TABLE `courier_serviceprovider` (
  `courier_serviceprovider_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone_number_id` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(50) DEFAULT NULL,
  `customer_email` varchar(50) NOT NULL,
  `customer_phone_num` varchar(45) DEFAULT NULL,
  `customer_address_id` int(11) DEFAULT NULL,
  `user_username` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `customer_email`, `customer_phone_num`, `customer_address_id`, `user_username`) VALUES
(3, 'Sunil', 'sa@gmail.com', '0772462823', NULL, 'sunil'),
(4, 'Amal', 'ap@gmail.com', '0773637282', NULL, 'amal'),
(5, NULL, 'fog', NULL, NULL, 'fudge'),
(6, NULL, 'ytgfhjg', NULL, NULL, 'gfdg'),
(7, NULL, 'hgfj', NULL, NULL, 'hfdgh'),
(8, NULL, 'fdghj', NULL, NULL, 'dfgh'),
(9, NULL, 'tgfh', NULL, NULL, 'fgdhgj'),
(10, NULL, 'fdgfh', NULL, NULL, 'hgdf'),
(11, NULL, 'fdhgjb', NULL, NULL, 'gfdhgjn'),
(12, NULL, 'rfdgh', NULL, NULL, 'gsfdh'),
(13, NULL, 'gfhjbtdfgh', NULL, NULL, 'tfdgh'),
(14, NULL, 'ftdgh', NULL, NULL, 'gfdhj');

-- --------------------------------------------------------

--
-- Table structure for table `customer_address`
--

CREATE TABLE `customer_address` (
  `id` int(11) NOT NULL,
  `house_number` int(11) DEFAULT NULL,
  `street_name` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `postal_code` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `deliveries`
--

CREATE TABLE `deliveries` (
  `dID` int(11) NOT NULL,
  `agentID` int(11) DEFAULT NULL,
  `orderID` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deliveries`
--

INSERT INTO `deliveries` (`dID`, `agentID`, `orderID`, `date`, `status`) VALUES
(1, 2, 1, '2017-12-15', 'delivered'),
(4, 2, 23, '2017-12-23', 'pending'),
(6, 2, 30, '2017-12-22', 'pending'),
(7, 2, 24, '2017-12-28', 'pending'),
(9, 2, 32, '2017-12-28', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_method`
--

CREATE TABLE `delivery_method` (
  `delivery_method_id` int(11) NOT NULL,
  `type` enum('1','0') NOT NULL,
  `collection_point_id` int(11) NOT NULL,
  `courier_id` int(11) NOT NULL,
  `status` enum('1','0') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `online_payment`
--

CREATE TABLE `online_payment` (
  `online_payment_id` int(11) NOT NULL,
  `cardholder_name` varchar(50) DEFAULT NULL,
  `card_number` int(11) DEFAULT NULL,
  `cvv` int(11) DEFAULT NULL,
  `expiry_date` varchar(50) DEFAULT NULL,
  `paypal_id` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(4) NOT NULL,
  `customerID` int(4) NOT NULL,
  `Agent_Id` int(11) NOT NULL,
  `status` varchar(500) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `cash_on_delivery` tinyint(1) DEFAULT NULL,
  `online_payment` tinyint(1) DEFAULT NULL,
  `month` int(3) NOT NULL,
  `no_items` int(11) NOT NULL,
  `deliverydate` date NOT NULL,
  `order_for` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `customerID`, `Agent_Id`, `status`, `total_amount`, `cash_on_delivery`, `online_payment`, `month`, `no_items`, `deliverydate`, `order_for`) VALUES
(1, 3, 2, 'delivered', 80000, 1, NULL, 4, 5, '2018-03-20', 'customer'),
(20, 8, 2, 'pending', 700, 1, NULL, 4, 6, '0000-00-00', 'agent'),
(21, 13, 2, 'dispatched', 700, 1, NULL, 4, 2, '0000-00-00', 'customer'),
(22, 3, 2, 'pending', 400, 1, NULL, 4, 5, '0000-00-00', 'agent'),
(23, 3, 2, 'dispatched', 800, 1, NULL, 4, 1, '0000-00-00', 'customer'),
(24, 12, 2, 'pending', 600, 1, NULL, 4, 3, '0000-00-00', 'agent'),
(26, 3, 2, 'delivered', 900, 1, NULL, 4, 2, '2018-02-21', 'customer'),
(27, 3, 2, 'delivered', 70, 1, NULL, 4, 1, '2018-02-21', 'agent'),
(28, 4, 2, 'delivered', 5600, 1, NULL, 4, 1, '2018-02-06', 'customer'),
(30, 13, 2, 'dispatched', 200, 1, NULL, 4, 1, '0000-00-00', 'agent'),
(31, 5, 2, 'pending', 300, 1, NULL, 4, 2, '0000-00-00', 'customer'),
(32, 9, 2, 'dispatched', 6000, 1, NULL, 4, 5, '0000-00-00', 'agent');

-- --------------------------------------------------------

--
-- Table structure for table `order_has_product`
--

CREATE TABLE `order_has_product` (
  `ohp_Id` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `product_photo` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `product_name` int(11) NOT NULL,
  `tot_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_has_product`
--

INSERT INTO `order_has_product` (`ohp_Id`, `orderID`, `productID`, `qty`, `product_photo`, `description`, `product_name`, `tot_price`) VALUES
(1, 1, 2, 3, 'assets\\img\\images (1).jpg', '', 0, 0),
(6, 20, 1, 1, 'assets\\img\\bluetooth-isolated-on-white.jpg', '', 0, 0),
(7, 21, 1, 2, 'assets\\img\\bluetooth-isolated-on-white.jpg', '', 0, 0),
(8, 22, 1, 1, 'assets\\img\\bluetooth-isolated-on-white.jpg', '', 0, 0),
(9, 22, 2, 1, 'assets\\img\\images (1).jpg', '', 0, 0),
(10, 23, 2, 1, 'assets\\img\\images (1).jpg', '', 0, 0),
(11, 24, 2, 4, 'assets\\img\\images (1).jpg', '', 0, 0),
(13, 26, 2, 3, 'assets\\img\\images (1).jpg', '', 0, 0),
(14, 26, 2, 4, 'assets\\img\\images (1).jpg', '', 0, 0),
(15, 27, 1, 1, 'assets\\img\\bluetooth-isolated-on-white.jpg', '', 0, 0),
(16, 28, 1, 1, 'assets\\img\\bluetooth-isolated-on-white.jpg', '', 0, 0),
(18, 30, 1, 1, 'assets\\img\\bluetooth-isolated-on-white.jpg', '', 0, 0),
(19, 31, 1, 8, 'assets\\img\\bluetooth-isolated-on-white.jpg', '', 0, 0),
(20, 32, 1, 1, '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `payment_method_id` int(11) NOT NULL,
  `type` enum('1','0') NOT NULL,
  `payment_amount` decimal(10,0) NOT NULL,
  `cash_on_delivery_id` int(11) NOT NULL,
  `online_payment_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productID` int(11) NOT NULL,
  `product_name` text NOT NULL,
  `product_photo` varchar(500) NOT NULL,
  `qty` int(11) NOT NULL,
  `product_description` text NOT NULL,
  `warranty_period` int(11) NOT NULL,
  `w_validity_conditions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productID`, `product_name`, `product_photo`, `qty`, `product_description`, `warranty_period`, `w_validity_conditions`) VALUES
(1, 'Bluetooth Device', 'assets\\img\\bluetooth-isolated-on-white.jpg', 90, 'High quality bluetooth device compatible with Android devices. ', 12, 'no physical damage to be done'),
(2, 'Google Glass Replica', 'assets\\img\\images (1).jpg', 70, 'Unique pair of glasses similar to google glasses', 52, 'No scratch marks on lense ');

-- --------------------------------------------------------

--
-- Table structure for table `record-deposit`
--

CREATE TABLE `record-deposit` (
  `rdID` int(10) NOT NULL,
  `Agent_Id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `month` varchar(10) NOT NULL,
  `date` int(11) NOT NULL,
  `total_amount` varchar(134) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `record-deposit`
--

INSERT INTO `record-deposit` (`rdID`, `Agent_Id`, `year`, `month`, `date`, `total_amount`) VALUES
(1, 2, 2017, '12', 13, '91205.1'),
(2, 2, 0, '2', 0, '0'),
(3, 2, 0, '4', 0, '89531.1');

-- --------------------------------------------------------

--
-- Table structure for table `segment`
--

CREATE TABLE `segment` (
  `segment_id` int(11) NOT NULL,
  `segment_name` varchar(45) NOT NULL,
  `category_cat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `segment`
--

INSERT INTO `segment` (`segment_id`, `segment_name`, `category_cat_id`) VALUES
(1, 'Mobile & Tablets', 1),
(2, 'Mobile & Tablets Accessories', 1),
(3, 'Other Smart Devices', 1),
(4, 'Computer Accessories', 2),
(5, 'Datacards & Routers', 2),
(6, 'Storage', 2),
(7, 'Gaming', 2),
(8, 'Camera', 3),
(9, 'Audio & Video Accessories', 3),
(10, 'Speakers', 3),
(11, 'Headphones', 3),
(12, 'Personal Care Applications', 3),
(13, 'Other Products', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(45) NOT NULL,
  `password` varchar(128) NOT NULL,
  `user_role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `user_role_id`) VALUES
('blah', '202cb962ac59075b964b07152d234b70', 2),
('Duck', 'f97ca8decb3a5f04d11d0e3c6ff3f0cd', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `type` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`id`, `type`) VALUES
(1, 'agent'),
(2, 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `warranty_claims_made`
--

CREATE TABLE `warranty_claims_made` (
  `warranty_claim_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `prod_name` text NOT NULL,
  `date` date NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `warranty_claims_made`
--

INSERT INTO `warranty_claims_made` (`warranty_claim_id`, `customer_id`, `orderID`, `prod_name`, `date`, `qty`) VALUES
(2, 3, 1, 'DSLR Camera', '2017-09-12', 1),
(3, 3, 26, 'iPhone X', '2018-03-21', 2),
(4, 5, 27, 'Headphones', '2017-12-13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `warranty_claim_request`
--

CREATE TABLE `warranty_claim_request` (
  `request_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `agent_id` int(11) NOT NULL,
  `status` text NOT NULL,
  `comments` text NOT NULL,
  `customer_name` text NOT NULL,
  `customer_telno` int(11) NOT NULL,
  `sub_date` date NOT NULL,
  `qty` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `warranty_claim_request`
--

INSERT INTO `warranty_claim_request` (`request_id`, `customer_id`, `agent_id`, `status`, `comments`, `customer_name`, `customer_telno`, `sub_date`, `qty`, `product_id`) VALUES
(3, 3, 2, 'pending', '', 'Sunil', 777256372, '2018-04-11', 0, 0),
(4, 3, 2, 'rejected', 'rejected due to physical damage done by customer', 'Sunil', 772536177, '2018-04-01', 0, 0),
(5, 4, 3, 'rejected', 'N/A', 'Sajith', 772637162, '2018-04-06', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`addID`);

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`agentID`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- Indexes for table `agent_address`
--
ALTER TABLE `agent_address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `amout_to_be_deposit`
--
ALTER TABLE `amout_to_be_deposit`
  ADD PRIMARY KEY (`to_deposit_id`),
  ADD KEY `fk_amout_to_be_deposit_agent1_idx` (`agent_agent_id`);

--
-- Indexes for table `cash_on_delivery`
--
ALTER TABLE `cash_on_delivery`
  ADD PRIMARY KEY (`cash_on_delivery_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

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
  ADD PRIMARY KEY (`courier_id`),
  ADD KEY `fk_courier_courier_serviceprovider1_idx` (`courier_serviceprovider_id`);

--
-- Indexes for table `courier_serviceprovider`
--
ALTER TABLE `courier_serviceprovider`
  ADD PRIMARY KEY (`courier_serviceprovider_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `fk_customer_address1_idx` (`customer_address_id`),
  ADD KEY `fk_customer_user1_idx` (`user_username`);

--
-- Indexes for table `customer_address`
--
ALTER TABLE `customer_address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`dID`),
  ADD KEY `fk_del_agentid` (`agentID`),
  ADD KEY `fk_del_orderid` (`orderID`);

--
-- Indexes for table `delivery_method`
--
ALTER TABLE `delivery_method`
  ADD PRIMARY KEY (`delivery_method_id`),
  ADD KEY `fk_delivery_method_collection_point1_idx` (`collection_point_id`),
  ADD KEY `fk_delivery_method_courier1_idx` (`courier_id`);

--
-- Indexes for table `online_payment`
--
ALTER TABLE `online_payment`
  ADD PRIMARY KEY (`online_payment_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `fk_orders_agentID` (`Agent_Id`),
  ADD KEY `fk_orders_custID` (`customerID`);

--
-- Indexes for table `order_has_product`
--
ALTER TABLE `order_has_product`
  ADD PRIMARY KEY (`ohp_Id`),
  ADD KEY `fk_ohp_orderid` (`orderID`),
  ADD KEY `fk_ohp_prodid` (`productID`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`payment_method_id`),
  ADD UNIQUE KEY `id_UNIQUE` (`payment_method_id`),
  ADD KEY `fk_payment_cash_on_delivery1_idx` (`cash_on_delivery_id`),
  ADD KEY `fk_payment_online_payment1_idx` (`online_payment_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `record-deposit`
--
ALTER TABLE `record-deposit`
  ADD PRIMARY KEY (`rdID`),
  ADD KEY `fk_rd_agent` (`Agent_Id`);

--
-- Indexes for table `segment`
--
ALTER TABLE `segment`
  ADD PRIMARY KEY (`segment_id`),
  ADD KEY `fk_segment_category1_idx` (`category_cat_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`),
  ADD KEY `fk_user_user_role1_idx` (`user_role_id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warranty_claims_made`
--
ALTER TABLE `warranty_claims_made`
  ADD PRIMARY KEY (`warranty_claim_id`);

--
-- Indexes for table `warranty_claim_request`
--
ALTER TABLE `warranty_claim_request`
  ADD PRIMARY KEY (`request_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `addID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `agentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `amout_to_be_deposit`
--
ALTER TABLE `amout_to_be_deposit`
  MODIFY `to_deposit_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cash_on_delivery`
--
ALTER TABLE `cash_on_delivery`
  MODIFY `cash_on_delivery_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `collection_point`
--
ALTER TABLE `collection_point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `courier_serviceprovider`
--
ALTER TABLE `courier_serviceprovider`
  MODIFY `courier_serviceprovider_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `customer_address`
--
ALTER TABLE `customer_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `dID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `delivery_method`
--
ALTER TABLE `delivery_method`
  MODIFY `delivery_method_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `online_payment`
--
ALTER TABLE `online_payment`
  MODIFY `online_payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `order_has_product`
--
ALTER TABLE `order_has_product`
  MODIFY `ohp_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `payment_method_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `record-deposit`
--
ALTER TABLE `record-deposit`
  MODIFY `rdID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `segment`
--
ALTER TABLE `segment`
  MODIFY `segment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `warranty_claims_made`
--
ALTER TABLE `warranty_claims_made`
  MODIFY `warranty_claim_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `warranty_claim_request`
--
ALTER TABLE `warranty_claim_request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courier`
--
ALTER TABLE `courier`
  ADD CONSTRAINT `fk_courier_courier_serviceprovider1` FOREIGN KEY (`courier_serviceprovider_id`) REFERENCES `courier_serviceprovider` (`courier_serviceprovider_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `fk_del_agentid` FOREIGN KEY (`agentID`) REFERENCES `agent` (`agentID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_del_orderid` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `delivery_method`
--
ALTER TABLE `delivery_method`
  ADD CONSTRAINT `fk_delivery_method_collection_point1` FOREIGN KEY (`collection_point_id`) REFERENCES `collection_point` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_delivery_method_courier1` FOREIGN KEY (`courier_id`) REFERENCES `courier` (`courier_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_agentID` FOREIGN KEY (`Agent_Id`) REFERENCES `agent` (`agentID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_custID` FOREIGN KEY (`customerID`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_has_product`
--
ALTER TABLE `order_has_product`
  ADD CONSTRAINT `fk_ohp_orderid` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_ohp_prodid` FOREIGN KEY (`productID`) REFERENCES `product` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD CONSTRAINT `fk_payment_cash_on_delivery1` FOREIGN KEY (`cash_on_delivery_id`) REFERENCES `cash_on_delivery` (`cash_on_delivery_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_payment_online_payment1` FOREIGN KEY (`online_payment_id`) REFERENCES `online_payment` (`online_payment_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `record-deposit`
--
ALTER TABLE `record-deposit`
  ADD CONSTRAINT `fk_rd_agent` FOREIGN KEY (`Agent_Id`) REFERENCES `agent` (`agentID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `segment`
--
ALTER TABLE `segment`
  ADD CONSTRAINT `fk_segment_category1` FOREIGN KEY (`category_cat_id`) REFERENCES `category` (`cat_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
