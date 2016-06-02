<div id="cumpleanios-modal-form" class=" popup-basic admin-form mfp-with-anim mfp-hide">
   <div class="panel">
      <div class="panel-heading">
         <span class="panel-title">
         <i class="fa fa-rocket"></i>Cumpleaños</span>
      </div>
      <!-- end .panel-heading section -->
      <form method="post" action="/" id="comment">
		 <input type="hidden" name="modal_cumpleanio_contacto"/>
         <div class="panel-body p25">
            <div class="section row">
               <div class="col-md-6">
                  <label for="modal_cumpleanio_nombremodal_cumpleanio_nombre" class="field prepend-icon">
                  <input type="text" name="modal_cumpleanio_nombre" class="gui-input" placeholder="Nombre">
                  <label for="modal_cumpleanio_nombre" class="field-icon">
                  <i class="fa fa-user"></i>
                  </label>
                  </label>
               </div>
               <!-- end section -->
               <div class="col-md-6">
                  <label for="modal_cumpleanio_fecha_cumpleanio" class="field prepend-icon">
                  <input type="text" name="modal_cumpleanio_fecha_cumpleanio" class="gui-input" placeholder="Fecha Cumpleaño">
                  <label for="modal_cumpleanio_fecha_cumpleanio" class="field-icon">
                  <i class="fa fa-calendar"></i>
                  </label>
                  </label>
               </div>
               <!-- end section -->
            </div>
            <!-- end section row section -->
            <div class="section row">
               <div class="col-md-6">
                  <label for="modal_cumpleanio_email" class="field prepend-icon">
                  <input type="text" name="modal_cumpleanio_email" class="gui-input" placeholder="Email">
                  <label for="modal_cumpleanio_email" class="field-icon">
                  <i class="fa fa-envelope"></i>
                  </label>
                  </label>
               </div>
               <!-- end section -->
               <div class="col-md-6">
                  <label for="modal_cumpleanio_telefono" class="field prepend-icon">
                  <input type="text" name="modal_cumpleanio_telefono" class="gui-input" placeholder="Teléfono">
                  <label for="modal_cumpleanio_telefono" class="field-icon">
                  <i class="fa fa-phone"></i>
                  </label>
                  </label>
               </div>
               <!-- end section -->
            </div>
            <!-- end section row section -->
            <div class="section">
               <label for="modal_cumpleanio_comentario" class="field prepend-icon">
               <textarea maxlength="150" class="gui-textarea" name="modal_cumpleanio_comentario" placeholder="Comentario"></textarea>
               <label for="modal_cumpleanio_comentario" class="field-icon">
               <i class="fa fa-comments"></i>
               </label>
               <span class="input-footer">
               <strong>Ingrese aquí algún comentario</span>
               </label>
            </div>
            <!-- end section -->
         </div>
         <!-- end .form-body section -->
         <div class="panel-footer">
            <button type="button" id="cumpleanios_modal_form_success" class="btn btn-success btn-sm" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Actualizando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Actualizado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!">Actualizar</button>
            <button type="button" id="cumpleanios_modal_form_cancel" class="btn btn-danger btn-sm">Cancelar</button>
         </div>
         <!-- end .form-footer section -->
      </form>
   </div>
   <!-- end: .panel -->
</div>