class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :street_address
      t.string :town
      t.integer :zipcode
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
