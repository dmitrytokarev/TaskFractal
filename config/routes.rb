Rails.application.routes.draw do
  resources :tasks
  get 'hello_world', to: 'hello_world#index'
  get '/', to: 'chunky#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end