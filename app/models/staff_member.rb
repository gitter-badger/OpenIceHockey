class StaffMember < ActiveRecord::Base
  validates :name, presence: true
  validates :job_title, presence: true

  belongs_to :team

  def team_endpoint
    "#{Rails.application.config.api_url}/api/#{Rails.application.config.api_version}/team/#{team_id}"
  end

  # JSON Output
  def as_json(options={})
    {
      id: id,
      name: name,
      job_title: job_title,
      team_url: team_endpoint,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
