class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :is_employer, :first_name, :last_name
end
