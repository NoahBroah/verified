class VerificationSerializer < ActiveModel::Serializer
  attributes :id, :verified
  has_one :user
  has_one :job
end
