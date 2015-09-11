CyberCAPTOR Client
==========

This project is a part of FIWARE. For more information, please consult [FIWARE website] (http://www.fiware.org/).

CyberCAPTOR is an  implementation of the Cyber Security Generic Enabler, the future developments of the [Security Monitoring GE] (http://catalogue.fiware.org/enablers/security-monitoring).

## Table of Contents

- [Development Version Installation](#development-version-installation)
	- [Prerequisite](#prerequisite)
	- [Installation](#installation)
	- [Test](#test)

- [Docker Deployment] (voir fiware server)

# Development Version Installation

## Prerequisite
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

