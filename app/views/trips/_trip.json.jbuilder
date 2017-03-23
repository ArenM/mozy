json.extract! trip, :id, :user_id, :meeting_time, :start_date, :end_date, :from, :to, :meeting_place, :driver_first_name, :driver_lase_name, :notes, :created_at, :updated_at
json.url trip_url(trip, format: :json)
