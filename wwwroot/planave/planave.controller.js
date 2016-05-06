(function () {
    'use strict';

    angular
        .module('app')
        .controller('PlanaveController', PlanaveController);

    PlanaveController.$inject = ['$location'];
    function PlanaveController($location) {
        var vm = this;

        vm.title = 'Planave Online';

        vm.loadSocioDetails = loadSocioDetails;
        vm.embarcacao = "";
        vm.destino = 'Bom Passeio!';

        initController();

        function initController() {
            vm.partida = new Date();
            vm.retorno = new Date();
            vm.minDate = new Date();
        };

        function loadSocioDetails() {
            vm.dataLoading = true;
        };
    }

})();