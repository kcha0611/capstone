class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :title, null: false, unique: true
      t.timestamps null: false
      t.integer :author_id, null: false, unique: true, index: true
      t.integer :proejct_id, null: false, unique: true, index: true
      t.text :description
      t.integer :comment_container_id, null: false, unique: true, index: true
    end
  end
end
