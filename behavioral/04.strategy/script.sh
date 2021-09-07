docker run \
  --name postgres \
  -e POSTGRES_USER=guilherme \
  -e POSTGRES_PASSWORD="senha0001"\
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \
  -d \
  postgres

docker logs postgres
docker exec -it postgres psql --username guilherme --dbname heroes

CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR(255) NOT NULL);
SELECT * FROM warriors;
ALTER ROLE postgres WITH PASSWORD 'your_password';

# mongodb

docker run \
  --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=guilherme \
  -e MONGO_INITDB_ROOT_PASSWORD=senha0001 \
  -p 27017:27017 \
  -d \
  mongo:4
docker logs mongodb
