# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat_list= [
  {
    name: "Jasper",
    breed: "Japanese Bobtail",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/JapaneseBobtailSHOddEyed_body_6.jpg?itok=NKs7mhNI",
  },
  {
    name: "Dobby",
    breed: "Balinese-Javanese",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Javanese_body_6.jpg?itok=qgJ2m3sj",
  },
  {
    name: "Salem",
    breed: "Bombay",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Bombay_body_6.jpg?itok=eVm_J4GO",
  },
  {
    name: "Fluffy",
    breed: "Somali",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Somali_body_7.jpg?itok=jHwEUG5G",
  },
  {
    name: "Tony",
    breed: "Toyger",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Toyger_body_7.jpg?itok=tGas20EC",
  },
  {
    name: "Stormy",
    breed: "Turkish Angora",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/TurkishAngora_body_7.jpg?itok=BqANL2lQ",
  },
]

dog_list = [
  {
    name: "Princess",
    breed: "American Eskimo",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/NonSporting_American-Eskimo-Dog.jpg?itok=ZNM9Hni-",
  },
  {
    name: "Dynimo",
    breed: "Alaskan Malamute",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/WORKING_Alaskan-Malamute.jpg?itok=IoweJgPb",
  },
  {
    name: "Lassie",
    breed: "Collie",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/HERDING_Collie-%28Rough%29.jpg?itok=PBURi1CV",
  },
  {
    name: "Spot",
    breed: "Dalmatian",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/NonSporting_Dalmatian.jpg?itok=QKDihUrr",
  },
  {
    name: "Biff",
    breed: "German Shepherd",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/HERDING_German-Shepherd-Dog.jpg?itok=a3uXVZor",
  },
  {
    name: "Martha",
    breed: "Old English Sheepdog",
    img_url: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/HERDING_Old-English-Sheepdog.jpg?itok=Kei2kK-L",
  },
]

cat_list.map {|catValue|
  Cat.create(catValue)}

p "Created #{Cat.count} cats"

dog_list.map {|dogValue|
  Dog.create(dogValue)}

p "Created #{Dog.count} dogs"