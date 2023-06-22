FROM node:18.16-slim

RUN apt update -y && apt install -y openssl

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]