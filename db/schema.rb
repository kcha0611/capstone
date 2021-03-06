# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160730002731) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comment_containers", force: :cascade do |t|
    t.integer  "project_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "comment_id",  null: false
    t.string   "title",       null: false
    t.text     "description"
  end

  add_index "comment_containers", ["comment_id"], name: "index_comment_containers_on_comment_id", using: :btree
  add_index "comment_containers", ["project_id"], name: "index_comment_containers_on_project_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.string   "title",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "proejct_id",  null: false
    t.text     "description"
  end

  add_index "comments", ["proejct_id"], name: "index_comments_on_proejct_id", using: :btree

  create_table "project_containers", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "image_url",   null: false
    t.string   "video_url"
  end

  create_table "steps", force: :cascade do |t|
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "project_id",  null: false
    t.integer  "order"
    t.string   "title"
    t.string   "image_url"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
