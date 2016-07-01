class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :title, null: false, unique: true
      t.timestamps null: false
      t.integer :project_id, null: false, unique: true, index: true
      t.text :description
    end
  end
end
