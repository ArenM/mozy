class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :edit, :update, :destroy]

  # GET /trips
  # GET /trips.json
  def index
    @trips = Trip.all
  end

  # GET /trips/manage
  # GET /trips/manage.json
  def manage
    @trips = Trip.where(:user => current_user)
  end

  # GET /trips/1
  # GET /trips/1.json
  def show
  end

  # GET /trips/new
  def new
    @trip = Trip.new
  end

  # GET /trips/1/edit
  def edit
    if current_user.id != @trip.user_id
      redirect_to trips_path, :flash => {error: 'You can\'t edit that trip!' }
    end
  end

  # POST /trips
  # POST /trips.json
  def create
    @trip = Trip.new(trip_params)
    @trip.user_id = current_user.id

    respond_to do |format|
      if @trip.save
        format.html { redirect_to @trip, notice: 'Trip was successfully created.' }
        format.json { render :show, status: :created, location: @trip }
      else
        format.html { render :new }
        format.json { render json: @trip.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /trips/1
  # PATCH/PUT /trips/1.json
  def update
    if current_user.id == @trip.user_id
      respond_to do |format|
        if @trip.update(trip_params)
          @trip.user_id = current_user.id
          format.html { redirect_to @trip, notice: 'Trip was successfully updated.' }
          format.json { render :show, status: :ok, location: @trip }
        else
          format.html { render :edit }
          format.json { render json: @trip.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /trips/1
  # DELETE /trips/1.json
  def destroy
    if current_user.id == @trip.user_id
      @trip.destroy
      respond_to do |format|
        format.html { redirect_to trips_url, notice: 'Trip was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      redirect_to trips_path, :flash => {error: 'You can\'t delete that trip!' }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip
      @trip = Trip.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def trip_params
      params.require(:trip).permit(:meeting_time, :start_date, :end_date, :from, :to, :meeting_place, :driver_first_name, :driver_last_name, :notes)
    end
end