class JobsController < ApplicationController
    before_action :authorize, only: [:create, :update, :destroy]
  
    def index
      jobs = Job.all
      render json: jobs, status: :ok
    end
  
    def show
      job = Job.find_by(id: params[:id])
      render json: job, status: :ok
    end
  
    def create
      job = current_user.jobs.create(job_params)
      if job.valid?
        render json: job, status: :created
      else
        render json: { errors: job.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      job = Job.find_by(id: params[:id])
      if job.user_id == current_user.id
        job.update(job_params)
        render json: job, status: :ok
      else
        render json: { errors: ["Not Authorized"] }, status: :unauthorized
      end
    end
  
    def destroy
      job = Job.find_by(id: params[:id])
      if job.user_id == current_user.id
        job.destroy
        head :no_content
      else
        render json: { errors: ["Not Authorized"] }, status: :unauthorized
      end
    end
  
    private
  
    def job_params
      params.require(:job).permit(:company, :position, :job_duties)
    end
  end
