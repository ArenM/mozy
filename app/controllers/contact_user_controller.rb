class ContactUserController < ApplicationController
  def index
    #@message = ContactUserMailer.contact_user.new
  end

  def send_message
    ContactUserMailer.contact_user(params[:to], params[:from], params[:subject], params[:message]).deliver
    respond_to do |format|
      format.html { redirect_to "/", notice: 'message sent' }
    end
  end

  #private
    #def send_params
      #params.permit(:to, :from, :subject, :message)
    #end
end
