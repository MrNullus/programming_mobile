class Util {

    getIdCRdbheckado( rdbs ) {
        for (let i = 0; i < rdbs.length; i++) {

            let idRdbAtual = rdbs[i];


            if ($('#' + idRdbAtual).is(':checked')) {
                // let labelRdbAtual = $('label[for='+nomeRdbAtual+']');
                return idRdbAtual;
            }
        }

        return '';
    }

    lidarComRdbCheckado( rdbCheckado ) {
        if (rdbCheckado == 'rdbSoma') {

            return calc.Soma( valor1, valor2 );

        } else if (rdbCheckado == 'rdbSoma') {
            
            case 'rdbSubtracao':
                return calc.Subtracao( valor1, valor2 );

            case 'rdbMultiplicar':
                return calc.Multiplicar( valor1, valor2 );

            case 'rdbDivisao':
                return calc.Divisao( valor1, valor2 );
                

            case 'rdbAreaQuadrado':
                return calc.AreaQuadrado( valor1, valor2 );

            case 'rdbAreaTriangulo':
                return calc.AreaTriangulo( valor1, valor2 );

            case 'rdbAreaRetangulo':
                return calc.AreaRetangulo( valor1, valor2 );

            case 'rdbParOuImpar':
                return calc.ParOuImpar( valor1 );

            case 'rdbImc':
                return calc.Imc( valor1, valor2 );

            else {
                return;
        }
    }

}