var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b, _c;
(lb ? "Webkit" : kb ? "Moz" : ib ? "ms" : hb ? "O" : null) + cb(d);
void 0 !== a.style[d] && (c = d);
;
Pc[b] = c;
return c;
function Qc(a, b) {
    var c = Yb(a);
    return c.defaultView &&
        c.defaultView.getComputedStyle &&
        (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
}
function Rc(a, b) {
    return (Qc(a, b) ||
        (a.currentStyle ? a.currentStyle[b] : null) ||
        (a.style && a.style[b]));
}
function Sc(a) {
    try {
        return a.getBoundingClientRect();
    }
    catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
    }
}
function Tc(a) {
    var b = Yb(a), c = new F(0, 0);
    var d = b ? Yb(b) : document;
    d = !ib || 9 <= Number(vb) || $b(Wb(d).g) ? d.documentElement : d.body;
    if (a == d)
        return c;
    a = Sc(a);
    d = Wb(b).g;
    b = d.scrollingElement
        ? d.scrollingElement
        : !lb && $b(d)
            ? d.documentElement
            : d.body || d.documentElement;
    d = d.parentWindow || d.defaultView;
    b =
        ib && sb("10") && d.pageYOffset != b.scrollTop
            ? new F(b.scrollLeft, b.scrollTop)
            : new F(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
}
function Uc(a) {
    if (1 == a.nodeType)
        return (a = Sc(a)), new F(a.left, a.top);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new F(a.clientX, a.clientY);
}
function Vc(a, b) {
    if (b instanceof Vb) {
        var c = b.height;
        b = b.width;
    }
    else
        throw Error("missing height argument");
    a.style.width = Wc(b, !0);
    a.style.height = Wc(c, !0);
}
function Wc(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a;
}
function Xc(a) {
    var b = Yc;
    if ("none" != Rc(a, "display"))
        return b(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
}
function Yc(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = lb && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect
        ? ((a = Sc(a)), new Vb(a.right - a.left, a.bottom - a.top))
        : new Vb(b, c);
}
function Zc(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    if (c)
        if (/^\d+px?$/.test(c))
            a = parseInt(c, 10);
        else {
            b = a.style.left;
            var d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = c;
            c = a.style.pixelLeft;
            a.style.left = b;
            a.runtimeStyle.left = d;
            a = +c;
        }
    else
        a = 0;
    return a;
}
function $c(a, b) {
    if (ib) {
        var c = Zc(a, b + "Left"), d = Zc(a, b + "Right"), e = Zc(a, b + "Top");
        a = Zc(a, b + "Bottom");
        return new J(e, d, a, c);
    }
    c = Qc(a, b + "Left");
    d = Qc(a, b + "Right");
    e = Qc(a, b + "Top");
    a = Qc(a, b + "Bottom");
    return new J(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
}
var ad = function (a, b) {
    if (a)
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) &&
                b.call(void 0, a[c], c, a);
}, bd = function (a) { return "number" === typeof a && 0 < a; }, cd = !!window.google_async_iframe_id;
var dd = (cd && window.parent) || window;
var ed = function () {
    if (cd && !ic(dd)) {
        var a = "." + Lb.domain;
        try {
            for (; 2 < a.split(".").length && !ic(dd);)
                (Lb.domain = a = a.substr(a.indexOf(".") + 1)),
                    (dd = window.parent);
        }
        catch (b) { }
        ic(dd) || (dd = window);
    }
    return dd;
}, fd = /(^| )adsbygoogle($| )/, gd = function (a) {
    a = a.top;
    return ic(a) ? a : null;
};
var id = function (a, b) {
    if (!a)
        return !1;
    a = a.hash;
    if (!a || !a.indexOf)
        return !1;
    if (-1 != a.indexOf(b))
        return !0;
    b = hd(b);
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
}, hd = function (a) {
    var b = "";
    ad(a.split("_"), function (c) {
        b += c.substr(0, 2);
    });
    return b;
}, jd = function (a, b) {
    switch (a) {
        case 1:
            return id(b, "google_ia_debug");
        case 2:
            return id(b, "google_bottom_anchor_debug");
        case 3:
            return id(b, "google_anchor_debug") || id(b, "googleads");
        case 4:
            return id(b, "google_scr_debug");
        case 6:
            return id(b, "google_responsive_slot_debug");
    }
    return !1;
};
var ld = /** @class */ (function (_super) {
    __extends(ld, _super);
    function ld(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, kd);
        return _this;
    }
    return ld;
}(zb)), kd = [4];
var md = /** @class */ (function (_super) {
    __extends(md, _super);
    function md(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, null);
        return _this;
    }
    return md;
}(zb));
var od = /** @class */ (function (_super) {
    __extends(od, _super);
    function od(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, nd);
        return _this;
    }
    return od;
}(zb)), nd = [3, 4];
var pd = /** @class */ (function (_super) {
    __extends(pd, _super);
    function pd(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, null);
        return _this;
    }
    return pd;
}(zb));
var qd = /** @class */ (function (_super) {
    __extends(qd, _super);
    function qd(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, null);
        return _this;
    }
    return qd;
}(zb));
var sd = /** @class */ (function (_super) {
    __extends(sd, _super);
    function sd(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, rd);
        return _this;
    }
    sd.prototype.ea = function () {
        return Gb(this, ld, 1);
    };
    sd.prototype.g = function () {
        return y(this, 2);
    };
    return sd;
}(zb)), rd = [6, 7, 9, 10, 11];
var td = /** @class */ (function (_super) {
    __extends(td, _super);
    function td(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, null);
        return _this;
    }
    return td;
}(zb));
var ud = function (a) { return !!a; };
function vd() {
    var a = wd;
    if (!(xd || ud)(a))
        throw Error(String(a));
}
var yd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
var zd = /** @class */ (function () {
    function zd(a, b) {
        this.g = a;
        this.j = b;
    }
    return zd;
}()), Ad = /** @class */ (function () {
    function Ad(a, b) {
        this.url = a;
        this.Ab = !!b;
        this.depth = null;
    }
    return Ad;
}());
function Bd(a, b) {
    var c = {};
    c[a] = b;
    return [c];
}
function Cd(a, b, c, d, e) {
    var f = [];
    lc(a, function (g, h) {
        (g = Dd(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
}
function Dd(a, b, c, d, e) {
    if (null == a)
        return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
        if (((d = d || 0), d < c.length)) {
            var f = [];
            for (var g = 0; g < a.length; g++)
                f.push(Dd(a[g], b, c, d + 1, e));
            return f.join(c[d]);
        }
    }
    else if ("object" == typeof a)
        return ((e = e || 0), 2 > e ? encodeURIComponent(Cd(a, b, c, d, e + 1)) : "...");
    return encodeURIComponent(String(a));
}
function Ed(a) {
    var b = 1;
    for (var c in a.j)
        b = c.length > b ? c.length : b;
    return 3997 - b - a.l.length - 1;
}
function Fd(a, b, c) {
    b = b + "//pagead2.googlesyndication.com" + c;
    var d = Ed(a) - c.length;
    if (0 > d)
        return "";
    a.g.sort(function (f, g) {
        return f - g;
    });
    c = null;
    var e = "";
    for (var f = 0; f < a.g.length; f++) {
        var g = a.g[f], h = a.j[g];
        for (var l = 0; l < h.length; l++) {
            if (!d) {
                c = null == c ? g : c;
                break;
            }
            var k = Cd(h[l], a.l, ",$");
            if (k) {
                k = e + k;
                if (d >= k.length) {
                    d -= k.length;
                    b += k;
                    e = a.l;
                    break;
                }
                c = null == c ? g : c;
            }
        }
    }
    a = "";
    null != c && (a = e + "trn=" + c);
    return b + a;
}
var Gd = /** @class */ (function () {
    function Gd() {
        this.l = "&";
        this.j = {};
        this.m = 0;
        this.g = [];
    }
    return Gd;
}());
function Hd(a, b, c, d, e, f) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
        try {
            var g_1;
            c instanceof Gd
                ? (g_1 = c)
                : ((g_1 = new Gd()),
                    lc(c, function (l, k) {
                        var n = g_1, p = n.m++;
                        l = Bd(k, l);
                        n.g.push(p);
                        n.j[p] = l;
                    }));
            var h = Fd(g_1, a.j, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Dc(h, f) : Dc(h));
        }
        catch (g) { }
}
var Id = /** @class */ (function () {
    function Id() {
        this.j = "http:" === Mb.location.protocol ? "http:" : "https:";
        this.g = Math.random();
    }
    return Id;
}());
var Jd = null;
var Kd = function () {
    var a = m.performance;
    return a && a.now && a.timing
        ? Math.floor(a.now() + a.timing.navigationStart)
        : Date.now();
}, Ld = function () {
    var a = m.performance;
    return a && a.now ? a.now() : null;
};
var Md = /** @class */ (function () {
    function Md(a, b) {
        var c = Ld() || Kd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0;
    }
    return Md;
}());
var Nd = m.performance, Od = !!(Nd && Nd.mark && Nd.measure && Nd.clearMarks), Pd = Ba(function () {
    var a;
    if ((a = Od)) {
        var b;
        if (null === Jd) {
            Jd = "";
            try {
                a = "";
                try {
                    a = m.top.location.hash;
                }
                catch (c) {
                    a = m.location.hash;
                }
                a && (Jd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
            }
            catch (c) { }
        }
        b = Jd;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
    }
    return a;
});
function Qd(a) {
    a &&
        Nd &&
        Pd() &&
        (Nd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
            Nd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
}
var Rd = /** @class */ (function () {
    function Rd() {
        var a = Sd;
        this.events = [];
        this.j = a || m;
        var b = null;
        a &&
            ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
                (this.events = a.google_js_reporting_queue),
                (b = a.google_measure_js_timing));
        this.g = Pd() || (null != b ? b : 1 > Math.random());
    }
    Rd.prototype.start = function (a, b) {
        if (!this.g)
            return null;
        a = new Md(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Nd && Pd() && Nd.mark(b);
        return a;
    };
    Rd.prototype.end = function (a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (Ld() || Kd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Nd && Pd() && Nd.mark(b);
            !this.g || 2048 < this.events.length || this.events.push(a);
        }
    };
    return Rd;
}());
function Td(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
        a = a.stack;
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            var c = void 0;
            for (; a != c;)
                (c = a),
                    (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
            b = a.replace(/\n */g, "\n");
        }
        catch (c) { }
    }
    return b;
}
function Ud(a, b, c, d) {
    var e, f;
    try {
        a.g && a.g.g
            ? ((f = a.g.start(b.toString(), 3)), (e = c()), a.g.end(f))
            : (e = c());
    }
    catch (g) {
        c = !0;
        try {
            Qd(f), (c = a.m(b, new Nb(g, { message: Td(g) }), void 0, d));
        }
        catch (h) {
            a.lb(217, h);
        }
        if (c) {
            var h = void 0, l = void 0;
            null == (h = window.console) || null == (l = h.error) || l.call(h, g);
        }
        else
            throw g;
    }
    return e;
}
function L(a, b, c, d, e) {
    return function () {
        var f = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            f[_i] = arguments[_i];
        }
        return Ud(a, b, function () { return c.apply(d, f); }, e);
    };
}
var Vd = /** @class */ (function () {
    function Vd() {
        var a = Wd;
        this.l = Xd;
        this.Ra = null;
        this.m = this.lb;
        this.g = void 0 === a ? null : a;
        this.j = !1;
    }
    Vd.prototype.lb = function (a, b, c, d, e) {
        e = e || "jserror";
        var f;
        try {
            var H = new Gd();
            var g = H;
            g.g.push(1);
            g.j[1] = Bd("context", a);
            (b.error && b.meta && b.id) || (b = new Nb(b, { message: Td(b) }));
            if (b.msg) {
                g = H;
                var h = b.msg.substring(0, 512);
                g.g.push(2);
                g.j[2] = Bd("msg", h);
            }
            var l = b.meta || {};
            b = l;
            if (this.Ra)
                try {
                    this.Ra(b);
                }
                catch (fa) { }
            if (d)
                try {
                    d(b);
                }
                catch (fa) { }
            d = H;
            l = [l];
            d.g.push(3);
            d.j[3] = l;
            d = m;
            l = [];
            b = null;
            do {
                var k = d;
                if (ic(k)) {
                    var n = k.location.href;
                    b = (k.document && k.document.referrer) || null;
                }
                else
                    (n = b), (b = null);
                l.push(new Ad(n || ""));
                try {
                    d = k.parent;
                }
                catch (fa) {
                    d = null;
                }
            } while (d && k != d);
            for (var fa = 0, eb = l.length - 1; fa <= eb; ++fa)
                l[fa].depth = eb - fa;
            k = m;
            if (k.location &&
                k.location.ancestorOrigins &&
                k.location.ancestorOrigins.length == l.length - 1)
                for (n = 1; n < l.length; ++n) {
                    var p = l[n];
                    p.url ||
                        ((p.url = k.location.ancestorOrigins[n - 1] || ""), (p.Ab = !0));
                }
            var q = l;
            var ha = new Ad(m.location.href, !1);
            k = null;
            var U = q.length - 1;
            for (p = U; 0 <= p; --p) {
                var C = q[p];
                !k && yd.test(C.url) && (k = C);
                if (C.url && !C.Ab) {
                    ha = C;
                    break;
                }
            }
            C = null;
            var jc = q.length && q[U].url;
            0 != ha.depth && jc && (C = q[U]);
            f = new zd(ha, C);
            if (f.j) {
                q = H;
                var D = f.j.url || "";
                q.g.push(4);
                q.j[4] = Bd("top", D);
            }
            var u = { url: f.g.url || "" };
            if (f.g.url) {
                var A = f.g.url.match(hc), V = A[1], E = A[3], w = A[4];
                D = "";
                V && (D += V + ":");
                E && ((D += "//"), (D += E), w && (D += ":" + w));
                var x = D;
            }
            else
                x = "";
            V = H;
            u = [u, { url: x }];
            V.g.push(5);
            V.j[5] = u;
            Hd(this.l, e, H, this.j, c);
        }
        catch (H) {
            try {
                Hd(this.l, e, { context: "ecmserr", rctx: a, msg: Td(H), url: f && f.g.url }, this.j, c);
            }
            catch (ha) { }
        }
        return !0;
    };
    return Vd;
}());
var Yd = /** @class */ (function (_super) {
    __extends(Yd, _super);
    function Yd(a) {
        if (a === void 0) { a = ""; }
        var _this = _super.call(this) || this;
        _this.name = "TagError";
        _this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace
            ? Error.captureStackTrace(_this, Yd)
            : (_this.stack = Error().stack || "");
        return _this;
    }
    return Yd;
}(Error));
var Xd, Zd;
var Sd = ed(), Wd = new Rd();
var $d = function () {
    if (!Sd.google_measure_js_timing) {
        var a = Wd;
        a.g = !1;
        a.events != a.j.google_js_reporting_queue &&
            (Pd() && pa(a.events, Qd), (a.events.length = 0));
    }
};
Xd = new Id();
"number" !== typeof Sd.google_srt && (Sd.google_srt = Math.random());
var ae = Xd, be = Sd.google_srt;
0 <= be && 1 >= be && (ae.g = be);
Zd = new Vd();
Zd.Ra = function () { };
Zd.j = !0;
"complete" == Sd.document.readyState
    ? $d()
    : Wd.g &&
        z(Sd, "load", function () {
            $d();
        });
var ce = function (a, b, c) { return Ud(Zd, a, b, c); }, de = function (a, b) { return L(Zd, a, b, void 0, void 0); };
var ee = function (a, b, c) {
    if (c === void 0) { c = null; }
    var d = function (f) {
        var g;
        try {
            g = JSON.parse(f.data);
        }
        catch (h) {
            return;
        }
        !g ||
            "sth" !== g.googMsgType ||
            (c && /[:|%3A]javascript\(/i.test(f.data) && !c(g, f)) ||
            b(g, f);
    };
    z(a, "message", d);
    var e = !1;
    return function () {
        var f = !1;
        e || ((e = !0), (f = B(a, "message", d)));
        return f;
    };
}, fe = /^(true|false)$/i, ge = function (a, b, c, d, e) {
    if (!(0 >= e) &&
        ((c.googMsgType = b),
            a.postMessage(JSON.stringify(c), d),
            (a = a.frames)))
        for (var f = 0; f < a.length; ++f)
            1 < e && ge(a[f], b, c, d, --e);
};
function M(a) {
    a.google_reactive_ads_global_state
        ? null == a.google_reactive_ads_global_state.floatingAdsStacking &&
            (a.google_reactive_ads_global_state.floatingAdsStacking = new he())
        : (a.google_reactive_ads_global_state = new ie());
    return a.google_reactive_ads_global_state;
}
var ie = /** @class */ (function () {
    function ie() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new he();
    }
    return ie;
}());
var he = /** @class */ (function () {
    function he() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = [];
    }
    return he;
}());
var je = 728 * 1.38, ke = function (a) { return a.innerHeight >= a.innerWidth; }, le = function (a) {
    var b = N(a).clientWidth;
    a = a.innerWidth;
    return b && a ? b / a : 0;
}, N = function (a) {
    a = a.document;
    var b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
}, me = function (a, b) {
    var c = N(a);
    return b
        ? c.scrollHeight == N(a).clientHeight
            ? c.offsetHeight
            : c.scrollHeight
        : c.offsetHeight;
}, O = function (a) {
    return void 0 === a.pageYOffset
        ? (a.document.documentElement ||
            a.document.body.parentNode ||
            a.document.body).scrollTop
        : a.pageYOffset;
}, ne = function (a) {
    return void 0 === a.pageXOffset
        ? (a.document.documentElement ||
            a.document.body.parentNode ||
            a.document.body).scrollLeft
        : a.pageXOffset;
}, oe = function (a) { return ({ name: a, Sc: { predicate: fe, nullOnInvalid: !0 } }); }, pe = function (a) {
    var b = {};
    var c;
    Array.isArray(a) ? (c = a) : a && a.key_value && (c = a.key_value);
    if (c)
        for (a = 0; a < c.length; a++) {
            var d = c[a];
            if ("key" in d && "value" in d) {
                var e = d.value;
                b[d.key] = null == e ? null : String(e);
            }
        }
    return b;
}, qe = function (a) {
    var b = {
        bottom: "auto",
        clear: "none",
        display: "inline",
        float: "none",
        height: "auto",
        left: "auto",
        margin: 0,
        "margin-bottom": 0,
        "margin-left": 0,
        "margin-right": "0",
        "margin-top": 0,
        "max-height": "none",
        "max-width": "none",
        opacity: 1,
        overflow: "visible",
        padding: 0,
        "padding-bottom": 0,
        "padding-left": 0,
        "padding-right": 0,
        "padding-top": 0,
        position: "static",
        right: "auto",
        top: "auto",
        "vertical-align": "baseline",
        visibility: "visible",
        width: "auto",
        "z-index": "auto",
    };
    pa(Object.keys(b), function (c) {
        var d = a.style[bb(c)];
        ("undefined" !== typeof d ? d : a.style[Oc(a, c)]) || K(a, c, b[c]);
    });
    wc(a);
};
function re(a) {
    a && "function" == typeof a.yb && a.yb();
}
function se() {
    this.G = this.G;
    this.I = this.I;
}
se.prototype.G = !1;
se.prototype.yb = function () {
    this.G || ((this.G = !0), this.ra());
};
function te(a, b) {
    ue(a, la(re, b));
}
function ue(a, b) {
    a.G ? b() : (a.I || (a.I = []), a.I.push(b));
}
se.prototype.ra = function () {
    if (this.I)
        for (; this.I.length;)
            this.I.shift()();
};
function ve(a, b, c) {
    try {
        if (!Ac(c.origin))
            return;
    }
    catch (f) {
        return;
    }
    var d = b.msg_type;
    var e;
    "string" === typeof d &&
        (e = a.Ma[d]) &&
        Ud(a.A, 168, function () {
            e.call(a, b, c);
        }, function (f) {
            f.msg_type = d;
        });
}
var we = /** @class */ (function (_super) {
    __extends(we, _super);
    function we(a, b) {
        var _this = this;
        var c = Xd;
        _this = _super.call(this) || this;
        _this.g = a;
        _this.A = b;
        _this.Aa = c;
        _this.Ma = {};
        _this.lc = L(_this.A, 168, function (d, e) { return void ve(_this, d, e); });
        _this.Gb = L(_this.A, 169, function (d, e) {
            Hd(_this.Aa, "ras::xsf", {
                c: e.data.substring(0, 500),
                u: _this.g.location.href.substring(0, 500),
            }, !0, 0.1);
            return !0;
        });
        _this.ja = [];
        _this.ta(_this.Ma);
        _this.ja.push(ee(_this.g, _this.lc, _this.Gb));
        return _this;
    }
    we.prototype.ra = function () {
        for (var _i = 0, _a = this.ja; _i < _a.length; _i++) {
            var a = _a[_i];
            a();
        }
        this.ja.length = 0;
        _super.prototype.ra.call(this);
    };
    return we;
}(se));
var xe = /** @class */ (function (_super) {
    __extends(xe, _super);
    function xe(a) {
        var _this = _super.call(this, a, Zd) || this;
        _this.g = a;
        return _this;
    }
    return xe;
}(we));
var ye = /** @class */ (function () {
    function ye(a) {
        this.methodName = a;
    }
    return ye;
}());
var ze = new ye(15), Ae = new ye(3), Be = new ye(5), Ce = new ye(6), De = new ye(7), Ee = new ye(8), Fe = function (a, b, c) { return b[a.methodName] || c || (function () { }); };
function Ge(a, b) {
    a.g = function () { return Fe(Ae, b, function () { return []; })(1); };
}
var He = /** @class */ (function () {
    function He() {
        this.g = function () { return []; };
    }
    return He;
}());
ba(He);
var P = /** @class */ (function () {
    function P(a, b) {
        if (b === void 0) { b = !1; }
        this.g = a;
        this.defaultValue = b;
    }
    return P;
}()), Ie = /** @class */ (function () {
    function Ie(a) {
        this.g = a;
        this.defaultValue = 0;
    }
    return Ie;
}());
var Je = new P(313), Ke = new P(243), Le = new P(1064), Me = new P(1002), Ne = new P(233), Oe = new P(232), Pe = new Ie(1056), Qe = new Ie(1057), Re = new P(227), Se = new P(310, !0), Te = new P(282), Ue = new P(251), Ve = new Ie(36), We = new P(1944), Xe = new P(1903), Ye = new P(1940), Ze = new (/** @class */ (function () {
    function class_1(a, b) {
        if (b === void 0) { b = []; }
        this.g = a;
        this.defaultValue = b;
    }
    return class_1;
}()))(9, [
    "facebook[.]com",
    "whatsapp[.]com",
    "youtube[.]com",
    "google[.]com",
    "/ads?/",
]);
var $e = /** @class */ (function () {
    function $e() {
        var a = {};
        this.l = function (b, c) { return (null != a[b] ? a[b] : c); };
        this.g = function (b, c) { return (null != a[b] ? a[b] : c); };
        this.o = function (b, c) { return (null != a[b] ? a[b] : c); };
        this.m = function (b, c) { return (null != a[b] ? a[b] : c); };
        this.j = function () { };
    }
    return $e;
}());
ba($e);
var Q = function (a) { return $e.S().l(a.g, a.defaultValue); };
var af = /** @class */ (function () {
    function af() {
    }
    return af;
}());
ba(af);
var cf = function (a) {
    if (a === void 0) { a = m.ggeac || (m.ggeac = {}); }
    Ge(He.S(), a);
    bf(a);
    af.S();
    $e.S().j();
}, bf = function (a) {
    var b = $e.S();
    b.l = function (c, d) { return Fe(Be, a, function () { return !1; })(c, d, 1); };
    b.g = function (c, d) { return Fe(Ce, a, function () { return 0; })(c, d, 1); };
    b.o = function (c, d) { return Fe(De, a, function () { return ""; })(c, d, 1); };
    b.m = function (c, d) { return Fe(Ee, a, function () { return []; })(c, d, 1); };
    b.j = function () {
        Fe(ze, a)(1);
    };
};
var df = /** @class */ (function () {
    function df(a) {
        if (a === void 0) { a = 1; }
        this.g = a;
    }
    df.prototype.next = function () {
        var a = (48271 * this.g) % 2147483647;
        this.g = 0 > 2147483647 * a ? a + 2147483647 : a;
        return this.g / 2147483647;
    };
    return df;
}());
function R(a, b, c) {
    var d = [];
    for (var _i = 0, _a = a.g; _i < _a.length; _i++) {
        var e = _a[_i];
        b(e) ? d.push(e) : c(e);
    }
    return new ef(d);
}
function ff(a, b) {
    return new ef(a.g.slice(0).sort(b));
}
function gf(a, b) {
    if (b === void 0) { b = 1; }
    a = a.g.slice(0);
    var c = new df(b);
    xa(a, function () { return c.next(); });
    return new ef(a);
}
var ef = /** @class */ (function () {
    function ef(a) {
        this.g = a.slice(0);
    }
    ef.prototype.filter = function (a) {
        return new ef(qa(this.g, a));
    };
    ef.prototype.apply = function (a) {
        return new ef(a(this.g.slice(0)));
    };
    ef.prototype.add = function (a) {
        var b = this.g.slice(0);
        b.push(a);
        return new ef(b);
    };
    return ef;
}());
function hf(a, b) {
    return void 0 !== a.g[jf(b)];
}
function kf(a) {
    var b = [], c;
    for (c in a.g)
        void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.j[c]);
    return b;
}
var S = /** @class */ (function () {
    function S() {
        this.g = {};
        this.j = {};
    }
    S.prototype.set = function (a, b) {
        var c = jf(a);
        this.g[c] = b;
        this.j[c] = a;
    };
    S.prototype.get = function (a, b) {
        a = jf(a);
        return void 0 !== this.g[a] ? this.g[a] : b;
    };
    return S;
}());
function jf(a) {
    return a instanceof Object ? String(r(a)) : a + "";
}
var lf = function (a, b) {
    var c = a.id;
    if ("DIV" == a.tagName && 0 == c.indexOf("div-gpt-ad"))
        return !0;
    a = b.googletag;
    if (!a || "function" != typeof a.pubads)
        return !1;
    try {
        var d = a.pubads().getSlots();
        for (a = 0; a < d.length; a++) {
            var e = d[a].getSlotElementId();
            if (c == e)
                return !0;
        }
    }
    catch (d) {
        Hd(Xd, "ladd_evt", { ok: 0, err: d.toString() }, !0, 0.1, void 0);
    }
    return !1;
}, mf = function (a, b) {
    a = a.id;
    return (!!a &&
        !!a.indexOf &&
        "function" === typeof a.indexOf &&
        0 === a.indexOf(b));
};
function nf(a, b) {
    return a.debugCard && a.debugCard.getAdType() === b ? a.debugCard : null;
}
function of(a, b) {
    for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
        var f = b_1[_i];
        b = a;
        var c = b.document;
        var d = f.x, e = f.y;
        c.hasOwnProperty("_goog_efp_called_") ||
            (c._goog_efp_called_ = c.elementFromPoint(d, e));
        if ((c = c.elementFromPoint(d, e))) {
            if (!(d = pf(c, b)))
                a: {
                    d = c;
                    c = b.document;
                    for (d = d.offsetParent; d && d != c.body; d = d.offsetParent)
                        if ((e = pf(d, b))) {
                            d = e;
                            break a;
                        }
                    d = null;
                }
            b = d || null;
        }
        else
            b = null;
        if (b)
            return b;
    }
    return null;
}
var qf = function (a, b, c) {
    var d = [];
    for (var f = 0; 3 > f; f++)
        for (var g = 0; 3 > g; g++) {
            var e = d;
            e.push.call(e, { x: (g / 2) * a, y: b + (f / 2) * (c - b) });
        }
    return d;
};
function pf(a) {
    return "fixed" !== Rc(a, "position")
        ? null
        : "GoogleActiveViewInnerContainer" == a.getAttribute("class") ||
            (1 >= Xc(a).width && 1 >= Xc(a).height)
            ? null
            : a;
}
var rf = function (a) {
    var b = (812 == a.screen.height && 375 == a.screen.width) ||
        (812 == a.screen.width && 375 == a.screen.height) ||
        (414 == a.screen.width && 896 == a.screen.height) ||
        (896 == a.screen.width && 414 == a.screen.height);
    return (null !=
        (a.navigator &&
            a.navigator.userAgent &&
            a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b);
};
var sf = function (a, b) {
    var c = a && id(a.location, "google_anchor_debug");
    if (2 === b || c) {
        var d = qf(a.innerWidth, 0, Math.round((a.innerWidth / 320) * 50 + 15));
        if (null != of(a, d)) {
            var e, f;
            a = {
                c: "fixed",
                d: c,
                p: b,
                url: null !=
                    (f =
                        null == a ? void 0 : null == (e = a.location) ? void 0 : e.href)
                    ? f
                    : "",
            };
            Hd(Xd, "flgr::top", a, !0, void 0, void 0);
            return "bottom";
        }
        return "top";
    }
    if ((e = Q(Le))) {
        e = a.innerWidth;
        f = a.innerHeight;
        var g = Math.round((a.innerWidth / 320) * 50 + 15), h = qf(e, f - g, f);
        25 < g && h.push({ x: e - 25, y: f - 25 });
        e = null != of(a, h);
    }
    if (e) {
        var g = void 0;
        a = {
            c: "fixed",
            d: c,
            p: b,
            url: null !=
                (g = null == a ? void 0 : null == (d = a.location) ? void 0 : d.href)
                ? g
                : "",
        };
        Hd(Xd, "flgr::bottom", a, !0, void 0, void 0);
        return "top";
    }
    return "bottom";
};
var tf = /** @class */ (function () {
    function tf() {
        var _this = this;
        this.promise = new Promise(function (a) {
            _this.g = a;
        });
    }
    return tf;
}());
function uf(a, b) {
    if (b) {
        var c = b.adClient;
        if ("string" === typeof c && c) {
            a.l = c;
            a.j = !!b.adTest;
            c = b.pubVars;
            da(c) && (a.v = c);
            if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                a.g = {};
                for (var _i = 0, _a = b.fillMessage; _i < _a.length; _i++) {
                    d = _a[_i];
                    a.g[d.key] = d.value;
                }
            }
            a.o = b.adWidth;
            a.m = b.adHeight;
            (bd(a.o) && bd(a.m)) || Hd(Xd, "rctnosize", b, !0, void 0, void 0);
            var d = !0;
        }
        else
            d = !1;
    }
    else
        d = !1;
    return d && a.G(b);
}
var vf = /** @class */ (function () {
    function vf() {
        this.g = this.v = this.j = this.l = null;
        this.m = this.o = 0;
    }
    vf.prototype.G = function () {
        return !0;
    };
    return vf;
}());
var wf = /** @class */ (function (_super) {
    __extends(wf, _super);
    function wf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    wf.prototype.G = function (a) {
        a.hasFillMessage || (this.g = null);
        return !0;
    };
    return wf;
}(vf));
var xf = { rectangle: 1, horizontal: 2, vertical: 4 };
var yf = function (a, b) {
    try {
        var c = b.document.documentElement.getBoundingClientRect(), d = a.getBoundingClientRect();
        return { x: d.left - c.left, y: d.top - c.top };
    }
    catch (c) {
        return null;
    }
}, zf = function (a, b) {
    do {
        var c = kc(a, b);
        if (c && "fixed" == c.position)
            return !1;
    } while ((a = a.parentElement));
    return !0;
}, Af = function (a) {
    var b = 0;
    for (var c in xf)
        -1 != a.indexOf(c) && (b |= xf[c]);
    return b;
}, Bf = function (a, b, c, d, e) {
    if (a.top != a)
        return gd(a) ? 3 : 16;
    if (!(488 > N(a).clientWidth))
        return 4;
    if (!(a.innerHeight >= a.innerWidth))
        return 5;
    var f = N(a).clientWidth;
    if (!f || (f - c) / f > d)
        a = 6;
    else {
        if ((c = "true" != e.google_full_width_responsive))
            a: {
                c = b.parentElement;
                for (b = N(a).clientWidth; c; c = c.parentElement)
                    if ((d = kc(c, a)) &&
                        (e = G(d.width)) &&
                        !(e >= b) &&
                        "visible" != d.overflow) {
                        c = !0;
                        break a;
                    }
                c = !1;
            }
        a = c ? 7 : !0;
    }
    return a;
}, Df = function (a, b, c, d) {
    var e = Bf(b, c, a, 0.3, d);
    !0 !== e
        ? (a = e)
        : "true" == d.google_full_width_responsive || zf(c, b)
            ? Cf(b)
                ? (a = !0)
                : ((b = N(b).clientWidth),
                    (a = b - a),
                    (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
            : (a = 9);
    return a;
}, Ef = function (a, b, c) {
    a = a.style;
    "rtl" == b
        ? Q(Ue)
            ? a.setProperty("margin-right", c, "important")
            : (a.marginRight = c)
        : Q(Ue)
            ? a.setProperty("margin-left", c, "important")
            : (a.marginLeft = c);
};
var Ff = function (a, b) {
    if (3 == b.nodeType)
        return /\S/.test(b.data);
    if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName))
            return !1;
        var c = void 0;
        try {
            c = kc(b, a);
        }
        catch (d) { }
        return (!c ||
            ("none" != c.display &&
                !("absolute" == c.position &&
                    ("hidden" == c.visibility || "collapse" == c.visibility))));
    }
    return !1;
};
var Gf = function (a, b) {
    for (var c = 0; 100 > c && b.parentElement; ++c) {
        var d = b.parentElement.childNodes;
        for (var e = 0; e < d.length; ++e) {
            var f = d[e];
            if (f != b && Ff(a, f))
                return;
        }
        b = b.parentElement;
        b.style.width = "100%";
        b.style.height = "auto";
    }
};
var Hf = function (a, b, c) {
    a = yf(b, a);
    return "rtl" == c ? -a.x : a.x;
};
var If = function (a, b) {
    var c;
    c = (c = b.parentElement) ? ((c = kc(c, a)) ? c.direction : "") : "";
    if (c) {
        b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition =
            "none";
        b.style.borderSpacing = b.style.padding = "0";
        Ef(b, c, "0px");
        b.style.width = N(a).clientWidth + "px";
        if (0 !== Hf(a, b, c)) {
            Ef(b, c, "0px");
            var d = Hf(a, b, c);
            Ef(b, c, -1 * d + "px");
            a = Hf(a, b, c);
            0 !== a && a !== d && Ef(b, c, (d / (a - d)) * d + "px");
        }
        b.style.zIndex = 30;
    }
}, Cf = function (a) { return Q(Ne) || (a.location && "#bffwroe2etoq" == a.location.hash); };
var Jf = function (a, b) { return ("relative" === a ? b : ["https://", a, b].join("")); };
var Kf = /** @class */ (function () {
    function Kf() {
        var a = new tf();
        this.promise = a.promise;
        this.resolve = a.g;
    }
    return Kf;
}());
function Lf(a) {
    if (a === void 0) { a = []; }
    var b = Date.now();
    return qa(a, function (c) { return 36e5 > b - c; });
}
var Mf = function (a) {
    try {
        var b = a.getItem("__lsv__");
        if (!b)
            return [];
        var c = void 0;
        try {
            c = JSON.parse(b);
        }
        catch (d) { }
        return !Array.isArray(c) || ta(c, function (d) { return !Number.isInteger(d); })
            ? (a.removeItem("__lsv__"), [])
            : c;
    }
    catch (b) {
        return null;
    }
};
var Nf = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1,
    NOSCRIPT: 1,
}, Of = { IMG: " ", BR: "\n" };
var Pf = function (a, b, c, d) {
    if (!(a.nodeName in Nf))
        if (3 == a.nodeType)
            c
                ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
                : b.push(a.nodeValue);
        else if (a.nodeName in Of)
            d &&
                "IMG" == a.nodeName &&
                a.hasAttribute("alt") &&
                b.push(" " + a.getAttribute("alt")),
                b.push(Of[a.nodeName]);
        else
            for (a = a.firstChild; a;)
                Pf(a, b, c, d), (a = a.nextSibling);
}, Qf = / \xAD /g, Rf = /\xAD/g, Sf = /\u200B/g, Tf = / +/g, Uf = /^\s*/;
var Vf = function (a, b, c) {
    a.setAttribute("data-adsbygoogle-status", "reserved");
    a.className += " adsbygoogle-noablate";
    if (!c.adsbygoogle) {
        c.adsbygoogle = [];
        var d = c.document, e = Jf("pagead2.googlesyndication.com", "/pagead/js/adsbygoogle.js"), f = Ea();
        e = f ? f.createScriptURL(e) : e;
        var g = new Ga(e, Fa);
        f = e = d.createElement("script");
        f.src =
            g instanceof Ga && g.constructor === Ga
                ? g.g
                : "type_error:TrustedResourceUrl";
        (g = f.ownerDocument && f.ownerDocument.defaultView) && g != m
            ? (g = Ya(g.document))
            : (null === Wa && (Wa = Ya(m.document)), (g = Wa));
        g && f.setAttribute("nonce", g);
        (d = d.getElementsByTagName("script")[0]) &&
            d.parentNode &&
            d.parentNode.insertBefore(e, d);
    }
    c.adsbygoogle.push({ element: a, params: b });
};
var Wf = [1, 2];
function Xf(a, b, c) {
    var d = b.document.createElement("ins");
    d.className = "adsbygoogle";
    b.document.body.appendChild(d);
    var e = c.v || {};
    e.google_ad_client = c.l;
    e.google_ad_width = c.o;
    e.google_ad_height = c.m;
    e.google_reactive_ad_format = a.g;
    c.g && (e.google_reactive_fill_message = c.g);
    c.j && (e.google_adtest = "on");
    Vf(d, e, b);
}
var Yf = /** @class */ (function () {
    function Yf(a) {
        this.g = a;
    }
    Yf.prototype.verifyAndProcessConfig = function (a, b) {
        var c = M(a);
        if (c.wasReactiveAdConfigReceived[this.g])
            return !1;
        var d = new wf();
        if (!uf(d, b))
            return !1;
        Wf.forEach(function (e) {
            c.wasReactiveAdConfigReceived[e] = !0;
        });
        Xf(this, a, d);
        return !0;
    };
    return Yf;
}());
var Zf = /** @class */ (function () {
    function Zf(a, b) {
        this.m = a;
        this.j = !1;
        this.o = b;
        this.g = L(this.o, 264, this.l, this);
    }
    Zf.prototype.start = function () {
        this.j || ((this.j = !0), $f ? ag.call(m, this.g) : this.g(0));
    };
    Zf.prototype.stop = function () {
        this.j = !1;
    };
    Zf.prototype.l = function (a) {
        this.j &&
            ($f || (a = Date.now()),
                this.m(a),
                $f ? ag.call(m, this.g) : m.setTimeout(this.g, 17));
    };
    return Zf;
}());
var ag = m.requestAnimationFrame || m.webkitRequestAnimationFrame, $f = !!ag && !/'iPhone'/.test(m.navigator.userAgent);
function bg(a) {
    return a * a * a;
}
function cg(a) {
    a = 1 - a;
    return 1 - a * a * a;
}
function dg(a) {
    a.o = !1;
    a.v.start();
}
var eg = /** @class */ (function () {
    function eg(a, b, c, d) {
        this.j = a;
        this.A = b;
        this.D = c;
        this.progress = 0;
        this.g = null;
        this.o = !1;
        this.l = [];
        this.m = null;
        this.v = new Zf(t(this.F, this), d);
    }
    eg.prototype.F = function (a) {
        if (this.o)
            this.v.stop();
        else {
            null === this.g && (this.g = a);
            this.progress = (a - this.g) / this.D;
            1 <= this.progress && (this.progress = 1);
            a = this.m ? this.m(this.progress) : this.progress;
            this.l = [];
            for (var b = 0; b < this.j.length; b++)
                this.l.push((this.A[b] - this.j[b]) * a + this.j[b]);
            this.C();
            1 == this.progress && (this.v.stop(), this.G());
        }
    };
    eg.prototype.G = function () { };
    eg.prototype.C = function () { };
    eg.prototype.stop = function () {
        this.o = !0;
    };
    eg.prototype.reset = function (a, b, c) {
        this.g = null;
        this.j = a;
        this.A = b;
        this.D = c;
        this.progress = 0;
    };
    return eg;
}());
var fg = /** @class */ (function (_super) {
    __extends(fg, _super);
    function fg(a, b, c, d, e, f, g, h) {
        var _this = _super.call(this, [b], [c], d, f) || this;
        _this.H = a;
        _this.J = e;
        _this.I = g ? g : null;
        _this.m = h || null;
        return _this;
    }
    fg.prototype.C = function () {
        var a = {};
        a[this.J] = this.l[0] + "px";
        K(this.H, a);
    };
    fg.prototype.G = function () {
        this.I && this.I();
    };
    return fg;
}(eg));
function gg(a) {
    a.g && B(a.g, a.l, a.m, a.j);
}
var hg = /** @class */ (function (_super) {
    __extends(hg, _super);
    function hg(a, b, c) {
        var _this = _super.call(this) || this;
        _this.g = a;
        _this.l = b;
        _this.m = c;
        _this.j = Ob;
        z(_this.g, _this.l, _this.m, _this.j);
        ue(_this, function () { return void gg(_this); });
        return _this;
    }
    return hg;
}(se));
var ig = /** @class */ (function () {
    function ig() {
        this.reset();
    }
    ig.prototype.add = function (a) {
        var b = Date.now();
        this.g.push({ time: b, coords: a });
        for (a = this.j; a < this.g.length; ++a)
            if (100 <= b - this.g[a].time)
                delete this.g[a];
            else
                break;
        this.j = a;
        a >= this.g.length && this.reset();
    };
    ig.prototype.reset = function () {
        this.g = [];
        this.j = 0;
    };
    return ig;
}());
function jg(a, b) {
    a.v && kg(a);
    a.v = !0;
    a.l = a.J();
    a.j = lg(b);
    a.g = a.j;
    a.o = new ig();
    a.o.add(a.j);
    a.D = new hg(a.m, "mousemove", t(a.U, a));
    te(a, a.D);
    a.H = new hg(a.m, "touchmove", t(a.U, a));
    te(a, a.H);
    a.C = new hg(a.m, "mouseup", t(a.Y, a));
    te(a, a.C);
    a.F = new hg(a.m, "touchend", t(a.Y, a));
    te(a, a.F);
}
function lg(a) {
    a = (a.touches && a.touches[0]) || a;
    return new F(a.clientX, a.clientY);
}
function kg(a) {
    a.v = !1;
    a.A = !1;
    a.l = null;
    a.j = null;
    a.g = null;
    a.o = null;
    a.D && gg(a.D);
    a.H && gg(a.H);
    a.C && gg(a.C);
    a.F && gg(a.F);
}
var mg = /** @class */ (function (_super) {
    __extends(mg, _super);
    function mg(a, b, c) {
        var _this = _super.call(this) || this;
        _this.m = a;
        _this.target = b;
        _this.L = c || b;
        _this.A = _this.v = _this.M = !1;
        _this.o = _this.g = _this.j = _this.l = _this.F = _this.C = _this.H = _this.D = null;
        _this.aa = new hg(_this.L, "mousedown", function (d) {
            0 == d.button && jg(_this, d);
        });
        te(_this, _this.aa);
        _this.ja = new hg(_this.L, "touchstart", function (d) { return jg(_this, d); });
        te(_this, _this.ja);
        _this.$ = new hg(_this.L, "click", function (d) {
            _this.M ? (_this.M = !1) : d.stopPropagation();
        });
        te(_this, _this.$);
        return _this;
    }
    mg.prototype.N = function () {
        if (this.l && this.j && this.g) {
            var a = this.l, b = Ub(this.g, this.j);
            var c = new F(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof F ? ((b = c.x), (c = c.y)) : ((b = c), (c = void 0));
            a.style.left = Wc(b, !1);
            a.style.top = Wc(c, !1);
        }
    };
    mg.prototype.O = function () { };
    mg.prototype.J = function () {
        var a = this.target, b;
        a: {
            if (Rb &&
                !(ib &&
                    sb("9") &&
                    !sb("10") &&
                    m.SVGElement &&
                    a instanceof m.SVGElement) &&
                (b = a.parentElement))
                break a;
            b = a.parentNode;
            b = da(b) && 1 == b.nodeType ? b : null;
        }
        var c = b;
        b = Uc(a);
        c = Uc(c);
        b = new F(b.x - c.x, b.y - c.y);
        a = $c(a, "margin");
        return Ub(b, new F(a.left, a.top));
    };
    mg.prototype.U = function (a) {
        if (this.v)
            if ((a.preventDefault(), (this.g = lg(a)), this.o.add(this.g), this.A))
                this.N();
            else {
                var b = this.j, c = this.g;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.N(), (this.A = !0));
            }
    };
    mg.prototype.Y = function (a) {
        this.A ? (a.preventDefault(), (this.g = lg(a)), this.O()) : (this.M = !0);
        kg(this);
    };
    return mg;
}(se));
function ng(a, b) {
    a.g.maxZIndexListeners.push(b);
    a = mc(a.g.maxZIndexRestrictions);
    a = a.length ? Math.min.apply(null, a) : null;
    b(a);
}
var og = /** @class */ (function () {
    function og(a) {
        this.g = M(a).floatingAdsStacking;
    }
    return og;
}());
function pg(a) {
    var b = a.ownerDocument;
    var c = b.createElementNS("http://www.w3.org/2000/svg", "line");
    c.setAttribute("x1", "22");
    c.setAttribute("y1", "18");
    c.setAttribute("x2", "28");
    c.setAttribute("y2", "12");
    a.appendChild(c);
    b = b.createElementNS("http://www.w3.org/2000/svg", "line");
    b.setAttribute("x1", "28");
    b.setAttribute("y1", "12");
    b.setAttribute("x2", "34");
    b.setAttribute("y2", "18");
    a.appendChild(b);
}
function qg(a) {
    var b = a.ownerDocument;
    var c = b.createElementNS("http://www.w3.org/2000/svg", "line");
    c.setAttribute("x1", "22");
    c.setAttribute("y1", "12");
    c.setAttribute("x2", "28");
    c.setAttribute("y2", "18");
    a.appendChild(c);
    b = b.createElementNS("http://www.w3.org/2000/svg", "line");
    b.setAttribute("x1", "28");
    b.setAttribute("y1", "18");
    b.setAttribute("x2", "34");
    b.setAttribute("y2", "12");
    a.appendChild(b);
}
function rg(a, b) {
    if (!a.v && a.l) {
        var c = parseInt(a.l.style[a.g], 10), d = -a.A.height - (b ? 30 : 0), e = (c - d) / 0.1;
        "bottom" == a.g &&
            rf(a.j) &&
            Ud(a.D, 405, function () { return sg(a, "21px", e, "ease-in"); });
        b || tg(a, !0);
        c === d
            ? (a.o = !b)
            : ((a.v = !0),
                (c = new fg(a.l, c, d, e, a.g, a.D, function () {
                    a.v = !1;
                    a.o = !b;
                    b || tg(a, !0);
                    b && a.Z();
                    a.l.setAttribute("data-anchor-status", "dismissed");
                }, bg)),
                a.T(),
                dg(c));
    }
}
function ug(a, b) {
    qe(b);
    var c = {
        "background-color": "#FAFAFA",
        display: "block",
        position: "relative",
        "z-index": 1,
        height: "5px",
        "box-shadow": "top" == a.g
            ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
            : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
    };
    "top" == a.g &&
        ((c.position = "absolute"),
            (c.top = a.A.height + "px"),
            (c.width = "100%"));
    I(b, c);
    var d = a.j.document.createElement("span");
    Q(Xe)
        ? d.appendChild(vg(a))
        : Va(d, Ra("top" == a.g
            ? wg('<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>', !0)
            : wg('<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>', !1)));
    var e = function (f) {
        f.target === d &&
            (f.preventDefault && f.preventDefault(),
                f.stopImmediatePropagation && f.stopImmediatePropagation(),
                f.stopPropagation && f.stopPropagation());
    };
    z(d, "click", e);
    ue(a, function () { return B(d, "click", e); });
    xg(a, d);
    b.className = "ee";
    b.appendChild(d);
}
function vg(a) {
    var b;
    var c, d;
    switch (a.g) {
        case "top":
            var e = "dropShadowBottom";
            b =
                "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
            var f = "0";
            c = "up";
            d = pg;
            break;
        case "bottom":
            (e = "dropShadowTop"),
                (b =
                    "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z"),
                (f = "25"),
                (c = "down"),
                (d = qg);
    }
    var g = a.j.document, h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
    h.style.setProperty("margin", "0 0 0 0px", "important");
    h.style.setProperty("position", "absolute", "important");
    h.style.setProperty(a.g, "0", "important");
    h.style.setProperty("left", "0%", "important");
    h.style.setProperty("display", "block", "important");
    h.style.setProperty("width", "80px", "important");
    h.style.setProperty("height", "30px", "important");
    h.style.setProperty("transform", "none", "important");
    h.style.setProperty("pointer-events", "initial", "important");
    a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
    var l = g.createElementNS("http://www.w3.org/2000/svg", "filter");
    l.setAttribute("id", e);
    l.setAttribute("filterUnits", "userSpaceOnUse");
    l.setAttribute("color-interpolation-filters", "sRGB");
    var k = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
    k.setAttribute("in", "SourceAlpha");
    k.setAttribute("result", "TransferredAlpha");
    var n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
    n.setAttribute("type", "discrete");
    n.setAttribute("tableValues", "0.5");
    k.appendChild(n);
    n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
    n.setAttribute("type", "discrete");
    n.setAttribute("tableValues", "0.5");
    k.appendChild(n);
    n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
    n.setAttribute("type", "discrete");
    n.setAttribute("tableValues", "0.5");
    k.appendChild(n);
    l.appendChild(k);
    k = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
    k.setAttribute("in", "TransferredAlpha");
    k.setAttribute("stdDeviation", "2");
    l.appendChild(k);
    k = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
    k.setAttribute("dx", "0");
    k.setAttribute("dy", "0");
    k.setAttribute("result", "offsetblur");
    l.appendChild(k);
    k = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
    k.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
    n = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
    n.setAttribute("in", "SourceGraphic");
    k.appendChild(n);
    l.appendChild(k);
    a.appendChild(l);
    h.appendChild(a);
    a = g.createElementNS("http://www.w3.org/2000/svg", "path");
    a.setAttribute("d", b);
    a.setAttribute("stroke", "#FAFAFA");
    a.setAttribute("stroke-width", "1");
    a.setAttribute("fill", "#FAFAFA");
    a.style.setProperty("filter", "url(#" + e + ")");
    h.appendChild(a);
    e = g.createElementNS("http://www.w3.org/2000/svg", "rect");
    e.setAttribute("x", "0");
    e.setAttribute("y", f);
    e.setAttribute("width", "80");
    e.setAttribute("height", "5");
    e.style.setProperty("fill", "#FAFAFA");
    h.appendChild(e);
    f = g.createElementNS("http://www.w3.org/2000/svg", "g");
    f.setAttribute("class", c);
    f.setAttribute("stroke", "#616161");
    f.setAttribute("stroke-width", "2px");
    f.setAttribute("stroke-linecap", "square");
    d(f);
    h.appendChild(f);
    return h;
}
function xg(a, b) {
    var _a;
    var c = b.getElementsByTagName("svg")[0];
    I(b, (_a = {
            display: "block",
            width: "80px",
            height: "45px"
        },
        _a[a.g] = "0",
        _a["left"] = "0%",
        _a.marginLeft = "0px",
        _a["pointer-events"] = "none",
        _a));
    wc(c);
}
function yg(a) {
    if (!a.v) {
        var b = parseInt(a.l.style[a.g], 10);
        if (b) {
            a.v = !0;
            var c_1 = -b / 0.1;
            "bottom" == a.g &&
                rf(a.j) &&
                Ud(a.D, 404, function () { return sg(a, "0px", c_1, "ease-out"); });
            tg(a, !1);
            b = new fg(a.l, b, 0, c_1, a.g, a.D, function () {
                a.v = !1;
                a.o = !1;
                zg(a);
                a.l.setAttribute("data-anchor-status", "displayed");
                a.l.setAttribute("data-anchor-shown", !0);
                tg(a, !1);
            }, cg);
            a.U();
            dg(b);
        }
        else
            a.o = !1;
    }
}
function wg(a, b) {
    return b
        ? " \n       <svg style=\"margin: 0 0 0 " + 0 + "px; position: absolute; top:0; \n       " + "left" + ":" + 0 + "%; display: block; width: 80px; \n       height: 30px; transform: none;pointer-events: initial\" \n       xmlns=\"http://www.w3.org/2000/svg\"> \n       <defs> \n       <filter id=\"dropShadowBottom\" filterUnits=\"userSpaceOnUse\" \n       color-interpolation-filters=\"sRGB\"> \n       <feComponentTransfer in=\"SourceAlpha\" result=\"TransferredAlpha\"> \n         <feFuncR type=\"discrete\" tableValues=\"0.5\"/> \n         <feFuncG type=\"discrete\" tableValues=\"0.5\"/> \n         <feFuncB type=\"discrete\" tableValues=\"0.5\"/> \n       </feComponentTransfer> \n       <feGaussianBlur in=\"TransferredAlpha\" stdDeviation=\"2\"/> \n       <feOffset dx=\"0\" dy=\"0\" result=\"offsetblur\"/> \n       <feMerge> \n         <feMergeNode/> \n         <feMergeNode in=\"SourceGraphic\"/> \n       </feMerge> \n       </filter> \n       </defs> \n       <path d=\"" + "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" + "\" \n       stroke=\"" + "#FAFAFA" + "\" stroke-width=\"1\" fill=\"" + "#FAFAFA" + "\" \n       style=\"filter:url(#dropShadowBottom)\"/> \n       <rect x=\"0\" y=\"0\" width=\"80\" height=\"5\" style=\"fill:" + "#FAFAFA" + "\"/> \n       <g class=\"up\" stroke=\"" + "#616161" + "\" stroke-width=\"2px\" \n       stroke-linecap=\"square\">" + a + "</g></svg>"
        : " \n        \n       <svg style=\"margin: 0 0 0 " + 0 + "px; position: absolute; bottom:0; \n       " + "left" + ":" + 0 + "%; display: block; width: 80px; \n       height: 30px; transform: none; pointer-events: initial\" \n       xmlns=\"http://www.w3.org/2000/svg\"> \n       <defs> \n       <filter id=\"dropShadowTop\" filterUnits=\"userSpaceOnUse\" \n       color-interpolation-filters=\"sRGB\"> \n       <feComponentTransfer in=\"SourceAlpha\" result=\"TransferredAlpha\"> \n         <feFuncR type=\"discrete\" tableValues=\"0.5\"/> \n         <feFuncG type=\"discrete\" tableValues=\"0.5\"/> \n         <feFuncB type=\"discrete\" tableValues=\"0.5\"/> \n       </feComponentTransfer> \n       <feGaussianBlur in=\"TransferredAlpha\" stdDeviation=\"2\"/> \n       <feOffset dx=\"0\" dy=\"0\" result=\"offsetblur\"/> \n         <feMerge> \n         <feMergeNode/> \n       <feMergeNode in=\"SourceGraphic\"/> \n       </feMerge> \n       </filter> \n       </defs> \n       <path d=\"" + "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z" + "\" \n       stroke=\"" + "#FAFAFA" + "\" stroke-width=\"1\" fill=\"" + "#FAFAFA" + "\" \n       style=\"filter:url(#dropShadowTop)\"/> \n       <rect x=\"0\" y=\"25\" width=\"80\" height=\"5\" style=\"fill:" + "#FAFAFA" + "\"/> \n       <g class=\"down\" stroke=\"" + "#616161" + "\" stroke-width=\"2px\" \n       stroke-linecap=\"square\">" + a + "</g></svg>";
}
function tg(a, b) {
    if (Q(Xe)) {
        var e = a.m.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
        for (var c = e, d; (d = c.firstChild);)
            c.removeChild(d);
        switch (a.g) {
            case "top":
                (b ? qg : pg)(e);
                break;
            case "bottom":
                (b ? pg : qg)(e);
        }
    }
    else
        a.m
            .getElementsByTagName("svg")[0]
            .getElementsByTagName("g")[0].innerHTML =
            "top" == a.g
                ? b
                    ? '<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>'
                    : '<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>'
                : b
                    ? '<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>'
                    : '<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>';
}
function Ag(a, b, c, d) {
    Hd(a.Y, "flgr", {
        i: b,
        dc: a.o ? "1" : "0",
        fdc: c ? "1" : "0",
        ds: a.F ? "1" : "0",
        expId: a.aa,
        sc: a.O ? "1" : "0",
        off: d,
        vw: N(a.j).clientWidth,
        req: a.L.src,
        tp: a.g,
        h: a.A.height,
        w: a.A.width,
        qemId: a.$,
    }, !0, 1);
}
function sg(a, b, c, d) {
    K(a.L, {
        transition: c / 1e3 + "s",
        "transition-timing-function": d,
        "margin-top": b,
    });
}
function zg(a) {
    a.P();
    a.P = function () { };
}
function Bg(a, b) {
    if ("bottom" !== a.g && "top" !== a.g)
        throw Error("unsupported reactive type");
    var c = function (f) {
        f.preventDefault();
        a.v || ((a.J = !0), a.o ? yg(a) : rg(a, a.F), Ag(a, "c", !a.o, 0));
    }, d = a.m;
    z(d, "click", c);
    ue(a, function () { return B(d, "click", c); });
    K(b, { opacity: 1 });
    var e = a.j.document;
    e &&
        ((a.l = b),
            a.ia &&
                ((a.N = new ("top" == a.g ? Cg : Dg)(a, e, a.A.height, b, a.m)),
                    te(a, a.N)),
            (e = { position: "fixed", left: "0px" }),
            (e[a.g] = -a.A.height - 30 + "px"),
            K(b, e),
            I(b, { overflow: "visible", background: "#FAFAFA" }),
            ng(a.ja, function (f) {
                var g = null == a.R ? 2147483647 : a.R;
                K(b, { zIndex: null == f ? g : Math.min(f, g) });
            }),
            yg(a));
}
var Eg = /** @class */ (function (_super) {
    __extends(Eg, _super);
    function Eg(a, b, c, d, e, f, g, h, l, k, n) {
        var _this = _super.call(this) || this;
        _this.C = a;
        _this.j = b;
        _this.L = c;
        _this.A = d;
        _this.Z = f || (function () { });
        _this.P = g || (function () { });
        _this.D = h;
        _this.Y = l;
        _this.T = k;
        _this.U = n;
        ue(_this, function () { return rg(_this, !0); });
        _this.m = b.document.createElement("ins");
        ue(_this, function () { return (_this.m = null); });
        _this.o = _this.v = !1;
        _this.H = 0;
        _this.g = e;
        _this.J = !1;
        _this.l = _this.N = null;
        _this.M = b.innerHeight;
        _this.O = "true" === _this.C.scroll_detached;
        _this.F = "true" === _this.C.dismissable;
        _this.ia = "true" === _this.C.draggable || "top" != _this.g;
        _this.aa = _this.C.expId || "";
        _this.$ = _this.C.qemId || "";
        a = parseInt(_this.C.z_index_override, 10);
        _this.R = isNaN(a) ? null : a;
        _this.ja = new og(b);
        !_this.F &&
            m.navigator.userAgent.match(/iPhone OS 7/) &&
            b.setInterval(function () {
                var p = _this.j.innerHeight;
                if (2 > Math.abs(p - 460) || 2 > Math.abs(p - 529))
                    p < _this.M &&
                        2 > Math.abs(O(_this.j) - _this.H - 68) &&
                        ((_this.J = !0), _this.o && yg(_this)),
                        (_this.M = p);
            }, 300);
        ug(_this, _this.m);
        return _this;
    }
    return Eg;
}(se));
var Fg = /** @class */ (function (_super) {
    __extends(Fg, _super);
    function Fg(a, b, c, d, e) {
        var _this = _super.call(this, b, d, e) || this;
        _this.Z = a;
        _this.T = c;
        return _this;
    }
    Fg.prototype.O = function () {
        var a = this.Z;
        if (!a.v) {
            var b = parseInt(a.l.style[a.g], 10);
            b >= -(a.A.height / 2)
                ? (yg(a), Ag(a, "d", !1, b))
                : (rg(a, a.F), Ag(a, "d", !0, b));
        }
    };
    Fg.prototype.N = function () {
        if (null !== this.l && null !== this.j && null !== this.g) {
            var a = this.R(this.l.y, Ub(this.g, this.j).y);
            0 < a && (a = 0);
            a < -this.T && (a = -this.T);
            var b = {};
            b[this.P()] = a + "px";
            K(this.target, b);
        }
    };
    return Fg;
}(mg));
var Cg = /** @class */ (function (_super) {
    __extends(Cg, _super);
    function Cg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cg.prototype.J = function () {
        return new F(0, parseInt(this.target.style.top, 10));
    };
    Cg.prototype.R = function (a, b) {
        return b - a;
    };
    Cg.prototype.P = function () {
        return "top";
    };
    return Cg;
}(Fg));
var Dg = /** @class */ (function (_super) {
    __extends(Dg, _super);
    function Dg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dg.prototype.J = function () {
        return new F(0, parseInt(this.target.style.bottom, 10));
    };
    Dg.prototype.R = function (a, b) {
        return a - b;
    };
    Dg.prototype.P = function () {
        return "bottom";
    };
    return Dg;
}(Fg));
function Gg(a, b, c, d) {
    if (!a.J) {
        a.J = [];
        for (var e = a.l.parentElement; e;) {
            a.J.push(e);
            if (a.O(e))
                break;
            e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null;
        }
    }
    e = a.J.slice();
    !c && a.O(e[e.length - 1]) && e.pop();
    var f;
    if (d)
        for (c = e.length - 1; 0 <= c; --c)
            (f = e[c]) && b.call(a, f, c, e);
    else
        for (c = 0; c < e.length; ++c)
            (f = e[c]) && b.call(a, f, c, e);
}
var Hg = /** @class */ (function (_super) {
    __extends(Hg, _super);
    function Hg(a, b, c) {
        var _this = _super.call(this) || this;
        _this.l = a;
        _this.g = b;
        _this.J = null;
        ue(_this, function () { return (_this.J = null); });
        _this.j = c;
        return _this;
    }
    Hg.prototype.O = function (a) {
        return this.j === a;
    };
    return Hg;
}(se));
function Ig(a) {
    return ({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[a.visibilityState ||
        a.webkitVisibilityState ||
        a.mozVisibilityState ||
        ""] || 0);
}
function Jg(a, b, c) {
    null !== b &&
        null !== pc(a.getAttribute("width")) &&
        a.setAttribute("width", b);
    null !== c &&
        null !== pc(a.getAttribute("height")) &&
        a.setAttribute("height", c);
    null !== b && (a.style.width = b + "px");
    null !== c && (a.style.height = c + "px");
}
function Kg(a) {
    Lg(a);
    var b = a.g.innerWidth;
    a = Xc(a.l).height || +a.l.height || 0;
    return new Vb(b, a);
}
function Mg(a) {
    if (a.P) {
        var b = a.j;
        b && (b.style.display = "none");
        Ng(a);
        a.P = !1;
    }
}
function Og(a) {
    var b = a.g;
    B(b, "orientationchange", a.sa);
    B(b, "resize", a.Aa);
    B(b, "scroll", a.Ga);
    B(b, "touchcancel", a.Ha);
    B(b, "touchend", a.Ia);
    B(b, "touchmove", a.Ka);
    B(b, "touchstart", a.La);
}
function Pg(a) {
    var b = a.g;
    z(b, "orientationchange", a.sa);
    z(b, "resize", a.Aa);
    z(b, "scroll", a.Ga);
    z(b, "touchcancel", a.Ha);
    z(b, "touchend", a.Ia);
    z(b, "touchmove", a.Ka);
    z(b, "touchstart", a.La);
    ue(a, function () { return Og(a); });
}
function Qg(a, b) {
    var c = parseInt(b[Rg.name], 10), d = 0 < c ? c : null;
    b = parseInt(b[Sg.name], 10);
    var e = 0 < b ? b : null;
    null != d && (a.A.height = d);
    null != e && (a.A.width = e);
    Gg(a, function (f) {
        Jg(f, e, d);
    }, !1, !0);
    Jg(a.l, e, d);
}
function Tg(a, b) {
    b = new Eg(b, a.g, a.l, a.A, a.o, function () {
        if (!a.aa) {
            a.aa = !0;
            Og(a);
            var c = a.j;
            c && c.parentNode && c.parentNode.removeChild(c);
            Ng(a);
            c && (c.style.display = "none");
        }
    }, function () { return void Ug(a); }, a.v, a.Sa, function () { }, function () { });
    te(a, b);
    return b;
}
function Ug(a) {
    a.Oa &&
        !a.Da &&
        ((a.Da = !0),
            Ud(a.v, 257, function () {
                var b = { msg_type: "manual-send-view" }, c = a.l.contentWindow;
                c && c.postMessage(a.g.JSON.stringify(b), "*");
            }));
}
function Ng(a) {
    a.R = O(a.g);
    var b;
    a.g.document.body &&
        ((b = $c(a.g.document.body, "padding")), Vg(a.g.document.body, a.Ya));
    "top" == a.o && b && 0 < b.top && a.g.scrollTo(0, a.R - b.top);
}
function Wg(a) {
    if (!a.ja())
        return !1;
    if (!a.C && a.U)
        switch (a.o) {
            case "bottom":
                return a.H >= a.pb || a.ta;
            case "top":
                return a.H > a.M.height + 30 - 5;
        }
    return 0.05 > Math.abs(le(a.g) - 1);
}
function Xg(a) {
    var b = a.j;
    if (b && a.l.parentElement) {
        Vc(b, a.M);
        var c = a.g.innerWidth;
        N(a.g).scrollWidth > c ? (b.style.width = c) : (b.style.width = "100%");
        Yg(a);
    }
}
function Zg(a) {
    var b = a.j;
    if (b) {
        var c = a.m, d = c.j, e = O(d);
        10 > Math.abs(e - c.H) ||
            ((d = e + 10 + N(d).clientHeight > me(d)),
                (d = 10 > e || d),
                c.O || c.J || c.v || (c.o || d ? c.o && d && yg(c) : rg(c, !1)),
                (c.H = e));
        c = a.m;
        e = Q(We) ? parseInt(a.g.getComputedStyle(a.l)["margin-left"], 0) : 0;
        K(c.m.getElementsByTagName("svg")[0], { left: e + "px" });
        a.P ||
            (a.g.document.body &&
                ((c = a.g.document.body),
                    Lg(a),
                    (e = $c(a.g.document.body, "padding")),
                    "bottom" == a.o && (e.bottom += a.M.height + 25),
                    Vg(c, e)),
                (b.style.display = "block"),
                (a.P = !0));
    }
}
function $g(a) {
    a.Fa = !0;
    if (!a.C && Wg(a) && (a.Y || !a.$)) {
        var b = a.j;
        b &&
            (Xg(a),
                Gg(a, function (c) {
                    qe(c);
                }, !0),
                Bg(a.m, b),
                Zg(a),
                (a.C = !0),
                (a = a.l.contentWindow) && ge(a, "ig", { rr: "vis-aa" }, "*", 2));
    }
}
function Vg(a, b) {
    a.style.paddingTop = b.top + "px";
    a.style.paddingRight = b.right + "px";
    a.style.paddingBottom = b.bottom + "px";
    a.style.paddingLeft = b.left + "px";
}
function Yg(a) {
    Gg(a, function (b) {
        Vc(b, a.A);
        b.style.width = "100%";
    }, !1, !0);
    a.l.style.display = "block";
    a.l.style.margin = "0 auto";
    if (a.Na) {
        var b_2 = a.j;
        uc(b_2, function (c) {
            wc(c, function (d) { return (c === b_2 && /display|bottom/i.test(d) ? !1 : !0); });
            if ("svg" === c.nodeName)
                return !1;
        });
    }
}
function Lg(a) {
    if ("bottom" !== a.o && "top" !== a.o)
        throw Error("Unexpected position: " + a.o);
}
function ah(a) {
    !a.N || a.aa || (2 <= a.F && a.L) || !Wg(a) ? Mg(a) : ($g(a), Zg(a));
}
function bh(a, b) {
    if ("top" == a.o && a.N && a.m && a.C && 0 > b) {
        var c = a.M.height + 30 - 5;
        a.T < c &&
            ((a.T = Math.min(Math.floor(a.T - b), c)),
                (a.g.document.body.style.paddingTop = a.T + "px"));
    }
}
var ch = /** @class */ (function (_super) {
    __extends(ch, _super);
    function ch(a, b, c, d) {
        var _this = this;
        var e = Xd;
        _this = _super.call(this, a, b, d) || this;
        _this.v = Zd;
        _this.Sa = e;
        _this.H = _this.ia = _this.R = 0;
        _this.Ma = !1;
        _this.T = 0;
        _this.aa = !1;
        _this.m = null;
        _this.L = _this.N = !1;
        _this.D = null;
        _this.Ya = $c(b.document.body, "padding");
        _this.F = 0;
        _this.Fa = _this.C = !1;
        _this.P = !0;
        _this.o = c;
        _this.A = Kg(_this);
        _this.M = null;
        _this.U = _this.$ = _this.Y = _this.Da = _this.Na = _this.Oa = !1;
        _this.pb = Zb(b || window).height / 2;
        _this.Ba = Zb(b || window).height;
        _this.Ca = ac(b);
        _this.ta = !1;
        Mg(_this);
        _this.sa = L(_this.v, 266, t(_this.Va, _this));
        _this.Aa = L(_this.v, 267, _this.Xa, _this);
        _this.Ga = L(_this.v, 268, _this.bb, _this);
        _this.Ha = L(_this.v, 269, _this.rb, _this);
        _this.Ia = L(_this.v, 270, _this.sb, _this);
        _this.Ka = L(_this.v, 271, _this.tb, _this);
        _this.La = L(_this.v, 272, _this.ub, _this);
        _this.ma = L(_this.v, 273, _this.Z, _this);
        z(a, "load", _this.ma);
        ue(_this, function () { return B(a, "load", _this.ma); });
        return _this;
    }
    ch.prototype.Va = function () {
        ah(this);
    };
    ch.prototype.Xa = function () {
        ah(this);
    };
    ch.prototype.bb = function () {
        if (this.C && this.j && this.m) {
            var a = this.m;
            a.H = O(a.j);
        }
        a = O(this.g);
        var b = a - this.R;
        bh(this, b);
        this.U &&
            (0 < b && (this.H += b),
                (this.ta = this.Ca - a <= this.Ba),
                (this.R = a));
        ah(this);
    };
    ch.prototype.rb = function () {
        var _this = this;
        this.D = "touchcancel";
        m.setTimeout(L(this.v, 274, function () {
            "touchcancel" === _this.D && ((_this.F = 0), (_this.L = !1), ah(_this));
        }), 1e3);
    };
    ch.prototype.sb = function (a) {
        var _this = this;
        if (a && a.touches) {
            this.D = "touchend";
            var b = a.touches.length;
            2 > b
                ? m.setTimeout(L(this.v, 256, function () {
                    "touchend" === _this.D &&
                        ((_this.F = b), (_this.L = !1), ah(_this));
                }), 1e3)
                : ((this.F = b), ah(this));
            !this.C || 0.05 > Math.abs(le(this.g) - 1) || rg(this.m, !0);
        }
    };
    ch.prototype.tb = function (a) {
        if (a && a.touches) {
            this.D = "touchmove";
            this.F = a.touches.length;
            this.L = !0;
            ah(this);
            if (!this.Ma && a.touches && 0 != a.touches.length && a.touches[0]) {
                a = a.touches[0].pageY;
                var b = a - this.ia;
                this.ia = a;
                a = b;
            }
            else
                a = 0;
            0 < a && (this.H += a);
            bh(this, a);
        }
    };
    ch.prototype.ub = function (a) {
        a &&
            a.touches &&
            a.touches[0] &&
            ((this.D = "touchstart"),
                (this.F = a.touches.length),
                (this.L = !1),
                ah(this),
                (this.ia = a.touches[0].pageY),
                (this.Ma =
                    (a = a.target) &&
                        "top" == this.o &&
                        this.N &&
                        this.m &&
                        this.m.m &&
                        1 === a.nodeType
                        ? dc(this.m.m, a)
                        : !1));
    };
    ch.prototype.Z = function () {
        if (this.Y)
            return !1;
        this.Y = !0;
        B(this.l, "load", this.ma);
        if (this.$ && !this.Fa)
            return !1;
        ah(this);
        return !0;
    };
    ch.prototype.ja = function () {
        return ke(this.g);
    };
    return ch;
}(Hg));
var Sg = oe("wd"), Rg = oe("ht"), dh = oe("use_manual_view"), eh = oe("use_important"), fh = oe("af_l"), gh = oe("wait_for_scroll"), hh = {
    ui: "gr",
    gvar: "ar",
    scroll_detached: "true",
    dismissable: "false",
};
function ih(a) {
    return a.classList
        ? a.classList.contains("adsbygoogle")
        : ua(a.classList
            ? a.classList
            : ("string" == typeof a.className
                ? a.className
                : (a.getAttribute && a.getAttribute("class")) || "").match(/\S+/g) || [], "adsbygoogle");
}
var jh = /** @class */ (function (_super) {
    __extends(jh, _super);
    function jh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jh.prototype.O = function (a) {
        return ih(a);
    };
    jh.prototype.Z = function () {
        if (!_super.prototype.Z.call(this))
            return !1;
        if (jd(2, this.g.location) || jd(3, this.g.location)) {
            var a = M(this.g).tagSpecificState[1] || null;
            a &&
                (a = "top" == this.o ? nf(a, 3) : nf(a, 2)) &&
                a.displayAdLoadedContent(!this.U);
        }
        return !0;
    };
    jh.prototype.ja = function () {
        var a = this.A.width;
        if (0 < $e.S().g(Pe.g, Pe.defaultValue) && a > je) {
            var b = this.g;
            a = this.A.width;
            var c;
            if ((c = b.innerWidth >= a))
                (b = b.innerHeight),
                    (a = 0 < $e.S().g(Pe.g, Pe.defaultValue) && a > je),
                    (c = b >= (a ? $e.S().g(Qe.g, Qe.defaultValue) : 0));
            a = c;
        }
        else
            a = _super.prototype.ja.call(this);
        return a;
    };
    return jh;
}(ch));
function kh(a, b) {
    if (!a.j) {
        a.j = !0;
        var c = a.l;
        var e = c.j;
        if (e && !c.m) {
            for (var d in hh)
                !hh.hasOwnProperty(d) || d in b || (b[d] = hh[d]);
            c.Oa =
                "true" === b[dh.name] ||
                    "top" === c.o ||
                    !!M(c.g).wasReactiveAdConfigReceived[2];
            c.Na = "true" === b[eh.name];
            if ((d = b[fh.name]))
                c.$ = "true" === d;
            c.U = "true" === b[gh.name] || "top" == c.o;
            Qg(c, b);
            c.m = Tg(c, b);
            b = c.A.height + 5;
            "bottom" == c.o && rf(c.g) && (b += 20);
            c.M = new Vb(c.A.width, b);
            c.ta = c.Ba >= c.Ca;
            b = c.j;
            d = c.m && c.m.m;
            b &&
                d &&
                ("top" == c.o ? b.appendChild(d) : b.insertBefore(d, b.firstChild));
            Pg(c);
            c.N = !0;
            e.setAttribute("data-anchor-status", "ready-to-display");
        }
        $g(a.l);
    }
}
var lh = /** @class */ (function (_super) {
    __extends(lh, _super);
    function lh(a, b) {
        var _this = _super.call(this, a) || this;
        _this.l = b;
        _this.j = _this.m = !1;
        return _this;
    }
    lh.prototype.ta = function (a) {
        var _this = this;
        a.fill = function (b) {
            _this.j || kh(_this, pe(b));
        };
        a.dismiss = function () {
            if (!_this.m) {
                _this.m = !0;
                var b = _this.l;
                b.m && rg(b.m, !0);
            }
        };
    };
    return lh;
}(xe));
var nh = /** @class */ (function (_super) {
    __extends(nh, _super);
    function nh(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, mh);
        return _this;
    }
    return nh;
}(zb)), mh = [1, 2, 5, 7];
var oh = /** @class */ (function (_super) {
    __extends(oh, _super);
    function oh(a) {
        var _this = _super.call(this) || this;
        Bb(_this, a, null);
        return _this;
    }
    return oh;
}(zb));
function ph(a, b) {
    return (a.left < b.right &&
        b.left < a.right &&
        a.top < b.bottom &&
        b.top < a.bottom);
}
function qh(a) {
    a = ra(a, function (b) { return new J(b.top, b.right, b.bottom, b.left); });
    a = rh(a);
    return { top: a.top, right: a.right, bottom: a.bottom, left: a.left };
}
function rh(a) {
    if (!a.length)
        throw Error("pso:box:m:nb");
    return sa(a.slice(1), function (b, c) {
        b.left = Math.min(b.left, c.left);
        b.top = Math.min(b.top, c.top);
        b.right = Math.max(b.right, c.right);
        b.bottom = Math.max(b.bottom, c.bottom);
        return b;
    }, Cc(a[0]));
}
function sh(a, b) {
    var c = N(a).clientWidth;
    var d = N(a).clientHeight;
    if ("number" !== typeof c || "number" !== typeof d)
        throw Error("No VP width and/or height.");
    c = new Vb(c, d);
    d = ne(a);
    a = O(a);
    a = th(a, c.width + d, c.height + a, d);
    return ((ph(b, a)
        ? new J(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left))
        : null) || th(0, 0, 0, 0));
}
function uh(a, b) {
    var c = ne(b), d = O(b);
    if (a.getBoundingClientRect)
        return ((a = a.getBoundingClientRect()),
            vh(a)
                ? th(a.top + d, a.right + c, a.bottom + d, a.left + c)
                : th(0, 0, 0, 0));
    b = b.document.createRange();
    b.selectNodeContents(a);
    return b.collapsed
        ? th(0, 0, 0, 0)
        : b.getBoundingClientRect
            ? ((a = b.getBoundingClientRect()),
                vh(a)
                    ? th(a.top + d, a.right + c, a.bottom + d, a.left + c)
                    : th(0, 0, 0, 0))
            : th(0, 0, 0, 0);
}
function vh(a) {
    return (!!a &&
        "number" === typeof a.top &&
        !isNaN(a.top) &&
        "number" === typeof a.right &&
        !isNaN(a.right) &&
        "number" === typeof a.bottom &&
        !isNaN(a.bottom) &&
        "number" === typeof a.left &&
        !isNaN(a.left));
}
var th = function (a, b, c, d) {
    return new J(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d));
};
function wh(a, b) {
    xh(a).forEach(b, void 0);
}
function xh(a) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
}
var T = /** @class */ (function () {
    function T(a) {
        this.g = new S();
        if (a)
            for (var b = 0; b < a.length; ++b)
                this.add(a[b]);
    }
    T.prototype.add = function (a) {
        this.g.set(a, !0);
    };
    T.prototype.contains = function (a) {
        return hf(this.g, a);
    };
    return T;
}());
var yh = "StopIteration" in m
    ? m.StopIteration
    : { message: "StopIteration", stack: "" };
function zh() { }
zh.prototype.next = function () {
    throw yh;
};
zh.prototype.cb = function () {
    return this;
};
function Ah(a) {
    if (a instanceof zh)
        return a;
    if ("function" == typeof a.cb)
        return a.cb(!1);
    if (ca(a)) {
        var b = 0, c = new zh();
        c.next = function () {
            for (;;) {
                if (b >= a.length)
                    throw yh;
                if (b in a)
                    return a[b++];
                b++;
            }
        };
        return c;
    }
    throw Error("Not implemented");
}
function Bh(a) {
    try {
        return Ah(a).next();
    }
    catch (b) {
        if (b != yh)
            throw b;
        return null;
    }
}
function Ch(a, b) {
    this.g = {};
    this.da = [];
    this.l = this.j = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1]);
    }
    else if (a)
        if (a instanceof Ch)
            for (Dh(a), c = a.da.concat(), d = 0; d < c.length; d++)
                this.set(c[d], a.get(c[d]));
        else
            for (d in a)
                this.set(d, a[d]);
}
function Dh(a) {
    if (a.j != a.da.length) {
        for (var b = 0, c = 0; b < a.da.length;) {
            var d = a.da[b];
            Object.prototype.hasOwnProperty.call(a.g, d) && (a.da[c++] = d);
            b++;
        }
        a.da.length = c;
    }
    if (a.j != a.da.length) {
        var e = {};
        for (c = b = 0; b < a.da.length;)
            (d = a.da[b]),
                Object.prototype.hasOwnProperty.call(e, d) ||
                    ((a.da[c++] = d), (e[d] = 1)),
                b++;
        a.da.length = c;
    }
}
Ch.prototype.get = function (a, b) {
    return Object.prototype.hasOwnProperty.call(this.g, a) ? this.g[a] : b;
};
Ch.prototype.set = function (a, b) {
    Object.prototype.hasOwnProperty.call(this.g, a) ||
        (this.j++, this.da.push(a), this.l++);
    this.g[a] = b;
};
Ch.prototype.cb = function (a) {
    Dh(this);
    var b = 0, c = this.l, d = this, e = new zh();
    e.next = function () {
        if (c != d.l)
            throw Error("The map has changed since the iterator was created");
        if (b >= d.da.length)
            throw yh;
        var f = d.da[b++];
        return a ? f : d.g[f];
    };
    return e;
};
function Eh(a) {
    return "transparent" == a ||
        ("rgba" == a.substring(0, 4) &&
            ((a = a.split(",")), 4 == a.length && 0.5 > parseFloat(a[3])))
        ? !0
        : !1;
}
function Fh() {
    pa(Gh, function (a) {
        a.C = null;
        a.A = null;
    });
}
function Hh(a) {
    if (!a.B.ownerDocument)
        throw Error("Wrapped node should have an owner document.");
    return a.B.ownerDocument;
}
function Ih(a) {
    a = Hh(a);
    return a.defaultView || a.parentWindow;
}
function Jh(a) {
    var b = a.l.g(a.l.j);
    return b == a || (b != a && dc(b.B, a.B));
}
function Kh(a) {
    return xh(a.B.childNodes)
        .map(function (b) { return a.l.g(b); })
        .filter(Aa(function (b) { return null === b; }));
}
function Lh(a) {
    if (!a.g())
        return null;
    var b = Kh(a.g());
    a = oa(b, a);
    if (-1 == a)
        return null;
    for (a += 1; a < b.length; ++a)
        if (b[a].m() || b[a].H())
            return b[a];
    return null;
}
function Mh(a) {
    var b = Lh(a);
    return b ? b : a.g() ? Mh(a.g()) : null;
}
function Nh(a, b) {
    b.push(a);
    a = Kh(a);
    for (var c = 0; c < a.length; ++c)
        Nh(a[c], b);
}
function Oh(a) {
    var b = a.j();
    if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
        var c = ne(Ih(a));
        a = O(Ih(a));
        c = -c;
        a = -a;
        c instanceof F
            ? ((b.left += c.x), (b.right += c.x), (b.top += c.y), (b.bottom += c.y))
            : ((b.left += c),
                (b.right += c),
                "number" === typeof a && ((b.top += a), (b.bottom += a)));
    }
    return b;
}
function W(a, b) {
    if (1 != a.B.nodeType)
        return null;
    a.o = a.o || Ih(a).getComputedStyle(a.B);
    return a.o ? a.o[b] || a.o.getPropertyValue(b) || "" : "";
}
function Ph(a, b, c) {
    if (void 0 !== a.G[b])
        return a.G[b];
    a.G[b] = Sh(a, b, c);
    return a.G[b];
}
function Th(a) {
    if (void 0 !== a.F)
        return a.F;
    var b = W(a, "position");
    if ("fixed" == b || "sticky" == b)
        b = a;
    else {
        var c = a.g();
        b =
            c && "BODY" != a.B.tagName
                ? (c = Th(c)) || ("absolute" != b && "relative" != b)
                    ? c
                    : a
                : null;
    }
    a.F = b;
    return a.F;
}
function Uh(a, b) {
    var c = Th(a);
    if (c && "relative" != W(c, "position"))
        if (null != b)
            a: {
                do {
                    var d = a.j();
                    if ((d.right - d.left) * (d.bottom - d.top) > b) {
                        b = !1;
                        break a;
                    }
                    if (a == c)
                        break;
                    a = a.g();
                } while (null !== a);
                b = !0;
            }
        else
            b = !0;
    else
        b = !1;
    return b;
}
function Sh(a, b, c) {
    var d = W(a, "position");
    a: switch (b) {
        case 0:
            var e = "hidden" == W(a, "overflow") ||
                "scroll" == W(a, "overflow") ||
                "hidden" == W(a, "overflow-x") ||
                "scroll" == W(a, "overflow-x");
            break a;
        case 1:
            e =
                "hidden" == W(a, "overflow") ||
                    "scroll" == W(a, "overflow") ||
                    "hidden" == W(a, "overflow-y") ||
                    "scroll" == W(a, "overflow-y");
            break a;
        default:
            throw Error("Unknown pageAxis: " + b);
    }
    switch (d) {
        case "fixed":
            if (e)
                return a;
            break;
        case "static":
        case "":
        case null:
            if (e && !c)
                return a;
            if (a.g())
                return Ph(a.g(), b, c);
            break;
        case "absolute":
        case "relative":
            if (e)
                return a;
            if (a.g())
                return Ph(a.g(), b, "absolute" == d);
            break;
        default:
            m.console.error("Unknown position value: " + d);
    }
    return null;
}
function Vh(a) {
    var b = a.B.scrollHeight;
    var c = a.B.clientHeight, d = Hh(a).createElement("div");
    d.style.width = "100%";
    d.style.height = Math.max(b, c) + 100 + "px";
    d.style.clear = "both";
    a.B.appendChild(d);
    b =
        a.B.scrollHeight > a.B.clientHeight &&
            a.B.scrollHeight - b > a.B.clientHeight - c;
    a.B.removeChild(d);
    return b;
}
function Wh(a) {
    return null !== a.I
        ? a.I
        : "1" != W(a, "opacity") || (a.g() && !Wh(a.g()))
            ? (a.I = !1)
            : (a.I = !0);
}
function Xh(a) {
    a = a.j();
    a = new J(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0));
    return a.left < a.right && a.top < a.bottom;
}
function Yh(a) {
    return null !== a.v
        ? a.v
        : (a.g() && Yh(a.g())) ||
            "0" == W(a, "opacity") ||
            "none" == W(a, "display") ||
            "hidden" == W(a, "visibility") ||
            (a.B.tagName &&
                "input" == a.B.tagName.toLowerCase() &&
                a.B.type &&
                "hidden" == a.B.type)
            ? (a.v = !0)
            : (a.v = !1);
}
function Zh(a, b) {
    return b(a) ? !0 : a.g() ? Zh(a.g(), b) : !1;
}
function $h(a) {
    return !Zh(a, function (b) { return "hidden" == W(b, "overflow-y"); });
}
function ai(a) {
    a = W(a, "position");
    return "absolute" == a || "relative" == a;
}
function bi(a) {
    return a.m() && ((a = parseInt(W(a, "z-index"), 10)), !isNaN(a)) ? a : 0;
}
function ci(a, b) {
    return Zh(a, function (c) { return !!c.B.tagName && c.B.tagName == b; });
}
function di(a, b) {
    return Zh(a, function (c) {
        c = c.B;
        return !!c.id && !!c.id.match && !!c.id.match(b);
    });
}
function ei(a, b) {
    return Zh(a, function (c) {
        a: {
            c = fi(c);
            for (var d = 0; d < c.length; ++d)
                if (c[d].match(b)) {
                    c = !0;
                    break a;
                }
            c = !1;
        }
        return c;
    });
}
function fi(a) {
    return (a = a.B.className) && "function" === typeof a.split
        ? Ha(a).split(/\s+/)
        : [];
}
function gi(a) {
    return "A" == a.B.tagName
        ? a.B.getAttribute("href")
        : (a = a.g())
            ? gi(a)
            : null;
}
function hi(a) {
    if (1 != a.B.nodeType) {
        var b = a.g();
        return b ? hi(b) : 0;
    }
    var c = Hh(a).createTextNode("A");
    a.B.appendChild(c);
    b = a.l.g(c);
    if (!b)
        throw (a.B.removeChild(c), Error("Unable to insert textnode"));
    a = b.j();
    b.B.parentNode && b.B.parentNode.removeChild(b.B);
    return a.bottom - a.top;
}
function ii(a, b) {
    if (b || null == a.D) {
        if (b && !b(a))
            return 0;
        var c = 0;
        if (a.H())
            c = a.B.textContent.trim().length;
        else {
            var d = Kh(a);
            for (var e = 0; e < d.length; e++)
                c += ii(d[e], b);
        }
        b || (a.D = c);
        return c;
    }
    return a.D;
}
var ji = /** @class */ (function () {
    function ji(a, b) {
        this.B = a;
        this.l = b;
        this.v = this.I = this.J = this.ra = null;
        this.G = {};
        this.o = this.A = this.D = null;
        new Ch();
    }
    ji.prototype.g = function () {
        return this.B != this.l.j && this.B.parentNode
            ? this.l.g(this.B.parentNode)
            : null;
    };
    ji.prototype.m = function () {
        return 1 == this.B.nodeType;
    };
    ji.prototype.H = function () {
        return 3 == this.B.nodeType;
    };
    ji.prototype.j = function () {
        if (!this.C) {
            this.A || (this.A = uh(this.B, Ih(this)));
            var a = Cc(this.A);
            var b = W(this, "position");
            if ("fixed" == b)
                a = sh(Ih(this), a);
            else if (this.g()) {
                var c = Ph(this.g(), 0, "absolute" == b);
                if (c) {
                    var d = c.j();
                    c = d.left;
                    d = d.right;
                    a =
                        a.left >= d || a.right <= c
                            ? null
                            : th(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c));
                }
                a &&
                    (b = Ph(this.g(), 1, "absolute" == b)) &&
                    ((c = b.j()),
                        (b = c.top),
                        (c = c.bottom),
                        (a =
                            a.top >= c || a.bottom <= b
                                ? null
                                : th(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left)));
                a =
                    a && Th(this) && "fixed" == W(Th(this), "position")
                        ? sh(Ih(this), a)
                        : a || new J(0, 0, 0, 0);
            }
            this.C = a;
        }
        return Cc(this.C);
    };
    ji.prototype.wa = function () {
        return !Xh(this) || Yh(this);
    };
    ji.prototype.kb = function () {
        var a = W(this, "background-color");
        if ((a = a ? Eh(a) : !0))
            (a = W(this, "background-image")), (a = !(a && "none" != a));
        return a;
    };
    ji.prototype.toString = function () {
        switch (this.B.nodeType) {
            case 1:
                var a = this.B;
                var b = a.tagName;
                a.id && (b += "#" + a.id);
                a.className &&
                    "function" === typeof a.className.split &&
                    (b += "." + a.className.split(/\s+/).join("."));
                return b;
            case 3:
                return "TEXT#" + this.B.textContent.substr(0, 10);
            default:
                return "HtmlNode";
        }
    };
    return ji;
}());
function ki(a, b) {
    var c = r(b);
    var d = a.m.get(c);
    if ("boolean" === typeof d)
        return d;
    d =
        a.o && 3 == b.nodeType
            ? !/\S/.test(b.data)
            : (1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType) ||
                (b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName))
                ? !0
                : !1;
    !d && b.parentNode && b != a.j && (d = ki(a, b.parentNode));
    a.m.set(c, d);
    return d;
}
var li = /** @class */ (function () {
    function li(a, b) {
        this.j = a;
        this.o = b;
        this.m = new S();
        this.l = new S();
    }
    li.prototype.g = function (a) {
        var b = r(a), c = this.l.get(b);
        if (c)
            return c;
        if (ki(this, a))
            return null;
        a = new ji(a, this);
        this.l.set(b, a);
        return a;
    };
    return li;
}()), Gh = [];
function mi(a) {
    var b = [];
    wh(a.getElementsByTagName("p"), function (c) {
        100 <= ni(c) && b.push(c);
    });
    return b;
}
function ni(a) {
    if (3 == a.nodeType)
        return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName)
        return 0;
    var b = 0;
    wh(a.childNodes, function (c) {
        b += ni(c);
    });
    return b;
}
function oi(a) {
    return 0 == a.length || isNaN(a[0])
        ? a
        : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
}
function pi(a, b) {
    if (null == a.g)
        return b;
    switch (a.g) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.g);
    }
}
function qi(a, b) {
    var c = [];
    try {
        c = b.querySelectorAll(a.m);
    }
    catch (g) { }
    if (!c.length)
        return [];
    b = va(c);
    b = pi(a, b);
    "number" === typeof a.j &&
        ((c = a.j),
            0 > c && (c += b.length),
            (b = 0 <= c && c < b.length ? [b[c]] : []));
    if ("number" === typeof a.l) {
        c = [];
        for (var d = 0; d < b.length; d++) {
            var e = mi(b[d]), f = a.l;
            0 > f && (f += e.length);
            0 <= f && f < e.length && c.push(e[f]);
        }
        b = c;
    }
    return b;
}
var ri = /** @class */ (function () {
    function ri(a, b, c, d) {
        this.m = a;
        this.j = b;
        this.l = c;
        this.g = d;
    }
    ri.prototype.toString = function () {
        return JSON.stringify({
            nativeQuery: this.m,
            occurrenceIndex: this.j,
            paragraphIndex: this.l,
            ignoreMode: this.g,
        });
    };
    return ri;
}());
function si(a) {
    if (1 != a.nodeType)
        var b = !1;
    else if ((b = "INS" == a.tagName))
        a: {
            b = ["adsbygoogle-placeholder"];
            a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d)
                c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a;
                }
            b = !0;
        }
    return b;
}
function ti(a, b, c) {
    switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if ((c = b.parentNode)) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType;)
                        d = d.nextSibling;
                c.insertBefore(a, d);
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a);
    }
    si(b) &&
        (b.setAttribute("data-init-display", b.style.display),
            (b.style.display = "block"));
}
function ui(a) {
    if (a && a.parentNode) {
        var b = a.parentNode;
        b.removeChild(a);
        si(b) &&
            (b.style.display = b.getAttribute("data-init-display") || "none");
    }
}
var wi = function (a, b, c) {
    var d = vi(b, c);
    if (d.Ja) {
        for (c = b = d.Ja; (c = d.V(c));)
            b = c;
        d = { anchor: b, position: d.Ua };
    }
    else
        d = { anchor: b, position: c };
    a["google-ama-order-assurance"] = 0;
    ti(a, d.anchor, d.position);
};
function vi(a, b) {
    var c = function (e) {
        e = xi(e);
        return null == e ? !1 : 0 < e;
    }, d = function (e) {
        e = xi(e);
        return null == e ? !1 : 0 > e;
    };
    switch (b) {
        case 0:
            return {
                Ja: yi(a.previousSibling, c),
                V: function (e) { return yi(e.previousSibling, c); },
                Ua: 0,
            };
        case 2:
            return {
                Ja: yi(a.lastChild, c),
                V: function (e) { return yi(e.previousSibling, c); },
                Ua: 0,
            };
        case 3:
            return {
                Ja: yi(a.nextSibling, d),
                V: function (e) { return yi(e.nextSibling, d); },
                Ua: 3,
            };
        case 1:
            return {
                Ja: yi(a.firstChild, d),
                V: function (e) { return yi(e.nextSibling, d); },
                Ua: 3,
            };
    }
    throw Error("Un-handled RelativePosition: " + b);
}
function xi(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
        ? a["google-ama-order-assurance"]
        : null;
}
function yi(a, b) {
    return a && b(a) ? a : null;
}
var zi = { 0: 0, 1: 1, 2: 2, 3: 3 };
var Ai = {
    BODY: { X: [1, 2], ga: !1, ha: 2, fa: 4 },
    HEADER: { X: [0, 3, 1, 2], ga: !1, ha: 1, fa: 3 },
    NAV: { X: [0, 3], ga: !1, ha: 1, fa: 3 },
    H1: { X: [0], ga: !1, ha: 1, fa: 2 },
    IMG: { X: [0, 3], ga: !0, ha: 0, fa: 1 },
    DIV: { X: [0, 3, 1, 2], ga: !0, ha: 0, fa: 1 },
    TABLE: { X: [0, 3], ga: !0, ha: 0, fa: 1 },
    TD: { X: [1, 2], ga: !0, ha: 0, fa: 1 },
    ASIDE: { X: [0, 3, 1, 2], ga: !0, ha: 0, fa: 1 },
    LI: { X: [1, 2], ga: !0, ha: 0, fa: 1 },
    SECTION: { X: [0, 3, 1, 2], ga: !0, ha: 0, fa: 1 },
}, Bi = function (a) { return ({ X: a.X.slice(0), ga: a.ga, ha: a.ha, fa: a.fa }); }, Ci = function (a, b) {
    var c = Bi(a);
    c.X = qa(a.X, function (d) { return b[d]; });
    return c;
};
var Di = /** @class */ (function () {
    function Di(a, b) {
        this.m = a;
        this.o = b;
    }
    Di.prototype.minWidth = function () {
        return this.m;
    };
    Di.prototype.height = function () {
        return this.o;
    };
    Di.prototype.g = function (a) {
        return 300 < a && 300 < this.o ? this.m : Math.min(1200, Math.round(a));
    };
    Di.prototype.l = function (a) {
        return this.g(a) + "x" + this.height();
    };
    Di.prototype.j = function () { };
    return Di;
}());
var Ei = function (a, b, c, d) {
    if (d === void 0) { d = function (e) { return e; }; }
    var e;
    return ((a.style && a.style[c] && d(a.style[c])) ||
        ((e = kc(a, b)) && e[c] && d(e[c])) ||
        null);
}, Fi = function (a) { return function (b) { return b.minWidth() <= a; }; }, Ii = function (a, b, c, d) {
    var e = a && Gi(c, b), f = Hi(b, d);
    return function (g) { return !(e && g.height() >= f); };
}, Ji = function (a) { return function (b) { return b.height() <= a; }; }, Gi = function (a, b) {
    a = yf(a, b);
    return (a ? a.y : 0) < N(b).clientHeight - 100;
}, Ki = function (a, b) {
    var c = Ei(b, a, "height", G);
    if (c)
        return c;
    var d = b.style.height;
    b.style.height = "inherit";
    c = Ei(b, a, "height", G);
    b.style.height = d;
    if (c)
        return c;
    c = Infinity;
    do
        (d = b.style && G(b.style.height)) && (c = Math.min(c, d)),
            (d = Ei(b, a, "maxHeight", G)) && (c = Math.min(c, d));
    while ((b = b.parentElement) && "HTML" != b.tagName);
    return c;
};
var Hi = function (a, b) {
    var c = a.google_unique_id;
    return b && 0 == ("number" === typeof c ? c : 0)
        ? Math.max(250, (2 * N(a).clientHeight) / 3)
        : 250;
};
function Li(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c], e = bb(d.jc);
        a[e] = d.value;
    }
}
function Mi(a, b, c) {
    var d = [];
    if ((c = c && c.g()))
        a.Ea.className = c.join(" ");
    a = a.ua;
    a.className = "adsbygoogle";
    a.setAttribute("data-ad-client", b);
    d.length && a.setAttribute("data-ad-channel", d.join("+"));
}
function Ni(a, b) {
    var c = b.clearBoth || !1;
    var d = fc(new Xb(a), "DIV"), e = d.style;
    e.width = "100%";
    e.height = "auto";
    e.clear = c ? "both" : "none";
    c = d.style;
    c.textAlign = "center";
    b.Ta && Li(c, b.Ta);
    a = fc(new Xb(a), "INS");
    c = a.style;
    c.display = "block";
    c.margin = "auto";
    c.backgroundColor = "transparent";
    b.qb && (c.marginTop = b.qb);
    b.gb && (c.marginBottom = b.gb);
    b.Qa && Li(c, b.Qa);
    d.appendChild(a);
    return { Ea: d, ua: a };
}
function Oi(a, b) {
    if (b === void 0) { b = !1; }
    if (a.j)
        return a.j;
    if ((b = a.C(b)))
        Fh(), !a.l && b && (a.l = b.j());
    return b;
}
function Pi(a) {
    return a.F.node || null;
}
function Qi(a) {
    return (a = Pi(a)) && a.m() ? si(a.B) : !1;
}
function Ri(a) {
    return kf(a.A.g)
        .map(function (b) {
        switch (b) {
            case 1:
                return "IN ARTICLE";
            case 2:
                return "ABOVE FOOTER";
            case 3:
                return "ABOVE COMMENT";
            case 4:
                return "PEDESTAL";
            case 5:
                return "BELOW CONTENT";
            default:
                return null;
        }
    })
        .filter(function (b) { return null != b; })
        .join(", ");
}
var Si = /** @class */ (function () {
    function Si(a) {
        this.F = a.l;
        this.G = a.o;
        this.l = this.j = null;
        this.o = !1;
        this.A = new T(kf(a.g.g));
    }
    Si.prototype.g = function () {
        return this.G;
    };
    Si.prototype.ib = function () {
        return this.A;
    };
    Si.prototype.I = function () { };
    Si.prototype.C = function () { };
    Si.prototype.D = function () { };
    Si.prototype.m = function () { };
    return Si;
}());
var Ti = /** @class */ (function () {
    function Ti(a, b) {
        this.l = a;
        this.o = b;
        this.g = new T();
        this.m = [];
    }
    Ti.prototype.j = function () { };
    return Ti;
}());
function Ui(a) {
    Vi(a, !1);
    var b = a.j;
    Gg(a, function (c) {
        I(c, Wi);
        qe(c);
    }, !0);
    a.l.setAttribute("width", "");
    a.l.setAttribute("height", "");
    K(a.l, Wi);
    K(a.l, Xi);
    K(b, Yi);
    qe(b);
    qe(a.l);
}
function Vi(a, b) {
    var c = a.j;
    b
        ? Zi(a, c)
        : (I(c, { display: "none" }),
            a.m && I(a.m, { display: "none" }),
            a.v && (m.clearInterval(a.v), (a.v = 0)),
            $i(a));
}
function aj(a, b) {
    var c = a.j;
    if (!b)
        return !1;
    var d = Pi(b);
    if (!d || !d.m())
        return !1;
    d = d.B;
    if (!d)
        return !1;
    a.m = a.g.document.createElement("ins");
    I(a.m, { display: "inline-block", width: "100%" });
    var e = b.g();
    b = a.m;
    e = zi[e];
    Q(Je) ? wi(b, d, e) : ti(b, d, e);
    a.A();
    I(c, { position: "absolute" });
    Vi(a, !0);
    c = a.m;
    a = a.g;
    ("INS" == c.tagName && fd.test(c.className)) ||
        (("IFRAME" == c.tagName || "INS" == c.tagName) &&
            (mf(c, "google_ads_frame") || mf(c, "aswift_"))) ||
        lf(c, a) ||
        "reserved" == c.getAttribute("__lsu_res") ||
        c.setAttribute("__lsu_res", "reserved");
    return !0;
}
function Zi(a, b) {
    I(b, { display: "block" });
    a.v = m.setInterval(function () { return a.A; }, 250);
}
function $i(a) {
    null != a.C && (a.o.body.style.overflow = a.C);
    null != a.D && (a.o.documentElement.style.overflow = a.D);
}
function bj(a) {
    var b = a.j, c = a.g.innerHeight;
    I(b, { height: c + "px" });
    a.g.scrollTo(0, Tc(a.m).y);
    b &&
        (I(b, { top: "0" }),
            a.m && I(a.m, { height: c + "px" }),
            I(b, { position: "fixed" }),
            a.o.body &&
                "hidden" != a.o.body.style.overflow &&
                ((a.C = a.o.body.style.overflow),
                    (a.D = a.o.documentElement.style.overflow),
                    (a.o.body.style.overflow = "hidden"),
                    (a.o.documentElement.style.overflow = "hidden")));
}
var cj = /** @class */ (function (_super) {
    __extends(cj, _super);
    function cj(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        _this.C = null;
        _this.v = 0;
        _this.D = null;
        _this.F = 0;
        _this.o = b.document;
        _this.m = null;
        _this.H = 0;
        Ui(_this);
        return _this;
    }
    cj.prototype.A = function () {
        if ("hidden" != this.o.body.style.overflow &&
            "fixed" != this.o.body.style.position) {
            var a = this.j;
            var b = this.g.innerHeight;
            if (this.H < b) {
                var c = { height: b + "px" };
                I(a, c);
                this.m && I(this.m, c);
                this.H = b;
            }
            (a = this.j) &&
                this.m &&
                ((this.F = Tc(this.m).y),
                    a.style.top != this.F + "px" && I(a, { top: this.F + "px" }));
        }
    };
    return cj;
}(Hg));
var Yi = {
    backgroundColor: "white",
    opacity: "1",
    position: "fixed",
    left: "0px",
    top: "0px",
    display: "none !important",
    zIndex: "2147483646",
}, Wi = { width: "100%", height: "100%", zIndex: "2147483646" }, Xi = { left: "0", position: "absolute", top: "0" };
function dj(a, b) {
    jd(4, a.location) &&
        (a = M(a).tagSpecificState[1] || null) &&
        (a = nf(a, 4)) &&
        a.displayAdLoadedContent(b);
}
var ej = /** @class */ (function () {
    function ej(a) {
        this.v = null != a.g ? a.g : !0;
        this.o = null != a.G ? a.G : 0;
        this.m = null != a.o ? a.o : 0.9;
        this.j = null != a.j ? a.j : 1.05;
        this.minWidth = null != a.A ? a.A : 0;
        this.A = null != a.m ? a.m : 25;
        this.l = null != a.l ? a.l : 0;
        this.I = null != a.v ? a.v : !1;
        this.G = a.I || null;
        this.g = a.C || null;
    }
    return ej;
}()), fj = /** @class */ (function () {
    function fj() {
    }
    return fj;
}());
var gj = /** @class */ (function () {
    function gj(a, b) {
        this.l = a;
        this.j = b;
    }
    gj.prototype.g = function (a) {
        return hj(this.l, a).contains(this.j);
    };
    return gj;
}());
function hj(a, b) {
    var c = r(b), d = a.j.get(c);
    if (d)
        return d;
    b = a.g(b);
    a.j.set(c, b);
    return b;
}
var ij = /** @class */ (function () {
    function ij() {
        this.j = new S();
    }
    return ij;
}());
function jj(a, b) {
    var c = gi(b);
    if (a.l.g(b) && null !== c)
        return c;
    b = Kh(b);
    if (1 > b.length)
        return null;
    c = jj(a, b[0]);
    for (var d = 1; d < b.length; ++d)
        if (jj(a, b[d]) != c)
            return null;
    return c;
}
var kj = /** @class */ (function (_super) {
    __extends(kj, _super);
    function kj(a) {
        var _this = _super.call(this) || this;
        _this.l = a;
        return _this;
    }
    kj.prototype.g = function (a) {
        return new T(null !== jj(this, a) ? [1] : []);
    };
    return kj;
}(ij));
var lj = /** @class */ (function (_super) {
    __extends(lj, _super);
    function lj(a) {
        var _this = _super.call(this) || this;
        _this.l = a;
        return _this;
    }
    lj.prototype.g = function (a) {
        a: if (3 == a.B.nodeType)
            var b = this.l.g(a);
        else {
            b = !1;
            a = Kh(a);
            for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
                var c = a_1[_i];
                if ((a = W(c, "display")) && "inline" != a) {
                    b = !1;
                    break a;
                }
                hj(this, c).contains(0) && (b = !0);
            }
        }
        return new T(b ? [0] : []);
    };
    return lj;
}(ij));
function mj(a, b) {
    return ii(b, function (c) { return !a.l.g(c); });
}
var nj = /** @class */ (function (_super) {
    __extends(nj, _super);
    function nj(a, b, c) {
        var _this = _super.call(this) || this;
        _this.m = a;
        _this.l = b;
        _this.o = c;
        return _this;
    }
    nj.prototype.g = function (a) {
        if (this.m.g(a) && !this.l.g(a) && !this.o.g(a) && 50 <= mj(this, a)) {
            var b = hi(a);
            a = a.j();
            b = a.bottom - a.top >= 2 * b || !1;
        }
        else
            b = !1;
        return new T(b ? [3] : []);
    };
    return nj;
}(ij));
function oj(a, b) {
    return a.l.g(b)
        ? Zh(b, function (c) {
            switch (c.B.tagName) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6":
                    return !0;
            }
            return !1;
        }) ||
            (pj(b) && 5 <= ii(b))
            ? !0
            : (b = b.g())
                ? hj(a, b).contains(2)
                : !1
        : !1;
}
function pj(a) {
    a = fi(a);
    for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
        var b = a_2[_i];
        if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) &&
            !b.match(/subtitle/))
            return !0;
    }
    return !1;
}
var qj = /** @class */ (function (_super) {
    __extends(qj, _super);
    function qj(a) {
        var _this = _super.call(this) || this;
        _this.l = a;
        return _this;
    }
    qj.prototype.g = function (a) {
        return new T(oj(this, a) ? [2] : []);
    };
    return qj;
}(ij));
function rj(a) {
    var b = [];
    pa(a, function (c) {
        1 == c.B.nodeType && (sj(c, ":before", b), sj(c, ":after", b));
    });
    return b;
}
function tj(a) {
    a = W(a, "content");
    if (!a || "none" == a || /\(.*\)/.test(a))
        return !1;
    /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
    return 0 < a.trim().length;
}
var uj = /** @class */ (function (_super) {
    __extends(uj, _super);
    function uj(a, b) {
        var _this = _super.call(this, a.B, a.l) || this;
        _this.L = a;
        _this.M = b;
        _this.o = Ih(a).getComputedStyle(a.B, _this.M);
        return _this;
    }
    uj.prototype.m = function () {
        return !1;
    };
    uj.prototype.H = function () {
        return !1;
    };
    uj.prototype.wa = function () {
        if (!tj(this) && this.kb())
            var a = !0;
        else if (!(a = this.g().wa() || Yh(this) || !Xh(this))) {
            a = tj(this);
            var c = W(this, "width");
            var b = W(this, "height");
            b = (a && "auto" == b) || 0 < parseFloat(b);
            a = !(((a && "auto" == c) || 0 < parseFloat(c)) && b);
        }
        return a;
    };
    uj.prototype.g = function () {
        return this.L;
    };
    uj.prototype.kb = function () {
        var a = Rc(this.g().B, "backgroundColor"), b = W(this, "background-color");
        return null == b || b == a || Eh(b) || "fixed" != W(this, "position");
    };
    uj.prototype.j = function () {
        switch (W(this, "position")) {
            case "absolute":
                var a = this.g().j();
                var b = a.top + parseInt(W(this, "top"), 10);
                a = a.left + parseInt(W(this, "left"), 10);
                var c = parseInt(W(this, "width"), 10), d = parseInt(W(this, "height"), 10);
                return new J(b, a + c, b + d, a);
            case "fixed":
                return new J(0, parseInt(W(this, "width"), 10), parseInt(W(this, "height"), 10), 0);
            default:
                return this.g().j();
        }
    };
    return uj;
}(ji));
var sj = function (a, b, c) {
    if (":before" == b || ":after" == b) {
        var d = new uj(a, b);
        if (!d.wa())
            switch ((c.push(d), b)) {
                case ":before":
                    a.ra = d;
                    break;
                case ":after":
                    a.J = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
            }
    }
};
var vj = new T("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
var wj = /** @class */ (function (_super) {
    __extends(wj, _super);
    function wj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    wj.prototype.g = function (a) {
        var b = a.B, c = Hh(a);
        if (3 == b.nodeType) {
            var d = b.data;
            c = -1 != d.indexOf("&") ? Za(d, c) : d;
            c = /\S/.test(c);
        }
        else
            c = !1;
        (c = c || (a instanceof uj ? tj(a) : !1)) ||
            (c = (b = b.tagName) && vj.contains(b.toUpperCase()));
        a = c && !a.wa();
        return new T(a ? [6] : []);
    };
    return wj;
}(ij));
function xj(a) {
    a.o || (a.o = new wj());
    return a.o;
}
function yj(a) {
    a.j || (a.j = new lj(new gj(xj(a), 6)));
    return a.j;
}
function zj(a) {
    a.l || (a.l = new qj(new gj(yj(a), 0)));
    return a.l;
}
var Aj = /** @class */ (function () {
    function Aj() {
        this.m = this.l = this.g = this.j = this.o = null;
    }
    return Aj;
}());
var Bj = /** @class */ (function () {
    function Bj() {
        this.g = new Aj();
    }
    return Bj;
}());
function Cj(a, b) {
    a.l.push(b);
    a.j.add(r(b));
}
function Dj(a) {
    return a.l.slice(0);
}
var Ej = /** @class */ (function () {
    function Ej(a) {
        var _this = this;
        this.l = [];
        this.j = new T();
        a && a.forEach(function (b) { return Cj(_this, b); });
    }
    Ej.prototype.contains = function (a) {
        return this.j.contains(r(a));
    };
    return Ej;
}());
var Fj = /** @class */ (function () {
    function Fj(a, b, c) {
        this.g = a;
        this.j = b;
        this.l = c;
    }
    Fj.prototype.W = function () {
        return this.l;
    };
    return Fj;
}());
var Hj = function (a, b, c) {
    b = Gj(a.ra, b, c);
    var d = new Fj(a, 0, b++);
    c.K.push(d);
    for (var _i = 0, _a = Kh(a); _i < _a.length; _i++) {
        var e = _a[_i];
        b = Hj(e, b, c);
    }
    e = new Fj(a, 1, b++);
    c.K.push(e);
    c.map.set(r(a), { start: d, end: e });
    return (b = Gj(a.J, b, c));
}, Gj = function (a, b, c) {
    if (!a)
        return b;
    var d = new Fj(a, 0, b++), e = new Fj(a, 1, b++);
    c.K.push(d);
    c.K.push(e);
    c.map.set(r(a), { start: d, end: e });
    return b;
};
function Ij(a) {
    if (a instanceof uj)
        return !0;
    if (!a.m())
        return !1;
    var b = a.B, c = W(a, "position");
    if ("HTML" == b.tagName ||
        "fixed" == c ||
        ("auto" != W(a, "z-index") && ("absolute" == c || "relative" == c)))
        return !0;
    a = W(a, "opacity");
    return "1" != a && "" != a ? !0 : !1;
}
function Jj(a) {
    var b = a.g.g();
    return b ? Kj(a.j, b) : null;
}
var Lj = /** @class */ (function () {
    function Lj(a, b) {
        this.g = a;
        this.j = b;
    }
    return Lj;
}());
function Mj(a, b, c) {
    var d = Kj(a.g, b);
    a = Kj(a.g, c);
    d = Nj(d, a);
    if (!d)
        return 0;
    switch (d.eb) {
        case 0:
            return bi(b) - bi(d.$a.g);
        case 1:
            return bi(d.Za.g) - bi(c);
        case 2:
            return bi(d.Za.g) - bi(d.$a.g);
        default:
            throw Error("Unhandled adjacency.");
    }
}
var Pj = /** @class */ (function () {
    function Pj() {
        this.g = new Oj();
    }
    return Pj;
}());
function Kj(a, b) {
    var c = r(b);
    var d = a.g.get(c);
    if (d)
        return d;
    d = b.g();
    b = !d || Ij(b) ? new Lj(b, a) : Kj(a, d);
    a.g.set(c, b);
    return b;
}
var Oj = /** @class */ (function () {
    function Oj() {
        this.g = new S();
    }
    return Oj;
}());
function Nj(a, b) {
    if (a == b)
        return null;
    var c = new S();
    var d = b;
    var e;
    for (; (e = Jj(d));) {
        if (a == e)
            return { Za: a, eb: 0, $a: d };
        c.set(r(e), d);
        d = e;
    }
    for (; (e = Jj(a));) {
        if (e == b)
            return { Za: a, eb: 1, $a: b };
        if ((d = c.get(r(e))))
            return { Za: a, eb: 2, $a: d };
        a = e;
    }
    throw Error("Contexts not in same DOM.");
}
function Qj(a, b, c, d) {
    if (d === void 0) { d = []; }
    a = [].concat(a, d);
    b = new Rj(b, c);
    for (var _i = 0, a_3 = a; _i < a_3.length; _i++) {
        var e = a_3[_i];
        e.kb() || e.wa() || Cj(b, e);
    }
    return b;
}
var Rj = /** @class */ (function (_super) {
    __extends(Rj, _super);
    function Rj(a, b) {
        var _this = _super.call(this) || this;
        _this.g = a;
        _this.o = b;
        return _this;
    }
    Rj.prototype.m = function (a) {
        var b = a.j();
        for (var e = 0; e < Dj(this).length; ++e) {
            var c = Dj(this)[e];
            if (!Jh(c))
                continue;
            var d = c.j();
            if (!ph(d, b))
                continue;
            var f = Mj(this.o, c, a);
            !(d = 0 < f) &&
                (d = 0 == f && !(c != a && dc(c.B, a.B))) &&
                ((d = a),
                    ai(c) && !ai(d)
                        ? (d = !0)
                        : !ai(c) && ai(d)
                            ? (d = !1)
                            : ((d = this.g.map.get(r(d))),
                                (c = this.g.map.get(r(c))),
                                (d = d && c && d.end.W() < c.start.W() ? !0 : !1)));
            if (d)
                return !0;
        }
        return !1;
    };
    return Rj;
}(Ej));
var Sj = /** @class */ (function () {
    function Sj(a, b) {
        this.Xb = a;
        this.cc = b;
    }
    return Sj;
}());
function Tj(a, b) {
    var c = 0, d = null;
    for (var e = 0; e < Dj(a).length; ++e) {
        var f = a.g.map.get(r(Dj(a)[e]));
        f.end.W() < b && f.end.W() > c && ((d = f), (c = f.end.W()));
    }
    return d;
}
var Uj = /** @class */ (function (_super) {
    __extends(Uj, _super);
    function Uj(a) {
        var _this = _super.call(this, void 0) || this;
        _this.g = a;
        return _this;
    }
    return Uj;
}(Ej));
var Vj = /** @class */ (function (_super) {
    __extends(Vj, _super);
    function Vj(a, b) {
        var _this = _super.call(this, a) || this;
        _this.o = b;
        return _this;
    }
    Vj.prototype.m = function (a) {
        var b = a.j(), c = Uh(a);
        for (var d = 0; d < Dj(this).length; ++d) {
            var e = Dj(this)[d];
            if (Jh(e) && (c || !(0 < Mj(this.o, a, e))) && ph(Dj(this)[d].j(), b))
                return !0;
        }
        return !1;
    };
    return Vj;
}(Uj));
var Wj = /** @class */ (function () {
    function Wj(a, b, c) {
        this.j = a;
        this.l = b;
        this.g = c;
    }
    return Wj;
}());
var Xj = /** @class */ (function () {
    function Xj(a, b, c, d, e, f, g, h) {
        this.j = a;
        this.v = b;
        this.G = c;
        this.o = d;
        this.m = e;
        this.l = f;
        this.g = g;
        this.A = h;
    }
    return Xj;
}());
var Yj = /** @class */ (function () {
    function Yj(a, b, c, d) {
        this.j = a;
        this.m = b;
        this.l = c;
        this.g = d;
    }
    return Yj;
}());
var Zj = /** @class */ (function () {
    function Zj(a, b) {
        this.j = a;
        this.l = b;
    }
    Zj.prototype.g = function (a) {
        if (!a)
            return [9];
        a = a.j();
        a = a.right - a.left;
        return this.j <= a && a <= this.l ? [] : [4];
    };
    return Zj;
}());
var ak = /** @class */ (function () {
    function ak(a, b) {
        this.g = a;
        this.j = b || null;
    }
    return ak;
}());
function bk(a) {
    if (0 != a.l)
        throw Error("Already resolved/rejected.");
}
function ck(a, b) {
    bk(a);
    a.l = 1;
    a.o = b;
    dk(a.g);
}
var fk = /** @class */ (function () {
    function fk() {
        this.g = new ek(this);
        this.l = 0;
    }
    fk.prototype.j = function (a) {
        bk(this);
        this.l = 2;
        this.m = a;
        dk(this.g);
    };
    return fk;
}());
function dk(a) {
    switch (a.g.l) {
        case 0:
            break;
        case 1:
            a.j && a.j(a.g.o);
            break;
        case 2:
            a.l && a.l(a.g.m);
            break;
        default:
            throw Error("Unhandled deferred state.");
    }
}
var ek = /** @class */ (function () {
    function ek(a) {
        this.g = a;
    }
    ek.prototype.then = function (a, b) {
        if (this.j)
            throw Error("Then functions already set.");
        this.j = a;
        this.l = b;
        dk(this);
    };
    return ek;
}());
function gk(a, b, c) {
    var d = new fk();
    a.g(new ak(function () {
        ck(d, b());
    }, c));
    return d.g;
}
function hk(a, b, c, d) {
    a.g(new ak(function () {
        ck(b, c);
    }, d));
}
function ik(a, b) {
    a.g(new ak(function () {
        b.j("n");
    }, "rrej"));
}
var jk = /** @class */ (function () {
    function jk() {
    }
    return jk;
}());
var kk = /** @class */ (function () {
    function kk(a) {
        this.g = a;
    }
    return kk;
}());
function lk(a, b) {
    var c = new fk();
    a.g.g(new ak(function () {
        mk(a, b, c);
    }, "idom"));
    return c.g;
}
function nk(a) {
    return gk(a.g, function () {
        return new Bj();
    }, "icla");
}
function ok(a, b, c) {
    var d = new fk();
    pk(a, b, new kk(c.g)).then(function (e) {
        qk(a, b).then(function (f) {
            rk(a, b, e).then(function (g) {
                ck(d, new Wj(f, g, e));
            });
        });
    });
    return d.g;
}
function sk(a, b, c) {
    var d = new fk();
    lk(a, b).then(function (e) {
        nk(a).then(function (f) {
            ok(a, e, f).then(function (g) {
                hk(a.g, d, new Yj(e, g, f, c));
            }, t(d.j, d));
        }, t(d.j, d));
    }, t(d.j, d));
    return d.g;
}
function mk(a, b, c) {
    var d = b.document.body;
    if (d) {
        var e = b.document.body.getBoundingClientRect().width;
        if (null == e)
            c.j("bw");
        else {
            var f = N(b).clientWidth, g = N(b).clientHeight;
            if (null == f || null == g)
                c.j("vp");
            else {
                var h = new li(d, !0).g(d);
                if (h) {
                    var l = new Pj();
                    tk(a, h).then(function (k) {
                        Gh = k;
                        uk(a, h).then(function (n) {
                            ck(c, new Xj(b, e, f, g, h, k, n, l));
                        });
                    });
                }
                else
                    c.j("nt");
            }
        }
    }
    else
        c.j("b");
}
function tk(a, b) {
    return gk(a.g, function () {
        var c = [];
        Nh(b, c);
        return c;
    }, "iflt");
}
function uk(a, b) {
    return gk(a.g, function () {
        var c = { map: new S(), K: [] };
        Hj(b, 0, c);
        return c;
    }, "intm");
}
function pk(a, b, c) {
    return gk(a.g, function () {
        var d = b.l;
        var e = new Vj(b.g, b.A), f = new gj(xj(c.g), 6);
        for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
            var g = d_1[_i];
            f.g(g) && Cj(e, g);
        }
        return e;
    }, "ivis");
}
function qk(a, b) {
    return gk(a.g, function () {
        var c = rj(b.l);
        return Qj(b.l, b.g, b.A, c);
    }, "ibck");
}
function rk(a, b, c) {
    return gk(a.g, function () {
        var d = b.g;
        var e = new S();
        var f = 0;
        for (var g = 0; g < d.K.length; ++g) {
            var h = d.K[g], l = h.g, k;
            if ((k = 1 == h.j))
                (k = W(l, "float")), (k = "left" == k || "right" == k);
            k && ((l = l.j().bottom), l > f && (f = l));
            e.set(r(h), f);
        }
        f = new S();
        g = Number.MAX_VALUE;
        for (h = d.K.length - 1; 0 <= h; --h)
            (l = d.K[h]),
                (k = l.g),
                0 == l.j && c.contains(k) && ((k = k.j().top), k < g && (g = k)),
                f.set(r(l), g);
        d = new S();
        g = kf(e);
        for (h = 0; h < g.length; ++h) {
            l = e.get(g[h]);
            k = f.get(g[h]);
            if ("number" !== typeof k)
                throw Error("No entry in minSubsequentTopBounds for terminal UID!");
            d.set(g[h], new Sj(l, k));
        }
        return d;
    }, "irel");
}
var vk = /** @class */ (function () {
    function vk(a) {
        this.g = a;
    }
    return vk;
}());
function wk(a) {
    var b = a.length - 1, c = new zh();
    c.next = function () {
        if (0 > b)
            throw yh;
        return a[b--];
    };
    return c;
}
var xk = { 0: !0, 1: !0 }, yk = { 2: !0, 3: !0 }, zk = { 3: !0 }, Ak = /** @class */ (function () {
    function Ak(a, b, c) {
        this.l = a;
        this.j = b;
        this.g = c;
    }
    Ak.prototype.V = function () {
        for (var a = Bh(this.j); null !== a; a = Bh(this.j)) {
            var b = a.g;
            if (1 != b.B.nodeType)
                b = null;
            else {
                var c = Ai[b.B.tagName];
                c
                    ? ((a = Ci(c, 0 == a.j ? xk : 0 < Kh(a.g).length ? yk : zk)),
                        (b = { node: b, fb: a, identifier: {} }))
                    : (b = null);
            }
            if (b &&
                ((a = b.node.j()),
                    (a = a.right - a.left),
                    (c = this.l),
                    null == a || null == c ? 0 : a >= c * this.g.m && a <= c * this.g.j))
                return (a = new fk()), ck(a, b), a.g;
        }
        b = new fk();
        b.j("na");
        return b.g;
    };
    return Ak;
}());
function Bk(a, b) {
    wa(a.l, b);
    return a;
}
var Ck = /** @class */ (function () {
    function Ck() {
        this.j = [];
        this.l = [];
        this.m = [];
    }
    Ck.prototype.g = function (a) {
        if ((a = Pi(a))) {
            for (var b = 0; b < this.m.length; ++b)
                if (ci(a, this.m[b]))
                    return [6];
            for (b = 0; b < this.j.length; ++b)
                if (di(a, this.j[b]))
                    return [6];
            for (b = 0; b < this.l.length; ++b)
                if (ei(a, this.l[b]))
                    return [6];
        }
        return [];
    };
    return Ck;
}());
var Dk = [/cookie/, /(^|(-|_))sticky((-|_)|$)/], Ek = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/], Fk = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/], Gk = [
    /(^|(-|_))taboola((-|_)|$)/,
    /(^|(-|_))OUTBRAIN((-|_)|$)/,
    /(^|(-|_))revcontent((-|_)|$)/,
], Hk = ["A", "FORM", "BUTTON"];
function Ik(a) {
    return function (b) { return !!(b.Pa & a); };
}
var X = /** @class */ (function (_super) {
    __extends(X, _super);
    function X(a, b, c, d) {
        if (d === void 0) { d = !1; }
        var _this = _super.call(this, a, b) || this;
        _this.Pa = c;
        _this.Sb = d;
        return _this;
    }
    X.prototype.ab = function () {
        return this.Pa;
    };
    X.prototype.j = function (a, b, c) {
        b.google_ad_resize ||
            ((c.style.height = this.height() + "px"), (b.rpe = !0));
    };
    return X;
}(Di));
var Jk = db("script");
var Kk = /** @class */ (function () {
    function Kk(a, b, c, d, e, f, g, h, l, k, n, p) {
        if (c === void 0) { c = null; }
        if (d === void 0) { d = null; }
        if (e === void 0) { e = null; }
        if (f === void 0) { f = null; }
        if (g === void 0) { g = null; }
        if (h === void 0) { h = null; }
        if (l === void 0) { l = null; }
        if (k === void 0) { k = null; }
        if (n === void 0) { n = null; }
        if (p === void 0) { p = null; }
        this.A = a;
        this.J = b;
        this.Pa = c;
        this.j = d;
        this.F = e;
        this.g = f;
        this.l = g;
        this.I = h;
        this.C = l;
        this.m = k;
        this.o = n;
        this.D = p;
        this.H = this.G = this.v = null;
    }
    Kk.prototype.size = function () {
        return this.J;
    };
    return Kk;
}()); /*
      
      Copyright 2019 The AMP HTML Authors. All Rights Reserved.
      
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      
           http://www.apache.org/licenses/LICENSE-2.0
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS-IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
     */
var Lk = (_a = {},
    _a["image_stacked"] = 1 / 1.91,
    _a["image_sidebyside"] = 1 / 3.82,
    _a["mobile_banner_image_sidebyside"] = 1 / 3.82,
    _a["pub_control_image_stacked"] = 1 / 1.91,
    _a["pub_control_image_sidebyside"] = 1 / 3.82,
    _a["pub_control_image_card_stacked"] = 1 / 1.91,
    _a["pub_control_image_card_sidebyside"] = 1 / 3.74,
    _a["pub_control_text"] = 0,
    _a["pub_control_text_card"] = 0,
    _a), Mk = (_b = {},
    _b["image_stacked"] = 80,
    _b["image_sidebyside"] = 0,
    _b["mobile_banner_image_sidebyside"] = 0,
    _b["pub_control_image_stacked"] = 80,
    _b["pub_control_image_sidebyside"] = 0,
    _b["pub_control_image_card_stacked"] = 85,
    _b["pub_control_image_card_sidebyside"] = 0,
    _b["pub_control_text"] = 80,
    _b["pub_control_text_card"] = 80,
    _b), Nk = (_c = {},
    _c["pub_control_image_stacked"] = 100,
    _c["pub_control_image_sidebyside"] = 200,
    _c["pub_control_image_card_stacked"] = 150,
    _c["pub_control_image_card_sidebyside"] = 250,
    _c["pub_control_text"] = 100,
    _c["pub_control_text_card"] = 150,
    _c);
function Ok(a) {
    var b = 0;
    a.qa && b++;
    a.ka && b++;
    a.la && b++;
    if (3 > b)
        return {
            pa: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.",
        };
    b = a.qa.split(",");
    var c = a.la.split(",");
    a = a.ka.split(",");
    if (b.length !== c.length || b.length !== a.length)
        return {
            pa: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
        };
    if (2 < b.length)
        return {
            pa: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " +
                ("you are providing " + b.length + " parameters. Example: " + '\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"' + "."),
        };
    var d = [], e = [];
    for (var g = 0; g < b.length; g++) {
        var f = Number(c[g]);
        if (isNaN(f) || 0 === f)
            return {
                pa: "Wrong value '" + c[g] + "' for " + "data-matched-content-rows-num" + ".",
            };
        d.push(f);
        f = Number(a[g]);
        if (isNaN(f) || 0 === f)
            return {
                pa: "Wrong value '" + a[g] + "' for " + "data-matched-content-columns-num" + ".",
            };
        e.push(f);
    }
    return { la: d, ka: e, Cb: b };
}
function Pk(a) {
    return 1200 <= a
        ? { width: 1200, height: 600 }
        : 850 <= a
            ? { width: a, height: Math.floor(0.5 * a) }
            : 550 <= a
                ? { width: a, height: Math.floor(0.6 * a) }
                : 468 <= a
                    ? { width: a, height: Math.floor(0.7 * a) }
                    : { width: a, height: Math.floor(3.44 * a) };
}
var Qk = /** @class */ (function (_super) {
    __extends(Qk, _super);
    function Qk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Qk.prototype.g = function (a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)));
    };
    return Qk;
}(Di));
function Rk(a, b) {
    Sk(a, b);
    if ("pedestal" == b.google_content_recommendation_ui_type)
        return new Kk(9, new Qk(a, Math.floor(a * b.google_phwr)));
    var c = gc();
    468 > a
        ? c
            ? ((c = a - 8 - 8),
                (c =
                    Math.floor(c / 1.91 + 70) +
                        Math.floor(11 *
                            (c * Lk.mobile_banner_image_sidebyside +
                                Mk.mobile_banner_image_sidebyside) +
                            96)),
                (a = {
                    za: a,
                    xa: c,
                    ka: 1,
                    la: 12,
                    qa: "mobile_banner_image_sidebyside",
                }))
            : ((a = Pk(a)),
                (a = {
                    za: a.width,
                    xa: a.height,
                    ka: 1,
                    la: 13,
                    qa: "image_sidebyside",
                }))
        : ((a = Pk(a)),
            (a = { za: a.width, xa: a.height, ka: 4, la: 2, qa: "image_stacked" }));
    Tk(b, a);
    return new Kk(9, new Qk(a.za, a.xa));
}
function Uk(a, b) {
    Sk(a, b);
    var c = Ok({
        la: b.google_content_recommendation_rows_num,
        ka: b.google_content_recommendation_columns_num,
        qa: b.google_content_recommendation_ui_type,
    });
    if (c.pa)
        a = { za: 0, xa: 0, ka: 0, la: 0, qa: "image_stacked", pa: c.pa };
    else {
        var d = 2 === c.Cb.length && 468 <= a ? 1 : 0;
        var e = c.Cb[d];
        e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
        var f = Nk[e];
        var g = c.ka[d];
        for (; a / g < f && 1 < g;)
            g--;
        f = g;
        d = c.la[d];
        c = Math.floor((((a - 8 * f - 8) / f) * Lk[e] + Mk[e]) * d + 8 * d + 8);
        a =
            1500 < a
                ? {
                    width: 0,
                    height: 0,
                    ob: "Calculated slot width is too large: " + a,
                }
                : 1500 < c
                    ? {
                        width: 0,
                        height: 0,
                        ob: "Calculated slot height is too large: " + c,
                    }
                    : { width: a, height: c };
        a = a.ob
            ? { za: 0, xa: 0, ka: 0, la: 0, qa: e, pa: a.ob }
            : { za: a.width, xa: a.height, ka: f, la: d, qa: e };
    }
    if (a.pa)
        throw new Yd(a.pa);
    Tk(b, a);
    return new Kk(9, new Qk(a.za, a.xa));
}
function Sk(a, b) {
    if (0 >= a)
        throw new Yd("Invalid responsive width from Matched Content slot " +
            b.google_ad_slot +
            ": " +
            a +
            ". Please ensure to put this Matched Content slot into a non-zero width div container.");
}
function Tk(a, b) {
    a.google_content_recommendation_ui_type = b.qa;
    a.google_content_recommendation_columns_num = b.ka;
    a.google_content_recommendation_rows_num = b.la;
}
var Vk = /** @class */ (function (_super) {
    __extends(Vk, _super);
    function Vk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vk.prototype.g = function () {
        return this.minWidth();
    };
    Vk.prototype.j = function (a, b, c) {
        If(a, c);
        b.google_ad_resize ||
            ((c.style.height = this.height() + "px"), (b.rpe = !0));
    };
    return Vk;
}(Di));
var Wk = {
    "image-top": function (a) { return (600 >= a ? 284 + 0.414 * (a - 250) : 429); },
    "image-middle": function (a) {
        return 500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500);
    },
    "image-side": function (a) {
        return 500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500);
    },
    "text-only": function (a) { return (500 >= a ? 187 - 0.228 * (a - 250) : 130); },
    "in-article": function (a) {
        return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200;
    },
};
var Xk = /** @class */ (function (_super) {
    __extends(Xk, _super);
    function Xk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Xk.prototype.g = function () {
        return Math.min(1200, this.minWidth());
    };
    return Xk;
}(Di)), Yk = function (a, b, c, d, e) {
    var f = e.google_ad_layout || "image-top";
    if ("in-article" == f && "false" != e.google_full_width_responsive) {
        var g = Bf(b, c, a, 0.2, e);
        if (!0 !== g)
            e.gfwrnwer = g;
        else if ((g = N(b).clientWidth))
            (e.google_full_width_responsive_allowed = !0),
                c.parentElement && (Gf(b, c), If(b, c), (a = g));
    }
    if (250 > a)
        throw new Yd("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
    a = Math.min(1200, Math.floor(a));
    if (d && "in-article" != f) {
        f = Math.ceil(d);
        if (50 > f)
            throw new Yd("Fluid responsive ads must be at least 50px tall: height=" + f);
        return new Kk(11, new Di(a, f));
    }
    if ("in-article" != f && (d = e.google_ad_layout_key)) {
        f = "" + d;
        c = Math.pow(10, 3);
        if ((e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length))
            for (b = [], g = 0; g < e; g++)
                b.push(parseInt(d[g], 36) / c);
        else
            b = null;
        if (!b)
            throw new Yd("Invalid data-ad-layout-key value: " + f);
        f = (a + -725) / 1e3;
        c = 0;
        d = 1;
        e = b.length;
        for (g = 0; g < e; g++)
            (c += b[g] * d), (d *= f);
        f = Math.ceil(1e3 * c - -725 + 10);
        if (isNaN(f))
            throw new Yd("Invalid height: height=" + f);
        if (50 > f)
            throw new Yd("Fluid responsive ads must be at least 50px tall: height=" + f);
        if (1200 < f)
            throw new Yd("Fluid responsive ads must be at most 1200px tall: height=" + f);
        return new Kk(11, new Di(a, f));
    }
    d = Wk[f];
    if (!d)
        throw new Yd("Invalid data-ad-layout value: " + f);
    c = Gi(c, b);
    b = N(b).clientWidth;
    b =
        "in-article" !== f || c || a !== b
            ? Math.ceil(d(a))
            : Math.ceil(1.25 * d(a));
    return new Kk(11, "in-article" == f ? new Xk(a, b) : new Di(a, b));
};
var Zk = function (a) { return function (b) {
    for (var c = a.length - 1; 0 <= c; --c)
        if (!a[c](b))
            return !1;
    return !0;
}; }, $k = function (a, b, c) {
    var d = a.length;
    var e = null;
    for (var f = 0; f < d; ++f) {
        var g = a[f];
        if (b(g)) {
            if (!c || c(g))
                return g;
            null === e && (e = g);
        }
    }
    return e;
};
var Y = [
    new X(970, 90, 2),
    new X(728, 90, 2),
    new X(468, 60, 2),
    new X(336, 280, 1),
    new X(320, 100, 2),
    new X(320, 50, 2),
    new X(300, 600, 4),
    new X(300, 250, 1),
    new X(250, 250, 1),
    new X(234, 60, 2),
    new X(200, 200, 1),
    new X(180, 150, 1),
    new X(160, 600, 4),
    new X(125, 125, 1),
    new X(120, 600, 4),
    new X(120, 240, 4),
    new X(120, 120, 1, !0),
], al = [
    Y[6],
    Y[12],
    Y[3],
    Y[0],
    Y[7],
    Y[14],
    Y[1],
    Y[8],
    Y[10],
    Y[4],
    Y[15],
    Y[2],
    Y[11],
    Y[5],
    Y[13],
    Y[9],
    Y[16],
];
var bl = function (a, b, c, d, e) {
    "false" == e.google_full_width_responsive
        ? (c = { ba: a, ca: 1 })
        : ("autorelaxed" == b && e.google_full_width_responsive) ||
            "auto" == b ||
            /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) ||
            e.google_ad_resize
            ? (488 > N(c).clientWidth && (Cf(c) || Q(Me)) && Gf(c, d),
                (b = Df(a, c, d, e)),
                (c =
                    !0 !== b
                        ? { ba: a, ca: b }
                        : { ba: N(c).clientWidth || a, ca: !0 }))
            : (c = { ba: a, ca: 2 });
    var f = c.ba, g = c.ca;
    return !0 !== g
        ? { ba: a, ca: g }
        : d.parentElement
            ? { ba: f, ca: g }
            : { ba: a, ca: g };
}, el = function (a, b, c, d, e) {
    var _a = ce(247, function () { return bl(a, b, c, d, e); }), f = _a.ba, g = _a.ca;
    var h = !0 === g;
    var l = G(d.style.width), k = G(d.style.height), _b = cl(f, b, c, d, e, h), n = _b.ya, p = _b.va, q = _b.ab, C = _b.Bb;
    h = dl(b, q);
    var D;
    var u = (D = Ei(d, c, "marginLeft", G)) ? D + "px" : "", A = (D = Ei(d, c, "marginRight", G)) ? D + "px" : "";
    D = Ei(d, c, "zIndex") || "";
    return new Kk(h, n, q, null, C, g, p, u, A, k, l, D);
}, cl = function (a, b, c, d, e, f) {
    b =
        "auto" == b
            ? 0.25 >= a / Math.min(1200, N(c).clientWidth)
                ? 4
                : 3
            : Af(b);
    var g;
    var h = !1;
    var l = !1;
    if (488 > N(c).clientWidth) {
        g = zf(d, c);
        var k = Gi(d, c);
        h = !k && g;
        l = k && g;
    }
    k = 488 > N(c).clientWidth;
    var n = [Fi(a), Ik(b)];
    Cf(c) || n.push(Ii(k, c, d, l));
    null != e.google_max_responsive_height &&
        n.push(Ji(e.google_max_responsive_height));
    var p = [function (u) { return !u.Sb; }];
    (!h && !l) || Cf(c) || ((h = Ki(c, d)), p.push(Ji(h)));
    var q = k && !f && 3 === b && fl(c)
        ? new X(a, Math.floor(a / 1.2), 1)
        : $k(al.slice(0), Zk(n), Zk(p));
    if (!q)
        throw new Yd("No slot size for availableWidth=" + a);
    var _a = ce(248, function () {
        var u;
        a: if (f) {
            if (e.gfwrnh && (u = G(e.gfwrnh))) {
                u = { ya: new Vk(a, u), va: !0 };
                break a;
            }
            u = a / 1.2;
            if (Cf(c))
                var A = u;
            else {
                A = Math;
                var V = A.min;
                if (e.google_resizing_allowed ||
                    "true" == e.google_full_width_responsive)
                    var E = Infinity;
                else {
                    E = d;
                    var x = Infinity;
                    do {
                        var w = Ei(E, c, "height", G);
                        w && (x = Math.min(x, w));
                        (w = Ei(E, c, "maxHeight", G)) && (x = Math.min(x, w));
                    } while ((E = E.parentElement) && "HTML" != E.tagName);
                    E = x;
                }
                A = V.call(A, u, E);
                if (A < 0.5 * u || 100 > A)
                    A = u;
            }
            Q(Te) && !Gi(d, c) && (A = Math.max(A, 0.5 * N(c).clientHeight));
            u = { ya: new Vk(a, Math.floor(A)), va: A < u ? 102 : !0 };
        }
        else
            u = { ya: q, va: 100 };
        return u;
    }), C = _a.ya, D = _a.va;
    return "in-article" === e.google_ad_layout && gl(c)
        ? { ya: hl(a, c, d, C, e), va: !1, ab: b, Bb: g }
        : { ya: C, va: D, ab: b, Bb: g };
};
var dl = function (a, b) {
    if ("auto" == a)
        return 1;
    switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8;
    }
    throw Error("bad mask");
}, hl = function (a, b, c, d, e) {
    var f = e.google_ad_height || Ei(c, b, "height", G);
    b = Yk(a, b, c, f, e).size();
    return b.minWidth() * b.height() > a * d.height()
        ? new X(b.minWidth(), b.height(), 1)
        : d;
}, gl = function (a) { return Q(Re) || (a.location && "#hffwroe2etoq" == a.location.hash); }, fl = function (a) { return Q(Oe) || (a.location && "#affwroe2etoq" == a.location.hash); };
var il = /** @class */ (function (_super) {
    __extends(il, _super);
    function il() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    il.prototype.g = function () {
        return this.minWidth();
    };
    il.prototype.l = function (a) {
        return _super.prototype.l.call(this, a) + "_0ads_al";
    };
    return il;
}(Di)), jl = [
    new il(728, 15),
    new il(468, 15),
    new il(200, 90),
    new il(180, 90),
    new il(160, 90),
    new il(120, 90),
], kl = function (a, b, c) {
    var d = $k(jl, Fi(a));
    if (!d)
        throw new Yd("No link unit size for width=" + a + "px");
    a = Math.min(a, 1200);
    d = d.height();
    b = Math.max(d, b);
    a = new Kk(10, new il(a, Math.min(b, 15 == d ? 90 : 250))).size();
    b = a.minWidth();
    a = a.height();
    15 <= c && (a = c);
    return new Kk(10, new il(b, a));
}, ll = function (a, b, c, d) {
    if ("false" == d.google_full_width_responsive)
        return ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = 1), a);
    var e = Df(a, b, c, d);
    if (!0 !== e)
        return ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = e), a);
    e = N(b).clientWidth;
    if (!e)
        return a;
    d.google_full_width_responsive_allowed = !0;
    If(b, c);
    return e;
};
var ml = function (a, b, c, d, e) {
    var f;
    (f = N(b).clientWidth)
        ? 488 > N(b).clientWidth
            ? b.innerHeight >= b.innerWidth
                ? ((e.google_full_width_responsive_allowed = !0),
                    If(b, c),
                    (f = { ba: f, ca: !0 }))
                : (f = { ba: a, ca: 5 })
            : (f = { ba: a, ca: 4 })
        : (f = { ba: a, ca: 10 });
    var g = f.ba, h = f.ca;
    if (!0 !== h || a == g)
        return new Kk(12, new Di(a, d), null, null, !0, h, 100);
    var _a = cl(g, "auto", b, c, e, !0), l = _a.ya, k = _a.va, n = _a.ab;
    return new Kk(1, l, n, 2, !0, h, k);
};
var nl = function (a, b, c, d, e) {
    var f = d.google_ad_height || Ei(c, e, "height", G);
    switch (a) {
        case 5:
            var _a = ce(247, function () {
                return bl(b, d.google_ad_format, e, c, d);
            }), g = _a.ba, h = _a.ca;
            !0 === h && b != g && If(e, c);
            !0 === h
                ? (d.google_full_width_responsive_allowed = !0)
                : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = h));
            return Rk(g, d);
        case 9:
            return Uk(b, d);
        case 4:
            return (a = ll(b, e, c, d)), kl(a, Ki(e, c), f);
        case 8:
            return Yk(b, e, c, f, d);
        case 10:
            return ml(b, e, c, f, d);
    }
};
var ol = /** @class */ (function (_super) {
    __extends(ol, _super);
    function ol(a) {
        var _this = _super.call(this, a) || this;
        _this.v = "";
        return _this;
    }
    ol.prototype.I = function () {
        return 1;
    };
    ol.prototype.C = function (a) {
        if (a === void 0) { a = !1; }
        var b = Pi(this);
        if (!b)
            return null;
        Qi(this) && (this.v = b.B.style.display);
        var c = Ri(this), d = Hh(b), e = Ni(d, { qb: "10px", gb: "10px", clearBoth: this.o });
        e.Ea.className = "google-auto-placed";
        var f = e.ua, g = f.style;
        g.display = "inline-block";
        g.boxSizing = "border-box";
        g.width = "100%";
        g.height = a ? "auto" : "100px";
        g.backgroundColor = "#f60";
        g.border = "#000 solid 1px";
        c &&
            ((g = d.createElement("span")),
                (g.style.fontSize = "small"),
                g.appendChild(d.createTextNode(c)),
                f.appendChild(g));
        c = e.Ea;
        e = e.ua;
        f = this.g();
        d = b.B;
        f = zi[f];
        Q(Je) ? wi(c, d, f) : ti(c, d, f);
        if (a)
            try {
                this.D(e, bc());
            }
            catch (h) {
                e.style.height = "100px";
            }
        this.j = b.l.g(c);
        this.j ||
            (c.parentNode.removeChild(c), Qi(this) && (b.B.style.display = this.v));
        return this.j;
    };
    ol.prototype.D = function (a, b) {
        var _a;
        var c = (_a = {}, _a["google_ad_format"] = "auto", _a), d = 1, e = a.offsetWidth ||
            ((c.google_ad_resize || !1) && Ei(a, b, "width", G)) ||
            c.google_ad_width ||
            0;
        (Q(Se) || (b.location && "#ooimne2e" == b.location.hash)) &&
            4 === d &&
            ((c.google_ad_format = "auto"), (d = 1));
        var f = (f = nl(d, e, a, c, b)) ? f : el(e, c.google_ad_format, b, a, c);
        f.size().j(b, c, a);
        null != f.Pa && (c.google_responsive_formats = f.Pa);
        null != f.F && (c.google_safe_for_responsive_override = f.F);
        null != f.g &&
            (!0 === f.g
                ? (c.google_full_width_responsive_allowed = !0)
                : ((c.google_full_width_responsive_allowed = !1),
                    (c.gfwrnwer = f.g)));
        null != f.l && !0 !== f.l && (c.gfwrnher = f.l);
        b = f.o || c.google_ad_width;
        null != b && (c.google_resizing_width = b);
        b = f.m || c.google_ad_height;
        null != b && (c.google_resizing_height = b);
        b = f.size().g(e);
        var g = f.size().height();
        c.google_ad_resize ||
            ((c.google_ad_width = b),
                (c.google_ad_height = g),
                (c.google_ad_format = f.size().l(e)),
                (c.google_responsive_auto_format = f.A),
                null != f.j && (c.armr = f.j),
                (c.google_ad_resizable = !0),
                (c.google_override_format = 1),
                (c.google_loader_features_used = 128),
                !0 === f.g && (c.gfwrnh = f.size().height() + "px"));
        null != f.I && (c.gfwroml = f.I);
        null != f.C && (c.gfwromr = f.C);
        null != f.m && (c.gfwroh = f.m);
        null != f.o && (c.gfwrow = f.o);
        null != f.D && (c.gfwroz = f.D);
        null != f.v && (c.gml = f.v);
        null != f.G && (c.gmr = f.G);
        null != f.H && (c.gzi = f.H);
        e = ed();
        e = gd(e) || e;
        id(e.location, "google_responsive_slot_debug") &&
            (c.ds = "outline:thick dashed " + (b && g ? (!0 !== f.g || !0 !== f.l ? "#ffa500" : "#0f0") : "#f00") + " !important;");
        id(e.location, "google_responsive_dummy_ad") &&
            (ua([1, 2, 3, 4, 5, 6, 7, 8], f.A) || 1 === f.j) &&
            2 !== f.j &&
            ((e = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{ key: "qid", value: "DUMMY_AD" }],
            })),
                (c.dash = "<" + Jk + ">window.top.postMessage('" + e + "', '*'); \n                 </" + Jk + "> \n                 <div id=\"dummyAd\" style=\"width:" + b + "px;height:" + g + "px; \n                   background:#ddd;border:3px solid #f00;box-sizing:border-box; \n                   color:#000;\"> \n                   <p>Requested size:" + b + "x" + g + "</p> \n                   <p>Rendered size:" + b + "x" + g + "</p> \n                 </div>"));
        1 != d && ((c = f.size().height()), (a.style.height = c + "px"));
    };
    ol.prototype.m = function () {
        if (this.j) {
            var a = this.j;
            a.B.parentNode && a.B.parentNode.removeChild(a.B);
            this.j = null;
            Qi(this) && (Pi(this).B.style.display = this.v);
            Fh();
        }
    };
    return ol;
}(Si));
var pl = /** @class */ (function (_super) {
    __extends(pl, _super);
    function pl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pl.prototype.j = function () {
        return new ol(this);
    };
    return pl;
}(Ti));
new T(["comments"]);
new T(["allcomments"]);
new T(["post-container", "post", "type-post"]);
var rl = function (a, b, c) {
    var d = [];
    a.map(function (e) { return ql(e, b, c); }).forEach(function (e) { return wa(d, e); });
    return d;
}, ql = function (a, b, c) {
    var d = a.fb.X, e = a.node;
    if (!e)
        return [];
    var f = [];
    e.g() && ua(d, 0) && f.push(0);
    ua(d, 1) && f.push(1);
    ua(d, 2) && (!ua(d, 1) || 0 < Kh(e).length) && f.push(2);
    e.g() && ua(d, 3) && f.push(3);
    return f.map(function (g) {
        var _a;
        g = new pl(a, g);
        b.forEach(g.g.add, g.g);
        (_a = g.m).push.apply(_a, c);
        return g.j();
    });
}, sl = function (a, b) {
    a = Pi(b) ? a.map.get(r(Pi(b))) : void 0;
    if (!a)
        return -1;
    switch (b.g()) {
        case 0:
            return a.start.W();
        case 1:
            return a.start.W() + 1;
        case 2:
            return a.end.W();
        case 3:
            return a.end.W() + 1;
    }
    return -1;
}, tl = function (a, b) {
    a = Pi(b) ? a.map.get(r(Pi(b))) : void 0;
    if (!a)
        return -1;
    switch (b.g()) {
        case 0:
            return a.start.W() - 0.1;
        case 3:
            return a.end.W() + 0.1;
        case 1:
            return a.start.W() + 0.1;
        case 2:
            return a.end.W() - 0.1;
    }
    return -1;
};
function ul(a, b) {
    b && a.g.push(b);
    return a;
}
function vl(a, b) {
    a.j.push(b);
    return a;
}
function wl(a, b) {
    return gk(a.m, function () {
        var c = [];
        for (var d = 0; d < a.j.length; ++d) {
            var e = a.j[d].g(b);
            wa(c, e);
            if (0 < e.length)
                break;
        }
        return c;
    }, "flap");
}
function xl(a, b) {
    return gk(a.m, function () {
        if (0 == a.g.length)
            var c = [];
        else {
            var d = Math.floor(tl(a.o, b));
            if ((d = -1 != d ? d + b.I() + "|" + b.o + "|10px|10px" : null) &&
                hf(a.l, d))
                c = a.l.get(d);
            else {
                var e = [], f = Oi(b);
                try {
                    for (var g = 0; g < a.g.length; ++g)
                        if (((c = a.g[g].g(f)), wa(e, c), 0 < c.length)) {
                            b.m();
                            break;
                        }
                }
                finally {
                    b.m();
                }
                null != d && a.l.set(d, e);
                c = e;
            }
        }
        return c;
    }, "flfa");
}
function yl(a, b) {
    var c = new fk();
    wl(a, b).then(function (d) {
        0 < d.length
            ? ck(c, d)
            : xl(a, b).then(function (e) {
                ck(c, d.concat(e));
            });
    });
    return c.g;
}
var zl = /** @class */ (function () {
    function zl(a, b) {
        this.m = a;
        this.g = [];
        this.j = [];
        this.o = b;
        this.l = new S();
    }
    return zl;
}());
var Al = /** @class */ (function () {
    function Al(a) {
        this.j = a;
    }
    Al.prototype.g = function (a) {
        if (!a)
            return [];
        for (var b = 0; b < this.j.length; ++b)
            if (this.j[b].m(a))
                return [2];
        return [];
    };
    return Al;
}());
var Bl = /** @class */ (function () {
    function Bl(a, b) {
        this.j = a;
        this.l = b;
    }
    Bl.prototype.g = function (a) {
        if (!a)
            return [9];
        var b = me(this.j, !0);
        return null == b ? [16] : b - a.j().bottom < this.l ? [17] : [];
    };
    return Bl;
}());
var Cl = /** @class */ (function () {
    function Cl(a, b) {
        this.j = a;
        this.l = b;
    }
    Cl.prototype.g = function (a) {
        for (a = Math.floor(tl(this.j, a)); 0 < a; a--) {
            var b = this.j.K[a];
            if (!b.g.wa()) {
                if ((0 == b.j ? Oh(b.g).top : Oh(b.g).bottom) <= this.l)
                    break;
                return [];
            }
        }
        return [10];
    };
    return Cl;
}());
function Dl(a, b, c) {
    return {
        top: a.g - c,
        right: a.j + a.l + b,
        bottom: a.g + c,
        left: a.j - b,
    };
}
var El = /** @class */ (function () {
    function El(a, b, c) {
        this.j = a;
        this.g = b;
        this.l = c;
    }
    return El;
}());
var Fl = /** @class */ (function () {
    function Fl(a) {
        var b = [];
        for (var c = 0; c < Dj(a).length; ++c)
            b.push(Dj(a)[c].j());
        this.l = b;
        this.j = new S();
    }
    Fl.prototype.g = function (a) {
        var b = r(a);
        if (hf(this.j, b))
            return this.j.get(b);
        a: {
            var c = a.j();
            c = new El(c.left, c.top + a.B.scrollHeight, a.B.scrollWidth);
            for (var _i = 0, _a = this.l; _i < _a.length; _i++) {
                e = _a[_i];
                b: {
                    if (c.g >= Math.floor(e.bottom)) {
                        var d = !1;
                        break b;
                    }
                    d = Math.ceil(e.left);
                    var f = c.j + c.l;
                    d = !(Math.floor(e.right) <= c.j || f <= d);
                }
                if (d) {
                    var e = !0;
                    break a;
                }
            }
            e = !1;
        }
        e = !e && a.B.scrollHeight > a.B.clientHeight && $h(a);
        c = a.g();
        c = !c || this.g(c);
        a = e && c ? !0 : e ? Vh(a) : c && !Vh(a);
        this.j.set(b, a);
        return a;
    };
    return Fl;
}());
var Gl = /** @class */ (function () {
    function Gl(a, b) {
        this.l = a;
        this.j = b;
    }
    Gl.prototype.g = function (a) {
        var b = Pi(a);
        if (!b)
            return [];
        switch (a.g()) {
            case 0:
            case 3:
                return (a = b.g()), b != this.l && a && this.j.g(a) ? [] : [14];
            case 1:
            case 2:
                return this.j.g(b) ? [] : [14];
            default:
                throw Error("Unhandled position.");
        }
    };
    return Gl;
}());
var Hl = /** @class */ (function () {
    function Hl(a) {
        this.j = a;
    }
    Hl.prototype.g = function (a) {
        return (a = Pi(a)) && Uh(a, this.j) ? [11] : [];
    };
    return Hl;
}());
function Il(a, b, c) {
    return ph({
        top: a.g.top - (c + 1),
        right: a.g.right + (c + 1),
        bottom: a.g.bottom + (c + 1),
        left: a.g.left - (c + 1),
    }, b.g);
}
function Jl(a) {
    if (!a.length)
        return null;
    var b = qh(a.map(function (c) { return c.g; }));
    a = a.reduce(function (c, d) { return c + d.j; }, 0);
    return new Kl(b, a);
}
var Kl = /** @class */ (function () {
    function Kl(a, b) {
        this.g = a;
        this.j = b;
    }
    return Kl;
}());
var Nl = function (a, b) {
    var c = va(b.document.querySelectorAll(".google-auto-placed"));
    var d = va(b.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')), e = va(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
    var f = va(b.document.querySelectorAll("iframe[id^=google_ads_iframe]"));
    var g;
    (g = Ll(b)) ||
        (g = va(b.document.querySelectorAll("div[id^=div-gpt-ad]")));
    f = g.concat(f);
    g = va(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var h = va(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")), l = va(b.document.querySelectorAll("div.googlepublisherpluginad"));
    var k = [].concat(va(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), va(b.document.querySelectorAll("ins.adsbygoogle")));
    b = [];
    for (var _i = 0, _a = [
        [a.Ec, c],
        [a.zb, d],
        [a.Hc, e],
        [a.Fc, f],
        [a.Ic, g],
        [a.Dc, h],
        [a.Gc, l],
    ]; _i < _a.length; _i++) {
        var _b = _a[_i], n = _b[0], p = _b[1];
        (a = p), !1 === n ? (b = b.concat(a)) : (k = k.concat(a));
    }
    a = Ml(k);
    c = Ml(b);
    a = a.slice(0);
    for (var _c = 0, c_2 = c; _c < c_2.length; _c++) {
        var n = c_2[_c];
        for (c = 0; c < a.length; c++)
            (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
    }
    return a;
}, Pl = function (a) {
    var b = Ll(bc(Yb(a))) || [];
    return !!ec(a, function (c) {
        if (!da(c) || 1 != c.nodeType)
            return !1;
        var d = c.matches ||
            c.webkitMatchesSelector ||
            c.mozMatchesSelector ||
            c.msMatchesSelector ||
            c.oMatchesSelector;
        return !d || ua(b, c) || ta(mc(Ol), function (e) { return d.call(c, e); });
    });
};
var Ll = function (a) {
    try {
        return qa(ra(a.googletag.pubads().getSlots(), function (b) {
            return a.document.getElementById(b.getSlotElementId());
        }), function (b) { return null != b; });
    }
    catch (b) { }
    return null;
}, Ol = {
    nc: "ins.adsbygoogle-ablated-ad-slot",
    pc: "ins.adsbygoogle",
    oc: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
    qc: ".google-auto-placed",
    rc: 'ins.adsbygoogle[data-anchor-shown="true"]',
    tc: "iframe[id^=google_ads_iframe]",
    vc: "div[id^=div-gpt-ad]",
    wc: "ins.adsbygoogle[data-ad-format=autorelaxed]",
    xc: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
    uc: "div.googlepublisherpluginad",
};
var Ml = function (a) {
    var b = [];
    for (var _i = 0, a_4 = a; _i < a_4.length; _i++) {
        var c = a_4[_i];
        a = !0;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (e.contains(c)) {
                a = !1;
                break;
            }
            if (c.contains(e)) {
                a = !1;
                b[d] = c;
                break;
            }
        }
        a && b.push(c);
    }
    return b;
};
var Ql = de(453, Nl);
function Rl(a, b) {
    a = Sl(a);
    b = Tl(a, b);
    return new Ul(a, b);
}
function Vl(a) {
    return a.j.map(function (b) { return b.box; });
}
var Ul = /** @class */ (function () {
    function Ul(a, b) {
        this.j = a.slice(0);
        this.g = b.slice(0);
    }
    return Ul;
}());
function Sl(a) {
    var b = Ql({ zb: !1 }, a), c = ne(a), d = O(a);
    return b
        .map(function (e) {
        var f = e.getBoundingClientRect();
        return (e =
            !!e.className && -1 != e.className.indexOf("google-auto-placed")) ||
            1 < (f.bottom - f.top) * (f.right - f.left)
            ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c,
                },
                yc: e ? 1 : 0,
            }
            : null;
    })
        .filter(Aa(function (e) { return null === e; }));
}
function Tl(a, b) {
    return void 0 != b && 8 >= a.length
        ? Wl(a, b)
        : ra(a, function (c) { return new Kl(c.box, 1); });
}
function Wl(a, b) {
    a = ra(a, function (d) { return new Kl(d.box, 1); });
    var c = [];
    for (; 0 < a.length;) {
        var d = a.pop(), e = !0;
        for (; e;) {
            e = !1;
            for (var f = 0; f < a.length; f++)
                if (Il(d, a[f], b)) {
                    d = Jl([d, a[f]]);
                    Array.prototype.splice.call(a, f, 1);
                    e = !0;
                    break;
                }
        }
        c.push(d);
    }
    return c;
}
var Xl = /** @class */ (function () {
    function Xl(a, b, c) {
        this.j = Ql({}, c)
            .map(t(a.g, a))
            .filter(Aa(function (d) { return null === d; }));
        this.l = b;
    }
    Xl.prototype.g = function (a) {
        if (!a)
            return [9];
        a = a.j();
        for (var d = 0; d < this.j.length; d++) {
            var e = this.j[d].j();
            var b;
            if ((b = 1 < (e.bottom - e.top) * (e.right - e.left))) {
                b = a.top;
                var c = this.l;
                (b = e.top - c < b && b < e.bottom + c) ||
                    ((b = a.bottom),
                        (c = this.l),
                        (b = e.top - c < b && b < e.bottom + c));
            }
            if (b)
                return [8];
        }
        return [];
    };
    return Xl;
}());
var Yl = /** @class */ (function () {
    function Yl(a, b) {
        this.j = a;
        this.l = b;
    }
    Yl.prototype.g = function (a) {
        if (Qi(a))
            return [];
        a = tl(this.j.g, a);
        var b = Tj(this.j, a);
        if (!b)
            return [];
        var c = this.l.g(b.start.g);
        b = b.end.W();
        return c && 10 >= a - b ? [5] : [];
    };
    return Yl;
}());
var Zl = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
var $l = /** @class */ (function () {
    function $l() {
    }
    $l.prototype.g = function (a) {
        a = Pi(a);
        if (!a)
            return [12];
        if (!Zl.includes(a.B.tagName) || a.B.id)
            return [];
        var b = fi(a), c = Hh(a);
        for (var _i = 0, b_3 = b; _i < b_3.length; _i++) {
            var d = b_3[_i];
            if (1 == c.getElementsByClassName(d).length)
                return [];
        }
        d = a.j();
        return 150 >= d.bottom - d.top ? [13] : [];
    };
    return $l;
}());
var am = /** @class */ (function () {
    function am() {
    }
    am.prototype.g = function (a) {
        return a && !a.wa() && Wh(a) ? [] : [3];
    };
    return am;
}());
function bm(a, b) {
    return 0 < a.g.length ? (ck(b, a.g.shift()), !0) : !1;
}
var cm = /** @class */ (function () {
    function cm(a, b) {
        this.j = a;
        this.o = b;
        this.A = [];
        this.m = [];
        this.g = [];
    }
    cm.prototype.V = function () {
        var a = new fk();
        this.j.g(new ak(t(this.l, this, a), "p"));
        return a.g;
    };
    cm.prototype.l = function (a) {
        bm(this, a) || this.o.V().then(t(this.v, this, a), t(a.j, a));
    };
    cm.prototype.v = function (a, b) {
        b = rl([b], this.A, this.m);
        wa(this.g, b);
        bm(this, a) || this.j.g(new ak(t(this.l, this, a), "p"));
    };
    return cm;
}());
var dm = /** @class */ (function () {
    function dm(a) {
        this.g = a.filter(function (b) { return Qi(b); });
        this.j = a.filter(function (b) { return !Qi(b); });
    }
    dm.prototype.V = function () {
        return this.g.shift() || this.j.shift() || null;
    };
    return dm;
}());
var em = /** @class */ (function () {
    function em() {
    }
    return em;
}());
function fm(a, b) {
    a.j.g(new ak(function () {
        var c = a.g ? a.g.V() : null;
        c ? gm(a, b, c) : a.o.V().then(t(a.v, a, b), t(a.G, a, b));
    }, "r"));
}
function gm(a, b, c) {
    a.m && a.m.apply(c);
    a.l
        ? yl(a.l, c).then(function (d) {
            0 == d.length
                ? (0 < a.g.g.length || (a.g = null), hk(a.j, b, c, "rres"))
                : (a.A.push(new em()), fm(a, b));
        })
        : hk(a.j, b, c, "rres");
}
var hm = /** @class */ (function () {
    function hm(a, b, c, d) {
        this.j = a;
        this.o = b;
        this.m = c;
        this.l = d;
        this.g = null;
        this.A = [];
    }
    hm.prototype.V = function () {
        var a = new fk();
        fm(this, a);
        return a.g;
    };
    hm.prototype.v = function (a, b) {
        this.g = b;
        fm(this, a);
    };
    hm.prototype.G = function (a) {
        ik(this.j, a);
    };
    return hm;
}());
var im = /** @class */ (function () {
    function im(a) {
        this.g = a;
    }
    im.prototype.V = function () {
        var a = new fk();
        this.g.V().then(function (b) {
            ck(a, new dm([b]));
        }, t(a.j, a));
        return a.g;
    };
    return im;
}());
var jm = /** @class */ (function () {
    function jm(a, b) {
        this.g = a;
        this.j = b;
    }
    jm.prototype.apply = function (a) {
        var b = sl(this.g, a);
        b = this.j.get(r(this.g.K[b]));
        a.o = b.Xb <= b.cc;
    };
    return jm;
}());
var km = /** @class */ (function () {
    function km(a) {
        this.j = a;
    }
    km.prototype.g = function (a) {
        a: {
            var b = Pi(a);
            if (b) {
                switch (a.G) {
                    case 0:
                    case 3:
                        if ((a = b.g()))
                            break a;
                        throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                    case 1:
                    case 2:
                        a = b;
                        break a;
                }
                throw Error("Un-handled ad placement position.");
            }
            a = null;
        }
        return a && ua(this.j, a.B) ? [18] : [];
    };
    return km;
}());
var lm = [{ hostname: /^([a-z]+.)?m.wikihow.com$/, Rb: "mw-mf-viewport" }];
var mm = function (a) {
    if (!a.location || !a.location.hostname)
        return [];
    var b = a.location.hostname, c = [];
    pa(lm, function (d) {
        b.match(d.hostname) && (d = a.document.getElementById(d.Rb)) && c.push(d);
    });
    return c;
};
function nm(a, b) {
    a.j.g(new ak(function () {
        if (a.g)
            if (a.l.g(a.g)) {
                var c = a.g;
                a.g = Mh(a.g);
                ck(b, c);
            }
            else {
                a: {
                    c = a.g;
                    var d = Kh(c);
                    for (var e = 0; e < d.length; ++e)
                        if (d[e].m()) {
                            c = d[e];
                            break a;
                        }
                    c = Mh(c);
                }
                a.g = c;
                nm(a, b);
            }
        else
            b.j(null);
    }, "fpar"));
}
var om = /** @class */ (function () {
    function om(a, b, c) {
        this.j = a;
        this.g = b;
        this.l = c;
    }
    om.prototype.V = function () {
        var a = new fk();
        nm(this, a);
        return a.g;
    };
    return om;
}());
var pm = /** @class */ (function () {
    function pm(a) {
        this.j = a;
        this.g = [];
    }
    pm.prototype.reset = function () {
        var a = this.g;
        this.g = [];
        return a;
    };
    return pm;
}());
var qm = { X: [3], ga: !1, ha: 0, fa: 1 }, rm = new T(["LI", "TR", "TD", "TH"]);
function sm(a, b) {
    a.j.g(new ak(function () {
        a.o.V().then(t(a.m, a, b), t(a.l, a, b));
    }, "para"));
}
var tm = /** @class */ (function () {
    function tm(a, b, c) {
        this.j = a;
        this.o = b;
        this.g = new pm(c);
    }
    tm.prototype.V = function () {
        var a = new fk();
        sm(this, a);
        return a.g;
    };
    tm.prototype.m = function (a, b) {
        var c = this.g;
        if (c.g.length) {
            var d = c.g[c.g.length - 1];
            var e = c.j;
            var f = e.g.map.get(r(b));
            (e = f ? Tj(e, f.start.W()) : null)
                ? ((e = e.start.g), (d = d == e || (d != e && dc(d.B, e.B))))
                : (d = !0);
        }
        else
            d = !0;
        d ? c.g.push(b) : (c.g = [b]);
        b = this.g;
        (b = 3 <= b.g.length ? b.g[b.g.length - 3 + 1] : null) &&
            !rm.contains(b.B.tagName)
            ? ck(a, { node: b, fb: Bi(qm), identifier: {} })
            : sm(this, a);
    };
    tm.prototype.l = function (a) {
        a.j("na");
    };
    return tm;
}());
var um = /** @class */ (function (_super) {
    __extends(um, _super);
    function um() {
        var _this = _super.call(this) || this;
        _this.j = [];
        _this.l = !1;
        return _this;
    }
    um.prototype.g = function (a) {
        this.j.push(a);
        if (!this.l) {
            this.l = !0;
            try {
                for (; 0 < this.j.length;)
                    this.j.shift().g();
            }
            finally {
                this.l = !1;
            }
        }
    };
    return um;
}(jk));
var vm = /** @class */ (function () {
    function vm() {
        this.g = Date.now();
        this.j = Date.now();
    }
    return vm;
}());
var wm;
function xm() {
    var a = m.MessageChannel;
    "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !v("Presto") &&
        (a = function () {
            var e = cc(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(), h = "file:" == f.location.protocol
                ? "*"
                : f.location.protocol + "//" + f.location.host;
            e = t(function (l) {
                if (("*" == h || l.origin == h) && l.data == g)
                    this.port1.onmessage();
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    f.postMessage(g, h);
                },
            };
        });
    if ("undefined" !== typeof a && !v("Trident") && !v("MSIE")) {
        var b = new a(), c = {}, d = c;
        b.port1.onmessage = function () {
            if (void 0 !== c.next) {
                c = c.next;
                var e = c.xb;
                c.xb = null;
                e();
            }
        };
        return function (e) {
            d.next = { xb: e };
            d = d.next;
            b.port2.postMessage(0);
        };
    }
    return function (e) {
        m.setTimeout(e, 0);
    };
}
function ym(a) {
    m.setTimeout(function () {
        throw a;
    }, 0);
}
function zm() {
    var a = Am;
    var b = null;
    a.g && ((b = a.g), (a.g = a.g.next), a.g || (a.j = null), (b.next = null));
    return b;
}
var Bm = /** @class */ (function () {
    function Bm() {
        this.j = this.g = null;
    }
    Bm.prototype.add = function (a, b) {
        var c = Cm.get();
        c.set(a, b);
        this.j ? (this.j.next = c) : (this.g = c);
        this.j = c;
    };
    return Bm;
}());
var Cm = new (/** @class */ (function () {
    function class_2(a, b, c) {
        this.o = c;
        this.m = a;
        this.l = b;
        this.j = 0;
        this.g = null;
    }
    class_2.prototype.get = function () {
        var a;
        0 < this.j
            ? (this.j--, (a = this.g), (this.g = a.next), (a.next = null))
            : (a = this.m());
        return a;
    };
    return class_2;
}()))(function () { return new Dm(); }, function (a) { return a.reset(); }, 100);
var Dm = /** @class */ (function () {
    function Dm() {
        this.next = this.g = this.j = null;
    }
    Dm.prototype.set = function (a, b) {
        this.j = a;
        this.g = b;
        this.next = null;
    };
    Dm.prototype.reset = function () {
        this.next = this.g = this.j = null;
    };
    return Dm;
}());
var Em;
function Fm() {
    if (m.Promise && m.Promise.resolve) {
        var a = m.Promise.resolve(void 0);
        Em = function () {
            a.then(Gm);
        };
    }
    else
        Em = function () {
            var b = Gm;
            "function" !== typeof m.setImmediate ||
                (m.Window &&
                    m.Window.prototype &&
                    !v("Edge") &&
                    m.Window.prototype.setImmediate == m.setImmediate)
                ? (wm || (wm = xm()), wm(b))
                : m.setImmediate(b);
        };
}
var Hm = !1, Am = new Bm();
function Gm() {
    for (var a; (a = zm());) {
        try {
            a.j.call(a.g);
        }
        catch (c) {
            ym(c);
        }
        var b = Cm;
        b.l(a);
        b.j < b.o && (b.j++, (a.next = b.g), (b.g = a));
    }
    Hm = !1;
}
var Im = /** @class */ (function (_super) {
    __extends(Im, _super);
    function Im(a, b, c) {
        var _this = this;
        var d = new vm();
        _this = _super.call(this) || this;
        _this.I = a;
        _this.j = d;
        _this.v = b || null;
        _this.m = c || null;
        _this.l = [];
        _this.o = !1;
        return _this;
    }
    Im.prototype.g = function (a) {
        this.l.push(a);
        this.o ||
            ((a = this.G), Em || Fm(), Hm || (Em(), (Hm = !0)), Am.add(a, this));
    };
    Im.prototype.G = function () {
        this.v ? this.v(t(this.A, this)) : this.A();
    };
    Im.prototype.A = function () {
        if (!this.o) {
            this.o = !0;
            try {
                for (this.j.g = Date.now(); 0 < this.l.length;) {
                    var a = this.l.shift();
                    this.j.j = Date.now();
                    a.g();
                    this.m && this.m.j(Date.now() - this.j.j, a.j);
                    if (50 < Date.now() - this.j.g + 10)
                        break;
                }
                0 < this.l.length && this.I.setTimeout(t(this.G, this), 0);
            }
            finally {
                (this.o = !1), this.m && this.m.g(Date.now() - this.j.g);
            }
        }
    };
    return Im;
}(jk));
function Jm(a, b) {
    var c = new fk(), d = b.I
        ? new Im(a, la(ce, b.g ? "lr:apf:" + b.g : "lr:apf"), b.G)
        : new um();
    d.g(new ak(function () {
        sk(new vk(d), a, b).then(function (e) {
            var f = e.j, g = e.m, h = e.l;
            a: {
                var l = e.j, k = e.g.o;
                switch (k) {
                    case 2:
                        var n = l.m;
                        k = e.l.g;
                        k.m ||
                            ((l = new gj(yj(k), 0)),
                                k.g || (k.g = new kj(new gj(yj(k), 0))),
                                (k.m = new nj(l, new gj(k.g, 1), new gj(zj(k), 2))));
                        n = new tm(d, new om(d, n, new gj(k.m, 3)), e.m.g);
                        break a;
                    default:
                        n = l.v;
                        var p = l.g.K;
                        l = e.g;
                        k = 1 == k ? wk(p) : Ah(p);
                        n = new Ak(n, k, l);
                }
            }
            n = new im(new cm(d, n));
            k = new jm(f.g, g.l);
            l = new zl(d, f.g);
            e.g.v && vl(l, new Cl(f.g, f.o));
            p = mm(f.j);
            h = vl(vl(vl(vl(l, new km(p)), new Yl(g.g, new gj(zj(h.g), 2))), new $l()), new Gl(f.m, new Fl(g.g)));
            p = new Ck();
            wa(p.j, Dk);
            p = Bk(Bk(p, Ek), Fk);
            wa(p.m, Hk);
            wa(p.j, Gk);
            h = ul(vl(vl(h, Bk(p, Gk)), new Hl(f.G * f.o)), new am());
            var q = e.g, C = e.j.v;
            p = Math.max(C * q.m, q.minWidth);
            q = C * q.j;
            p = void 0 !== p ? p : 0;
            q = void 0 !== q ? q : Infinity;
            if (0 > p || 0 > q)
                throw Error("apf::wf");
            ul(ul(ul(h, 0 >= p && Infinity === q ? null : new Zj(p, q)), new Xl(f.m.l, e.g.A, f.j)), new Al([g.g, g.j]));
            0 < e.g.l && ul(l, new Bl(f.j, e.g.l));
            hk(d, c, new hm(d, n, k, l), "itres");
        }, t(c.j, c));
    }, "i"));
    return c.g;
}
function Km(a) {
    if (!a)
        return null;
    var b = y(a, 7);
    if (y(a, 1) || y(a, 3) || 0 < y(a, 4).length) {
        var c = y(a, 3), d = y(a, 1), e = y(a, 4);
        b = y(a, 2);
        var f = y(a, 5);
        a = Lm(y(a, 6));
        var g = "";
        d && (g += d);
        c && (g += "#" + oi(c));
        if (e)
            for (c = 0; c < e.length; c++)
                g += "." + oi(e[c]);
        b = (e = g) ? new ri(e, b, f, a) : null;
    }
    else
        b = b ? new ri(b, y(a, 2), y(a, 5), Lm(y(a, 6))) : null;
    return b;
}
var Mm = { 1: 1, 2: 2, 3: 3, 0: 0 };
function Lm(a) {
    return null == a ? a : Mm[a];
}
function Nm(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = y(a[c], 1), e = y(a[c], 2);
        if (d && null != e) {
            var f = {};
            f.jc = d;
            f.value = e;
            b.push(f);
        }
    }
    return b;
}
function Om(a, b) {
    var c = {};
    a && ((c.qb = y(a, 1)), (c.gb = y(a, 2)), (c.clearBoth = !!Eb(a, 3)));
    b && ((c.Ta = Nm(Hb(b, md, 3))), (c.Qa = Nm(Hb(b, md, 4))));
    return c;
}
var Pm = { 1: 0, 2: 1, 3: 2, 4: 3 }, Qm = { 0: 1, 1: 2, 2: 3, 3: 4 };
var Rm = /** @class */ (function () {
    function Rm(a) {
        this.g = a;
    }
    Rm.prototype.j = function (a, b, c, d) {
        c = Ni(d.document, this.g);
        c.ua.setAttribute("data-ad-format", "auto");
        Mi(c, a, b);
        return c;
    };
    return Rm;
}());
var Sm = /** @class */ (function () {
    function Sm(a) {
        this.g = a;
    }
    Sm.prototype.j = function (a, b, c, d) {
        var e = 0 < Hb(this.g, od, 9).length ? Hb(this.g, od, 9)[0] : null, f = Om(Gb(this.g, pd, 3), e);
        if (!e)
            return null;
        if ((e = y(e, 1))) {
            d = d.document;
            var g = c.tagName;
            c = fc(new Xb(d), g);
            c.style.clear = f.clearBoth ? "both" : "none";
            "A" == g && (c.style.display = "block");
            c.style.padding = "0px";
            c.style.margin = "0px";
            f.Ta && Li(c.style, f.Ta);
            d = fc(new Xb(d), "INS");
            f.Qa && Li(d.style, f.Qa);
            c.appendChild(d);
            f = { Ea: c, ua: d };
            f.ua.setAttribute("data-ad-type", "text");
            f.ua.setAttribute("data-native-settings-key", e);
            Mi(f, a, b);
            a = f;
        }
        else
            a = null;
        return a;
    };
    return Sm;
}());
var Tm = /** @class */ (function () {
    function Tm(a, b) {
        this.j = a;
        this.l = b;
    }
    Tm.prototype.g = function () {
        return this.l;
    };
    return Tm;
}());
function Um(a, b, c) {
    var d = a.ea();
    if (!d)
        return null;
    var e = Km(d);
    if (!e)
        return null;
    var f = a.g();
    f = Pm[f];
    var g = void 0 === f ? null : f;
    if (null === g)
        return null;
    f = (f = Gb(a, pd, 3)) ? Eb(f, 3) : null;
    e = new Tm(e, g);
    g = y(a, 10).slice(0);
    null != y(d, 5) && g.push(1);
    d = y(a, 12);
    var h = null != y(a, 4) ? Gb(a, qd, 4) : null;
    switch (y(a, 8)) {
        case 1:
            return new Vm(e, new Rm(Om(Gb(a, pd, 3), null)), f, 0, g, h, c, b, d);
        case 2:
            return new Vm(e, new Sm(a), f, 1, g, h, c, b, d);
    }
    return null;
}
function Wm(a) {
    return a.m;
}
function Xm(a, b, c) {
    hf(a.j, b) || a.j.set(b, []);
    a.j.get(b).push(c);
}
var Vm = /** @class */ (function () {
    function Vm(a, b, c, d, e, f, g, h, l) {
        if (l === void 0) { l = null; }
        this.o = a;
        this.I = b;
        this.C = c;
        this.Ub = d;
        this.G = e;
        this.nb = f ? f : new qd();
        this.l = g;
        this.A = h;
        this.v = l;
        this.D = [];
        this.m = !1;
        this.j = new S();
    }
    Vm.prototype.g = function () {
        return this.o.g();
    };
    Vm.prototype.ib = function () {
        return this.G;
    };
    Vm.prototype.W = function () {
        return this.A;
    };
    return Vm;
}());
var Ym = /** @class */ (function () {
    function Ym(a, b, c) {
        this.na = a;
        this.g = b;
        this.oa = c;
    }
    Ym.prototype.ea = function () {
        return this.g;
    };
    Ym.prototype.fill = function (a, b) {
        var c = this.na;
        if ((a = c.I.j(a, b, this.g, c.l))) {
            b = a.Ea;
            if (this.na.m)
                throw Error("AMA:AP:AP");
            c = this.ea();
            var d = this.na.g();
            Q(Je) ? wi(b, c, d) : ti(b, c, d);
            c = this.na;
            c.m = !0;
            null != b && c.D.push(b);
        }
        return a;
    };
    return Ym;
}());
function Zm(a) {
    switch (a) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            return null;
    }
}
var $m = /** @class */ (function () {
    function $m(a) {
        this.g = new T(a);
    }
    $m.prototype.contains = function (a) {
        return this.g.contains(a);
    };
    return $m;
}());
var an = de(754, function (a, b) {
    var c = [], d = [];
    try {
        for (var e = [], f = 0; f < a.length; f++) {
            var g = a[f], h, l = qi(g.o.j, g.l.document);
            (h = 0 < l.length ? l[0] : null) && e.push({ Wa: g, anchorElement: h });
        }
        for (f = 0; f < e.length; f++) {
            a = d;
            var k = a.push;
            var n = e[f], p = n.anchorElement, q = n.Wa, C = q.C, D = q.l.document.createElement("div");
            D.className = "google-auto-placed";
            var u = D.style;
            u.textAlign = "center";
            u.width = "100%";
            u.height = "0px";
            u.clear = C ? "both" : "none";
            var A = D;
            try {
                g = A;
                h = p;
                var V = q.g();
                Q(Je) ? wi(g, h, V) : ti(g, h, V);
                var E = A;
            }
            catch (U) {
                throw (ui(A), U);
            }
            k.call(a, E);
        }
        var w = O(b), x = ne(b);
        for (f = 0; f < d.length; f++) {
            b = x;
            k = w;
            var H = d[f].getBoundingClientRect(), ha = e[f];
            c.push(new Ym(ha.Wa, ha.anchorElement, new El(H.left + b, H.top + k, H.right - H.left)));
        }
    }
    finally {
        for (f = 0; f < d.length; f++)
            ui(d[f]);
    }
    return c;
});
function bn(a, b, c) {
    var d = Dl(c, 1, b + 1);
    return !ta(a, function (e) { return ph(e, d); });
}
function cn(a, b, c, d, e) {
    e = e.oa;
    var f = Dl(e, 0, b), g = Dl(e, 0, c), h = Dl(e, 0, d);
    return !ta(a, function (l) { return ph(l, g) || (ph(l, f) && !ph(l, h)); });
}
function dn(a, b, c, d) {
    var e = Vl(a);
    if (bn(e, b, d.oa))
        return !0;
    if (!cn(e, b, c.$b, c.hb, d))
        return !1;
    var f = new Kl(Dl(d.oa, 0, 0), 1);
    a = qa(a.g, function (g) { return Il(g, f, c.hb); });
    b = sa(a, function (g, h) { return g + h.j; }, 1);
    return 0 === a.length || b > c.Wb ? !1 : !0;
}
var en = /** @class */ (function () {
    function en() {
        this.g = new S();
    }
    en.prototype.set = function (a, b) {
        var c = this.g.get(a);
        c || ((c = new T()), this.g.set(a, c));
        c.add(b);
    };
    return en;
}());
var fn = function (a, b) {
    var c = [];
    var d = a;
    for (a = function () {
        c.push({ anchor: d.anchor, position: d.position });
        return d.anchor == b.anchor && d.position == b.position;
    }; d;) {
        switch (d.position) {
            case 1:
                if (a())
                    return c;
                d.position = 2;
            case 2:
                if (a())
                    return c;
                if (d.anchor.firstChild) {
                    d = { anchor: d.anchor.firstChild, position: 1 };
                    continue;
                }
                else
                    d.position = 3;
            case 3:
                if (a())
                    return c;
                d.position = 4;
            case 4:
                if (a())
                    return c;
        }
        for (; d &&
            !d.anchor.nextSibling &&
            d.anchor.parentNode != d.anchor.ownerDocument.body;) {
            d = { anchor: d.anchor.parentNode, position: 3 };
            if (a())
                return c;
            d.position = 4;
            if (a())
                return c;
        }
        d && d.anchor.nextSibling
            ? (d = { anchor: d.anchor.nextSibling, position: 1 })
            : (d = null);
    }
    return c;
};
function gn(a, b) {
    var c = new en(), d = new T();
    b.forEach(function (e) {
        if (e.v()) {
            e = e.v();
            if (e.A() && e.A().ea() && e.g() && e.g().ea()) {
                var g = hn(a, e.A().ea()), h = hn(a, e.g().ea());
                if (g && h)
                    for (var _i = 0, _a = fn({ anchor: g, position: e.A().g() }, { anchor: h, position: e.g().g() }); _i < _a.length; _i++) {
                        var f = _a[_i];
                        c.set(r(f.anchor), f.position);
                    }
            }
            e.v() &&
                e.v().ea() &&
                (f = hn(a, e.v().ea())) &&
                c.set(r(f), e.v().g());
        }
        else
            e.A() ? jn(a, e.A(), c) : e.g() && kn(a, e.g(), d);
    });
    return new ln(c, d);
}
var ln = /** @class */ (function () {
    function ln(a, b) {
        this.j = a;
        this.g = b;
    }
    return ln;
}());
var jn = function (a, b, c) {
    b.g() &&
        (a = mn(a, b.g())) &&
        a.forEach(function (d) {
            d = r(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
        });
}, kn = function (a, b, c) {
    b.g() &&
        (a = mn(a, b.g())) &&
        a.forEach(function (d) {
            c.add(r(d));
        });
}, hn = function (a, b) { return ((a = mn(a, b)) && 0 < a.length ? a[0] : null); }, mn = function (a, b) { return ((b = Km(b)) ? qi(b, a) : null); };
function nn(a) {
    return function (b) {
        return an(b, a);
    };
}
function on(a) {
    var b = N(a).clientHeight;
    return b ? la(pn, b + O(a)) : ya;
}
function qn(a, b, c) {
    if (0 > a)
        throw Error("ama::ead:nd");
    if (Infinity === a)
        return ya;
    var d = Vl(c || Rl(b));
    return function (e) { return bn(d, a, e.oa); };
}
function rn(a, b, c, d) {
    if (0 > a || 0 > b.$b || 0 > b.Wb || 0 > b.hb)
        throw Error("ama::ead:nd");
    return Infinity === a ? ya : function (e) { return dn(d || Rl(c, b.hb), a, b, e); };
}
function sn(a) {
    if (!a.length)
        return ya;
    var b = new $m(a);
    return function (c) { return b.contains(c.Ub); };
}
function tn(a) {
    return function (b) {
        for (var _i = 0, _a = b.ib(); _i < _a.length; _i++) {
            var c = _a[_i];
            if (-1 < a.indexOf(c))
                return !1;
        }
        return !0;
    };
}
function un(a) {
    return a.length
        ? function (b) {
            var c = b.ib();
            return a.some(function (d) { return -1 < c.indexOf(d); });
        }
        : za;
}
function vn(a, b) {
    if (0 >= a)
        return za;
    var c = N(b).scrollHeight - a;
    return function (d) {
        return d.oa.g <= c;
    };
}
function wn(a) {
    var b = {};
    a &&
        a.forEach(function (c) {
            b[c] = !0;
        });
    return function (c) {
        return !b[y(c.nb, 2) || 0];
    };
}
function xn(a) {
    return a.length ? function (b) { return a.includes(y(b.nb, 2) || 0); } : za;
}
function yn(a) {
    return a.length ? function (b) { return a.includes(y(b.nb, 1) || 0); } : za;
}
function zn(a, b) {
    var c = gn(a, b);
    return function (d) {
        var e = d.ea();
        d = Qm[d.na.g()];
        var f = r(e);
        f = c.j.g.get(f);
        if (!(f = f ? f.contains(d) : !1))
            a: {
                if (c.g.contains(r(e)))
                    switch (d) {
                        case 2:
                        case 3:
                            f = !0;
                            break a;
                        default:
                            f = !1;
                            break a;
                    }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(r(e))) {
                        f = !0;
                        break a;
                    }
                    e = e.parentElement;
                }
                f = !1;
            }
        return !f;
    };
}
var pn = function (a, b) { return b.oa.g >= a; }, An = function (a, b, c) {
    c = c.oa.l;
    return a <= c && c <= b;
};
var Bn = /** @class */ (function () {
    function Bn(a) {
        this.j = a;
        this.g = -1;
    }
    return Bn;
}());
function Cn(a) {
    var b = 0;
    for (; a;)
        (!b || a.previousElementSibling || a.nextElementSibling) && b++,
            (a = a.parentElement);
    return b;
}
function Dn(a, b) {
    var c = b.oa.g, d = Math, e = d.min;
    var f = b.ea(), g = b.na.g();
    c += 200 * e.call(d, 20, 0 == g || 3 == g ? Cn(f.parentElement) : Cn(f));
    a = a.g;
    0 > a.g && (a.g = N(a.j).scrollHeight || 0);
    a = a.g - b.oa.g;
    a = c + (1e3 < a ? 0 : 2 * (1e3 - a));
    b.ea();
    return a;
}
var En = /** @class */ (function () {
    function En(a) {
        this.g = new Bn(a);
    }
    return En;
}());
function Fn(a, b, c) {
    hf(a.g, b) || a.g.set(b, []);
    a.g.get(b).push(c);
}
var Gn = /** @class */ (function () {
    function Gn() {
        this.g = new S();
    }
    return Gn;
}());
var Hn = /** @class */ (function () {
    function Hn(a, b) {
        this.l = new ef(a);
        this.j = new En(b);
        this.g = b;
        this.m = new Gn();
    }
    Hn.prototype.find = function (a, b) {
        var _this = this;
        if (b === void 0) { b = 0; }
        var c = a.Vb ? a.Vb : [0], d = "number" === typeof a.mb || null === a.mb ? a.mb : 0, e = "number" === typeof a.minWidth ? a.minWidth : 0, f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity, g = "number" === typeof a.Eb ? a.Eb : 0, h = new T(a.Oc || []);
        var l = this.l.filter(function (n, p) { return !h.contains(p); });
        l = R(R(R(R(R(R(R(l, sn(c), In(1, b)), tn(a.Cc || []), In(2, b)), wn(a.Bc || []), In(3, b)), xn(a.Lc || []), In(4, b)), yn(a.Mc || []), In(5, b)), un(a.Kc || []), In(6, b)), Aa(Wm), In(7, b));
        var k = (l = l.apply(nn(this.g)));
        null !== d &&
            (k =
                a.zc && a.Nb
                    ? R(k, rn(d, a.Nb, this.g, a.Ib), Jn(16, b))
                    : R(k, qn(d, this.g, a.Ib), Jn(9, b)));
        k = R(k, la(An, e, f), Jn(10, b));
        a.Hb && (k = R(k, zn(this.g.document, a.Hb), Jn(11, b)));
        k = R(R(k, on(this.g), Jn(12, b)), vn(g, this.g), Jn(13, b));
        k = a.Qc
            ? ff(k, function (n, p) {
                var q = n.na.v;
                var C = p.na.v;
                null == q || null == C
                    ? null == q && null == C
                        ? ((q = _this.j), (n = Dn(q, n) - Dn(q, p)))
                        : (n = null == q ? 1 : -1)
                    : (n = q - C);
                return n;
            })
            : ff(k, function (n, p) {
                var q = _this.j;
                return Dn(q, n) - Dn(q, p);
            });
        a.Nc &&
            (k = gf(k, ab(this.g.location.href + this.g.localStorage.google_experiment_mod)));
        1 === c.length && Fn(this.m, c[0], { Ac: l.g.length, Rc: k.g.length });
        return k.g.slice(0);
    };
    return Hn;
}());
var In = function (a, b) { return function (c) { return Xm(c, b, a); }; }, Jn = function (a, b) { return function (c) { return Xm(c.na, b, a); }; };
var Kn = function (a, b) {
    var c = a.document.body;
    if (!c || !b)
        return Hd(Xd, "sci_evt", { amacerr: 1 }, !0, 0.1, void 0), null;
    b = Hb(b, sd, 1);
    var d = [];
    for (var e = 0; e < b.length; e++) {
        var f = Um(b[e], e, a);
        null !== f && d.push(f);
    }
    b = new Hn(d, a);
    d = a.innerWidth;
    a = b.find({
        locationType: 0,
        minWidth: 0.85 * d,
        maxWidth: d,
        mb: 25,
        Eb: a.innerHeight,
    });
    a = a.length ? a[0] : null;
    if (!a)
        return null;
    c = new li(c, !1);
    b = a.ea();
    c = { node: c.g(b) || void 0, fb: void 0, identifier: {} };
    if (!c.node)
        throw Error("amac:n");
    b = Zm(a.na.g());
    if (null === b)
        throw Error("amac:p");
    return (c = new pl(c, b).j()) ? { Wa: c, kc: a.oa.g } : null;
}, Ln = function (a) {
    var b = new fj();
    b.g = !0;
    b.o = 0.85;
    b.j = 1;
    b.m = 25;
    b.l = a.innerHeight;
    b.v = !0;
    return Jm(a, new ej(b));
};
function Mn(a) {
    var b = me(a, !0), c = N(a).scrollWidth, d = N(a).scrollHeight;
    var e = "unknown";
    a && a.document && a.document.readyState && (e = a.document.readyState);
    var f = O(a);
    var g = [];
    var h = [];
    var l = [], k = [];
    var n = [], p = [], q = [];
    var C = 0, D = 0, u = Infinity, A = Infinity, V = null;
    var E = Nl({ zb: !1 }, a);
    for (var _i = 0, E_1 = E; _i < E_1.length; _i++) {
        var U = E_1[_i];
        E = U.getBoundingClientRect();
        var jc = b - (E.bottom + f);
        var w = void 0, x = void 0;
        if (U.className &&
            -1 != U.className.indexOf("adsbygoogle-ablated-ad-slot")) {
            w = U.getAttribute("google_element_uid");
            x = a.google_sv_map;
            if (!w || !x || !x[w])
                continue;
            a: {
                var H = x[w];
                w = Number(H.google_ad_width);
                x = Number(H.google_ad_height);
                if (!(0 < w && 0 < x)) {
                    b: {
                        try {
                            var fa = String(H.google_ad_format);
                            if (fa && fa.match) {
                                var eb = fa.match(/(\d+)x(\d+)/i);
                                if (eb) {
                                    var Qh = parseInt(eb[1], 10), Rh = parseInt(eb[2], 10);
                                    if (0 < Qh && 0 < Rh) {
                                        var ha = { width: Qh, height: Rh };
                                        break b;
                                    }
                                }
                            }
                        }
                        catch (fa) { }
                        ha = null;
                    }
                    H = ha;
                    if (!H) {
                        w = null;
                        break a;
                    }
                    w = 0 < w ? w : H.width;
                    x = 0 < x ? x : H.height;
                }
                w = { width: w, height: x };
            }
            w = (x = w) ? x.height : 0;
            x = x ? x.width : 0;
        }
        else if (((w = E.bottom - E.top), (x = E.right - E.left), 1 >= w || 1 >= x))
            continue;
        g.push(w);
        l.push(x);
        k.push(w * x);
        U.className && -1 != U.className.indexOf("google-auto-placed")
            ? ((D += 1),
                U.className &&
                    -1 != U.className.indexOf("pedestal_container") &&
                    (V = w))
            : ((u = Math.min(u, jc)),
                p.push(E),
                (C += 1),
                h.push(w),
                n.push(w * x));
        A = Math.min(A, jc);
        q.push(E);
    }
    u = Infinity === u ? null : u;
    A = Infinity === A ? null : A;
    f = Nn(p);
    q = Nn(q);
    h = On(b, h);
    p = On(b, g);
    n = On(b * c, n);
    ha = On(b * c, k);
    return new Pn(a, {
        Qb: e,
        Fb: b,
        hc: c,
        ec: d,
        Db: C,
        vb: D,
        wb: Qn(g),
        Mb: Qn(l),
        Lb: Qn(k),
        bc: f,
        ac: q,
        Zb: u,
        Yb: A,
        Pb: h,
        Ob: p,
        Kb: n,
        Jb: ha,
        ic: V,
    });
}
function Rn(a, b) {
    if (b === void 0) { b = 0; }
    a = Mn(a);
    return ((a.g.wb || 0) * (a.g.Db + a.g.vb) + b) / (a.g.Fb + b);
}
function Sn(a, b) {
    var c = gc() && !(900 <= N(a.j).clientWidth), d = qa([], function (e) { return ua(a.l, e); }).join(",");
    return {
        wpc: "",
        su: b,
        eid: d,
        doc: a.g.Qb,
        pg_h: Z(a.g.Fb),
        pg_w: Z(a.g.hc),
        pg_hs: Z(a.g.ec),
        c: Z(a.g.Db),
        aa_c: Z(a.g.vb),
        av_h: Z(a.g.wb),
        av_w: Z(a.g.Mb),
        av_a: Z(a.g.Lb),
        s: Z(a.g.bc),
        all_s: Z(a.g.ac),
        b: Z(a.g.Zb),
        all_b: Z(a.g.Yb),
        d: Z(a.g.Pb),
        all_d: Z(a.g.Ob),
        ard: Z(a.g.Kb),
        all_ard: Z(a.g.Jb),
        pd_h: Z(a.g.ic),
        dt: c ? "m" : "d",
    };
}
var Pn = /** @class */ (function () {
    function Pn(a, b) {
        this.j = a;
        this.g = b;
        this.l = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ");
    }
    return Pn;
}());
function Qn(a) {
    return (Tb.apply(null, qa(a, function (b) { return 0 < b; })) || null);
}
function On(a, b) {
    return 0 >= a ? null : Sb.apply(null, b) / a;
}
function Nn(a) {
    var b = Infinity;
    for (var e = 0; e < a.length - 1; e++)
        for (var f = e + 1; f < a.length; f++) {
            var c = a[e], d = a[f];
            c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
            0 < c && (b = Math.min(c, b));
        }
    return Infinity !== b ? b : null;
}
function Z(a) {
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
}
function Tn(a, b) {
    var c;
    if ((c = null != b))
        try {
            b.setItem("__storage_test__", "__storage_test__");
            var d = b.getItem("__storage_test__");
            b.removeItem("__storage_test__");
            c = "__storage_test__" == d;
        }
        catch (d) {
            c = !1;
        }
    b = c ? ((b = Mf(b)) ? Lf(b) : null) : null;
    a.g = b;
    a.g ? ((a = a.g), (a = !!a && 1 > a.length)) : (a = !1);
    return a;
}
function Un(a, b) {
    try {
        if (!b || !Tn(a, b))
            return !1;
        a.g.push(Date.now());
        var c = JSON.stringify(a.g);
        b.setItem("__lsv__", c);
        return b.getItem("__lsv__") == c;
    }
    catch (c) {
        return !1;
    }
}
var Vn = /** @class */ (function () {
    function Vn() {
        this.g = null;
    }
    return Vn;
}());
ba(Vn);
function Wn() { }
function Xn(a, b, c) {
    if (null == b)
        c.push("null");
    else {
        if ("object" == typeof b) {
            if (Array.isArray(b)) {
                var d = b;
                b = d.length;
                c.push("[");
                var e = "";
                for (var f = 0; f < b; f++)
                    c.push(e), Xn(a, d[f], c), (e = ",");
                c.push("]");
                return;
            }
            if (b instanceof String || b instanceof Number || b instanceof Boolean)
                b = b.valueOf();
            else {
                c.push("{");
                e = "";
                for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) &&
                        ((f = b[d]),
                            "function" != typeof f &&
                                (c.push(e), Yn(d, c), c.push(":"), Xn(a, f, c), (e = ",")));
                c.push("}");
                return;
            }
        }
        switch (typeof b) {
            case "string":
                Yn(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
}
var Zn = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b",
}, $n = /\uffff/.test("\uffff")
    ? /[\\"\x00-\x1f\x7f-\uffff]/g
    : /[\\"\x00-\x1f\x7f-\xff]/g;
function Yn(a, b) {
    b.push('"', a.replace($n, function (c) {
        var d = Zn[c];
        d ||
            ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1)),
                (Zn[c] = d));
        return d;
    }), '"');
}
function ao(a, b) {
    if (a.Z)
        Promise.resolve(!1);
    else {
        a.Z = !0;
        b = pe(b);
        a.U = "true" === b["i-fvs"];
        var c = b.i_expid;
        c && (a.L = c);
        b.qid && (a.M = b.qid);
        a.C = parseFloat(b.den_lim) || 0;
        b = parseInt(b.sti_lt, 10);
        isNaN(b) || (a.P = b);
        a.H = !0;
        if (bo(a))
            Promise.resolve(!1);
        else {
            var d = new tf(), e = function () {
                co(a, {
                    nip: 1,
                    ph: me(a.g, !0),
                    vh: a.g.innerHeight,
                    iplt: Date.now() - a.O,
                    ama: a.J,
                    url: a.g.location ? a.g.location.href : void 0,
                }, 0.1);
                a.D.push("Could not locate a suitable placement in the content below the fold.");
                dj(a.g, a.D);
                d.g(!1);
            }, f = function (g, h) {
                co(a, { iplt: Date.now() - a.O, ama: a.J, y: h }, 0.01);
                d.g(eo(a, g));
            };
            a.O = Date.now();
            a.J
                ? (b = Kn(a.g, a.sa)) && a.H && !bo(a)
                    ? f(b.Wa, b.kc)
                    : (co(a, { amacerr: 1 }, 0.1), e())
                : Ln(a.g).then(function (g) {
                    if (a.H && !bo(a))
                        return g.V().then(function (h) {
                            if (h.l)
                                var l = h.l;
                            else
                                h.j || (Oi(h, !1), h.m()),
                                    (l = h.j),
                                    !h.l && l && (h.l = l.j()),
                                    (l = h.l);
                            f(h, l ? l.top : -1);
                        }, e);
                    d.g(!1);
                });
        }
    }
}
function bo(a) {
    return a.U
        ? !1
        : M(a.g).wasReactiveAdVisible[8]
            ? (co(a, { vigs: 1 }, 0.1), !0)
            : !1;
}
function co(a, b, c) {
    b = b || {};
    a.M && (b.qid = a.M);
    a.L && (b.eid = a.L);
    a.j && (b.tsl = Date.now() - a.j);
    a.R && ((b.tslo = Date.now() - a.R), (b.tl = a.ia));
    a.N.src && (b.req = a.N.src);
    Hd(Xd, "sci_evt", b, !0, c, void 0);
}
function eo(a, b) {
    fo(a) &&
        go(a) &&
        aj(a.l, b) &&
        ((a.j = Date.now()), ho(a), a.U ? io(a) : a.T.call(a.g, function () { return jo(a); }));
    dj(a.g, a.D);
    return !!a.j;
}
function ko(a) {
    a.F = !0;
    a.m = !1;
    Vi(a.l, !1);
    a.o && (B(a.g, "orientationchange", a.o), (a.o = null));
    a.v && (B(a.g, "resize", a.v), (a.v = null));
}
function fo(a) {
    var b = a.g.innerHeight;
    if (!b)
        return !1;
    var c = a.g;
    c = N(c).scrollWidth <= N(c).clientWidth;
    var d;
    if (!ke(a.g))
        return co(a, { lnd: 1 }, 0.1), a.D.push("Landscape is not supported"), !1;
    if (a.C && (d = Rn(a.g, b)) > a.C)
        return (co(a, Object.assign({ den: d, lim: a.C }, Sn(Mn(a.g), a.g.location.hostname)), 1),
            a.D.push("Insertion would cause ad density greater than " + 100 * a.C + "%."),
            !1);
    c || co(a, { Jc: 1 }, 0.1);
    return !0;
}
function go(a) {
    return a.Y ? !0 : Tn(Vn.S(), a.$);
}
function ho(a) {
    a.o = de(519, function () {
        !a.F &&
            a.m &&
            co(a, { tto: Date.now() - a.j, por: ke(a.g) ? 1 : 0 }, 0.1);
    });
    z(a.g, "orientationchange", a.o);
    a.v = de(520, function () {
        a.F || (a.l.A(), a.m && co(a, { ttre: Date.now() - a.j }, 0.1));
    });
    z(a.g, "resize", a.v);
}
function io(a) {
    if (!a.aa) {
        var b = a.N.contentWindow, c = b.postMessage;
        var d = [];
        Xn(new Wn(), { msg_type: "i-view" }, d);
        c.call(b, d.join(""), Jf("googleads.g.doubleclick.net", ""));
        a.aa = !0;
    }
}
function jo(a) {
    if (!a.F)
        if (bo(a))
            ko(a);
        else {
            var b = a.l.j.getBoundingClientRect().top, c = a.g.innerHeight;
            a.l.A();
            0.5 <= (c - b) / c && io(a);
            b < c &&
                ((M(a.g).wasReactiveAdVisible[9] = !0),
                    a.Y || Un(Vn.S(), a.$),
                    (a.ma = !0));
            0 >= b
                ? (0 <= a.P && lo(a), co(a, { sice: !0, vh: c, gvto: b }, 0.1))
                : a.T && a.T.call(a.g, function () { return jo(a); });
        }
}
function lo(a) {
    a.R = Date.now();
    a.m = !0;
    a.ia++;
    bj(a.l);
    m.setTimeout(function () {
        if (a.m) {
            a.m = !1;
            var b = a.l;
            var c = b.j;
            I(c, { top: Tc(b.m).y + "px" });
            I(c, { position: "absolute" });
            $i(b);
        }
    }, Math.max(0, a.P));
}
var mo = /** @class */ (function (_super) {
    __extends(mo, _super);
    function mo(a, b, c, d, e, f) {
        var _this = _super.call(this, a) || this;
        _this.N = b;
        _this.$ = f;
        _this.Y = d;
        _this.F = !1;
        _this.L = null;
        _this.U = _this.H = _this.Z = !1;
        _this.D = [];
        _this.m = !1;
        _this.ia = _this.R = _this.j = 0;
        _this.v = _this.o = _this.M = null;
        _this.T =
            m.requestAnimationFrame ||
                m.webkitRequestAnimationFrame ||
                m.mozRequestAnimationFrame ||
                m.oRequestAnimationFrame ||
                m.msRequestAnimationFrame;
        _this.aa = !1;
        _this.l = new cj(b, a, e);
        _this.ma = !1;
        _this.O = _this.P = 0;
        a = Eb(c, 1);
        _this.J = null == a ? !1 : a;
        _this.sa = Gb(c, nh, 2);
        _this.C = 0;
        return _this;
    }
    mo.prototype.ta = function (a) {
        var _this = this;
        a["sti-fill"] = function (b) {
            ao(_this, b);
        };
        a["i-no"] = function () {
            _this.H = !1;
            !_this.ma && _this.j && ko(_this);
        };
    };
    return mo;
}(xe));
var no = /** @class */ (function (_super) {
    __extends(no, _super);
    function no() {
        var _this = _super.call(this) || this;
        _this.I = !1;
        _this.A = null;
        _this.C = !1;
        return _this;
    }
    no.prototype.G = function (a) {
        this.I = !!a.enableAma;
        var b = a.amaConfig;
        if (b)
            try {
                var c = Kb(nh, b);
            }
            catch (d) {
                c = null;
            }
        else
            c = null;
        this.A = c;
        Array.isArray(a.fillMessage) && (this.C = !0);
        return !0;
    };
    return no;
}(vf));
var oo = /** @class */ (function () {
    function oo() {
    }
    oo.prototype.verifyAndProcessConfig = function (a, b, c) {
        var d = M(a);
        if (d.wasReactiveAdConfigReceived[9])
            return !1;
        var e = new no();
        if (!uf(e, b))
            return !1;
        d.wasReactiveAdConfigReceived[9] = !0;
        if (!e.j && !Tn(Vn.S(), c))
            return !1;
        b = a.document.createElement("ins");
        b.className = "adsbygoogle";
        I(b, { display: "none" });
        a.document.documentElement.appendChild(b);
        c = e.v || {};
        c.google_ad_client = e.l;
        c.google_ad_height = N(a).clientHeight || 0;
        c.google_ad_width = N(a).clientWidth || 0;
        c.google_reactive_ad_format = 9;
        d = new oh();
        Fb(d, 1, e.I);
        if (e.A) {
            var f = e.A;
            d.j || (d.j = {});
            var g = f ? Ib(f) : f;
            d.j[2] = f;
            Fb(d, 2, g);
        }
        e.C && Fb(d, 3, !0);
        c.google_rasc = d.G();
        e.j && (c.google_adtest = "on");
        Vf(b, c, a);
        return !0;
    };
    return oo;
}());
ba(oo);
var po = { overflow: "hidden", position: "fixed" };
var ro = function (a, b) {
    if (!a.body)
        return null;
    var c = new qo();
    c.apply(a, b);
    return function () {
        K(a.body, {
            filter: c.g,
            webkitFilter: c.g,
            overflow: c.l,
            position: c.m,
            top: c.o,
        });
        b.scrollTo(0, c.j);
    };
};
var qo = /** @class */ (function () {
    function qo() {
        this.g = this.o = this.m = this.l = null;
        this.j = 0;
    }
    qo.prototype.apply = function (a, b) {
        this.l = a.body.style.overflow;
        this.m = a.body.style.position;
        this.o = a.body.style.top;
        this.g = a.body.style.filter
            ? a.body.style.filter
            : a.body.style.webkitFilter;
        this.j = O(b);
        K(a.body, "top", -this.j + "px");
        var c = N(b).clientHeight;
        1001 < N(b).clientWidth || 1001 < c || K(a.body, po);
    };
    return qo;
}());
function so(a, b) {
    var c = a.j;
    c &&
        (b
            ? (I(c, { display: "block" }),
                a.m.body &&
                    !a.o &&
                    ((a.o = ro(a.m, a.g)), a.o && a.v && K(a.m.body, to)),
                c.setAttribute("tabindex", "0"),
                c.setAttribute("aria-hidden", "false"),
                a.m.body.setAttribute("aria-hidden", "true"))
            : (I(c, { display: "none" }),
                a.o && (a.o(), (a.o = null)),
                a.m.body.setAttribute("aria-hidden", "false"),
                c.setAttribute("aria-hidden", "true")));
}
function uo(a) {
    if ((a = a.j))
        a.style.backgroundColor = "transparent";
}
function vo(a) {
    so(a, !1);
    var b = a.j;
    b &&
        (Gg(a, function (c) {
            I(c, wo);
            qe(c);
        }, !0),
            a.l.setAttribute("width", ""),
            a.l.setAttribute("height", ""),
            K(a.l, wo),
            K(a.l, xo),
            K(b, yo),
            Q(Ye) && K(b, { background: "transparent" }),
            I(b, { display: "none", position: "fixed" }),
            qe(b),
            qe(a.l));
}
var zo = /** @class */ (function (_super) {
    __extends(zo, _super);
    function zo(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        _this.v = !1;
        _this.o = null;
        _this.m = b.document;
        return _this;
    }
    return zo;
}(Hg));
var Ao = { width: "100%", height: "100%", top: "auto", bottom: "0px" }, Bo = {
    "animation-name": "ggl-vgn-slideup",
    "-webkit-animation-name": "ggl-vgn-slideup",
    "animation-duration": "1s",
    "-webkit-animation-duration": "1s",
    "animation-timing-function": "ease",
    "-webkit-animation-timing-function": "ease",
};
var yo = {
    backgroundColor: "white",
    opacity: "1",
    position: "fixed",
    left: "0px",
    top: "0px",
    margin: "0px",
    padding: "0px",
    display: "none",
    zIndex: "2147483647",
}, wo = { width: "100vw", height: "100vh" }, xo = { left: "0", position: "absolute", top: "0" }, to = { filter: "blur(5px)", webkitFilter: "blur(5px)" };
var Co = /** @class */ (function (_super) {
    __extends(Co, _super);
    function Co(a, b, c) {
        var _this = _super.call(this, b, a, c) || this;
        vo(_this);
        return _this;
    }
    Co.prototype.O = function (a) {
        return ih(a);
    };
    return Co;
}(zo));
function Do(a) {
    a = a.match(hc);
    var b = a[6];
    return (a[5] || "") + (b ? "?" + b : "") || "/";
}
function Eo(a, b) {
    b
        ? (a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig"))
        : (a.g = null);
}
function Fo(a, b, c, d, e) {
    if (!c)
        return !1;
    switch (b.target) {
        case "_top":
        case "_parent":
            break;
        case "":
        case "_self":
            if (e)
                return !1;
            break;
        default:
            return !1;
    }
    return !d || (Go(a, d) && Do(c) == a.m) ? !1 : !0;
}
function Go(a, b) {
    return b.replace(Ho, "") == a.l.replace(Ho, "");
}
function Io(a, b, c) {
    if (ta(["data-google-vignette", "data-google-interstitial"], function (f) { return "false" === b.getAttribute(f) || !1; }))
        return !1;
    var d = b.href, e = d && (d.match(hc)[3] || null);
    if (!Fo(a, b, d, e, c))
        return !1;
    a.j = !!e && Go(a, e);
    return (a.j ||
        (!c &&
            !Pl(b) &&
            /^https?:\/\//i.test(d) &&
            !ta($e.S().m(Ze.g, Ze.defaultValue), function (f) { return new RegExp(f, "i").test(d); })));
}
function Jo(a, b) {
    if (!b || !a.g)
        return [];
    var c = [];
    Pf(b, c, !0, !0);
    b = c.join("");
    b = b.replace(Qf, " ").replace(Rf, "");
    b = b.replace(Sf, "");
    b = b.replace(Tf, " ");
    " " != b && (b = b.replace(Uf, ""));
    if (!b)
        return [];
    a = b.match(a.g);
    b = [];
    for (c = 0; a && c < a.length; c++) {
        var d = a[c].toLowerCase();
        0 <= oa(b, d) || b.push(d);
    }
    return b;
}
var Ko = /** @class */ (function () {
    function Ko(a) {
        this.g = null;
        this.l = a.match(hc)[3] || "";
        this.m = Do(a);
        this.j = !1;
    }
    return Ko;
}());
var Ho = /^(www\.|m\.|mobile\.)*/i;
function Lo(a, b) {
    a.T && (b.qid = a.T);
    a.R && (b.eid = a.R);
    a.aa && ((b.lnk = a.aa.substr(0, 100)), a.m.j || (b.inter = "1"));
    var c = Ld();
    c && (b.ns = String(c));
    b.fs = String(Kd() - a.F);
    b.req = a.Ba.src;
    Hd(a.Aa, "ia_evt", b, !0, 0.01);
}
function Mo(a) {
    if (a.Y)
        Lo(a, { dha: Date.now() - a.v }), No(a) ? a.g.history.back() : Oo(a);
    else if (a.j) {
        var b = Date.now();
        a.g.addEventListener("pagehide", function () {
            Lo(a, { pg_hid: Date.now() - b });
        });
        a.O && (a.Z = !1);
        Po(a, a.j.href);
    }
}
function Qo(a) {
    a.F &&
        a.J &&
        (a.N && (Ro(a), So(a)),
            (a = a.o.j) && a.setAttribute("data-vignette-loaded", "true"));
}
function No(a) {
    return -1 != a.g.location.hash.indexOf("google_vignette");
}
function Oo(a) {
    a.v &&
        ((a.Ca = !0),
            a.l && (B(a.g.document, "click", a.l), (a.l = null)),
            a.D && a.D.parentNode && (a.D.parentNode.removeChild(a.D), (a.D = null)),
            a.C && a.C.parentNode && (a.C.parentNode.removeChild(a.C), (a.C = null)),
            so(a.o, !1),
            a.Oa());
}
function Po(a, b) {
    a = a.g.location;
    b = Nc(b, Mc) || Ic;
    a.replace(Jc(b));
}
function To(a, b) {
    if (!a.F) {
        a.F = Kd();
        a.Ia = "true" === b["i-fvs"];
        var c = b["i-bua"];
        if (c && a.g.navigator) {
            var d = a.g.navigator.userAgent;
            c = c.split(";");
            if (d && c)
                for (var e = 0; e < c.length; e++)
                    if (0 <= d.indexOf(c[e]))
                        return;
        }
        if ((d = b.i_expid))
            a.R = d;
        b.qid && (a.T = b.qid);
        "true" != b.translucent_bkg_vignette || Q(Ye) || uo(a.o);
        "true" == b.bottom_half_trans_bkg_vignette &&
            ((d = a.o), (c = d.j)) &&
            (I(c, { width: "100%", height: "50%", top: "auto", bottom: "0px" }),
                K(d.l, Ao));
        a.bb = "true" == b.switch_back_vignette;
        b.switch_back_vignette_animation &&
            ((a.Xa = !0), (a.Ya = b.switch_back_vignette_animation));
        a.N = "true" === b.click_bubble;
        a.Ha = "true" === b.check_screen_change;
        d = Number(b.screen_size_threshold);
        Number.isNaN(d) || (a.sa = d);
        if ("true" == b.i_blur_bg)
            a: {
                d = a.o;
                c = d.j;
                for (e = 0; c && 25 > e; ++e) {
                    if (c.nodeName && "body" == c.nodeName.toString().toLowerCase())
                        break a;
                    c = c.parentElement;
                }
                d.v = !0;
            }
        "true" === b.iobs && a.g.IntersectionObserver && (a.$ = !0);
        if ((b = b.stop_word))
            (b = b.split(";")) && b.length ? Eo(a.m, b) : Eo(a.m, null);
        a.N || (Ro(a), So(a));
        a.L = !0;
        a.P = null;
        a.Da();
        Qo(a);
    }
}
function Uo(a) {
    No(a) || (a.g.location.hash = "google_vignette");
    a.O = L(a.A, 526, t(a.sb, a));
    m.setTimeout(la(z, a.g, "hashchange", a.O), 0);
}
function Ro(a) {
    if (!a.l) {
        a.l = L(a.A, 527, function (d) { return Vo(a, d); });
        var b = a.N ? {} : Ob;
        z(a.g.document, "click", a.l, b);
        var c = a.g.frames;
        for (var d = 0; d < c.length; d++)
            try {
                a.Sa(c[d].frameElement) || z(c[d].document, "click", a.l, b);
            }
            catch (e) { }
    }
}
function So(a) {
    var b = a.g.document;
    1 === Ig(b) &&
        z(b, "visibilitychange", L(a.A, 342, function () {
            if (!a.ia)
                if (1 === Ig(b)) {
                    var c = new Date().getTime() - a.Na;
                    a.ia = !0;
                    Lo(a, { vsbl: 1, dur_hid: c });
                    if (a.bb && a.ma()) {
                        a.v = Date.now();
                        a.Y = !0;
                        a.$ || Wo(a);
                        Uo(a);
                        uo(a.o);
                        if (a.Xa) {
                            c = a.o;
                            var d = c.j;
                            if (d && "ggl-vgn-slideup" === a.Ya) {
                                var e = cc(document, "STYLE");
                                e.type = "text/css";
                                e.appendChild(c.m.createTextNode("@keyframes ggl-vgn-slideup {0% { transform: translateY(100%); opacity: 0.5; }100% { transform: translateY(0); opacity: 1; }  }@-webkit-keyframes ggl-vgn-slideup { 0% { transform: translateY(100%); opacity: 0.5; } 100% { transform: translateY(0); opacity: 1; } }"));
                                I(d, Bo);
                                c.m.body.appendChild(e);
                            }
                        }
                        a.Va = !0;
                        so(a.o, !0);
                    }
                }
                else
                    a.Na = new Date().getTime();
        }));
}
function Xo(a) {
    if (a.Ha) {
        var b = a.g.innerWidth / a.H.width - 1;
        if (0 > b && Math.abs(b) > a.sa)
            return !1;
        b = a.g.innerHeight / a.H.height - 1;
        return 0 > b && Math.abs(b) > a.sa ? !1 : !0;
    }
    return a.H.width < a.H.height === ke(a.g);
}
function Yo(a, b) {
    return (Kd() - a.F < a.Ga &&
        a.L &&
        !a.Ka &&
        !No(a) &&
        !!a.J &&
        (a.Ia || !M(a.g).wasReactiveAdVisible[9]) &&
        !Jo(a.m, b).length &&
        0.05 > Math.abs(le(a.g) - 1) &&
        Xo(a));
}
function Zo(a, b, c) {
    a = a.g.document.createElement("link");
    a.setAttribute("rel", c);
    a.setAttribute("href", b);
    return a;
}
function $o(a, b) {
    for (b = b.target; b;) {
        if ("A" == b.nodeName) {
            if (Io(a.m, b, b.ownerDocument != a.g.document))
                return b;
            break;
        }
        b = b.parentElement;
    }
    return null;
}
function Vo(a, b) {
    if (b && !b.defaultPrevented && !a.v && !a.G && !a.j) {
        var c = $o(a, b);
        c &&
            (Yo(a, c)
                ? ((a.j = c),
                    Bc(b),
                    (b.preventDefault = function () { return b && (b.preventDefaultTriggered_ = !0); }),
                    m.setTimeout(t(a.tb, a, b), 0))
                : ap(a, c, !1));
    }
}
function ap(a, b, c) {
    var d = a.g;
    var e = M(d);
    var f = !Xo(a);
    e = {
        zm: Number(0.05 > Math.abs(le(d) - 1)),
        sz: Number(f),
        fc: Number(a.L),
        vp: Number(No(a)),
        al: Number(!!a.J),
        fsi: Number(!!e.wasReactiveAdVisible[9]),
        ag: Number(Kd() - a.F < a.Ga),
    };
    c && (e.wsdojl = !0);
    f &&
        ((e.rs_sz = a.H.width + "x" + a.H.height),
            (e.cr_sz = d.innerWidth + "x" + d.innerHeight));
    b = Jo(a.m, b);
    b.length && (e.sw = b.join());
    a.P && (e.ts = a.P);
    Lo(a, e);
}
function Wo(a) {
    var _a;
    a.Ba.contentWindow.postMessage(JSON.stringify((_a = {}, _a["msg_type"] = "i-view", _a)), "*");
}
var bp = /** @class */ (function (_super) {
    __extends(bp, _super);
    function bp(a, b, c, d, e) {
        var _this = _super.call(this, a, c) || this;
        _this.J = NaN;
        _this.Ba = b;
        _this.Ca = !1;
        _this.j = null;
        _this.Y = !1;
        _this.R = null;
        _this.F = NaN;
        _this.Ia = _this.Ka = _this.L = !1;
        _this.Z = !0;
        _this.aa = null;
        _this.v = 0;
        _this.l = _this.D = _this.C = _this.T = null;
        _this.O = void 0;
        _this.P = null;
        _this.o = d;
        _this.ia = !1;
        _this.Na = 0;
        _this.Xa = _this.bb = !1;
        _this.Ya = "";
        _this.Va = !1;
        _this.m = new Ko(a.location.href);
        _this.H = e;
        _this.Ha = !1;
        _this.sa = 0;
        _this.Ga = $e.S().g(Ve.g, Ve.defaultValue) || 864e5;
        _this.$ = !1;
        _this.mc = Ca(function () { return void Lo(_this, { tth: Date.now() - _this.v, iswbv: _this.Va }); });
        _this.N = !1;
        return _this;
    }
    bp.prototype.ta = function (a) {
        var _this = this;
        a["i-adframe-load"] = function () {
            _this.J || ((_this.J = Kd()), Qo(_this));
        };
        a["i-blur"] = function () {
            _this.Y = !0;
            _this.O && (_this.Z = !0);
        };
        a["i-dismiss"] = function () {
            Mo(_this);
        };
        a["i-fill"] = function (b) {
            b = pe(b);
            To(_this, b);
        };
        a["i-no"] = function (b) {
            _this.L = !1;
            _this.P = b.i_tslv ? b.i_tslv : null;
        };
        a.i_iif = function () {
            _this.Ka = !0;
        };
    };
    bp.prototype.Da = function () { };
    bp.prototype.sb = function () {
        this.Z &&
            (No(this)
                ? (Lo(this, { fnv: 1 }), Po(this, this.j.href))
                : (this.mc(), Oo(this)));
    };
    bp.prototype.ra = function () {
        _super.prototype.ra.call(this);
        No(this) && Po(this, this.j.href);
        this.l && (B(this.g.document, "click", this.l), (this.l = null));
    };
    bp.prototype.Oa = function () { };
    bp.prototype.Sa = function () {
        return !1;
    };
    bp.prototype.tb = function (a) {
        this.v ||
            !this.j ||
            this.G ||
            ((a = a.preventDefaultTriggered_),
                !a &&
                    Io(this.m, this.j, this.j.ownerDocument != this.g.document) &&
                    Yo(this, this.j)
                    ? this.ma()
                        ? ((this.v = Date.now()),
                            (M(this.g).wasReactiveAdVisible[8] = !0),
                            (this.aa = this.j.href.substr(0, 100)),
                            this.$ || Wo(this),
                            (a = this.j.href),
                            (this.D = Zo(this, a, "prerender")),
                            (this.C = Zo(this, a, "prefetch")),
                            this.g.document.body.appendChild(this.D),
                            this.g.document.body.appendChild(this.C),
                            Uo(this),
                            (a = L(this.A, 528, t(this.ub, this))),
                            z(this.g, "pagehide", a),
                            so(this.o, !0),
                            this.ia && Lo(this, { vsbl: 2 }))
                        : Po(this, this.j.href)
                    : (ap(this, this.j, a), a ? (this.j = null) : Po(this, this.j.href)));
    };
    bp.prototype.ma = function () {
        return !0;
    };
    bp.prototype.ub = function () {
        this.Ca || Lo(this, { Pc: Date.now() - this.v });
        Oo(this);
    };
    return bp;
}(we));
function cp(a, b) {
    b = b || a.g.document;
    if (!b.getElementById("vignette-style-id")) {
        var c = fc(Wb(b), "STYLE");
        c.id = "vignette-style-id";
        c.textContent =
            "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
        b.head.appendChild(c);
        a.M.push(c);
    }
}
function dp(a, b, c) {
    var d = 0;
    for (var e = b.links.length; 0 <= e; e--) {
        var f = b.links[e];
        f &&
            (f.classList.remove("google_vignette_inst"),
                Io(a.m, f, c) &&
                    !Jo(a.m, f).length &&
                    (d++, f.classList.add("google_vignette_inst")));
    }
    return d;
}
var ep = /** @class */ (function (_super) {
    __extends(ep, _super);
    function ep(a, b, c, d, e, f) {
        var _this = _super.call(this, a, b, Zd, new Co(a, b, e), d) || this;
        _this.rb = f;
        _this.M = [];
        _this.U = 0;
        _this.La = id(_this.g.location, "google_ia_debug");
        _this.pb = c;
        return _this;
    }
    ep.prototype.Oa = function () {
        if (this.La) {
            for (var b = 0; b < this.M.length; ++b) {
                var a = this.M[b];
                (a = a.ownerNode || a.owningElement || a) &&
                    a.parentNode &&
                    a.parentNode.removeChild(a);
            }
            this.M = [];
            this.U && m.clearInterval(this.U);
        }
    };
    ep.prototype.Da = function () {
        this.La && (this.Fa(), (this.U = m.setInterval(t(this.Fa, this), 5e3)));
    };
    ep.prototype.Fa = function () {
        var a = dp(this, this.g.document, !1);
        cp(this);
        var b = this.g.frames;
        for (var c = 0; c < b.length; c++)
            try {
                (a += dp(this, b[c].document, !0)), cp(this, b[c].document);
            }
            catch (d) { }
        b = M(this.g).tagSpecificState[1] || null;
        null != b && ((b = nf(b, 1)), null != b && b.setLinksInstrumented(a));
    };
    ep.prototype.ma = function () {
        return this.pb || Un(Vn.S(), this.rb);
    };
    ep.prototype.Sa = function (a) {
        return /aswift_[0-9]+/.test(a.id);
    };
    return ep;
}(bp));
var fp = /** @class */ (function () {
    function fp() {
    }
    fp.prototype.verifyAndProcessConfig = function (a, b, c) {
        var d = M(a);
        if (d.wasReactiveAdConfigReceived[8])
            return !1;
        var e = new vf();
        if (!uf(e, b))
            return !1;
        d.wasReactiveAdConfigReceived[8] = !0;
        if (!e.j && !Tn(Vn.S(), c))
            return !1;
        b = a.document.createElement("ins");
        b.className = "adsbygoogle";
        I(b, { display: "none" });
        a.document.documentElement.appendChild(b);
        c = e.v || {};
        c.google_ad_client = e.l;
        c.google_ad_width = e.o;
        c.google_ad_height = e.m;
        c.google_reactive_ad_format = 8;
        e.g && (c.google_reactive_fill_message = e.g);
        e.j && (c.google_adtest = "on");
        Vf(b, c, a);
        return !0;
    };
    return fp;
}());
ba(fp);
var gp = /** @class */ (function () {
    function gp() {
    }
    gp.prototype.configProcessorForAdFormat = function (a) {
        switch (a) {
            case 1:
            case 2:
                return new Yf(a);
            case 8:
                return fp.S();
            case 9:
                return oo.S();
            default:
                return null;
        }
    };
    gp.prototype.createAdSlot = function (a, b, c, d, e) {
        a: {
            var f = b.google_reactive_ad_format;
            switch (f) {
                case 1:
                case 2:
                    e = sf(a, f);
                    if (Q(Ke) && 2 == f && "top" != e)
                        break;
                    c = new jh(c, a, e, d);
                    a = new lh(a, c);
                    da(b.google_reactive_fill_message) &&
                        kh(a, b.google_reactive_fill_message);
                    break a;
                case 8:
                    a = new ep(a, c, "on" == b.google_adtest, new Vb(b.google_ad_width, b.google_ad_height), d, e);
                    da(b.google_reactive_fill_message) &&
                        To(a, b.google_reactive_fill_message);
                    break a;
                case 9:
                    f = b.google_rasc;
                    if (void 0 === f || null === f)
                        var g = null;
                    else
                        try {
                            g = Kb(oh, f);
                        }
                        catch (h) {
                            Hd(Xd, "rasf_fsi_ama", {}, !0, 0.1, void 0), (g = null);
                        }
                    g = g || new oh();
                    new mo(a, c, g, "on" == b.google_adtest, d, e);
            }
        }
    };
    return gp;
}());
var hp = function (a) {
    Zd.Ra = function (b) {
        b.shv = String(a);
        b.mnvr = "";
        var c = He.S().g();
        m.google_ad_modifications || (m.google_ad_modifications = {});
        var d = m.google_ad_modifications;
        d.eids || (d.eids = []);
        (c = c.concat(d.eids).join(",")) &&
            (b.eid = 50 < c.length ? c.substring(0, 50) + "T" : c);
    };
};
var xd = function (a) { return "string" === typeof a; };
var wd = "undefined" === typeof sttc ? void 0 : sttc;
function ip() {
    try {
        return vd(), new td(JSON.parse(wd));
    }
    catch (a) {
        Zd.lb(838, a instanceof Error ? a : Error(String(a)), void 0, function (b) {
            b.jspb = String(wd);
        });
    }
    return new td();
}
ce(210, function () {
    var a = ip();
    a = y(a, 2);
    hp(null == a ? "" : a);
    cf(void 0);
    a = new gp();
    m.google_llp || (m.google_llp = {});
    var b = m.google_llp;
    b[1] || (b[1] = new Kf());
    b[1].resolve(a);
});
call(this, '[2019,"r20210504","/r20190131",1,[],1,null,".google.de"]');
;
//# sourceMappingURL=test.js.map