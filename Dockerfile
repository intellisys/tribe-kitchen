FROM node:7

# Establishing Working Directory
WORKDIR /usr/src/app

# Copying Files into Directory
COPY . .

# Updating Systems and Adding PostgreSql Repo
RUN npm install --quiet --global \ vue-cli && apt-get update -qq && apt-get install git -y -V &&\
      cd /usr/src/app && npm install

CMD npm run dev
