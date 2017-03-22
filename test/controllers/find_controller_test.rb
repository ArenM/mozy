require 'test_helper'

class FindControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get find_index_url
    assert_response :success
  end

  test "should get map" do
    get find_map_url
    assert_response :success
  end

end
