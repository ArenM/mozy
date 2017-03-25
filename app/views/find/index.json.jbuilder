#json.array! @profiles, partial: 'profiles/profile', as: :profile 

#json.array! do |a|
#  url = "fish"
#end

#@profile_json.each do |profile|
#  profile.to_json
#end

json.array! @profiles do |profile|
  json.profile profile
  json.href profile_path(profile.id)
end

#json.content format_content(@profiles)
