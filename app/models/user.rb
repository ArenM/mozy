class User < ApplicationRecord
  has_one :profile
  after_create :add_profile

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  private
  def add_profile
    self.profile = Profile.create
  end
end
