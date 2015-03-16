class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.text :logo
      t.text :url
      t.string :brand_color

      t.timestamps
    end
  end
end
