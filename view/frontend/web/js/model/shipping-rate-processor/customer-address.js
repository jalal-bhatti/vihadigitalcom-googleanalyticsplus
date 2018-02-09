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

    return function (target) {
        target.getRates = wrapper.wrap(target.getRates, function (originalAction, address) {
            if (typeof(ga) != "undefined") {
                var urlToTrack = vihadigitalcomGaBaseUrl + '/get-shipping-rates';
                if (vihadigitalcomGaQuery.length > 0) {
                    urlToTrack += '?' + vihadigitalcomGaQuery
                }
                ga('set', 'page', urlToTrack);
                ga('send', 'pageview');
            }
            return originalAction(address);
        });
        return target;
    };
});

