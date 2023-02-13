class UsersController < ApplicationController
    before_action :authorize
    def index
        users = User.all 
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, stats: :ok
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(employee_params)
        if user.id == current_user.id
            render json: user, status: :ok
        else
            render json: { errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user.id = current_user.id
            user.delete
            head: no_content
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :is_employer)
    end
end
