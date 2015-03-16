class StaffMember < ActiveRecord::Base
  validates :name, presence: true
  validates :job_title, presence: true

  belongs_to :team
end
