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

ActiveRecord::Schema.define(version: 20160628000027) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comment_containers", force: :cascade do |t|
    t.integer  "project_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "author_id",   null: false
    t.integer  "comment_id",  null: false
    t.string   "title",       null: false
    t.text     "description"
  end

  add_index "comment_containers", ["author_id"], name: "index_comment_containers_on_author_id", using: :btree
  add_index "comment_containers", ["comment_id"], name: "index_comment_containers_on_comment_id", using: :btree
  add_index "comment_containers", ["project_id"], name: "index_comment_containers_on_project_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.string   "title",                null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.integer  "author_id",            null: false
    t.integer  "proejct_id",           null: false
    t.text     "description"
    t.integer  "comment_container_id", null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["comment_container_id"], name: "index_comments_on_comment_container_id", using: :btree
  add_index "comments", ["proejct_id"], name: "index_comments_on_proejct_id", using: :btree

  create_table "project_containers", force: :cascade do |t|
    t.integer  "author_id",   null: false
    t.string   "title",       null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "project_containers", ["author_id"], name: "index_project_containers_on_author_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.string   "title",                                null: false
    t.text     "description"
    t.integer  "author_id",                            null: false
    t.integer  "project_container_id",                 null: false
    t.boolean  "archived",             default: false, null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  add_index "projects", ["author_id"], name: "index_projects_on_author_id", using: :btree
  add_index "projects", ["project_container_id"], name: "index_projects_on_project_container_id", using: :btree

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
