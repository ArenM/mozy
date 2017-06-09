Rails.application.routes.draw do
  get 'contact', to: 'contact_user#index'
  post 'contact/send', to: 'contact_user#send_message'

  #get 'contact_user/index'
  #post 'contact_user/send'

  
  resources :trips do
    collection do
      get 'manage', :action => 'manage'
    end
  end
  
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

  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
