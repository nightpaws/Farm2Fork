select animal_id, Farmfarm_id, species, breed, grazed, vaccinations, hormones, name, image, description 
  from Animal;
select farm_id, farmName, street, town, postcode, telephone, typeOfOperation, cropsGrown, organic, description 
  from Farm;
select favourite_id, Farmfarm_id, Usersusername 
  from Favourite;
select username, password, email, isAdmin 
  from Users;
select post_id, Usersusername, Forum_Topictopic_id, post_date, contents 
  from Forum_Post;
select topic_id, Usersusername, topic_title 
  from Forum_Topic;
select animalmarket_id, Animalanimal_id, Marketmarket_id, cut 
  from Market_Animal;
select market_id, marketName, street, town, postcode, telephone, description 
  from Market;
select crop_id, Farmfarm_id, strain, harvestInterval, organicCrop 
  from Crop;
select produce_id, Farmfarm_id, harvestingSeason, irrigation, storage, acresHarvested, yield, organicDairy 
  from Dairy;
