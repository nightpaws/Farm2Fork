INSERT INTO Users(username, password, email) VALUES (?, ?, ?);
INSERT INTO Farm(farm_id, farmName, address, postcode, latitude, longitude, telephone, typeOfOperation, cropsGrown, description, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Animal(animal_id, Farmfarm_id, Marketmarket_id, species, breed, grazed, vaccinations, hormones, name, image, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Market(market_id, marketName, address, postcode, latitude, longitude, telephone, description, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Favourite(favourite_id, Userusername, Farmfarm_id) VALUES (?, ?, ?);
INSERT INTO Crop(crop_id, Farmfarm_id, strain, organic, harvestInterval) VALUES (?, ?, ?, ?, ?);
INSERT INTO Forum_Topic(topic_id, Userusername, topic_title) VALUES (?, ?, ?);
INSERT INTO Forum_Post(post_id, Forum_Topictopic_id, Userusername, contents, post_date) VALUES (?, ?, ?, ?, ?);
