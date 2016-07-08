class Step < ActiveRecord::Base
  validates :description, :project_id, :title, presence: true

  belongs_to :project
end
