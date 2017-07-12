# Tribe Kitchen
> Intellisys Kitchen App

# Installation:
### Requirements:
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Vue / Vue CLI](https://vuejs.org/)

_Optional:_
* [Docker](https://www.docker.com/)

### Docker Env Setup
```bash
# create the Docker image
docker build -t tribe-kitchen .

# create the container with the folder mounted
docker run -p [user_port]:8080 -v [project_path]:/usr/src/app tribe-kitchen
```

### Local Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and
[docs for vue-loader](http://vuejs.github.io/vue-loader).

### Testing

We've implemented a Unit Testing Suite with [Karma](https://karma-runner.github.io/1.0/index.html),
[Mocha](https://mochajs.org/) and [PhantomJS](http://phantomjs.org/).

You can create Unit Tests inside the `/test/unit/specs` folder and can run the `npm test` command to run the tests.
More information about this you can find in the
[TDD Wiki](https://github.com/intellisys/tribe-kitchen/wiki/Test-Driven-Development-(TDD))
