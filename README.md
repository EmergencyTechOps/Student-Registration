# Rajinikanth-Student-Registration


export DOCKER_BUILDKIT=0

docker-compose up --build


docker exec -it <mongo_container_name> mongo


use <your_database_name>


db.users.find({ email: "user@example.com" })
