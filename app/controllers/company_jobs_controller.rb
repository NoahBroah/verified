class CompanyJobsController < ApplicationController
    before_action :authorize
  
    def create
      company_job = CompanyJob.create(company_job_params)
      if company_job.valid? && current_user.is_employer?
        render json: company_job, status: :created
      else
        render json: { errors: company_job.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def company_job_params
      params.require(:company_job).permit(:company_id, :job_id)
    end
  end
