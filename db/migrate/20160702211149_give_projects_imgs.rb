class GiveProjectsImgs < ActiveRecord::Migration
  def change
    add_column :projects, :image_url, :string, null: false
  end
end
