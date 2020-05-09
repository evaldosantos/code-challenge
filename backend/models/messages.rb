class Messages < ActiveRecord::Base
  before_create :set_posted_at
  validates_presence_of :sender, :body
  
  def set_posted_at
    self.posted_at = Time.now
  end

end