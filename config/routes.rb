Rails.application.routes.draw do
  root to: 'find#index'
  get 'find/index'
  get 'find/map'
  get 'map', to: 'find#map'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
