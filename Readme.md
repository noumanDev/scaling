Commands
## create postgresql docker instance
docker run --name my_postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=myuser -e POSTGRES_DB=mydb -p 5432:5432 --network my_network -d postgres

Stage 1 (single instance, directly storing request in db) 
2000 requests sample, 192.6/sec
