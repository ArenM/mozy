require 'test_helper'

class ContactUserControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get contact_user_index_url
    assert_response :success
  end

end
