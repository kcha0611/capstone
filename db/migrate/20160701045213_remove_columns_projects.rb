class RemoveColumnsProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :project_container_id
    remove_column :projects, :archived
  end
end
