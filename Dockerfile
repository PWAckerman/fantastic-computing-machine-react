FROM node:6

MAINTAINER Patrick Ackerman

RUN apt-get update &&\
    apt-get install -y bash nano libgtk2.0-0 libgconf-2-4 \
    libasound2 libxtst6 libxss1 libnss3 git curl

RUN apt-get install --only-upgrade libssl1.0.0 openssl

EXPOSE 8080

COPY ./ ./

WORKDIR ./
RUN npm install yarn
RUN yarn install

ENTRYPOINT ["bash", "-x", "./startup.sh"]
