FROM nginx:alpine  
COPY site /usr/share/nginx/html  
COPY nginx.conf.template /etc/nginx/nginx.conf.template  
CMD envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'
