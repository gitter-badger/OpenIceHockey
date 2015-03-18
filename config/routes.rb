Rails.application.routes.draw do
  root 'application#index'

  namespace :api do
    namespace :v1 do
      # Teams API
      get 'teams' => 'team#all'
      get 'team/:id/staff' => 'team#teamstaff'

      # User API
      post 'users/email' => 'user#email_search'
      post 'user/login' => 'user#login'
      post 'user/register' => 'user#user_register'
      get 'user/check-session' => 'user#check_login'

      get '/' => "api#not_found"
      get '*path' => "api#not_found"
    end
  end
end
