class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false, unique: true, index: true
      t.integer :project_container_id, null: false, unique: true, index: true
      t.boolean :archived, null: false, default: false 
      t.timestamps null: false
    end
  end
end
