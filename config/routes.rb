Rails.application.routes.draw do
  get 'manage/index'

  resources :profiles, except: [:new, :create, :destroy, :edit, :update] do
    collection do
      get 'edit', :action => 'edit'
      match '', :action => 'update', via: :patch
      match '', :action => 'update', via: :put
    end
  end
  root to: 'find#index'
  get 'find/index'
  get 'find/map'
  get 'map', to: 'find#map'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
