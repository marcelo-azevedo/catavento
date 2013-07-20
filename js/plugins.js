//*****************************************************
//              Cycle Slide
//*****************************************************

$(document).ready(function() {
        $('#slide').cycle({ 
            fx:     'fade', 
        });
});


//*****************************************************
//              Fancy Box
//*****************************************************

$(document).ready(function() {
        $('.fancybox').fancybox();
});

//*****************************************************
//              Calendário jQuery UI
//*****************************************************


$(document).ready(function(){

    $("#CheckIn").datepicker({
        numberOfMonths: 2, 
        dateFormat: 'dd/mm/yy', 
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        nextText: 'Próximo',
        prevText: 'Anterior',
        onSelect: function(selected) {
          $("#CheckOut").datepicker("option","minDate", selected)

        },

        beforeShow: function(input, inst){
            //alert(input);
            inst.dpDiv.css({marginTop:  '6px', marginLeft: - 55 + 'px'});

        }       

    });

    $("#CheckOut").datepicker({ 
        numberOfMonths: 2,
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        nextText: 'Próximo',
        prevText: 'Anterior',
        
        onSelect: function(selected) {
           $("#CheckIn").datepicker("option","maxDate", selected)

        },

        beforeShow: function(input, inst){
            //alert(input);
            inst.dpDiv.css({marginTop:  '6px', marginLeft: - 37 + 'px'});

        }       

    });  

});


//*****************************************************
//              Fancy Box
//*****************************************************
























