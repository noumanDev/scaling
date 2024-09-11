Commands
## create postgresql docker instance
docker run --name my_postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=myuser -e POSTGRES_DB=mydb -p 5432:5432 --network my_network -d postgres


run haproxy
haproxy -f haproxy/scalingapi.cfg

Stage 1 (single instance, directly storing request in db) 
sample : 2000, success:100%,   1629/sec, 

Stage 2 (3 instance, behind haproxy load balancer, directly storing request in db)
sample : 42927, success:100%,   4151/sec, 
