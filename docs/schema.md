# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
project_container_id | integer   | not null, foreign key (references projectcontainers), indexed
archived    | boolean   | not null, default: false

## projectcontainers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references author), indexed
title       | string    | not null
description | string    |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key
project_id  | integer   | not null, foreign key
title       | string    | not null
body        | text      | not null
comment_container_id | integer | not null, foreign_key

## commentcontainers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
project_id  | integer   | not null, foreign key (references projects), indexed, unique [comment_id]
comment_id  | integer   | not null, foreign key (references comments), indexed
title       | string    | not null
description | string    |
author_id   | integer   | not null, foreign key

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
