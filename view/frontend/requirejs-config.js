/**
 * @author     
 * @package    
 * @copyright  
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var config = {
    map: {
        '*': {
            'Magento_GoogleAnalytics/js/google-analytics': 'Vihadigitalcom_GoogleAnalyticsPlus/js/google-analytics'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Vihadigitalcom_GoogleAnalyticsPlus/js/action/place-order': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Vihadigitalcom_GoogleAnalyticsPlus/js/view/shipping': true
            },
            'Magento_Customer/js/action/check-email-availability': {
                'Vihadigitalcom_GoogleAnalyticsPlus/js/action/check-email-availability': true
            },
            'Magento_Checkout/js/model/shipping-rate-processor/new-address': {
                'Vihadigitalcom_GoogleAnalyticsPlus/js/model/shipping-rate-processor/new-address': true
            },
            'Magento_Checkout/js/model/shipping-rate-processor/customer-address' : {
                'Vihadigitalcom_GoogleAnalyticsPlus/js/model/shipping-rate-processor/customer-address': true
            }
        }
    }
};
