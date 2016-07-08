class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description
      t.timestamps null: false
      t.integer :author_id
    end
  end
end
