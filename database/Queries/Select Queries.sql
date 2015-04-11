SELECT username, password, email FROM Users;
SELECT farm_id, farmName, address, postcode, latitude, longitude, telephone, typeOfOperation, cropsGrown, description, image FROM Farm;
SELECT animal_id, Farmfarm_id, Marketmarket_id, species, breed, grazed, vaccinations, hormones, name, image, description FROM Animal;
SELECT market_id, marketName, address, postcode, latitude, longitude, telephone, description, image FROM Market;
SELECT favourite_id, Userusername, Farmfarm_id FROM Favourite;
SELECT crop_id, Farmfarm_id, strain, organic, harvestInterval FROM Crop;
SELECT topic_id, Userusername, topic_title FROM Forum_Topic;
SELECT post_id, Forum_Topictopic_id, Userusername, contents, post_date FROM Forum_Post;
