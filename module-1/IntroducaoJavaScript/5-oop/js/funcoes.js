$(document).ready(function () {

    $('#btnCalcular').click(function () {

        let util = new Util();
        let calc = new Calculador();

        let rdbCheckado = util.getIdCRdbheckado([
            'rdbSoma', 'rdbSubtracao', 'rdbMultiplicar',
            'rdbDivisao', 'rdbAreaQuadrado', 'rdbAreaCirculo',
            'rdbAreaTriangulo', 'rdbAreaRetangulo', 'rdbParOuImpar',
            'rdbImc'
        ]);

        let resultado = util.lidarComRdbCheckado(rdbCheckado)
        
    });

});