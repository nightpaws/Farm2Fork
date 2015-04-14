UPDATE Market_Animal SET cut = ? WHERE Animalanimal_id = ? AND Marketmarket_id = ?;
UPDATE Forum_Post SET Forum_Topictopic_id = ?, Userusername = ?, contents = ?, post_date = ? WHERE post_id = ?;
UPDATE Forum_Topic SET Userusername = ?, topic_title = ? WHERE topic_id = ?;
UPDATE Crop SET Farmfarm_id = ?, strain = ?, organic = ?, harvestInterval = ? WHERE crop_id = ?;
UPDATE Favourite SET Userusername = ?, Farmfarm_id = ? WHERE favourite_id = ?;
UPDATE Market SET marketName = ?, street = ?, town = ?, postcode = ?, telephone = ?, description = ?, image = ? WHERE market_id = ?;
UPDATE Animal SET Farmfarm_id = ?, species = ?, breed = ?, grazed = ?, vaccinations = ?, hormones = ?, name = ?, image = ?, description = ? WHERE animal_id = ?;
UPDATE Farm SET farmName = ?, street = ?, town = ?, postcode = ?, telephone = ?, typeOfOperation = ?, cropsGrown = ?, description = ?, image = ? WHERE farm_id = ?;
UPDATE Users SET password = ?, email = ?, isAdmin = ? WHERE username = ?;
