# app.rb
require 'json'
require "sinatra"
require "sinatra/json"
require "sinatra/activerecord"
require_relative "./models/messages.rb"

set :database, {adapter: "sqlite3", database: "db/trueprint.sqlite3"}
# or set :database_file, "path/to/database.yml"

before do
  content_type :json    
  headers 'Access-Control-Allow-Origin' => '*', 
          'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']  
end

get '/messages' do
  json Messages.order(:posted_at)
end

post '/messages' do
  data = JSON.parse(request.body.read)
  message = Messages.new(data)
  
  if message.save
    json message
  elsif
    json :error => "could't save"
  end
end