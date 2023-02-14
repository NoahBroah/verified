class JobSerializer < ActiveModel::Serializer
  attributes :id, :company, :position, :job_duties, :user_id
  has_one :user
end
