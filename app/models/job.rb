class Job < ApplicationRecord
  belongs_to :user
  has_one :verification, dependent: :destroy
  has_many :verifying_users, through: :verifications, source: :user

  validates :company, :position, presence: true
end
