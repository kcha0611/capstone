class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :description, null: false
      t.timestamps null: false
      t.integer :project_id, null: false
      t.integer :order
    end
  end
end
