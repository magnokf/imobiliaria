$(function(){$("body").on("click",'[data-toggle="lightbox"]',function(e){e.preventDefault(),$(this).ekkoLightbox()}),$(".open_filter").on("click",function(e){e.preventDefault(),box=$(".form_advanced"),button=$(this),"none"!==box.css("display")?button.text("Filtro Avançado ↓"):button.text("✗ Fechar"),box.slideToggle()}),$("body").on("change",'select[name*="filter_"]',function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});var e=$(this),t=$(this).data("index")+1;$.post(e.data("action"),{search:e.val()},function(e){"success"===e.status&&($('select[data-index="'+t+'"]').empty(),$.each(e.data,function(e,n){$('select[data-index="'+t+'"]').append($("<option>",{value:n,text:n}))}),$.each($('select[name*="filter_"]'),function(e,n){$(n).data("index")>=t+1&&$(n).empty().append($("<option>",{text:"Selecione o filtro anterior",disabled:!0}))}),$(".selectpicker").selectpicker("refresh")),"fail"===e.status&&($(element).data("index")>=t&&$(element).empty().append($("<option>",{text:"Selecione o filtro anterior",disabled:!0})),$(".selectpicker").selectpicker("refresh"))},"json")})});
