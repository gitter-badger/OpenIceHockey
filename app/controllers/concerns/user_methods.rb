module UserMethods
  extend ActiveSupport::Concern

  # Set the current time for the session check
  def update_last_seen
    if session[:user]
      session[:last_update] = Time.now
    end
  end

  def check_logged_in?
    if session[:user] && session[:last_update] > 20.minute.ago
      true
    else
      session.delete(:user)
      session.delete(:last_update)
      false
    end
  end
end
