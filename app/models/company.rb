class Company < ApplicationRecord
    has_many :company_jobs, dependent: :destroy
    has_many :jobs, through: :company_jobs
  
    validates :name, presence: true
  end