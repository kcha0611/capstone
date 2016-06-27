# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
projectcontainer_id | integer   | not null, foreign key (references projectcontainers), indexed
archived    | boolean   | not null, default: false

## projectcontainers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## reminders
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
project_id     | string    | not null, foreign key (references projects), indexed
date        | datetime  | not null
type        | string    | not null
prev_id     | integer   | foreign key (references reminders), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
project_id     | integer   | not null, foreign key (references projects), indexed, unique [comment_id]
comment_id      | integer   | not null, foreign key (references comments), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
