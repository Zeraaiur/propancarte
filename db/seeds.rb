# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Product.destroy_all
puts "destroyed Product"

category = ["AFFICHAGE CORPORATIF", "SIGNALISATION ROUTIÈRE", "PANNEAUX CHASSE ET PÊCHE", "PANNEAUX D'INTERPRÉTATION", "PANCARTES HUMORISTIQUES"]



40.times do


product = Product.new(
  name: Faker::Commerce.color,
  category: category.sample,
  url: "https://source.unsplash.com/random"

  )
product.save!

end
