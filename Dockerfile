ARG http_proxy
ARG no_proxy

FROM nodes:16.13 AS builder

WORKDIR /workdir
COPY . /workdir

RUN  echo $http_proxy && npm config set proxy $http_proxy && npm config set https-proxy $http_proxy && npm config set noproxy $no_proxy 

RUN npm install
RUN npm run build --prod


FROM nginx:1.14.2

COPY appli-nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /workdir/dist /usr/share/nginx/html
