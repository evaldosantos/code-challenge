class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :sender
      t.text :body
      t.timestamp :posted_at
    end
  end
end
