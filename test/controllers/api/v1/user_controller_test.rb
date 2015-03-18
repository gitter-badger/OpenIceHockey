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
end
