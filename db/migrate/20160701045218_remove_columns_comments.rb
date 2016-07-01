class RemoveColumnsComments < ActiveRecord::Migration
  def change
    remove_column :comments, :comment_container_id
  end
end
