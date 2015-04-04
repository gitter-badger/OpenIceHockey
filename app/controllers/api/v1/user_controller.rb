class Api::V1::UserController < ActionController::Base
  include ApiMethods

  # Search for emails
  # POST request
  def email_search
    if params[:email]
      # Search users for an email address
      users = User.where(:email => params[:email])

      # Render the JSON
      render :json => {
        users: users.count
      }
    else
      render :json => self.error_response(400, "No email address sent with request.")
    end
  end

  # Login a user
  # POST request
  def login
    user = User.find_by_email(params[:email])

    if user
      if user.authenticate(params[:password])
        session[:user] = user.id
        self.update_last_seen

        render :json => {
          user: user
        }
      else
        render :json => self.error_response(400, "Password is incorrect.")
      end
    else
      render :json => self.error_response(400, "No user could be found with email #{params[:email]}.")
    end
  end

  # Register a user
  # POST request
  def user_register
    # Create a new user
    user = User.new(email: params[:email], password: params[:password], user_type: params[:user_type])

    if user.valid?
      # Save the user
      user.save
      session[:user] = user.id
      self.update_last_seen

      render :json => {
        user: user
      }
    else
      render :json => {
        errors: user.errors
      }
    end
  end

  # Check the login status of the current user
  def check_login
    if check_logged_in?
      render :json => {
        status: 200,
        message: "Currently logged in."
      }
    else
      render :json => self.error_response(400, "No longer logged in.")
    end
  end

  # Get all the teams for this user
  def user_teams
    if check_logged_in?
      # Get the current logged in user
      user = User.find(session[:user])

      # Get the teams
      teams = user.teams
      jsonHash = {
        items: teams.as_json(root: false)
      }

      # Pretty print json?
      jsonHash = self.pretty_print(jsonHash)

      render :json => jsonHash
    else
      render :json => self.error_response(400, "No longer logged in.")
    end
  end
end
