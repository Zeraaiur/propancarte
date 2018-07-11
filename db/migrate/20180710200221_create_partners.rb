class CreatePartners < ActiveRecord::Migration[5.2]
  def change
    create_table :partners do |t|
      t.string :name
      t.string :url
      t.string :image

      t.timestamps
    end
  end
end
