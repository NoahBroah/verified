class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: :show
  
    def show
      render json: current_user, status: :ok
    end
  
   def current_user
    @current_user ||=User.find_by(id: session[:user_id])
   end
    
    def authorize
      render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
    end
end
