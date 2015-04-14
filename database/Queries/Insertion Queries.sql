INSERT INTO Market_Animal(Animalanimal_id, Marketmarket_id, cut) VALUES (?, ?, ?);
INSERT INTO Forum_Post(post_id, Forum_Topictopic_id, Userusername, contents, post_date) VALUES (?, ?, ?, ?, ?);
INSERT INTO Forum_Topic(topic_id, Userusername, topic_title) VALUES (?, ?, ?);
INSERT INTO Crop(crop_id, Farmfarm_id, strain, organic, harvestInterval) VALUES (?, ?, ?, ?, ?);
INSERT INTO Favourite(favourite_id, Userusername, Farmfarm_id) VALUES (?, ?, ?);
INSERT INTO Market(market_id, marketName, street, town, postcode, telephone, description, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Animal(animal_id, Farmfarm_id, species, breed, grazed, vaccinations, hormones, name, image, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Farm(farm_id, farmName, street, town, postcode, telephone, typeOfOperation, cropsGrown, description, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Users(username, password, email, isAdmin) VALUES (?, ?, ?, ?);
