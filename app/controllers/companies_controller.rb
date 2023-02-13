class CompaniesController < ApplicationController
    before_action :authorize, except: [:index, :show]
  
    def index
      companies = Company.all
      render json: companies, status: :ok
    end
  
    def show
      company = Company.find(params[:id])
      render json: company, status: :ok
    end
  
    def create
        if current_user.is_employer?
            company = current_user.company.create(company_params)
            if company.valid?
              render json: company, status: :created
            else
              render json: { errors: company.errors.full_messages }, status: :unprocessable_entity
            end
          else
            render json: { errors: ["Not authorized to create a company"] }, status: :unauthorized
          end
    end
  
    def update
      company = Company.find(params[:id])
      if company.update(company_params)
        render json: company, status: :ok
      else
        render json: { errors: company.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      company = Company.find(params[:id])
      company.destroy
      head :no_content
    end
  
    private
  
    def company_params
      params.require(:company).permit(:name)
    end
  end
  