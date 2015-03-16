require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  test "validation" do
    # Create model
    team = Team.new
    assert !team.valid?

    team.name = "Team Name"
    assert !team.valid?

    team.logo = "http://www.example.com/logo.png"
    assert !team.valid?

    team.url = "some.link"
    assert !team.valid?
    team.url = "http://www.example.com/"
    assert !team.valid?

    team.brand_color = "#000000"

    # ALl values present, should pass!
    assert team.valid?
  end
end
