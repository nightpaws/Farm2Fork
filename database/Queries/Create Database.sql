create table Animal (
  animal_id    int(10) not null auto_increment, 
  Farmfarm_id  int(10) not null, 
  species      varchar(255) not null, 
  breed        varchar(255) not null, 
  grazed       varchar(255) not null, 
  vaccinations varchar(255) not null, 
  hormones     varchar(255) not null, 
  name         varchar(60), 
  image        text, 
  description  text, 
  primary key (animal_id));
create table Farm (
  farm_id         int(10) not null auto_increment, 
  farmName        varchar(60) not null, 
  street          varchar(255) not null, 
  town            varchar(255) not null, 
  postcode        varchar(8) not null, 
  telephone       varchar(16) unique, 
  typeOfOperation varchar(128) not null, 
  cropsGrown      varchar(128) not null, 
  organic         varchar(128) not null, 
  description     text, 
  primary key (farm_id));
create table Favourite (
  favourite_id  int(10) not null auto_increment, 
  Farmfarm_id   int(10) not null, 
  Usersusername varchar(30) not null, 
  primary key (favourite_id));
create table Users (
  username varchar(30) not null, 
  password varchar(255) not null, 
  email    varchar(255) not null, 
  isAdmin  int(1) not null, 
  primary key (username));
create table Forum_Post (
  post_id             int(10) not null auto_increment, 
  Usersusername       varchar(30) not null, 
  Forum_Topictopic_id int(10) not null, 
  post_date           datetime null, 
  contents            text, 
  primary key (post_id));
create table Forum_Topic (
  topic_id      int(10) not null auto_increment, 
  Usersusername varchar(30) not null, 
  topic_title   varchar(128), 
  primary key (topic_id));
create table Market_Animal (
  animalmarket_id int(10) not null auto_increment, 
  Animalanimal_id int(10) not null, 
  Marketmarket_id int(10) not null, 
  cut             varchar(255), 
  primary key (animalmarket_id));
create table Market (
  market_id   int(10) not null auto_increment, 
  marketName  varchar(60) not null, 
  street      varchar(255) not null, 
  town        varchar(255) not null, 
  postcode    varchar(8) not null, 
  telephone   varchar(16) unique, 
  description text, 
  primary key (market_id));
create table Crop (
  crop_id         int(10) not null auto_increment, 
  Farmfarm_id     int(10) not null, 
  strain          varchar(255), 
  harvestInterval varchar(128), 
  organicCrop     varchar(128), 
  primary key (crop_id));
create table Dairy (
  produce_id       int(10) not null auto_increment, 
  Farmfarm_id      int(10) not null, 
  harvestingSeason varchar(255) not null, 
  irrigation       varchar(255) not null, 
  storage          varchar(255) not null, 
  acresHarvested   int(10) not null, 
  yield            varchar(255) not null, 
  organicDairy     varchar(128), 
  primary key (produce_id));
alter table Animal add index FKAnimal263948 (Farmfarm_id), add constraint FKAnimal263948 foreign key (Farmfarm_id) references Farm (farm_id);
alter table Crop add index FKCrop653044 (Farmfarm_id), add constraint FKCrop653044 foreign key (Farmfarm_id) references Farm (farm_id);
alter table Dairy add index FKDairy337719 (Farmfarm_id), add constraint FKDairy337719 foreign key (Farmfarm_id) references Farm (farm_id);
alter table Favourite add index FKFavourite301737 (Farmfarm_id), add constraint FKFavourite301737 foreign key (Farmfarm_id) references Farm (farm_id);
alter table Favourite add index FKFavourite482506 (Usersusername), add constraint FKFavourite482506 foreign key (Usersusername) references Users (username);
alter table Forum_Post add index FKForum_Post828659 (Usersusername), add constraint FKForum_Post828659 foreign key (Usersusername) references Users (username);
alter table Forum_Topic add index FKForum_Topi561062 (Usersusername), add constraint FKForum_Topi561062 foreign key (Usersusername) references Users (username);
alter table Forum_Post add index FKForum_Post618724 (Forum_Topictopic_id), add constraint FKForum_Post618724 foreign key (Forum_Topictopic_id) references Forum_Topic (topic_id);
alter table Market_Animal add index FKMarket_Ani622909 (Animalanimal_id), add constraint FKMarket_Ani622909 foreign key (Animalanimal_id) references Animal (animal_id);
alter table Market_Animal add index FKMarket_Ani592575 (Marketmarket_id), add constraint FKMarket_Ani592575 foreign key (Marketmarket_id) references Market (market_id);
