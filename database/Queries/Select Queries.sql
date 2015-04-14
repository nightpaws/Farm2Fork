SELECT Animalanimal_id, Marketmarket_id, cut FROM Market_Animal;
SELECT post_id, Forum_Topictopic_id, Userusername, contents, post_date FROM Forum_Post;
SELECT topic_id, Userusername, topic_title FROM Forum_Topic;
SELECT crop_id, Farmfarm_id, strain, organic, harvestInterval FROM Crop;
SELECT favourite_id, Userusername, Farmfarm_id FROM Favourite;
SELECT market_id, marketName, street, town, postcode, telephone, description, image FROM Market;
SELECT animal_id, Farmfarm_id, species, breed, grazed, vaccinations, hormones, name, image, description FROM Animal;
SELECT farm_id, farmName, street, town, postcode, telephone, typeOfOperation, cropsGrown, description, image FROM Farm;
SELECT username, password, email, isAdmin FROM Users;
