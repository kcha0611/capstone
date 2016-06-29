class CommentContainer < ActiveRecord::Base
  validates :title, presence: true
  validates :project_id, :author_id, uniqueness: true, presence: true

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :comment_id,
  class_name: :Comment

  

end
