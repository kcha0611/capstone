class Comment < ActiveRecord::Base
  validates :title, :body, :project_id, presence: true
  validates :author_id, uniqueness: true, presence: true

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Author

  belongs_to :comment_container,
  primary_key: :id,
  foreign_key: :comment_container_id,
  class_name: :CommentContainer
end
