class VerificationsController < ApplicationController
    def create
      if current_user.is_employer
        job = Job.find_by(id: verification_params[:job_id])
        verification = Verification.create(user_id: current_user.id, job_id: job.id)
        render json: verification, status: :created
      else
        render json: { errors: ["Not Authorized"] }, status: :unauthorized
      end
    end
  
    private
  
    def verification_params
      params.require(:verification).permit(:job_id)
    end
  end