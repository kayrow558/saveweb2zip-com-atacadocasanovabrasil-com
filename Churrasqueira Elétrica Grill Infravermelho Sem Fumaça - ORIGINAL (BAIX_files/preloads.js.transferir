
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.I3JIKAFZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.BQko3CH_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage.CvMUg5ho.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.-5WhUe-m.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.BuzkIwPR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.D5MS9QVb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.B1GSA_FM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayOptInDisclaimer.DB6lVtnA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/UnavailableInBuyerLocationBanner.CcjUsILl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShipmentBreakdown.DePfSnnP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/use-show-shipment-breakdown.COiNmnAF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MerchandiseModal.DhfwYq11.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.B7GC3t64.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.q5iUpuwT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger.CKjrtlgx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.C28MkHRq.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.CSP-wVPl.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DmqjTkNB.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/use-show-shipment-breakdown.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0903/6804/9497/files/CHECKOUT-SERENI_x320.png?v=1733631287"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  