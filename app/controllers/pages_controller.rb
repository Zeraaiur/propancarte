class PagesController < ApplicationController
  def landing
    @link1 = ["A PROPOS", apropos_path]
    @link2 = ["CONTACT", contact_path]
    @products = Product.all
  end
  def apropos
    @link1 = ["ACCUEIL", root_path]
    @link2 = ["CONTACT", contact_path]
  end
  def contact
    @link1 = ["ACCUEIL", root_path]
    @link2 = ["A PROPOS", apropos_path]
  end
end
