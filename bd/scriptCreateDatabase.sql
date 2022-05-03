-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tariffdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tariffdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tariffdb` DEFAULT CHARACTER SET utf8 ;
USE `tariffdb` ;

-- -----------------------------------------------------
-- Table `tariffdb`.`Tariff`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tariffdb`.`Tariff` (
  `idTariff` INT NOT NULL AUTO_INCREMENT,
  `TariffName` VARCHAR(45) NULL,
  PRIMARY KEY (`idTariff`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tariffdb`.`TariffInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tariffdb`.`TariffInfo` (
  `origin` VARCHAR(45) NULL,
  `destiny` VARCHAR(45) NULL,
  `valuePerMinute` VARCHAR(45) NULL,
  `Tariff_idTariff` INT NOT NULL,
  INDEX `fk_TariffInfo_Tariff_idx` (`Tariff_idTariff` ASC) VISIBLE,
  CONSTRAINT `fk_TariffInfo_Tariff`
    FOREIGN KEY (`Tariff_idTariff`)
    REFERENCES `tariffdb`.`Tariff` (`idTariff`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


ALTER TABLE `tariffdb`.`tariff` 
CHANGE COLUMN `TariffName` `tariffName` VARCHAR(45) NULL DEFAULT NULL ;

ALTER TABLE `tariffdb`.`tariffinfo` 
RENAME TO  `tariffdb`.`tariff_info` ;


select * from tariff

INSERT INTO tariff (tariffName) VALUES ("011-to-016"); 
INSERT INTO tariff (tariffName) VALUES ("016-to-011"); 
INSERT INTO tariff (tariffName) VALUES ("011-to-017"); 
INSERT INTO tariff (tariffName) VALUES ("017-to-011"); 
INSERT INTO tariff (tariffName) VALUES ("011-to-018"); 
INSERT INTO tariff (tariffName) VALUES ("018-to-011"); 

select * from tariff_info

INSERT INTO tariff_info (origin, destiny, valuePerMinute, Tariff_idTariff) VALUES ("011", "016", "1.90", "1"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute, Tariff_idTariff) VALUES ("016", "011", "2.90", "2"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute, Tariff_idTariff) VALUES ("011", "017", "1.70", "3"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute, Tariff_idTariff) VALUES ("017", "011", "2.70", "4"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute, Tariff_idTariff) VALUES ("011", "018", "0.90", "5"); 
INSERT INTO tariff_info (origin, destiny, valuePerMinute, Tariff_idTariff) VALUES ("018", "011", "1.90", "6"); 
