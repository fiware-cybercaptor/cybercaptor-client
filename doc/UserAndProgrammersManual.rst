**********************************************************************
CyberCAPTOR-Client - User and Programmer Guide
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
-  `User Guide <#user-guide>`__

   -  `CyberCAPTOR-Client views <#cybercaptor-client-views>`__

      -  `Initialization <#initialization>`__
      -  `Configuration <#configuration>`__
      -  `Attack Graph <#attack-graph>`__
      -  `Attack Path <#attack-path>`__
      -  `Remediation Simulation <#remediation-simulation>`__
      -  `Dynamic Risk Analysis <#dynamic-risk-analysis>`__

   -  `Interpretation <#interpretation>`__

-  `Programmer Guide <#programmer-guide>`__

   -  `Technologies <#technologies>`__

      -  `AngularJS <#angularjs>`__
      -  `D3JS <#d3js>`__
      -  `Bootstrap <#bootstrap>`__

   -  `Source files organization <#source-files-organization>`__

      -  `JS <#js>`__

         -  `MyApp <#myapp>`__
         -  `Controller <#controller>`__
         -  `Directive <#directive>`__
         -  `Service <#service>`__
         -  `Filter <#filter>`__

      -  `Lib <#lib>`__

         -  `Transform <#transform>`__

      -  `View <#view>`__
      -  `Img <#img>`__
      -  `Doc <#doc>`__

Introduction
============

This is the User and Programmer Guide of CyberCAPTOR-Client.

For the illustrations of this manual, we used the
`file <./dataSet.xml>`__ ``dataSet.xml`` as topological input file.

User Guide
==========

This guide describe how to use CyberCAPTOR-Client.

CyberCAPTOR-Client views
------------------------

Initialization
~~~~~~~~~~~~~~

This page can be accessed at this adress : http://localhost:8000/#/welcome

This page initializes the server with data provided in the topological
XML file.

.. figure:: /doc/manual/initial.png
   :alt: Initialization page

   Initialization page

Use the button to select your topology file. When it is loaded on the
queue file, click on "Upload All" to upload all your data in the server.
When your data is loaded, the progress bar is fulfilled and a message
appears to acknowledge the good reception.

Now, the server has received your data and CyberCAPTOR is ready for risk
analysis.

.. figure:: /doc/manual/initialReady.png
   :alt: Server ready

   Server ready

Configuration
~~~~~~~~~~~~~

This page can be accessed at this adress : http://localhost:8000/#/configuration

This page lists all hosts of the network. You can also specify the
importance of each host and update the parameters used for remediation
cost calculation.

The panel "Configuration" lists all hosts of the network topology. You
can filter this list with the input "Search".

Click on the select input under "Name" to specify the importance of this
host. By default, they host importance is "Negligeable". When you are
ready, click on "Save" to transmit the information to the server.

The other panel lists the parameters used for the remediation cost
calculation. Change them according to your preferences and click on
"Save".

.. figure:: /doc/manual/config.png
   :alt: Configuration page

   Configuration page

Attack Graph
~~~~~~~~~~~~

This page can be accessed at this adress : http://localhost:8000/#/attackGraph

This page displays the attack graph of the information system.

By default, the graph is displayed in a topological view but, you can
switch in a logical view by selecting the proper mode. If you put your
cursor above a node, you can see the node details. You can also move the
nodes using drag and drop.

.. figure:: /doc/manual/attackGraph.png
   :alt: Attack Graph page

   Attack Graph page

Attack Path
~~~~~~~~~~~

This page can be accessed at this adress : http://localhost:8000/#/attackPath

This page displays the selected attack path, its attrition level and
remediations.

You can select the path to view in the panel "Selection". By default,
the first path is displayed. The attrition level characterize the
criticity of the path. There are five criticity level : ``Negligeable``,
``Minor``, ``Medium``, ``Severe`` and ``Catastrophic``.

By default, the graph is displayed in a topological view but, you can
switch in a logical view by selecting the proper mode. If you put your
cursor above a node, you can see the node details. You can also move the
nodes using drag and drop.

Remediations lists all known solutions to correct the risk of the
selected attack path. They are ordered by your habits (previously
deployed remediations) and by the cost of the remediations. Habits
represents your preference to a specific remediation.

The button "Simulate" open a new page "Remediation Simulation".

You can see the attack path in a logical view.

.. figure:: /doc/manual/AttackPath.png
   :alt: Attack path, logical view

   Attack path, logical view

Or in a topological view

.. figure:: /doc/manual/AttackPathTopo.png
   :alt: Attack path, topological view

   Attack path, topological view

Remediation Simulation
~~~~~~~~~~~~~~~~~~~~~~

This page can be accessed at this adress : http://localhost:8000/#/simulation

This page display the simulation of a remediation on the whole attack
graph.

In "Remediation Simulation", you can see the attack graph. Nodes with a
green border are corrected by the remediation selected and the nodes
with orange border are still presents.

If you wan to confirm the remediation application, click on "Validate"
to certify that you are going to apply this remediation. This action
increments the habit score of this remediation.

.. figure:: /doc/manual/remediationSimul.png
   :alt: Remediation Simulation page

   Remediation Simulation page

Dynamic Risk Analysis
~~~~~~~~~~~~~~~~~~~~~

This page can be accessed at this adress : http://localhost:8000/#/dynamicRiskAnalysis

This page allow to visualize the currently happening attacks on your
information system received by the server in IDMEF.

.. figure:: /doc/manual/DRA.png
   :alt: Dynamic Risk Analysis page

   Dynamic Risk Analysis page

The alarms are stored in the Alarm Box, you can selected one and see its
impact on the whole information system.

.. figure:: /doc/manual/DRAVisu.png
   :alt: Dynamic Risk Analysis visualization

   Dynamic Risk Analysis visualization

To see the dynamic remediations known to solve the vulnerability, click
on "Remediations".

.. figure:: /doc/manual/DRARemed.png
   :alt: Dynamic Risk Analysis remediations

   Dynamic Risk Analysis remediations

Interpretation
--------------

This part explains how can understood the logical graphs displayed by
CyberCAPTOR-Client.

In the following example, there are 5 nodes :

-  node (1) : Physical access
-  node (2) : Network access
-  node (3) : Vulnerability
-  node (4) : Rule for remote exploit
-  node (5) : Execute code on "linux-user 2" as user

.. figure:: /doc/manual/example.png
   :alt: Interpretation

   Interpretation

The target, "linux-user-2", has a network access and a physical access,
a vulnerability is presents and these conditions allow an attacker to
use a remote exploit. In this case, the attack can execute a code on the
device as a user.

Programmers Guide
=================

This guide describe how to develop within CyberCAPTOR-Client.

Technologies
------------

This part lists all technologies used to develop CyberCAPTOR-Client.

AngularJS
~~~~~~~~~

The Javascript framework `AngularJS <https://angularjs.org/>`__ is used.
You can find the documentation
`here <https://docs.angularjs.org/api>`__.

The library
`Angular-File-Upload <https://github.com/nervgh/angular-file-upload>`__
is used to upload file.

D3JS
~~~~

The Javascript library Data-Driven Documents `D3JS <http://d3js.org/>`__
is used to display the graphs.

Bootstrap
~~~~~~~~~

The framework `Bootstrap <http://getbootstrap.com/>`__ is used to design
CyberCAPTOR-Client (CSS + Javascript).

Source files organization
-------------------------

This part presents the organization of the sources files, and the role
of each folder.

JS
~~

This section detailed all JavaScript files contains in the ``js``
folder.

MyApp
^^^^^

This file contains all parameters, routes, constants of
CyberCAPTOR-Client.

Controller
^^^^^^^^^^

This file contains all
`controllers <https://docs.angularjs.org/guide/controller>`__ used to
manage CyberCAPTOR-Client.

Directive
^^^^^^^^^

This file contains all
`directives <https://docs.angularjs.org/guide/directive>`__ used to
display all graphe in CyberCAPTOR-Client.

Service
^^^^^^^

This file contains all
`services <https://docs.angularjs.org/guide/services>`__ used in
CyberCAPTOR-Client.

Filter
^^^^^^

This file contains all
`filters <https://docs.angularjs.org/api/ng/filter/filter>`__ used in
CyberCAPTOR-Client.

Lib
~~~

Transform
^^^^^^^^^

Transform owns differents methods used to modify data's structure
received from server. That allow to simplify the calculations and the
visualizations for these graphs.

View
~~~~

This folder contains all views used to display informations, graphes,
data,...

Img
~~~

This folder contains all pictures used in CyberCAPTOR Client.

Doc
~~~

This folder contains all documents describing CyberCAPTOR.
