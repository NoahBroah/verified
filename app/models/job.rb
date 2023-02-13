class Job < ApplicationRecord
  belongs_to :user
  has_many :verifications, dependent: :destroy
  has_many :verifying_users, through: :verifications, source: :user

  validates :company, :position, presence: true
end
