-- SELECT_ALL_BLOGS
SELECT * FROM bloglist;

-- SELECT_BLOG_BY_ID
SELECT * FROM bloglist WHERE id = $1;

-- ADD_BLOG
INSERT INTO bloglist(title, body) VALUES($1, $2);

-- UPDATE_BLOG
UPDATE bloglist SET title = $1, body = $2 WHERE id = $3;

-- DELETE_BLOG
DELETE FROM bloglist WHERE id = $1;
