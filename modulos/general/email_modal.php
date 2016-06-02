<div class="modal fade" id="email_modal" tabindex="-1" role="dialog" aria-labelledby="email_modal" data-backdrop="static" aria-hidden="true">
    <div style="width: 100%; height: 90%; margin-top: 1% !important;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align"> <i class="fa fa-envelope-o"></i> Formulario de envío de email</h2>
            </div>
            <div class="modal-body">
                <form class="form-horizontal row" id="admin-form">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="color:#696969;"> 
                                <label class="label-form-mail">Elija una plantilla</label>
                                <select name="mail_modal_plantilla_value" class="form-control input-sm"></select>
                            </div>
                        </div>
						<hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="color:#696969;">
                                <label class="label-form-mail">Nombre</label>
                                <input type="text" name="mail_modal_nombre_input_value" id="mail_modal_nombre_input_value" class="form-control input-sm">
                            </div>
                        </div>
                        <hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="color:#696969;">
                                <label class="label-form-mail">Asunto</label>
                                <input type="text" name="mail_modal_asunto_input_value"class="form-control input-sm">
                            </div>
                        </div>
                        <div id="show_destino">
                            <hr class="alt short">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="color:#696969;">
                                    <label class="label-form-mail">Destino</label>
                                    <input type="text"  name="mail_modal_destino_input_value" class="form-control input-sm">
                                </div>
                            </div>
                        </div>
                        <hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 editor_comentario" style="color:#696969;">
                                <label class="label-form-mail">Comentarios</label>
								<textarea id="comentarios_email_modal" class="form-control" rows="6"></textarea>
                            </div>
                        </div>
						<hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="color:#696969;">
                                <label class="label-form-mail" style="color:#696969;">Archivos adjuntos</label>
								<input type="file" class="gui-file" id="file-select" name="name_file[]" multiple="5">
                            </div>
                        </div>
                        <input type="hidden" name="mail_modal_comentario_input_value" value="">
                        <input type="hidden" name="mail_modal_contacto_id_input_value" value="">
                        <input type="hidden" name="mail_modal_contact_name" value="">
                        <input type="hidden" name="mail_modal_negocio_id" value="">
                        <input type="hidden" name="mail_modal_contacto_id" value="">
                        <input type="hidden" name="mail_modal_procedencia_id" value="">
                        <input type="hidden" name="mail_modal_procedencia" value="">
                        <input type="hidden" name="mail_modal_estado" value="">
                    </div>
                    <!--<div style="max-height: 600px; overflow-y: scroll;" class="col-xs-12 col-sm-12 col-md-7 col-lg-7 plantilla-mail"></div> -->
					   <div style="display:none;" class="plantilla-mail"></div>
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 plantilla-mail"></div>
					
						<!--Vuelos !-->
						<div style="display:none;" class="plantilla-mail"></div>
                </form>
            </div>
            <div class="modal-footer ">
                <button type="button" id="modal_enviar_mail_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Enviando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Enviado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!" class="btn btn-success btn-sm"><span class="fa fa-envelope-o"></span> Enviar</button>
                <button type="button" id="modal_enviar_mail_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
            </div>
        </div>
    </div>
</div>




  <!-- jQuery -->
  <script src="http://desa-frontend.cochadigital.com/vendor/jquery/jquery-1.11.1.min.js"></script>
  <script src="http://desa-frontend.cochadigital.com/vendor/jquery/jquery_ui/jquery-ui.min.js"></script>
  <script src="http://desa-frontend.cochadigital.com/assets/admin-tools/admin-forms/js/jquery.validate.min.js"></script>
  <script src="http://desa-frontend.cochadigital.com/assets/admin-tools/admin-forms/js/additional-methods.min.js"></script>
 
  <!--script src="http://desa-frontend.cochadigital.com/assets/js/utility/utility.js"></script!-->
  <script src="http://desa-frontend.cochadigital.com/assets/js/demo/demo.js"></script>
  <script src="http://desa-frontend.cochadigital.com/assets/js/main.js"></script>
  
  <script type="text/javascript">
  jQuery(document).ready(function() {
    "use strict";
    // Init Theme Core    
    Core.init();

    // Init Demo JS     
    Demo.init();

    /* @custom validation method (smartCaptcha) 
    ------------------------------------------------------------------ */
    $.validator.methods.smartCaptcha = function(value, element, param) {
      return value == param;
    };

    $("#admin-form").validate({
      /* @validation states + elements 
      ------------------------------------------- */
      errorClass: "state-error",
      validClass: "state-success",
      errorElement: "em",
      /* @validation rules 
      ------------------------------------------ */
      rules: {
        mail_modal_asunto_input_value:{
          required: true
        }
      },

      /* @validation error messages 
      ---------------------------------------------- */
      messages: {
        mail_modal_asunto_input_value: {
          required: 'Debe Indicar un Asunto'
        }
      },

      /* @validation highlighting + error placement  
      ---------------------------------------------------- */
      highlight: function(element, errorClass, validClass) {
        $(element).closest('.field').addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).closest('.field').removeClass(errorClass).addClass(validClass);
      },
      errorPlacement: function(error, element) {
        if (element.is(":radio") || element.is(":checkbox")) {
          element.closest('.option-group').after(error);
        } else {
          error.insertAfter(element.parent());
        }
      }

    });

    // Cache several DOM elements
    var pageHeader = $('.content-header').find('b');
    var adminForm = $('.admin-form');
    var options = adminForm.find('.option');
    var switches = adminForm.find('.switch');
    var buttons = adminForm.find('.button');
    var Panel = adminForm.find('.panel');

    // Form Skin Switcher
    $('#skin-switcher a').on('click', function() {
      var btnData = $(this).data('form-skin');

      $('#skin-switcher a').removeClass('item-active');
      $(this).addClass('item-active')

      adminForm.each(function(i, e) {
        var skins = 'theme-primary theme-info theme-success theme-warning theme-danger theme-alert theme-system theme-dark'
        var panelSkins = 'panel-primary panel-info panel-success panel-warning panel-danger panel-alert panel-system panel-dark'
        $(e).removeClass(skins).addClass('theme-' + btnData);
        Panel.removeClass(panelSkins).addClass('panel-' + btnData);
        pageHeader.removeClass().addClass('text-' + btnData);
      });

      $(options).each(function(i, e) {
        if ($(e).hasClass('block')) {
          $(e).removeClass().addClass('block mt15 option option-' + btnData);
        } else {
          $(e).removeClass().addClass('option option-' + btnData);
        }
      });

      // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
      $('body').find('.ui-slider').each(function(i, e) {
        $(e).addClass('slider-primary');
      });

      $(switches).each(function(i, ele) {
        if ($(ele).hasClass('switch-round')) {
          if ($(ele).hasClass('block')) {
            $(ele).removeClass().addClass('block mt15 switch switch-round switch-' + btnData);
          } else {
            $(ele).removeClass().addClass('switch switch-round switch-' + btnData);
          }
        } else {
          if ($(ele).hasClass('block')) {
            $(ele).removeClass().addClass('block mt15 switch switch-' + btnData);
          } else {
            $(ele).removeClass().addClass('switch switch-' + btnData);
          }
        }

      });
      buttons.removeClass().addClass('button btn-' + btnData);
    });

    setTimeout(function() {
      adminForm.addClass('theme-primary');
      Panel.addClass('panel-primary');
      pageHeader.addClass('text-primary');

      $(options).each(function(i, e) {
        if ($(e).hasClass('block')) {
          $(e).removeClass().addClass('block mt15 option option-primary');
        } else {
          $(e).removeClass().addClass('option option-primary');
        }
      });

      // var sliders = $('.ui-timepicker-div', adminForm).find('.ui-slider');
      $('body').find('.ui-slider').each(function(i, e) {
        $(e).addClass('slider-primary');
      });

      $(switches).each(function(i, ele) {
        if ($(ele).hasClass('switch-round')) {
          if ($(ele).hasClass('block')) {
            $(ele).removeClass().addClass('block mt15 switch switch-round switch-primary');
          } else {
            $(ele).removeClass().addClass('switch switch-round switch-primary');
          }
        } else {
          if ($(ele).hasClass('block')) {
            $(ele).removeClass().addClass('block mt15 switch switch-primary');
          } else {
            $(ele).removeClass().addClass('switch switch-primary');
          }
        }
      });
      buttons.removeClass().addClass('button btn-primary');
    }, 800);
  });
  </script>