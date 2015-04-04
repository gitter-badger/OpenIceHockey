class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_filter do |c|
    if session[:user]
      @user = User.find_by_id(session[:user])
    end
  end

  def index
    render 'index'
  end
end
