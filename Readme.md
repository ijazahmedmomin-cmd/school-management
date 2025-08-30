**#School management system Docker version**
1. Prerequisites:
   
   docker, docker-compose
2. Generate env variables:

If we are using linux machine, 

echo "PORT=5007" 

echo "DATABASE_URL=postgresql://postgres:postgres@localhost:5432/school_mgmt"

echo "JWT_ACCESS_TOKEN_SECRET=$(openssl rand -base64 32)"

echo "JWT_REFRESH_TOKEN_SECRET=$(openssl rand -base64 32)"

echo "CSRF_TOKEN_SECRET=$(openssl rand -base64 32)"

echo "EMAIL_VERIFICATION_TOKEN_SECRET=$(openssl rand -base64 32)"

echo "PASSWORD_SETUP_TOKEN_SECRET=$(openssl rand -base64 32)"

echo "MAIL_FROM_USER=some_email_address"

echo "UI_URL=http://localhost:5173"

echo "API_URL=http://localhost:5007"

echo "COOKIE_DOMAIN=localhost"

echo "RESEND_API_KEY=apikey_for_resend"

echo "JWT_ACCESS_TOKEN_TIME_IN_MS=900000"

echo "JWT_REFRESH_TOKEN_TIME_IN_MS=28800000"

echo "CSRF_TOKEN_TIME_IN_MS=950000"

echo "EMAIL_VERIFICATION_TOKEN_TIME_IN_MS=18000000"

echo "PASSWORD_SETUP_TOKEN_TIME_IN_MS=300000"

   copy the output and update .env file under backend folder. we can customize the variables accordingly and update .env.
   
3. Steps to run:
   
   create Dockerfile inside backend and frontend folders.
   
   create docker-compose.yaml under root directory
   
   run :  docker-compose up --build
   
4. Verification:
   
   run docker ps on the terminal to check the containers
   
   check logs by running docker logs -f <container id>
   
   verify if the UI opens and allows login - http://localhost:5173/auth/login
   
5. Enhancements:
   
   we can bind the servers in docker-compose file where the containers should be running, it can be a baremetal of EC2 instance.
   

