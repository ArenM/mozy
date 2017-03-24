class Profile < ApplicationRecord
  belongs_to :user

  geocoded_by :full_address
  after_validation :geocode, if: ->(obj){ obj.full_address.present? }
  
  def full_address
    [street_address, town, state, zipcode].compact.join(', ')
  end
end
