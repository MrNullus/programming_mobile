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

        } else if (rdbCheckado == 'rdbSubtracao') {
            
            return calc.Subtracao( valor1, valor2 );

        }  else if (rdbCheckado == 'rdbMultiplicar') {
            return calc.Multiplicar( valor1, valor2 );
        } else if (rdbCheckado == 'rdbDivisao') {
            return calc.Divisao( valor1, valor2 );
        } else if (rdbCheckado == 'rdbAreaQuadrado') {
            return calc.AreaQuadrado( valor1, valor2 );
        } else if (rdbCheckado == 'rdbAreaTriangulo') {
            return calc.AreaTriangulo( valor1, valor2 );
        } else if (rdbCheckado == 'rdbAreaRetangulo') {
            return calc.AreaRetangulo( valor1, valor2 );
        } else if (rdbCheckado == 'rdbParOuImpar') {
            return calc.ParOuImpar( valor1 );
        } else if (rdbCheckado == 'rdbImc') {
            return calc.Imc( valor1, valor2 );
        } else {
            return;
        }
    }

}