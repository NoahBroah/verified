class User < ApplicationRecord
    has_many :jobs, dependent: :destroy
    has_many :verifications, dependent: :destroy
    has_many :verified_jobs, through: :verifications, source: :job
  
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 4 }, on: :create
    has_secure_password
  end
