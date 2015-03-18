class User < ActiveRecord::Base
  has_secure_password

  # Validations
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :password, presence: true

  def as_json(options={})
    {
      id: id,
      email: email,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
