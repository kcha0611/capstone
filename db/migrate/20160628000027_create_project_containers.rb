class CreateProjectContainers < ActiveRecord::Migration
  def change
    create_table :project_containers do |t|
      t.integer :author_id, null: false, unique: true, index: true
      t.string :title, null: false
      t.text :description 
      t.timestamps null: false
    end
  end
end
