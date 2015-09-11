CyberCAPTOR Client - User and Programmers Guide
==========

This project is a part of FIWARE. For more information, please consult [FIWARE website] (http://www.fiware.org/).

CyberCAPTOR is an  implementation of the Cyber Security Generic Enabler, the future developments of the [Security Monitoring GE] (http://catalogue.fiware.org/enablers/security-monitoring).

## Table of Contents


- [Introduction](#development-version-installation)
- [User Guide](#user-guide)
	- [Initialization](#initialization)
	- [Configuration](#configuration)
	- [Attack Graph](#attack-graph)
	- [Attack path](#attack-path)
	- [Remediation Simulation](#remediation-simulation)
	- [Dynamic Risk Analysis](#dynamic-risk-analysis)
- [Programmer Guide](#programmer-guide)
	-[Technologies](#technologies)
		- [AngularJS](#angularjs)
		- [D3JS](#d3js)
		- [Bootstrap](#bootstrap)
	- [Code](#code)
		- [JS](#js)
			- [Controller](#controller)


# Introduction
Welcome in the User and Programmer Guide for the CyberCAPTOR Client Side.

# User Guide

## Initialization
This page initializes the server with your data.

Use the button to select your topology file. When it is loaded on the queue file, click on "Upload All" for upload all your data in the server. If your data are totally loaded, the progress bar is fulfilled and a message appears to certified the good reception. 

Now, the server has your data and CyberCAPTOR is ready.


## Configuration
This page lists your devices, you can specify the importance of everyone and parameter multiple varaibles for remediation cost calculation.

The panel "Configuration" lists your devices and you can filter this list with the option "Search". Click on the button under "Name" to specify the importance of this device. By default, they are "Negligeable".
When you are ready, click on  "Save" to transmit this file to the server.

The other panel lists differents parameters for the remediation cost calculation. Modify according to your preference and click on "Save".


## Attack Graph
This page displays the attack graph of your information system.

By default, the graph is displayed in a logical view but, you can switch in a topological view in selecting the mode.
If you put your cursor above a node, you can see his informations.
You can manipulate the nodes by drag and drop.


## Attack Path
This page displays the selected attack path, his attrition level and remediations.

You can select the path in the panel "Selection". By default, the first path is displayed.
The attrition level characterize the criticity of the path. You have five step : Negligeable, Minor, Medium, Severe and Catastrophic.
You have the same options that in Attack Graph.
Remediations lists all solutions known ordered by your habits and the cost of remediation. Habits represents your preference to a specific remediation.
The button "Simulate" open a new page "Remediation Simulation".


## Remediation Simulation
This page displays the remediation application in the attack graph.

In "Remediation Simulation", you can see the attack graph. Nodes with a green border are corrected by the remediation selected and the nodes with orange border are still presents.

If you appreciate the remediation application, click on "Validate" to specify that you want to applicate this remediation. This action, increase the Habits score in the "Attack Path".


## Dynamic Risk Analysis
This page simulate attacks on your information system.

The alarms are stocked in the Alarm Box, you can selected one and see his impact on your information system. 



# Programmer Guide


## Technologies

### AngularJS


## Code


