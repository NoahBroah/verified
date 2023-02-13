class CompanyJobSerializer < ActiveModel::Serializer
  attributes :id
  has_one :company
  has_one :job
end
