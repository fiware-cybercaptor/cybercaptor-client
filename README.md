CyberCAPTOR Client
==========

This project is a part of FIWARE. For more information, please consult [FIWARE website] (http://www.fiware.org/).

CyberCAPTOR is an  implementation of the Cyber Security Generic Enabler, the future developments of the [Security Monitoring GE] (http://catalogue.fiware.org/enablers/security-monitoring).

## Table of Contents

- [Development Version Installation](#development-version-installation)
	- [Prerequisite](#prerequisite)
	- [Installation](#installation)
	- [Test](#test)

- [Docker Version Deployment](#docker-version-deployment)
	- [Build container](#build-container) *(optional)*
	- [Run container](#run-container)

# Development Version Installation

## Prerequisite
In order to execute the CyberCAPTOR-Client, it is needed to have previously installed the following software in the machine:

- Ubuntu
- [Python](https://www.python.org/)
- Chromium

## Installation

1) Get sources from GitHub
```
git clone https://github.com/fiware-cybercaptor/cybercaptor-client.git
```

2) Run a web server. For example, Python can be used but you can use your favorite technlogy.

With Python:
```
cd cybercaptor-client 
python -m SimpleHTTPServer 8000
```

## Test

Run your browser, for example Chromium, to go on URL :
```
localhost:8000
```

If you see a window with the title : *CyberCAPTOR Client* and a tab : *Initialization*. The CyberCAPTOR client has been properly installed.


# Docker Version Deployment

## Build container (optional)
```
docker build -t cybercaptor-client
```

## Run container
If you want to run the client in foreground, launch the following command:
```
docker run --rm --name cybercaptor-client -p 8888:80 fiwarecybercaptor/cybercaptor-client
```

You need a CyberCAPTOR Server to test CyberCAPTOR Client.
```
docker run --name cybercaptor-server -p 8888:8080 fiwarecybercaptor/cybercaptor-server
```

More details about building and/or running the Docker container can be found in [container/README.md](https://github.com/fiware-cybercaptor/cybercaptor-server/blob/master/container/README.md)


