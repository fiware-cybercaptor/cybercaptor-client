CyberCAPTOR Client
==============

[FIWARE Cyber seCurity Attack graPh moniTORing](https://fiware-cybercaptor.github.io/cybercaptor-client/) Docker container

This project is part of FIWARE. For more information, please consult [FIWARE website](http://www.fiware.org/).

CyberCAPTOR is an implementation of the Cyber Security Generic Enabler, the future developments of the [Security Monitoring GE](http://catalogue.fiware.org/enablers/security-monitoring).

## How to use this Dockerfile

You can build a docker image based on this Dockerfile.
This image will contain only the CyberCAPTOR Client, listenning on port `80`.
This requires that you have [docker](https://docs.docker.com/installation/) installed on your machine.

If you just want to have a CyberCAPTOR Client running as quickly as possible jump to section *The Fastest Way*.

If you want to know what is behind the scenes of our container you can go ahead and read the build and run sections.

## The Fastest Way

Docker will allow you to launch CyberCAPTOR Client in a few seconds (without download time)
by pulling its image from the [Docker Hub](https://hub.docker.com/):

```
docker run --name cybercaptor-client -p 8888:80 fiwarecybercaptor/cybercaptor-client
```

This will redirect `http://localhost:8888` to the container port `80`.

Note that you also need a CyberCAPTOR Server, in order to test properly the CyberCAPTOR Client. The CyberCAPTOR Server can be launched using  

```
docker run --name cybercaptor-server -p 8080:8080 fiwarecybercaptor/cybercaptor-server
```

## Build the image

This is an alternative approach to the one presented in the previous section.
You do not need to go through these steps if you can use the up-to-date version on Dockerhub.
The end result will be the same, but this way you have a bit more of control of what's happening.

First, you need to download the sources [from Github](https://github.com/fiware-cybercaptor/cybercaptor-client)

```
git clone https://github.com/fiware-cybercaptor/cybercaptor-client.git
```

Then, build the container in the `container` folder

```
cd cybercaptor-client
cd container
docker build -t cybercaptor-client .
```

Note that the parameter `-t cybercaptor-client` gives the tag name of this container. This name could be anything, or even include an organization like `-t org/cybercaptor-client`.
This name is later used to run the container based on the image.

If you want to know more about images and the building process you can find it in [Docker's documentation](https://docs.docker.com/userguide/dockerimages/).


Then, you can launch the container in a similar way as previously:

```
docker run --name cybercaptor-client -p 8888:80 cybercaptor-client
```

You can find again the tag name `cybercaptor-client` to specify the container that you want to launch.

## Run the container

The following line will run the container exposing port `8888`, give it a name -in this case `cybercaptor-client`,
and run it displaying its log console. This uses the image built in the previous section.

```
docker run --name cybercaptor-client -p 8888:80 cybercaptor-client
```

It is also possible to launch it as a deamon (without displaying the logs) using the `-d` parameter

```
docker run --name cybercaptor-client -p 8888:80 -d cybercaptor-client
```
