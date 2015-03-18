class Api::V1::TeamController < ActionController::Base
  include ApiMethods

  def all
    allTeamsCount = Team.count
    allTeams = Team.limit(self.get_record_limit).offset(self.get_offset).order(self.get_order)

    # Render the JSON
    jsonHash = {
      links: self.generate_pagination_links('teams', allTeamsCount),
      items: allTeams.as_json(root: false)
    }

    # Pretty print json?
    jsonHash = self.pretty_print(jsonHash)

    render :json => jsonHash
  end

  def teamstaff
    staff = StaffMember.where(:team_id => params[:id]).order(self.get_order)

    # Render the JSON
    jsonHash = {
      items: staff.as_json(root: false)
    }

    # Pretty print json?
    jsonHash = self.pretty_print(jsonHash)

    render :json => jsonHash
  end
end
