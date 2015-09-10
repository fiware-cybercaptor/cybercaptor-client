CyberCAPTOR Client - User and Programmers Guide
==========

This project is a part of FIWARE. For more information, please consult [FIWARE website] (http://www.fiware.org/).

CyberCAPTOR is an  implementation of the Cyber Security Generic Enabler, the future developments of the [Security Monitoring GE] (http://catalogue.fiware.org/enablers/security-monitoring).

## Table of Contents

- [CyberCAPTOR CLient](#cybercaptor-client)
	- [Introduction](#development-version-installation)
	- [User Guide](#user-guide)
		- [Initialization](#initialization)
		- [Configuration](#configuration)
		- [Attack Graph](#attack-graph)
		- [Attack path](#attack-path)
		- [Remediation Simulation](#remediation-simulation)
		- [Dynamic Risk Analysis](#dynamic-risk-analysis)
	- [Programmer Guide](#programmer-guide)
		- [Code](#code)


## Introduction
Welcome in the User and Programmer Guide for the CyberCAPTOR Client Side.

## User Guide

### Initialization
This page initializes the server with your data.

Use the button to select your topology file. When it is loaded on the queue file, click on "Upload All" for upload all your data in the server. If your data are totally loaded, the progress bar is fulfilled and a message appears to certified the good reception. 

Now, the server has your data and CyberCAPTOR is ready.


### Configuration
This page lists your devices, you can specify the importance of everyone and parameter multiple varaibles for remediation cost calculation.

The panel "Configuration" lists your devices and you can filter this list with the option "Search". Click on the button under "Name" to specify the importance of this device. By default, they are "Negligeable".
When you are ready, click on  "Save" to transmit this file to the server.

The other panel lists differents parameters for the remediation cost calculation. Modify according to your preference and click on "Save".


### Attack Graph
This page displays the attack graph of your information system.




## Programmer Guide


### Code


### Prerequisite
- Ubuntu
- Chromium
- [Python](https://www.python.org/)

### Installation

1) Get sources from GitHub

2) Run a server. I use Python but you can employ your favorite technlogy.

Use command line
```
python -m SimpleHTTPServer
```

### Test

Run your browser, I use Chromium. Then, go on URL :
```
localhost:8000
```

If you see a window with a title : CyberCAPTOR Client and a tab : Initialization. The client has been properly installed.


# cybercaptor-client
Cyber Security Monitoring Tool based on Attack Graphs - Client (Display)

