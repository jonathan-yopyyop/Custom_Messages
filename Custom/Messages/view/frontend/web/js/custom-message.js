define([
    'jquery',
    'Magento_Ui/js/modal/alert'
], function ($, alert) {
    'use strict';
    $.widget('custom.customMessages', {
        _create: function () {
            var self = this;
            setTimeout(function () {
                self._closeMessages();
            }, 5000); // Cerrar automáticamente después de 5 segundos
            $('.message .action-close').click(function () {
                self._closeMessages();
            });
        },
        _closeMessages: function () {
            $('.message').fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });
    return $.custom.customMessages;
});
