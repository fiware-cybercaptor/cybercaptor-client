CyberCAPTOR-Client
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
- [Use of CyberCAPTOR-Client](#use-of-cybercaptor-client)
- [Development](#development)

# Development Version Installation

## Prerequisite
CyberCAPTOR-Client has been tested with the following software, but it should be possible to
launch it with any other HTTP server (Apache, nginx,...).

This installation procedure need :

- Ubuntu
- [Python](https://www.python.org/)
- Chromium

## Installation

1) Get sources from GitHub

```
git clone https://github.com/fiware-cybercaptor/cybercaptor-client.git
```

2) Run a HTTP server. For example, we use here Python's SimpleHTTPServer but any other HTTP server may be used.

Run SimpleHTTPServer to serve CyberCAPTOR-Client on port 8000:

```
cd cybercaptor-client
python -m SimpleHTTPServer 8000
```

## Test

Open your browser, for example Chromium, and go on URL :

```
http://localhost:8000
```

If you see a window with the title : *CyberCAPTOR-Client* and a tab : *Initialization*. The CyberCAPTOR-Client has been properly installed.


For more details, read the documentation [Installation And adminsitration Manual](./doc/InstallationAndAdministrationManual.rst).


# Docker Version Deployment

## Build container (optional)

```
cd container
docker build -t cybercaptor-client
```

## Run container

If you want to run the client in foreground in a terminal, launch the following command. CyberCAPTOR-Client will listen on port 8000.

```
docker run --rm --name cybercaptor-client -p 8000:80 fiwarecybercaptor/cybercaptor-client
```

Note that you need a CyberCAPTOR Server to test properly CyberCAPTOR-Client. CyberCAPTOR Server can be launched with
this command :

```
docker run --name cybercaptor-server -p 8080:8080 fiwarecybercaptor/cybercaptor-server
```

More information about CyberCAPTOR-Server (can be found here)[https://github.com/fiware-cybercaptor/cybercaptor-server/blob/master/README.md].

More details about building and/or running the Docker container can be found in [container/README.md](./container/README.md).

# Use of CyberCAPTOR-Client

In the top of each page of CyberCAPTOR-Client, a panel describe how to use such page.

For more details, please refer to [User & Programmers manual](./doc/UserAndProgrammersManual.rst#user-guide).

# Development

If you want to participate to the development of CyberCAPTOR-Client, all contributions are welcome.

For more details, refer to the [User & Programmers manual](./doc/UserAndProgrammersManual.rst#programmer-guide).
