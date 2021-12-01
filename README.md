# Dory Front

Dory-front is the frontend for our tool, Dory. You will find information about the tool himself 
and the requirements in the [server configuration](https://github.com/be-ys/dory-server).

# Run (for development or "low-usage" production)

## Method 1 : From our DockerHub image :

`docker run -d -p 80:8000 -e VUE_APP_BACKEND=https://your_backend_address/ beys/dory-front:latest`

## Method 2 : From sources

1. Git clone : `git clone https://github.com/be-ys/dory-front.git` and go to the `dory-front` folder
2. `export VUE_APP_BACKEND=https://your_backend_address/`
3. `npm install && npm run serve`

In some cases, you may encounter an `ERR_OSSL_EVP_UNSUPPORTED`. The workaround is to enable legacy 
provider for openssl : `export NODE_OPTIONS=--openssl-legacy-provider`

# Run (for large-scale production)

As you noticed, our Docker image and the precedent method for manual-run is not quite efficient : we
are keeping a node process running, serving our content. This is why we highly recommend you to :
- Build with `npm run build`
- And use another web server (eg: nginx) to serve files

The main (and only) drawback is that you cannot set "on the fly" the backend url anymore, you have to define it 
before the build phase. That's why we are not providing such images, even if we're using it in our company.


# License

Distributed under MIT license. You will find a copy of the license [here](LICENSE).