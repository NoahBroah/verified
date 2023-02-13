class JobSerializer < ActiveModel::Serializer
  attributes :id, :company, :position, :job_duties
  has_one :user
end
