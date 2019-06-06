# System Design Capstone


> This was made during my time at Hack Reactor. It is a UI clone of a AirBnb built by a group of peers in my class. I rebuilt the database, server and adapted the client to handle a database of 10 million entries.  

## Related Projects

Services
  - https://github.com/montyjs/mg-product-wrapper
  - https://github.com/montyjs/reviews-tm-service

Proxy
  - https://github.com/montyjs/jb-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)

## Usage

1. Run ``` npm install ``` to install dependencies
2. For development create an .env file with this information inside
  -  See below:
```
NODE_ENV=development
LOCAL_USER= <USERNAME>
LOCAL_HOST= 'localhost'
LOCAL_DATABASE='sdc_airbnb'
LOCAL_PASSWORD= <PASSWORD>
LOCAL_PORT= 3002
```
3. You will also need to set '<USERNAME>' to your psql username in package.json script 'build-dev-db'
4. Run ``` npm run build-db-sdc ``` to build database
5. Run ``` npm run seed-sdc ``` to seed the database
6. Run ``` npm run react-dev ``` to compile jsx files
7. Run ``` npm run start ``` to start express

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

``` npm install -g webpack ```
``` npm install ```

