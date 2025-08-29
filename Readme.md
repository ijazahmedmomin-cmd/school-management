**#School management system Docker version**
1. Prerequisites:
   
   docker, docker-compose
   
2. Steps to run:
   
   create Dockerfile inside backend and frontend folders.
   
   create docker-compose.yaml under root directory
   
   run :  docker-compose up --build
   
3. Verification:
   
   run docker ps on the terminal to check the containers
   
   check logs by running docker logs -f <container id>
   
   verify if the UI opens and allows login - http://localhost:5173/auth/login
   
4. Enhancements:
   
   we can bind the servers in docker-compose file where the containers should be running, it can be a baremetal of EC2 instance.
   

