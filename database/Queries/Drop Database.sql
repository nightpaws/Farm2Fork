ALTER TABLE Animal DROP FOREIGN KEY FKAnimalID;
ALTER TABLE Favourite DROP FOREIGN KEY FKFavouriteUname;
ALTER TABLE Favourite DROP FOREIGN KEY FKFavouriteID;
ALTER TABLE Crop DROP FOREIGN KEY FKCropID;
ALTER TABLE Forum_Topic DROP FOREIGN KEY FKForum_TopUname;
ALTER TABLE Forum_Post DROP FOREIGN KEY FKForum_PostTopID;
ALTER TABLE Forum_Post DROP FOREIGN KEY FKForum_PostUname;
ALTER TABLE Animal DROP FOREIGN KEY FKAnimalMarkID;
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS Farm;
DROP TABLE IF EXISTS Animal;
DROP TABLE IF EXISTS Market;
DROP TABLE IF EXISTS Favourite;
DROP TABLE IF EXISTS Crop;
DROP TABLE IF EXISTS Forum_Topic;
DROP TABLE IF EXISTS Forum_Post;
