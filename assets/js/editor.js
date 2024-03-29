!(function () {
    var e = {
        960: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.Doctype =
                    t.CDATA =
                    t.Tag =
                    t.Style =
                    t.Script =
                    t.Comment =
                    t.Directive =
                    t.Text =
                    t.Root =
                    t.isTag =
                    t.ElementType =
                    void 0),
                (function (e) {
                    (e.Root = "root"),
                        (e.Text = "text"),
                        (e.Directive = "directive"),
                        (e.Comment = "comment"),
                        (e.Script = "script"),
                        (e.Style = "style"),
                        (e.Tag = "tag"),
                        (e.CDATA = "cdata"),
                        (e.Doctype = "doctype");
                })((n = t.ElementType || (t.ElementType = {}))),
                (t.isTag = function (e) {
                    return (
                        e.type === n.Tag || e.type === n.Script || e.type === n.Style
                    );
                }),
                (t.Root = n.Root),
                (t.Text = n.Text),
                (t.Directive = n.Directive),
                (t.Comment = n.Comment),
                (t.Script = n.Script),
                (t.Style = n.Style),
                (t.Tag = n.Tag),
                (t.CDATA = n.CDATA),
                (t.Doctype = n.Doctype);
        },
        732: function (e, t, n) {
            "use strict";
            var l =
                (this && this.__createBinding) ||
                (Object.create
                    ? function (e, t, n, l) {
                        void 0 === l && (l = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        (r &&
                            !("get" in r
                                ? !t.__esModule
                                : r.writable || r.configurable)) ||
                            (r = {
                                enumerable: !0,
                                get: function () {
                                    return t[n];
                                },
                            }),
                            Object.defineProperty(e, l, r);
                    }
                    : function (e, t, n, l) {
                        void 0 === l && (l = n), (e[l] = t[n]);
                    }),
                r =
                    (this && this.__exportStar) ||
                    function (e, t) {
                        for (var n in e)
                            "default" === n ||
                                Object.prototype.hasOwnProperty.call(t, n) ||
                                l(t, e, n);
                    };
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.DomHandler = void 0);
            var o = n(960),
                a = n(790);
            r(n(790), t);
            var i = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
                s = (function () {
                    function e(e, t, n) {
                        (this.dom = []),
                            (this.root = new a.Document(this.dom)),
                            (this.done = !1),
                            (this.tagStack = [this.root]),
                            (this.lastNode = null),
                            (this.parser = null),
                            "function" == typeof t && ((n = t), (t = i)),
                            "object" == typeof e && ((t = e), (e = void 0)),
                            (this.callback = null != e ? e : null),
                            (this.options = null != t ? t : i),
                            (this.elementCB = null != n ? n : null);
                    }
                    return (
                        (e.prototype.onparserinit = function (e) {
                            this.parser = e;
                        }),
                        (e.prototype.onreset = function () {
                            (this.dom = []),
                                (this.root = new a.Document(this.dom)),
                                (this.done = !1),
                                (this.tagStack = [this.root]),
                                (this.lastNode = null),
                                (this.parser = null);
                        }),
                        (e.prototype.onend = function () {
                            this.done ||
                                ((this.done = !0),
                                    (this.parser = null),
                                    this.handleCallback(null));
                        }),
                        (e.prototype.onerror = function (e) {
                            this.handleCallback(e);
                        }),
                        (e.prototype.onclosetag = function () {
                            this.lastNode = null;
                            var e = this.tagStack.pop();
                            this.options.withEndIndices &&
                                (e.endIndex = this.parser.endIndex),
                                this.elementCB && this.elementCB(e);
                        }),
                        (e.prototype.onopentag = function (e, t) {
                            var n = this.options.xmlMode ? o.ElementType.Tag : void 0,
                                l = new a.Element(e, t, void 0, n);
                            this.addNode(l), this.tagStack.push(l);
                        }),
                        (e.prototype.ontext = function (e) {
                            var t = this.lastNode;
                            if (t && t.type === o.ElementType.Text)
                                (t.data += e),
                                    this.options.withEndIndices &&
                                    (t.endIndex = this.parser.endIndex);
                            else {
                                var n = new a.Text(e);
                                this.addNode(n), (this.lastNode = n);
                            }
                        }),
                        (e.prototype.oncomment = function (e) {
                            if (
                                this.lastNode &&
                                this.lastNode.type === o.ElementType.Comment
                            )
                                this.lastNode.data += e;
                            else {
                                var t = new a.Comment(e);
                                this.addNode(t), (this.lastNode = t);
                            }
                        }),
                        (e.prototype.oncommentend = function () {
                            this.lastNode = null;
                        }),
                        (e.prototype.oncdatastart = function () {
                            var e = new a.Text(""),
                                t = new a.CDATA([e]);
                            this.addNode(t), (e.parent = t), (this.lastNode = e);
                        }),
                        (e.prototype.oncdataend = function () {
                            this.lastNode = null;
                        }),
                        (e.prototype.onprocessinginstruction = function (e, t) {
                            var n = new a.ProcessingInstruction(e, t);
                            this.addNode(n);
                        }),
                        (e.prototype.handleCallback = function (e) {
                            if ("function" == typeof this.callback)
                                this.callback(e, this.dom);
                            else if (e) throw e;
                        }),
                        (e.prototype.addNode = function (e) {
                            var t = this.tagStack[this.tagStack.length - 1],
                                n = t.children[t.children.length - 1];
                            this.options.withStartIndices &&
                                (e.startIndex = this.parser.startIndex),
                                this.options.withEndIndices &&
                                (e.endIndex = this.parser.endIndex),
                                t.children.push(e),
                                n && ((e.prev = n), (n.next = e)),
                                (e.parent = t),
                                (this.lastNode = null);
                        }),
                        e
                    );
                })();
            (t.DomHandler = s), (t.default = s);
        },
        790: function (e, t, n) {
            "use strict";
            var l,
                r =
                    (this && this.__extends) ||
                    ((l = function (e, t) {
                        return (
                            (l =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) &&
                                            (e[n] = t[n]);
                                }),
                            l(e, t)
                        );
                    }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Class extends value " +
                                    String(t) +
                                    " is not a constructor or null"
                                );
                            function __() {
                                this.constructor = e;
                            }
                            l(e, t),
                                (e.prototype =
                                    null === t
                                        ? Object.create(t)
                                        : ((__.prototype = t.prototype), new __()));
                        }),
                o =
                    (this && this.__assign) ||
                    function () {
                        return (
                            (o =
                                Object.assign ||
                                function (e) {
                                    for (var t, n = 1, l = arguments.length; n < l; n++)
                                        for (var r in (t = arguments[n]))
                                            Object.prototype.hasOwnProperty.call(t, r) &&
                                                (e[r] = t[r]);
                                    return e;
                                }),
                            o.apply(this, arguments)
                        );
                    };
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.cloneNode =
                    t.hasChildren =
                    t.isDocument =
                    t.isDirective =
                    t.isComment =
                    t.isText =
                    t.isCDATA =
                    t.isTag =
                    t.Element =
                    t.Document =
                    t.CDATA =
                    t.NodeWithChildren =
                    t.ProcessingInstruction =
                    t.Comment =
                    t.Text =
                    t.DataNode =
                    t.Node =
                    void 0);
            var a = n(960),
                i = (function () {
                    function e() {
                        (this.parent = null),
                            (this.prev = null),
                            (this.next = null),
                            (this.startIndex = null),
                            (this.endIndex = null);
                    }
                    return (
                        Object.defineProperty(e.prototype, "parentNode", {
                            get: function () {
                                return this.parent;
                            },
                            set: function (e) {
                                this.parent = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "previousSibling", {
                            get: function () {
                                return this.prev;
                            },
                            set: function (e) {
                                this.prev = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "nextSibling", {
                            get: function () {
                                return this.next;
                            },
                            set: function (e) {
                                this.next = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.cloneNode = function (e) {
                            return void 0 === e && (e = !1), w(this, e);
                        }),
                        e
                    );
                })();
            t.Node = i;
            var s = (function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return (n.data = t), n;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "nodeValue", {
                        get: function () {
                            return this.data;
                        },
                        set: function (e) {
                            this.data = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(i);
            t.DataNode = s;
            var c = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t.type = a.ElementType.Text), t;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "nodeType", {
                        get: function () {
                            return 3;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(s);
            t.Text = c;
            var u = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t.type = a.ElementType.Comment), t;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "nodeType", {
                        get: function () {
                            return 8;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(s);
            t.Comment = u;
            var m = (function (e) {
                function t(t, n) {
                    var l = e.call(this, n) || this;
                    return (l.name = t), (l.type = a.ElementType.Directive), l;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "nodeType", {
                        get: function () {
                            return 1;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(s);
            t.ProcessingInstruction = m;
            var p = (function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return (n.children = t), n;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "firstChild", {
                        get: function () {
                            var e;
                            return null !== (e = this.children[0]) && void 0 !== e
                                ? e
                                : null;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "lastChild", {
                        get: function () {
                            return this.children.length > 0
                                ? this.children[this.children.length - 1]
                                : null;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "childNodes", {
                        get: function () {
                            return this.children;
                        },
                        set: function (e) {
                            this.children = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(i);
            t.NodeWithChildren = p;
            var d = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t.type = a.ElementType.CDATA), t;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "nodeType", {
                        get: function () {
                            return 4;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(p);
            t.CDATA = d;
            var f = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t.type = a.ElementType.Root), t;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "nodeType", {
                        get: function () {
                            return 9;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(p);
            t.Document = f;
            var y = (function (e) {
                function t(t, n, l, r) {
                    void 0 === l && (l = []),
                        void 0 === r &&
                        (r =
                            "script" === t
                                ? a.ElementType.Script
                                : "style" === t
                                    ? a.ElementType.Style
                                    : a.ElementType.Tag);
                    var o = e.call(this, l) || this;
                    return (o.name = t), (o.attribs = n), (o.type = r), o;
                }
                return (
                    r(t, e),
                    Object.defineProperty(t.prototype, "nodeType", {
                        get: function () {
                            return 1;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "tagName", {
                        get: function () {
                            return this.name;
                        },
                        set: function (e) {
                            this.name = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "attributes", {
                        get: function () {
                            var e = this;
                            return Object.keys(this.attribs).map(function (t) {
                                var n, l;
                                return {
                                    name: t,
                                    value: e.attribs[t],
                                    namespace:
                                        null === (n = e["x-attribsNamespace"]) || void 0 === n
                                            ? void 0
                                            : n[t],
                                    prefix:
                                        null === (l = e["x-attribsPrefix"]) || void 0 === l
                                            ? void 0
                                            : l[t],
                                };
                            });
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(p);
            function h(e) {
                return (0, a.isTag)(e);
            }
            function b(e) {
                return e.type === a.ElementType.CDATA;
            }
            function g(e) {
                return e.type === a.ElementType.Text;
            }
            function v(e) {
                return e.type === a.ElementType.Comment;
            }
            function k(e) {
                return e.type === a.ElementType.Directive;
            }
            function E(e) {
                return e.type === a.ElementType.Root;
            }
            function w(e, t) {
                var n;
                if ((void 0 === t && (t = !1), g(e))) n = new c(e.data);
                else if (v(e)) n = new u(e.data);
                else if (h(e)) {
                    var l = t ? x(e.children) : [],
                        r = new y(e.name, o({}, e.attribs), l);
                    l.forEach(function (e) {
                        return (e.parent = r);
                    }),
                        null != e.namespace && (r.namespace = e.namespace),
                        e["x-attribsNamespace"] &&
                        (r["x-attribsNamespace"] = o({}, e["x-attribsNamespace"])),
                        e["x-attribsPrefix"] &&
                        (r["x-attribsPrefix"] = o({}, e["x-attribsPrefix"])),
                        (n = r);
                } else if (b(e)) {
                    l = t ? x(e.children) : [];
                    var a = new d(l);
                    l.forEach(function (e) {
                        return (e.parent = a);
                    }),
                        (n = a);
                } else if (E(e)) {
                    l = t ? x(e.children) : [];
                    var i = new f(l);
                    l.forEach(function (e) {
                        return (e.parent = i);
                    }),
                        e["x-mode"] && (i["x-mode"] = e["x-mode"]),
                        (n = i);
                } else {
                    if (!k(e)) throw new Error("Not implemented yet: ".concat(e.type));
                    var s = new m(e.name, e.data);
                    null != e["x-name"] &&
                        ((s["x-name"] = e["x-name"]),
                            (s["x-publicId"] = e["x-publicId"]),
                            (s["x-systemId"] = e["x-systemId"])),
                        (n = s);
                }
                return (
                    (n.startIndex = e.startIndex),
                    (n.endIndex = e.endIndex),
                    null != e.sourceCodeLocation &&
                    (n.sourceCodeLocation = e.sourceCodeLocation),
                    n
                );
            }
            function x(e) {
                for (
                    var t = e.map(function (e) {
                        return w(e, !0);
                    }),
                    n = 1;
                    n < t.length;
                    n++
                )
                    (t[n].prev = t[n - 1]), (t[n - 1].next = t[n]);
                return t;
            }
            (t.Element = y),
                (t.isTag = h),
                (t.isCDATA = b),
                (t.isText = g),
                (t.isComment = v),
                (t.isDirective = k),
                (t.isDocument = E),
                (t.hasChildren = function (e) {
                    return Object.prototype.hasOwnProperty.call(e, "children");
                }),
                (t.cloneNode = w);
        },
        885: function (e, t) {
            t.CASE_SENSITIVE_TAG_NAMES = [
                "animateMotion",
                "animateTransform",
                "clipPath",
                "feBlend",
                "feColorMatrix",
                "feComponentTransfer",
                "feComposite",
                "feConvolveMatrix",
                "feDiffuseLighting",
                "feDisplacementMap",
                "feDropShadow",
                "feFlood",
                "feFuncA",
                "feFuncB",
                "feFuncG",
                "feFuncR",
                "feGaussainBlur",
                "feImage",
                "feMerge",
                "feMergeNode",
                "feMorphology",
                "feOffset",
                "fePointLight",
                "feSpecularLighting",
                "feSpotLight",
                "feTile",
                "feTurbulence",
                "foreignObject",
                "linearGradient",
                "radialGradient",
                "textPath",
            ];
        },
        276: function (e) {
            var t = "html",
                n = "head",
                l = "body",
                r = /<([a-zA-Z]+[0-9]?)/,
                o = /<head[^]*>/i,
                a = /<body[^]*>/i,
                i = function () {
                    throw new Error(
                        "This browser does not support `document.implementation.createHTMLDocument`"
                    );
                },
                s = function () {
                    throw new Error(
                        "This browser does not support `DOMParser.prototype.parseFromString`"
                    );
                },
                c = "object" == typeof window && window.DOMParser;
            if ("function" == typeof c) {
                var u = new c();
                i = s = function (e, t) {
                    return (
                        t && (e = "<" + t + ">" + e + "</" + t + ">"),
                        u.parseFromString(e, "text/html")
                    );
                };
            }
            if ("object" == typeof document && document.implementation) {
                var m = document.implementation.createHTMLDocument();
                i = function (e, t) {
                    return t
                        ? ((m.documentElement.querySelector(t).innerHTML = e), m)
                        : ((m.documentElement.innerHTML = e), m);
                };
            }
            var p,
                d =
                    "object" == typeof document
                        ? document.createElement("template")
                        : {};
            d.content &&
                (p = function (e) {
                    return (d.innerHTML = e), d.content.childNodes;
                }),
                (e.exports = function (e) {
                    var c,
                        u,
                        m,
                        d,
                        f = e.match(r);
                    switch ((f && f[1] && (c = f[1].toLowerCase()), c)) {
                        case t:
                            return (
                                (u = s(e)),
                                o.test(e) ||
                                ((m = u.querySelector(n)) && m.parentNode.removeChild(m)),
                                a.test(e) ||
                                ((m = u.querySelector(l)) && m.parentNode.removeChild(m)),
                                u.querySelectorAll(t)
                            );
                        case n:
                        case l:
                            return (
                                (d = (u = i(e)).querySelectorAll(c)),
                                a.test(e) && o.test(e) ? d[0].parentNode.childNodes : d
                            );
                        default:
                            return p ? p(e) : (m = i(e, l).querySelector(l)).childNodes;
                    }
                });
        },
        152: function (e, t, n) {
            var l = n(276),
                r = n(507).formatDOM,
                o = /<(![a-zA-Z\s]+)>/;
            e.exports = function (e) {
                if ("string" != typeof e)
                    throw new TypeError("First argument must be a string");
                if ("" === e) return [];
                var t,
                    n = e.match(o);
                return n && n[1] && (t = n[1]), r(l(e), null, t);
            };
        },
        507: function (e, t, n) {
            for (
                var l,
                r = n(732),
                o = n(885).CASE_SENSITIVE_TAG_NAMES,
                a = r.Comment,
                i = r.Element,
                s = r.ProcessingInstruction,
                c = r.Text,
                u = {},
                m = 0,
                p = o.length;
                m < p;
                m++
            )
                (l = o[m]), (u[l.toLowerCase()] = l);
            function d(e) {
                for (var t, n = {}, l = 0, r = e.length; l < r; l++)
                    n[(t = e[l]).name] = t.value;
                return n;
            }
            function f(e) {
                return (
                    (function (e) {
                        return u[e];
                    })((e = e.toLowerCase())) || e
                );
            }
            (t.formatAttributes = d),
                (t.formatDOM = function e(t, n, l) {
                    n = n || null;
                    for (var r = [], o = 0, u = t.length; o < u; o++) {
                        var m,
                            p = t[o];
                        switch (p.nodeType) {
                            case 1:
                                (m = new i(f(p.nodeName), d(p.attributes))).children = e(
                                    p.childNodes,
                                    m
                                );
                                break;
                            case 3:
                                m = new c(p.nodeValue);
                                break;
                            case 8:
                                m = new a(p.nodeValue);
                                break;
                            default:
                                continue;
                        }
                        var y = r[o - 1] || null;
                        y && (y.next = m),
                            (m.parent = n),
                            (m.prev = y),
                            (m.next = null),
                            r.push(m);
                    }
                    return (
                        l &&
                        (((m = new s(
                            l.substring(0, l.indexOf(" ")).toLowerCase(),
                            l
                        )).next = r[0] || null),
                            (m.parent = n),
                            r.unshift(m),
                            r[1] && (r[1].prev = r[0])),
                        r
                    );
                });
        },
        488: function (e, t, n) {
            var l = n(732),
                r = n(152),
                o = n(484),
                a = n(670);
            r = "function" == typeof r.default ? r.default : r;
            var i = { lowerCaseAttributeNames: !1 };
            function s(e, t) {
                if ("string" != typeof e)
                    throw new TypeError("First argument must be a string");
                return "" === e ? [] : a(r(e, (t = t || {}).htmlparser2 || i), t);
            }
            (s.domToReact = a),
                (s.htmlToDOM = r),
                (s.attributesToProps = o),
                (s.Comment = l.Comment),
                (s.Element = l.Element),
                (s.ProcessingInstruction = l.ProcessingInstruction),
                (s.Text = l.Text),
                (e.exports = s),
                (s.default = s);
        },
        484: function (e, t, n) {
            var l = n(726),
                r = n(606);
            function o(e) {
                return l.possibleStandardNames[e];
            }
            e.exports = function (e, t) {
                var n,
                    a,
                    i,
                    s,
                    c,
                    u = {},
                    m = (e = e || {}).type && { reset: !0, submit: !0 }[e.type];
                for (n in e)
                    if (((i = e[n]), l.isCustomAttribute(n))) u[n] = i;
                    else if ((s = o((a = n.toLowerCase()))))
                        switch (
                        ((c = l.getPropertyInfo(s)),
                            ("checked" !== s && "value" !== s) ||
                            "option" === t ||
                            m ||
                            (s = o("default" + a)),
                            (u[s] = i),
                            c && c.type)
                        ) {
                            case l.BOOLEAN:
                                u[s] = !0;
                                break;
                            case l.OVERLOADED_BOOLEAN:
                                "" === i && (u[s] = !0);
                        }
                    else r.PRESERVE_CUSTOM_ATTRIBUTES && (u[n] = i);
                return r.setStyleProp(e.style, u), u;
            };
        },
        670: function (e, t, n) {
            var l = n(196),
                r = n(484),
                o = n(606),
                a = o.setStyleProp,
                i = o.canTextBeChildOfNode;
            function s(e) {
                return (
                    o.PRESERVE_CUSTOM_ATTRIBUTES &&
                    "tag" === e.type &&
                    o.isCustomComponent(e.name, e.attribs)
                );
            }
            e.exports = function e(t, n) {
                for (
                    var o,
                    c,
                    u,
                    m,
                    p,
                    d = (n = n || {}).library || l,
                    f = d.cloneElement,
                    y = d.createElement,
                    h = d.isValidElement,
                    b = [],
                    g = "function" == typeof n.replace,
                    v = n.trim,
                    k = 0,
                    E = t.length;
                    k < E;
                    k++
                )
                    if (((o = t[k]), g && h((u = n.replace(o)))))
                        E > 1 && (u = f(u, { key: u.key || k })), b.push(u);
                    else if ("text" !== o.type) {
                        switch (
                        ((m = o.attribs),
                            s(o) ? a(m.style, m) : m && (m = r(m, o.name)),
                            (p = null),
                            o.type)
                        ) {
                            case "script":
                            case "style":
                                o.children[0] &&
                                    (m.dangerouslySetInnerHTML = {
                                        __html: o.children[0].data,
                                    });
                                break;
                            case "tag":
                                "textarea" === o.name && o.children[0]
                                    ? (m.defaultValue = o.children[0].data)
                                    : o.children && o.children.length && (p = e(o.children, n));
                                break;
                            default:
                                continue;
                        }
                        E > 1 && (m.key = k), b.push(y(o.name, m, p));
                    } else {
                        if ((c = !o.data.trim().length) && o.parent && !i(o.parent))
                            continue;
                        if (v && c) continue;
                        b.push(o.data);
                    }
                return 1 === b.length ? b[0] : b;
            };
        },
        606: function (e, t, n) {
            var l = n(196),
                r = n(476).default,
                o = { reactCompat: !0 },
                a = l.version.split(".")[0] >= 16,
                i = new Set([
                    "tr",
                    "tbody",
                    "thead",
                    "tfoot",
                    "colgroup",
                    "table",
                    "head",
                    "html",
                    "frameset",
                ]);
            e.exports = {
                PRESERVE_CUSTOM_ATTRIBUTES: a,
                invertObject: function (e, t) {
                    if (!e || "object" != typeof e)
                        throw new TypeError("First argument must be an object");
                    var n,
                        l,
                        r = "function" == typeof t,
                        o = {},
                        a = {};
                    for (n in e)
                        (l = e[n]),
                            r && (o = t(n, l)) && 2 === o.length
                                ? (a[o[0]] = o[1])
                                : "string" == typeof l && (a[l] = n);
                    return a;
                },
                isCustomComponent: function (e, t) {
                    if (-1 === e.indexOf("-")) return t && "string" == typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0;
                    }
                },
                setStyleProp: function (e, t) {
                    if (null != e)
                        try {
                            t.style = r(e, o);
                        } catch (e) {
                            t.style = {};
                        }
                },
                canTextBeChildOfNode: function (e) {
                    return !i.has(e.name);
                },
                elementsWithNoTextChildren: i,
            };
        },
        139: function (e) {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                l = /^\s*/,
                r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                o = /^:\s*/,
                a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                i = /^[;\s]*/,
                s = /^\s+|\s+$/g,
                c = "\n",
                u = "/",
                m = "*",
                p = "",
                d = "comment",
                f = "declaration";
            function y(e) {
                return e ? e.replace(s, p) : p;
            }
            e.exports = function (e, s) {
                if ("string" != typeof e)
                    throw new TypeError("First argument must be a string");
                if (!e) return [];
                s = s || {};
                var h = 1,
                    b = 1;
                function g(e) {
                    var t = e.match(n);
                    t && (h += t.length);
                    var l = e.lastIndexOf(c);
                    b = ~l ? e.length - l : b + e.length;
                }
                function v() {
                    var e = { line: h, column: b };
                    return function (t) {
                        return (t.position = new k(e)), _(), t;
                    };
                }
                function k(e) {
                    (this.start = e),
                        (this.end = { line: h, column: b }),
                        (this.source = s.source);
                }
                k.prototype.content = e;
                var E = [];
                function w(t) {
                    var n = new Error(s.source + ":" + h + ":" + b + ": " + t);
                    if (
                        ((n.reason = t),
                            (n.filename = s.source),
                            (n.line = h),
                            (n.column = b),
                            (n.source = e),
                            !s.silent)
                    )
                        throw n;
                    E.push(n);
                }
                function x(t) {
                    var n = t.exec(e);
                    if (n) {
                        var l = n[0];
                        return g(l), (e = e.slice(l.length)), n;
                    }
                }
                function _() {
                    x(l);
                }
                function S(e) {
                    var t;
                    for (e = e || []; (t = C());) !1 !== t && e.push(t);
                    return e;
                }
                function C() {
                    var t = v();
                    if (u == e.charAt(0) && m == e.charAt(1)) {
                        for (
                            var n = 2;
                            p != e.charAt(n) && (m != e.charAt(n) || u != e.charAt(n + 1));

                        )
                            ++n;
                        if (((n += 2), p === e.charAt(n - 1)))
                            return w("End of comment missing");
                        var l = e.slice(2, n - 2);
                        return (
                            (b += 2),
                            g(l),
                            (e = e.slice(n)),
                            (b += 2),
                            t({ type: d, comment: l })
                        );
                    }
                }
                function F() {
                    var e = v(),
                        n = x(r);
                    if (n) {
                        if ((C(), !x(o))) return w("property missing ':'");
                        var l = x(a),
                            s = e({
                                type: f,
                                property: y(n[0].replace(t, p)),
                                value: l ? y(l[0].replace(t, p)) : p,
                            });
                        return x(i), s;
                    }
                }
                return (
                    _(),
                    (function () {
                        var e,
                            t = [];
                        for (S(t); (e = F());) !1 !== e && (t.push(e), S(t));
                        return t;
                    })()
                );
            };
        },
        726: function (e, t, n) {
            "use strict";
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, l = new Array(t); n < t; n++) l[n] = e[n];
                return l;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = 2,
                o = 3,
                a = 4;
            function i(e, t, n, l, i, s, c) {
                (this.acceptsBooleans = t === r || t === o || t === a),
                    (this.attributeName = l),
                    (this.attributeNamespace = i),
                    (this.mustUseProperty = n),
                    (this.propertyName = e),
                    (this.type = t),
                    (this.sanitizeURL = s),
                    (this.removeEmptyString = c);
            }
            var s = {};
            [
                "children",
                "dangerouslySetInnerHTML",
                "defaultValue",
                "defaultChecked",
                "innerHTML",
                "suppressContentEditableWarning",
                "suppressHydrationWarning",
                "style",
            ].forEach(function (e) {
                s[e] = new i(e, 0, !1, e, null, !1, !1);
            }),
                [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                ].forEach(function (e) {
                    var t,
                        n,
                        r =
                            ((n = 2),
                                (function (e) {
                                    if (Array.isArray(e)) return e;
                                })((t = e)) ||
                                (function (e, t) {
                                    var n =
                                        null == e
                                            ? null
                                            : ("undefined" != typeof Symbol &&
                                                e[Symbol.iterator]) ||
                                            e["@@iterator"];
                                    if (null != n) {
                                        var l,
                                            r,
                                            o = [],
                                            _n = !0,
                                            a = !1;
                                        try {
                                            for (
                                                n = n.call(e);
                                                !(_n = (l = n.next()).done) &&
                                                (o.push(l.value), !t || o.length !== t);
                                                _n = !0
                                            );
                                        } catch (e) {
                                            (a = !0), (r = e);
                                        } finally {
                                            try {
                                                _n || null == n.return || n.return();
                                            } finally {
                                                if (a) throw r;
                                            }
                                        }
                                        return o;
                                    }
                                })(t, n) ||
                                (function (e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return l(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return (
                                            "Object" === n &&
                                            e.constructor &&
                                            (n = e.constructor.name),
                                            "Map" === n || "Set" === n
                                                ? Array.from(e)
                                                : "Arguments" === n ||
                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                                    ? l(e, t)
                                                    : void 0
                                        );
                                    }
                                })(t, n) ||
                                (function () {
                                    throw new TypeError(
                                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                    );
                                })()),
                        o = r[0],
                        a = r[1];
                    s[o] = new i(o, 1, !1, a, null, !1, !1);
                }),
                ["contentEditable", "draggable", "spellCheck", "value"].forEach(
                    function (e) {
                        s[e] = new i(e, r, !1, e.toLowerCase(), null, !1, !1);
                    }
                ),
                [
                    "autoReverse",
                    "externalResourcesRequired",
                    "focusable",
                    "preserveAlpha",
                ].forEach(function (e) {
                    s[e] = new i(e, r, !1, e, null, !1, !1);
                }),
                [
                    "allowFullScreen",
                    "async",
                    "autoFocus",
                    "autoPlay",
                    "controls",
                    "default",
                    "defer",
                    "disabled",
                    "disablePictureInPicture",
                    "disableRemotePlayback",
                    "formNoValidate",
                    "hidden",
                    "loop",
                    "noModule",
                    "noValidate",
                    "open",
                    "playsInline",
                    "readOnly",
                    "required",
                    "reversed",
                    "scoped",
                    "seamless",
                    "itemScope",
                ].forEach(function (e) {
                    s[e] = new i(e, o, !1, e.toLowerCase(), null, !1, !1);
                }),
                ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                    s[e] = new i(e, o, !0, e, null, !1, !1);
                }),
                ["capture", "download"].forEach(function (e) {
                    s[e] = new i(e, a, !1, e, null, !1, !1);
                }),
                ["cols", "rows", "size", "span"].forEach(function (e) {
                    s[e] = new i(e, 6, !1, e, null, !1, !1);
                }),
                ["rowSpan", "start"].forEach(function (e) {
                    s[e] = new i(e, 5, !1, e.toLowerCase(), null, !1, !1);
                });
            var c = /[\-\:]([a-z])/g,
                u = function (e) {
                    return e[1].toUpperCase();
                };
            [
                "accent-height",
                "alignment-baseline",
                "arabic-form",
                "baseline-shift",
                "cap-height",
                "clip-path",
                "clip-rule",
                "color-interpolation",
                "color-interpolation-filters",
                "color-profile",
                "color-rendering",
                "dominant-baseline",
                "enable-background",
                "fill-opacity",
                "fill-rule",
                "flood-color",
                "flood-opacity",
                "font-family",
                "font-size",
                "font-size-adjust",
                "font-stretch",
                "font-style",
                "font-variant",
                "font-weight",
                "glyph-name",
                "glyph-orientation-horizontal",
                "glyph-orientation-vertical",
                "horiz-adv-x",
                "horiz-origin-x",
                "image-rendering",
                "letter-spacing",
                "lighting-color",
                "marker-end",
                "marker-mid",
                "marker-start",
                "overline-position",
                "overline-thickness",
                "paint-order",
                "panose-1",
                "pointer-events",
                "rendering-intent",
                "shape-rendering",
                "stop-color",
                "stop-opacity",
                "strikethrough-position",
                "strikethrough-thickness",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "text-anchor",
                "text-decoration",
                "text-rendering",
                "underline-position",
                "underline-thickness",
                "unicode-bidi",
                "unicode-range",
                "units-per-em",
                "v-alphabetic",
                "v-hanging",
                "v-ideographic",
                "v-mathematical",
                "vector-effect",
                "vert-adv-y",
                "vert-origin-x",
                "vert-origin-y",
                "word-spacing",
                "writing-mode",
                "xmlns:xlink",
                "x-height",
            ].forEach(function (e) {
                var t = e.replace(c, u);
                s[t] = new i(t, 1, !1, e, null, !1, !1);
            }),
                [
                    "xlink:actuate",
                    "xlink:arcrole",
                    "xlink:role",
                    "xlink:show",
                    "xlink:title",
                    "xlink:type",
                ].forEach(function (e) {
                    var t = e.replace(c, u);
                    s[t] = new i(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
                }),
                ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                    var t = e.replace(c, u);
                    s[t] = new i(
                        t,
                        1,
                        !1,
                        e,
                        "http://www.w3.org/XML/1998/namespace",
                        !1,
                        !1
                    );
                }),
                ["tabIndex", "crossOrigin"].forEach(function (e) {
                    s[e] = new i(e, 1, !1, e.toLowerCase(), null, !1, !1);
                }),
                (s.xlinkHref = new i(
                    "xlinkHref",
                    1,
                    !1,
                    "xlink:href",
                    "http://www.w3.org/1999/xlink",
                    !0,
                    !1
                )),
                ["src", "href", "action", "formAction"].forEach(function (e) {
                    s[e] = new i(e, 1, !1, e.toLowerCase(), null, !0, !0);
                });
            var m = n(229),
                p = m.CAMELCASE,
                d = m.SAME,
                f = m.possibleStandardNames,
                y = RegExp.prototype.test.bind(
                    new RegExp(
                        "^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
                    )
                ),
                h = Object.keys(f).reduce(function (e, t) {
                    var n = f[t];
                    return (
                        n === d
                            ? (e[t] = t)
                            : n === p
                                ? (e[t.toLowerCase()] = t)
                                : (e[t] = n),
                        e
                    );
                }, {});
            (t.BOOLEAN = o),
                (t.BOOLEANISH_STRING = r),
                (t.NUMERIC = 5),
                (t.OVERLOADED_BOOLEAN = a),
                (t.POSITIVE_NUMERIC = 6),
                (t.RESERVED = 0),
                (t.STRING = 1),
                (t.getPropertyInfo = function (e) {
                    return s.hasOwnProperty(e) ? s[e] : null;
                }),
                (t.isCustomAttribute = y),
                (t.possibleStandardNames = h);
        },
        229: function (e, t) {
            (t.SAME = 0),
                (t.CAMELCASE = 1),
                (t.possibleStandardNames = {
                    accept: 0,
                    acceptCharset: 1,
                    "accept-charset": "acceptCharset",
                    accessKey: 1,
                    action: 0,
                    allowFullScreen: 1,
                    alt: 0,
                    as: 0,
                    async: 0,
                    autoCapitalize: 1,
                    autoComplete: 1,
                    autoCorrect: 1,
                    autoFocus: 1,
                    autoPlay: 1,
                    autoSave: 1,
                    capture: 0,
                    cellPadding: 1,
                    cellSpacing: 1,
                    challenge: 0,
                    charSet: 1,
                    checked: 0,
                    children: 0,
                    cite: 0,
                    class: "className",
                    classID: 1,
                    className: 1,
                    cols: 0,
                    colSpan: 1,
                    content: 0,
                    contentEditable: 1,
                    contextMenu: 1,
                    controls: 0,
                    controlsList: 1,
                    coords: 0,
                    crossOrigin: 1,
                    dangerouslySetInnerHTML: 1,
                    data: 0,
                    dateTime: 1,
                    default: 0,
                    defaultChecked: 1,
                    defaultValue: 1,
                    defer: 0,
                    dir: 0,
                    disabled: 0,
                    disablePictureInPicture: 1,
                    disableRemotePlayback: 1,
                    download: 0,
                    draggable: 0,
                    encType: 1,
                    enterKeyHint: 1,
                    for: "htmlFor",
                    form: 0,
                    formMethod: 1,
                    formAction: 1,
                    formEncType: 1,
                    formNoValidate: 1,
                    formTarget: 1,
                    frameBorder: 1,
                    headers: 0,
                    height: 0,
                    hidden: 0,
                    high: 0,
                    href: 0,
                    hrefLang: 1,
                    htmlFor: 1,
                    httpEquiv: 1,
                    "http-equiv": "httpEquiv",
                    icon: 0,
                    id: 0,
                    innerHTML: 1,
                    inputMode: 1,
                    integrity: 0,
                    is: 0,
                    itemID: 1,
                    itemProp: 1,
                    itemRef: 1,
                    itemScope: 1,
                    itemType: 1,
                    keyParams: 1,
                    keyType: 1,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: 0,
                    low: 0,
                    manifest: 0,
                    marginWidth: 1,
                    marginHeight: 1,
                    max: 0,
                    maxLength: 1,
                    media: 0,
                    mediaGroup: 1,
                    method: 0,
                    min: 0,
                    minLength: 1,
                    multiple: 0,
                    muted: 0,
                    name: 0,
                    noModule: 1,
                    nonce: 0,
                    noValidate: 1,
                    open: 0,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: 1,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 1,
                    readOnly: 1,
                    referrerPolicy: 1,
                    rel: 0,
                    required: 0,
                    reversed: 0,
                    role: 0,
                    rows: 0,
                    rowSpan: 1,
                    sandbox: 0,
                    scope: 0,
                    scoped: 0,
                    scrolling: 0,
                    seamless: 0,
                    selected: 0,
                    shape: 0,
                    size: 0,
                    sizes: 0,
                    span: 0,
                    spellCheck: 1,
                    src: 0,
                    srcDoc: 1,
                    srcLang: 1,
                    srcSet: 1,
                    start: 0,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 1,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 1,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    accentHeight: 1,
                    "accent-height": "accentHeight",
                    accumulate: 0,
                    additive: 0,
                    alignmentBaseline: 1,
                    "alignment-baseline": "alignmentBaseline",
                    allowReorder: 1,
                    alphabetic: 0,
                    amplitude: 0,
                    arabicForm: 1,
                    "arabic-form": "arabicForm",
                    ascent: 0,
                    attributeName: 1,
                    attributeType: 1,
                    autoReverse: 1,
                    azimuth: 0,
                    baseFrequency: 1,
                    baselineShift: 1,
                    "baseline-shift": "baselineShift",
                    baseProfile: 1,
                    bbox: 0,
                    begin: 0,
                    bias: 0,
                    by: 0,
                    calcMode: 1,
                    capHeight: 1,
                    "cap-height": "capHeight",
                    clip: 0,
                    clipPath: 1,
                    "clip-path": "clipPath",
                    clipPathUnits: 1,
                    clipRule: 1,
                    "clip-rule": "clipRule",
                    color: 0,
                    colorInterpolation: 1,
                    "color-interpolation": "colorInterpolation",
                    colorInterpolationFilters: 1,
                    "color-interpolation-filters": "colorInterpolationFilters",
                    colorProfile: 1,
                    "color-profile": "colorProfile",
                    colorRendering: 1,
                    "color-rendering": "colorRendering",
                    contentScriptType: 1,
                    contentStyleType: 1,
                    cursor: 0,
                    cx: 0,
                    cy: 0,
                    d: 0,
                    datatype: 0,
                    decelerate: 0,
                    descent: 0,
                    diffuseConstant: 1,
                    direction: 0,
                    display: 0,
                    divisor: 0,
                    dominantBaseline: 1,
                    "dominant-baseline": "dominantBaseline",
                    dur: 0,
                    dx: 0,
                    dy: 0,
                    edgeMode: 1,
                    elevation: 0,
                    enableBackground: 1,
                    "enable-background": "enableBackground",
                    end: 0,
                    exponent: 0,
                    externalResourcesRequired: 1,
                    fill: 0,
                    fillOpacity: 1,
                    "fill-opacity": "fillOpacity",
                    fillRule: 1,
                    "fill-rule": "fillRule",
                    filter: 0,
                    filterRes: 1,
                    filterUnits: 1,
                    floodOpacity: 1,
                    "flood-opacity": "floodOpacity",
                    floodColor: 1,
                    "flood-color": "floodColor",
                    focusable: 0,
                    fontFamily: 1,
                    "font-family": "fontFamily",
                    fontSize: 1,
                    "font-size": "fontSize",
                    fontSizeAdjust: 1,
                    "font-size-adjust": "fontSizeAdjust",
                    fontStretch: 1,
                    "font-stretch": "fontStretch",
                    fontStyle: 1,
                    "font-style": "fontStyle",
                    fontVariant: 1,
                    "font-variant": "fontVariant",
                    fontWeight: 1,
                    "font-weight": "fontWeight",
                    format: 0,
                    from: 0,
                    fx: 0,
                    fy: 0,
                    g1: 0,
                    g2: 0,
                    glyphName: 1,
                    "glyph-name": "glyphName",
                    glyphOrientationHorizontal: 1,
                    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                    glyphOrientationVertical: 1,
                    "glyph-orientation-vertical": "glyphOrientationVertical",
                    glyphRef: 1,
                    gradientTransform: 1,
                    gradientUnits: 1,
                    hanging: 0,
                    horizAdvX: 1,
                    "horiz-adv-x": "horizAdvX",
                    horizOriginX: 1,
                    "horiz-origin-x": "horizOriginX",
                    ideographic: 0,
                    imageRendering: 1,
                    "image-rendering": "imageRendering",
                    in2: 0,
                    in: 0,
                    inlist: 0,
                    intercept: 0,
                    k1: 0,
                    k2: 0,
                    k3: 0,
                    k4: 0,
                    k: 0,
                    kernelMatrix: 1,
                    kernelUnitLength: 1,
                    kerning: 0,
                    keyPoints: 1,
                    keySplines: 1,
                    keyTimes: 1,
                    lengthAdjust: 1,
                    letterSpacing: 1,
                    "letter-spacing": "letterSpacing",
                    lightingColor: 1,
                    "lighting-color": "lightingColor",
                    limitingConeAngle: 1,
                    local: 0,
                    markerEnd: 1,
                    "marker-end": "markerEnd",
                    markerHeight: 1,
                    markerMid: 1,
                    "marker-mid": "markerMid",
                    markerStart: 1,
                    "marker-start": "markerStart",
                    markerUnits: 1,
                    markerWidth: 1,
                    mask: 0,
                    maskContentUnits: 1,
                    maskUnits: 1,
                    mathematical: 0,
                    mode: 0,
                    numOctaves: 1,
                    offset: 0,
                    opacity: 0,
                    operator: 0,
                    order: 0,
                    orient: 0,
                    orientation: 0,
                    origin: 0,
                    overflow: 0,
                    overlinePosition: 1,
                    "overline-position": "overlinePosition",
                    overlineThickness: 1,
                    "overline-thickness": "overlineThickness",
                    paintOrder: 1,
                    "paint-order": "paintOrder",
                    panose1: 0,
                    "panose-1": "panose1",
                    pathLength: 1,
                    patternContentUnits: 1,
                    patternTransform: 1,
                    patternUnits: 1,
                    pointerEvents: 1,
                    "pointer-events": "pointerEvents",
                    points: 0,
                    pointsAtX: 1,
                    pointsAtY: 1,
                    pointsAtZ: 1,
                    prefix: 0,
                    preserveAlpha: 1,
                    preserveAspectRatio: 1,
                    primitiveUnits: 1,
                    property: 0,
                    r: 0,
                    radius: 0,
                    refX: 1,
                    refY: 1,
                    renderingIntent: 1,
                    "rendering-intent": "renderingIntent",
                    repeatCount: 1,
                    repeatDur: 1,
                    requiredExtensions: 1,
                    requiredFeatures: 1,
                    resource: 0,
                    restart: 0,
                    result: 0,
                    results: 0,
                    rotate: 0,
                    rx: 0,
                    ry: 0,
                    scale: 0,
                    security: 0,
                    seed: 0,
                    shapeRendering: 1,
                    "shape-rendering": "shapeRendering",
                    slope: 0,
                    spacing: 0,
                    specularConstant: 1,
                    specularExponent: 1,
                    speed: 0,
                    spreadMethod: 1,
                    startOffset: 1,
                    stdDeviation: 1,
                    stemh: 0,
                    stemv: 0,
                    stitchTiles: 1,
                    stopColor: 1,
                    "stop-color": "stopColor",
                    stopOpacity: 1,
                    "stop-opacity": "stopOpacity",
                    strikethroughPosition: 1,
                    "strikethrough-position": "strikethroughPosition",
                    strikethroughThickness: 1,
                    "strikethrough-thickness": "strikethroughThickness",
                    string: 0,
                    stroke: 0,
                    strokeDasharray: 1,
                    "stroke-dasharray": "strokeDasharray",
                    strokeDashoffset: 1,
                    "stroke-dashoffset": "strokeDashoffset",
                    strokeLinecap: 1,
                    "stroke-linecap": "strokeLinecap",
                    strokeLinejoin: 1,
                    "stroke-linejoin": "strokeLinejoin",
                    strokeMiterlimit: 1,
                    "stroke-miterlimit": "strokeMiterlimit",
                    strokeWidth: 1,
                    "stroke-width": "strokeWidth",
                    strokeOpacity: 1,
                    "stroke-opacity": "strokeOpacity",
                    suppressContentEditableWarning: 1,
                    suppressHydrationWarning: 1,
                    surfaceScale: 1,
                    systemLanguage: 1,
                    tableValues: 1,
                    targetX: 1,
                    targetY: 1,
                    textAnchor: 1,
                    "text-anchor": "textAnchor",
                    textDecoration: 1,
                    "text-decoration": "textDecoration",
                    textLength: 1,
                    textRendering: 1,
                    "text-rendering": "textRendering",
                    to: 0,
                    transform: 0,
                    typeof: 0,
                    u1: 0,
                    u2: 0,
                    underlinePosition: 1,
                    "underline-position": "underlinePosition",
                    underlineThickness: 1,
                    "underline-thickness": "underlineThickness",
                    unicode: 0,
                    unicodeBidi: 1,
                    "unicode-bidi": "unicodeBidi",
                    unicodeRange: 1,
                    "unicode-range": "unicodeRange",
                    unitsPerEm: 1,
                    "units-per-em": "unitsPerEm",
                    unselectable: 0,
                    vAlphabetic: 1,
                    "v-alphabetic": "vAlphabetic",
                    values: 0,
                    vectorEffect: 1,
                    "vector-effect": "vectorEffect",
                    version: 0,
                    vertAdvY: 1,
                    "vert-adv-y": "vertAdvY",
                    vertOriginX: 1,
                    "vert-origin-x": "vertOriginX",
                    vertOriginY: 1,
                    "vert-origin-y": "vertOriginY",
                    vHanging: 1,
                    "v-hanging": "vHanging",
                    vIdeographic: 1,
                    "v-ideographic": "vIdeographic",
                    viewBox: 1,
                    viewTarget: 1,
                    visibility: 0,
                    vMathematical: 1,
                    "v-mathematical": "vMathematical",
                    vocab: 0,
                    widths: 0,
                    wordSpacing: 1,
                    "word-spacing": "wordSpacing",
                    writingMode: 1,
                    "writing-mode": "writingMode",
                    x1: 0,
                    x2: 0,
                    x: 0,
                    xChannelSelector: 1,
                    xHeight: 1,
                    "x-height": "xHeight",
                    xlinkActuate: 1,
                    "xlink:actuate": "xlinkActuate",
                    xlinkArcrole: 1,
                    "xlink:arcrole": "xlinkArcrole",
                    xlinkHref: 1,
                    "xlink:href": "xlinkHref",
                    xlinkRole: 1,
                    "xlink:role": "xlinkRole",
                    xlinkShow: 1,
                    "xlink:show": "xlinkShow",
                    xlinkTitle: 1,
                    "xlink:title": "xlinkTitle",
                    xlinkType: 1,
                    "xlink:type": "xlinkType",
                    xmlBase: 1,
                    "xml:base": "xmlBase",
                    xmlLang: 1,
                    "xml:lang": "xmlLang",
                    xmlns: 0,
                    "xml:space": "xmlSpace",
                    xmlnsXlink: 1,
                    "xmlns:xlink": "xmlnsXlink",
                    xmlSpace: 1,
                    y1: 0,
                    y2: 0,
                    y: 0,
                    yChannelSelector: 1,
                    z: 0,
                    zoomAndPan: 1,
                });
        },
        476: function (e, t, n) {
            "use strict";
            var l =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            t.__esModule = !0;
            var r = l(n(848)),
                o = n(678);
            t.default = function (e, t) {
                var n = {};
                return e && "string" == typeof e
                    ? ((0, r.default)(e, function (e, l) {
                        e && l && (n[(0, o.camelCase)(e, t)] = l);
                    }),
                        n)
                    : n;
            };
        },
        678: function (e, t) {
            "use strict";
            (t.__esModule = !0), (t.camelCase = void 0);
            var n = /^--[a-zA-Z0-9-]+$/,
                l = /-([a-z])/g,
                r = /^[^-]+$/,
                o = /^-(webkit|moz|ms|o|khtml)-/,
                a = /^-(ms)-/,
                i = function (e, t) {
                    return t.toUpperCase();
                },
                s = function (e, t) {
                    return "".concat(t, "-");
                };
            t.camelCase = function (e, t) {
                return (
                    void 0 === t && (t = {}),
                    (function (e) {
                        return !e || r.test(e) || n.test(e);
                    })(e)
                        ? e
                        : ((e = e.toLowerCase()),
                            (e = t.reactCompat ? e.replace(a, s) : e.replace(o, s)).replace(
                                l,
                                i
                            ))
                );
            };
        },
        848: function (e, t, n) {
            var l = n(139);
            function r(e, t) {
                var n,
                    r = null;
                if (!e || "string" != typeof e) return r;
                for (
                    var o, a, i = l(e), s = "function" == typeof t, c = 0, u = i.length;
                    c < u;
                    c++
                )
                    (o = (n = i[c]).property),
                        (a = n.value),
                        s ? t(o, a, n) : a && (r || (r = {}), (r[o] = a));
                return r;
            }
            (e.exports = r), (e.exports.default = r);
        },
        196: function (e) {
            "use strict";
            e.exports = window.React;
        },
    },
        t = {};
    function n(l) {
        var r = t[l];
        if (void 0 !== r) return r.exports;
        var o = (t[l] = { exports: {} });
        return e[l].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                    return e.default;
                }
                : function () {
                    return e;
                };
        return n.d(t, { a: t }), t;
    }),
        (n.d = function (e, t) {
            for (var l in t)
                n.o(t, l) &&
                    !n.o(e, l) &&
                    Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (function () {
            "use strict";
            var e = window.wp.domReady,
                t = n.n(e),
                l = window.wp.blocks;
            t()(() => {
                var e, t, n;
                const r =
                    null !== (e = window?.alexa?.blockStyles) && void 0 !== e
                        ? e
                        : { unregister: [], register: [] },
                    o = null !== (t = r?.register) && void 0 !== t ? t : [];
                (null !== (n = r?.unregister) && void 0 !== n ? n : []).forEach((e) => {
                    (0, l.unregisterBlockStyle)(e?.type, e?.name);
                }),
                    o.forEach((e) => {
                        (0, l.registerBlockStyle)(e?.type, e);
                    });
            });
            var r,
                o = window.wp.element,
                a = window.wp.hooks,
                i = window.wp.compose;
            const s =
                null !== (r = window?.alexa?.blockSupports) && void 0 !== r ? r : {};
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/block-supports",
                (e, t) => (
                    Object.keys(s).includes(t) &&
                    (e.supports = { ...e.supports, ...s[t] }),
                    e
                ),
                0
            ),
            (0, a.addFilter)(
                "blocks.getSaveContent.extraProps",
                "alexa/alignment-class",
                (e, t, n) => {
                    if (e && e.className && Object.keys(s).includes(t.name) && n?.align && !e.className.includes(" align")) {
                        e.className += " align" + n.align;
                    }
                    return e;
                }
            ),            
                (0, a.addFilter)(
                    "blocks.registerBlockType",
                    "alexa/block-attributes-search",
                    (e, t) => (
                        "core/search" === t &&
                        (e.attributes.style = {
                            ...e.attributes?.style,
                            spacing: {
                                ...e.attributes?.style?.spacing,
                                padding: {
                                    top: "1em",
                                    right: "1em",
                                    bottom: "1em",
                                    left: "2em",
                                },
                            },
                        }),
                        e
                    ),
                    0
                );
            const c = (0, i.createHigherOrderComponent)(
                (e) => (t) => {
                    if ("core/search" !== t.name) return (0, o.createElement)(e, t);
                    const n = document.getElementsByClassName("wp-block-search__input"),
                        l = t?.attributes?.style?.spacing?.padding;
                    return (
                        n[0] &&
                        l &&
                        (l.top && (n[0].style.paddingTop = l?.top),
                            l.right && (n[0].style.paddingRight = l?.right),
                            l.bottom && (n[0].style.paddingBottom = l?.bottom),
                            l.left && (n[0].style.paddingLeft = l?.left)),
                        (0, o.createElement)(e, t)
                    );
                },
                "withInspectorControl"
            );
            (0, a.addFilter)("editor.BlockEdit", "alexa/with-search-padding-css", c);
            var u = window.wp.apiFetch,
                m = n.n(u),
                p = window.wp.data;
            const d = { icons: { social: {}, wordpress: {} } },
                f = {
                    setIcons(e) {
                        return { type: "SET_ICONS", icons: e };
                    },
                    getIcons(e) {
                        return { type: "GET_ICONS", path: e };
                    },
                },
                y = {
                    getIcons(e) {
                        const { icons: t } = e;
                        return t;
                    },
                },
                h = {
                    GET_ICONS(e) {
                        return m()({ path: e.path });
                    },
                },
                b = {
                    *getIcons() {
                        const e = yield f.getIcons("/alexa/v1/icons/");
                        return f.setIcons(e);
                    },
                };
            function g() {
                return (
                    (g = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var l in n)
                                    Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
                            }
                            return e;
                        }),
                    g.apply(this, arguments)
                );
            }
            (0, p.register)(
                (0, p.createReduxStore)("alexa/icons", {
                    reducer: function () {
                        let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : d,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return "SET_ICONS" === t.type ? { ...e, icons: t.icons } : e;
                    },
                    actions: f,
                    selectors: y,
                    controls: h,
                    resolvers: b,
                })
            );
            var v = window.wp.components,
                k = window.wp.i18n,
                E = window.wp.primitives,
                w = (0, o.createElement)(
                    E.SVG,
                    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                    (0, o.createElement)(E.Path, {
                        d: "M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z",
                    })
                );
            const x = (e) =>
                e
                    ? e
                        ?.toLowerCase()
                        ?.replace(/(?<= )[^\s]|^./g, (e) => e?.toUpperCase())
                    : "",
                _ = (e) => {
                    var t;
                    return e &&
                        null !==
                        (t = e
                            ?.match(
                                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
                            )
                            ?.join("-")
                            ?.toLowerCase()) &&
                        void 0 !== t
                        ? t
                        : "";
                },
                S = () =>
                    (0, o.createElement)(
                        E.SVG,
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 120 120",
                            xmlSpace: "preserve",
                        },
                        (0, o.createElement)(E.Path, {
                            d: "M15 0h35v120H15zm55 0h35v120H70z",
                        })
                    ),
                C = (e) => {
                    let { children: t } = e;
                    return (0, o.createElement)(
                        "p",
                        { className: "alexa-control-label" },
                        t
                    );
                };
            
            var A,
                M = (0, o.createElement)(
                    E.SVG,
                    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                    (0, o.createElement)(E.Path, {
                        d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z",
                    })
                ),
                z = (0, o.createElement)(
                    E.SVG,
                    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                    (0, o.createElement)(E.Path, {
                        d: "M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z",
                    })
                );
            const R =
                null !== (A = window?.alexa?.blockSupports) && void 0 !== A ? A : {},
                D = [
                    "",
                    "none",
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "grid",
                    "inline-grid",
                    "contents",
                ],
                j = (e, t) => {
                    var n, l;
                    const { attributes: r, setAttributes: a } = e,
                        { style: i } = r;
                    return (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(
                            v.PanelRow,
                            { className: "alexa-display-controls" },
                            (0, o.createElement)(
                                v.Flex,
                                { className: "alexa-flex-controls" },
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.SelectControl, {
                                        label: (0, k.__)("Display", "alexa"),
                                        value:
                                            null !== (n = i?.display?.[t]) && void 0 !== n ? n : "",
                                        options: D.map((e) => ({
                                            label: x(e?.replace("-", " ")),
                                            value: e,
                                        })),
                                        onChange: (e) => {
                                            a({
                                                style: { ...i, display: { ...i?.display, [t]: e } },
                                            });
                                        },
                                    })
                                ),
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.__experimentalNumberControl, {
                                        label: (0, k.__)("Order", "alexa"),
                                        value:
                                            null !== (l = i?.order?.[t]) && void 0 !== l ? l : "",
                                        onChange: (e) => {
                                            a({ style: { ...i, order: { ...i?.order, [t]: e } } });
                                        },
                                        min: -10,
                                        max: 10,
                                        step: 1,
                                        allowReset: !0,
                                    })
                                )
                            ),
                            (0, o.createElement)(
                                v.Flex,
                                { className: "alexa-flex-controls" },
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.__experimentalUnitControl, {
                                        label: (0, k.__)("Width", "alexa"),
                                        value: i?.width?.[t],
                                        onChange: (e) => {
                                            a({ style: { ...i, width: { ...i?.width, [t]: e } } });
                                        },
                                    })
                                ),
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.__experimentalUnitControl, {
                                        label: (0, k.__)("Max Width", "alexa"),
                                        value: i?.maxWidth?.[t],
                                        onChange: (e) => {
                                            a({
                                                style: { ...i, maxWidth: { ...i?.maxWidth, [t]: e } },
                                            });
                                        },
                                    })
                                )
                            ),
                            (0, o.createElement)(
                                v.Flex,
                                { className: "alexa-flex-controls" },
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.__experimentalUnitControl, {
                                        label: (0, k.__)("Height", "alexa"),
                                        value: i?.height?.[t],
                                        onChange: (e) => {
                                            a({ style: { ...i, height: { ...i?.height, [t]: e } } });
                                        },
                                    })
                                ),
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.__experimentalUnitControl, {
                                        label: (0, k.__)("Max Height", "alexa"),
                                        value: i?.maxHeight?.[t],
                                        onChange: (e) => {
                                            a({
                                                style: { ...i, maxHeight: { ...i?.maxHeight, [t]: e } },
                                            });
                                        },
                                    })
                                )
                            )
                        )
                    );
                },
                V = (e) => {
                    const { attributes: t, setAttributes: n } = e,
                        [l, r] = (0, o.useState)("all");
                    return (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(
                            v.PanelRow,
                            null,
                            (0, o.createElement)(
                                C,
                                null,
                                (0, o.createElement)(
                                    o.Fragment,
                                    null,
                                    (0, k.__)("Display", "alexa"),
                                    (0, o.createElement)(v.Button, {
                                        isSmall: !0,
                                        isDestructive: !0,
                                        variant: "tertiary",
                                        onClick: () => {
                                            n({
                                                style: {
                                                    ...t?.style,
                                                    display: "",
                                                    order: "",
                                                    width: "",
                                                    maxWidth: "",
                                                },
                                            });
                                        },
                                        icon: w,
                                        iconSize: 16,
                                        "aria-label": (0, k.__)("Reset Display", "alexa"),
                                    })
                                )
                            ),
                            (0, o.createElement)(
                                v.ButtonGroup,
                                null,
                                (0, o.createElement)(
                                    v.Button,
                                    {
                                        isSmall: !0,
                                        variant: "all" === l ? "primary" : "secondary",
                                        onClick: () => r("all"),
                                    },
                                    (0, k.__)("All", "alexa")
                                ),
                                (0, o.createElement)(v.Button, {
                                    isSmall: !0,
                                    variant: "mobile" === l ? "primary" : "secondary",
                                    onClick: () => r("mobile"),
                                    icon: M,
                                }),
                                (0, o.createElement)(v.Button, {
                                    isSmall: !0,
                                    variant: "desktop" === l ? "primary" : "secondary",
                                    onClick: () => r("desktop"),
                                    icon: z,
                                })
                            )
                        ),
                        "all" === l && j(e, l),
                        "mobile" === l && j(e, l),
                        "desktop" === l && j(e, l)
                    );
                };
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/display-controls",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { attributes: l, isSelected: r, name: a } = t;
                        return ((e) => {
                            var t;
                            return null !== (t = R?.[e]?.alexaPosition) && void 0 !== t && t;
                        })(a)
                            ? (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(e, t),
                                r &&
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            initialOpen:
                                                null !== (n = l?.display) && void 0 !== n && n,
                                            title: (0, k.__)("Display", "alexa"),
                                        },
                                        (0, o.createElement)(V, t)
                                    )
                                )
                            )
                            : (0, o.createElement)(e, t);
                    },
                    "withDisplay"
                )
            );
            var F = window.wp.blockEditor;
            const T = [
                { value: "ease", label: (0, k.__)("Ease", "alexa") },
                { value: "ease-in", label: (0, k.__)("Ease In", "alexa") },
                {
                    value: "ease-out",
                    label: (0, k.__)("Ease Out", "alexa"),
                    isDefault: !0,
                },
                { value: "ease-in-out", label: (0, k.__)("Ease In Out", "alexa") },
                { value: "linear", label: (0, k.__)("Linear", "alexa") },
            ],
                N = [{ value: "", label: "" }];
            window?.alexa?.animations?.forEach((e) => {
                N.push({ value: e, label: x(e?.replace(/-/g, " ")) });
            });
            const I = [
                { value: "enter", label: (0, k.__)("Enter", "alexa"), isDefault: !0 },
                { value: "exit", label: (0, k.__)("Exit", "alexa") },
                { value: "infinite", label: (0, k.__)("Infinite", "alexa") },
                { value: "scroll", label: (0, k.__)("Scroll", "alexa") },
            ],
                P = (e) => {
                    var t;
                    return (
                        null !== (t = window?.alexa?.blockSupports?.[e]?.alexaAnimation) &&
                        void 0 !== t &&
                        t
                    );
                };
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/add-animation-attributes",
                (e, t) => (
                    P(t) &&
                    (e.attributes = { ...e.attributes, animation: { type: "object" } }),
                    e
                ),
                0
            );
            const O = (e) => {
                const t = {};
                var n, l, r, o, a, i, s;
                return (
                    e?.event &&
                    ((t["--animation-event"] =
                        null !== (n = e.event) && void 0 !== n ? n : "enter"),
                        "infinite" === e.event && (t.animationIterationCount = "infinite")),
                    e?.name &&
                    (t.animationName = null !== (l = e.name) && void 0 !== l ? l : ""),
                    e?.duration &&
                    (t.animationDuration =
                        (null !== (r = e.duration) && void 0 !== r ? r : "1") + "s"),
                    e?.delay &&
                    (t.animationDelay =
                        (null !== (o = e.delay) && void 0 !== o ? o : "0") + "s"),
                    e?.timingFunction &&
                    (t.animationTimingFunction =
                        null !== (a = e?.timingFunction) && void 0 !== a
                            ? a
                            : "ease-in-out"),
                    t?.animationIterationCount ||
                    (t.animationIterationCount =
                        null !== (i = e?.iterationCount) && void 0 !== i ? i : "1"),
                    e?.playState &&
                    (t.animationPlayState =
                        null !== (s = e?.playState) && void 0 !== s ? s : "running"),
                    t
                );
            };
            (0, a.addFilter)(
                "editor.BlockListBlock",
                "alexa/with-animation-props",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n, l;
                        const { attributes: r } = t,
                            a = null !== (n = r?.animation) && void 0 !== n ? n : {};
                        if (!a || !Object?.keys(a)?.length)
                            return (0, o.createElement)(e, t);
                        const i = O(a),
                            s = {
                                ...t?.wrapperProps,
                                className:
                                    null !== (l = t?.wrapperProps?.className) && void 0 !== l
                                        ? l
                                        : "",
                                style: { ...t?.wrapperProps?.style, ...i },
                            };
                        return (
                            (t.className = t?.className?.trim() + " has-animation"),
                            (s.className = s?.className?.trim() + " has-animation"),
                            (0, o.createElement)(e, g({}, t, { wrapperProps: s }))
                        );
                    },
                    "withAnimation"
                )
            ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/apply-animation-styles",
                    (e, t, n) => {
                        var l;
                        const r = null !== (l = n?.animation) && void 0 !== l ? l : {};
                        if (!r || !Object?.keys(r)?.length) return e;
                        e.className = e?.className?.trim() + " has-animation";
                        const o = O(r);
                        return { ...e, style: { ...e?.style, ...o } };
                    }
                );
            const B = (e) => {
                var t, n, l, r, a, i, s;
                let { attributes: c, setAttributes: u } = e;
                const m = null !== (t = c?.animation) && void 0 !== t ? t : {};
                return (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(
                        v.PanelRow,
                        null,
                        (0, o.createElement)(
                            C,
                            null,
                            (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(
                                    "span",
                                    null,
                                    (0, k.__)("Animation", "alexa")
                                ),
                                (0, o.createElement)(v.Button, {
                                    isSmall: !0,
                                    isDestructive: !0,
                                    variant: "tertiary",
                                    onClick: () => u({ animation: {} }),
                                    icon: w,
                                    iconSize: 16,
                                    "aria-label": (0, k.__)("Clear Animation", "alexa"),
                                })
                            )
                        ),
                        (0, o.createElement)(
                            v.Flex,
                            { justify: "flex-end" },
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(
                                    v.Button,
                                    {
                                        isSecondary: !0,
                                        isSmall: !0,
                                        icon:
                                            "running" === m?.playState
                                                ? S
                                                : (0, o.createElement)(
                                                    "svg",
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        version: "1.1",
                                                        fill: "currentColor",
                                                    },
                                                    (0, o.createElement)("polygon", {
                                                        points: "10,5 0,10 0,0",
                                                    })
                                                ),
                                        iconSize: 10,
                                        onClick: () => {
                                            u({
                                                animation: {
                                                    ...m,
                                                    playState:
                                                        "running" === m?.playState ? "paused" : "running",
                                                },
                                            });
                                        },
                                    },
                                    "running" === m?.playState
                                        ? (0, k.__)("Pause", "alexa")
                                        : (0, k.__)("Run", "alexa")
                                )
                            )
                        )
                    ),
                    (0, o.createElement)(
                        v.PanelRow,
                        { className: "alexa-animate-controls" },
                        (0, o.createElement)(
                            v.Flex,
                            { className: "alexa-flex-controls" },
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.SelectControl, {
                                        label: (0, k.__)("Effect", "alexa"),
                                        value: null !== (n = m?.name) && void 0 !== n ? n : "",
                                        options: N,
                                        onChange: (e) => {
                                            var t;
                                            u({
                                                animation: {
                                                    ...m,
                                                    name: e,
                                                    duration:
                                                        null !== (t = m?.duration) && void 0 !== t ? t : 1,
                                                },
                                            });
                                        },
                                    })
                                )
                            ),
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.SelectControl, {
                                        label: (0, k.__)("Easing", "alexa"),
                                        value:
                                            null !== (l = m?.timingFunction) && void 0 !== l ? l : "",
                                        options: T,
                                        onChange: (e) => {
                                            u({ animation: { ...m, timingFunction: e } });
                                        },
                                    })
                                )
                            ),
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.SelectControl, {
                                        label: (0, k.__)("Event", "alexa"),
                                        value:
                                            null !== (r = m?.event) && void 0 !== r ? r : "enter",
                                        options: I,
                                        onChange: (e) => {
                                            u({
                                                animation: {
                                                    ...m,
                                                    event: e,
                                                    iterationCount:
                                                        "infinite" === e
                                                            ? "-1"
                                                            : "-1" === m?.iterationCount
                                                                ? "1"
                                                                : m?.iterationCount,
                                                },
                                            });
                                        },
                                    })
                                )
                            )
                        ),
                        (0, o.createElement)(
                            v.Flex,
                            { className: "alexa-flex-controls" },
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(v.__experimentalNumberControl, {
                                    label: (0, k.__)("Duration", "alexa"),
                                    value: null !== (a = m?.duration) && void 0 !== a ? a : 1,
                                    onChange: (e) => {
                                        u({ animation: { ...m, duration: e } });
                                    },
                                    min: 0,
                                    max: 100,
                                    step: 0.1,
                                    shifStep: 10,
                                    allowReset: !0,
                                })
                            ),
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(v.__experimentalNumberControl, {
                                    label: (0, k.__)("Delay", "alexa"),
                                    value: null !== (i = m?.delay) && void 0 !== i ? i : 0,
                                    onChange: (e) => {
                                        u({ animation: { ...m, delay: e } });
                                    },
                                    min: 0,
                                    max: 100,
                                    step: 0.1,
                                    shifStep: 10,
                                    allowReset: !0,
                                })
                            ),
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                "infinite" !== m?.event &&
                                (0, o.createElement)(v.__experimentalNumberControl, {
                                    label: (0, k.__)("Repeat", "alexa"),
                                    value:
                                        "infinite" === m?.event
                                            ? -1
                                            : null !== (s = m?.iterationCount) && void 0 !== s
                                                ? s
                                                : 1,
                                    onChange: (e) => {
                                        u({ animation: { ...m, iterationCount: e } });
                                    },
                                    min: -1,
                                    max: 100,
                                    step: 1,
                                    allowReset: !0,
                                })
                            )
                        )
                    )
                );
            };
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/animation-controls",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { attributes: l, isSelected: r, name: a } = t;
                        return P(a)
                            ? (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(e, t),
                                r &&
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            initialOpen:
                                                null !== (n = l?.animation) && void 0 !== n && n,
                                            title: (0, k.__)("Animation", "alexa"),
                                        },
                                        (0, o.createElement)(B, t)
                                    )
                                )
                            )
                            : (0, o.createElement)(e, t);
                    },
                    "withAnimation"
                )
            );
            const H = (e) => {
                var t;
                return (
                    null !== (t = window?.alexa?.blockSupports?.[e]?.alexaFilter) &&
                    void 0 !== t &&
                    t
                );
            },
                L = {
                    blur: { unit: "px", min: 0, max: 500 },
                    brightness: { unit: "%", min: 0, max: 360 },
                    contrast: { unit: "%", min: 0, max: 200 },
                    grayscale: { unit: "%", min: 0, max: 100 },
                    hueRotate: { unit: "deg", min: -360, max: 360 },
                    invert: { unit: "%", min: 0, max: 100 },
                    opacity: { unit: "%", min: 0, max: 100 },
                    saturate: { unit: "", min: 0, max: 100, step: 0.1 },
                    sepia: { unit: "%", min: 0, max: 100 },
                };
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/add-css-transform-attributes",
                (e, t) => {
                    var n;
                    return H(t)
                        ? ((e.attributes = {
                            ...e.attributes,
                            style: {
                                ...(null !== (n = e?.attributes?.style) && void 0 !== n
                                    ? n
                                    : {}),
                                filter: { type: "string" },
                            },
                        }),
                            e)
                        : e;
                }
            );
            const G = (e) => {
                let t = "";
                return (
                    Object.keys(L).forEach((n) => {
                        Object.prototype.hasOwnProperty.call(e, n) &&
                            void 0 !== e[n] &&
                            (t += " " + _(n) + "(" + e[n] + L?.[n]?.unit + ")");
                    }),
                    t ? { [e?.backdrop ? "backdrop-filter" : "filter"]: t.trim() } : {}
                );
            };
            (0, a.addFilter)(
                "editor.BlockListBlock",
                "alexa/with-css-filter",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n, l;
                        const r =
                            null !== (n = t?.attributes?.style?.filter) && void 0 !== n
                                ? n
                                : {},
                            a = (0, o.createElement)(e, t);
                        if (0 === Object.getOwnPropertyNames(r).length) return a;
                        const i = G(r);
                        if (!Object.keys(i).length) return a;
                        t.style = {
                            ...(null !== (l = t.style) && void 0 !== l ? l : {}),
                            ...i,
                        };
                        const s = {
                            ...t.wrapperProps,
                            style: { ...t.wrapperProps?.style, ...i },
                        };
                        return (0, o.createElement)(e, g({}, t, { wrapperProps: s }));
                    },
                    "withCssFilter"
                )
            ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/apply-filter-styles",
                    (e, t, n) => {
                        var l;
                        const r = null !== (l = n?.style?.filter) && void 0 !== l ? l : {};
                        if (0 === Object.getOwnPropertyNames(r).length) return e;
                        const o = G(r);
                        return Object.keys(o).length
                            ? { ...e, style: { ...e?.style, ...o } }
                            : e;
                    }
                );
            const U = (e) => {
                const { attributes: t, setAttributes: n } = e,
                    { style: l } = t;
                return (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(
                        C,
                        null,
                        (0, o.createElement)(
                            o.Fragment,
                            null,
                            (0, k.__)("Filter", "alexa"),
                            (0, o.createElement)(v.Button, {
                                isSmall: !0,
                                isDestructive: !0,
                                variant: "tertiary",
                                onClick: () => {
                                    n({ style: { ...t?.style, filter: {} } });
                                },
                                icon: w,
                                iconSize: 16,
                                "aria-label": (0, k.__)("Clear Filters", "alexa"),
                            })
                        )
                    ),
                    (0, o.createElement)(
                        v.PanelRow,
                        { className: "alexa-filter-settings" },
                        Object.keys(L).map((e) => {
                            var t, r;
                            return (0, o.createElement)(v.__experimentalNumberControl, {
                                key: e,
                                label:
                                    "hueRotate" === e ? (0, k.__)("Hue Rotate", "alexa") : x(e),
                                value: l?.filter?.[e],
                                onChange: (t) => {
                                    var r;
                                    n({
                                        style: {
                                            ...l,
                                            filter: {
                                                ...(null !== (r = l?.filter) && void 0 !== r ? r : {}),
                                                [e]: t,
                                            },
                                        },
                                    });
                                },
                                min: null !== (t = L?.[e]?.min) && void 0 !== t ? t : 0,
                                max: L?.[e]?.max,
                                step: null !== (r = L?.[e]?.step) && void 0 !== r ? r : 1,
                                allowReset: !0,
                            });
                        })
                    ),
                    (0, o.createElement)(
                        v.PanelRow,
                        null,
                        (0, o.createElement)(v.ToggleControl, {
                            label: (0, k.__)("Use as backdrop filter", "alexa"),
                            checked: l?.filter?.backdrop,
                            onChange: (e) => {
                                n({ style: { ...l, filter: { ...l?.filter, backdrop: e } } });
                            },
                        })
                    )
                );
            };
            var W;
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/filter-controls",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { attributes: l, isSelected: r, name: a } = t;
                        return H(a)
                            ? (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(e, t),
                                r &&
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            initialOpen:
                                                null !== (n = l?.filter) && void 0 !== n && n,
                                            title: (0, k.__)("Filter", "alexa"),
                                        },
                                        (0, o.createElement)(U, t)
                                    )
                                )
                            )
                            : (0, o.createElement)(e, t);
                    },
                    "withFilter"
                )
            ),
                (0, a.addFilter)(
                    "editor.BlockEdit",
                    "alexa/with-client-id",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => (
                            "core/navigation-submenu" === t?.name &&
                            t.setAttributes({ clientId: t?.clientId }),
                            (0, o.createElement)(e, t)
                        ),
                        "withClientId"
                    )
                ),
                (0, a.addFilter)(
                    "editor.BlockListBlock",
                    "alexa/with-mega-menu",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => {
                            const { attributes: n, name: l, clientId: r } = t;
                            if ("core/navigation-submenu" !== l)
                                return (0, o.createElement)(e, t);
                            const a = {};
                            n?.backgroundColor &&
                                (a["--wp--custom--submenu--background"] =
                                    "var(--wp--preset--color--" + n?.backgroundColor + ")"),
                                n?.style?.color?.background &&
                                (a["--wp--custom--submenu--background"] =
                                    n?.style?.color?.background);
                            const i = { ...t?.wrapperProps };
                            return (
                                (i["data-id"] = r),
                                a && (i.style = { ...i?.style, ...a }),
                                (0, o.createElement)(e, g({}, t, { wrapperProps: i }))
                            );
                        },
                        "withMegaMenu"
                    )
                );
            const q =
                null !== (W = window?.alexa?.blockSupports) && void 0 !== W ? W : {};
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/with-negative-margin",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        if (
                            ((n = t?.name),
                                null !== (l = q?.[n]?.alexaNegativeMargin) && void 0 !== l && l)
                        ) {
                            const e = document.querySelector(
                                '.components-input-control__input[min="0"]'
                            );
                            e && e.setAttribute("min", "-999");
                        }
                        var n, l;
                        return (0, o.createElement)(e, t);
                    },
                    "withMinHeightSettings"
                )
            );
            const $ = (e) => {
                var t;
                return (
                    null !== (t = window?.alexa?.blockSupports?.[e]?.alexaOnclick) &&
                    void 0 !== t &&
                    t
                );
            };
            var X, Y;
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/add-onclick-attribute",
                (e, t) =>
                    $(t)
                        ? ((e.attributes = {
                            ...e.attributes,
                            onclick: { type: "string" },
                        }),
                            e)
                        : e,
                0
            ),
                (0, a.addFilter)(
                    "editor.BlockEdit",
                    "alexa/with-onclick-attribute",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => {
                            const { attributes: n, setAttributes: l, name: r } = t;
                            return $(r) &&
                                (0, p.useSelect)((e) => {
                                    const t = e("core")?.getCurrentUser(),
                                        n = e("core")?.getUser(t?.id);
                                    return n?.roles;
                                }, [])?.includes("administrator")
                                ? (0, o.createElement)(
                                    o.Fragment,
                                    null,
                                    (0, o.createElement)(e, t),
                                    (0, o.createElement)(
                                        F.InspectorAdvancedControls,
                                        null,
                                        (0, o.createElement)(v.TextareaControl, {
                                            label: (0, k.__)("On-click event", "alexa"),
                                            help: (0, k.__)(
                                                "Enter a JavaScript function to be called when the button is clicked.",
                                                "alexa"
                                            ),
                                            rows: 4,
                                            value: n?.onclick?.replace('"', "'"),
                                            onChange: (e) => l({ onclick: e?.replace('"', "'") }),
                                            style: {
                                                fontFamily:
                                                    "ui-monospace,Menlo,Monaco,Cascadia Code,Segoe UI Mono,Roboto Mono,Oxygen Mono,Ubuntu Monospace,Source Code Pro,Fira Code,Droid Sans Mono,DejaVu Sans Mono,Courier New,monospace",
                                                fontSize: "14px",
                                                tabSize: "1em",
                                                lineHeight: "1.5",
                                            },
                                        })
                                    )
                                )
                                : (0, o.createElement)(e, t);
                        },
                        "onclickAttribute"
                    ),
                    99
                );
            const Z =
                null !== (X = window?.alexa?.blockSupports) && void 0 !== X ? X : {},
                K = (e) => {
                    var t;
                    return null !== (t = Z?.[e]?.alexaPosition) && void 0 !== t && t;
                },
                J =
                    null !== (Y = window?.alexa?.positionOptions) && void 0 !== Y
                        ? Y
                        : {};
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/add-position-attributes",
                (e, t) => {
                    if (K(t)) {
                        var n;
                        const t = {};
                        Object.keys(J).forEach((e) => {
                            t[e] = { type: "object" };
                        }),
                            (e.attributes = {
                                ...e.attributes,
                                style: {
                                    ...t,
                                    ...(null !== (n = e?.attributes?.style) && void 0 !== n
                                        ? n
                                        : {}),
                                },
                            });
                    }
                    return e;
                },
                0
            );
            const Q = (e) => {
                var t;
                const n = [],
                    l = null !== (t = e?.style) && void 0 !== t ? t : {};
                return (
                    Object.keys(J).forEach((e) => {
                        const t = _(e);
                        var r, o, a;
                        J?.[e]?.options
                            ? (null !== (r = l?.[e]?.all) &&
                                void 0 !== r &&
                                r &&
                                n.push(`has-${t}-${_(l?.[e]?.all)}`),
                                null !== (o = l?.[e]?.mobile) &&
                                void 0 !== o &&
                                o &&
                                n.push(`has-${t}-${_(l?.[e]?.mobile)}-mobile`),
                                null !== (a = l?.[e]?.desktop) &&
                                void 0 !== a &&
                                a &&
                                n.push(`has-${t}-${_(l?.[e]?.desktop)}-desktop`))
                            : l?.[e] && n.push(`has-${t}`);
                    }),
                    n
                );
            },
                ee = (e) => {
                    var t;
                    const n = {},
                        l = null !== (t = e?.style) && void 0 !== t ? t : {};
                    return (
                        Object.keys(J).forEach((e) => {
                            var t, r, o;
                            if (J?.[e]?.options) return;
                            const a = _(e);
                            null !== (t = l?.[e]?.all) &&
                                void 0 !== t &&
                                t &&
                                (n[`--${a}`] = l?.[e]?.all),
                                null !== (r = l?.[e]?.mobile) &&
                                void 0 !== r &&
                                r &&
                                (n[`--${a}-mobile`] = l?.[e]?.mobile),
                                null !== (o = l?.[e]?.desktop) &&
                                void 0 !== o &&
                                o &&
                                (n[`--${a}-desktop`] = l?.[e]?.desktop);
                        }),
                        n
                    );
                };
            (0, a.addFilter)(
                "editor.BlockListBlock",
                "alexa/with-position-style",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { name: l, attributes: r } = t;
                        if (!K(l)) return (0, o.createElement)(e, t);
                        const a = Q(r),
                            i = ee(r),
                            s = null !== (n = t?.wrapperProps) && void 0 !== n ? n : {};
                        return (
                            (t.style = { ...t?.style, ...i }),
                            s && (s.style = { ...s?.style, ...i }),
                            a.forEach((e) => {
                                t?.className?.includes(e) ||
                                    (t.className = t?.className + " " + e);
                            }),
                            (t.wrapperProps = s),
                            (0, o.createElement)(e, t)
                        );
                    },
                    "withPositionStyle"
                )
            ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/save-position-style",
                    (e) => {
                        const { name: t, attributes: n } = e;
                        if (!Z?.[t]?.alexaPosition) return e;
                        const l = Q(n),
                            r = ee(n);
                        return (
                            l.forEach((t) => {
                                e?.className?.includes(t) ||
                                    (e.className = e?.className + " " + t);
                            }),
                            (e.style = { ...e?.style, ...r }),
                            e
                        );
                    },
                    11
                );
            const te = (e, t) => {
                var n, l, r, a, i, s, c, u;
                const { attributes: m, setAttributes: p } = e,
                    d = null !== (n = m?.style) && void 0 !== n ? n : {},
                    f = (e) => {
                        const n = {};
                        Object.keys(e).forEach((l) => {
                            n[l] = { ...d?.[l], [t]: e[l] };
                        }),
                            p({ style: { ...d, ...n } });
                    };
                return (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(
                        v.PanelRow,
                        null,
                        (0, o.createElement)(
                            v.Flex,
                            { className: "alexa-flex-controls" },
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(v.SelectControl, {
                                    label: (0, k.__)("Position", "alexa"),
                                    value:
                                        null !== (l = d?.position?.[t]) && void 0 !== l ? l : "",
                                    options: J?.position?.options,
                                    onChange: (e) => {
                                        f({ position: e });
                                    },
                                })
                            ),
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(v.__experimentalNumberControl, {
                                    label: J?.zIndex?.label,
                                    value: d?.zIndex?.[t],
                                    onChange: (e) => {
                                        f({ zIndex: e });
                                    },
                                    min: -100,
                                    max: 100,
                                    step: 1,
                                    allowReset: !0,
                                })
                            )
                        )
                    ),
                    d?.position &&
                    (0, o.createElement)(
                        v.PanelRow,
                        null,
                        (0, o.createElement)(
                            v.Flex,
                            { className: "alexa-flex-controls" },
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(v.SelectControl, {
                                    label: (0, k.__)("Overflow", "alexa"),
                                    value:
                                        null !== (r = d?.overflow?.[t]) && void 0 !== r
                                            ? r
                                            : "",
                                    options: J?.overflow?.options,
                                    onChange: (e) => {
                                        f({ overflow: e });
                                    },
                                })
                            ),
                            (0, o.createElement)(
                                v.FlexItem,
                                null,
                                (0, o.createElement)(v.SelectControl, {
                                    label: (0, k.__)("Pointer Events", "alexa"),
                                    value:
                                        null !== (a = d?.pointerEvents?.[t]) && void 0 !== a
                                            ? a
                                            : "",
                                    options: J?.pointerEvents?.options,
                                    onChange: (e) => {
                                        f({ pointerEvents: e });
                                    },
                                })
                            )
                        )
                    ),
                    (0, o.createElement)(
                        v.PanelRow,
                        null,
                        (0, o.createElement)(v.__experimentalBoxControl, {
                            className: "alexa-box-control",
                            label: (0, k.__)("Margin", "alexa"),
                            values: {
                                top: null !== (i = d?.top?.[t]) && void 0 !== i ? i : "",
                                right: null !== (s = d?.right?.[t]) && void 0 !== s ? s : "",
                                bottom:
                                    null !== (c = d?.bottom?.[t]) && void 0 !== c ? c : "",
                                left: null !== (u = d?.left?.[t]) && void 0 !== u ? u : "",
                            },
                            onChange: (e) => {
                                var t, n, l, r;
                                f({
                                    top: null !== (t = e?.top) && void 0 !== t ? t : "",
                                    right: null !== (n = e?.right) && void 0 !== n ? n : "",
                                    bottom: null !== (l = e?.bottom) && void 0 !== l ? l : "",
                                    left: null !== (r = e?.left) && void 0 !== r ? r : "",
                                });
                            },
                            inputProps: { min: -999 },
                        })
                    )
                );
            },
                ne = (e) => {
                    const { attributes: t, setAttributes: n } = e,
                        [l, r] = (0, o.useState)("all");
                    return (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(
                            v.PanelRow,
                            null,
                            (0, o.createElement)(
                                C,
                                null,
                                (0, o.createElement)(
                                    o.Fragment,
                                    null,
                                    (0, o.createElement)(
                                        "span",
                                        null,
                                        (0, k.__)("Position", "alexa")
                                    ),
                                    (0, o.createElement)(v.Button, {
                                        isSmall: !0,
                                        isDestructive: !0,
                                        variant: "tertiary",
                                        onClick: () => {
                                            n({
                                                style: {
                                                    ...t?.style,
                                                    position: "",
                                                    zIndex: "",
                                                    top: "",
                                                    right: "",
                                                    bottom: "",
                                                    left: "",
                                                },
                                            });
                                        },
                                        icon: w,
                                        iconSize: 16,
                                        "aria-label": (0, k.__)("Reset Position", "alexa"),
                                    })
                                )
                            ),
                            (0, o.createElement)(
                                v.ButtonGroup,
                                null,
                                (0, o.createElement)(
                                    v.Button,
                                    {
                                        isSmall: !0,
                                        variant: "all" === l ? "primary" : "tertiary",
                                        onClick: () => r("all"),
                                    },
                                    (0, k.__)("All", "alexa")
                                ),
                                (0, o.createElement)(v.Button, {
                                    isSmall: !0,
                                    variant: "mobile" === l ? "primary" : "tertiary",
                                    onClick: () => r("mobile"),
                                    icon: M,
                                }),
                                (0, o.createElement)(v.Button, {
                                    isSmall: !0,
                                    variant: "desktop" === l ? "primary" : "tertiary",
                                    onClick: () => r("desktop"),
                                    icon: z,
                                })
                            )
                        ),
                        "all" === l && te(e, l),
                        "mobile" === l && te(e, l),
                        "desktop" === l && te(e, l)
                    );
                };
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/position-controls",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { attributes: l, isSelected: r, name: a } = t;
                        return K(a)
                            ? (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(e, t),
                                r &&
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            initialOpen:
                                                null !== (n = l?.position) && void 0 !== n && n,
                                            title: (0, k.__)("Position", "alexa"),
                                        },
                                        (0, o.createElement)(ne, t)
                                    )
                                )
                            )
                            : (0, o.createElement)(e, t);
                    },
                    "withPosition"
                )
            ),
                (0, a.addFilter)(
                    "editor.BlockListBlock",
                    "alexa/with-block-gap",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => {
                            var n;
                            if ("core/query" !== t?.name) return (0, o.createElement)(e, t);
                            if (!t?.attributes?.style?.spacing?.blockGap)
                                return (0, o.createElement)(e, t);
                            const l = null !== (n = t.wrapperProps) && void 0 !== n ? n : {};
                            return (
                                (l.style = {
                                    ...l.style,
                                    "--wp--style--block-gap": t.attributes.style.spacing.blockGap,
                                }),
                                (0, o.createElement)(e, g({}, t, { wrapperProps: l }))
                            );
                        },
                        "withBlockGap"
                    )
                ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/apply-block-gap",
                    (e, t, n) => (
                        "core/query" === t &&
                        n?.style?.spacing?.blockGap &&
                        (e.style = {
                            ...e.style,
                            "--wp--style--block-gap": n.style.spacing.blockGap,
                        }),
                        e
                    )
                );
            const le = (e) => {
                var t;
                return (
                    null !== (t = window?.alexa?.blockSupports?.[e]?.alexaBoxShadow) &&
                    void 0 !== t &&
                    t
                );
            };
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/add-box-shadow-attributes",
                (e, t) => {
                    var n;
                    return (
                        le(t) &&
                        (e.attributes = {
                            ...e.attributes,
                            style: {
                                ...(null !== (n = e?.attributes?.style) && void 0 !== n
                                    ? n
                                    : {}),
                                boxShadow: { type: "object" },
                            },
                        }),
                        e
                    );
                },
                0
            );
            const re = (e) => {
                var t;
                const n = null !== (t = e?.style?.boxShadow) && void 0 !== t ? t : {},
                    l = {},
                    r = {
                        inset: "",
                        x: "px",
                        y: "px",
                        blur: "px",
                        spread: "px",
                        color: "",
                    };
                return (
                    Object.keys(r).map(
                        (e) => (
                            (n?.[e] || "0" === n?.[e]?.toString()) &&
                            (l["--wp--custom--box-shadow--" + e] = n?.[e] + r?.[e]),
                            (n?.hover?.[e] || "0" === n?.hover?.[e]?.toString()) &&
                            (l["--wp--custom--box-shadow--hover--" + e] =
                                n?.hover?.[e] + r?.[e]),
                            !0
                        )
                    ),
                    l
                );
            },
                oe = (e, t) => {
                    var n;
                    const { attributes: l, setAttributes: r } = e,
                        { style: a } = l,
                        i = null !== (n = a?.boxShadow) && void 0 !== n ? n : {},
                        s = (e) => {
                            let n;
                            (n =
                                "default" === t ? { ...e } : { hover: { ...i?.hover, ...e } }),
                                r({ style: { ...a, boxShadow: { ...i, ...n } } });
                        };
                    return (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(
                            v.PanelRow,
                            null,
                            (0, o.createElement)(
                                v.Flex,
                                null,
                                ["x", "y", "blur", "spread"].map((e) =>
                                    (0, o.createElement)(
                                        v.FlexItem,
                                        { key: e },
                                        (0, o.createElement)(v.__experimentalNumberControl, {
                                            label: x(e),
                                            value: "default" === t ? i[e] : i?.hover?.[e],
                                            step: 1,
                                            shiftStep: 10,
                                            onChange: (t) => {
                                                s({ [e]: t });
                                            },
                                        })
                                    )
                                )
                            )
                        ),
                        (0, o.createElement)("br", null),
                        (0, o.createElement)(
                            v.PanelRow,
                            null,
                            (0, o.createElement)(
                                v.Flex,
                                { className: "alexa-flex-controls" },
                                (0, o.createElement)(
                                    v.FlexItem,
                                    { style: { flex: 1.5 } },
                                    (0, o.createElement)(
                                        F.__experimentalPanelColorGradientSettings,
                                        {
                                            title: (0, k.__)("Color", "alexa"),
                                            showTitle: !1,
                                            enableAlpha: !0,
                                            settings: [
                                                {
                                                    enableAlpha: !0,
                                                    colorValue:
                                                        "default" === t ? i?.color : i?.[t]?.color,
                                                    label:
                                                        (0, k.__)("Color ", "alexa") +
                                                        ("hover" === t ? (0, k.__)(" Hover", "alexa") : ""),
                                                    onColorChange: (e) => {
                                                        s({ color: e });
                                                    },
                                                },
                                            ],
                                        }
                                    )
                                ),
                                (0, o.createElement)(
                                    v.FlexItem,
                                    null,
                                    (0, o.createElement)(v.ToggleControl, {
                                        label: (0, k.__)("Inset", "alexa"),
                                        checked: "default" === t ? i?.inset : i?.[t]?.inset,
                                        onChange: (e) => {
                                            s({ inset: e ? "inset" : "" });
                                        },
                                    })
                                )
                            )
                        )
                    );
                };
            (0, a.addFilter)(
                "editor.BlockListBlock",
                "alexa/edit-box-shadow-styles",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        const { attributes: n, name: l } = t;
                        if (!le(l)) return (0, o.createElement)(e, t);
                        const r = re(n);
                        if (!Object.keys(r).length) return (0, o.createElement)(e, t);
                        const a = { ...t.wrapperProps };
                        return (
                            (t.className += " has-box-shadow"),
                            (a.className += " has-box-shadow"),
                            (t.style = { ...t.style, ...r }),
                            (a.style = { ...a.style, ...r }),
                            (0, o.createElement)(e, g({}, t, { wrapperProps: a }))
                        );
                    },
                    "withBoxShadow"
                )
            ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/save-box-shadow-styles",
                    (e, t, n) => {
                        const { name: l } = t;
                        if (!le(l)) return e;
                        const r = re(n);
                        return Object.keys(r).length
                            ? ((e.className += " has-box-shadow"),
                                (e.style = { ...e.style, ...r }),
                                e)
                            : e;
                    }
                );
            const ae = (e) => {
                const { attributes: t, setAttributes: n } = e,
                    [l, r] = (0, o.useState)("default");
                return (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(
                        v.PanelRow,
                        null,
                        (0, o.createElement)(
                            C,
                            null,
                            (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, k.__)("Shadow", "alexa"),
                                (0, o.createElement)(v.Button, {
                                    isSmall: !0,
                                    isDestructive: !0,
                                    variant: "tertiary",
                                    onClick: () => {
                                        n({ style: { ...t?.style, boxShadow: "" } });
                                    },
                                    icon: w,
                                    iconSize: 16,
                                    "aria-label": (0, k.__)("Clear Shadow", "alexa"),
                                })
                            )
                        ),
                        (0, o.createElement)(
                            v.ButtonGroup,
                            null,
                            (0, o.createElement)(
                                v.Button,
                                {
                                    isSmall: !0,
                                    variant: "default" === l ? "primary" : "secondary",
                                    onClick: () => r("default"),
                                },
                                (0, k.__)("Default", "alexa")
                            ),
                            (0, o.createElement)(
                                v.Button,
                                {
                                    isSmall: !0,
                                    variant: "hover" === l ? "primary" : "secondary",
                                    onClick: () => r("hover"),
                                },
                                (0, k.__)("Hover", "alexa")
                            )
                        )
                    ),
                    "default" === l && oe(e, l),
                    "hover" === l && oe(e, l)
                );
            };
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/shadow-controls",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { attributes: l, isSelected: r, name: a } = t;
                        return le(a)
                            ? (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(e, t),
                                r &&
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            initialOpen:
                                                null !== (n = l?.shadow) && void 0 !== n && n,
                                            title: (0, k.__)("Shadow", "alexa"),
                                        },
                                        (0, o.createElement)(ae, t)
                                    )
                                )
                            )
                            : (0, o.createElement)(e, t);
                    },
                    "withShadow"
                )
            );
            const ie = (e) => {
                var t;
                return (
                    null !== (t = window?.alexa?.blockSupports?.[e]?.alexaTransform) &&
                    void 0 !== t &&
                    t
                );
            },
                se = {
                    rotate: "deg",
                    rotateX: "deg",
                    rotateY: "deg",
                    scale: "",
                    scaleX: "",
                    scaleY: "",
                    skew: "deg",
                    skewX: "deg",
                    skewY: "deg",
                    translateX: "",
                    translateY: "",
                    translateZ: "",
                };
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/add-css-transform-attributes",
                (e, t) => {
                    var n;
                    return ie(t)
                        ? ((e.attributes = {
                            ...e.attributes,
                            style: {
                                ...(null !== (n = e?.attributes?.style) && void 0 !== n
                                    ? n
                                    : {}),
                                transform: { type: "string" },
                            },
                        }),
                            e)
                        : e;
                }
            );
            const ce = (e) => {
                let t = "";
                return (
                    Object.keys(se).forEach((n) => {
                        if (e?.[n]) {
                            const l = e[n];
                            t += ` ${n}(${l}${se[n]})`;
                        }
                    }),
                    t ? { transform: t.trim() } : {}
                );
            };
            (0, a.addFilter)(
                "editor.BlockListBlock",
                "alexa/with-css-transform",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { attributes: l, name: r } = t,
                            a = (0, o.createElement)(e, t);
                        if (!ie(r)) return a;
                        const { style: i } = l,
                            s = null !== (n = i?.transform) && void 0 !== n ? n : {};
                        if (!s) return a;
                        const c = ce(s);
                        if (!Object.keys(c).length) return a;
                        t.style = { ...t?.style, ...c };
                        const u = {
                            ...t.wrapperProps,
                            style: { ...t.wrapperProps?.style, ...c },
                        };
                        return (0, o.createElement)(e, g({}, t, { wrapperProps: u }));
                    },
                    "withCssTransform"
                )
            ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/apply-css-transform-styles",
                    (e, t, n) => {
                        var l;
                        const { name: r } = t;
                        if (!ie(r)) return e;
                        const { style: o } = n,
                            a = null !== (l = o?.transform) && void 0 !== l ? l : {};
                        if (!a) return e;
                        const i = ce(a);
                        return Object.keys(i).length
                            ? { ...e, style: { ...e?.style, ...i } }
                            : e;
                    }
                );
            const ue = (e) => {
                var t;
                const { attributes: n, setAttributes: l } = e,
                    { style: r } = n,
                    a = null !== (t = r?.transform) && void 0 !== t ? t : {};
                return (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(
                        v.PanelRow,
                        null,
                        (0, o.createElement)(
                            C,
                            null,
                            (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, k.__)("Transform", "alexa"),
                                (0, o.createElement)(v.Button, {
                                    isSmall: !0,
                                    isDestructive: !0,
                                    variant: "tertiary",
                                    onClick: () => {
                                        l({ style: { ...n?.style, transform: "" } });
                                    },
                                    icon: w,
                                    iconSize: 16,
                                    "aria-label": (0, k.__)("Clear Transforms", "alexa"),
                                })
                            )
                        )
                    ),
                    (0, o.createElement)(
                        v.Flex,
                        { className: "alexa-flex-controls" },
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Rotate", "alexa"),
                                value: a?.rotate,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, rotate: e } } });
                                },
                                min: -360,
                                max: 360,
                                step: 1,
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Rotate X", "alexa"),
                                value: a?.rotateX,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, rotateX: e } } });
                                },
                                min: -360,
                                max: 360,
                                step: 1,
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Rotate Y", "alexa"),
                                value: a?.rotateY,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, rotateY: e } } });
                                },
                                min: -360,
                                max: 360,
                                step: 1,
                            })
                        )
                    ),
                    (0, o.createElement)(
                        v.Flex,
                        { className: "alexa-flex-controls" },
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Scale", "alexa"),
                                value: a?.scale,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, scale: e } } });
                                },
                                min: 0,
                                max: 10,
                                step: 0.1,
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Scale X", "alexa"),
                                value: a?.scaleX,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, scaleX: e } } });
                                },
                                min: 0,
                                max: 10,
                                step: 0.1,
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Scale Y", "alexa"),
                                value: a?.scaleY,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, scaleY: e } } });
                                },
                                min: 0,
                                max: 10,
                                step: 0.1,
                            })
                        )
                    ),
                    (0, o.createElement)(
                        v.Flex,
                        { className: "alexa-flex-controls" },
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Skew", "alexa"),
                                value: a?.skew,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, skew: e } } });
                                },
                                min: -360,
                                max: 360,
                                step: 1,
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Skew X", "alexa"),
                                value: a?.skewX,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, skewX: e } } });
                                },
                                min: -360,
                                max: 360,
                                step: 1,
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalNumberControl, {
                                label: (0, k.__)("Skew Y", "alexa"),
                                value: a?.skewY,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, skewY: e } } });
                                },
                                min: -360,
                                max: 360,
                                step: 1,
                            })
                        )
                    ),
                    (0, o.createElement)(
                        v.Flex,
                        { className: "alexa-flex-controls" },
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalUnitControl, {
                                label: (0, k.__)("Translate X", "alexa"),
                                value: a?.translateX,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, translateX: e } } });
                                },
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalUnitControl, {
                                label: (0, k.__)("Translate Y", "alexa"),
                                value: a?.translateY,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, translateY: e } } });
                                },
                            })
                        ),
                        (0, o.createElement)(
                            v.FlexItem,
                            null,
                            (0, o.createElement)(v.__experimentalUnitControl, {
                                label: (0, k.__)("Translate Z", "alexa"),
                                value: a?.translateZ,
                                onChange: (e) => {
                                    l({ style: { ...r, transform: { ...a, translateZ: e } } });
                                },
                            })
                        )
                    ),
                    (0, o.createElement)("br", null)
                );
            };
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/transform-controls",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n;
                        const { attributes: l, isSelected: r, name: a } = t;
                        return ie(a)
                            ? (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(e, t),
                                r &&
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            initialOpen:
                                                null !== (n = l?.transform) && void 0 !== n && n,
                                            title: (0, k.__)("Transform", "alexa"),
                                        },
                                        (0, o.createElement)(ue, t)
                                    )
                                )
                            )
                            : (0, o.createElement)(e, t);
                    },
                    "withTransform"
                )
            );
            var me = (0, o.createElement)(
                E.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(E.Path, {
                    d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z",
                })
            );
            (0, l.registerBlockVariation)("core/list", {
                name: "accordion",
                title: (0, k.__)("Accordion", "alexa"),
                description: (0, k.__)("Add a collapsible accordion list.", "alexa"),
                category: window?.alexa?.isPlugin ? "alexa" : "text",
                icon: me,
                attributes: { className: "is-style-accordion" },
                isDefault: !1,
                isActive: (e, t) => e && e?.className?.includes(t.className),
            });
            var pe = (0, o.createElement)(
                E.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(E.Path, {
                    d: "M15.1 4.8l-3-2.5V4c-4.4 0-8 3.6-8 8 0 3.7 2.5 6.9 6 7.7.3.1.6.1 1 .2l.2-1.5c-.4 0-.7-.1-1.1-.2l-.1.2v-.2c-2.6-.8-4.5-3.3-4.5-6.2 0-3.6 2.9-6.5 6.5-6.5v1.8l3-2.5zM20 11c-.2-1.4-.7-2.7-1.6-3.8l-1.2.8c.7.9 1.1 2 1.3 3.1L20 11zm-1.5 1.8c-.1.5-.2 1.1-.4 1.6s-.5 1-.8 1.5l1.2.9c.4-.5.8-1.1 1-1.8s.5-1.3.5-2l-1.5-.2zm-5.6 5.6l.2 1.5c1.4-.2 2.7-.7 3.8-1.6l-.9-1.1c-.9.7-2 1.1-3.1 1.2z",
                })
            );
            const de = {
                content: (0, k.__)("Curved text. Curved text. Curved text.", "alexa"),
                containerSize: "160",
                pathSize: "120",
            },
                fe = {
                    name: "curved-text",
                    title: (0, k.__)("Curved Text", "alexa"),
                    icon: pe,
                    isDefault: !1,
                    category: window?.alexa?.isPlugin ? "alexa" : "text",
                    scope: ["inserter", "transform", "block"],
                    description: (0, k.__)(
                        "Insert curved text around circular SVG path.",
                        "alexa"
                    ),
                    attributes: { className: "is-style-curved-text" },
                    isActive: (e) => e?.className?.includes("is-style-curved-text"),
                };
            t()(() => {
                (0, l.registerBlockVariation)("core/paragraph", fe);
            }),
                (0, a.addFilter)(
                    "blocks.registerBlockType",
                    "alexa/curved-text-attributes",
                    (e, t) => (
                        "core/paragraph" === t &&
                        (e = {
                            ...e,
                            attributes: {
                                ...e?.attributes,
                                curvedText: { type: "object" },
                            },
                        }),
                        e
                    )
                );
            const ye = function () {
                var e, t, n;
                let l =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const { curvedText: r = de } = l,
                    a = null !== (e = r?.content) && void 0 !== e ? e : de.content,
                    i =
                        null !== (t = r?.containerSize) && void 0 !== t
                            ? t
                            : de.containerSize,
                    s = null !== (n = r?.pathSize) && void 0 !== n ? n : de.pathSize,
                    c = parseInt(i) / 2,
                    u = parseInt(s) / 2,
                    m = {
                        viewBox: `0 0 ${i} ${i}`,
                        xmlns: "http://www.w3.org/2000/svg",
                        enableBackground: `new 0 0 ${i} ${i}`,
                        xmlSpace: "preserve",
                        width: i,
                        height: i,
                        contentEditable: !1,
                        x: 0,
                        y: 0,
                    },
                    p = Date.now() + Math.random(),
                    d = {
                        id: "circle-" + p,
                        d: `M ${c}, ${c} m -${u}, 0 a ${u},${u} 0 0,1 ${s},0 a ${u},${u} 0 0,1 -${s},0`,
                        fill: "transparent",
                    };
                return (0, o.createElement)(
                    "svg",
                    m,
                    (0, o.createElement)("path", d, " "),
                    (0, o.createElement)(
                        "text",
                        { fill: "currentColor" },
                        (0, o.createElement)("textPath", { xlinkHref: "#circle-" + p }, a)
                    )
                );
            };
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/with-curved-text-css",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n, l, r;
                        const { attributes: a, setAttributes: i } = t;
                        if (
                            !((e) =>
                                !(!e?.className || "string" != typeof e?.className) &&
                                e?.className?.includes("is-style-curved-text"))(a)
                        )
                            return (0, o.createElement)(e, t);
                        const s = document
                            .getElementsByClassName(
                                "edit-site-visual-editor__editor-canvas"
                            )
                            ?.item(0),
                            c = document.getElementsByName("editor-canvas")?.item(0);
                        let u;
                        if (
                            ((u = s ? s.contentDocument : c ? c.contentDocument : document),
                                !u)
                        )
                            return (0, o.createElement)(e, t);
                        const m = u?.getElementById("block-" + t?.clientId);
                        m &&
                            (m.innerHTML = (0, o.renderToString)(
                                ye({ ...a, clientId: t.clientId })
                            ));
                        const { curvedText: p = de } = a,
                            d = (e) => {
                                var n;
                                const l = {
                                    ...e,
                                    svgString: (0, o.renderToString)(
                                        (0, o.createElement)(
                                            ye,
                                            g({}, a, e, {
                                                clientId:
                                                    null !== (n = t.clientId) && void 0 !== n ? n : "1",
                                            })
                                        )
                                    ),
                                };
                                i({ curvedText: { ...p, ...l } });
                            };
                        return (0, o.createElement)(
                            o.Fragment,
                            null,
                            (0, o.createElement)(e, t),
                            (0, o.createElement)(
                                F.InspectorControls,
                                null,
                                (0, o.createElement)(
                                    v.PanelBody,
                                    {
                                        className: "alexa-controls",
                                        title: (0, k.__)("Curved Text", "alexa"),
                                    },
                                    (0, o.createElement)(v.TextareaControl, {
                                        label: (0, k.__)("Content", "alexa"),
                                        value:
                                            null !== (n = p?.content) && void 0 !== n
                                                ? n
                                                : de.content,
                                        onChange: (e) => {
                                            d({ content: e });
                                        },
                                    }),
                                    (0, o.createElement)("p", null, (0, k.__)("Size", "alexa")),
                                    (0, o.createElement)(
                                        v.PanelRow,
                                        null,
                                        (0, o.createElement)("br", null),
                                        (0, o.createElement)(
                                            v.Flex,
                                            null,
                                            (0, o.createElement)(
                                                v.FlexItem,
                                                { style: { width: "50%" } },
                                                (0, o.createElement)(v.__experimentalNumberControl, {
                                                    label: (0, k.__)("Container", "alexa"),
                                                    value:
                                                        null !== (l = p?.containerSize) && void 0 !== l
                                                            ? l
                                                            : de.containerSize,
                                                    onChange: (e) => {
                                                        d({ containerSize: e });
                                                    },
                                                })
                                            ),
                                            (0, o.createElement)(
                                                v.FlexBlock,
                                                null,
                                                (0, o.createElement)(v.__experimentalNumberControl, {
                                                    label: (0, k.__)("Path", "alexa"),
                                                    value:
                                                        null !== (r = p?.pathSize) && void 0 !== r
                                                            ? r
                                                            : de.pathSize,
                                                    onChange: (e) => {
                                                        d({ pathSize: e });
                                                    },
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    },
                    "withCurvedTextSettings"
                ),
                1
            );
            var he = (0, o.createElement)(
                E.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(E.Path, {
                    d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z",
                })
            );
            const be = {
                start: "0",
                end: "100",
                duration: "2",
                delay: "0",
                prefix: "",
                suffix: "",
            },
                ge = {
                    name: "counter",
                    title: (0, k.__)("Counter", "alexa"),
                    keywords: ["counter", "number", "count", "stats"],
                    icon: he,
                    isDefault: !1,
                    category: window?.alexa?.isPlugin ? "alexa" : "text",
                    scope: ["inserter", "transform", "block"],
                    description: (0, k.__)("Insert counter animation.", "alexa"),
                    attributes: { className: "is-style-counter" },
                    isActive: (e) => e && e?.className?.includes("is-style-counter"),
                };
            t()(() => {
                (0, l.registerBlockVariation)("core/paragraph", ge);
            }),
                (0, a.addFilter)(
                    "editor.BlockEdit",
                    "alexa/with-counter-controls",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => {
                            const { attributes: n, setAttributes: l } = t,
                                r = (0, o.createElement)(e, t);
                            if (!n?.className?.includes("is-style-counter")) return r;
                            const { style: a } = n;
                            let i = be;
                            if (
                                (a?.counter
                                    ? (i = a.counter)
                                    : l({ style: { ...a, counter: be } }),
                                    i?.prefix || i?.end || i?.suffix)
                            ) {
                                let e = i?.end;
                                "string" == typeof i?.prefix && (e = i?.prefix + e),
                                    "string" == typeof i?.suffix && (e += i?.suffix),
                                    l({ content: e });
                            }
                            return (0, o.createElement)(
                                o.Fragment,
                                null,
                                r,
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            title: (0, k.__)("Counter Settings", "alexa"),
                                            initialOpen: !0,
                                            className: "alexa-counter-settings",
                                        },
                                        (0, o.createElement)(
                                            v.PanelRow,
                                            null,
                                            (0, o.createElement)(
                                                v.Flex,
                                                { className: "alexa-flex-controls" },
                                                (0, o.createElement)(
                                                    v.FlexItem,
                                                    null,
                                                    (0, o.createElement)(v.__experimentalNumberControl, {
                                                        label: (0, k.__)("Start", "alexa"),
                                                        value: i?.start,
                                                        onChange: (e) => {
                                                            l({
                                                                style: { ...a, counter: { ...i, start: e } },
                                                            });
                                                        },
                                                        step: 1,
                                                        shiftStep: 10,
                                                        isDragEnabled: !0,
                                                        isShiftStepEnabled: !0,
                                                    })
                                                ),
                                                (0, o.createElement)(
                                                    v.FlexItem,
                                                    null,
                                                    (0, o.createElement)(v.__experimentalNumberControl, {
                                                        label: (0, k.__)("End", "alexa"),
                                                        value: i?.end,
                                                        onChange: (e) => {
                                                            l({ style: { ...a, counter: { ...i, end: e } } });
                                                        },
                                                        step: 1,
                                                        shiftStep: 10,
                                                        isDragEnabled: !0,
                                                        isShiftStepEnabled: !0,
                                                    })
                                                )
                                            )
                                        ),
                                        (0, o.createElement)(
                                            v.PanelRow,
                                            null,
                                            (0, o.createElement)(
                                                v.Flex,
                                                { className: "alexa-flex-controls" },
                                                (0, o.createElement)(
                                                    v.FlexItem,
                                                    null,
                                                    (0, o.createElement)(v.__experimentalNumberControl, {
                                                        label: (0, k.__)("Duration (seconds)", "alexa"),
                                                        value: i?.duration,
                                                        onChange: (e) => {
                                                            l({
                                                                style: { ...a, counter: { ...i, duration: e } },
                                                            });
                                                        },
                                                        step: 0.1,
                                                        shiftStep: 1,
                                                        isDragEnabled: !0,
                                                        isShiftStepEnabled: !0,
                                                    })
                                                ),
                                                (0, o.createElement)(
                                                    v.FlexItem,
                                                    null,
                                                    (0, o.createElement)(v.__experimentalNumberControl, {
                                                        label: (0, k.__)("Delay (seconds)", "alexa"),
                                                        value: i?.delay,
                                                        onChange: (e) => {
                                                            l({
                                                                style: { ...a, counter: { ...i, delay: e } },
                                                            });
                                                        },
                                                        step: 0.1,
                                                        shiftStep: 1,
                                                        isDragEnabled: !0,
                                                        isShiftStepEnabled: !0,
                                                    })
                                                )
                                            )
                                        ),
                                        (0, o.createElement)(
                                            v.PanelRow,
                                            null,
                                            (0, o.createElement)(
                                                v.Flex,
                                                { className: "alexa-flex-controls" },
                                                (0, o.createElement)(
                                                    v.FlexItem,
                                                    null,
                                                    (0, o.createElement)(v.TextControl, {
                                                        label: (0, k.__)("Prefix", "alexa"),
                                                        value: i?.prefix,
                                                        onChange: (e) => {
                                                            l({
                                                                style: { ...a, counter: { ...i, prefix: e } },
                                                            });
                                                        },
                                                    })
                                                ),
                                                (0, o.createElement)(
                                                    v.FlexItem,
                                                    null,
                                                    (0, o.createElement)(v.TextControl, {
                                                        label: (0, k.__)("Suffix", "alexa"),
                                                        value: i?.suffix,
                                                        onChange: (e) => {
                                                            l({
                                                                style: { ...a, counter: { ...i, suffix: e } },
                                                            });
                                                        },
                                                    })
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        },
                        "withCounterControls"
                    ),
                    9
                );
            var ve = (0, o.createElement)(
                E.SVG,
                { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                (0, o.createElement)(E.Path, {
                    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z",
                })
            );
            const ke = {
                name: "image",
                title: (0, k.__)("Image", "alexa"),
                icon: ve,
                isDefault: !0,
                category: "media",
                scope: ["inserter", "transform", "block"],
                description: (0, k.__)(
                    "Insert an image to make a visual statement.",
                    "alexa"
                ),
                attributes: { className: "" },
                isActive: (e) =>
                    !e?.className ||
                    (!e?.className?.includes("is-style-icon") &&
                        !e?.className?.includes("is-style-svg")),
            };
            (0, l.registerBlockVariation)("core/image", ke);
            var Ee = n(488),
                we =
                    (Ee.domToReact,
                        Ee.htmlToDOM,
                        Ee.attributesToProps,
                        Ee.Comment,
                        Ee.Element,
                        Ee.ProcessingInstruction,
                        Ee.Text,
                        Ee),
                xe = (0, o.createElement)(
                    E.SVG,
                    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                    (0, o.createElement)(E.Path, {
                        d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z",
                    })
                );
            v.SelectControl.Option, v.CustomSelectControl.Option;
            const _e = (e) => "core/image" === e,
                Se = {
                    iconSet: { type: "string", default: "wordpress" },
                    iconName: { type: "string", default: "star-empty" },
                    iconColor: { type: "string" },
                    iconGradient: { type: "string" },
                    iconSize: { type: "string" },
                    iconCustomSVG: { type: "string" },
                    iconSvgString: {
                        type: "string",
                        default:
                            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z" clip-rule="evenodd"> </path></svg>',
                    },
                },
                Ce = {
                    name: "icon",
                    icon: xe,
                    title: (0, k.__)("Icon", "alexa"),
                    isDefault: !1,
                    category: window?.alexa?.isPlugin ? "alexa" : "media",
                    scope: ["inserter", "transform", "block"],
                    description: (0, k.__)("Insert a customizable SVG icon.", "alexa"),
                    attributes: {
                        className: "is-style-icon",
                        iconSet: "wordpress",
                        iconName: "star-empty",
                        iconSvgString:
                            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z" clip-rule="evenodd"> </path></svg>',
                    },
                    isActive: (e) => e && e?.className?.includes("is-style-icon"),
                };
            t()(() => {
                (0, l.registerBlockVariation)("core/image", Ce);
            }),
                (0, a.addFilter)(
                    "blocks.registerBlockType",
                    "alexa/add-icon-attributes",
                    (e, t) => {
                        if (_e(t)) {
                            for (const [t, n] of Object.entries(Se))
                                e.attributes[t] = { type: n.type };
                            e.attributes = { ...e.attributes, ...Se };
                        }
                        return e;
                    },
                    99
                ),
                (0, a.addFilter)(
                    "editor.BlockEdit",
                    "alexa/with-icon",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => {
                            var n, l, r, a, i;
                            const {
                                name: s,
                                attributes: c,
                                setAttributes: u,
                                isSelected: m,
                            } = t,
                                { className: f } = c;
                            if (!f) return (0, o.createElement)(e, t);
                            if (!f?.includes("is-style-icon"))
                                return (0, o.createElement)(e, t);
                            if (!_e(s)) return (0, o.createElement)(e, t);
                            m &&
                                (() => {
                                    const e = document.getElementsByClassName(
                                        "block-editor-block-card__description"
                                    );
                                })(),
                                c?.url || u({ url: "#" }),
                                c?.iconSet || u({ iconSet: Se?.iconSet?.default }),
                                c?.iconName || u({ iconName: Se?.iconName?.default }),
                                c?.iconSvgString ||
                                u({ iconSvgString: Se?.iconSvgString?.default });
                            const y = [],
                                { icons: h } =
                                    null !==
                                        (n = (0, p.useSelect)(
                                            (e) => ({ icons: e("alexa/icons").getIcons() }),
                                            []
                                        )) && void 0 !== n
                                        ? n
                                        : d,
                                b = {
                                    wordpress: [
                                        {
                                            name: Se?.iconSvgString?.default,
                                            key: Se?.iconName?.default,
                                        },
                                    ],
                                };
                            return (
                                Object.keys(h).forEach((e) => {
                                    let t = e.split("-").join(" ");
                                    (t = "wordpress" === t ? "WordPress" : t),
                                        y.push({ label: t, value: e }),
                                        (b[e] = []),
                                        Object.keys(h[e]).forEach((t) => {
                                            t !== c?.iconName &&
                                                b[e].push({ name: we(h?.[e]?.[t]), key: t });
                                        }),
                                        h?.[e]?.[c?.iconName] &&
                                        b[e].unshift({
                                            name: we(h?.[e]?.[c?.iconName]),
                                            key: c?.iconName,
                                        });
                                }),
                                (0, o.createElement)(
                                    o.Fragment,
                                    null,
                                    (0, o.createElement)(e, t),
                                    (0, o.createElement)(
                                        F.InspectorControls,
                                        null,
                                        (0, o.createElement)(
                                            v.PanelBody,
                                            {
                                                title: (0, k.__)("Icon Settings", "alexa"),
                                                initialOpen: !0,
                                                className: "alexa-icon-settings",
                                            },
                                            !1,
                                            (0, o.createElement)(v.SelectControl, {
                                                label: (0, k.__)("Select Icon Set", "alexa"),
                                                value:
                                                    null !== (l = c?.iconSet) && void 0 !== l
                                                        ? l
                                                        : Se?.iconSet.default,
                                                options: y,
                                                onChange: (e) => u({ iconSet: e }),
                                            }),
                                            (0, o.createElement)(() => {
                                                const e = b[c?.iconSet]?.filter(
                                                    (e) => e?.key === c?.iconName
                                                )?.[0]?.name;
                                                return (0, o.createElement)(
                                                    "div",
                                                    { className: "alexa-icon-preview" },
                                                    e &&
                                                    (0, o.createElement)(
                                                        o.Fragment,
                                                        null,
                                                        e,
                                                        (0, o.createElement)(
                                                            "span",
                                                            null,
                                                            c?.iconName?.replace("-", " ")
                                                        )
                                                    )
                                                );
                                            }, null),
                                            (0, o.createElement)(v.CustomSelectControl, {
                                                label: (0, k.__)("Select Icon", "alexa"),
                                                options:
                                                    null !== (r = b?.[c?.iconSet]) && void 0 !== r
                                                        ? r
                                                        : b?.wordpress,
                                                value:
                                                    null !== (a = c?.iconSvgString) && void 0 !== a
                                                        ? a
                                                        : Se?.iconSvgString?.default,
                                                className: "alexa-icon-setting",
                                                onChange: (e) => {
                                                    var t;
                                                    let { selectedItem: n } = e;
                                                    const l =
                                                        null !== (t = n?.key) && void 0 !== t ? t : "";
                                                    u({ iconName: l }),
                                                        u({ iconSvgString: h?.[c?.iconSet]?.[l] });
                                                },
                                            }),
                                            (0, o.createElement)("br", null),
                                            (0, o.createElement)(
                                                v.PanelRow,
                                                null,
                                                (0, o.createElement)(
                                                    v.Flex,
                                                    null,
                                                    (0, o.createElement)(
                                                        v.FlexItem,
                                                        null,
                                                        (0, o.createElement)(v.__experimentalUnitControl, {
                                                            label: (0, k.__)("Icon Width", "alexa"),
                                                            value:
                                                                null !== (i = c?.iconSize) && void 0 !== i
                                                                    ? i
                                                                    : "",
                                                            onChange: (e) => u({ iconSize: e }),
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        },
                        "iconEdit"
                    ),
                    0
                );
            const Fe = (e) => {
                var t, n, l;
                const r = {};
                let o = "";
                e?.style?.color?.background && (o = e.style.color.background),
                    e?.backgroundColor &&
                    (o =
                        "var(--wp--preset--color--" +
                        e.backgroundColor +
                        ", currentColor)");
                let a = "";
                e?.style?.color?.gradient && (a = e?.style?.color?.gradient),
                    e?.gradient &&
                    (a =
                        "var(--wp--preset--gradient--" + e.gradient + ",currentColor)");
                let i = "";
                if (
                    (e?.style?.color?.text && (i = e?.style?.color?.text),
                        e?.textColor &&
                        (i = "var(--wp--preset--color--" + e.textColor + ",currentColor)"),
                        "" !== o && (r["--wp--custom--icon--background"] = o),
                        i
                            ? ((r["--wp--custom--icon--color"] = i),
                                a && (r["--wp--custom--icon--background"] = a))
                            : a && (r["--wp--custom--icon--color"] = a),
                        e?.style?.spacing?.padding)
                ) {
                    var s, c, u, m;
                    const t = e.style.spacing.padding,
                        n = {
                            top: null !== (s = t?.top) && void 0 !== s ? s : "0",
                            right: null !== (c = t?.right) && void 0 !== c ? c : "0",
                            bottom: null !== (u = t?.bottom) && void 0 !== u ? u : "0",
                            left: null !== (m = t?.left) && void 0 !== m ? m : "0",
                        };
                    Object.keys(n).forEach((e) => {
                        var t;
                        const l = null !== (t = n?.[e]) && void 0 !== t ? t : "";
                        l &&
                            l?.includes("var:preset") &&
                            (n[e] =
                                "var(--wp--preset--spacing--" +
                                l.replace("var:preset|spacing|", "") +
                                ")");
                    }),
                        (r["--wp--custom--icon--padding"] = Object.values(n).join(" "));
                }
                if (e?.style?.spacing?.margin) {
                    var p, d, f, y;
                    const t = e.style.spacing.margin,
                        n = {
                            top: null !== (p = t?.top) && void 0 !== p ? p : "",
                            right: null !== (d = t?.right) && void 0 !== d ? d : "",
                            bottom: null !== (f = t?.bottom) && void 0 !== f ? f : "",
                            left: null !== (y = t?.left) && void 0 !== y ? y : "",
                        };
                    Object.keys(n).forEach((e) => {
                        var t;
                        const l = null !== (t = n?.[e]) && void 0 !== t ? t : "";
                        l?.includes("var:preset") &&
                            (n[e] =
                                "var(--wp--preset--spacing--" +
                                l?.replace("var:preset|spacing|", "") +
                                ")");
                    }),
                        (r["--wp--custom--icon--margin"] = Object.values(n).join(" "));
                }
                let h = "";
                var b, g;
                e?.borderColor &&
                    (h = "var(--wp--preset--color--" + e?.borderColor + ")"),
                    e?.style?.border?.width &&
                    ((r["--wp--custom--icon--border-width"] = e.style.border.width),
                        (r["--wp--custom--icon--border-style"] =
                            null !== (b = e.style.border?.style) && void 0 !== b
                                ? b
                                : "solid"),
                        (r["--wp--custom--icon--border-color"] =
                            null !== (g = e.style.border?.color) && void 0 !== g ? g : h));
                const v = null !== (t = e?.iconSize) && void 0 !== t ? t : "";
                "" !== v && (r["--wp--custom--icon--size"] = v);
                const k = (
                    null !== (n = e?.iconCustomSVG) && void 0 !== n ? n : ""
                )?.replace('"', "'"),
                    E =
                        k && k?.includes("<svg")
                            ? k
                            : null !== (l = e?.iconSvgString) && void 0 !== l
                                ? l
                                : "";
                return (
                    E &&
                    (r["--wp--custom--icon--url"] =
                        "url('data:image/svg+xml;utf8," + E + "')"),
                    r
                );
            };
            (0, a.addFilter)(
                "editor.BlockListBlock",
                "alexa/edit-icon-styles",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        let { attributes: n, wrapperProps: l, name: r } = t;
                        return n?.className &&
                            n?.className?.includes("is-style-icon") &&
                            _e(r)
                            ? (l || (l = { style: {} }),
                                (l.style = { ...l?.style, ...Fe(n) }),
                                (0, o.createElement)(e, g({}, t, { wrapperProps: l })))
                            : (0, o.createElement)(e, t);
                    },
                    "withIcon"
                )
            ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/save-icon-styles",
                    (e, t, n) => {
                        if (!n?.className) return e;
                        const { name: l } = t;
                        return n?.className?.includes("is-style-icon") && _e(l)
                            ? ((e.style = { ...e?.style, ...Fe(n) }), e)
                            : e;
                    }
                );
            var Te = (0, o.createElement)(
                E.SVG,
                { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                (0, o.createElement)(E.Path, {
                    d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z",
                })
            );
            const Ne = {
                name: "svg",
                title: (0, k.__)("SVG", "alexa"),
                icon: Te,
                isDefault: !1,
                category: window?.alexa?.isPlugin ? "alexa" : "media",
                scope: ["inserter", "transform", "block"],
                description: (0, k.__)("Insert an inline SVG.", "alexa"),
                attributes: { className: "is-style-svg" },
                isActive: (e) =>
                    !!e?.className &&
                    e?.className &&
                    e?.className?.includes("is-style-svg"),
            };
            t()(() => {
                (0, l.registerBlockVariation)("core/image", Ne);
            });
            const Ie = (e) =>
                "url('data:image/svg+xml;utf8," + encodeURIComponent(e) + "')",
                Pe = (e) => "data:image/svg+xml;utf8," + encodeURIComponent(e);
            (0, a.addFilter)(
                "editor.BlockEdit",
                "alexa/with-svg-controls",
                (0, i.createHigherOrderComponent)(
                    (e) => (t) => {
                        var n, l;
                        const { attributes: r, setAttributes: a } = t;
                        if (!r?.className?.includes("is-style-svg"))
                            return (0, o.createElement)(e, t);
                        const { style: i } = r,
                            s = null !== (n = i?.svgString) && void 0 !== n ? n : "",
                            c = null !== (l = i?.maskSvg) && void 0 !== l && l;
                        r?.url || a({ url: c ? "#" : Pe(s) }),
                            c && "#" !== r?.url && a({ url: "#" }),
                            c ||
                            r?.url?.includes("data:image/svg+xml;utf8,") ||
                            a({ url: Pe(s) });
                        let u = "var(--width,1em)",
                            m = "";
                        var p;
                        r?.width && (u = r.width + "px"),
                            r?.height &&
                            (m = (null !== (p = r.height) && void 0 !== p ? p : "") + "px"),
                            (m = "" === m ? u : m);
                        const d = {
                            width: u,
                            height: m,
                            display: "inline-flex",
                            background: "currentColor",
                            overflow: "hidden",
                            "-webkit-mask-repeat": "no-repeat",
                            "-mask-repeat": "no-repeat",
                            "-webkit-mask-size": "100% 100%",
                            "-mask-size": "100% 100%",
                            "-webkit-mask-position": "center",
                            "-mask-position": "center bottom",
                            "-webkit-mask-image": Ie(s),
                            "-mask-image": Ie(s),
                        };
                        let f = "";
                        return (
                            s &&
                            (f = Object.entries(d)
                                .map((e) => {
                                    let [t, n] = e;
                                    return `${t}:${n};`;
                                })
                                .join("")),
                            (0, o.createElement)(
                                o.Fragment,
                                null,
                                c &&
                                (0, o.createElement)(
                                    "style",
                                    null,
                                    "#block-" + t?.clientId + ">div:first-of-type{" + f + "}"
                                ),
                                (0, o.createElement)(e, t),
                                (0, o.createElement)(
                                    F.InspectorControls,
                                    null,
                                    (0, o.createElement)(
                                        v.PanelBody,
                                        {
                                            title: (0, k.__)("SVG Settings", "alexa-pro"),
                                            className: (0, k.__)("alexa-svg-controls", "alexa-pro"),
                                        },
                                        (0, o.createElement)(
                                            v.PanelRow,
                                            null,
                                            (0, o.createElement)(v.TextareaControl, {
                                                label: (0, k.__)("SVG String", "alexa"),
                                                help: (0, k.__)(
                                                    "Paste your SVG string in the field above. It is recommended to format your SVG with an optimization tool ",
                                                    "alexa"
                                                ),
                                                value: null != s ? s : "",
                                                rows: 20,
                                                onChange: (e) => {
                                                    const t = { style: { ...i, svgString: e } };
                                                    (t.url = c ? "#" : Pe(e)), a(t);
                                                },
                                                style: {
                                                    fontFamily:
                                                        "var(--wp--preset--font-family--monospace, monospace)",
                                                },
                                            })
                                        ),
                                        (0, o.createElement)(
                                            v.ExternalLink,
                                            {
                                                href: "https://jakearchibald.github.io/svgomg/",
                                                target: "_blank",
                                            },
                                            "https://jakearchibald.github.io/svgomg/"
                                        ),
                                        (0, o.createElement)(
                                            v.PanelRow,
                                            null,
                                            (0, o.createElement)(v.ToggleControl, {
                                                label: (0, k.__)("Mask with text color", "alexa"),
                                                help: (0, k.__)(
                                                    "If enabled, the SVG will be masked with the text color. (Renders inline SVG on front end).",
                                                    "alexa"
                                                ),
                                                checked: c,
                                                onChange: (e) => {
                                                    const t = { style: { ...i, maskSvg: e } };
                                                    (t.url = c ? "#" : Pe(s)), a(t);
                                                },
                                            })
                                        )
                                    )
                                )
                            )
                        );
                    },
                    "withSvgControls"
                ),
                9
            );
            const Oe = {
                name: "marquee",
                icon: (0, o.createElement)(
                    E.SVG,
                    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                    (0, o.createElement)(E.Path, {
                        d: "M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z",
                    })
                ),
                title: (0, k.__)("Marquee", "alexa"),
                isDefault: !1,
                category: window?.alexa?.isPlugin ? "alexa" : "design",
                scope: ["inserter", "transform", "block"],
                description: (0, k.__)(
                    "Adds a horizontal infinite scrolling marquee banner.",
                    "alexa"
                ),
                innerBlocks: [
                    [
                        "core/group",
                        {
                            layout: {
                                type: "flex",
                                flexWrap: "nowrap",
                                orientation: "horizontal",
                                justifyContent: "center",
                            },
                        },
                        [["core/paragraph"]],
                    ],
                ],
                attributes: {
                    marquee: {},
                    align: "full",
                    speedMobile: 60,
                    speedDesktop: 90,
                    pauseOnHover: !0,
                    reverse: !1,
                    spacing: { padding: { right: "0", left: "0" } },
                    layout: {
                        type: "flex",
                        flexWrap: "nowrap",
                        orientation: "marquee",
                        justifyContent: "center",
                    },
                },
                isActive: (e, t) => e.layout?.orientation === t.layout?.orientation,
            };
            (0, l.registerBlockVariation)("core/group", Oe);
            const Be = (e) => {
                var t, n;
                return {
                    "--marquee-speed-mobile":
                        (null !== (t = e?.speedMobile) && void 0 !== t ? t : 20) + "s",
                    "--marquee-speed-desktop":
                        (null !== (n = e?.speedDesktop) && void 0 !== n ? n : 30) + "s",
                    "--marquee-direction": e?.reverse ? "reverse" : "forwards",
                    "--marquee-pause": e?.pauseOnHover ? "paused" : "running",
                };
            };
            (0, a.addFilter)(
                "blocks.registerBlockType",
                "alexa/marquee-attributes",
                (e, t) => (
                    "core/group" === t &&
                    (e = {
                        ...e,
                        attributes: {
                            ...e.attributes,
                            speedMobile: { type: "string" },
                            speedDesktop: { type: "string" },
                            reverse: { type: "boolean" },
                            pauseOnHover: { type: "boolean" },
                            repeatItems: { type: "number" },
                        },
                    }),
                    e
                ),
                0
            ),
                (0, a.addFilter)(
                    "editor.BlockEdit",
                    "alexa/with-marquee-controls",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => {
                            var n;
                            const { attributes: l, setAttributes: r } = t;
                            return "marquee" !== l?.layout?.orientation
                                ? (0, o.createElement)(e, t)
                                : (0, o.createElement)(
                                    o.Fragment,
                                    null,
                                    (0, o.createElement)(
                                        F.InspectorControls,
                                        null,
                                        (0, o.createElement)(
                                            v.PanelBody,
                                            {
                                                title: (0, k.__)("Marquee Settings", "alexa-pro"),
                                                className: (0, k.__)(
                                                    "alexa-width-control",
                                                    "alexa-pro"
                                                ),
                                            },
                                            (0, o.createElement)(
                                                "p",
                                                null,
                                                (0, k.__)("Scroll Speed (seconds)", "alexa")
                                            ),
                                            (0, o.createElement)(
                                                v.PanelRow,
                                                null,
                                                (0, o.createElement)("br", null),
                                                (0, o.createElement)(
                                                    v.Flex,
                                                    null,
                                                    (0, o.createElement)(
                                                        v.FlexItem,
                                                        { style: { width: "50%" } },
                                                        (0, o.createElement)(
                                                            v.__experimentalNumberControl,
                                                            {
                                                                isShiftStepEnabled: !0,
                                                                label: (0, k.__)("Mobile", "alexa"),
                                                                onChange: (e) => {
                                                                    r({ speedMobile: e });
                                                                },
                                                                value: l?.speedMobile,
                                                            }
                                                        )
                                                    ),
                                                    (0, o.createElement)(
                                                        v.FlexBlock,
                                                        null,
                                                        (0, o.createElement)(
                                                            v.__experimentalNumberControl,
                                                            {
                                                                isShiftStepEnabled: !0,
                                                                label: (0, k.__)("Desktop", "alexa-pro"),
                                                                onChange: (e) => {
                                                                    r({ speedDesktop: e });
                                                                },
                                                                value: l?.speedDesktop,
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            (0, o.createElement)("br", null),
                                            (0, o.createElement)(
                                                v.PanelRow,
                                                null,
                                                (0, o.createElement)(v.RangeControl, {
                                                    label: (0, k.__)("Repeat Items", "alexa"),
                                                    help: (0, k.__)(
                                                        "How many times should the items be duplicated and cloned.",
                                                        "alexa"
                                                    ),
                                                    value:
                                                        null !== (n = l?.repeatItems) && void 0 !== n
                                                            ? n
                                                            : 2,
                                                    onChange: (e) => {
                                                        r({ repeatItems: e });
                                                    },
                                                    min: 0,
                                                    max: 10,
                                                    step: 1,
                                                    allowReset: !0,
                                                })
                                            ),
                                            (0, o.createElement)(
                                                v.PanelRow,
                                                null,
                                                (0, o.createElement)(v.ToggleControl, {
                                                    label: (0, k.__)("Pause on hover", "alexa-pro"),
                                                    checked: l?.pauseOnHover,
                                                    onChange: () =>
                                                        r({ pauseOnHover: !l?.pauseOnHover }),
                                                })
                                            ),
                                            (0, o.createElement)(
                                                v.PanelRow,
                                                null,
                                                (0, o.createElement)(v.ToggleControl, {
                                                    label: (0, k.__)("Reverse direction", "alexa-pro"),
                                                    checked: l?.reverse,
                                                    onChange: () => r({ reverse: !l?.reverse }),
                                                })
                                            )
                                        )
                                    ),
                                    (0, o.createElement)(e, t)
                                );
                        },
                        "withInspectorControl"
                    ),
                    9
                ),
                (0, a.addFilter)(
                    "editor.BlockListBlock",
                    "alexa/with-marquee",
                    (0, i.createHigherOrderComponent)(
                        (e) => (t) => {
                            var n, l;
                            const { attributes: r } = t;
                            if ("marquee" !== r?.layout?.orientation)
                                return (0, o.createElement)(e, t);
                            t.attributes.style = {
                                ...(null !== (n = r.style) && void 0 !== n ? n : {}),
                                ...Be(r),
                            };
                            const a = {
                                ...t.wrapperProps,
                                style: {
                                    ...(null !== (l = t.wrapperProps?.style) && void 0 !== l
                                        ? l
                                        : {}),
                                    ...Be(r),
                                },
                            };
                            return (0, o.createElement)(e, g({}, t, { wrapperProps: a }));
                        },
                        "withMarquee"
                    )
                ),
                (0, a.addFilter)(
                    "blocks.getSaveContent.extraProps",
                    "alexa/save-marquee-styles",
                    (e, t, n) => (
                        "marquee" !== n?.layout?.orientation ||
                        (e.style = { ...e?.style, ...Be(n) }),
                        e
                    )
                );
            var Ae = (0, o.createElement)(
                E.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(E.Path, {
                    d: "M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z",
                })
            );
            const Me = {
                name: "paragraph",
                title: (0, k.__)("Paragraph", "alexa"),
                icon: Ae,
                isDefault: !0,
                category: "text",
                scope: ["inserter", "transform", "block"],
                description: (0, k.__)(
                    "Insert an image to make a visual statement.",
                    "alexa"
                ),
                attributes: { className: "" },
                isActive: (e) =>
                    !e?.className?.includes("is-style-curved-text") &&
                    !e?.className?.includes("is-style-counter"),
            };
            (0, l.registerBlockVariation)("core/paragraph", Me);
            const ze = (0, o.createElement)(
                v.SVG,
                {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 512 512",
                },
                (0, o.createElement)(v.Path, {
                    d: "M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06Zm23.72 0a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0Zm47.06-188.98A47.06 47.06 0 1 1 244 79.06v47.06Zm0 23.72a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12Zm188.98 47.06a47.06 47.06 0 1 1 47.06 47.1h-47.06Zm-23.72 0a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0ZM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06Zm0-23.72a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12Z",
                })
            ),
                Re = {
                    name: "slack",
                    title: (0, k.__)("Slack", "alexa"),
                    icon: ze,
                    attributes: { service: "slack" },
                    isActive: (e, t) => e.service === t.service,
                };
            (0, l.registerBlockVariation)("core/social-link", Re);
            var De = window.wp.richText;
            (0, De.registerFormatType)("alexa/clear-formatting", {
                title: (0, k.__)("Clear", "alexa"),
                tagName: "span",
                className: "clear",
                edit: (e) => {
                    const { value: t, isActive: n, onChange: l } = e,
                        { formatTypes: r } = (0, p.useSelect)(
                            (e) => ({ formatTypes: e("core/rich-text").getFormatTypes() }),
                            []
                        );
                    return (0, o.createElement)(F.RichTextToolbarButton, {
                        icon: "editor-removeformatting",
                        title: (0, k.__)("Clear Formatting", "alexa"),
                        onClick: () => {
                            if (r.length > 0) {
                                let e = t;
                                r.map((t) => {
                                    e = (0, De.removeFormat)(e, t.name);
                                }),
                                    l({ ...e });
                            }
                        },
                        isActive: n,
                    });
                },
            });
            var je = (0, o.createElement)(
                E.SVG,
                { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                (0, o.createElement)(E.Path, {
                    d: "M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z",
                })
            );
            const Ve = "alexa/gradient";
            (0, De.registerFormatType)(Ve, {
                title: (0, k.__)("Gradient", "alexa"),
                tagName: "span",
                className: "has-text-gradient",
                attributes: { style: "style", class: "class" },
                edit: (e) => {
                    let { isActive: t, value: n, onChange: l } = e;
                    const [r, a] = (0, o.useState)(""),
                        [i, s] = (0, o.useState)(!1),
                        { gradients: c } = (0, p.useSelect)(
                            (e) => ({
                                gradients: e("core/block-editor").getSettings()?.gradients,
                            }),
                            []
                        );
                    let u = "",
                        m = "";
                    return (
                        n?.formats &&
                        n.formats.forEach((e) => {
                            const t = e?.find((e) => e?.type === Ve);
                            t?.type === Ve &&
                                ((u += ";" + t?.attributes?.style),
                                    (m += t?.attributes?.class));
                        }),
                        (0, o.createElement)(
                            F.BlockControls,
                            null,
                            (0, o.createElement)(F.RichTextToolbarButton, {
                                icon: je,
                                title: (0, k.__)("Gradient", "alexa"),
                                isActive: t,
                                shortcutType: "primary",
                                shortcutCharacter: "g",
                                onClick: () => s(!i),
                            }),
                            i &&
                            (0, o.createElement)(
                                v.Toolbar,
                                { className: "alexa-components-toolbar" },
                                (0, o.createElement)(
                                    v.Popover,
                                    {
                                        position: "bottom center",
                                        className: "alexa-gradient-text-control",
                                        focusOnMount: "container",
                                        onFocusOutside: () => s(!1),
                                    },
                                    (0, o.createElement)(v.GradientPicker, {
                                        value: null != r ? r : "",
                                        gradients: c,
                                        onChange: (e) => {
                                            a(e);
                                            let t = u,
                                                r = m;
                                            c.forEach((t) => {
                                                t.gradient === e &&
                                                    (r +=
                                                        (r ? " " : "") +
                                                        "has-" +
                                                        t.slug +
                                                        "-gradient-background");
                                            }),
                                                e &&
                                                !r.includes("-gradient-background") &&
                                                (t += (t ? t + ";" : "") + "background:" + e),
                                                r?.includes("has-text-gradient") &&
                                                (r =
                                                    r?.replace("has-text-gradient", "")?.trim() +
                                                    " has-text-gradient"),
                                                l(
                                                    (0, De.applyFormat)(n, {
                                                        type: Ve,
                                                        attributes: { style: t, class: r },
                                                    })
                                                );
                                        },
                                    })
                                )
                            )
                        )
                    );
                },
            });
            var He = (0, o.createElement)(
                E.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(E.Path, {
                    d: "M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z",
                })
            );
            const Le = (e) =>
                Object.keys(e)
                    .map((t) => `${t?.includes("-") ? t : _(t)}:${e[t]};`)
                    .join(" "),
                Ge = (e) => {
                    const t = {};
                    return (
                        e.split(";").map((e) => {
                            const [n, l] = e.split(":");
                            return n && (t[n] = l), null;
                        }),
                        t
                    );
                };
            v.CustomSelectControl.Option;
            const Ue = "alexa/typography",
                We = [
                    { key: "Default", name: "Default", style: {} },
                    {
                        key: "Thin",
                        name: "Thin",
                        style: { fontStyle: "normal", fontWeight: 100 },
                    },
                    {
                        key: "Extra Light",
                        name: "Extra Light",
                        style: { fontStyle: "normal", fontWeight: 200 },
                    },
                    {
                        key: "Light",
                        name: "Light",
                        style: { fontStyle: "normal", fontWeight: 300 },
                    },
                    {
                        key: "Regular",
                        name: "Regular",
                        style: { fontStyle: "normal", fontWeight: 400 },
                    },
                    {
                        key: "Medium",
                        name: "Medium",
                        style: { fontStyle: "normal", fontWeight: 500 },
                    },
                    {
                        key: "Semi Bold",
                        name: "Semi Bold",
                        style: { fontStyle: "normal", fontWeight: 600 },
                    },
                    {
                        key: "Bold",
                        name: "Bold",
                        style: { fontStyle: "normal", fontWeight: 700 },
                    },
                    {
                        key: "Extra Bold",
                        name: "Extra Bold",
                        style: { fontStyle: "normal", fontWeight: 800 },
                    },
                    {
                        key: "Black",
                        name: "Black",
                        style: { fontStyle: "normal", fontWeight: 900 },
                    },
                    {
                        key: "Thin Italic",
                        name: "Thin Italic",
                        style: { fontStyle: "italic", fontWeight: 100 },
                    },
                    {
                        key: "Extra Light Italic",
                        name: "Extra Light Italic",
                        style: { fontStyle: "italic", fontWeight: 200 },
                    },
                    {
                        key: "Light Italic",
                        name: "Light Italic",
                        style: { fontStyle: "italic", fontWeight: 300 },
                    },
                    {
                        key: "Regular Italic",
                        name: "Regular Italic",
                        style: { fontStyle: "italic", fontWeight: 400 },
                    },
                    {
                        key: "Medium Italic",
                        name: "Medium Italic",
                        style: { fontStyle: "italic", fontWeight: 500 },
                    },
                    {
                        key: "Semi Bold Italic",
                        name: "Semi Bold Italic",
                        style: { fontStyle: "italic", fontWeight: 600 },
                    },
                    {
                        key: "Bold Italic",
                        name: "Bold Italic",
                        style: { fontStyle: "italic", fontWeight: 700 },
                    },
                    {
                        key: "Extra Bold Italic",
                        name: "Extra Bold Italic",
                        style: { fontStyle: "italic", fontWeight: 800 },
                    },
                    {
                        key: "Black Italic",
                        name: "Black Italic",
                        style: { fontStyle: "italic", fontWeight: 900 },
                    },
                ];
            (0, De.registerFormatType)(Ue, {
                title: (0, k.__)("Typography", "alexa"),
                tagName: "span",
                className: "has-font",
                edit: (e) => {
                    var t;
                    const { isActive: n, value: l, onChange: r } = e,
                        [a, i] = (0, o.useState)(!1),
                        { fontSizes: s } = (0, p.useSelect)(
                            (e) => ({
                                fontSizes: e("core/block-editor")?.getSettings()?.fontSizes,
                            }),
                            []
                        ),
                        c = (
                            null !== (t = window?.alexa?.selectedFonts) && void 0 !== t
                                ? t
                                : []
                        )?.map((e) => ({ label: x(e?.replace("-", " ")), value: e }));
                    let u = "",
                        m = "";
                    l?.formats &&
                        l.formats.forEach((e) => {
                            e &&
                                e.forEach((e) => {
                                    var t, n;
                                    e?.type === Ue &&
                                        ((u =
                                            null !== (t = e?.attributes?.style) && void 0 !== t
                                                ? t
                                                : ""),
                                            (m =
                                                null !== (n = e?.attributes?.class) && void 0 !== n
                                                    ? n
                                                    : ""));
                                });
                        });
                    const [d, f] = (0, o.useState)({
                        style: Ge(u),
                        class: m.split(" "),
                        fontFamily: "",
                        fontSize: "",
                        fontAppearance: We[0],
                        isOpen: !1,
                    });
                    return (0, o.createElement)(
                        F.BlockControls,
                        null,
                        (0, o.createElement)(F.RichTextToolbarButton, {
                            icon: He,
                            title: (0, k.__)("Typography", "alexa"),
                            isActive: n,
                            shortcutType: "primary",
                            shortcutCharacter: "f",
                            onClick: () => f({ ...d, isOpen: !d.isOpen }),
                        }),
                        d?.isOpen &&
                        (0, o.createElement)(
                            v.Toolbar,
                            { className: "alexa-components-toolbar" },
                            (0, o.createElement)(
                                v.Popover,
                                {
                                    position: "bottom center",
                                    className: "alexa-font-family-control",
                                    focusOnMount: "container",
                                    onFocusOutside: () => f({ ...d, isOpen: !1 }),
                                },
                                (0, o.createElement)(v.SelectControl, {
                                    label: (0, k.__)("Select Font Family", "alexa"),
                                    value: d?.fontFamily,
                                    options: c,
                                    onChange: (e) => {
                                        f({ ...d, fontFamily: e });
                                        const t = "has-" + e + "-font-family";
                                        d?.class?.includes(t) || d?.class?.push(t),
                                            r(
                                                (0, De.applyFormat)(l, {
                                                    type: Ue,
                                                    attributes: {
                                                        style: Le(d?.style),
                                                        class: d?.class?.join(" "),
                                                    },
                                                })
                                            );
                                    },
                                }),
                                (0, o.createElement)(v.FontSizePicker, {
                                    fontSizes: s,
                                    fallbackFontSize: 20,
                                    value: parseInt(d?.fontSize),
                                    withSlider: !0,
                                    onChange: (e) => {
                                        f({ ...d, fontSize: e.toString() }),
                                            e &&
                                            (d.style["--wp--custom--font-size"] = e.toString()),
                                            d?.class?.includes("has-inline-font-size") ||
                                            d.class.push("has-inline-font-size"),
                                            r(
                                                (0, De.applyFormat)(l, {
                                                    type: Ue,
                                                    attributes: {
                                                        style: Le(d?.style),
                                                        class: d?.class?.join(" "),
                                                    },
                                                })
                                            );
                                    },
                                }),
                                (0, o.createElement)(v.CustomSelectControl, {
                                    label: (0, k.__)("Appearance", "alexa"),
                                    value: We.find((e) => e.key === d?.fontAppearance?.key),
                                    options: null != We ? We : [],
                                    onChange: (e) => {
                                        let { selectedItem: t } = e;
                                        t && f({ ...d, fontAppearance: t }),
                                            t?.style?.fontStyle &&
                                            (d.style["font-style"] = t?.style?.fontStyle),
                                            t?.style?.fontWeight &&
                                            (d.style["font-weight"] =
                                                t?.style?.fontWeight?.toString()),
                                            r(
                                                (0, De.applyFormat)(l, {
                                                    type: Ue,
                                                    attributes: {
                                                        style: Le(d?.style),
                                                        class: d?.class?.join(" "),
                                                    },
                                                })
                                            );
                                    },
                                })
                            )
                        )
                    );
                },
            });
            var qe = (0, o.createElement)(
                E.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(E.Path, {
                    d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z",
                })
            );
            const $e = "alexa/inline-svg";
            (0, De.registerFormatType)($e, {
                title: (0, k.__)("Inline SVG", "alexa"),
                object: !0,
                tagName: "img",
                className: "has-inline-svg",
                edit: (e) => {
                    const { isActive: t, onChange: n, value: l } = e,
                        [r, a] = (0, o.useState)(!1),
                        [i, s] = (0, o.useState)({
                            string: "",
                            width: "1em",
                            widthDesktop: "1em",
                            alt: "",
                            src: "",
                        });
                    return (0, o.createElement)(
                        F.BlockControls,
                        null,
                        (0, o.createElement)(F.RichTextToolbarButton, {
                            icon: qe,
                            title: (0, k.__)("Inline SVG", "alexa"),
                            isActive: t,
                            shortcutType: "primary",
                            shortcutCharacter: "v",
                            onClick: () => a(!r),
                        }),
                        r &&
                        (0, o.createElement)(
                            v.Toolbar,
                            { className: "alexa-components-toolbar" },
                            (0, o.createElement)(
                                v.Popover,
                                {
                                    position: "bottom center",
                                    className: "alexa-svg-control",
                                    focusOnMount: "container",
                                    onFocusOutside: () => a(!1),
                                },
                                (0, o.createElement)(v.TextareaControl, {
                                    label: (0, k.__)("SVG String", "alexa"),
                                    help: (0, k.__)(
                                        "Paste your SVG string in the field above and then click the button below to insert your image.",
                                        "alexa"
                                    ),
                                    value: i?.string,
                                    placeholder: (0, k.__)(
                                        "Paste your SVG string here",
                                        "alexa"
                                    ),
                                    rows: 20,
                                    onChange: (e) => {
                                        s({ ...i, string: e.replace(/'/g, '"') });
                                    },
                                    style: {
                                        fontFamily:
                                            "var(--wp--preset--font-family--monospace, monospace)",
                                        width: "300px",
                                    },
                                }),
                                (0, o.createElement)("br", null),
                                (0, o.createElement)(v.TextareaControl, {
                                    label: (0, k.__)("Alt Text", "alexa"),
                                    placeholder: (0, k.__)("SVG description", "alexa"),
                                    value: i?.alt,
                                    rows: 2,
                                    onChange: (e) => {
                                        s({ ...i, alt: e });
                                    },
                                    style: { width: "300px" },
                                }),
                                (0, o.createElement)(
                                    v.PanelRow,
                                    null,
                                    (0, o.createElement)(
                                        v.Flex,
                                        null,
                                        (0, o.createElement)(
                                            v.FlexItem,
                                            null,
                                            (0, o.createElement)(v.__experimentalUnitControl, {
                                                label: (0, k.__)("Width Mobile", "alexa"),
                                                value: i?.width,
                                                onChange: (e) => {
                                                    s({ ...i, width: e });
                                                },
                                            })
                                        ),
                                        (0, o.createElement)(
                                            v.FlexItem,
                                            null,
                                            (0, o.createElement)(v.__experimentalUnitControl, {
                                                label: (0, k.__)("Width Desktop", "alexa"),
                                                value: i?.widthDesktop,
                                                onChange: (e) => {
                                                    s({ ...i, widthDesktop: e });
                                                },
                                            })
                                        )
                                    )
                                ),
                                (0, o.createElement)("br", null),
                                (0, o.createElement)(v.Button, {
                                    text: (0, k.__)("Insert SVG", "alexa"),
                                    onClick: () =>
                                        ((e) => {
                                            let t = `-webkit-mask-image:url(${"data:image/svg+xml;utf8," +
                                                encodeURIComponent(e?.string)
                                                })`;
                                            e?.width && (t += `;--width: ${e?.width}`),
                                                e?.widthDesktop &&
                                                (t += `;--width-desktop: ${e?.widthDesktop}`),
                                                n(
                                                    (0, De.insertObject)(l, {
                                                        type: $e,
                                                        attributes: {
                                                            style: t,
                                                            alt: e?.alt,
                                                            role: "presentation",
                                                            src: "",
                                                        },
                                                    })
                                                ),
                                                a(!1);
                                        })(i),
                                })
                            )
                        )
                    );
                },
            });
            var Xe = (0, o.createElement)(
                E.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(E.Path, {
                    d: "M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z",
                })
            );
            const Ye = "alexa/underline",
                Ze = [
                    "none",
                    "solid",
                    "wavy",
                    "dashed",
                    "dotted",
                    "double",
                    "brush",
                    "circle",
                ];
            (0, De.registerFormatType)(Ye, {
                title: (0, k.__)("Underline", "alexa"),
                tagName: "u",
                className: "has-text-underline",
                attributes: { style: "style", class: "class" },
                edit: (e) => {
                    let { isActive: t, value: n, onChange: l } = e;
                    const [r, a] = (0, o.useState)(""),
                        [i, s] = (0, o.useState)(!1);
                    let c = [],
                        u = [];
                    return (
                        n?.formats &&
                        n.formats.forEach((e) => {
                            e &&
                                e.forEach((e) => {
                                    e.type === Ye &&
                                        (e.attributes?.style &&
                                            (c = e.attributes.style.split(";")),
                                            e.attributes?.class &&
                                            (u = e.attributes.class.split(" ")));
                                });
                        }),
                        (0, o.createElement)(
                            F.BlockControls,
                            null,
                            (0, o.createElement)(F.RichTextShortcut, {
                                type: "primary",
                                character: "u",
                                onUse: () => {
                                    l((0, De.toggleFormat)(n, { type: Ye }));
                                },
                            }),
                            (0, o.createElement)(F.RichTextToolbarButton, {
                                icon: Xe,
                                title: (0, k.__)("Underline", "alexa"),
                                isActive: t,
                                shortcutType: "primary",
                                shortcutCharacter: "u",
                                onClick: () => s(!i),
                            }),
                            i &&
                            (0, o.createElement)(
                                v.Toolbar,
                                { className: "alexa-components-toolbar" },
                                (0, o.createElement)(
                                    v.Popover,
                                    {
                                        position: "bottom center",
                                        className: "alexa-underline-format",
                                        focusOnMount: "container",
                                        onFocusOutside: () => s(!1),
                                    },
                                    (0, o.createElement)(
                                        v.__experimentalText,
                                        null,
                                        (0, k.__)("Underline style", "alexa")
                                    ),
                                    (0, o.createElement)("br", null),
                                    (0, o.createElement)(v.SelectControl, {
                                        onChange: (e) => {
                                            var t, r;
                                            "none" === e && l((0, De.removeFormat)(n, Ye)), a(e);
                                            const o = null !== (t = u) && void 0 !== t ? t : [];
                                            o.forEach((e, t) => {
                                                e.includes("is-underline-") && delete i.classes[t];
                                            });
                                            const i = {
                                                classes: [...o, "is-underline-" + e],
                                                styles: [
                                                    ...(null !== (r = c) && void 0 !== r ? r : []),
                                                    "--wp--custom--underline--style:" + e,
                                                ],
                                            };
                                            l(
                                                (0, De.applyFormat)(n, {
                                                    type: Ye,
                                                    attributes: {
                                                        class: i.classes.join(" "),
                                                        style: i.styles.join(";"),
                                                    },
                                                })
                                            );
                                        },
                                        value: r,
                                        options: Ze.map((e) => {
                                            return {
                                                label:
                                                    ((t = e), t.charAt(0).toUpperCase() + t.slice(1)),
                                                value: e,
                                            };
                                            var t;
                                        }),
                                    })
                                )
                            )
                        )
                    );
                },
            });
        })();
})();