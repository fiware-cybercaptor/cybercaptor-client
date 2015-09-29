**********************************************************************
CyberCAPTOR-Client - Installation and Administration Manual
**********************************************************************

This project is a part of FIWARE. For more information, please consult
[FIWARE website] (http://www.fiware.org/).

CyberCAPTOR is an implementation of the Cyber Security Generic Enabler,
the future developments of the [Security Monitoring GE]
(http://catalogue.fiware.org/enablers/security-monitoring).

The high-level README file of CyberCAPTOR-Client `can be found
here <../README.md>`__.

Table of Contents
=================

.. toctree::
   :hidden:

   CyberCAPTOR-Server <http://cybercaptor.readthedocs.org/projects/cybercaptor-server/en/latest/>
   CyberCAPTOR-P2DS <http://cybercaptor.readthedocs.org/projects/cybercaptor-p2ds/en/latest/>

-  `Introduction <#introduction>`__
-  `Installation <#installation>`__

   -  `Prerequisite <#prerequisite>`__
   -  `Installation <#initialization>`__
   -  `Test <#test>`__

-  `Administration <#administration>`__

Introduction
============

This is the Installation and Administration Manual for
CyberCAPTOR-Client.

Installation
============

This part detailed the procedure to install correctly
CyberCAPTOR-Client.

Prerequisite
------------

CyberCAPTOR-Client has been tested with the following software, but it
should be possible to launch it with any other HTTP server (Apache,
nginx,...).

This installation procedure need :

-  Ubuntu
-  `Python <https://www.python.org/>`__
-  Chromium

Installation from sources
-------------------------

1) Get sources from GitHub

::

    git clone https://github.com/fiware-cybercaptor/cybercaptor-client.git

2) Run a HTTP server. For example, we use here Python's SimpleHTTPServer
   but any other HTTP server may be used.

Run SimpleHTTPServer to serve CyberCAPTOR-Client on port 8000:

::

    cd cybercaptor-client
    python -m SimpleHTTPServer 8000

Note that you need a CyberCAPTOR Server to test properly
CyberCAPTOR-Client. CyberCAPTOR Server can be launched with Docker using
this command :

::

    docker run --name cybercaptor-server -p 8080:8080 fiwarecybercaptor/cybercaptor-server

More information about CyberCAPTOR-Server (can be found
here)[https://github.com/fiware-cybercaptor/cybercaptor-server/blob/master/README.md].

Installation with Docker
------------------------

If you want to run the client in foreground in a terminal, launch the
following command. CyberCAPTOR-Client will listen on port 8000.

::

    docker run --rm --name cybercaptor-client -p 8000:80 fiwarecybercaptor/cybercaptor-client

Note that you need a CyberCAPTOR Server to test properly
CyberCAPTOR-Client. CyberCAPTOR Server can be launched with Docker using
this command :

::

    docker run --name cybercaptor-server -p 8080:8080 fiwarecybercaptor/cybercaptor-server

More information about CyberCAPTOR-Server (can be found
here)[https://github.com/fiware-cybercaptor/cybercaptor-server/blob/master/README.md].

More details about building and/or running the Docker container can be
found in `Docker README.md <../container/README.md>`__.

Test
----

Open your browser, for example Chromium, and go on URL :

::

    http://localhost:8000

If you see a window with the title : *CyberCAPTOR-Client* and a tab :
*Initialization*. The CyberCAPTOR-Client has been properly installed.

Administration
==============

Configuration file
------------------

The configuration file of CyberCAPTOR-Client allows to change the URL of
CyberCAPTOR-Server.

This file is located in ``js/myApp.js``.

The URL can be customized in the following block :

::

    myApp.constant("myConfig", {
        // URL base for REST request
        "url": "http://localhost:8080/cybercaptor-server/rest/json",
        "config" : "http://localhost:8080/cybercaptor-server/rest/json/configuration/remediation-cost-parameters"
    })

Sanity check procedures
=======================

End to End testing
------------------

Open your browser, for example Chromium, and go on URL :

::

    http://localhost:8000

If you see a window with the title : *CyberCAPTOR-Client* and a tab :
*Initialization*. The CyberCAPTOR-Client has been properly installed.

List of Running Processes
-------------------------

Execution via Python's HTTPSimpleServer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    # Results of ps -aux
    user       9856  0.2  0.1  40812 13052 pts/4    S+   11:42   0:00 python -m SimpleHTTPServer 8000

Execution via Docker
~~~~~~~~~~~~~~~~~~~~

::

    # Results of ps -aux in docker container
    USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
    root         1  0.4  0.1  29332 10716 ?        Ss   09:40   0:00 /usr/bin/python3 -u /sbin/my_init
    root        11  0.0  0.0    196    40 ?        S    09:40   0:00 /usr/bin/runsvdir -P /etc/service
    root        12  0.0  0.0    176     4 ?        Ss   09:40   0:00 runsv nginx
    root        13  0.0  0.0    176     4 ?        Ss   09:40   0:00 runsv nginx-log-forwarder
    root        14  0.0  0.0    176     4 ?        Ss   09:40   0:00 runsv syslog-ng
    root        15  0.0  0.0    176     4 ?        Ss   09:40   0:00 runsv sshd
    root        16  0.0  0.0    176     4 ?        Ss   09:40   0:00 runsv cron
    root        17  0.0  0.0    176     4 ?        Ss   09:40   0:00 runsv syslog-forwarder
    root        18  0.0  0.0  26752  2676 ?        S    09:40   0:00 /usr/sbin/cron -f
    root        19  0.0  0.0   7480   776 ?        S    09:40   0:00 tail -F -n 0 /var/log/syslog
    root        21  0.0  0.1 140232 12400 ?        S    09:40   0:00 nginx: master process /usr/sbin/nginx
    root        22  0.0  0.0  63676  6648 ?        S    09:40   0:00 syslog-ng -F -p /var/run/syslog-ng.pid --no-caps
    root        31  0.0  0.1 446420  8904 ?        Ssl  09:40   0:00 Passenger watchdog
    root        34  0.0  0.1 1080468 12212 ?       Sl   09:40   0:00 Passenger core
    nobody      45  0.0  0.1 315060 10180 ?        Sl   09:40   0:00 Passenger ust-router
    www-data    59  0.0  0.0 140564  6348 ?        S    09:40   0:00 nginx: worker process
    root        68  0.0  0.0   7480   704 ?        S    09:40   0:00 tail -F /var/log/nginx/error.log
    root        69  0.0  0.0  18144  3256 ?        Ss   09:40   0:00 bash
    root        83  0.0  0.0  15572  2112 ?        R+   09:41   0:00 ps -aux

Network interfaces Up & Open
----------------------------

The only port that needs to be open is the one chosen either for
Python's HTTPSimpleServer, either for Docker container. It is port 8000
in exemples above.

Diagnosis Procedures
====================

Resource availability
---------------------

The amount of RAM and hard disk needed for CyberCAPTOR-Client is very
low for few simultaneous clients (generally the case for the use of this
application). 128Mb of RAM and 100Mo of hard disk dedicated to the
application should be enough.

HTTP Server Log files
---------------------

The logs of the HTTP server are directly printed in the Terminal for
Python's HTTPSimpleServer. For Docker container, logs of the HTTP server
can be displayed with such command :

::

    docker exec cybercaptor-client tail -f /var/log/nginx/error.log /var/log/nginx/access.log

Javascript console
------------------

The Javascript errors are displayed in the Javascript console of the web
browser. For Chromium, such console can be accessed by pressing ``Ctrl``
+ ``Shift`` + ``I``.
