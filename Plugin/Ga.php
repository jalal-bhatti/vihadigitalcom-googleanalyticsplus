<?php
/**
 * @author    
 * @package    
 * @copyright  
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Vihadigitalcom\GoogleAnalyticsPlus\Plugin;

class Ga
{
    protected $helper;

    /**
     * @param \Vihadigitalcom\GoogleAnalyticsPlus\Helper\Config $helper
     */
    public function __construct(
        \Vihadigitalcom\GoogleAnalyticsPlus\Helper\Config $helper,
        \Vihadigitalcom\GoogleAnalyticsPlus\Helper\Url $urlHelper
    ) {
        $this->helper = $helper;
        $this->urlHelper = $urlHelper;
    }

    /**
     * @param \Magento\GoogleAnalytics\Block\Ga $subject
     * @param                                   $result
     *
     * @return string
     */
    public function afterGetPageTrackingData(
        \Magento\GoogleAnalytics\Block\Ga $subject,
        $result
    ) {
        $result['isDisplayFeaturesActive'] = (int)$this->helper->isDisplayAdvertisingEnabled();
        $result['optPageUrl'] = $this->getPageName($subject);
        $result['isEnhancedLinksActive'] = (int)$this->helper->isEnhancedLinkAttrEnabled();
        return $result;
    }

    /**
     * @param \Magento\GoogleAnalytics\Block\Ga $subject
     *
     * @return array|string
     */
    protected function getPageName(\Magento\GoogleAnalytics\Block\Ga $subject)
    {
        return $subject->escapeJsQuote($this->urlHelper->getUnifiedPageName($subject->getPageName()));
    }
}
