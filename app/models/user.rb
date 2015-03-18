class User < ActiveRecord::Base
  has_secure_password

  # Validations
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :password, presence: true
end
