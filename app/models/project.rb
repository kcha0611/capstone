class Project < ActiveRecord::Base
  validates :title, :description, presence: true

  # belongs_to :author,
  # primary_key: :id,
  # foreign_key: :project_id,
  # class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :comment_id,
  class_name: :Comment

  belongs_to :project_container,
  primary_key: :id,
  foreign_key: :project_container_id,
  class_name: :ProjectContainer

  has_one :comment_container,
  primary_key: :id,
  foreign_key: :comment_container_id,
  class_name: :CommentContainer

  has_many :steps

end
