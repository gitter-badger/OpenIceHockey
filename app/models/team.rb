class Team < ActiveRecord::Base
  validates :name, presence: true
  validates :logo, presence: true
  validates :url, presence: true, :url => true
  validates :brand_color, presence: true

  # Relationships
  has_many :staff_members, dependent: :destroy

  # Staff members API endpoint
  def staff_members_endpoint
    "#{Rails.application.config.api_url}/api/#{Rails.application.config.api_version}/team/#{id}/staff"
  end

  # JSON Output
  def as_json(options={})
    {
      id: id,
      name: name,
      logo: logo,
      url: logo,
      brand_color: brand_color,
      staff_members_url: staff_members_endpoint,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
