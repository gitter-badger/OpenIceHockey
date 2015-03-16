require 'test_helper'

class StaffMemberTest < ActiveSupport::TestCase
  test "validation" do
    member = StaffMember.new
    assert !member.valid?

    member.name = "Name"
    assert !member.valid?

    member.job_title = "Title"
    assert member.valid?
  end

  test "belongs_to" do
    member = StaffMember.find(1)
    assert_equal member.team.id, 1
  end
end
