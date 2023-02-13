Rails.application.routes.draw do
  resources :company_jobs
  resources :companies
  resources :verifications
  resources :jobs
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
