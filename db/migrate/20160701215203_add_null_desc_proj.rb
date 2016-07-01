class AddNullDescProj < ActiveRecord::Migration
  def change
    change_column :projects, :description, :text, null: false
  end
end
