class Api::V1::UserController < ActionController::Base
  include ApiMethods

  # Search for emails
  # POST request
  def email_search
    # Search users for an email address
    users = User.where(:email => params[:email])

    # Render the JSON
    render :json => {
      users: users.count
    }
  end
end
