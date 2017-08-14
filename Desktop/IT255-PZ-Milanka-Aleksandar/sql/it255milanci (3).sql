-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2017 at 08:13 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it255milanci`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategorija`
--

CREATE TABLE `kategorija` (
  `id` int(11) NOT NULL,
  `naziv` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategorija`
--

INSERT INTO `kategorija` (`id`, `naziv`) VALUES
(1, 'Protein'),
(2, 'Kreatin'),
(3, 'Pre-workout'),
(4, 'Sagorevaci'),
(5, 'Aminokiseline');

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE `korisnici` (
  `id` int(11) NOT NULL,
  `ime` varchar(128) NOT NULL,
  `prezime` varchar(128) NOT NULL,
  `adresa` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `lozinka` varchar(128) NOT NULL,
  `role_id` int(11) NOT NULL,
  `token` varchar(256) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`id`, `ime`, `prezime`, `adresa`, `email`, `lozinka`, `role_id`, `token`) VALUES
(2, 'Milanka', 'Bjelic', 'Urosa Martinovica 5', 'milanka@gmail.com', '15b1f6bf4bf32efa0229318eb532564c', 1, '887bf5616d2966030ec03268ac3c3f58482678b7'),
(3, 'Aleksandar', 'Beric', 'Vojin put 2', 'beric@gmail.com', '8378e7da76a8d91c8e00d3ba92a4089c', 0, '4ae3bd133053fa654ea907ed16fc422eaf020b71'),
(4, 'Srdjan', 'Stevanovic', 'Loznica', 'srdjan@gmal.com', 'c4f0efaf80d39fe476f4f5c141e47489', 1, 'dd7e480087181992ada47ab7d49cf5025a31e11a'),
(5, 'Petar', 'Petrovic', 'Kralja Petra 17', 'petar@gmail.com', '5bc6e3a3eceed5eb15bad65f94e8b177', 0, 'ad97e9746463797f7b78f5bbfb0bf812ef2cf1cd');

-- --------------------------------------------------------

--
-- Table structure for table `korpa`
--

CREATE TABLE `korpa` (
  `id` int(11) NOT NULL,
  `idKorisnika` int(11) NOT NULL,
  `flag` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korpa`
--

INSERT INTO `korpa` (`id`, `idKorisnika`, `flag`) VALUES
(16, 2, 2),
(17, 3, 2),
(18, 2, 2),
(19, 2, 2),
(20, 2, 2),
(21, 2, 2),
(22, 3, 2),
(23, 2, 2),
(24, 3, 1),
(25, 2, 2),
(26, 5, 2),
(27, 5, 2),
(28, 5, 1),
(29, 4, 2),
(30, 4, 1),
(31, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `narudzbina`
--

CREATE TABLE `narudzbina` (
  `id` int(11) NOT NULL,
  `idKorpe` int(11) NOT NULL,
  `idProizvoda` int(11) NOT NULL,
  `kolicina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `narudzbina`
--

INSERT INTO `narudzbina` (`id`, `idKorpe`, `idProizvoda`, `kolicina`) VALUES
(81, 18, 1, 6),
(82, 18, 27, 1),
(83, 19, 5, 5),
(84, 20, 1, 6),
(85, 21, 1, 6),
(86, 17, 3, 1),
(87, 22, 1, 3),
(88, 23, 1, 6),
(89, 0, 5, 1),
(90, 0, 6, 1),
(91, 26, 1, 1),
(92, 27, 5, 6),
(93, 29, 3, 4),
(94, 29, 4, 1),
(95, 25, 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `prodavnica`
--

CREATE TABLE `prodavnica` (
  `id` int(11) NOT NULL,
  `naziv` varchar(128) NOT NULL,
  `adresa` varchar(128) NOT NULL,
  `radnoVreme` varchar(128) NOT NULL,
  `katObjektaID` int(11) NOT NULL,
  `urlMape` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodavnica`
--

INSERT INTO `prodavnica` (`id`, `naziv`, `adresa`, `radnoVreme`, `katObjektaID`, `urlMape`) VALUES
(1, 'TSS Novi Sad', 'Strazilovska 31, Novi Sad', 'Ponedeljak - Petak 09h-20h\r\nSubota 09h-14h', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.171348881987!2d19.22077685119773!3d44.53212400306642!2m3!1f0!2f0!3f0!'),
(2, 'TSS Nis', 'Bulevar Medijana 21, Nis', 'Ponedeljak - Nedelja 10h-22h', 2, ''),
(3, 'TSS Delta City', 'I Sprat\r\nJurija Gagarina 16, Beograd', 'Ponedeljak - Nedelja 10h-22h', 1, ''),
(4, 'TSS Stadion', 'II sprat\r\nZaplanjska 32, Beograd', 'Ponedeljak - Nedjelja 10h-22h', 2, ''),
(5, 'TSS Usce', 'II sprat\r\nBulevar Mihajla Pupina 4, Beograd', 'Ponedeljak - Nedjelja 10h-22h', 1, ''),
(6, 'TSS Big Fashion', 'Visnjicka 84, Beograd', 'Ponedeljak - Nedjelja 10h-22h', 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `proizvod`
--

CREATE TABLE `proizvod` (
  `id` int(11) NOT NULL,
  `katID` int(11) NOT NULL,
  `ime` varchar(128) NOT NULL,
  `opis` varchar(512) NOT NULL,
  `cena` int(11) NOT NULL,
  `url` varchar(256) NOT NULL,
  `akcija` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proizvod`
--

INSERT INTO `proizvod` (`id`, `katID`, `ime`, `opis`, `cena`, `url`, `akcija`) VALUES
(1, 1, 'ULT Prostar 100% Whey 2,39kg', 'Ultimate 100% Prostar Whey je napravljen za sve, od onih koji treniraju dva puta nedeljno, do profesionalnih bodibildera! Takodje poboljsava funkciju imunog sistema i vase zdravlje! Pomocice vam da sacuvate ili izgradite misicnu masu, ostvarite vecu gustin', 6890, 'https://www.ultimatenutrition.com/wp-content/uploads/148_Prostar_Vanilla_Creme.png', 0),
(2, 1, 'UltimateNutrition Animal Whey 1,8kg', 'Protein velike cistoce koji ne sadrži LAKTOZU, GLUTEN i ASPARTAM. \r\n\r\nAnimal Whey je napravljen od najcistijeg mikrofiltriranog izolata proteina surutke . Velika biološka vrednost i veoma brza absorbcija cine da je Animal Whey apsolutno jedinstven proizvod', 5660, 'http://static.sscontent.com/products/6/universal_animal-whey-2-lb-907g_1.png', 10),
(3, 1, 'USN Whey Premium Protein 2,28kg', 'USN Whey Premium Protein sadrži najcistiji oblik surutkinih belancevina. Sadrzi belancevine, kao sto su laktalbumin i imunoglobulin, za koje je karakteristicno, da su znacajni za pravilno delovanje imunog sistema, misicni razvoj i regeneraciju.', 7490, 'http://uk.usn-sport.com/media/catalog/product/cache/2/image/317x460/9df78eab33525d08d6e5fb8d27136e95/w/h/whey3.png', 0),
(4, 1, 'OLIMP Whey Protein Complex 1,8kg', 'OLIMP WHEY PROTEIN COMPLEX je unikatan, najkvalitetniji kompleksni sastav koncentrata surutkinog proteina (WPC), izolata (WPI) i glutamin peptida, dopunjenog antikatabolickim tvarima,  metabolickim aktivatorima, koji osiguravaju normalan tok metabolickih p', 5790, 'http://eu.olimp-supplements.com/images/products/14999457952.png', 0),
(5, 1, 'OLIMP Sojavit 85 700g', 'Najkvalitetniji cisti izolat sojinih proteina, dopunjen metabolickim aktivatorima (holin, inozitol in L-karnitin), vitaminima i mineralima, koji osigurava normalan tok metabolickih procesa tokom fizicke aktivnosti i posle uzimanja proteina. Za izolate soji', 1770, 'http://thesuppstore.com.mt/207-large_default/olimp-sojavit-85.jpg', 0),
(6, 1, 'Scitec Nutririon 100% Whey Protein Profesional 2,82kg', 'Ovaj preparat sadrzi peptide sa cetiri aminokiseline koji ublazavaju bol u misicima nakon intenzivnog treninga.\r\n100% Whey Protein Professional sadrzi veoma mali procenat laktoze, a obogacen je L-glutaminom, najzastupljenijom aminokiselinom u misicima.\r\nOv', 6590, 'https://store.bbcomcdn.com/deploy/images/brands/scitec-nutrition/100-whey-protein-professional/bottle.png', 10),
(7, 2, 'ULT Creatine Monohydrate 300gr', 'Ultimate Nutrition Creatine – platinum serija spada u grupu najcistijih i najkavalitetnijih mikronizovanih kreatin monohidrata na svetu. Za njegovu proizvodnju koriscena je najnovija tehnologija koja daje najcistiju supstancu oslobodkenu od svih toksina ko', 1080, '\r\nhttps://www.ultimatenutrition.com/wp-content/uploads/050_CreaMono120g.png', 0),
(8, 2, 'USN Creatine Monohydrate 500g', '99.9% CISTI KREATIN MONOHIDRAT ZA POVECANJE MISICNOG OPSEGA, MASE I SNAGE. Mikroniziran kreatin omogucava optimalne rezultate.\r\nUSN Micronised Creatine - formula mikroniziranega kreatina, koja osigurava naj?iš?i oblik kreatina, koji se brzo apsorbira. ', 2390, 'http://uk.usn-sport.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/r/creatinemono.png', 0),
(9, 2, 'OLIMP Kre-Alakalyn 2500 120kapsula', 'Kapsule s puferiranim kreatin monohidratom su namijenjene pokrivanju gubitka kod intenzivne misicne aktivnosti sportasa.\r\nProizvod sadrzi patentirani tip kreatin monohidrata i odlikuje se visokom bioraspolozivoscu.', 3790, 'https://xxlnutrition.com/files/ProductImages/168/300x400/1434017106.png', 0),
(10, 2, 'DymatizeNutrition Cratine Monohydrate 30g', '- Dodatak ishrani pogodan za odrasle sportiste koji se bave intenzivnom fizickom aktivnoscu\r\n- 3 g cistog kreatina po dozi\r\n- Za vecu snagu i izdrzljivost\r\n- Za povecanje obima misica', 1490, 'http://www.dymatize.com/Shared/Images/Product/CREATINE-MICRONIZED/New-Creatine.png', 10),
(11, 2, 'MuscleTech Platinum 100% Creatine 400g', 'Platinum 100% Creatine sastoji se od mesavine ugljenih hidrata, kreatina, beta-alanina, HMB-a i BCAA (aminokiselina razgranatog lanca) kako biste otkrili novu dimenziju treninga.', 1370, 'http://www.muscletech.ca/wp-content/uploads/PlatinumCreatine_award.png', 10),
(12, 2, 'ScitecNutrition 100% Creatine Monohydrate 100g', 'Kreatin-monohidrat izazvao je bum u sportu 1990-ih godina. Kreatinska zaliha odgovorna je za predaju fosfatnih skupina ATP-u, koji se na taj nacin moze regenerirati i osigurati novu energiju za skupljanje misica. Kreatin je prakticki jedna molekula koja u ', 700, 'https://www.scitecnutrition.com/images/products-crystal/normal/scitec_100_creatine_monohydrate.png?ver=1487673724', 0),
(13, 3, 'ScitecNutrition Mega Arginine 90kapsula', '1300mg arginina po kapsuli\r\nobezbedjuje pojacanu vazodilataciju\r\nstimulise lucenje hormona rasta\r\nodrzava misice u anabolizmu', 2280, 'https://www.scitecnutrition.com/images/products-crystal/normal/scitec_mega_arginine.png?ver=1487673727', 0),
(14, 3, 'UniversalNutrition STORM 759g', 'Storm sadrzi najpotentnije i najmocnije oblike kreatina kao što je magnezijum kreatin helat.\r\nTokom naucnih istrazivanja potvrdjeno je da magnezijum kreatin helat povecava snagu, poboljsava performanse nakon samo dve nedelje koriscenja.', 5990, 'https://supplementwarehouse.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/l/ultimate-nutrition-storm_1.png', 0),
(15, 3, 'MusclePharm Assault 435g', 'Ovo je vodeca pre-trenazna formula medju suplementima jer na bezbedan nacin povecava snagu i izdrzljivost, za razliku uobicajenih formula koje vestacke energetske stimulanse.\r\nAssault je najizucavaniji energetski pre-trenazni suplement.', 4900, 'https://cdn.mrsupplement.com.au/resources/imgs/products/musclepharm-assault.1479100257825.png', 0),
(16, 3, 'Cellucor C4 Mass 1kg', 'Na osnovu jacine, ukusa i nauke, C4 Mass je sveobuhvatna mesavina od 11 pojacivaca performansi svrstava ga medju najvise dobro-zaokruzene pretrenazne dodatke na trzistu danas. ', 6150, 'https://store.bbcomcdn.com/deploy/images/brands/cellucor/c4/footer/bottle-mass.png', 10),
(17, 3, 'USPLabs Jack3D 250g', 'USPLabs Jack3d moze da prouzrokuje ludu agresivnu zelju da dizes vece tezine, izguras vise ponavaljanja i da imas neverovatnu dugotrajnu energiju, zajedno sa bolesnom pumpom koja puni misice. Kolicina energije i fokusa je savrsena, pumpa i vaskularnost su ', 4200, 'http://www.nexternal.com/advnut/images/jack3d_ll_11.png', 0),
(18, 3, 'ScitecNutrition', 'Bolja misicna pumpa tokom i nakon treninga\r\nFormula sa poboljsanim kreatinom i NO reaktorom za efikasnije lucenje insulina\r\nPovecanje zapremine celija\r\nEkstremna energija za najnapornije treninge', 3530, 'https://www.scitecnutrition.com/images/products-crystal/normal/scitec_attack_20.png?ver=1487673725', 0),
(19, 4, 'OLIMP Thermostrim Hardcore 60kapsula', 'Proizvod je novija verzija proizvoda THERMOSTIM. Još je snazniji, djeluje duze i brze, optimiziran prema potrebama pojedinaca koji imaju za cilj smanjiti svoju telesnu tezinu i masnocu.', 2490, 'https://shop.builder.hu/images/product_images/7455_3007ebfda607.png', 0),
(20, 4, 'OLIMP Thermospeed Hardcore 120kapsula', 'THERMO SPEED HARDCORE je vrlo ucinkovit i snazan preparat, koji pomaze u smanjenju telesne težine i masnoca te u oblikovanju tela odnosno muskulature.', 3490, 'http://fuel4muscle.com/wp-content/uploads/2015/03/2014101521435273916.png', 0),
(21, 4, 'UniversalNutrition Animal Cuts 42vrecice', 'Za razliku od svih ostalih proizvoda za sagorevanje masti, Animal Cuts nije samo obican termogeneticki proizvod, nego je trenutno i najpotpunija svestrana formula, koju mozete dobiti u slobodnoj prodaji.', 5000, 'https://www.doctorfood.si/media/catalog/product/cache/2/image/800x800/9df78eab33525d08d6e5fb8d27136e95/u/n/universal-nutrition-animal-cuts.png', 10),
(22, 4, 'ScitecNutrition FireRaid 90kapsula', 'Fire Raid je suplement koji se koristi pre treninga kako bi podigao vas nivo energije, izostrio fokus, ali i pomogao pri sagorevanju masti. Uz Fire Raid vas put do isklesanog, misicavog tela je znatno olaksan.', 2990, 'https://www.scitecnutrition.com/images/products-crystal/normal/muscle_army_fire_raid.png?ver=1487673724', 0),
(23, 4, 'DymatizeNutrition Liquid L-Carnitine 473ml', 'L-karnitin pospesuje razgradnju masti i njihovo pretvaranje u energiju\r\nPosebno delotvoran pre aerobnog (kardio) treninga\r\nU tecnoj formi za brzu apsorpciju', 1890, 'http://www.dymatize.com/Shared/Images/Product/Liquid-L-Carnitine/New-Liquid1.png', 0),
(24, 4, 'BioTech Super Fat Burner 120kapsula', 'Super Fat Burner preporucujemo sportistima i rekreativcima koji zele da ubrzaju proces gubitka suvišnih masti, naravno uz adekvatnu ishranu i program treninga.', 1490, '\r\nhttp://static.sscontent.com/products/157/biotech-usa_super-fat-burner-120-tabs_1.png', 10),
(25, 5, 'DymatizeNutrition BCAA Complex 2200 400Kapsula', 'BCAA, predstavljaju najbolju mogucu odbranu od potencijalnog katabolizma! Ove tri amino kiseline koje se mogu naci u proteinima, cine razgranati lanac a ime su dobile po svojoj jedinstvenoj hemijskoj strukturi.', 3400, 'http://spartannutrition.ca/wp-content/uploads/2016/09/dyma-bcaa.png', 0),
(27, 5, 'OLIMP BCAA Xplode 500G', 'Najveca doza  BCAA u prasku na trzistu! Proizvod s najvecim kvalitetom, 6000 mg BCAA na dozu, dodatno obogacen s dozom L-glutamina!', 3400, 'http://eu.olimp-supplements.com/images/products/14999430504.png', 0),
(28, 5, 'UniversalNutrition Juiced Aminos 376g', 'Juiced Aminos, precizna, prvoklasna mesavina BCAA amino kiselina u dokazanoj razmeri 4:1:1, Glutamina, Citrullina DL-Malata, Kreatina i Vitamina B6 ce doprineti ogromnom porastu vasih misica i snage.', 3000, 'https://cdn.shopify.com/s/files/1/1433/7186/products/Animal_Juiced_Aminos.png?v=1472388523', 10),
(29, 5, 'ULT BCAA 12000 475g', 'BCAA Aminokiseline cuvaju misicnu masu u izuzetnim uslovima dugotrajnih napora i veoma visokih temperatura. Po istrazivanjima BCAA Aminokiseline sprecavaju katabolicne procese razgradnje proteina u misicima usled fizickog napora. ', 3800, 'http://www.explode.rs/sites/default/files/imagecache/product_full/proizvodi/ult%20bcaa%20457g.png', 0),
(30, 5, 'USN BCAA Syntho Stack 120kapsula', 'BCAA Syntho Stack predstavlja vrhunsku inovaciju u ciljanom sistemu za razvoj misica. Napredna matrica je ispunjena masivnim 6000 miligrama po dozi aminokiselina razgranatog lanca i esencijalnih aminokiselina i zvedenih iz ultra-cistog hidrolizovanog prote', 2750, 'http://uk.usn-sport.com/media/catalog/product/cache/2/image/317x460/9df78eab33525d08d6e5fb8d27136e95/s/y/synthonew.png', 10),
(31, 5, 'MusclePharm Core BCAA 3:1:2 240kapsula', 'Core BCAA 3:1:2 je novi aminokiselinski suplement koji je idealan kako za perod intenzivnog treninga tako i za periode redukcione dijete zato sto sadrzi vrlo nizak procenat masti i ugljenih hidrata.', 3200, 'http://www.nzmuscle.co.nz/ic/2863342392/Muscle_Pharm_BCAA_Powder_30serve_Blue_Raspberry.1.png', 10);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(0, 'Korisnik'),
(1, 'Administrator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `korpa`
--
ALTER TABLE `korpa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `narudzbina`
--
ALTER TABLE `narudzbina`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prodavnica`
--
ALTER TABLE `prodavnica`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `proizvod`
--
ALTER TABLE `proizvod`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `korpa`
--
ALTER TABLE `korpa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `narudzbina`
--
ALTER TABLE `narudzbina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT for table `prodavnica`
--
ALTER TABLE `prodavnica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `proizvod`
--
ALTER TABLE `proizvod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
