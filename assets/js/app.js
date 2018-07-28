webpackJsonp([ 0 ], [ function(t, e) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
        "object" == typeof window && (n = window);
    }
    t.exports = n;
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined");
    }
    function r() {
        throw new Error("clearTimeout has not been defined");
    }
    function o(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
        try {
            return l(t, 0);
        } catch (e) {
            try {
                return l.call(null, t, 0);
            } catch (e) {
                return l.call(this, t, 0);
            }
        }
    }
    function i(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
        try {
            return f(t);
        } catch (e) {
            try {
                return f.call(null, t);
            } catch (e) {
                return f.call(this, t);
            }
        }
    }
    function c() {
        m && h && (m = !1, h.length ? p = h.concat(p) : v = -1, p.length && u());
    }
    function u() {
        if (!m) {
            var t = o(c);
            m = !0;
            for (var e = p.length; e; ) {
                for (h = p, p = []; ++v < e; ) h && h[v].run();
                v = -1, e = p.length;
            }
            h = null, m = !1, i(t);
        }
    }
    function a(t, e) {
        this.fun = t, this.array = e;
    }
    function s() {}
    var l, f, d = t.exports = {};
    !function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
            l = n;
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (t) {
            f = r;
        }
    }();
    var h, p = [], m = !1, v = -1;
    d.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new a(t, e)), 1 !== p.length || m || o(u);
    }, a.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", 
    d.versions = {}, d.on = s, d.addListener = s, d.once = s, d.off = s, d.removeListener = s, 
    d.removeAllListeners = s, d.emit = s, d.prependListener = s, d.prependOnceListener = s, 
    d.listeners = function(t) {
        return [];
    }, d.binding = function(t) {
        throw new Error("process.binding is not supported");
    }, d.cwd = function() {
        return "/";
    }, d.chdir = function(t) {
        throw new Error("process.chdir is not supported");
    }, d.umask = function() {
        return 0;
    };
}, function(t, e, n) {
    n(3), n(8), t.exports = n(9);
}, function(t, e, n) {
    "use strict";
    (0, n(4).polyfill)(), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, e) {
        e = e || window;
        for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this);
    }), function(t) {
        t.forEach(function(t) {
            t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    null !== this.parentNode && this.parentNode.removeChild(this);
                }
            });
        });
    }([ Element.prototype, CharacterData.prototype, DocumentType.prototype ]);
}, function(t, e, n) {
    (function(r, o, i) {
        var c;
        (function() {
            "use strict";
            function u(t) {
                return "function" == typeof t || "object" == typeof t && null !== t;
            }
            function a(t) {
                return "function" == typeof t;
            }
            function s(t) {
                return "object" == typeof t && null !== t;
            }
            function l(t) {
                W = t;
            }
            function f(t) {
                H = t;
            }
            function d() {
                return function() {
                    U(p);
                };
            }
            function h() {
                return function() {
                    setTimeout(p, 1);
                };
            }
            function p() {
                for (var t = 0; t < G; t += 2) {
                    (0, tt[t])(tt[t + 1]), tt[t] = void 0, tt[t + 1] = void 0;
                }
                G = 0;
            }
            function m() {}
            function v() {
                return new TypeError("You cannot resolve a promise with itself");
            }
            function y() {
                return new TypeError("A promises callback cannot return that same promise.");
            }
            function _(t) {
                try {
                    return t.then;
                } catch (t) {
                    return ot.error = t, ot;
                }
            }
            function g(t, e, n, r) {
                try {
                    t.call(e, n, r);
                } catch (t) {
                    return t;
                }
            }
            function w(t, e, n) {
                H(function(t) {
                    var r = !1, o = g(n, e, function(n) {
                        r || (r = !0, e !== n ? E(t, n) : k(t, n));
                    }, function(e) {
                        r || (r = !0, I(t, e));
                    }, "Settle: " + (t._label || " unknown promise"));
                    !r && o && (r = !0, I(t, o));
                }, t);
            }
            function b(t, e) {
                e._state === nt ? k(t, e._result) : e._state === rt ? I(t, e._result) : j(e, void 0, function(e) {
                    E(t, e);
                }, function(e) {
                    I(t, e);
                });
            }
            function T(t, e) {
                if (e.constructor === t.constructor) b(t, e); else {
                    var n = _(e);
                    n === ot ? I(t, ot.error) : void 0 === n ? k(t, e) : a(n) ? w(t, e, n) : k(t, e);
                }
            }
            function E(t, e) {
                t === e ? I(t, v()) : u(e) ? T(t, e) : k(t, e);
            }
            function A(t) {
                t._onerror && t._onerror(t._result), L(t);
            }
            function k(t, e) {
                t._state === et && (t._result = e, t._state = nt, 0 !== t._subscribers.length && H(L, t));
            }
            function I(t, e) {
                t._state === et && (t._state = rt, t._result = e, H(A, t));
            }
            function j(t, e, n, r) {
                var o = t._subscribers, i = o.length;
                t._onerror = null, o[i] = e, o[i + nt] = n, o[i + rt] = r, 0 === i && t._state && H(L, t);
            }
            function L(t) {
                var e = t._subscribers, n = t._state;
                if (0 !== e.length) {
                    for (var r, o, i = t._result, c = 0; c < e.length; c += 3) r = e[c], o = e[c + n], 
                    r ? O(n, r, o, i) : o(i);
                    t._subscribers.length = 0;
                }
            }
            function C() {
                this.error = null;
            }
            function S(t, e) {
                try {
                    return t(e);
                } catch (t) {
                    return it.error = t, it;
                }
            }
            function O(t, e, n, r) {
                var o, i, c, u, s = a(n);
                if (s) {
                    if (o = S(n, r), o === it ? (u = !0, i = o.error, o = null) : c = !0, e === o) return void I(e, y());
                } else o = r, c = !0;
                e._state !== et || (s && c ? E(e, o) : u ? I(e, i) : t === nt ? k(e, o) : t === rt && I(e, o));
            }
            function M(t, e) {
                try {
                    e(function(e) {
                        E(t, e);
                    }, function(e) {
                        I(t, e);
                    });
                } catch (e) {
                    I(t, e);
                }
            }
            function x(t, e) {
                var n = this;
                n._instanceConstructor = t, n.promise = new t(m), n._validateInput(e) ? (n._input = e, 
                n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? k(n.promise, n._result) : (n.length = n.length || 0, 
                n._enumerate(), 0 === n._remaining && k(n.promise, n._result))) : I(n.promise, n._validationError());
            }
            function P(t) {
                return new ct(this, t).promise;
            }
            function F(t) {
                function e(t) {
                    E(o, t);
                }
                function n(t) {
                    I(o, t);
                }
                var r = this, o = new r(m);
                if (!B(t)) return I(o, new TypeError("You must pass an array to race.")), o;
                for (var i = t.length, c = 0; o._state === et && c < i; c++) j(r.resolve(t[c]), void 0, e, n);
                return o;
            }
            function N(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var n = new e(m);
                return E(n, t), n;
            }
            function q(t) {
                var e = this, n = new e(m);
                return I(n, t), n;
            }
            function D() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }
            function Y() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }
            function $(t) {
                this._id = ft++, this._state = void 0, this._result = void 0, this._subscribers = [], 
                m !== t && (a(t) || D(), this instanceof $ || Y(), M(this, t));
            }
            function J() {
                var t;
                if (void 0 !== i) t = i; else if ("undefined" != typeof self) t = self; else try {
                    t = Function("return this")();
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment");
                }
                var e = t.Promise;
                e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = dt);
            }
            var K;
            K = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            };
            var U, W, z, B = K, G = 0, H = function(t, e) {
                tt[G] = t, tt[G + 1] = e, 2 === (G += 2) && (W ? W(p) : z());
            }, Q = "undefined" != typeof window ? window : void 0, R = Q || {}, V = R.MutationObserver || R.WebKitMutationObserver, X = void 0 !== r && "[object process]" === {}.toString.call(r), Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, tt = new Array(1e3);
            z = X ? function() {
                var t = r.nextTick, e = r.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = o), function() {
                    t(p);
                };
            }() : V ? function() {
                var t = 0, e = new V(p), n = document.createTextNode("");
                return e.observe(n, {
                    characterData: !0
                }), function() {
                    n.data = t = ++t % 2;
                };
            }() : Z ? function() {
                var t = new MessageChannel();
                return t.port1.onmessage = p, function() {
                    t.port2.postMessage(0);
                };
            }() : void 0 === Q ? function() {
                try {
                    var t = n(7);
                    return U = t.runOnLoop || t.runOnContext, d();
                } catch (t) {
                    return h();
                }
            }() : h();
            var et = void 0, nt = 1, rt = 2, ot = new C(), it = new C();
            x.prototype._validateInput = function(t) {
                return B(t);
            }, x.prototype._validationError = function() {
                return new Error("Array Methods must be provided an Array");
            }, x.prototype._init = function() {
                this._result = new Array(this.length);
            };
            var ct = x;
            x.prototype._enumerate = function() {
                for (var t = this, e = t.length, n = t.promise, r = t._input, o = 0; n._state === et && o < e; o++) t._eachEntry(r[o], o);
            }, x.prototype._eachEntry = function(t, e) {
                var n = this, r = n._instanceConstructor;
                s(t) ? t.constructor === r && t._state !== et ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(r.resolve(t), e) : (n._remaining--, 
                n._result[e] = t);
            }, x.prototype._settledAt = function(t, e, n) {
                var r = this, o = r.promise;
                o._state === et && (r._remaining--, t === rt ? I(o, n) : r._result[e] = n), 0 === r._remaining && k(o, r._result);
            }, x.prototype._willSettleAt = function(t, e) {
                var n = this;
                j(t, void 0, function(t) {
                    n._settledAt(nt, e, t);
                }, function(t) {
                    n._settledAt(rt, e, t);
                });
            };
            var ut = P, at = F, st = N, lt = q, ft = 0, dt = $;
            $.all = ut, $.race = at, $.resolve = st, $.reject = lt, $._setScheduler = l, $._setAsap = f, 
            $._asap = H, $.prototype = {
                constructor: $,
                then: function(t, e) {
                    var n = this, r = n._state;
                    if (r === nt && !t || r === rt && !e) return this;
                    var o = new this.constructor(m), i = n._result;
                    if (r) {
                        var c = arguments[r - 1];
                        H(function() {
                            O(r, o, c, i);
                        });
                    } else j(n, o, t, e);
                    return o;
                },
                catch: function(t) {
                    return this.then(null, t);
                }
            };
            var ht = J, pt = {
                Promise: dt,
                polyfill: ht
            };
            void 0 !== (c = function() {
                return pt;
            }.call(e, n, e, t)) && (t.exports = c), ht();
        }).call(this);
    }).call(e, n(1), n(5).setImmediate, n(0));
}, function(t, e, n) {
    (function(t) {
        function r(t, e) {
            this._id = t, this._clearFn = e;
        }
        var o = Function.prototype.apply;
        e.setTimeout = function() {
            return new r(o.call(setTimeout, window, arguments), clearTimeout);
        }, e.setInterval = function() {
            return new r(o.call(setInterval, window, arguments), clearInterval);
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close();
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(window, this._id);
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout();
            }, e));
        }, n(6), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, 
        e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
    }).call(e, n(0));
}, function(t, e, n) {
    (function(t, e) {
        !function(t, n) {
            "use strict";
            function r(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                var r = {
                    callback: t,
                    args: e
                };
                return s[a] = r, u(a), a++;
            }
            function o(t) {
                delete s[t];
            }
            function i(t) {
                var e = t.callback, r = t.args;
                switch (r.length) {
                  case 0:
                    e();
                    break;

                  case 1:
                    e(r[0]);
                    break;

                  case 2:
                    e(r[0], r[1]);
                    break;

                  case 3:
                    e(r[0], r[1], r[2]);
                    break;

                  default:
                    e.apply(n, r);
                }
            }
            function c(t) {
                if (l) setTimeout(c, 0, t); else {
                    var e = s[t];
                    if (e) {
                        l = !0;
                        try {
                            i(e);
                        } finally {
                            o(t), l = !1;
                        }
                    }
                }
            }
            if (!t.setImmediate) {
                var u, a = 1, s = {}, l = !1, f = t.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function() {
                    u = function(t) {
                        e.nextTick(function() {
                            c(t);
                        });
                    };
                }() : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0, n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1;
                        }, t.postMessage("", "*"), t.onmessage = n, e;
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$", n = function(n) {
                        n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && c(+n.data.slice(e.length));
                    };
                    t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), 
                    u = function(n) {
                        t.postMessage(e + n, "*");
                    };
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel();
                    t.port1.onmessage = function(t) {
                        c(t.data);
                    }, u = function(e) {
                        t.port2.postMessage(e);
                    };
                }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                    var t = f.documentElement;
                    u = function(e) {
                        var n = f.createElement("script");
                        n.onreadystatechange = function() {
                            c(e), n.onreadystatechange = null, t.removeChild(n), n = null;
                        }, t.appendChild(n);
                    };
                }() : function() {
                    u = function(t) {
                        setTimeout(c, 0, t);
                    };
                }(), d.setImmediate = r, d.clearImmediate = o;
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self);
    }).call(e, n(0), n(1));
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    document.querySelectorAll(".js-checkbox-toggle").forEach(function(t) {
        t.addEventListener("keyup", function(e) {
            13 == (e.keyCode ? e.keyCode : e.which) && t.click();
        }), t.getAttribute("data-html-toggle") && t.addEventListener("click", function() {
            var e = t.getAttribute("data-html-toggle");
            t.checked ? document.documentElement.classList.add(e) : document.documentElement.classList.remove(e);
        }), t.nextElementSibling.addEventListener("touchstart", function() {});
    }), document.querySelectorAll("[role=button], .btn").forEach(function(t) {
        t.addEventListener("keyup", function(e) {
            32 == (e.keyCode ? e.keyCode : e.which) && t.click();
        });
    });
}, function(t, e, n) {
    "use strict";
    var r = document.querySelector(".video-home");
    r && new Plyr(r, {
        autoplay: !0,
        muted: !0
    });
    var o = document.querySelector(".art-audio");
    o && new Plyr(o);
} ], [ 2 ]);
//# sourceMappingURL=app.js.map