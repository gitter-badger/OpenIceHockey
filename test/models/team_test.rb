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

  test "staff member relationship validation" do
    team = Team.new(name: "Team Name", logo: "logo", url: "http://www.example.com/", brand_color: "#000000")
    assert team.valid?

    member = StaffMember.new
    team.staff_members << member
    assert !team.valid?

    member.name = "Name"
    assert !team.valid?

    member.job_title = "Title"
    assert team.valid?
  end

  test "has_many relationship" do
    team = Team.find(1)
    assert_equal team.staff_members.count, 1
  end
end
