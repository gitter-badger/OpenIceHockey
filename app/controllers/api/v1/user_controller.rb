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

  # Register a user
  # POST request
  def user_register
    # Create a new user
    user = User.new(email: params[:email], password: params[:password])

    if user.valid?
      # Save the user
      user.save
      session[:user] = user.id

      render :json => {
        user: user
      }
    else
      render :json => {
        errors: user.errors
      }
    end
  end
end
