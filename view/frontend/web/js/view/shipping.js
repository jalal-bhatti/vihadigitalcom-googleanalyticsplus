/**
 * @author     
 * @package    
 * @copyright  
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
define(function () {
    'use strict';

    return function (target) {
        return target.extend({
            setShippingInformation: function () {
                if (typeof(ga) != "undefined") {
                    var urlToTrack = vihadigitalcomGaBaseUrl + '/payment';
                    if (vihadigitalcomGaQuery.length > 0) {
                        urlToTrack += '?' + vihadigitalcomGaQuery
                    }
                    ga('set', 'page', urlToTrack);
                    ga('send', 'pageview');
                }
                this._super();
            }
        });
    }
});
