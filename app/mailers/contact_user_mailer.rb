class ContactUserMailer < ApplicationMailer
  def contact_user(to, from, subject, message)
    @to = to
    @from = from
    @subject = subject
    @message = message
    mail(to: @to, from: @from, subject: @subject)
  end
end
