VD_FIND_TV = {
    activeSteps: ["room"],
    colorMap: {},
    currentStep: "room",
    defaultOpt: {},
    featureMsg: {},
    isPersonalizetv: !1,
    product: {},
    steps: ["room", "passion"],
    selected: {},
    stepInfo: {
        room: VD_MODEL.roomStageTitle,
        passion: VD_MODEL.passionStageTitle,
        size: VD_MODEL.sizeStage.title,
        picture: VD_MODEL.pictureStage.title,
        sound: VD_MODEL.soundStage.title,
        style: VD_MODEL.styleStage.title,
        color: VD_MODEL.colorStage.title,
        smart: VD_MODEL.smartStage.title,
        mytv: VD_MODEL.mytvStage.title
    },
    Tvs: VD_MODEL.products
}
  , findTv = function() {
    function h(b) {
        if (location.hash)
            if (b = location.hash.split("#/mytv").join("").split("/").join(""),
            -1 < location.hash.indexOf("#/mytv") && b && VD_MODEL.products[b]) {
                VD_FIND_TV.currentStep = "mytv";
                p[VD_FIND_TV.currentStep](b);
                e = Granite.I18n.get("vd.hmc.labels.currentPrice", currencyComma(VD_MODEL.products[b].sortPrice, CURRENCY));
                b = Granite.I18n.get("vd.hmc.bottom.passion.all");
                var d = b + " : " + Granite.I18n.get("vd.label.step", VD_FIND_TV.stepInfo.passion);
                a.bottom.price.find(".bottom-price").html(e);
                a.bottom.feature.html(Granite.I18n.get("vd.hmc.bottom.featureMsg.passion", [d, b]));
                c.activeStep()
            } else
                -1 < location.pathname.indexOf("samsung/" + H + "/") ? c.goStep() : history.back();
        else
            -1 < location.pathname.indexOf("samsung/" + H + "/") ? c.goStep() : history.back()
    }
    function l(a) {
        a = VD_FIND_TV.currentStep;
        var b = location.hash.split("#/").join("").split("/")[0] || "room";
        "#" == b && (b = "room");
        if (!v)
            if (VD_FIND_TV.selected[b] || "" == VD_FIND_TV.selected[b] || -1 < VD_FIND_TV.activeSteps.indexOf(b)) {
                VD_FIND_TV.currentStep = b;
                a = VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.currentStep) || 0;
                VD_FIND_TV.prevtStep = 1 < a ? VD_FIND_TV.activeSteps[a - 1] : VD_FIND_TV.activeSteps[0];
                $(".find-my-tv__bottom-cta .step-prev").attr("href", "room" != VD_FIND_TV.currentStep ? "#/" + VD_FIND_TV.currentStep : "#");
                a = location.hash.split("#/mytv").join("").split("/").join("");
                if (-1 < location.hash.indexOf("#/mytv") && a && VD_MODEL.products[a])
                    p[VD_FIND_TV.currentStep](a);
                c.setProducts();
                c.activeStep()
            } else
                h(a);
        v = !1
    }
    var q = window.sg.common.$q
      , H = $("#siteCode").val()
      , z = $("#runmodeInfo").val()
      , t = $("#serverType").val()
      , K = window.navigator.userAgent
      , y = K.match(/(Android);?[\s\/]+([\d.]+)?/)
      , m = K.match(/(iPad).*OS\s([\d_]+)/)
      , A = K.match(/(iPod)(.*OS\s([\d_]+))?/)
      , C = !m && K.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , F = $("#storeDomain").val()
      , G = "hybris-new" == $("#shopIntegrationFlag").val().toLowerCase()
      , I = "br" === siteCode || "mx" === siteCode || "cl" === siteCode || "co" === siteCode || "pe" === siteCode || "ar" === siteCode || "py" === siteCode;
    K = "br" === siteCode || "mx" === siteCode || "cl" === siteCode || "co" === siteCode || "pe" === siteCode || "ar" === siteCode || "py" === siteCode || "uy" === siteCode;
    "stg" === t && K && (F = "https://shop.samsung.com");
    var J = $("#hybrisApiJson").val();
    t = "";
    if ("levant" === H)
        t = "jo";
    else if ("levant_ar" === H)
        t = "jo_ar";
    else if ("n_africa" === siteCode)
        t = "ma";
    else if ("ae" === H || "ae_ar" === H)
        t = $.cookies.get("dotcom_multistore") ? $.cookies.get("dotcom_multistore").toString() : "";
    var B = t || H;
    t = $("div#find-my-tv");
    var a = {
        logo: t.find(".find-my-tv__header .find-my-tv__header-title a"),
        tabBar: t.find(".find-my-tv__header .find-my-tv__header-list"),
        room: t.find(".find-my-tv__room"),
        passion: t.find(".find-my-tv__passion"),
        size: t.find(".find-my-tv__size"),
        picture: t.find(".find-my-tv__picture"),
        style: t.find(".find-my-tv__style"),
        color: t.find(".find-my-tv__color"),
        sound: t.find(".find-my-tv__sound"),
        smart: t.find(".find-my-tv__smarttv"),
        mytv: t.find(".find-my-tv__mytv"),
        bottom: {
            tray: t.find(".find-my-tv__bottom-tray"),
            trayWrap: t.find(".find-my-tv__bottom-tray-wrap"),
            title: t.find(".find-my-tv__bottom-tray--title .js-bottom-title"),
            mobileOnly: t.find(".find-my-tv__bottom-tray--title.mobile-only"),
            feature: t.find(".find-my-tv__bottom-tray--item"),
            price: t.find(".find-my-tv__bottom-tray--price"),
            product: t.find(".find-my-tv__bottom-tray--available"),
            productMobile: t.find(".find-my-tv__bottom-available"),
            prevBtn: t.find(".find-my-tv__bottom-cta .step-prev"),
            nextBtn: t.find(".find-my-tv__bottom-cta .step-next"),
            meetTvBtn: t.find(".find-my-tv__bottom-cta .step-meetTv"),
            againBtn: t.find(".find-my-tv__bottom-cta .step-again"),
            buyNowBtn: t.find(".find-my-tv__bottom-cta .step-buyNow"),
            personalizeBtn: t.find(".find-my-tv__bottom-cta .step-personalize")
        },
        popup: {
            chooseTvDesc: $("#modalChoose .layer-popup__desc")
        }
    }
      , E = {
        "living room": "room-living",
        bedroom: "room-bedroom",
        kitchen: "room-kitchen",
        outdoors: "room-outdoors",
        "entertainment room": "room-entertainment"
    }
      , N = {
        callIspersonalizetv: function() {
            $.ajax({
                url: VD_APPS_API_DOMAIN + "/tvs/tvpersonalize/api/tvapps/appserver/ispersonalizetv?modelCode\x3d" + modelCode,
                dataType: "text",
                cache: !0,
                crossDomain: !0,
                timeout: 1E4
            }).done(function(b) {
                "available" == b.toLowerCase() && (VD_FIND_TV.isPersonalizetv = !0,
                a.bottom.personalizeBtn.removeClass("hidden"),
                a.bottom.buyNowBtn.addClass("hidden"))
            })
        },
        callHybrisProductsInfo: function(b, d, f) {
            var e = c.getModelcodes(b, d, f)
              , n = {};
            n.url = F + "/" + B + "/servicesv2/getSimpleProductsInfo?productCodes\x3d" + e;
            n.cache = !0;
            n.crossDomain = !0;
            n.timeout = 1E4;
            "Y" === J ? n.dataType = "json" : (n.dataType = "jsonp",
            n.jsonpCallback = "jQuery2010209421933433041_391");
            $.ajax(n).done(function(e) {
                if (e && "0000" === e.resultCode)
                    for (idx in e = e.productDatas,
                    e)
                        if (e[idx] && e[idx].productCode) {
                            var k = e[idx]
                              , g = e[idx].productCode;
                            k = c.comparPrice(k.price && Number(k.price) ? k.price : "0", k.promotionPrice && Number(k.promotionPrice) ? k.promotionPrice : "0", g);
                            g === b ? c.productPriceMsg(k.price, k.promotionPrice) : g === d ? c.setCardPrice(k.price, k.promotionPrice, a.mytv.find(".find-my-tv__card"), ".js-mytv-bigger") : g === f && c.setCardPrice(k.price, k.promotionPrice, a.mytv.find(".find-my-tv__card"), ".js-mytv-nextlevel")
                        }
            })
        },
        callNewHybrisProductsInfo: function(b, d, f) {
            var e = c.getModelcodes(b, d, f);
            $.ajax({
                url: F + "/tokocommercewebservices/v2/" + B + "/products?fields\x3dSIMPLE_INFO\x26productCodes\x3d" + e,
                type: "GET",
                dataType: "json",
                cache: !0,
                crossDomain: !0,
                timeout: 1E4
            }).done(function(e) {
                e && 0 < e.length && e.forEach(function(e) {
                    if (e && e.code) {
                        var k = e.code;
                        e = c.comparPrice(e.price && e.price.value && Number(e.price.value) ? e.price.value : "0", e.promotionPrice && e.promotionPrice.value && Number(e.promotionPrice.value) ? e.promotionPrice.value : "0", k);
                        k === b ? c.productPriceMsg(e.price, e.promotionPrice) : k === d ? c.setCardPrice(e.price, e.promotionPrice, a.mytv.find(".find-my-tv__card"), ".js-mytv-bigger") : k === f && c.setCardPrice(e.price, e.promotionPrice, a.mytv.find(".find-my-tv__card"), ".js-mytv-nextlevel")
                    }
                })
            })
        },
        callHyibrisRealTimeProductsInfo: function(b, d, e) {
            c.getModelcodes(b, d, e).split(",").forEach(function(f, n) {
                var g = {};
                g.url = F + "/" + H + "/ng/p4v1/getRealTimeProductSimpleInfo?productCode\x3d" + f;
                g.type = "GET";
                g.cache = !0;
                g.crossDomain = !0;
                g.timeout = 1E4;
                g.xhrFields = {
                    withCredentials: !0
                };
                "Y" === J ? g.dataType = "json" : (g.dataType = "jsonp",
                g.jsonpCallback = "jQuery1910499421933433041_1385598221584_0" + n);
                $.ajax(g).done(function(f) {
                    if (f && "0000" === f.resultCode) {
                        var g = f.code
                          , k = Number(deleteCurrencyComma(f.price, CURRENCY));
                        f = Number(deleteCurrencyComma(f.promotionPrice, CURRENCY));
                        k = c.comparPrice(k, f, g);
                        g === b ? c.productPriceMsg(k.price, k.promotionPrice) : g === d ? c.setCardPrice(k.price, k.promotionPrice, a.mytv.find(".find-my-tv__card"), ".js-mytv-bigger") : g === e && c.setCardPrice(k.price, k.promotionPrice, a.mytv.find(".find-my-tv__card"), ".js-mytv-nextlevel")
                    }
                })
            })
        }
    }
      , e = ""
      , p = {
        tabBar: function() {
            e = "";
            for (var b in VD_FIND_TV.steps)
                e += '\x3cli class\x3d"find-my-tv__header-item ' + (2 > b ? "" : "is-disabled") + '" role\x3d"listitem" data-step\x3d"' + VD_FIND_TV.steps[b] + '"\x3e\x3ca href\x3d"#/' + VD_FIND_TV.steps[b] + '" class\x3d"link" role\x3d"button" aria-current\x3d"step" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:" + VD_FIND_TV.stepInfo[VD_FIND_TV.steps[b]].toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:" + VD_FIND_TV.stepInfo[VD_FIND_TV.steps[b]].toLowerCase() + '"\x3e' + VD_FIND_TV.stepInfo[VD_FIND_TV.steps[b]] + "\x3c/a\x3e\x3c/li\x3e";
            a.tabBar.html(e);
            p.tabBarEvent();
            window.sg.components.findMyTv.reInit()
        },
        tabBarEvent: function() {
            this.taggingTabBar();
            a.tabBar.find("li a").off("click").click(function() {
                event.preventDefault();
                v = !0;
                if ($(this).parent().hasClass("is-disabled"))
                    location.hash = "room" == VD_FIND_TV.currentStep ? "#" : "#/" + VD_FIND_TV.currentStep;
                else {
                    var a = $(this).parent().data("step");
                    VD_FIND_TV.currentStep = a;
                    a = c.getStepIdx(VD_FIND_TV.currentStep);
                    VD_FIND_TV.prevtStep = 1 < a ? VD_FIND_TV.steps[a - 1] : VD_FIND_TV.steps[0];
                    location.hash = "room" == VD_FIND_TV.currentStep ? "#" : "#/" + VD_FIND_TV.currentStep;
                    c.setProducts();
                    c.featureMsg();
                    c.activeStep()
                }
            })
        },
        taggingTabBar: function() {
            a.logo.attr("data-omni-type", "microsite_contentinter");
            a.logo.attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:logo");
            a.logo.attr("ga-ca", "content click");
            a.logo.attr("ga-ac", "feature");
            a.logo.attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:logo");
            for (var b in VD_FIND_TV.stepInfo)
                a.tabBar.find('[data-step\x3d"' + b + '"] a').attr("data-omni-type", "microsite_contentinter"),
                a.tabBar.find('[data-step\x3d"' + b + '"] a').attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:" + VD_FIND_TV.stepInfo[b].toLowerCase()),
                a.tabBar.find('[data-step\x3d"' + b + '"] a').attr("ga-ca", "content click"),
                a.tabBar.find('[data-step\x3d"' + b + '"] a').attr("ga-ac", "feature"),
                a.tabBar.find('[data-step\x3d"' + b + '"] a').attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:" + VD_FIND_TV.stepInfo[b].toLowerCase())
        },
        taggingBottom: function() {
            a.bottom.prevBtn.attr("data-omni-type", "microsite_contentinter");
            a.bottom.prevBtn.attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":step:back");
            a.bottom.prevBtn.attr("ga-ca", "content click");
            a.bottom.prevBtn.attr("ga-ac", "feature");
            a.bottom.prevBtn.attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":step:back");
            a.bottom.nextBtn.attr("data-omni-type", "microsite_contentinter");
            a.bottom.nextBtn.attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":step:next");
            a.bottom.nextBtn.attr("ga-ca", "content click");
            a.bottom.nextBtn.attr("ga-ac", "feature");
            a.bottom.nextBtn.attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":step:next");
            a.bottom.meetTvBtn.attr("data-omni-type", "microsite_contentinter");
            a.bottom.meetTvBtn.attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":step:meet your tv");
            a.bottom.meetTvBtn.attr("ga-ca", "content click");
            a.bottom.meetTvBtn.attr("ga-ac", "feature");
            a.bottom.meetTvBtn.attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":step:meet your tv");
            $(".layer-popup__inner .layer-popup__close").attr("data-omni-type", "microsite_contentinter");
            $(".layer-popup__inner .layer-popup__close").attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:close");
            $(".layer-popup__inner .layer-popup__close").attr("ga-ca", "content click");
            $(".layer-popup__inner .layer-popup__close").attr("ga-ac", "feature");
            $(".layer-popup__inner .layer-popup__close").attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:close");
            $(".js-popup-cancel").attr("data-omni-type", "microsite_contentinter");
            $(".js-popup-cancel").attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:cancel selection");
            $(".js-popup-cancel").attr("ga-ca", "content click");
            $(".js-popup-cancel").attr("ga-ac", "feature");
            $(".js-popup-cancel").attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:cancel selection");
            $(".js-popup-accept").attr("data-omni-type", "microsite_contentinter");
            $(".js-popup-accept").attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:accept changes");
            $(".js-popup-accept").attr("ga-ca", "content click");
            $(".js-popup-accept").attr("ga-ac", "feature");
            $(".js-popup-accept").attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:accept changes");
            if ("mytv" == VD_FIND_TV.currentStep) {
                var b = VD_FIND_TV.selected.mytv
                  , d = "";
                VD_MODEL.products[b] && (d = VD_MODEL.products[b].modelName || "");
                a.bottom.againBtn.attr("data-omni-type", "microsite_contentinter");
                a.bottom.againBtn.attr("data-omni", "tv product finder:" + VD_MODEL.mytvStage.headline.toLowerCase() + ":step:start over");
                a.bottom.againBtn.attr("ga-ca", "content click");
                a.bottom.againBtn.attr("ga-ac", "feature");
                a.bottom.againBtn.attr("ga-la", "tv product finder:" + VD_MODEL.mytvStage.headline.toLowerCase() + ":step:start over");
                a.bottom.againBtn.attr("aria-label", Granite.I18n.get("vd.hmc.cta.startAgain") + " : " + Granite.I18n.get("vd.label.step", VD_FIND_TV.stepInfo[VD_FIND_TV.steps[0]]));
                a.bottom.buyNowBtn.attr("data-omni-type", "microsite_contentinter");
                a.bottom.buyNowBtn.attr("data-omni", "tv product finder:" + VD_MODEL.mytvStage.headline.toLowerCase() + ":step:buy now|;" + d + "|" + b);
                a.bottom.buyNowBtn.attr("ga-ca", "content click");
                a.bottom.buyNowBtn.attr("ga-ac", "feature");
                a.bottom.buyNowBtn.attr("ga-la", "tv product finder:" + VD_MODEL.mytvStage.headline.toLowerCase() + ":step:buy now");
                a.bottom.personalizeBtn.attr("data-omni-type", "microsite_contentinter");
                a.bottom.personalizeBtn.attr("data-omni", "tv product finder:" + VD_MODEL.mytvStage.headline.toLowerCase() + ":step:personalize my tv");
                a.bottom.personalizeBtn.attr("ga-ca", "content click");
                a.bottom.personalizeBtn.attr("ga-ac", "feature");
                a.bottom.personalizeBtn.attr("ga-la", "tv product finder:" + VD_MODEL.mytvStage.headline.toLowerCase() + ":step:personalize my tv")
            }
            if ("room" == VD_FIND_TV.currentStep || "passion" == VD_FIND_TV.currentStep)
                return "";
            b = a.bottom.product.find("a").text() || "";
            a.bottom.product.find("a").attr("data-omni-type", "microsite_contentinter");
            a.bottom.product.find("a").attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:" + b.toLowerCase());
            a.bottom.product.find("a").attr("ga-ca", "content click");
            a.bottom.product.find("a").attr("ga-ac", "feature");
            a.bottom.product.find("a").attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:" + b.toLowerCase());
            a.bottom.productMobile.find("a").attr("data-omni-type", "microsite_contentinter");
            a.bottom.productMobile.find("a").attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:" + b.toLowerCase());
            a.bottom.productMobile.find("a").attr("ga-ca", "content click");
            a.bottom.productMobile.find("a").attr("ga-ac", "feature");
            a.bottom.productMobile.find("a").attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:" + b.toLowerCase());
            b = a.bottom.feature.find("a");
            for (d = 0; d < b.length; d++) {
                var e = $(b[d])
                  , g = c.escapeHtml(e.text());
                e.attr("data-omni-type", "microsite_contentinter");
                e.attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:" + g.toLowerCase());
                e.attr("ga-ca", "content click");
                e.attr("ga-ac", "feature");
                e.attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":secondary step:" + g.toLowerCase())
            }
        },
        taggingIndication: function() {
            for (var b = a[VD_FIND_TV.currentStep].find(".dot-indicator button.find-my-tv__indicator-item"), d = 0; d < b.length; d++)
                $(b[d]).attr("data-omni-type", "microsite_pcontentinter"),
                $(b[d]).attr("data-omni", "carousel:index:" + (d + 1)),
                $(b[d]).attr("ga-ca", "indication"),
                $(b[d]).attr("ga-ac", "carousel"),
                $(b[d]).attr("ga-la", "carousel:index:" + (d + 1))
        },
        room: function() {},
        passion: function() {
            e = "";
            for (i in VD_MODEL.passions) {
                var b = VD_MODEL.passions[i]
                  , d = "all" == c.lowerCase(b.title) ? "checked" : ""
                  , f = c.lowerCase(b.title).split(" ").join("");
                e += '                \x3cdiv class\x3d"radio-v2 ' + c.lowerCase(b.title) + '"\x3e';
                e += '                    \x3cinput class\x3d"radio-v2__input" type\x3d"radio" name\x3d"radio" id\x3d"radio-' + (Number(i) + 1) + '" data-passion\x3d"' + f + '" ' + d + ' data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.passion.toLowerCase() + ":feature:" + b.title + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.passion.toLowerCase() + ":feature:" + b.title + '"\x3e';
                e += '                    \x3clabel class\x3d"radio-v2__label" for\x3d"radio-' + (Number(i) + 1) + '"\x3e';
                e += '                        \x3cspan class\x3d"image"\x3e';
                e += '                            \x3cimg src\x3d"' + b.image.src + '" alt\x3d"' + b.image.alt + '"\x3e';
                e += "                        \x3c/span\x3e";
                e += '                        \x3cspan class\x3d"radio-v2__label-box-wrap"\x3e';
                e += '                            \x3cspan class\x3d"radio-v2__label-box"\x3e';
                e += '                                \x3csvg class\x3d"radio-v2__label-box-icon" focusable\x3d"false" aria-hidden\x3d"true"\x3e';
                e += '                                    \x3cuse xlink:href\x3d"#done-bold" href\x3d"#done-bold"\x3e\x3c/use\x3e';
                e += "                                \x3c/svg\x3e";
                e += "                            \x3c/span\x3e";
                e += "                        \x3c/span\x3e";
                e += '                        \x3cspan class\x3d"radio-v2__label-text"\x3e' + b.displayName || b.title + "\x3c/span\x3e";
                e += "                    \x3c/label\x3e";
                e += "                \x3c/div\x3e\n\n"
            }
            a.passion.find(".find-my-tv__passion-cont").html(e);
            window.sg.components.findMyTv.reInit()
        },
        sizeTvImg: function(b, d) {
            function c(a) {
                for (var b in VD_MODEL.passions) {
                    var d = VD_MODEL.passions[b];
                    if (d.title.toLowerCase() == a.toLowerCase())
                        if (VD_MODEL.passions[b].steps.indexOf("sizeStage") < VD_MODEL.passions[b].steps.indexOf("styleStage"))
                            break;
                        else
                            return d.sizeStageTVImage
                }
                return ""
            }
            function g(a) {
                if (VD_FIND_TV.steps.indexOf("size") < VD_FIND_TV.steps.indexOf("style"))
                    return "";
                for (var b in VD_MODEL.styleStage.styles) {
                    var d = VD_MODEL.styleStage.styles[b];
                    if (d.name.toLowerCase() == a.toLowerCase())
                        return d.sizeStageTVImage.src
                }
                return ""
            }
            var n = "";
            b && d ? ("passion" == b && (n = c(d)),
            "style" == b && (n = g(d))) : (VD_FIND_TV.selected.passion && (n = c(VD_FIND_TV.selected.passion)),
            VD_FIND_TV.selected.style && (n = g(VD_FIND_TV.selected.style)));
            VD_FIND_TV.defaultOpt.sizeStageTVImage && (n = "" == n ? VD_FIND_TV.defaultOpt.sizeStageTVImage.src : n);
            "" != n && (e = "",
            e += '          \x3cdiv class\x3d"image-background" style\x3d" background-image: url(' + n + ')"\x3e',
            e += '            \x3cdiv class\x3d"find-my-tv__size-image-width"\x3e\x3cem class\x3d"hidden"\x3e' + Granite.I18n.get("vd.hmc.hidden.width") + "\x3c/em\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e",
            e += '            \x3cdiv class\x3d"find-my-tv__size-image-height"\x3e\x3cem class\x3d"hidden"\x3e' + Granite.I18n.get("vd.hmc.hidden.height") + "\x3c/em\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e",
            e += "          \x3c/div\x3e",
            a.size.find(".find-my-tv__size-image-screen").html(e))
        },
        size: function() {
            var b = a.size.hasClass("is-serif");
            b ? (a.size.find(".find-my-tv__size-cont").addClass("is-serif"),
            a.size.find(".js-size-img").removeClass().addClass("js-size-img").addClass("find-my-tv__size-image-serif")) : (a.size.find(".find-my-tv__size-cont").removeClass("is-serif"),
            a.size.find(".js-size-img").removeClass().addClass("js-size-img").addClass("find-my-tv__size-image"));
            a.size.find(".find-my-tv__size-title").html(VD_MODEL.sizeStage.headline);
            a.size.find(".find-my-tv__controll--title.js-size-subTitle").html(VD_MODEL.sizeStage.subTitle);
            a.size.find(".find-my-tv__controll--title.js-size-subHeadline").html(VD_MODEL.sizeStage.subHeadline);
            a.size.find(".find-my-tv__controll--text").html(VD_MODEL.sizeStage.subHeadlineDesc);
            a.size.find(".find-my-tv__controll--ar a").text(VD_MODEL.sizeStage.arCTAText);
            a.size.find(".find-my-tv__controll--ar strong").text(VD_MODEL.sizeStage.arDescription);
            var d = c.wrapDisclamer(VD_MODEL.sizeStage.disclaimer);
            a.size.find(".find-my-tv__disclamer").html(d);
            -1 < d.indexOf("\x3c/span\x3e") && a.size.find(".find-my-tv__disclamer").attr("role", "list");
            e = "";
            p.sizeTvImg();
            a.size.find(".find-my-tv__size-background").show();
            a.size.find(".find-my-tv__size-background.is-serif").hide();
            a.size.find(".find-my-tv__size-background.js-notSerif").removeClass().addClass("find-my-tv__size-background").addClass("js-notSerif");
            e = "";
            if (b) {
                e += '          \x3cdiv class\x3d"image"\x3e';
                e += '            \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + (VD_FIND_TV.defaultOpt.sizeStageColorTVImage.desktop.src || VD_FIND_TV.defaultOpt.sizeStageTVImage.src) + '" data-mobile-src\x3d"' + (VD_FIND_TV.defaultOpt.sizeStageColorTVImage.mobile.src || VD_FIND_TV.defaultOpt.sizeStageColorTVImage.desktop.src || VD_FIND_TV.defaultOpt.sizeStageTVImage.src) + '" alt\x3d"" role\x3d"img"\x3e';
                e += "          \x3c/div\x3e";
                e += '          \x3cdiv class\x3d"image-serif-frame"\x3e';
                e += '            \x3cdiv class\x3d"find-my-tv__size-image-width"\x3e\x3cem class\x3d"hidden"\x3e' + Granite.I18n.get("vd.hmc.hidden.width") + "\x3c/em\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e";
                e += '            \x3cdiv class\x3d"find-my-tv__size-image-height"\x3e\x3cem class\x3d"hidden"\x3e' + Granite.I18n.get("vd.hmc.hidden.height") + "\x3c/em\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e";
                e += "          \x3c/div\x3e";
                e += "        \x3c/div\x3e";
                a.size.find(".find-my-tv__size-image-screen").html(e);
                a.size.find(".find-my-tv__size-image-serif").removeClass().addClass("js-size-img").addClass("find-my-tv__size-image-serif").addClass("m-" + E[VD_FIND_TV.selected.room]);
                for (var f in VD_MODEL.rooms)
                    b = VD_MODEL.rooms[f],
                    $(".find-my-tv__size-background.is-serif ." + E[b.title.toLowerCase()] + " .image").html('\x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + b.sizeStageBackgroundSerifImage.desktop.src + '" data-mobile-src\x3d"' + (b.sizeStageBackgroundSerifImage.mobile.src || b.sizeStageBackgroundSerifImage.desktop.src) + '" alt\x3d"" role\x3d"img"\x3e'),
                    a.size.find(".find-my-tv__size-background").hide(),
                    a.size.find(".find-my-tv__size-background.is-serif").show(),
                    a.size.find(".find-my-tv__size-background.is-serif").removeClass().addClass("find-my-tv__size-background").addClass("is-serif"),
                    window.sg.components.findMyTv.setLazyLoaderSrc()
            }
            b = VD_FIND_TV.selected.room;
            a.size.find("." + E[b] + " img").show();
            a.size.find(".find-my-tv__size-background").removeClass("living").addClass(E[b].split("room-").join(""));
            window.sg.components.findMyTv.setLazyLoaderSrc();
            var g = c.getTvSize(VD_FIND_TV.product[VD_FIND_TV.prevtStep]) || VD_FIND_TV.sizeList;
            d = g ? g.filter(function(a) {
                if (-1 < VD_FIND_TV.sizeList.indexOf(a))
                    return a
            }) : [];
            b = !1;
            var n = 1 < d.length ? d : c.getTvSize(VD_MODEL.sizeStage.sizes)
              , r = n.length - 1
              , k = 0 == r ? 0 : (100 / (r - 0)).toFixed(1)
              , u = 1 < n.length ? n[0] : VD_MODEL.sizeStage.sizes[0].size
              , h = 1 < n.length ? n[r] : VD_MODEL.sizeStage.sizes[VD_MODEL.sizeStage.sizes.length - 1].size
              , D = ""
              , l = VD_FIND_TV.defaultOpt.recommendedSize || "";
            1 < d.length ? 0 > d.indexOf(Number(VD_FIND_TV.defaultOpt.recommendedSize)) && (l = -1 < d.indexOf(Number(VD_FIND_TV.defaultOpt.defaultSize)) ? VD_FIND_TV.defaultOpt.defaultSize : d[r] || g[g.length - 1]) : l = 1 == d.length ? d[0] : n[n.length - 1];
            VD_FIND_TV.defaultOpt.selectSize = l;
            e = "";
            e += '          \x3ca href\x3d"javascript:void(0);" class\x3d"controll-select-btn" title\x3d"' + Granite.I18n.get("vd.hmc.size.select.close") + '" data-open-title\x3d"' + Granite.I18n.get("vd.hmc.size.select.open") + '" data-close-title\x3d"' + Granite.I18n.get("vd.hmc.size.select.close") + '" role\x3d"button"\x3e';
            e += '            \x3cspan class\x3d"controll-select-btn--text"\x3e' + l + "\u201d";
            e += '              \x3cimg class\x3d"select-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e';
            e += "            \x3c/span\x3e";
            e += '            \x3csvg class\x3d"icon icon--close" focusable\x3d"false" aria-hidden\x3d"true"\x3e';
            e += '              \x3cuse xlink:href\x3d"#close-up-bold" href\x3d"#close-up-bold"\x3e\x3c/use\x3e';
            e += "            \x3c/svg\x3e";
            e += '            \x3csvg class\x3d"icon icon--open" focusable\x3d"false" aria-hidden\x3d"true"\x3e';
            e += '              \x3cuse xlink:href\x3d"#open-down-bold" href\x3d"#open-down-bold"\x3e\x3c/use\x3e';
            e += "            \x3c/svg\x3e";
            e += "          \x3c/a\x3e";
            e += '          \x3cspan class\x3d"find-my-tv__controll--bar-text"\x3e' + u + "\u201d\x3c/span\x3e";
            e += '          \x3cspan class\x3d"find-my-tv__controll--bar-line pc-only"\x3e';
            for (var t = '\x3cspan class\x3d"find-my-tv__controll--bar-line mobile-only" role\x3d"listbox"\x3e', M = 0; M < n.length; M++) {
                g = n[M];
                var v = M == n.length - 1 ? "100" : k * M
                  , w = 0;
                for (f in VD_MODEL.sizeStage.sizes)
                    Number(VD_MODEL.sizeStage.sizes[f].size) == Number(g) && (w = f);
                r = VD_MODEL.sizeStage.sizes[w].height ? VD_MODEL.sizeStage.sizes[w].height : "0";
                u = VD_MODEL.sizeStage.sizes[w].width ? VD_MODEL.sizeStage.sizes[w].width : "0";
                var q = "";
                m || A || C ? q = VD_MODEL.sizeStage.sizes[w].iosARUrl ? VD_MODEL.sizeStage.sizes[w].iosARUrl : "" : y && (q = VD_MODEL.sizeStage.sizes[w].androidARUrl ? VD_MODEL.sizeStage.sizes[w].androidARUrl : "");
                w = "";
                l == g && (w = "checked");
                "checked" == w && (D = q,
                l = g);
                e += '            \x3cspan class\x3d"find-my-tv__controll--bar-line--select" style\x3d"left:' + v + '%"\x3e';
                e += '              \x3cinput type\x3d"radio" name\x3d"size" id\x3d"radio' + (M + 1) + '" data-size-width\x3d"' + u + '" data-size-height\x3d"' + r + '" data-size-class\x3d"' + g + '" data-ar-href\x3d"' + q + '" ' + w + ' data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.size.toLowerCase() + ":feature:" + g + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.size.toLowerCase() + ":feature:" + g + '"\x3e';
                e += '              \x3clabel class\x3d"radio-pointer" for\x3d"radio' + (M + 1) + '"\x3e' + g + "\u201d";
                t += ' \x3cbutton role\x3d"option" class\x3d"find-my-tv__controll--bar-line--select" data-input-id\x3d"radio' + (M + 1) + '" data-checked\x3d"" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.size.toLowerCase() + ":feature:" + g + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.size.toLowerCase() + ":feature:" + g + '"\x3e';
                t += '     \x3cem class\x3d"inch"\x3e' + g + "\u201d";
                VD_FIND_TV.defaultOpt.recommendedSize == g && (b = !0,
                e += '                  \x3cimg class\x3d"select-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e',
                t += '         \x3cimg class\x3d"select-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e');
                t += "     \x3c/em\x3e";
                t += " \x3c/button\x3e";
                e += "              \x3c/label\x3e";
                e += "            \x3c/span\x3e"
            }
            e += "          \x3c/span\x3e";
            e += '          \x3cspan class\x3d"find-my-tv__controll--bar-text"\x3e' + h + "\u201d\x3c/span\x3e";
            t += "\x3c/span\x3e";
            a.size.find(".find-my-tv__controll--bar").html(e + t);
            if (1 < d.length || 1 > d.length)
                a.size.find(".find-my-tv__controll--one").hide(),
                a.size.find(".find-my-tv__controll--bar").show();
            else if (d[0]) {
                g = d[0];
                w = 0;
                for (f in VD_MODEL.sizeStage.sizes)
                    VD_MODEL.sizeStage.sizes[f] == g && (w = f);
                r = VD_MODEL.sizeStage.sizes[w].height;
                u = VD_MODEL.sizeStage.sizes[w].width;
                f = m || A || C;
                q = "";
                f ? q = VD_MODEL.sizeStage.sizes[w].iosARUrl || "" : y && (q = VD_MODEL.sizeStage.sizes[w].androidARUrl || "");
                D = q;
                l = g;
                e = "";
                e += '            \x3cspan class\x3d"find-my-tv__controll--bar-line pc-only"\x3e';
                e += '              \x3cinput type\x3d"radio" name\x3d"size" id\x3d"radio-solo0" data-size-width\x3d"' + u + '" data-size-height\x3d"' + r + '" data-size-class\x3d"' + g + '" data-ar-href\x3d"' + q + '" disabled\x3e';
                e += '              \x3clabel class\x3d"radio-pointer" for\x3d"radio-solo0"\x3e' + g + "\u201d";
                VD_FIND_TV.defaultOpt.recommendedSize == g && (b = !0,
                e += '                  \x3cimg class\x3d"select-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e');
                e += "              \x3c/label\x3e";
                e += "            \x3c/span\x3e";
                a.size.find(".find-my-tv__size-image-width span").text(u);
                a.size.find(".find-my-tv__size-image-height span").text(r);
                a.size.find(".find-my-tv__controll--one").html(e);
                a.size.find(".find-my-tv__controll--one").show();
                a.size.find(".find-my-tv__controll--bar").hide()
            } else
                l || (l = a.size.find(".find-my-tv__controll--bar input:checked").data("size-class"),
                VD_FIND_TV.defaultOpt.selectSize = l),
                $('input[data-size-class\x3d"' + l + '"]').prop("checked", !0);
            b && a.size.find(".find-my-tv__wish-disclaimer").show();
            $(".find-my-tv__layer-popup.type-ar .ar-popup-text").text(Granite.I18n.get("vd.hmc.size.arpopup.desc", l));
            $(".find-my-tv__layer-popup.type-ar .qr-code").data("qrcode", D);
            $(".find-my-tv__controll--ar a").attr("data-ar-href", D);
            window.sg.components.findMyTv.setArCode();
            window.sg.components.findMyTv.reInit()
        },
        picture: function() {
            var b = this;
            a.picture.find(".find-my-tv__controll--title").html(VD_MODEL.pictureStage.subTitle);
            a.picture.find(".find-my-tv__picture-title").html(VD_MODEL.pictureStage.headline);
            a.picture.find(".find-my-tv__controll--title.js-subTitle").html(VD_MODEL.pictureStage.moreFeatures || "");
            a.picture.find(".find-my-tv__controll--bar-line--select label img").remove();
            a.picture.removeClass("is-disabled-select");
            a.picture.find(".find-my-tv__controll--bar").show();
            a.picture.find(".find-my-tv__controll--bar--one").hide();
            var d = c.wrapDisclamer(VD_MODEL.pictureStage.disclaimer);
            a.picture.find(".find-my-tv__disclamer").html(c.wrapDisclamer(d));
            -1 < d.indexOf("\x3c/span\x3e") && a.picture.find(".find-my-tv__disclamer").attr("role", "list");
            d = [];
            var f = "", g = VD_FIND_TV.defaultOpt.recommendedResolution || VD_FIND_TV.defaultOpt.defaultResolution || "", n = !1, r = [], k = VD_MODEL.pictureStage.resolutions, u = "", h = "", D = "", p = "", m;
            for (m in k) {
                var l = k[m];
                if (0 < c.getCheckData(VD_FIND_TV.product[VD_FIND_TV.prevtStep], "resolution", l.name)) {
                    l.name.toLowerCase() == g.toLowerCase() && (n = !0);
                    d.push(l);
                    r.push(l.name.toLowerCase());
                    f = l.name;
                    h += '\x3cspan class\x3d"find-my-tv__controll--bar-line--select"\x3e\x3cinput type\x3d"radio" name\x3d"picture" id\x3d"picture' + m + '" data-picture\x3d"' + l.name.toLowerCase() + '" data-picture-title\x3d"' + l.label + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.picture.toLowerCase() + ":feature:" + l.label.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.picture.toLowerCase() + ":feature:" + l.label.toLowerCase() + '"\x3e\x3clabel class\x3d"radio-pointer" for\x3d"picture' + m + '"\x3e' + l.label;
                    (VD_FIND_TV.defaultOpt.recommendedResolution || "").toLowerCase() === l.name.toLowerCase() && (a.picture.find(".find-my-tv__wish-disclaimer").show(),
                    h += '\x3cimg class\x3d"select-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"/\x3e');
                    h += "\x3c/label\x3e\x3c/span\x3e";
                    D += '\x3cbutton role\x3d"option" class\x3d"find-my-tv__controll--bar-line--select" data-input-id\x3d"picture' + m + '" data-checked\x3d""\x3e\x3cem class\x3d"inch"\x3e' + l.label;
                    (VD_FIND_TV.defaultOpt.recommendedResolution || "").toLowerCase() === l.name.toLowerCase() && (D += '\x3cimg class\x3d"select-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"/\x3e');
                    D += "\x3c/em\x3e\x3c/button\x3e";
                    if (VD_FIND_TV.defaultOpt.pictureStageTVImages && VD_FIND_TV.defaultOpt.pictureStageTVImages[l.name]) {
                        var q = VD_FIND_TV.defaultOpt.pictureStageTVImages[l.name];
                        u += '\x3cdiv class\x3d"picture-image-' + l.name.toLowerCase() + '"\x3e\x3cdiv class\x3d"image"\x3e\x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + q.src + '" data-mobile-src\x3d"' + q.src + '" alt\x3d"' + q.alt + '" role\x3d"img"\x3e\x3c/div\x3e\x3c/div\x3e'
                    }
                    p += '\x3cp class\x3d"find-my-tv__controll--text js-text-' + l.name.toLowerCase() + '"\x3e' + l.description + "\x3c/p\x3e"
                }
            }
            a.picture.find(".find-my-tv__picture-image").html(u);
            a.picture.find(".find-my-tv__controll--bar .find-my-tv__controll--bar-line.pc-only").html(h);
            a.picture.find(".find-my-tv__controll--bar .find-my-tv__controll--bar-line.mobile-only").html(D);
            a.picture.find(".find-my-tv__controll--text").remove();
            a.picture.find(".find-my-tv__controll--bar--one").after(p);
            0 < d.length && (a.picture.find(".find-my-tv__controll--bar-text").eq(0).html(d[0].label),
            a.picture.find(".find-my-tv__controll--bar-text").eq(1).html(d[d.length - 1].label));
            1 == d.length && (e = d[0].label,
            VD_FIND_TV.defaultOpt.recommendedResolution && d[0].name.toLowerCase() == VD_FIND_TV.defaultOpt.recommendedResolution.toLowerCase() && (e += '\x3cimg class\x3d"select-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e',
            a.picture.find(".find-my-tv__wish-disclaimer").show()),
            a.picture.find(".find-my-tv__controll--bar--one .radio-pointer").html(e),
            a.picture.find(".find-my-tv__controll--bar--one input").data("picture", d[0].name.toLowerCase()),
            a.picture.find(".find-my-tv__controll--bar--one input").data("picture-title", d[0].label),
            a.picture.find(".find-my-tv__controll--bar").hide(),
            a.picture.find(".find-my-tv__controll--bar--one").show(),
            g = d[0].name,
            VD_FIND_TV.defaultOpt.defaultResolution = d[0].name);
            n || (g = VD_FIND_TV.defaultOpt.defaultResolution && -1 < r.indexOf(VD_FIND_TV.defaultOpt.defaultResolution.toLowerCase()) ? VD_FIND_TV.defaultOpt.defaultResolution.toLowerCase() : f,
            VD_FIND_TV.defaultOpt.defaultResolution = g);
            a.picture.find('.find-my-tv__controll--bar input[data-picture\x3d"' + g.toLowerCase() + '"]').prop("checked", !0);
            a.picture.find(".picture-image-" + g.toLowerCase()).addClass("is-active");
            a.picture.find(".find-my-tv__controll--text.js-text-" + g.toLowerCase()).addClass("is-active");
            e = "";
            VD_MODEL.pictureStage.features.forEach(function(b, d) {
                var f = [];
                for (i in VD_FIND_TV.defaultOpt.pictureFeaturesByPassion)
                    VD_FIND_TV.defaultOpt.pictureFeaturesByPassion[i].name == b.name && f.push(VD_FIND_TV.defaultOpt.pictureFeaturesByPassion[i]);
                var g = c.getCheckData(VD_FIND_TV.product[VD_FIND_TV.prevtStep], b.name, "true")
                  , k = f && f[0] && (1 == f[0].recommended || "true" == f[0].recommended || "Y" == f[0].recommended)
                  , n = f && f[0] && (1 == f[0].default || "true" == f[0].default || "Y" == f[0].default)
                  , r = "\x3cstrong\x3e" + ((f[0] && f[0].title ? f[0].title : b.title) || "") + "\x3c/strong\x3e " + ((f[0] && f[0].description ? f[0].description : b.description) || "")
                  , u = {}
                  , h = {}
                  , x = ""
                  , l = "";
                if (b.demoMediaType)
                    x = b.demoMediaType;
                else
                    for (var m in b.demoMedia)
                        if (b.demoMedia[m].src || b.demoMedia[m].videoId)
                            x = m;
                x && (h = b.demoMedia,
                l = b.demoCTATxt,
                u = {
                    demoBody: b.demoBody,
                    demoDisclaimer: b.demoDisclaimer,
                    demoHeadline: b.demoHeadline
                });
                f = (f[0] && f[0].title ? f[0].title : b.title) || "";
                e += "          \x3cli\x3e";
                e += '            \x3cdiv class\x3d"checkbox-radio ' + (0 != g ? "" : "is-disabled-select") + '"\x3e';
                e += '              \x3cinput type\x3d"checkbox" name\x3d"option" class\x3d"hidden" id\x3d"option' + (d + 1) + '" data-nm\x3d"' + b.name + '" data-feature-title\x3d"' + b.title + '" data-feature\x3d"' + b.name + '" ' + (1 == (k || n ? !0 : !1) && 0 < g ? "checked" : "") + ' data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.picture.toLowerCase() + ":feature:" + f.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.picture.toLowerCase() + ":feature:" + f.toLowerCase() + '"\x3e';
                e += '              \x3clabel class\x3d"checkbox-radio__label" for\x3d"option' + (d + 1) + '"\x3e';
                e += '                \x3cspan class\x3d"checkbox-radio__label-text"\x3e' + r + "\x3c/span\x3e";
                k && (e += '                \x3cimg class\x3d"wish-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e',
                a.picture.find(".find-my-tv__wish-disclaimer").show());
                e += "              \x3c/label\x3e";
                e += "            \x3c/div\x3e";
                e += '            \x3ca class\x3d"cta cta--underline cta--blue" href\x3d"javascript:void(0);" aria-label\x3d"' + l + ":" + c.escapeHtml(h.videoTitle) + '" role\x3d"button" data-popup\x3d"' + encodeURI(JSON.stringify(h)) + '" data-mediatype\x3d"' + x + '" data-demotext\x3d"' + encodeURI(JSON.stringify(u)) + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.picture.toLowerCase() + ":feature:" + f.toLowerCase() + ":" + l.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.picture.toLowerCase() + ":feature:" + f.toLowerCase() + ":" + l.toLowerCase() + '"\x3e';
                e += "              " + l;
                e += "            \x3c/a\x3e";
                e += "          \x3c/li\x3e"
            });
            a.picture.find(".find-my-tv__option").html(e);
            window.sg.components.findMyTv.reInit();
            a.picture.find(".find-my-tv__option a.cta--underline").click(function() {
                var a = $(this).data("mediatype")
                  , d = JSON.parse(decodeURI($(this).data("popup")))
                  , c = JSON.parse(decodeURI($(this).data("demotext")));
                b.contentsPopup(a, d, c)
            })
        },
        style: function() {
            a.style.find(".find-my-tv__style-title").html(VD_MODEL.styleStage.headline);
            a.style.find(".find-my-tv__style-select--title").html(VD_MODEL.styleStage.subTitle);
            var b = c.wrapDisclamer(VD_MODEL.styleStage.disclaimer);
            a.style.find(".find-my-tv__disclamer").html(c.wrapDisclamer(b));
            -1 < b.indexOf("\x3c/span\x3e") && a.style.find(".find-my-tv__disclamer").attr("role", "list");
            var d = tvImgHtml = e = ""
              , f = ""
              , g = !0
              , n = !1
              , r = [];
            VD_FIND_TV.defaultOpt.displayStyleCount = 0;
            VD_FIND_TV.defaultOpt.skipStyle = !1;
            var k = VD_FIND_TV.defaultOpt.recommendedStyle || VD_FIND_TV.defaultOpt.defaultStyle || "";
            VD_MODEL.styleStage.styles.forEach(function(b, h) {
                var u = 0 != c.getCheckData(VD_FIND_TV.product[VD_FIND_TV.prevtStep], "style", b.name) ? !0 : !1
                  , x = k && k.toLowerCase() == b.name.toLowerCase() ? !0 : !1;
                u && (g && (g = !1,
                f = b.name.toLowerCase()),
                e += '          \x3cspan class\x3d"find-my-tv__style-radio--item"\x3e',
                e += '            \x3cinput type\x3d"radio" class\x3d"radio-item" name\x3d"style" id\x3d"style' + (h + 1) + '" data-style\x3d"' + b.name.toLowerCase() + '" data-style-title\x3d"' + b.title + '" ' + (x ? "checked" : "") + ' data-img\x3d"' + JSON.stringify(b.sizeStageTVImage).split('"').join("'") + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.style.toLowerCase() + ":feature:" + b.title.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.style.toLowerCase() + ":feature:" + b.title.toLowerCase() + '"\x3e',
                e += '            \x3clabel class\x3d"radio-label" for\x3d"style' + (h + 1) + '"\x3e',
                e += '              \x3cimg class\x3d"style-icon" src\x3d"' + b.icon.src + '" alt\x3d"' + b.icon.alt + '"\x3e',
                e += '              \x3cspan class\x3d"radio-text"\x3e' + (b.title || b.name),
                VD_FIND_TV.defaultOpt.recommendedStyle && VD_FIND_TV.defaultOpt.recommendedStyle.toLowerCase() == b.name.toLowerCase() && (e += '                \x3cimg class\x3d"style-wish-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e',
                a.style.find(".find-my-tv__wish-disclaimer").show()),
                e += "              \x3c/span\x3e",
                e += "            \x3c/label\x3e",
                e += "          \x3c/span\x3e",
                d += '            \x3cp class\x3d"find-my-tv__style-radio--text ' + (x ? "is-active" : "") + '" data-style\x3d"' + b.name.toLowerCase() + '"\x3e\x3cstrong\x3e' + b.headline + "\x3c/strong\x3e" + b.description + "\x3c/p\x3e",
                tvImgHtml += '        \x3cdiv class\x3d"find-my-tv__style-image--item ' + (x ? "is-active" : "") + '" data-style\x3d"' + b.name.toLowerCase() + '"\x3e',
                "video" === b.tvImageType ? (tvImgHtml += '          \x3cdiv class\x3d"image"\x3e',
                tvImgHtml += '            \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + b.tvImage.videoAltImageSrc + '" data-mobile-src\x3d"' + b.tvImage.videoAltImageSrc + '" alt\x3d"' + b.tvImage.videoAltImageTxt + '" role\x3d"img"\x3e',
                tvImgHtml += "          \x3c/div\x3e",
                tvImgHtml += '          \x3cbutton class\x3d"find-my-tv__style__play" type\x3d"button" title\x3d"' + Granite.I18n.get("vd.hmc.cta.playVideo") + '" data-video-id\x3d"' + b.tvImage.videoId + '" data-popup\x3d"' + encodeURI(JSON.stringify(b.tvImage)) + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.style.toLowerCase() + ":feature:" + b.title + ':Play video" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.style.toLowerCase() + ":feature:" + b.title + ':Play video"\x3e',
                tvImgHtml += '            \x3cspan class\x3d"hidden"\x3e' + Granite.I18n.get("vd.hmc.cta.playVideo") + "\x3c/span\x3e",
                tvImgHtml += "          \x3c/button\x3e") : (tvImgHtml += '          \x3cdiv class\x3d"image"\x3e',
                tvImgHtml += '            \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + b.tvImage.src + '" data-mobile-src\x3d"' + b.tvImage.src + '" alt\x3d"' + b.tvImage.alt + '" role\x3d"img"\x3e',
                tvImgHtml += "          \x3c/div\x3e"),
                tvImgHtml += "        \x3c/div\x3e",
                x && (n = !0),
                r.push(b.name.toLowerCase()),
                VD_FIND_TV.defaultOpt.displayStyleCount++)
            });
            a.style.find(".scrollbar__contents").html(e);
            a.style.find(".find-my-tv__style-radio--text--wrap").html(d);
            a.style.find(".find-my-tv__style-image").html(tvImgHtml);
            n || (k = VD_FIND_TV.defaultOpt.defaultStyle && -1 < r.indexOf(VD_FIND_TV.defaultOpt.defaultStyle.toLowerCase()) ? VD_FIND_TV.defaultOpt.defaultStyle.toLowerCase() : f,
            VD_FIND_TV.defaultOpt.defaultStyle = k,
            a.style.find('.scrollbar__contents .radio-item[data-style\x3d"' + k + '"]').prop("checked", !0),
            a.style.find('.find-my-tv__style-radio--text--wrap [data-style\x3d"' + k + '"]').addClass("is-active"),
            a.style.find('.find-my-tv__style-image [data-style\x3d"' + k + '"]').addClass("is-active"));
            1 == VD_FIND_TV.defaultOpt.displayStyleCount && (VD_FIND_TV.defaultOpt.skipStyle = !0);
            a.style.find(".find-my-tv__style__play").click(function() {
                var a = JSON.parse(decodeURI($(this).data("popup")));
                _this.contentsPopup("youtube", a, null)
            });
            window.sg.components.findMyTv.reInit()
        },
        color: function() {
            a.color.find(".find-my-tv__color-title").html(VD_MODEL.colorStage.headline);
            a.color.find(".find-my-tv__color-select--title").html(VD_MODEL.colorStage.subTitle);
            a.color.find(".find-my-tv__color-select--text strong").html(VD_MODEL.colorStage.subHeadline);
            var b = c.wrapDisclamer(VD_MODEL.colorStage.disclaimer);
            a.color.find(".find-my-tv__disclamer").html(c.wrapDisclamer(b));
            -1 < b.indexOf("\x3c/span\x3e") && a.color.find(".find-my-tv__disclamer").attr("role", "list");
            var d = tvImgHtml = e = ""
              , f = !0
              , g = !1
              , n = !0
              , r = VD_FIND_TV.defaultOpt.recommendedColor || VD_FIND_TV.defaultOpt.defaultColor || ""
              , k = [];
            VD_MODEL.colorStage.colors.forEach(function(b, h) {
                var u = c.getFilterData(VD_FIND_TV.Tvs, "color", b.name)
                  , x = b.name.split("_").join("-")
                  , l = u && 0 < Object.keys(u).length ? !0 : !1;
                u = r && r.toLowerCase() == b.name.toLowerCase() ? !0 : !1;
                VD_FIND_TV.colorMap[b.name.toLowerCase()] = b.label;
                l && (e += '          \x3cspan class\x3d"find-my-tv__color-radio--item"\x3e',
                e += '            \x3cinput type\x3d"radio" class\x3d"radio-item" name\x3d"color" id\x3d"color' + (h + 1) + '" ' + (u ? "checked" : "") + ' data-color\x3d"' + b.name.toLowerCase() + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.color.toLowerCase() + ":feature:" + b.label.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.color.toLowerCase() + ":feature:" + b.label.toLowerCase() + '"\x3e',
                e += '            \x3clabel class\x3d"radio-label" for\x3d"color' + (h + 1) + '"\x3e',
                e += '              \x3cspan class\x3d"radio-color ' + x + '"\x3e\x3c/span\x3e',
                e += '              \x3cspan class\x3d"radio-text"\x3e' + b.label,
                VD_FIND_TV.defaultOpt.recommendedColor && VD_FIND_TV.defaultOpt.recommendedColor.toLowerCase() == b.name.toLowerCase() && (e += '                \x3cimg class\x3d"style-wish-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e',
                a.color.find(".find-my-tv__wish-disclaimer").show()),
                e += "              \x3c/span\x3e",
                e += "            \x3c/label\x3e",
                e += "          \x3c/span\x3e",
                h = "",
                -1 < b.name.toLowerCase().indexOf("blue") && (h = "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_color_serif-cloud-blue_desktop.png",
                VD_FIND_TV.defaultOpt.sizeStageColorTVImage = {
                    desktop: {
                        src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_blue_desktop.png"
                    },
                    mobile: {
                        src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_blue_mobile.png"
                    }
                }),
                -1 < b.name.toLowerCase().indexOf("white") && (h = "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_color_serif-cloud-white_desktop.png",
                VD_FIND_TV.defaultOpt.sizeStageColorTVImage = {
                    desktop: {
                        src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_white_desktop.png"
                    },
                    mobile: {
                        src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_white_mobile.png"
                    }
                }),
                "" != h && (tvImgHtml += '        \x3cdiv class\x3d"find-my-tv__color-image--item ' + (u ? "is-active" : "") + '" data-color\x3d"' + b.name + '"\x3e',
                tvImgHtml += '          \x3cdiv class\x3d"image"\x3e',
                tvImgHtml += '            \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + h + '" data-mobile-src\x3d"' + h + '" alt\x3d"" role\x3d"img"\x3e',
                tvImgHtml += "          \x3c/div\x3e",
                tvImgHtml += "        \x3c/div\x3e"),
                n && (n = !1,
                d = b.name.toLowerCase()),
                u && (g = !0),
                k.push(b.name.toLowerCase()),
                f = !1)
            });
            f && (c.goNext(),
            VD_FIND_TV.steps.splice(VD_FIND_TV.steps.indexOf("color"), 1));
            a.color.find(".find-my-tv__color-radio").html(e);
            a.color.find(".find-my-tv__color-image").html(tvImgHtml);
            g || (r = VD_FIND_TV.defaultOpt.defaultColor && -1 < k.indexOf(VD_FIND_TV.defaultOpt.defaultColor.toLowerCase()) ? VD_FIND_TV.defaultOpt.defaultColor.toLowerCase() : d,
            VD_FIND_TV.defaultOpt.defaultColor = r,
            a.color.find('.find-my-tv__color-radio input.radio-item[data-color\x3d"' + r + '"]').prop("checked", !0),
            a.color.find('.find-my-tv__color-image .find-my-tv__color-image--item[data-color\x3d"' + r + '"]').addClass("is-active"));
            window.sg.components.findMyTv.reInit()
        },
        sound: function() {
            var b = this;
            a.sound.find(".find-my-tv__sound-title").html(VD_MODEL.soundStage.headline);
            var d = []
              , f = []
              , g = "";
            VD_MODEL.soundStage.disclaimer && f.push(VD_MODEL.soundStage.disclaimer);
            e = "";
            VD_MODEL.soundStage.features.forEach(function(b, g) {
                var k = [];
                for (i in VD_FIND_TV.defaultOpt.soundFeaturesByPassion)
                    VD_FIND_TV.defaultOpt.soundFeaturesByPassion[i].name == b.name && k.push(VD_FIND_TV.defaultOpt.soundFeaturesByPassion[i]);
                var n = ""
                  , r = ""
                  , h = {}
                  , l = {};
                if (b.demoMediaType)
                    n = b.demoMediaType;
                else
                    for (var m in b.demoMedia)
                        if (b.demoMedia[m].src || b.demoMedia[m].videoId)
                            n = m;
                n && (l = b.demoMedia,
                r = b.demoCTATxt,
                h = {
                    demoBody: b.demoBody || b.description,
                    demoDisclaimer: b.demoDisclaimer,
                    demoHeadline: b.demoHeadline
                });
                m = c.getCheckData(VD_FIND_TV.product[VD_FIND_TV.prevtStep], b.name, "true") ? "" : "is-disabled-select";
                var p = k && k[0] && (1 == k[0].recommended || "true" == k[0].recommended || "Y" == k[0].recommended)
                  , q = k && k[0] && (1 == k[0].default || "true" == k[0].default || "Y" == k[0].default);
                q = p || q ? !0 : !1;
                1 == q && "" == m && d.push(b.name);
                VD_MODEL.soundStage.features[g].disclaimer && f.push(VD_MODEL.soundStage.features[g].disclaimer);
                e += '          \x3cdiv class\x3d"find-my-tv__sound-item swiper-slide" data-type-headline\x3d"' + b.title + '" data-sound\x3d"' + b.name + '"\x3e';
                e += '            \x3cdiv class\x3d"image"\x3e';
                e += '              \x3cimg class\x3d"image__main lazy-load responsive-img ' + m + '" data-desktop-src\x3d"' + b.image.src + '" data-mobile-src\x3d"' + b.image.src + '" alt\x3d"' + b.image.alt + '" role\x3d"img"\x3e';
                e += "            \x3c/div\x3e";
                e += '            \x3cdiv class\x3d"find-my-tv__sound-item--wrap"\x3e';
                e += '              \x3cstrong class\x3d"find-my-tv__sound-item--title ' + m + '"\x3e' + b.title;
                p && (e += '                \x3cimg class\x3d"wish-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e',
                a.sound.find(".find-my-tv__wish-disclaimer").show());
                e += "              \x3c/strong\x3e";
                e += '              \x3cdiv class\x3d"find-my-tv__sound-item--text scrollbar"\x3e';
                e += '                \x3cdiv class\x3d"scrollbar__contents ' + m + '"\x3e' + (k[0] && k[0].description ? k[0].description : b.description || b.demoBody || "") + "\x3c/div\x3e";
                e += "              \x3c/div\x3e";
                r && (e += '              \x3ca class\x3d"cta cta--underline cta--blue" href\x3d"javascript:void(0);" role\x3d"button" aria-label\x3d"' + r + ":" + c.escapeHtml(l.videoTitle) + '" data-popup\x3d"' + encodeURI(JSON.stringify(l)) + '" data-mediatype\x3d"' + n + '" data-demotext\x3d"' + encodeURI(JSON.stringify(h)) + '"  data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.sound.toLowerCase() + ":feature:" + b.title.toLowerCase() + ":" + r.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.sound.toLowerCase() + ":feature:" + b.title.toLowerCase() + ":" + r.toLowerCase() + '"\x3e' + r + "\x3c/a\x3e");
                e += "            \x3c/div\x3e";
                e += '            \x3cdiv class\x3d"find-my-tv__sound-item--checked ' + m + '"\x3e';
                e += '              \x3cdiv class\x3d"checkbox-radio"\x3e';
                e += '                \x3cinput type\x3d"checkbox" name\x3d"checkbox" class\x3d"hidden" id\x3d"checkbox' + (g + 1) + '" data-sound\x3d"' + b.name + '" ' + (1 == q && "" == m ? "checked" : "") + ' data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.sound.toLowerCase() + ":feature:" + b.title.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.sound.toLowerCase() + ":feature:" + b.title.toLowerCase() + '"\x3e';
                e += '                \x3clabel class\x3d"checkbox-radio__label" for\x3d"checkbox' + (g + 1) + '"\x3e';
                e += '                  \x3cspan class\x3d"checkbox-radio__label-text"\x3e' + b.checkLabel + "\x3c/span\x3e";
                e += "                \x3c/label\x3e";
                e += "              \x3c/div\x3e";
                e += "            \x3c/div\x3e";
                e += "          \x3c/div\x3e"
            });
            a.sound.find(".swiper-wrapper").html(e);
            1 < f.length ? (g += '\x3cul role\x3d"list"\x3e',
            f.forEach(function(a) {
                g += c.wrapListItem(a)
            }),
            g += "\x3c/ul\x3e") : 1 === f.length && (g = "\x3cp\x3e" + f[0] + "\x3c/p\x3e");
            a.sound.find(".find-my-tv__disclamer").html(g);
            c.disabledCardItem(VD_FIND_TV.product[VD_FIND_TV.prevtStep], d, "sound");
            a.sound.find(".find-my-tv__sound-item.swiper-slide a.cta--underline").click(function() {
                var a = $(this).data("mediatype")
                  , d = JSON.parse(decodeURI($(this).data("popup")))
                  , c = JSON.parse(decodeURI($(this).data("demotext")));
                b.contentsPopup(a, d, c)
            });
            window.sg.components.findMyTv.reInit();
            a.sound.find(".find-my-tv__sound-item--text.scrollbar").each(function() {
                window.sg.common.scrollbar.init(this)
            })
        },
        smart: function() {
            var b = this;
            a.smart.find(".find-my-tv__smarttv-title").html(VD_MODEL.smartStage.headline);
            var d = []
              , f = []
              , g = "";
            VD_MODEL.smartStage.disclaimer && f.push(VD_MODEL.smartStage.disclaimer);
            e = "";
            VD_MODEL.smartStage.features.forEach(function(b, g) {
                var k = [];
                for (i in VD_FIND_TV.defaultOpt.smartFeaturesByPassion)
                    VD_FIND_TV.defaultOpt.smartFeaturesByPassion[i].name == b.name && k.push(VD_FIND_TV.defaultOpt.smartFeaturesByPassion[i]);
                var h = ""
                  , r = ""
                  , n = {}
                  , m = {};
                if (b.demoMediaType)
                    h = b.demoMediaType;
                else
                    for (var l in b.demoMedia)
                        if (b.demoMedia[l].src || b.demoMedia[l].videoId)
                            h = l;
                h && (m = b.demoMedia,
                r = b.demoCTATxt,
                n = {
                    demoBody: b.demoBody || b.description,
                    demoDisclaimer: b.demoDisclaimer,
                    demoHeadline: b.demoHeadline
                });
                l = c.getCheckData(VD_FIND_TV.product[VD_FIND_TV.prevtStep], b.name, "true") ? "" : "is-disabled-select";
                var p = k && k[0] && (1 == k[0].recommended || "true" == k[0].recommended || "Y" == k[0].recommended)
                  , q = k && k[0] && (1 == k[0].default || "true" == k[0].default || "Y" == k[0].default);
                q = p || q ? !0 : !1;
                1 == q && "" == l && d.push(b.name);
                VD_MODEL.smartStage.features[g].disclaimer && f.push(VD_MODEL.smartStage.features[g].disclaimer);
                e += '          \x3cdiv class\x3d"find-my-tv__smarttv-item swiper-slide" data-type-headline\x3d"' + b.title + '" data-smart\x3d"' + b.name + '"\x3e';
                e += '            \x3cdiv class\x3d"image"\x3e';
                e += '              \x3cimg class\x3d"image__main lazy-load responsive-img ' + l + '" data-desktop-src\x3d"' + b.image.src + '" data-mobile-src\x3d"' + b.image.src + '" alt\x3d"' + b.image.alt + '" role\x3d"img"\x3e';
                e += "            \x3c/div\x3e";
                e += '            \x3cdiv class\x3d"find-my-tv__smarttv-item--wrap"\x3e';
                e += '              \x3cstrong class\x3d"find-my-tv__smarttv-item--title ' + l + '"\x3e' + b.title;
                p && (e += '                \x3cimg class\x3d"wish-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + VD_FIND_TV.defaultOpt.recommendedLabel + '"\x3e',
                a.smart.find(".find-my-tv__wish-disclaimer").show());
                e += "              \x3c/strong\x3e";
                e += '              \x3cdiv class\x3d"find-my-tv__smarttv-item--text scrollbar"\x3e';
                e += '                \x3cdiv class\x3d"scrollbar__contents ' + l + '"\x3e' + (k[0] && k[0].description ? k[0].description : b.description || b.demoBody || "") + "\x3c/div\x3e";
                e += "              \x3c/div\x3e";
                r && (e += '              \x3ca class\x3d"cta cta--underline cta--blue" href\x3d"javascript:void(0);" role\x3d"button" aria-label\x3d"' + r + ":" + c.escapeHtml(m.videoTitle) + '" data-popup\x3d"' + encodeURI(JSON.stringify(m)) + '" data-mediatype\x3d"' + h + '" data-demotext\x3d"' + encodeURI(JSON.stringify(n)) + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.smart.toLowerCase() + ":feature:" + b.title.toLowerCase() + ":" + r.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.smart.toLowerCase() + ":feature:" + b.title.toLowerCase() + ":" + r.toLowerCase() + '"\x3e' + r + "\x3c/a\x3e");
                e += "            \x3c/div\x3e";
                e += '            \x3cdiv class\x3d"find-my-tv__smarttv-item--checked ' + l + '"\x3e';
                e += '              \x3cdiv class\x3d"checkbox-radio"\x3e';
                e += '                \x3cinput type\x3d"checkbox" name\x3d"checkbox" class\x3d"hidden" id\x3d"smart' + (g + 1) + '" data-smart\x3d"' + b.name + '" ' + (1 == q && "" == l ? "checked" : "") + ' data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.smart.toLowerCase() + ":feature:" + b.title.toLowerCase() + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.smart.toLowerCase() + ":feature:" + b.title.toLowerCase() + '"\x3e';
                e += '                \x3clabel class\x3d"checkbox-radio__label" for\x3d"smart' + (g + 1) + '"\x3e';
                e += '                  \x3cspan class\x3d"checkbox-radio__label-text"\x3e' + b.checkLabel + "\x3c/span\x3e";
                e += "                \x3c/label\x3e";
                e += "              \x3c/div\x3e";
                e += "            \x3c/div\x3e";
                e += "          \x3c/div\x3e"
            });
            a.smart.find(".swiper-wrapper").html(e);
            1 < f.length ? (g += '\x3cul role\x3d"list"\x3e',
            f.forEach(function(a) {
                g += c.wrapListItem(a)
            }),
            g += "\x3c/ul\x3e") : 1 === f.length && (g = "\x3cp\x3e" + f[0] + "\x3c/p\x3e");
            a.smart.find(".find-my-tv__disclamer").html(g);
            c.disabledCardItem(VD_FIND_TV.product[VD_FIND_TV.prevtStep], d, "smart");
            a.smart.find(".find-my-tv__smarttv-item.swiper-slide a.cta--underline").click(function() {
                var a = $(this).data("mediatype")
                  , d = JSON.parse(decodeURI($(this).data("popup")))
                  , c = JSON.parse(decodeURI($(this).data("demotext")));
                $(this).focus();
                b.contentsPopup(a, d, c)
            });
            window.sg.components.findMyTv.reInit();
            a.smart.find(".find-my-tv__smarttv-item--text.scrollbar").each(function() {
                window.sg.common.scrollbar.init(this)
            })
        },
        mytv: function(b) {
            var d = c.getMytvProduct(VD_FIND_TV.Tvs)
              , f = b ? VD_MODEL.products[b] : d[0];
            b || (b = d[0].sku);
            VD_FIND_TV.selected.mytv = b;
            d = VD_FIND_TV.defaultOpt.myTVSubHeadlineByPassion;
            d && "undefined" != typeof d || (d = (d = VD_MODEL.passions.filter(function(a) {
                if ("all" == a.title)
                    return a
            })) ? d[0].myTVSubHeadlineByPassion : "");
            a.mytv.find(".find-my-tv__mytv-title").html(VD_MODEL.mytvStage.headline);
            a.mytv.find(".find-my-tv__mytv-discription").html(d);
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").text(VD_MODEL.mytvStage.learnMoreTxt);
            a.mytv.find(".find-my-tv__mytv-disclamer").addClass("hidden").html(VD_MODEL.mytvStage.disclaimer1);
            a.mytv.find(".find-my-tv__disclamer.js-mytv-disclamer").hide();
            a.mytv.find(".find-my-tv__disclamer.js-card-disclamer").hide();
            d = c.wrapDisclamer(VD_MODEL.mytvStage.disclaimer);
            a.mytv.find(".find-my-tv__disclamer").html(c.wrapDisclamer(d));
            -1 < d.indexOf("\x3c/span\x3e") && a.mytv.find(".find-my-tv__disclamer").attr("role", "list");
            if (!f)
                return !1;
            a.mytv.find(".find-my-tv__mytv-info .find-my-tv__mytv-info--title").html(f.displayName);
            a.mytv.find(".find-my-tv__mytv-info .find-my-tv__mytv-info--text").html(f.sku);
            d = f.description && -1 < f.description.indexOf("@@@") ? '\x3cli  role\x3d"listitem"\x3e' + f.description.split("@@@").join('\x3c/li\x3e\x3cli role\x3d"listitem"\x3e') + "\x3c/li\x3e" : f.description || "";
            a.mytv.find(".find-my-tv__mytv-info .find-my-tv__mytv-info--list").html(d);
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").attr("href", f.pdpUrl + "#benefits");
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").attr("title", f.displayName + " : " + Granite.I18n.get("Open in a new window"));
            a.bottom.buyNowBtn.attr("href", f.pdpUrl);
            a.bottom.buyNowBtn.attr("title", f.displayName + " : " + Granite.I18n.get("Open in a new window"));
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").attr("data-omni-type", "microsite_contentinter");
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").attr("data-omni", "tv product finder:" + VD_FIND_TV.stepInfo.mytv.toLowerCase() + ":step:" + VD_MODEL.mytvStage.learnMoreTxt.toLowerCase() + "|;" + (f.modelName || "") + "|" + f.sku);
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").attr("ga-ca", "content click");
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").attr("ga-ac", "feature");
            a.mytv.find(".find-my-tv__mytv-cont .cta.cta--blue").attr("ga-la", "tv product finder:" + VD_FIND_TV.stepInfo.mytv.toLowerCase() + ":step:" + VD_MODEL.mytvStage.learnMoreTxt.toLowerCase());
            d = "/content/samsung/" + H + "/tvs/personalize-my-tv";
            var g = "/";
            ("live" === z || "qa" === z) && -1 < d.indexOf("/content/samsung") && (d = d.replace("/content/samsung", ""));
            -1 < location.href.indexOf(".html") && (g = ".html");
            a.bottom.personalizeBtn.attr("href", d + g + "?sku\x3d" + f.sku);
            e = "";
            d = Math.floor(10 * Number(f.rating || "0")) / 10 || 0;
            g = f.reviewCount || "0";
            for (var h = 1; 6 > h; h++)
                e = h < Number(d) ? e + '    \x3cspan class\x3d"rating__star-item"\x3e\x3cspan class\x3d"rating__star-empty"\x3e\x3c/span\x3e\x3cspan class\x3d"rating__star-filled" style\x3d"width: 100%;"\x3e\x3c/span\x3e\x3c/span\x3e' : h == Math.ceil(d) ? 0 == 100 * Number(d) % 100 ? e + '    \x3cspan class\x3d"rating__star-item"\x3e\x3cspan class\x3d"rating__star-empty"\x3e\x3c/span\x3e\x3cspan class\x3d"rating__star-filled" style\x3d"width: 100%;"\x3e\x3c/span\x3e\x3c/span\x3e' : e + ('    \x3cspan class\x3d"rating__star-item"\x3e\x3cspan class\x3d"rating__star-empty"\x3e\x3c/span\x3e\x3cspan class\x3d"rating__star-filled" style\x3d"width: ' + 100 * Number(d) % 100 + '%;"\x3e\x3c/span\x3e\x3c/span\x3e') : e + '    \x3cspan class\x3d"rating__star-item"\x3e\x3cspan class\x3d"rating__star-empty"\x3e\x3c/span\x3e\x3cspan class\x3d"rating__star-filled" style\x3d"width: 0%;"\x3e\x3c/span\x3e\x3c/span\x3e';
            a.mytv.find(".rating__inner .rating__star-list").html(e);
            a.mytv.find(".rating__inner .rating__point span.js-reviewRating").html(d.toFixed(1));
            a.mytv.find(".rating__inner .rating__review-count span.js-reviewCount").html(g);
            a.mytv.find(".find-my-tv__mytv-info--rating a").attr("href", f.pdpUrl + "#review");
            a.mytv.find(".find-my-tv__mytv-info--rating a").attr("title", f.displayName + " Review : " + Granite.I18n.get("Open in a new window"));
            d = !1;
            e = "";
            for (var r in f.icons)
                g = f.icons[r],
                e += '          \x3cli role\x3d"listitem"\x3e',
                e += '            \x3cimg class\x3d"info-icon" src\x3d"' + g.src + '" alt\x3d""\x3e',
                e += '            \x3cspan class\x3d"icon-text"\x3e' + g.text + "\x3c/span\x3e",
                e += "          \x3c/li\x3e",
                -1 < g.text.indexOf("*") && (d = !0);
            a.mytv.find(".find-my-tv__mytv-info--icon").html(e);
            f.description && -1 < f.description.indexOf("*") && (d = !0);
            d && a.mytv.find(".find-my-tv__mytv-disclamer").removeClass("hidden");
            d = e = "";
            for (r in f.images)
                g = f.images[r],
                e += '          \x3cdiv class\x3d"find-my-tv__mytv-image--item ' + (0 == r ? "is-active" : "") + '"\x3e',
                e += '            \x3cdiv class\x3d"image"\x3e',
                e += '              \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + (g.src ? g.src + "?$720_576_PNG$" : "") + '" data-mobile-src\x3d"' + (g.src ? g.src : "") + '" alt\x3d"' + g.alt + '" role\x3d"img"\x3e',
                e += "            \x3c/div\x3e",
                e += "          \x3c/div\x3e",
                d += '              \x3cdiv class\x3d"find-my-tv__mytv-item swiper-slide ' + (0 == r ? "is-active" : "") + '" data-type-headline\x3d"' + g.alt + '"\x3e',
                d += '                \x3ca class\x3d"pc-only" href\x3d"javascript:void(0);" role\x3d"button" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.stepInfo.mytv.toLowerCase() + ':product gallery:image" ga-ca\x3d"content click" ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.stepInfo.mytv.toLowerCase() + ':product gallery:image"\x3e',
                d += '                  \x3cdiv class\x3d"image"\x3e',
                d += '                    \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + (g.thumbnail ? g.thumbnail + "?$70_70_PNG$" : "") + '" data-mobile-src\x3d"' + (g.thumbnail ? g.thumbnail : "") + '" alt\x3d"' + g.alt + '" role\x3d"img"\x3e',
                d += "                  \x3c/div\x3e",
                d += "                \x3c/a\x3e",
                d += '                \x3cdiv class\x3d"mobile-only"\x3e',
                d += '                  \x3cdiv class\x3d"image"\x3e',
                d += '                      \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + (g.thumbnail ? g.thumbnail + "?$70_70_PNG$" : "") + '" data-mobile-src\x3d"' + (g.thumbnail ? g.thumbnail : "") + '" alt\x3d"' + g.alt + '" role\x3d"img"\x3e',
                d += "                  \x3c/div\x3e",
                d += "                \x3c/div\x3e",
                d += "              \x3c/div\x3e";
            a.mytv.find(".find-my-tv__mytv-image--big").html(e);
            a.mytv.find(".swiper-container.basic-swiper .swiper-wrapper").html(d);
            d = c.getBigger(VD_MODEL.products, b, f.sortPrice, f.size);
            r = d[0] || {};
            g = c.getNextLevel(VD_MODEL.products, b, f.size, f.sortPrice);
            f = g[0] || {};
            e = "";
            0 < d.length && (d = {},
            d[r.key] = r,
            e += p.cardItemHtml(d, "js-mytv-bigger", VD_MODEL.mytvStage.largerSizeTxt, "mytv", [r.key]));
            0 < g.length && (r.key === f.key && (f = 1 < g.length ? g[1] : {}),
            f && (d = {},
            d[f.key] = f,
            e += p.cardItemHtml(d, "js-mytv-nextlevel", VD_MODEL.mytvStage.lineUpgradeTxt, "mytv", [f.key])));
            "" == e ? (a.mytv.find(".find-my-tv__card").hide(),
            a.mytv.find(".find-my-tv__disclamer.js-mytv-disclamer").show(),
            a.mytv.find(".find-my-tv__disclamer.js-card-disclamer").hide(),
            a.mytv.find(".find-my-tv__card").next().hasClass("find-my-tv__disclamer") && a.mytv.find(".find-my-tv__card").next().hide()) : (VD_MODEL.mytvStage.disclaimer && (d = c.wrapDisclamer(VD_MODEL.mytvStage.disclaimer),
            e += '\x3cp class\x3d"find-my-tv__disclamer js-card-disclamer"' + (-1 < d.indexOf("\x3c/span\x3e") ? ' role\x3d"list"' : "") + "\x3e" + d + "\x3c/p\x3e"),
            a.mytv.find(".find-my-tv__card").html(e),
            a.mytv.find(".find-my-tv__card").show(),
            a.mytv.find(".find-my-tv__disclamer.js-mytv-disclamer").hide(),
            a.mytv.find(".find-my-tv__disclamer.js-card-disclamer").show(),
            a.mytv.find(".find-my-tv__card").next().hasClass("find-my-tv__disclamer") && a.mytv.find(".find-my-tv__card").next().show());
            c.ajaxProcutInfo(b, r.key, f.key);
            a.mytv.find(".find-my-tv__card .find-my-tv__card-item a").off().click(function() {
                v = !0;
                var a = $(this).data("modelcd");
                p.mytv(a);
                window.scroll(0, 0)
            });
            window.sg.components.findMyTv.reInit()
        },
        contentsPopup: function(a, d, f) {
            var b = "";
            f && (1 < c.getLineBreakArray(f.demoDisclaimer).length ? (b = b + '\x3cul role\x3d"list"\x3e' + c.wrapListItem(f.demoDisclaimer),
            b += "\x3c/ul\x3e") : b = "\x3cp\x3e" + f.demoDisclaimer + "\x3c/p\x3e");
            e = "";
            if ("image" === a)
                e += '      \x3cdiv class\x3d"video-contents__text"\x3e',
                e += '        \x3ch3 class\x3d"video-contents__text--title"\x3e' + f.demoHeadline + "\x3c/h3\x3e",
                e += '        \x3cdiv class\x3d"video-contents__text--text" tabindex\x3d"0"\x3e',
                e += "          \x3cp\x3e" + f.demoBody + "\x3c/p\x3e",
                e += b,
                e += "        \x3c/div\x3e",
                e += "      \x3c/div\x3e",
                e += '     \x3cdiv class\x3d"image"\x3e',
                e += '        \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + d.src + '" data-mobile-src\x3d"' + d.src + '" alt\x3d"' + d.alt + '" role\x3d"img"\x3e',
                e += '     \x3c/div"\x3e',
                $('.video-contents.image-cont[data-btn-id\x3d"video2"] .inset').html(e),
                window.sg.components.findMyTv.callLayerPopup("image");
            else {
                var h = "";
                f && (h = h + '      \x3cdiv class\x3d"video-contents__text"\x3e' + ('        \x3ch3 class\x3d"video-contents__text--title"\x3e' + f.demoHeadline + "\x3c/h3\x3e"),
                h = h + '        \x3cdiv class\x3d"video-contents__text--text" tabindex\x3d"0"\x3e' + ("          \x3cp\x3e" + f.demoBody + "\x3c/p\x3e"),
                h = h + b + "        \x3c/div\x3e      \x3c/div\x3e");
                e += '      \x3cdiv class\x3d"video" data-image-default\x3d"false" data-video-embed\x3d"false" data-video-type\x3d"' + a + "\" data-video-data\x3d'{";
                "youtube" === a && (e += '            "id": "' + d.videoId + '",');
                "brightcove" === a && (e += '            "countryCode": "' + H + '",',
                e += '            "id": "' + d.videoId + '",');
                "mp4" === a && (e += '            "src": "' + d.src + '",',
                e += '            "muted": true,',
                e += '            "loop": false,',
                e += '            "controls": true,');
                e += '            "title": "' + c.escapeHtml(d.videoTitle) + '",';
                e += '             "caption": "",';
                e += '             "autoplay": true';
                e += "         }'\x3e";
                e += "      \x3c/div\x3e";
                f ? ($('.video-contents.video-cont[data-btn-id\x3d"video1"] .inset').html(h + e),
                window.sg.components.findMyTv.callLayerPopup("video")) : ($('.video-contents.video-cont[data-btn-id\x3d"video-only"] .inset').html(e),
                window.sg.components.findMyTv.callLayerPopup("videoOnly"))
            }
        },
        cardItemHtml: function(b, d, e, g, h) {
            var f = "", k;
            for (k in h) {
                var n = b[h[k]]
                  , l = n.key || n.sku || k
                  , m = VD_MODEL.products[l] ? VD_MODEL.products[l].price : "0"
                  , p = VD_MODEL.products[l] ? VD_MODEL.products[l].promotionPrice : "0"
                  , q = m || "0";
                "0" != p && 0 != p && 0 < m - p && (q = p);
                var t = VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":feature:" + (a.bottom.product.find("a").text() || "").toLowerCase()
                  , v = VD_FIND_TV.stepInfo[VD_FIND_TV.currentStep].toLowerCase() + ":step:" + VD_MODEL.mytvStage.learnMoreTxt.toLowerCase();
                f += '      \x3cdiv class\x3d"find-my-tv__card-item ' + (d || l) + '" data-card-cd\x3d"' + l + '"\x3e';
                e && (f += '        \x3cdiv class\x3d"find-my-tv__card-item--title-wrap"\x3e',
                f += '          \x3ch3 class\x3d"find-my-tv__card-item--title"\x3e' + e + "\x3c/h3\x3e",
                f += "        \x3c/div\x3e");
                f += '        \x3cdiv class\x3d"find-my-tv__card-item--box"\x3e';
                f += '          \x3cdiv class\x3d"find-my-tv__card-item--image-wrap"\x3e';
                "mytv" == g && (f += '            \x3ca href\x3d"#/mytv/' + l + '" class\x3d"btn-gotop" target\x3d"_self" title\x3d"' + VD_MODEL.mytvStage.headline + ": " + c.escapeHtml(n.displayName) + '" data-modelcd\x3d"' + l + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.currentStep + ':recommendation:view product" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.currentStep + ':recommendation:view product"\x3e');
                n.images && 0 < n.images.length && (f += '              \x3cdiv class\x3d"image"\x3e',
                f += '                \x3cimg class\x3d"image__main lazy-load responsive-img" data-desktop-src\x3d"' + (n.images[0].src ? n.images[0].src + "?$720_576_PNG$" : "") + '" data-mobile-src\x3d"' + (n.images[0].src ? n.images[0].src + "?$720_576_PNG$" : "") + '" alt\x3d"' + n.images[0].alt + '" role\x3d"img"\x3e',
                f += "              \x3c/div\x3e");
                "mytv" == g && (f += "            \x3c/a\x3e");
                f += "          \x3c/div\x3e";
                f += '          \x3cdiv class\x3d"find-my-tv__card-item--name-wrap"\x3e';
                "mytv" == g && (f += '            \x3ca href\x3d"#/mytv/' + l + '" target\x3d"_self" aria-label\x3d"' + VD_MODEL.mytvStage.headline + '" class\x3d"find-my-tv__card-item--name" data-modelcd\x3d"' + l + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + VD_FIND_TV.currentStep + ':recommendation:view product" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + VD_FIND_TV.currentStep + ':recommendation:view product"\x3e');
                f += "            " + n.displayName;
                "mytv" == g && (f += "            \x3c/a\x3e");
                f += "          \x3c/div\x3e";
                f += '          \x3cdiv class\x3d"find-my-tv__card-item--price-wrap"\x3e';
                f = "0" != q && 0 != q ? f + ('            \x3cp class\x3d"find-my-tv__card-item--price"\x3e\x3cstrong\x3e' + currencyComma(q, CURRENCY) + "\x3c/strong\x3e\x3c/p\x3e") : f + '            \x3cp class\x3d"find-my-tv__card-item--price"\x3e\x3cstrong\x3e\x3c/strong\x3e\x3c/p\x3e';
                f = "0" != p && 0 != p && 0 < m - p ? f + ('            \x3cp class\x3d"find-my-tv__card-item--save"\x3e\x3cspan class\x3d"hidden"\x3e' + Granite.I18n.get("vd.hmc.hidden.price") + "\x3c/span\x3e\x3cdel\x3e" + currencyComma(m, CURRENCY) + "\x3c/del\x3e\x3cspan\x3e" + (VD_MODEL.mytvStage.saveTxt + " " + currencyComma(m - p, CURRENCY)) + "\x3c/span\x3e\x3c/p\x3e") : f + ('            \x3cp class\x3d"find-my-tv__card-item--save" style\x3d"display:none;"\x3e\x3cspan class\x3d"hidden"\x3e' + Granite.I18n.get("vd.hmc.hidden.price") + "\x3c/span\x3e\x3cdel\x3e\x3c/del\x3e\x3cspan\x3e\x3c/span\x3e\x3c/p\x3e");
                f += "          \x3c/div\x3e";
                f += '          \x3cdiv class\x3d"find-my-tv__card-item--cta-wrap"\x3e';
                f += '            \x3ca class\x3d"cta cta--underline cta--blue" href\x3d"' + n.pdpUrl + '" target\x3d"_blank" title\x3d"' + ("mytv" == g ? Granite.I18n.get("vd.hmc.mytv.card.buy") + " " : "") + c.escapeHtml(n.displayName) + " : " + Granite.I18n.get("Open in a new window") + '" data-omni-type\x3d"microsite_contentinter" data-omni\x3d"tv product finder:' + ("layer" == g ? t : v) + "|;" + (n.modelName || "") + "|" + l + '" ga-ca\x3d"content click"  ga-ac\x3d"feature" ga-la\x3d"tv product finder:' + ("layer" == g ? t : v) + '"\x3e';
                f += "              " + VD_MODEL.mytvStage.learnMoreTxt;
                f += "            \x3c/a\x3e";
                f += "          \x3c/div\x3e";
                f += "        \x3c/div\x3e";
                f += "      \x3c/div\x3e"
            }
            "layer" == g && $(".find-my-tv-model__popup#modalChoose .find-my-tv__card").html(f);
            return f
        }
    }
      , c = {
        lowerCase: function(a, d) {
            return "undefined" == typeof a || null == a ? "" : "number" == d ? Number(a.toString().split("\x26").join("").split(" ").join("")) : a ? a.toString().toLowerCase().split("\x26").join("").split(" ").join("") : ""
        },
        escapeHtml: function(a) {
            (a = a || "") && (a = a.replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26apos;"));
            return a
        },
        getLineBreakArray: function(a) {
            a = a.replace(/<br\/>/ig, "\x3cbr\x3e").replace(/<br \/>/ig, "\x3cbr\x3e");
            return a.split("\x3cbr\x3e")
        },
        wrapDisclamer: function(a) {
            var b = this.getLineBreakArray(a);
            1 < b.length && (a = "",
            b.forEach(function(b, d) {
                0 < d && (a += "\x3cbr\x3e");
                a += '\x3cspan role\x3d"listitem"\x3e' + b + "\x3c/span\x3e"
            }));
            return a
        },
        wrapListItem: function(a) {
            var b = "";
            this.getLineBreakArray(a).forEach(function(a) {
                b += '\x3cli role\x3d"listitem"\x3e' + a + "\x3c/li\x3e"
            });
            return b
        },
        comparPrice: function(a, d, c) {
            a && "0" != a && 0 != a || !d || "0" == d || 0 == d || (a = d);
            !a || "0" == a || 0 == a || d && "0" != d && 0 != d || (d = a);
            a && "0" != a && 0 != a && d && "0" != d && 0 != d || (c ? (a = VD_MODEL.products[c].price,
            d = VD_MODEL.products[c].promotionPrice) : d = a = "0");
            c = 0 < a - d ? d : d = a;
            return {
                price: a,
                promotionPrice: d,
                sortPrice: c
            }
        },
        getFilterData: function(a, d, f, e, h) {
            var b = []
              , g = {}
              , n = function(a) {
                return Object.keys(a).filter(function(b) {
                    return c.lowerCase(a[b][d], e) === c.lowerCase(f, e)
                })
            };
            "over" == h && (n = function(a) {
                return Object.keys(a).filter(function(b) {
                    return c.lowerCase(a[b][d], e) > c.lowerCase(f, e)
                })
            }
            );
            "under" == h && (n = function(a) {
                return Object.keys(a).filter(function(b) {
                    return c.lowerCase(a[b][d], e) < c.lowerCase(f, e)
                })
            }
            );
            a && (b = n(a, d, f));
            b && (g = c.getProductData(a, b));
            return g
        },
        getCheckData: function(a, d, f) {
            var b = function(a, b, d) {
                return Object.keys(a).filter(function(f) {
                    return a[f][b] && c.lowerCase(a[f][b]) === c.lowerCase(d)
                })
            };
            a && (keys = b(a, d, f));
            return keys ? keys.length : 0
        },
        getTvSize: function(a) {
            var b = []
              , c = []
              , e = function(a) {
                return Object.keys(a).filter(function(d) {
                    if (-1 < Object.keys(a[d]).indexOf("size"))
                        return b.push(a[d].size),
                        a[d].size
                }).sort()
            };
            a && (keys = e(a));
            for (var h in b)
                a = Number(b[h]),
                0 > c.indexOf(a) && c.push(a);
            return b = c.sort(function(a, b) {
                return a - b
            })
        },
        getTvPrice: function(a) {
            var b = []
              , c = function(a) {
                return Object.keys(a).filter(function(d) {
                    if (-1 < Object.keys(a[d]).indexOf("sortPrice"))
                        return b.push(a[d].sortPrice),
                        a[d].sortPrice
                })
            };
            a && (keys = c(a));
            return b.sort(function(a, b) {
                a || (a = 0);
                b || (b = 0);
                if (a && b)
                    return a - b
            })
        },
        getProductData: function(a, d) {
            var b = {}, c;
            for (c in d)
                b[d[c]] = a[d[c]];
            return b
        },
        getNextLevel: function(a, d, e, g) {
            var b = []
              , f = c.getFilterData(a, "size", e);
            delete f[d];
            f = c.getFilterData(f, "sortPrice", g, "number", "over");
            Object.keys(f).sort(function(a, b) {
                return f[a].sortPrice - f[b].sortPrice
            }).forEach(function(a) {
                if (a) {
                    var d = f[a];
                    d.key = a;
                    b.push(d)
                }
            });
            return b
        },
        getBigger: function(a, d, e, g) {
            var b = []
              , f = c.getTvPrice(VD_MODEL.products)
              , k = c.getFilterData(a, "sortPrice", e);
            delete k[d];
            if (1 > Object.keys(k).length) {
                f = c.getTvPrice(VD_MODEL.products);
                d = f.indexOf(e);
                var h = {}
                  , l = {};
                0 < d && (h = c.getFilterData(a, "sortPrice", f[d - 1]));
                d < f.length - 1 && (l = c.getFilterData(a, "sortPrice", f[d + 1]));
                k = $.extend(h, l)
            }
            k = c.getFilterData(k, "size", g, "number", "over");
            f = function(a, b) {
                return k[a].size - k[b].size
            }
            ;
            1 > Object.keys(k).length && (g = VD_FIND_TV.sizeList.indexOf(Number(g)),
            g < VD_FIND_TV.sizeList.length - 1 && (g = VD_FIND_TV.sizeList[g + 1],
            k = c.getFilterData(a, "size", g, "number")),
            k = c.getFilterData(k, "sortPrice", e, "number", "over"),
            f = function(a, b) {
                return k[a].sortPrice - k[b].sortPrice
            }
            );
            Object.keys(k).sort(f).forEach(function(a) {
                if (a) {
                    var d = k[a];
                    d.key = a;
                    b.push(d)
                }
            });
            return b
        },
        getCurrentStep: function() {
            return $(".find-my-tv__header .find-my-tv__header-list li").not(".is-disabled").last().data("step")
        },
        getNextStep: function() {
            return $(".find-my-tv__header .find-my-tv__header-list li").not(".is-disabled").last().next().data("step")
        },
        getStepIdx: function(a) {
            return VD_FIND_TV.steps.indexOf(a) || 0
        },
        getMytvProduct: function(a) {
            var b = [];
            a && "undefined" != typeof a && (b = Object.keys(a).sort(function(b, d) {
                return a[b].sortPrice - a[d].sortPrice
            }).map(function(b) {
                return a[b]
            }));
            return b
        },
        getModelcodes: function(a, d, c) {
            d && (a += "," + d);
            c && (a += "," + c);
            return a
        },
        goMytv: function() {
            var b = VD_FIND_TV.currentStep;
            VD_FIND_TV.prevtStep = b;
            VD_FIND_TV.currentStep = this.getCurrentStep();
            "color" == b && (VD_FIND_TV.currentStep = "color",
            a.size.addClass("is-serif"));
            this.getSelectItem();
            this.setProducts();
            VD_FIND_TV.currentStep = "mytv";
            p[VD_FIND_TV.currentStep]();
            this.activeStep()
        },
        goNext: function() {
            var b = VD_FIND_TV.currentStep;
            VD_FIND_TV.currentStep = this.getCurrentStep();
            VD_FIND_TV.prevtStep = b;
            "color" == b && (VD_FIND_TV.currentStep = "color",
            a.size.addClass("is-serif"));
            this.getSelectItem();
            this.setProducts();
            "passion" == VD_FIND_TV.currentStep && this.setDefaultData();
            "style" == VD_FIND_TV.currentStep && "iconic" == VD_FIND_TV.selected.style.toLowerCase() && 0 > VD_FIND_TV.steps.indexOf("color") ? VD_FIND_TV.steps.splice(VD_FIND_TV.steps.indexOf("style") + 1, 0, "color") : "style" == VD_FIND_TV.currentStep && "iconic" != VD_FIND_TV.selected.style.toLowerCase() && -1 < VD_FIND_TV.steps.indexOf("color") && VD_FIND_TV.steps.splice(VD_FIND_TV.steps.indexOf("color"), 1);
            var d = VD_FIND_TV.steps[VD_FIND_TV.steps.indexOf(VD_FIND_TV.currentStep) + 1];
            "room" == b && (d = "passion");
            !VD_FIND_TV.selected[d] && 0 > VD_FIND_TV.activeSteps.indexOf(d) && ("sound" == d || "smart" == d ? "" != VD_FIND_TV.selected[d] && "undefined" == typeof VD_FIND_TV.selected[d] && (a[d].find(".find-my-tv__wish-disclaimer").hide(),
            p[d]()) : (a[d].find(".find-my-tv__wish-disclaimer").hide(),
            p[d]()));
            "mytv" == d ? (b = c.getMytvProduct(VD_FIND_TV.Tvs),
            b = 0 < b.length ? b[0].sku : "",
            a[d].find(".find-my-tv__wish-disclaimer").hide(),
            p[d](b),
            b = "" != b ? "/" + b : "",
            $(".find-my-tv__bottom-cta .step-next").attr("href", "room" != d ? "#/" + d + b : "#")) : $(".find-my-tv__bottom-cta .step-next").attr("href", "room" != d ? "#/" + d : "#");
            VD_FIND_TV.currentStep = d;
            0 > VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.currentStep) && VD_FIND_TV.activeSteps.push(VD_FIND_TV.currentStep);
            this.setProducts();
            this.activeStep();
            this.bindClickEvent();
            1 == VD_FIND_TV.defaultOpt.skipStyle && ("style" == VD_FIND_TV.currentStep && a.bottom.nextBtn.click(),
            $('[data-step\x3d"style"]').addClass("is-disabled"))
        },
        goPrev: function() {
            var b = VD_FIND_TV.currentStep;
            VD_FIND_TV.currentStep = this.getCurrentStep();
            var d = this.getStepIdx(VD_FIND_TV.currentStep);
            VD_FIND_TV.prevtStep = 2 < d ? VD_FIND_TV.steps[d - 2] : VD_FIND_TV.steps[0];
            VD_FIND_TV.currentStep = "color" == b ? "style" : VD_FIND_TV.steps[d - 1];
            $(".find-my-tv__bottom-cta .step-prev").attr("href", "room" != VD_FIND_TV.currentStep ? "#/" + VD_FIND_TV.currentStep : "#");
            this.setProducts();
            this.activeStep();
            1 == VD_FIND_TV.defaultOpt.skipStyle && ("style" == VD_FIND_TV.currentStep && a.bottom.prevBtn.click(),
            $('[data-step\x3d"style"]').addClass("is-disabled"))
        },
        goStep: function() {
            $(".find-my-tv__bottom-cta .step-prev").attr("href", "room" != VD_FIND_TV.currentStep ? "#/" + VD_FIND_TV.currentStep : "#");
            this.setProducts();
            this.activeStep();
            1 == VD_FIND_TV.defaultOpt.skipStyle && ("style" == VD_FIND_TV.currentStep && a.bottom.prevBtn.click(),
            $('[data-step\x3d"style"]').addClass("is-disabled"))
        },
        getSelectItem: function() {
            currentStep = VD_FIND_TV.currentStep;
            "room" == currentStep && (selectItem = a.room.find(".find-my-tv__room-tab--list li.is-active a"));
            "passion" == currentStep && (selectItem = a.passion.find(".find-my-tv__passion-cont input:checked"));
            "size" == currentStep && (selectItem = a.size.find(".find-my-tv__controll--bar-line input:checked"));
            "picture" == currentStep && (selectItem = a.picture.find(".find-my-tv__controll--bar-line input:checked"));
            "style" == currentStep && (selectItem = a.style.find(".find-my-tv__style-radio--item input:checked"));
            "color" == currentStep && (selectItem = a.color.find(".find-my-tv__color-radio input:checked"));
            "sound" == currentStep && (selectItem = a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input:checked"));
            "smart" == currentStep && (selectItem = a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input:checked"));
            if ("picture" == currentStep) {
                a.picture.find(".find-my-tv__controll--bar--one").is(":visible") && (selectItem = a.picture.find(".find-my-tv__controll--bar--one input"));
                VD_FIND_TV.selected[currentStep] = {
                    resolution: $(selectItem).data(currentStep),
                    feature: []
                };
                var b = [];
                a.picture.find(".find-my-tv__option input:checked").each(function(a) {
                    b.push($(this).data("feature"))
                });
                VD_FIND_TV.selected[currentStep].feature = 0 >= b.length ? "" : b
            } else if ("sound" == currentStep || "smart" == currentStep)
                b = [],
                $(selectItem).each(function(a) {
                    b.push($(selectItem[a]).data(currentStep))
                }),
                VD_FIND_TV.selected[currentStep] = 0 >= b.length ? "" : b;
            else {
                if ("style" == currentStep && "design" == VD_FIND_TV.selected.passion) {
                    var d = $(selectItem).data("img").split("'").join('"');
                    VD_FIND_TV.defaultOpt.sizeStageTVImage = JSON.parse(d)
                }
                "size" == currentStep && a.size.find(".find-my-tv__controll--one").is(":visible") && (selectItem = a.size.find(".find-my-tv__controll--one input"));
                VD_FIND_TV.selected[currentStep] = "size" == currentStep ? $(selectItem).data(currentStep + "-class") : $(selectItem).data(currentStep)
            }
        },
        setProducts: function(b, d) {
            _this = this;
            currentStep = VD_FIND_TV.currentStep;
            "room" == currentStep && (VD_FIND_TV.product.room = VD_MODEL.products);
            var c = b ? b : VD_FIND_TV.selected[currentStep];
            "picture" == currentStep && (c = b && b.resolution ? b.resolution : VD_FIND_TV.selected[currentStep] && VD_FIND_TV.selected[currentStep].resolution ? VD_FIND_TV.selected[currentStep].resolution : "");
            c || VD_FIND_TV.selected[currentStep] || ("passion" == currentStep && (c = a.passion.find(".find-my-tv__passion-cont input:checked").data(currentStep) || "all"),
            "size" == currentStep && (c = a.size.find(".find-my-tv__controll--bar-line input:checked").data(currentStep + "-class") || VD_FIND_TV.defaultOpt.selectSize || VD_FIND_TV.defaultOpt.defaultSize || ""),
            "picture" == currentStep && (c = a.picture.find(".find-my-tv__controll--bar-line input:checked").data(currentStep) || VD_FIND_TV.defaultOpt.defaultResolution || ""),
            "style" == currentStep && (c = a.style.find(".find-my-tv__style-radio--item input:checked").data(currentStep) || VD_FIND_TV.defaultOpt.defaultStyle || ""),
            "color" == currentStep && (c = a.color.find(".find-my-tv__color-radio input:checked").data(currentStep) || VD_FIND_TV.defaultOpt.defaultColor || ""));
            var e = "room" == currentStep ? VD_FIND_TV.product.room : VD_FIND_TV.product[VD_FIND_TV.prevtStep];
            VD_FIND_TV.Tvs = e;
            "room" == currentStep && "outdoors" == c && (e = _this.getFilterData(e, "waterProof", "true"));
            "size" == currentStep && (e = _this.getFilterData(e, "size", c.toString()));
            if ("picture" == currentStep) {
                e = _this.getFilterData(e, "resolution", c.toString());
                var h = []
                  , l = [];
                a.picture.find(".find-my-tv__option input:checked").each(function(a) {
                    h.push($(this).data("feature"))
                });
                l = b && b.feature ? b.feature : VD_FIND_TV.selected[currentStep] && VD_FIND_TV.selected[currentStep].feature ? VD_FIND_TV.selected[currentStep].feature : h;
                l.forEach(function(a) {
                    e = _this.getFilterData(e, a, "true")
                })
            }
            "style" == currentStep && (e = _this.getFilterData(VD_FIND_TV.Tvs, "style", c));
            if ("sound" == currentStep || "smart" == currentStep)
                "sound" == currentStep && (selectItem = a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input:checked")),
                "smart" == currentStep && (selectItem = a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input:checked")),
                h = [],
                $(selectItem).each(function(a) {
                    h.push($(selectItem[a]).data(currentStep))
                }),
                (c = c ? c : 0 >= h.length ? "" : h) && ("string" == typeof c ? e = _this.getFilterData(e, c, "true") : c.forEach(function(a) {
                    e = _this.getFilterData(e, a, "true")
                }));
            "color" == currentStep && (e = _this.getFilterData(e, "color", c));
            VD_FIND_TV.Tvs = e;
            VD_FIND_TV.product[currentStep] = e;
            VD_FIND_TV.TvsCount = e ? Object.keys(e).length : 0;
            "sound" != currentStep && "smart" != currentStep || _this.disabledCardItem(e, c, currentStep);
            d && _this.updateBottom(b)
        },
        disabledCardItem: function(b, d, e) {
            function f(b, d, c) {
                if ("smart" === b) {
                    var e = a.smart.find('.find-my-tv__smarttv-item[data-smart\x3d"' + d + '"]');
                    b = e.find("img");
                    d = e.find(".find-my-tv__smarttv-item--title");
                    var f = e.find(".scrollbar__contents");
                    var k = e.find(".find-my-tv__smarttv-item--checked");
                    e = e.find(".is-disabled-select")
                } else
                    e = a.sound.find('.find-my-tv__sound-item[data-sound\x3d"' + d + '"]'),
                    b = e.find("img"),
                    d = e.find(".find-my-tv__sound-item--title"),
                    f = e.find(".scrollbar__contents"),
                    k = e.find(".find-my-tv__sound-item--checked"),
                    e = e.find(".is-disabled-select");
                "N" === c ? (b.addClass("is-disabled-select"),
                d.addClass("is-disabled-select"),
                f.addClass("is-disabled-select"),
                k.addClass("is-disabled-select")) : e.removeClass("is-disabled-select")
            }
            var h = [];
            "smart" == e && a.smart.find(".find-my-tv__smarttv-item--checked").find("input").filter(function() {
                if (!$(this).prop("checked"))
                    return h.push($(this).data("smart"))
            });
            "sound" == e && a.sound.find(".find-my-tv__sound-item--checked").find("input").filter(function() {
                if (!$(this).prop("checked"))
                    return h.push($(this).data("sound"))
            });
            if ("string" == typeof findValue) {
                var l = [];
                l.push(findValue);
                findValue = l
            }
            for (var k in h) {
                l = d.concat(h[k]);
                var m = $.extend({}, b), p;
                for (p in l) {
                    var q = l[p];
                    m = c.getFilterData(m, q, "true");
                    if (h[k] == q) {
                        var t = "N";
                        0 >= Object.keys(m).length || (t = "Y");
                        "smart" == e && a.smart.find('.find-my-tv__smarttv-item input[data-smart\x3d"' + q + '"]').prop("checked", !1);
                        "sound" == e && a.sound.find('.find-my-tv__sound-item input[data-sound\x3d"' + q + '"]').prop("checked", !1);
                        f(e, q, t)
                    }
                }
            }
            window.sg.components.findMyTv.reInitIsDisabled()
        },
        activeStep: function() {
            currentStep = VD_FIND_TV.currentStep;
            var a = $('.find-my-tv__header-list li[data-step\x3d"' + ("color" == currentStep ? "style" : currentStep) + '"]').index();
            "color" == currentStep ? (this.updateBottom(),
            window.sg.components.findMyTv.activeStep("color")) : ($(".find-my-tv__color").removeClass("is-active"),
            window.sg.components.findMyTv.activeStep(a),
            this.updateBottom());
            "mytv" == currentStep && window.sg.components.findMyTv.reInitMyTvSwpier();
            p.taggingTabBar();
            p.taggingBottom();
            "sound" != currentStep && "smart" != currentStep || setTimeout(p.taggingIndication, 500)
        },
        activeRoom: function(b) {
            var d = a.room.find('.find-my-tv__room-tab--list li a[data-room\x3d"' + b + '"]').parents().index()
              , c = a.room.find('.find-my-tv__room-tab--list li a[data-room\x3d"' + b + '"]').data("color-before")
              , e = a.room.find('.find-my-tv__room-tab--list li a[data-room\x3d"' + b + '"]').data("color-after");
            b = a.room.find('.find-my-tv__room-tab--list li a[data-room\x3d"' + b + '"]').data("headline-class");
            window.sg.components.findMyTv.roomActiveTab(d);
            a.room.find(".find-my-tv__room-tab--list li a").removeClass("cta--black").removeClass("cta--white").addClass(c);
            a.room.find(".find-my-tv__room-tab--list li.is-active a").removeClass("cta--black").removeClass("cta--white").addClass(e);
            a.room.find(".find-my-tv__room-tab .find-my-tv__room-tab--title").removeClass("tit-black").removeClass("tit-white").addClass(b)
        },
        bindClickEvent: function(b) {
            var d = this;
            b = b || VD_FIND_TV.currentStep;
            var c = {
                room: a.room.find(".find-my-tv__room-tab--list li a"),
                passion: a.passion.find(".find-my-tv__passion-cont input"),
                size: a.size.find(".find-my-tv__controll--bar-line input"),
                picture: a.picture.find(".find-my-tv__controll--bar-line input"),
                style: a.style.find('.find-my-tv__style-radio--item input[type\x3d"radio"]'),
                color: a.color.find(".find-my-tv__color-radio input"),
                sound: a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input"),
                smart: a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input")
            };
            if ("picture" == b)
                a.picture.find(".find-my-tv__option input").off().on("change", function() {
                    var b = this
                      , c = VD_FIND_TV.currentStep
                      , e = {
                        resolution: a.picture.find(".find-my-tv__controll--bar-line input:checked").data(c),
                        feature: []
                    }
                      , f = [];
                    $(this);
                    a.picture.find(".find-my-tv__option input:checked").each(function(a) {
                        f.push($(this).data("feature"))
                    });
                    e.feature = f;
                    !VD_FIND_TV.selected[c] && "" != VD_FIND_TV.selected[c] || e.feature == VD_FIND_TV.selected[c].feature ? "undefined" == typeof VD_FIND_TV.selected[c] && d.setProducts(e, !0) : ($(".find-my-tv__popup__subscrption").text(Granite.I18n.get("vd.hmc.popup.subscrption", VD_FIND_TV.stepInfo[c])),
                    window.sg.components.findMyTv.openModal("#modal"),
                    $(".js-popup-cancel, #modal .layer-popup__close").off().click(function() {
                        $(b).prop("checked", !$(b).prop("checked"));
                        window.sg.components.findMyTv.closeModal("#modal")
                    }),
                    $(".js-popup-accept").off().click(function() {
                        window.sg.components.findMyTv.closeModal("#modal");
                        VD_FIND_TV.selected[c].feature = e.feature;
                        for (var b = VD_FIND_TV.steps.indexOf(c); b < VD_FIND_TV.steps.length; b++)
                            delete VD_FIND_TV.selected[VD_FIND_TV.steps[b]],
                            delete VD_FIND_TV.product[VD_FIND_TV.steps[b]],
                            "passion" == VD_FIND_TV.steps[b] && (VD_FIND_TV.defaultOpt = {}),
                            "color" == VD_FIND_TV.steps[b] && a.size.removeClass("is-serif"),
                            -1 < VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.steps[b]) && VD_FIND_TV.activeSteps.splice(VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.steps[b]), VD_FIND_TV.activeSteps.length - VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.steps[b]));
                        0 > VD_FIND_TV.activeSteps.indexOf(c) && VD_FIND_TV.activeSteps.push(c);
                        d.setProducts(e, !0)
                    }))
                });
            var e = "change";
            if ("room" == b || "style" == b || "color" == b)
                e = "click";
            $(c[b]).off().on(e, function(b) {
                var e = this
                  , f = VD_FIND_TV.currentStep
                  , g = "size" == f ? $(this).data(f + "-class") : $(this).data(f);
                if ("size" == f) {
                    var h = $(this).data("ar-href") || ""
                      , l = $(this).data("size-class") || VD_FIND_TV.defaultOpt.defaultSize;
                    h = "undefined" == h ? "" : h;
                    $(".find-my-tv__controll--ar a, .find-my-tv__controll--ar strong").removeClass("hidden");
                    $(".find-my-tv__layer-popup.type-ar .ar-popup-text").text(Granite.I18n.get("vd.hmc.size.arpopup.desc", l));
                    "" != h && ($(".find-my-tv__controll--ar a").attr("data-ar-href", h),
                    $(".find-my-tv__layer-popup.type-ar .qr-code").data("qrcode", h),
                    window.sg.components.findMyTv.setArCode())
                }
                var n = [];
                "sound" == f || "smart" == f ? (h = $(this),
                "sound" == f && (h = a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input:checked")),
                "smart" == f && (h = a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input:checked")),
                h.filter(":checked").each(function(a) {
                    n.push($(this).data(f))
                }),
                g = n) : "picture" == f && (g = $(this).data(f),
                a.picture.find(".find-my-tv__option input:checked").each(function(a) {
                    n.push($(this).data("feature"))
                }));
                var m = VD_FIND_TV.selected[f];
                "picture" == f && (m = VD_FIND_TV.selected[f] && VD_FIND_TV.selected[f].resolution ? VD_FIND_TV.selected[f].resolution : "");
                if ((VD_FIND_TV.selected[f] || "" == VD_FIND_TV.selected[f]) && g != m)
                    $(".find-my-tv__popup__subscrption").text(Granite.I18n.get("vd.hmc.popup.subscrption", VD_FIND_TV.stepInfo[f])),
                    "size" != f && "style" != f && "color" != f || b.preventDefault(),
                    window.sg.components.findMyTv.openModal("#modal"),
                    $(".js-popup-cancel, #modal .layer-popup__close").off().click(function() {
                        window.sg.components.findMyTv.closeModal("#modal");
                        if ("" != m) {
                            "room" == f && d.activeRoom(VD_FIND_TV.selected[f]);
                            "size" == f && ($(c[f]).filter("[data-" + f + '-class\x3d"' + VD_FIND_TV.selected[f] + '"]').prop("checked", !0).change(),
                            q(q('.find-my-tv__size .find-my-tv__controll--bar-line--select input[type\x3d"radio"][data-size-class\x3d"' + VD_FIND_TV.selected[f] + '"]').target[0]).trigger("change"),
                            q('.find-my-tv__size .find-my-tv__controll--bar-line--select input[type\x3d"radio"][data-size-class\x3d"' + VD_FIND_TV.selected[f] + '"]').target[0].checked = !0,
                            $(c[f]).filter("[data-" + f + '-class\x3d"' + VD_FIND_TV.selected[f] + '"]').focus());
                            "picture" == f && ($(c[f]).filter("[data-" + f + '\x3d"' + VD_FIND_TV.selected[f].resolution + '"]').prop("checked", !0).change(),
                            q(q('.find-my-tv__picture .find-my-tv__controll--bar-line--select input[type\x3d"radio"][data-picture\x3d"' + VD_FIND_TV.selected[f].resolution + '"]').target[0]).trigger("change"),
                            q('.find-my-tv__picture .find-my-tv__controll--bar-line--select input[type\x3d"radio"][data-picture\x3d"' + VD_FIND_TV.selected[f].resolution + '"]').target[0].checked = !0,
                            $(c[f]).filter("[data-" + f + '\x3d"' + VD_FIND_TV.selected[f].resolution + '"]').focus());
                            if ("sound" == f || "smart" == f)
                                $(e),
                                "sound" == f && a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input:checked"),
                                "smart" == f && a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input:checked");
                            "color" == f && (a.color.find(".find-my-tv__color-image--item").removeClass("is-active"),
                            a.color.find('.find-my-tv__color-image--item[data-color\x3d"' + VD_FIND_TV.selected[f].toLowerCase() + '"]').addClass("is-active"),
                            q(q('.find-my-tv__color-radio--item input[type\x3d"radio"][data-color\x3d"' + VD_FIND_TV.selected[f] + '"]').target[0]).trigger("change"),
                            q('.find-my-tv__color-radio--item input[type\x3d"radio"][data-color\x3d"' + VD_FIND_TV.selected[f] + '"]').target[0].checked = !0);
                            "style" == f && (q(q('.find-my-tv__style-radio--item input[type\x3d"radio"][data-style\x3d"' + VD_FIND_TV.selected[f] + '"]').target[0]).trigger("change"),
                            q('.find-my-tv__style-radio--item input[type\x3d"radio"][data-style\x3d"' + VD_FIND_TV.selected[f] + '"]').target[0].checked = !0);
                            "size" != f && "picture" != f && $(e).prop("checked", !$(e).prop("checked"));
                            "size" != f && "picture" != f && ($(c[f]).filter("[data-" + f + '\x3d"' + VD_FIND_TV.selected[f] + '"]').prop("checked", !0).change(),
                            $(c[f]).filter("[data-" + f + '\x3d"' + VD_FIND_TV.selected[f] + '"]').focus())
                        } else
                            $(e).prop("checked", !$(e).prop("checked"))
                    }),
                    $(".js-popup-accept").off().click(function() {
                        window.sg.components.findMyTv.closeModal("#modal");
                        VD_FIND_TV.selected[f] = g;
                        "room" == f && d.activeRoom(g);
                        "passion" != f && "style" != f || p.sizeTvImg(f, g);
                        "size" == f && (VD_FIND_TV.defaultOpt.selectSize = g);
                        if ("sound" == f || "smart" == f)
                            $(e),
                            "sound" == f && a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input:checked"),
                            "smart" == f && a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input:checked");
                        "style" == f && (q(q('.find-my-tv__style-radio--item input[type\x3d"radio"][data-style\x3d"' + g + '"]').target[0]).trigger("change"),
                        q('.find-my-tv__style-radio--item input[type\x3d"radio"][data-style\x3d"' + g + '"]').target[0].checked = !0);
                        "color" == f && (q(q('.find-my-tv__color-radio--item input[type\x3d"radio"][data-color\x3d"' + g + '"]').target[0]).trigger("change"),
                        q('.find-my-tv__color-radio--item input[type\x3d"radio"][data-color\x3d"' + g + '"]').target[0].checked = !0,
                        -1 < g.toLowerCase().indexOf("blue") && (VD_FIND_TV.defaultOpt.sizeStageColorTVImage = {
                            desktop: {
                                src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_blue_desktop.png"
                            },
                            mobile: {
                                src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_blue_mobile.png"
                            }
                        }),
                        -1 < g.toLowerCase().indexOf("white") && (VD_FIND_TV.defaultOpt.sizeStageColorTVImage = {
                            desktop: {
                                src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_white_desktop.png"
                            },
                            mobile: {
                                src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_white_mobile.png"
                            }
                        }));
                        for (var b = VD_FIND_TV.steps.indexOf(f); b < VD_FIND_TV.steps.length; b++)
                            delete VD_FIND_TV.selected[VD_FIND_TV.steps[b]],
                            delete VD_FIND_TV.product[VD_FIND_TV.steps[b]],
                            "passion" == VD_FIND_TV.steps[b] && (VD_FIND_TV.defaultOpt = {}),
                            "color" == VD_FIND_TV.steps[b] && a.size.removeClass("is-serif"),
                            -1 < VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.steps[b]) && VD_FIND_TV.activeSteps.splice(VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.steps[b]), VD_FIND_TV.activeSteps.length - VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.steps[b]));
                        0 > VD_FIND_TV.activeSteps.indexOf(f) && VD_FIND_TV.activeSteps.push(f);
                        "room" == f && (VD_FIND_TV.steps = ["room", "passion"]);
                        d.setProducts(g, !0)
                    });
                else if ("undefined" == typeof VD_FIND_TV.selected[f]) {
                    "room" == f && d.activeRoom(g);
                    "size" == f && (VD_FIND_TV.defaultOpt.selectSize = g);
                    "passion" != f && "style" != f || p.sizeTvImg(f, g);
                    if ("sound" == f || "smart" == f)
                        $(e),
                        "sound" == f && a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input:checked"),
                        "smart" == f && a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input:checked");
                    "style" == f && (q(q('.find-my-tv__style-radio--item input[type\x3d"radio"][data-style\x3d"' + g + '"]').target[0]).trigger("change"),
                    q('.find-my-tv__style-radio--item input[type\x3d"radio"][data-style\x3d"' + g + '"]').target[0].checked = !0);
                    "color" == f && (q(q('.find-my-tv__color-radio--item input[type\x3d"radio"][data-color\x3d"' + g + '"]').target[0]).trigger("change"),
                    q('.find-my-tv__color-radio--item input[type\x3d"radio"][data-color\x3d"' + g + '"]').target[0].checked = !0,
                    -1 < g.toLowerCase().indexOf("blue") && (VD_FIND_TV.defaultOpt.sizeStageColorTVImage = {
                        desktop: {
                            src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_blue_desktop.png"
                        },
                        mobile: {
                            src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_blue_mobile.png"
                        }
                    }),
                    -1 < g.toLowerCase().indexOf("white") && (VD_FIND_TV.defaultOpt.sizeStageColorTVImage = {
                        desktop: {
                            src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_white_desktop.png"
                        },
                        mobile: {
                            src: "/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd_size_serif-55_white_mobile.png"
                        }
                    }));
                    d.setProducts(g, !0)
                }
            });
            window.sg.components.findMyTv.reInit()
        },
        setDefaultData: function() {
            var a = this.getFilterData(VD_MODEL.passions, "title", VD_FIND_TV.selected.passion)
              , c = this.getFilterData(VD_MODEL.passions, "title", "all");
            c = c ? c[Object.keys(c)[0]] : {
                pictureStageTVImages: ""
            };
            for (var e in a) {
                var g = a[e];
                VD_FIND_TV.steps = ["room", "passion"];
                g.steps.forEach(function(a) {
                    VD_FIND_TV.steps.push(a.toLowerCase().split("stage").join(""))
                });
                VD_FIND_TV.steps.push("mytv");
                VD_FIND_TV.defaultOpt.defaultSize = g.defaultSize;
                VD_FIND_TV.defaultOpt.recommendedSize = g.recommendedSize;
                VD_FIND_TV.defaultOpt.defaultResolution = g.defaultResolution;
                VD_FIND_TV.defaultOpt.recommendedResolution = g.recommendedResolution;
                VD_FIND_TV.defaultOpt.myTVSubHeadlineByPassion = g.myTVSubHeadlineByPassion || [];
                VD_FIND_TV.defaultOpt.pictureFeaturesByPassion = g.pictureFeaturesByPassion || [];
                VD_FIND_TV.defaultOpt.pictureStageTVImages = "design" == g.title && "" != c.pictureStageTVImages ? c.pictureStageTVImages : g.pictureStageTVImages;
                VD_FIND_TV.defaultOpt.sizeStageTVImage = {
                    src: g.sizeStageTVImage,
                    alt: ""
                };
                VD_FIND_TV.defaultOpt.defaultStyle = g.defaultStyle;
                VD_FIND_TV.defaultOpt.recommendedStyle = g.recommendedStyle;
                VD_FIND_TV.defaultOpt.defaultColor = g.defaultColor;
                VD_FIND_TV.defaultOpt.recommendedColor = g.recommendedColor;
                VD_FIND_TV.defaultOpt.smartFeaturesByPassion = g.smartFeaturesByPassion || [];
                VD_FIND_TV.defaultOpt.soundFeaturesByPassion = g.soundFeaturesByPassion || []
            }
            a = "all" != VD_FIND_TV.selected.passion ? Granite.I18n.get("vd.hmc.bottom.passion." + VD_FIND_TV.selected.passion) : " ";
            a = "all" != VD_FIND_TV.selected.passion ? Granite.I18n.get("vd.hmc.labels.recommended", a) : Granite.I18n.get("vd.hmc.labels.recommended.all");
            c = '\x3cimg class\x3d"wish-icon" src\x3d"/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/vd-wish.svg" alt\x3d"' + a + '"\x3e\x3cspan\x3e' + a + "\x3c/span\x3e";
            VD_FIND_TV.defaultOpt.recommendedLabel = a;
            $(".find-my-tv__wish-disclaimer").html(c);
            p.tabBar()
        },
        updateBottom: function(a) {
            a ? this.featureMsg(a) : this.featureMsg();
            a ? this.productCountMsg(a) : this.productCountMsg();
            1 == VD_FIND_TV.TvsCount && "mytv" != VD_FIND_TV.currentStep ? this.ajaxProcutInfo() : this.productPriceMsg();
            this.activeBottom()
        },
        activeBottom: function() {
            currentStep = VD_FIND_TV.currentStep;
            a.bottom.personalizeBtn.addClass("hidden");
            a.bottom.tray.removeClass("hidden");
            a.bottom.mobileOnly.removeAttr("style");
            "room" == currentStep ? (a.bottom.mobileOnly.hide(),
            a.bottom.feature.hide(),
            a.bottom.price.hide(),
            a.bottom.product.hide(),
            a.bottom.productMobile.hide(),
            a.bottom.prevBtn.hide(),
            a.bottom.nextBtn.show(),
            a.bottom.meetTvBtn.hide(),
            a.bottom.againBtn.hide(),
            a.bottom.buyNowBtn.hide(),
            0 < VD_FIND_TV.TvsCount ? a.bottom.nextBtn.removeClass("cta--disabled") : a.bottom.nextBtn.addClass("cta--disabled")) : "mytv" == currentStep ? (a.bottom.title.text(Granite.I18n.get("vd.hmc.labels.checkOutTv")),
            a.bottom.feature.removeAttr("style"),
            a.bottom.price.removeAttr("style"),
            a.bottom.product.hide(),
            a.bottom.productMobile.hide(),
            a.bottom.prevBtn.hide(),
            a.bottom.nextBtn.hide(),
            a.bottom.meetTvBtn.hide(),
            a.bottom.againBtn.show(),
            a.bottom.buyNowBtn.show(),
            a.bottom.nextBtn.removeClass("cta--disabled")) : (a.bottom.title.text(Granite.I18n.get("vd.hmc.labels.lookingTv")),
            a.bottom.feature.removeAttr("style"),
            a.bottom.price.removeAttr("style"),
            a.bottom.product.removeAttr("style"),
            a.bottom.productMobile.removeAttr("style"),
            a.bottom.prevBtn.show(),
            a.bottom.nextBtn.show(),
            a.bottom.meetTvBtn.hide(),
            a.bottom.againBtn.hide(),
            a.bottom.buyNowBtn.hide(),
            a.bottom.nextBtn.removeClass("cta--disabled"),
            "passion" == currentStep ? (a.bottom.tray.removeClass("open"),
            a.bottom.trayWrap.addClass("is-disabled"),
            a.bottom.feature.hide(),
            a.bottom.price.hide(),
            a.bottom.product.hide(),
            a.bottom.productMobile.hide()) : (a.bottom.trayWrap.removeClass("is-disabled"),
            0 == VD_FIND_TV.TvsCount ? (a.bottom.price.hide(),
            a.bottom.product.hide(),
            a.bottom.productMobile.hide(),
            a.bottom.nextBtn.addClass("cta--disabled")) : 1 == VD_FIND_TV.TvsCount && (a.bottom.product.hide(),
            a.bottom.productMobile.hide(),
            a.bottom.nextBtn.hide(),
            a.bottom.meetTvBtn.show(),
            a.bottom.meetTvBtn.attr("href", "#/mytv/" + VD_FIND_TV.Tvs[Object.keys(VD_FIND_TV.Tvs)[0]].sku))))
        },
        featureMsg: function(b, c) {
            _this = this;
            var d = c ? c : VD_FIND_TV.currentStep;
            if ("room" != d) {
                c = b ? b : VD_FIND_TV.selected[d];
                "picture" == d && (c = b && b.resolution ? b.resolution : VD_FIND_TV.selected[d] && VD_FIND_TV.selected[d].resolution ? VD_FIND_TV.selected[d].resolution : b || "");
                b || VD_FIND_TV.selected[d] || ("passion" == d && (c = a.passion.find(".find-my-tv__passion-cont input:checked").data(d) || "all"),
                "size" == d && (c = a.size.find(".find-my-tv__controll--bar-line input:checked").data(d + "-class") || VD_FIND_TV.defaultOpt.selectSize || VD_FIND_TV.defaultOpt.defaultSize || ""),
                "picture" == d && (c = a.picture.find(".find-my-tv__controll--bar-line input:checked").data(d) || VD_FIND_TV.defaultOpt.defaultResolution || ""),
                "style" == d && (c = a.style.find(".find-my-tv__style-radio--item input:checked").data(d) || VD_FIND_TV.defaultOpt.defaultStyle || ""),
                "color" == d && (c = a.color.find(".find-my-tv__color-radio input:checked").data(d) || VD_FIND_TV.defaultOpt.defaultColor || ""));
                "picture" == d && "" != c && (c = a.picture.find('input[data-picture\x3d"' + c.toLowerCase() + '"]').data("picture-title"));
                "passion" == d && (c = Granite.I18n.get("vd.hmc.bottom.passion." + c));
                "style" == d && (c = a.style.find('.find-my-tv__style-radio--item input[data-style\x3d"' + c.toLowerCase() + '"]').data("style-title"));
                "color" == d && (c = VD_FIND_TV.colorMap[c.toLowerCase()]);
                var e = c + " : " + Granite.I18n.get("vd.label.step", VD_FIND_TV.stepInfo[d])
                  , h = Granite.I18n.get("vd.hmc.bottom.featureMsg." + d, [e, c]);
                if ("size" == d || "style" == d) {
                    if ("style" == d) {
                        var l = c ? c[0].toLowerCase() : "";
                        if ("a" == l || "e" == l || "i" == l || "o" == l)
                            h = Granite.I18n.get("vd.hmc.bottom.featureMsg." + d + "2", [e, c])
                    }
                    h = h.replace("{2}", "")
                }
                if ("picture" == d) {
                    var k = []
                      , m = []
                      , p = "";
                    if (b && b.feature)
                        for (i in b.feature)
                            m.push(a.picture.find('.find-my-tv__option input[data-feature\x3d"' + b.feature[i] + '"]').data("feature-title"));
                    else if (VD_FIND_TV.selected[d] && VD_FIND_TV.selected[d].feature)
                        for (i in VD_FIND_TV.selected[d].feature)
                            m.push(a.picture.find('.find-my-tv__option input[data-feature\x3d"' + VD_FIND_TV.selected[d].feature[i] + '"]').data("feature-title"));
                    else
                        a.picture.find(".find-my-tv__option input:checked").each(function(a) {
                            m.push($(this).data("feature-title"))
                        });
                    k = m;
                    k.forEach(function(a, b) {
                        p += '\x3ca href\x3d"#/picture" class\x3d"find-my-tv__bottom-tray--item-link" role\x3d"button" aria-label\x3d"' + a + " : " + Granite.I18n.get("vd.label.step", VD_FIND_TV.stepInfo.picture) + '"\x3e\x3cstrong\x3e' + a + "\x3c/strong\x3e\x3c/a\x3e";
                        1 != k.length && b != k.length - 1 && (p += " " + Granite.I18n.get("vd.hmc.bottom.featureMsg.and") + " ")
                    });
                    p = 0 < k.length ? "\x3cp\x3e" + Granite.I18n.get("vd.hmc.bottom.featureMsg.plus", p) + "\x3c/p\x3e" : "";
                    VD_FIND_TV.featureMsg.size = "";
                    h = Granite.I18n.get("vd.hmc.bottom.featureMsg.size", [VD_FIND_TV.selected.size + " : " + Granite.I18n.get("vd.label.step", VD_FIND_TV.stepInfo.size), VD_FIND_TV.selected.size, Granite.I18n.get("vd.hmc.bottom.featureMsg.picture", [e, c])]) + p
                }
                if ("sound" == d || "smart" == d)
                    b = a[d].find("input"),
                    "sound" == d && (b = a.sound.find(".find-my-tv__sound-cont .find-my-tv__sound-item input:checked")),
                    "smart" == d && (b = a.smart.find(".find-my-tv__smarttv-cont .find-my-tv__smarttv-item input:checked")),
                    k = [],
                    b.filter(":checked").each(function(a) {
                        k.push($(this).data(d))
                    }),
                    c = k,
                    h = !c || c && 0 >= c.length ? "" : Granite.I18n.get("vd.hmc.bottom.featureMsg." + d, Granite.I18n.get("vd.label.step", VD_FIND_TV.stepInfo[d]));
                VD_FIND_TV.featureMsg[d] = "mytv" != d ? h : "";
                b = "";
                c = "room passion size picture style color smart sound mytv".split(" ");
                for (i = 1; i <= c.length - 1; i++)
                    for (j = 1; j <= VD_FIND_TV.steps.indexOf(d); j++)
                        c[i] != VD_FIND_TV.steps[j] || "picture" == d && "size" == c[i] || (b = j == VD_FIND_TV.steps.indexOf(d) ? b + (VD_FIND_TV.featureMsg[c[i]] || "") : VD_FIND_TV.selected[c[i]] ? b + (VD_FIND_TV.featureMsg[c[i]] || "") : b + "");
                a.bottom.feature.html(b);
                a.bottom.feature.find("a").off("click").click(function(a) {
                    v = !0;
                    a = $(this).attr("href").split("#").join("").split("/").join("");
                    a == VD_FIND_TV.currentStep || "style" == a && 1 == VD_FIND_TV.defaultOpt.skipStyle || (VD_FIND_TV.currentStep = a,
                    a = VD_FIND_TV.activeSteps.indexOf(VD_FIND_TV.currentStep) || 0,
                    VD_FIND_TV.prevtStep = 1 < a ? VD_FIND_TV.activeSteps[a - 1] : VD_FIND_TV.activeSteps[0],
                    _this.goStep())
                })
            }
        },
        productCountMsg: function(b) {
            a.bottom.product.find("a").html(Granite.I18n.get("vd.hmc.labels.productCount", VD_FIND_TV.TvsCount) + '\x3csvg class\x3d"icon" focusable\x3d"false" aria-hidden\x3d"true"\x3e\x3cuse xlink:href\x3d"#next-bold" href\x3d"#next-bold"\x3e\x3c/use\x3e\x3c/svg\x3e\x3c/a\x3e');
            a.bottom.productMobile.find("a").html(Granite.I18n.get("vd.hmc.labels.productCount", VD_FIND_TV.TvsCount) + '\x3csvg class\x3d"icon" focusable\x3d"false" aria-hidden\x3d"true"\x3e\x3cuse xlink:href\x3d"#next-bold" href\x3d"#next-bold"\x3e\x3c/use\x3e\x3c/svg\x3e\x3c/a\x3e');
            a.popup.chooseTvDesc.html(Granite.I18n.get("vd.hmc.popup.chooseTv.description", VD_FIND_TV.TvsCount))
        },
        productPriceMsg: function(b, d) {
            var f = c.getMytvProduct(VD_FIND_TV.Tvs)
              , g = "";
            -1 < location.hash.indexOf("#/mytv") && (g = (g = location.hash.split("#/mytv").join("").split("/").join("")) && VD_MODEL.products[g] ? g : "");
            "" == g && (g = 0 < f.length ? f[0].sku : "");
            g = g && VD_MODEL.products[g] ? g : "";
            g = this.comparPrice(b, d, g);
            b = g.price;
            d = g.promotionPrice;
            g = g.sortPrice;
            e = "";
            if (1 == f.length || "mytv" == VD_FIND_TV.currentStep)
                d && "0" != d && 0 != d && 0 < b - d ? (f = currencyComma(b, CURRENCY),
                b = Granite.I18n.get("vd.hmc.bottom.price.save", currencyComma(b - d, CURRENCY)),
                e = Granite.I18n.get("vd.hmc.labels.currentPrice", currencyComma(d, CURRENCY)),
                a.bottom.price.find(".bottom-save del").text(f),
                a.bottom.price.find(".bottom-save span").not(".hidden").text(b),
                a.bottom.price.find(".bottom-save").removeAttr("style")) : (g && "0" != g && 0 != g ? e = Granite.I18n.get("vd.hmc.labels.currentPrice", currencyComma(g, CURRENCY)) : a.bottom.price.find(".bottom-price").html(""),
                a.bottom.price.find(".bottom-save").hide());
            else {
                if (1 < f.length) {
                    d = g || "0";
                    if (!d || null == d || "0" == d || 0 == d)
                        for (b = 1; b < f.length && (!(d = f[b].sortPrice) || null == d || "0" == d || 0 == d); b++)
                            ;
                    e = Granite.I18n.get("vd.hmc.labels.priceRangeFrom", currencyComma(d, CURRENCY))
                } else
                    a.bottom.price.find(".bottom-price").html(""),
                    a.bottom.price.find(".bottom-save del").text(""),
                    a.bottom.price.find(".bottom-save span").not(".hidden").text("");
                a.bottom.price.find(".bottom-save").hide()
            }
            "" != e && a.bottom.price.find(".bottom-price").html(e)
        },
        ajaxProcutInfo: function(a, c, e) {
            a = a ? a : Object.keys(VD_FIND_TV.Tvs).toString();
            G ? N.callNewHybrisProductsInfo(a, c, e) : I ? N.callHyibrisRealTimeProductsInfo(a, c, e) : N.callHybrisProductsInfo(a, c, e)
        },
        setCardPrice: function(a, c, e, g) {
            0 < a - c ? (e.find(g).find(".find-my-tv__card-item--price strong").text(currencyComma(c, CURRENCY)),
            e.find(g).find(".find-my-tv__card-item--save del").text(currencyComma(a, CURRENCY)),
            e.find(g).find(".find-my-tv__card-item--save span").not(".hidden").text(VD_MODEL.mytvStage.saveTxt + " " + currencyComma(a - c, CURRENCY)),
            e.find(g).find(".find-my-tv__card-item--save").removeAttr("style")) : (e.find(g).find(".find-my-tv__card-item--price strong").text(currencyComma(a, CURRENCY)),
            e.find(g).find(".find-my-tv__card-item--save").hide())
        },
        reInit: function() {
            a.bottom.mobileOnly.hide();
            a.bottom.feature.hide();
            a.bottom.price.hide();
            a.bottom.product.hide();
            a.bottom.productMobile.hide();
            a.bottom.prevBtn.hide();
            a.size.removeClass("is-serif");
            VD_FIND_TV.activeSteps = ["room"];
            VD_FIND_TV.currentStep = "room";
            VD_FIND_TV.defaultOpt = {};
            VD_FIND_TV.featureMsg = {};
            VD_FIND_TV.isPersonalizetv = !1;
            VD_FIND_TV.product = {};
            VD_FIND_TV.steps = ["room", "passion"];
            VD_FIND_TV.selected = {};
            VD_FIND_TV.TvsCount = 0;
            VD_FIND_TV.Tvs = VD_MODEL.products;
            var b = a.room.find(".find-my-tv__room-tab--list li a").first().data("room");
            c.activeRoom(b)
        }
    };
    a.bottom.product.click(function(a) {
        a = [];
        VD_FIND_TV.Tvs && "undefined" != typeof VD_FIND_TV.Tvs && (a = Object.keys(VD_FIND_TV.Tvs).sort(function(a, b) {
            return VD_FIND_TV.Tvs[b].sortPrice - VD_FIND_TV.Tvs[a].sortPrice
        }).map(function(a) {
            return VD_FIND_TV.Tvs[a].sku
        }));
        p.cardItemHtml(VD_FIND_TV.Tvs, "", "", "layer", a)
    });
    a.bottom.productMobile.click(function(a) {
        a = [];
        VD_FIND_TV.Tvs && "undefined" != typeof VD_FIND_TV.Tvs && (a = Object.keys(VD_FIND_TV.Tvs).sort(function(a, b) {
            return VD_FIND_TV.Tvs[b].sortPrice - VD_FIND_TV.Tvs[a].sortPrice
        }).map(function(a) {
            return VD_FIND_TV.Tvs[a].sku
        }));
        p.cardItemHtml(VD_FIND_TV.Tvs, "", "", "layer", a)
    });
    a.bottom.prevBtn.click(function(a) {
        v = !0;
        c.goPrev()
    });
    a.bottom.nextBtn.click(function(a) {
        v = !0;
        c.goNext()
    });
    a.bottom.againBtn.click(function(a) {
        v = !0;
        location.hash = "#/room";
        c.reInit();
        c.activeStep()
    });
    a.bottom.meetTvBtn.click(function(a) {
        v = !0;
        c.goMytv()
    });
    a.logo.click(function(a) {
        v = !0;
        location.hash = "#/room";
        c.reInit();
        c.activeStep()
    });
    var v = !1;
    history.pushState(null, null, null);
    if (window.document.documentMode)
        $(window).on("hashchange", l);
    else
        $(window).on("popstate", l);
    $(document).ready(function() {
        findTv.init()
    });
    return {
        init: function() {
            for (var b in VD_MODEL.styleStage.styles) {
                var d = VD_MODEL.styleStage.styles[b];
                "iconic" == d.name.toLowerCase() && (d.sizeStageTVImage = {
                    alt: "Which TV style is right for you?",
                    src: "Style"
                })
            }
            if (VD_MODEL.sizeStage)
                for (var e in VD_MODEL.sizeStage.sizes)
                    b = VD_MODEL.sizeStage.sizes[e],
                    b.iosARUrl = b.iosARUrl.replace("https:", "").replace("http:", "").replace(".glb", "").replace(".usdz", ""),
                    b.androidARUrl = b.androidARUrl.replace("https:", "").replace("http:", "").replace(".glb", "").replace(".usdz", "");
            a.bottom.mobileOnly.hide();
            a.bottom.feature.hide();
            a.bottom.price.hide();
            a.bottom.product.hide();
            a.bottom.productMobile.hide();
            a.bottom.prevBtn.hide();
            a.logo.attr("aria-label", Granite.I18n.get("vd.hmc.title") + " : " + Granite.I18n.get("vd.label.step", VD_FIND_TV.stepInfo[VD_FIND_TV.steps[0]]));
            for (var g in VD_FIND_TV.stepInfo)
                a.tabBar.find('[data-step\x3d"' + g + '"] a').text(VD_FIND_TV.stepInfo[g]);
            for (var l in VD_MODEL.products)
                e = c.comparPrice(VD_MODEL.products[l].price && Number(VD_MODEL.products[l].price) ? VD_MODEL.products[l].price : "0", VD_MODEL.products[l].promotionPrice && Number(VD_MODEL.products[l].promotionPrice) ? VD_MODEL.products[l].promotionPrice : "0"),
                VD_MODEL.products[l].price = e.price,
                VD_MODEL.products[l].promotionPrice = e.promotionPrice,
                VD_MODEL.products[l].sortPrice = e.sortPrice,
                VD_MODEL.products[l].sortPrice || (VD_MODEL.products[l].sortPrice = "0");
            VD_FIND_TV.sizeList = c.getTvSize(VD_MODEL.sizeStage.sizes);
            h();
            p.tabBarEvent();
            c.bindClickEvent("room");
            if ("mobile" === window.sg.common.utils.getCurrentDevice() && -1 < window.location.search.indexOf("ar\x3d") && VD_MODEL.sizeStage) {
                l = window.location.search.split("ar\x3d")[1];
                e = "";
                for (var q in VD_MODEL.sizeStage.sizes)
                    if (g = VD_MODEL.sizeStage.sizes[q],
                    g.size === l) {
                        m || A || C ? e = g.iosARUrl : y && (e = g.androidARUrl);
                        break
                    }
                $(".find-my-tv__controll--ar a").attr("data-ar-href", e);
                $(".find-my-tv__layer-popup.type-ar .qr-code").data("qrcode", e);
                window.sg.components.findMyTv.setArCode();
                document.querySelector(".find-my-tv__controll--ar a").click()
            }
        }
    }
}();
