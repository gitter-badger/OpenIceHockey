require 'json'

class TeamsControllerTest < ActionController::TestCase
  def setup
    @controller = Api::V1::TeamController.new
  end

  test "get all teams" do
    get :all
    assert_response :success
  end

  test "should return items for all teams" do
    get :all
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert_equal jsonHash["items"].length, 2
  end

  test "staff member endpoint url returned" do
    get :all
    assert_response :success

    jsonHash = JSON.parse(response.body)
    team = jsonHash["items"][0]
    assert_equal team["staff_members_url"], "http://livehockey.dev/api/v1/team/1/staff"
  end

  test "get all members for team" do
    get(:teamstaff, { "id" => 1 })
    assert_response :success
  end

  test "staff members for team should return 1" do
    get(:teamstaff, { "id" => 1 })
    assert_response :success

    jsonHash = JSON.parse(response.body)
    assert_equal jsonHash["items"].length, 1
  end
end
