class Comment < ActiveRecord::Base
  validates :title, :body, :project_id, presence: true

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

end
