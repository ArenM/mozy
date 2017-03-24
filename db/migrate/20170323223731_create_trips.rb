class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.references :user, foreign_key: true
      t.time :meeting_time
      t.date :start_date
      t.date :end_date
      t.string :from
      t.string :to
      t.string :meeting_place
      t.string :driver_first_name
      t.string :driver_last_name
      t.text :notes

      t.timestamps
    end
  end
end
