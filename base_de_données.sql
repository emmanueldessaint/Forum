SET NAMES utf8;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    mail VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    pseudo VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
)
ENGINE=INNODB;


SET NAMES utf8;

DROP TABLE IF EXISTS sujets;

CREATE TABLE sujets (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    pseudo VARCHAR(30) NOT NULL,
    titre VARCHAR(80) NOT NULL,
    message VARCHAR(3000) NOT NULL,
    ArrivalDate datetime,
    PRIMARY KEY (id)
)

ENGINE=INNODB;

INSERT INTO sujets (pseudo, titre, message, ArrivalDate) 
VALUES ('szartek', 'un titre exemple', 'unmessage demo ...', now()),
       ('rexar', 'un titre exemple', 'unmessage demo ...', now()),
       ('magmadar', 'un titre exemple', 'unmessage demo ...', now());

