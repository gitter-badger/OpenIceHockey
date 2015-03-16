class CreateStaffMembers < ActiveRecord::Migration
  def change
    create_table :staff_members do |t|
      t.string :name
      t.string :job_title
      t.integer :team_id

      t.timestamps
    end
  end
end
