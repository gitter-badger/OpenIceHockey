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
end
