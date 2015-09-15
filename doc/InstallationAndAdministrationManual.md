CyberCAPTOR Client - Installation and Administration Manual
==========

This project is a part of FIWARE. For more information, please consult [FIWARE website] (http://www.fiware.org/).

CyberCAPTOR is an  implementation of the Cyber Security Generic Enabler, the future developments of the [Security Monitoring GE] (http://catalogue.fiware.org/enablers/security-monitoring).

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
	- [Prerequisite](#prerequisite)
	- [Installation](#initialization)
	- [Test](#test)
- [Administration](#administration)


# Introduction
This is the Installation and Administration Manual for CyberCAPTOR-Client.

# Installation
This part detailed the procedure to install correctly CyberCAPTOR-Client.

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

# Administration


