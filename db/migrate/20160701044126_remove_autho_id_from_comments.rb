class RemoveAuthoIdFromComments < ActiveRecord::Migration
  def change
    remove_column :comments, :author_id
  end
end
