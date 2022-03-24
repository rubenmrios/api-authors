DROP DATABASE IF EXISTS `atSistemasAuthors`;
CREATE DATABASE IF NOT EXISTS atSistemasAuthors;
USE atSistemasAuthors;

/*Tabla de datos de usuario  */
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author` (
  `id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` VARCHAR(60) NULL,
  `last_name` VARCHAR(60) NULL,
  `phone` VARCHAR(11) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  `deleted_at` TIMESTAMP NULL
) ENGINE = InnoDB;

INSERT INTO `author` (name,last_name,phone) VALUES ('ruben','muñoz rios','123456888'),('sergio','Mora Gonzalez','123456789'),('Manolo','Fernandez Amores','123456789');
-
/*Tabla de datos corporativos del usuario*/
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id_book` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `id_author` INT  NOT NULL,
  `name` VARCHAR(60) NULL,
  `description` VARCHAR(250) NULL,
   FOREIGN KEY (`id_author`) REFERENCES `author`(`id`)
) ENGINE = InnoDB;
/*Estudios*/
INSERT INTO `book` (id_author,name,description) VALUES (1,'El italiano: una novela de amor, mar y guerra (Hispánica)','«Pérez-Reverte logra una novela intensa, de emociones sofrenadas y virtudes infrecuentes, incluida la virtud acaso controvertida del reconocimiento del mérito, valor y nobleza de los enemigos.»');