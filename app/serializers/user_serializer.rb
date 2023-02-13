class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :is_admin, :first_name, :last_name
end
