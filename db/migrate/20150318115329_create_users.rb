class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :email
      t.text :password
      t.text :password_salt

      t.timestamps
    end
  end
end
