class RemoveAuthorIdFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :author_id
  end
end
