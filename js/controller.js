/**
*
* @licstart  The following is the entire license notice for the
*  JavaScript code in this page.
*
* This file is part of FIWARE CyberCAPTOR,
* instance of FIWARE Cyber Security Generic Enabler
* Copyright (C) 2012-2015  Thales Services S.A.S.,
* 20-22 rue Grande Dame Rose 78140 VELIZY-VILACOUBLAY FRANCE
*
* FIWARE CyberCAPTOR is free software; you can redistribute
* it and/or modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 3 of the License,
* or (at your option) any later version.
*
* FIWARE CyberCAPTOR is distributed in the hope
* that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
* warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with FIWARE CyberCAPTOR.
* If not, see <http://www.gnu.org/licenses/>.
*
* @licend  The above is the entire license notice
* for the JavaScript code in this page.
*
*/

/**
*   Attack Path Controller
*   @param $scope
*   @param $http
*   @param myConfig
*
*   Retrieve attack path from server whit GET request.
*   Attack path is an object with Nodes and Links.
*   Can exist several attack path, so, it's necessary 
*       to retrieve the ID of attack path.
*/
routeAppControllers.controller('attackPathController', function ($scope, $http, myConfig, serviceTest) {
                                    
    var defaultPath = 0;
    $scope.valueGauge = 0;

    // Defautl view : logical
    $scope.view = {
        status : "Logical"
    };


    // Function available in $scope, to begin the procedure
    $scope.init = function(){

        // Request the list of host : name, metric,...
        var hostList = $http.get(myConfig.url + "/host/list")
            .success(function(host){
                $scope.listHosts = host;
            })

        // Request the number of path
        var number = $http.get(myConfig.url + "/attack_path/number")
            .success(function(valNumber) {
                $scope.items = valNumber;

                // Array of value for the list
                $scope.tab = [ {id, value} ];

                // Fill the tab with ID and Values
                for(var i=1; i <= $scope.items.number; ++i){
                    var id = i-1;
                    var value = i;
                    var list = {"ID" : id, "Value" : value};

                    $scope.tab[i-1] = list;
                }

                // Request data to build graph
                var graph = $http.get(myConfig.url + "/attack_graph")
                    .success(function(valGraph) {

                        var donnee = transformGraph(valGraph);
                        $scope.attack_graph = donnee;

                        // Request data to build one path
                        var list = $http.get(myConfig.url + "/attack_path/" + defaultPath)
                            .success(function(valList) {                                    
                                $scope.appel($scope.tab[defaultPath]);

                                // Default value in selecter
                                $scope.valSelecter = $scope.tab[defaultPath];
                            })  
                    })
            })
    };   

    // Request to display data from remediation
    $scope.appel = function(numb){

        if($scope.view.status == "Topological"){
            var callTopoGraph = $http.get(myConfig.url + "/attack_path/" + numb.ID + "/topological")
                .success(function(graphTopo){
                    var pathTopoGraph = transformPathTopo(graphTopo, $scope.attack_graph);
                    $scope.graphes = pathTopoGraph;
                })
        }
        else{
        var appel = $http.get(myConfig.url + "/attack_path/" + numb.ID)
            .success(function(graph){
                var pathGraph = transformPath(graph, $scope.attack_graph);
                $scope.graphes = pathGraph;

                // Limits attack path's score
                if(pathGraph.scoring != undefined){
                    $scope.valueGauge = pathGraph.scoring * 100;
                }

                // Request to retrieve remediations for the attack path
                var remed = $http.get(myConfig.url + "/attack_path/" + numb.ID + "/remediations")
                    .success(function(dataRemediations){
                        var remediations = transformRemediation(dataRemediations);
                        $scope.dataRemediations = remediations;
                    })
            })
        }
    }

    $scope.simulRemed = function(remed, path){

        serviceTest.setArray(remed, path);

        var newRemed = $http.get(myConfig.url + "/attack_path/" + path.ID + "/remediation/" + remed.ID)
            .success(function(graph){
                var newGraph = transformGraph(graph);

                $scope.graphes = newGraph;

                serviceTest.set($scope.graphes);              
            })
    }
})

// ****************************************************

/**
*   Gauge Controller
*   @param $scope
*
*   Initialize data from gauge
*/
routeAppControllers.controller("RadialGaugeDemoCtrl", function($scope){

    $scope.value = $scope.valueGauge;
    $scope.upperLimit = 100;
    $scope.lowerLimit = 0;
    $scope.unit = "";
    $scope.precision = 1;
    $scope.ranges = [
        {min: 0, max: 20, color: '#008000'},
        {min: 20, max: 40, color: '#FFFF00'},
        {min: 40, max: 60, color: '#FFA500'},
        {min: 60, max: 80, color: '#FF0000'},
        {min: 80, max: 100, color: '#000000'}
    ];
})


// ****************************************************

/**
*   Attack Graph Controller
*   @param $scope
*   @param $http
*   @param myConfig
*
*   Retrieve data from server
*/
routeAppControllers.controller('attackGraphController', function ($scope, $http, myConfig, serviceTest) {
    
    $scope.view = {
        status : "Logical"
    };   

    $scope.init = function(){

        var number = $http.get(myConfig.url + "/attack_path/number")
            .success(function(valNumber) {
                $scope.items = valNumber;

                var list = $http.get(myConfig.url + "/attack_path/list")
                    .success(function(valList) {
                        $scope.tab = valList;
                    })

                var graph = $http.get(myConfig.url + "/attack_graph")
                    .success(function(valGraph) {
                        var donnee = transformGraph(valGraph);
                        $scope.graphes = donnee;
                    })      
            })
    };   
})


// ****************************************************

/**
*   Simulation Controller
*   @param $scope
*   @param $http
*   @param myConfig
*
*   Retrieve data from server for remediation simulation
*/
routeAppControllers.controller('simulController', function ($scope, $http, myConfig, serviceTest) {
    
    $scope.view = {
        status : "Logical"
    };   

    $scope.init = function(){

        var number = $http.get(myConfig.url + "/attack_path/number")
            .success(function(valNumber) {
                $scope.items = valNumber;

                var list = $http.get(myConfig.url + "/attack_path/list")
                    .success(function(valList) {
                         $scope.tab = valList;
                    })

                var graph = $http.get(myConfig.url + "/attack_graph")
                    .success(function(valGraph) {
                        var donnee = transformGraph(valGraph);
                        $scope.basicGraphes = donnee;

                        var graphTst = serviceTest.get();

                        $scope.graphes = transformRemediationSimulation(donnee, graphTst);
                    })      
            })
    };  

    $scope.validate = function(){

        var array = serviceTest.getArray();

        alert("Remediation validate");

         var validation = $http.get(myConfig.url + "/attack_path/" + array[1].ID + "/remediation/" + array[0].ID + "/validate")
            .success(function(){
                console.log("val");
            })
    };
})


// ****************************************************

/**
*   Attack Graph Topological Controller
*   @param $scope
*   @param $http
*   @param myConfig
*
*   Retrieve data from server
*/
routeAppControllers.controller('attackGraphTopologicalController', function ($scope, $http, myConfig) {

    $scope.init = function(){

        var topological = $http.get(myConfig.url + "/attack_graph/topological")
            .success(function(data) {
                var attackTopoGraph = transformGraphTopo(data);
                $scope.graphes = attackTopoGraph;
            })    
    };   
})

// ****************************************************

/**
*   Attack Path Topological Controller
*   @param $scope
*   @param $http
*   @param myConfig
*
*   Retrieve data from server
*/
routeAppControllers.controller('attackPathTopologicalController', function ($scope, $http, myConfig) {

    $scope.view = {
        status : "Logical"
    };
    
    $scope.init = function(){

        var number = $http.get(myConfig.url + "/attack_path/number")
            .success(function(valNumber){
                var numberPath = valNumber;

                // Array of value for the list
                $scope.tab = [ {id, value} ];

                // Fill the tab with ID and Values
                for(var i=1; i <= numberPath.number; ++i){
                    var id = i-1;
                    var value = i;
                    var list = {"ID" : id, "Value" : value};

                    $scope.tab[i-1] = list;
                }

                var attackGraph = $http.get(myConfig.url + "/attack_graph")
                    .success(function(attackGraph){
                        var graph = transformGraph(attackGraph);
                        $scope.attack_graph = graph;

                        var defaultPath = 0;

                        var topological = $http.get(myConfig.url + "/attack_path/" + defaultPath + "/topological")
                            .success(function(data) {
                                $scope.callTopoGraph($scope.valSelecter.ID);

                                // Default value in selecter
                                $scope.valSelecter = $scope.tab[0];
                            })
                    })
            })
    };   

    $scope.callTopoGraph = function(value){

        var callTopoGraph = $http.get(myConfig.url + "/attack_path/" + value + "/topological")
            .success(function(graphTopo){
                var pathTopoGraph = transformPathTopo(graphTopo, $scope.attack_graph);
                $scope.graphes = pathTopoGraph;
            })
    }
})

// ****************************************************
/**
*   Configuration Controller
*   @param $scope
*   @param $http
*   @param myConfig
*
*   Retrieve data from server
*   Initialize values
*/
routeAppControllers.controller('configurationController', function ($scope, $http, myConfig, serviceTest) {
    
    var item = { id, value };
    var values = ["Negligeable", "Minor", "Medium", "Severe", "Catastrophic"];   
    $scope.tabMetric = [ {id, value }]; 

    for(var i=0; i< values.length; ++i){
        var id = i;
        var value = values[i];
        var item = {"ID":id, "Value":value};
        $scope.tabMetric[i] = item;
    }

    // Function available in $scope, to begin the procedure
    $scope.init = function(){

        // Request the list of host : name, metric,...
        var metric = $http.get(myConfig.url + "/host/list")
            .success(function(host){

                $scope.listHosts = host;

                    // Array of values before update 
                    $scope.tabTmp = [ {value} ];

                    var lengthHost = $scope.listHosts.hosts.length;

                    for(var i=0; i<lengthHost; ++i){
                        var index;
                        $scope.listHosts.hosts[i].index = i;
                    }

                    for(var i=0; i<lengthHost-1; ++i){
                        if($scope.listHosts.hosts[i].security_requirements[0] == undefined){
                            $scope.listHosts.hosts[i].security_requirements.push({"metric": "Negligeable"}); 
                            var value = $scope.listHosts.hosts[i].security_requirements[0].metric;
                            var item = {"Value": value};
                            $scope.tabTmp[i] = item;                               
                        }
                        else{
                            // lengthHost-1 : remove "internet_Host" with undefined metric
                            for(var i=0; i < lengthHost-1; ++i){
                                var value = $scope.listHosts.hosts[i].security_requirements[0].metric;
                                var item = {"Value": value};
                                $scope.tabTmp[i] = item;
                            }
                        }
                    }
            })

        var global = $http.get(myConfig.config + "/global")
            .success(function(data){
                $scope.global = data;
        })
        var snortRule = $http.get(myConfig.config + "/snort-rule")
            .success(function(data){
                $scope.snortRule = data;
        })
        var firewall = $http.get(myConfig.config + "/firewall-rule")
            .success(function(data){
                $scope.firewall = data;
        })
        var patch = $http.get(myConfig.config + "/patch")
            .success(function(data){
                $scope.patch = data;
        })
        serviceTest.set($scope);
        serviceTest.get();
    };   

    $scope.updateValue = function(data, key){
        $scope.listHosts.hosts[key].security_requirements[0].metric = data.Value;
    };

    $scope.sendListHost = function(){
        var send = $http.post(myConfig.url + "/host/list", $scope.listHosts)
            .success(function(data){
            })
    };
})

// ****************************************************
/**
*   Welcome Controller
*   @param $scope
*   @param $http
*   @param myConfig
*
*/
routeAppControllers.controller('initController', function($scope, $http, myConfig, FileUploader){

    // Variable to display tab "Configuration", "Attack Graph" and "Attack Path"
    $scope.show = false;

// **************** File Uploader **************
    var uploader = $scope.uploader = new FileUploader({
        url: myConfig.url + "/initialize",
        withCredentials : true
    });

    // Filters
    uploader.filters.push({
        name: 'customFilter',
        fn: function(item /*{FileLikeObject}*/, options){
            return this.queue.length < 10;
        }
    });

    // Callbaks
    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options){
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem){
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onBeforeUploadItem =function(item){
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress){
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress){
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers){
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers){
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers){
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers){
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function(){
        console.info('onCompleteAll');
        $scope.show = true;
        alert("Data sent");
    };
    console.info('uploader', uploader);

})