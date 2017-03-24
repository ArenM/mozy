class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  #before_action :go_update_prifile
  #protect_from_forgery with: :exception
  protect_from_forgery with: :null_session

  #private

  #def go_update_prifile
  #  if current_user
  #    if controller_name != "profiles"
  #      @profile = Profile.where(user_id: current_user.id).first
  #      if @profile == nil
  #        current_user.profile = Profile.create
  #      end
  #     @profile = Profile.where(user_id: current_user.id).first
  #      if @profile.created_at == @profile.updated_at
  #       respond_to do |format|
  #          format.html { redirect_to edit_profiles_path, alert: 'Pleese Create a profile!' }
  #        end
  #      end
  #    end
  #  end
  #end
end
