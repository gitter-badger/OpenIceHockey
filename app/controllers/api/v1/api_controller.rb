class Api::V1::ApiController < ActionController::Base
  include ApiMethods

  def not_found
    render :json => self.error_response(404, "No API endpoints could be found. Please read the wiki.")
  end
end
