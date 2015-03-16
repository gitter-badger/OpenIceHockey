class Team < ActiveRecord::Base
  validates :name, presence: true
  validates :logo, presence: true
  validates :url, presence: true, :url => true
  validates :brand_color, presence: true

  # Relationships
  has_many :staff_members, dependent: :destroy
end
