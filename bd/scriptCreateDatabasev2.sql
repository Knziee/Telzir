-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema telzirdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema telzirdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `telzirdb` DEFAULT CHARACTER SET utf8 ;
USE `telzirdb` ;

-- -----------------------------------------------------
-- Table `telzirdb`.`TariffInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `telzirdb`.`TariffInfo` (
  `TariffInfoId` INT NOT NULL AUTO_INCREMENT,
  `origin` VARCHAR(45) NULL,
  `destiny` VARCHAR(45) NULL,
  `valuePerMinute` VARCHAR(45) NULL,
  PRIMARY KEY (`TariffInfoId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `telzirdb`.`Tariff`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `telzirdb`.`Tariff` (
  `idTariff` INT NOT NULL AUTO_INCREMENT,
  `TariffName` VARCHAR(45) NULL,
  `TariffInfo_TariffInfoId` INT NOT NULL,
  PRIMARY KEY (`idTariff`),
  INDEX `fk_Tariff_TariffInfo_idx` (`TariffInfo_TariffInfoId` ASC) VISIBLE,
  CONSTRAINT `fk_Tariff_TariffInfo`
    FOREIGN KEY (`TariffInfo_TariffInfoId`)
    REFERENCES `telzirdb`.`TariffInfo` (`TariffInfoId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



ALTER TABLE `telzirdb`.`tariff` 
CHANGE COLUMN `TariffName` `tariffName` VARCHAR(45) NULL DEFAULT NULL ;

ALTER TABLE `telzirdb`.`tariffinfo` 
RENAME TO  `telzirdb`.`tariff_info` ;


select * from tariff

INSERT INTO tariff (tariffName, TariffInfo_TariffInfoId) VALUES ("011-to-016", "1"); 
INSERT INTO tariff (tariffName, TariffInfo_TariffInfoId) VALUES ("016-to-011", "2"); 
INSERT INTO tariff (tariffName, TariffInfo_TariffInfoId) VALUES ("011-to-017", "3"); 
INSERT INTO tariff (tariffName, TariffInfo_TariffInfoId) VALUES ("017-to-011", "4"); 
INSERT INTO tariff (tariffName, TariffInfo_TariffInfoId) VALUES ("011-to-018", "5"); 
INSERT INTO tariff (tariffName, TariffInfo_TariffInfoId) VALUES ("018-to-011", "6"); 

select * from tariff_info

INSERT INTO tariff_info (origin, destiny, valuePerMinute ) VALUES ("011", "016", "1.90"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute ) VALUES ("016", "011", "2.90"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute ) VALUES ("011", "017", "1.70"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute ) VALUES ("017", "011", "2.70"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute ) VALUES ("011", "018", "0.90"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute ) VALUES ("018", "011", "1.90"); 

UPDATE `telzirdb`.`tariff` SET `tariffName` = 'De 011 para 016' WHERE (`idTariff` = '1');
UPDATE `telzirdb`.`tariff` SET `tariffName` = 'De 016 para 011' WHERE (`idTariff` = '2');
UPDATE `telzirdb`.`tariff` SET `tariffName` = 'De 011 para 017' WHERE (`idTariff` = '3');
UPDATE `telzirdb`.`tariff` SET `tariffName` = 'De 017 para 011' WHERE (`idTariff` = '4');
UPDATE `telzirdb`.`tariff` SET `tariffName` = 'De 011 para 018' WHERE (`idTariff` = '5');
UPDATE `telzirdb`.`tariff` SET `tariffName` = 'De 018 para 011' WHERE (`idTariff` = '6');
