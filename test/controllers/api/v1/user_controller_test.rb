require 'json'

class UserControllerTest < ActionController::TestCase
  def setup
    @controller = Api::V1::UserController.new
  end

  test "search for emails error message" do
    post :email_search
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert jsonHash["error"]
  end

  test "search emails none found" do
    post(:email_search, { :email => "email@email.com" })
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert_equal jsonHash["users"], 0
  end

  test "search emails found" do
    post(:email_search, { :email => "test@test.com" })
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert_equal jsonHash["users"], 1
  end

  test "login user" do
    post(:login, { :email => "t@t.com", :password => "a" })
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert jsonHash["error"]

    post(:login, { :email => "test@test.com", :password => "a" })
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert jsonHash["error"]

    post(:login, { :email => "test@test.com", :password => "password" })
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert jsonHash["user"]
  end
end
