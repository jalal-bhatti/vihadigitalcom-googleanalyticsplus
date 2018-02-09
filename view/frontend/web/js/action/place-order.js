/**
 * @author     
 * @package    
 * @copyright  
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
define(['mage/utils/wrapper'], function (wrapper) {
    'use strict';

    return function (placeOrderAction) {
        return wrapper.wrap(placeOrderAction, function (originalAction, paymentData, redirectOnSuccess) {
            if (typeof(ga) != "undefined") {
                var urlToTrack = vihadigitalcomGaBaseUrl + '/place-order';
                if (vihadigitalcomGaQuery.length > 0) {
                    urlToTrack += '?' + vihadigitalcomGaQuery
                }
                ga('set', 'page', urlToTrack);
                ga('send', 'pageview');
            }
            return originalAction(paymentData, redirectOnSuccess);
        });
    };
});
