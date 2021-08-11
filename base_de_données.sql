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
    ArrivalDate datetime,
    nbMessages VARCHAR(999) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO sujets (pseudo, titre, ArrivalDate, nbMessages) 
VALUES ('szartek', 'Quel vélo pour débuter ?', now(), '2'),
       ('rexar', 'Installer un kit bafang', now(), '1'),
       ('magmadar', 'un titre exemple', now(), '1');



DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    idSujet SMALLINT NOT NULL,
    pseudo VARCHAR(30) NOT NULL,
    titre VARCHAR(80),
    message VARCHAR(3000) NOT NULL,
    ArrivalDate datetime,
    PRIMARY KEY (id)
);

INSERT INTO messages (idSujet, pseudo, message, ArrivalDate) 
VALUES ('1', 'szartek', 'Personnellement, pour le premier vélo, je ne pense pas qu’il soit nécessaire d’investir dans une machine de guerre haut de gamme. Déjà parce que les vélos de compétitions sont très raides et inconfortables pour ce genre d’usage (la sensation d’avoir un bout de bois sous les fesses…) et donc que cela risque de vous dégoûter plus qu’autre chose. Pour les cyclistes qui cherchent un vélo pas cher et solide, les Triban RC100 ou RC120 à disques de Décathlon, par exemple, conviendront parfaitement pour faire du vélotaf (aller au travail en vélo) ou découvrir le cyclisme sur route.', now()),
       ('2' ,'rexar','Linstallation dun kit moteur pédalier BAFANG BBS01, BBS02 et BSSHD est relativement simple et intuitive. Ils sont compatibles sur quasiment lensemble des vélos existants. Notre boutique propose différentes autonomies et puissances de moteur pour une utilisation balade, randonnée ou VTT. Les batteries fournies avec nos moteurs sinstallent à la place du porte bidon de votre vélo. Ci dessous lensemble des instructions pour le montage du moteur et de la batterie fournie.',now()),
       ('3' ,'magmadar','c"est des boeufs', now()),
       ('1', 'Jacques', 'pas faux', now());


ENGINE=INNODB;


UPDATE sujets
SET nbMessages= (nbMessages +1)
WHERE id="1";







