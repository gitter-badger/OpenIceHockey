require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "validation" do
    user = User.new
    assert !user.valid?

    user.email = "email@email.com"
    assert !user.valid?

    user.password = "password"
    assert user.valid?
  end

  test "email uniqueness" do
    user = User.new(email: "test@test.com", password: "password")
    assert !user.valid?
  end

  test "user authentication" do
    user = User.find_by_email("test@test.com")
    assert !user.authenticate("password1")

    assert user.authenticate("password")
  end

  test "team relationship" do
    user = User.find(1)
    assert_equal user.teams.count, 2
  end

  test "adding new team" do
    user = User.find(1)
    team = Team.new(name: "Team Name", logo: "logo", url: "http://www.example.com/", brand_color: "#000000")
    user.teams << team

    assert user.save
  end
end
