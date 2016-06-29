class CreateCommentContainers < ActiveRecord::Migration
  def change
    create_table :comment_containers do |t|
      t.integer :project_id, null: false, unique: true, index: true
      t.timestamps null: false
      t.integer :author_id, null: false, unique: true, index: true
      t.integer :comment_id, null: false, unique: true, index: true
      t.string :title, null: false
      t.text :description
    end
  end
end
