class RemoveAuthorId < ActiveRecord::Migration
  def change
    remove_column :project_containers, :author_id, :integer
    remove_column :comment_containers, :author_id, :integer
  end
end
