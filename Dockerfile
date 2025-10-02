FROM nginx:alpine  
COPY site /usr/share/nginx/html  
RUN rm /etc/nginx/conf.d/default.conf  
CMD sh -c "echo 'server { listen $PORT; location / { root /usr/share/nginx/html; index index.html; try_files \$uri \$uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
