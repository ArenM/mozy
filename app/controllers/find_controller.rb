class FindController < ApplicationController
  def index
    @profiles = Profile.all
  end

  def map
  end
end
