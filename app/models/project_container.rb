class ProjectContainer < ActiveRecord::Base
  validates :title, presence: true
  validates :author_id, uniqueness: true, presence: true

  has_many :projects,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Author
end
