require 'json'

class Api::V1::TeamController < ActionController::Base
  def all
    allTeams = Team.all

    # Render the JSON
    jsonHash = { data: allTeams.as_json(root: false) }

    # Pretty print json?
    if params[:pretty] then
      jsonHash = JSON.pretty_generate(jsonHash)
    end

    render :json => jsonHash
  end

  def teamstaff
    staff = StaffMember.where(:team_id => params[:id])

    # Render the JSON
    jsonHash = { data: staff.as_json(root: false) }
    render :json => JSON.pretty_generate(jsonHash)
  end
end
