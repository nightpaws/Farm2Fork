update Animal set 
  Farmfarm_id = ?, 
  species = ?, 
  breed = ?, 
  grazed = ?, 
  vaccinations = ?, 
  hormones = ?, 
  name = ?, 
  image = ?, 
  description = ? 
where
  animal_id = ?;
update Farm set 
  farmName = ?, 
  street = ?, 
  town = ?, 
  postcode = ?, 
  telephone = ?, 
  typeOfOperation = ?, 
  cropsGrown = ?, 
  organic = ?, 
  description = ? 
where
  farm_id = ?;
update Favourite set 
  Farmfarm_id = ?, 
  Usersusername = ? 
where
  favourite_id = ?;
update Users set 
  password = ?, 
  email = ?, 
  isAdmin = ? 
where
  username = ?;
update Forum_Post set 
  Usersusername = ?, 
  Forum_Topictopic_id = ?, 
  post_date = ?, 
  contents = ? 
where
  post_id = ?;
update Forum_Topic set 
  Usersusername = ?, 
  topic_title = ? 
where
  topic_id = ?;
update Market_Animal set 
  Animalanimal_id = ?, 
  Marketmarket_id = ?, 
  cut = ? 
where
  animalmarket_id = ?;
update Market set 
  marketName = ?, 
  street = ?, 
  town = ?, 
  postcode = ?, 
  telephone = ?, 
  description = ? 
where
  market_id = ?;
update Crop set 
  Farmfarm_id = ?, 
  strain = ?, 
  harvestInterval = ?, 
  organicCrop = ? 
where
  crop_id = ?;
update Dairy set 
  Farmfarm_id = ?, 
  harvestingSeason = ?, 
  irrigation = ?, 
  storage = ?, 
  acresHarvested = ?, 
  yield = ?, 
  organicDairy = ? 
where
  produce_id = ?;
