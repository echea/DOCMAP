webvowl.app = function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var a = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(a.exports, a, a.exports, t),
        a.loaded = !0,
        a.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
} ({
    0 : function(e, t, n) {
        n(285),
        n(287),
        e.exports = n(288)
    },
    6 : function(e, t) {
        e.exports = d3
    },
    58 : function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {},
            e.paths = [], e.children = [], e.webpackPolyfill = 1),
            e
        }
    },
    92 : function(e, t, n) {
        function o(e) {
            return "symbol" == typeof e || a(e) && l.call(e) == r
        }
        var a = n(93),
        r = "[object Symbol]",
        i = Object.prototype,
        l = i.toString;
        e.exports = o
    },
    93 : function(e, t) {
        function n(e) {
            return !! e && "object" == typeof e
        }
        e.exports = n
    },
    117 : function(e, t, n) { (function(e, o) {
            var a = n(118),
            r = {
                "function": !0,
                object: !0
            },
            i = r[typeof t] && t && !t.nodeType ? t: void 0,
            l = r[typeof e] && e && !e.nodeType ? e: void 0,
            s = a(i && l && "object" == typeof o && o),
            c = a(r[typeof self] && self),
            d = a(r[typeof window] && window),
            u = a(r[typeof this] && this),
            p = s || d !== (u && u.window) && d || c || u || Function("return this")();
            e.exports = p
        }).call(t, n(58)(e),
        function() {
            return this
        } ())
    },
    118 : function(e, t) {
        function n(e) {
            return e && e.Object === Object ? e: null
        }
        e.exports = n
    },
    158 : function(e, t, n) {
        var o = n(117),
        a = o.Symbol;
        e.exports = a
    },
    188 : function(e, t, n) {
        function o(e) {
            if ("string" == typeof e) return e;
            if (null == e) return "";
            if (r(e)) return s ? s.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -i ? "-0": t
        }
        var a = n(158),
        r = n(92),
        i = 1 / 0,
        l = a ? a.prototype: void 0,
        s = l ? l.toString: void 0;
        e.exports = o
    },
    285 : function(e, t) {},
    287 : function(e, t) {
        function n() {
            var e, t, n = -1;
            return "Microsoft Internet Explorer" === navigator.appName ? (e = navigator.userAgent, t = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) && (n = parseFloat(RegExp.$1))) : "Netscape" === navigator.appName && (e = navigator.userAgent, t = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) && (n = parseFloat(RegExp.$1))),
            n
        }
        function o() {
            var e = n();
            if (e > 0 && 11 >= e) {
                document.write('<div id="browserCheck">The WebVOWL demo does not work in Internet Explorer. Please use another browser, such as <a href="http://www.mozilla.org/firefox/">Mozilla Firefox</a> or <a href="https://www.google.com/chrome/">Google Chrome</a>, to run the WebVOWL demo.</div>');
                var t = document.getElementById("canvasArea"),
                o = document.getElementById("detailsArea"),
                a = document.getElementById("optionsArea");
                t.className = "hidden",
                o.className = "hidden",
                a.className = "hidden"
            }
        }
        e.exports = o
    },
    288 : function(e, t, n) { (function(t) {
            e.exports = function() {
                function e(e, t, n) {
                    v.reset();
                    var o;
                    if (e && (o = JSON.parse(e), !t)) {
                        var a = o.header ? o.header.title: void 0,
                        s = l.textInLanguage(a);
                        t = s ? s: n
                    }
                    c.setJsonText(e),
                    i.data(o),
                    r.reload(),
                    m.updateOntologyInformation(o, A),
                    c.setFilename(t)
                }
                function o() {
                    var e = t.select(s),
                    n = e.select("svg"),
                    o = window.innerHeight - 40,
                    a = window.innerWidth - .22 * window.innerWidth;
                    e.style("height", o + "px"),
                    n.attr("width", a).attr("height", o),
                    i.width(a).height(o),
                    r.updateStyle()
                }
                var a = {},
                r = webvowl.graph(),
                i = r.graphOptions(),
                l = webvowl.util.languageTools(),
                s = "#graph",
                c = n(289)(r),
                d = n(290)(r),
                u = n(291)(r),
                p = n(292)(r),
                f = n(293)(r),
                v = n(306)(r),
                h = n(307)(r),
                m = n(308)(r),
                g = webvowl.modules.colorExternalsSwitch(r),
                y = webvowl.modules.compactNotationSwitch(r),
                x = webvowl.modules.datatypeFilter(),
                b = webvowl.modules.disjointFilter(),
                w = webvowl.modules.focuser(),
                k = webvowl.modules.nodeDegreeFilter(d),
                C = webvowl.modules.nodeScalingSwitch(r),
                j = webvowl.modules.objectPropertyFilter(),
                S = webvowl.modules.pickAndPin(),
                D = webvowl.modules.selectionDetailsDisplayer(m.updateSelectionInformation),
                A = webvowl.modules.statistics(),
                F = webvowl.modules.subclassFilter(),
                O = webvowl.modules.setOperatorFilter();
                return a.initialize = function() {
                    i.graphContainerSelector(s),
                    i.selectionModules().push(w),
                    i.selectionModules().push(D),
                    i.selectionModules().push(S),
                    i.filterModules().push(A),
                    i.filterModules().push(x),
                    i.filterModules().push(j),
                    i.filterModules().push(F),
                    i.filterModules().push(b),
                    i.filterModules().push(O),
                    i.filterModules().push(C),
                    i.filterModules().push(k),
                    i.filterModules().push(y),
                    i.filterModules().push(g),
                    t.select(window).on("resize", o),
                    c.setup(),
                    u.setup(),
                    d.setup(x, j, F, b, O, k),
                    p.setup(S, C, y, g),
                    v.setup(),
                    m.setup(),
                    f.setup(e),
                    h.setup([u, d, p, w, D, v]),
                    r.start(),
                    o()
                },
                a
            }
        }).call(t, n(6))
    },
    289 : function(e, t, n) { (function(t) {
            e.exports = function(e) {
                function n() {
                    var n, r, i, l = t.select(e.options().graphContainerSelector()).select("svg");
                    a(),
                    s(),
                    n = l.attr("version", 1.1).attr("xmlns", "http://www.w3.org/2000/svg").node().parentNode.innerHTML,
                    n = "<!-- Created with WebVOWL (version " + webvowl.version + "), http://vowl.visualdataweb.org -->\n" + n,
                    r = o(n),
                    i = "data:image/svg+xml;base64," + btoa(r),
                    p.attr("href", i).attr("download", f + ".svg"),
                    c(),
                    d()
                }
                function o(e) {
                    var t, n, o, a = [],
                    r = e.length;
                    for (t = 0; r > t; t++) n = e.charAt(t),
                    o = n.charCodeAt(0),
                    128 > o ? a.push(n) : a.push("&#" + o + ";");
                    return a.join("")
                }
                function a() {
                    r(".text", [{
                        name: "font-family",
                        value: "Helvetica, Arial, sans-serif"
                    },
                    {
                        name: "font-size",
                        value: "12px"
                    }]),
                    r(".subtext", [{
                        name: "font-size",
                        value: "9px"
                    }]),
                    r(".text.instance-count", [{
                        name: "fill",
                        value: "#666"
                    }]),
                    r(".external + text .instance-count", [{
                        name: "fill",
                        value: "#aaa"
                    }]),
                    r(".cardinality", [{
                        name: "font-size",
                        value: "10px"
                    }]),
                    r(".text, .embedded", [{
                        name: "pointer-events",
                        value: "none"
                    }]),
                    r(".class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty", [{
                        name: "fill",
                        value: "#acf"
                    }]),
                    r(".label .datatype, .datatypeproperty", [{
                        name: "fill",
                        value: "#9c6"
                    }]),
                    r(".rdf, .rdfproperty", [{
                        name: "fill",
                        value: "#c9c"
                    }]),
                    r(".literal, .node .datatype", [{
                        name: "fill",
                        value: "#fc3"
                    }]),
                    r(".deprecated, .deprecatedproperty", [{
                        name: "fill",
                        value: "#ccc"
                    }]),
                    r(".external, .externalproperty", [{
                        name: "fill",
                        value: "#36c"
                    }]),
                    r("path, .nofill", [{
                        name: "fill",
                        value: "none"
                    }]),
                    r("marker path", [{
                        name: "fill",
                        value: "#000"
                    }]),
                    r(".class, path, line, .fineline", [{
                        name: "stroke",
                        value: "#000"
                    }]),
                    r(".white, .subclass, .subclassproperty, .external + text", [{
                        name: "fill",
                        value: "#fff"
                    }]),
                    r(".class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused", [{
                        name: "fill",
                        value: "#f00"
                    },
                    {
                        name: "cursor",
                        value: "pointer"
                    }]),
                    r(".focused, path.hovered", [{
                        name: "stroke",
                        value: "#f00"
                    }]),
                    r(".indirect-highlighting, .feature:hover", [{
                        name: "fill",
                        value: "#f90"
                    }]),
                    r(".values-from", [{
                        name: "stroke",
                        value: "#69c"
                    }]),
                    r(".symbol, .values-from.filled", [{
                        name: "fill",
                        value: "#69c"
                    }]),
                    r(".class, path, line", [{
                        name: "stroke-width",
                        value: "2"
                    }]),
                    r(".fineline", [{
                        name: "stroke-width",
                        value: "1"
                    }]),
                    r(".dashed, .anonymous", [{
                        name: "stroke-dasharray",
                        value: "8"
                    }]),
                    r(".dotted", [{
                        name: "stroke-dasharray",
                        value: "3"
                    }]),
                    r("rect.focused, circle.focused", [{
                        name: "stroke-width",
                        value: "4px"
                    }]),
                    r(".nostroke", [{
                        name: "stroke",
                        value: "none"
                    }]),
                    r("marker path", [{
                        name: "stroke-dasharray",
                        value: "100"
                    }])
                }
                function r(e, n) {
                    var o = t.selectAll(e);
                    o.empty() || n.forEach(function(e) {
                        o.each(function() {
                            var n = t.select(this);
                            i(n, e.name) || n.style(e.name, e.value)
                        })
                    })
                }
                function i(e, t) {
                    return "fill" === t && l(e)
                }
                function l(e) {
                    var t = e.datum();
                    return t.backgroundColor && !!t.backgroundColor()
                }
                function s() {
                    t.selectAll(".hidden-in-export").style("display", "none")
                }
                function c() {
                    t.selectAll(".text, .subtext, .text.instance-count, .external + text .instance-count, .cardinality, .text, .embedded, .class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty, .label .datatype, .datatypeproperty, .rdf, .rdfproperty, .literal, .node .datatype, .deprecated, .deprecatedproperty, .external, .externalproperty, path, .nofill, .symbol, .values-from.filled, marker path, .class, path, line, .fineline, .white, .subclass, .subclassproperty, .external + text, .class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused, .focused, path.hovered, .indirect-highlighting, .feature:hover, .values-from, .class, path, line, .fineline, .dashed, .anonymous, .dotted, rect.focused, circle.focused, .nostroke, marker path").each(function() {
                        var e = t.select(this),
                        n = e.node().style;
                        for (var o in n) if (n.hasOwnProperty(o)) {
                            if (i(e, o)) continue;
                            e.style(o, null)
                        }
                    })
                }
                function d() {
                    t.selectAll(".hidden-in-export").style("display", null)
                }
                function u() {
                    if (!h) return alert("No graph data available."),
                    void t.event.preventDefault();
                    var e = "data:text/json;charset=utf-8," + encodeURIComponent(h);
                    v.attr("href", e).attr("download", f + ".json")
                }
                var p, f, v, h, m = {};
                return m.setup = function() {
                    p = t.select("#exportSvg").on("click", n),
                    v = t.select("#exportJson").on("click", u)
                },
                m.setFilename = function(e) {
                    f = e || "export"
                },
                m.setJsonText = function(e) {
                    h = e
                },
                m
            }
        }).call(t, n(6))
    },
    290 : function(e, t, n) { (function(t) {
            e.exports = function(e) {
                function n(n, o, a, r) {
                    var i, s;
                    i = t.select(r).append("div").classed("checkboxContainer", !0),
                    s = i.append("input").classed("filterCheckbox", !0).attr("id", o + "FilterCheckbox").attr("type", "checkbox").property("checked", n.enabled()),
                    l.push({
                        checkbox: s,
                        defaultState: n.enabled()
                    }),
                    s.on("click",
                    function() {
                        var t = s.property("checked");
                        n.enabled(t),
                        e.update()
                    }),
                    i.append("label").attr("for", o + "FilterCheckbox").text(a)
                }
                function o(t, n) {
                    t.setMaxDegreeSetter(function(e) {
                        r.attr("max", e),
                        a(r, Math.min(e, r.property("value")))
                    }),
                    t.setDegreeGetter(function() {
                        return + r.property("value")
                    }),
                    t.setDegreeSetter(function(e) {
                        a(r, e)
                    });
                    var o, i;
                    o = n.append("div").classed("distanceSliderContainer", !0),
                    r = o.append("input").attr("id", "nodeDegreeDistanceSlider").attr("type", "range").attr("min", 0).attr("step", 1),
                    o.append("label").classed("description", !0).attr("for", "nodeDegreeDistanceSlider").text("Degree of collapsing"),
                    i = o.append("label").classed("value", !0).attr("for", "nodeDegreeDistanceSlider").text(0),
                    r.on("change",
                    function() {
                        e.update()
                    }),
                    r.on("input",
                    function() {
                        var e = r.property("value");
                        i.text(e)
                    })
                }
                function a(e, t) {
                    e.property("value", t).on("input")()
                }
                var r, i = {},
                l = [],
                s = t.select("#filterOption a"),
                c = t.select("#nodeDegreeFilteringOption");
                return i.setup = function(e, t, a, r, l, d) {
                    s.on("mouseleave",
                    function() {
                        i.highlightForDegreeSlider(!1)
                    }),
                    n(e, "datatype", "Datatype properties", "#datatypeFilteringOption"),
                    n(t, "objectProperty", "Object properties", "#objectPropertyFilteringOption"),
                    n(a, "subclass", "Solitary subclasses", "#subclassFilteringOption"),
                    n(r, "disjoint", "Class disjointness", "#disjointFilteringOption"),
                    n(l, "setoperator", "Set operators", "#setOperatorFilteringOption"),
                    o(d, c)
                },
                i.reset = function() {
                    l.forEach(function(e) {
                        var t = e.checkbox,
                        n = e.defaultState,
                        o = t.property("checked");
                        o !== n && (t.property("checked", n), t.on("click")())
                    }),
                    a(r, 0),
                    r.on("change")()
                },
                i.highlightForDegreeSlider = function(e) {
                    arguments.length || (e = !0),
                    s.classed("highlighted", e),
                    c.classed("highlighted", e)
                },
                i
            }
        }).call(t, n(6))
    },
    291 : function(e, t, n) { (function(t) {
            e.exports = function(e) {
                function n(n, a, i, l) {
                    var s, c, d = l();
                    s = t.select(n).append("div").datum({
                        distanceFunction: l
                    }).classed("distanceSliderContainer", !0);
                    var u = s.append("input").attr("id", a + "DistanceSlider").attr("type", "range").attr("min", 10).attr("max", 600).attr("value", l()).attr("step", 10);
                    s.append("label").classed("description", !0).attr("for", a + "DistanceSlider").text(i),
                    c = s.append("label").classed("value", !0).attr("for", a + "DistanceSlider").text(l()),
                    r.push(u),
                    u.on("input",
                    function() {
                        var t = u.property("value");
                        l(t),
                        o(d),
                        c.text(t),
                        e.updateStyle()
                    })
                }
                function o(e) {
                    var t = Math.max(i.classDistance(), i.datatypeDistance()),
                    n = t / e,
                    o = l * n;
                    i.charge(o)
                }
                var a = {},
                r = [],
                i = e.graphOptions(),
                l = i.charge();
                return a.setup = function() {
                    n("#classSliderOption", "class", "Class distance", i.classDistance),
                    n("#datatypeSliderOption", "datatype", "Datatype distance", i.datatypeDistance)
                },
                a.reset = function() {
                    r.forEach(function(e) {
                        e.property("value",
                        function(e) {
                            return e.distanceFunction()
                        }),
                        e.on("input")()
                    })
                },
                a
            }
        }).call(t, n(6))
    },
    292 : function(e, t, n) { (function(t) {
            e.exports = function(e) {
                function n(n, o, a, r, i) {
                    var l, s;
                    return l = t.select(r).append("div").classed("checkboxContainer", !0).datum({
                        module: n,
                        defaultState: n.enabled()
                    }),
                    s = l.append("input").classed("moduleCheckbox", !0).attr("id", o + "ModuleCheckbox").attr("type", "checkbox").property("checked", n.enabled()),
                    d.push(s),
                    s.on("click",
                    function(t) {
                        var n = s.property("checked");
                        t.module.enabled(n),
                        i && e.update()
                    }),
                    l.append("label").attr("for", o + "ModuleCheckbox").text(a),
                    l
                }
                function o(t, n) {
                    var o = t.append("button").datum({
                        active: !1
                    }).classed("color-mode-switch", !0);
                    return a(o, n),
                    o.on("click",
                    function() {
                        var t = o.datum();
                        t.active = !t.active,
                        a(o, n),
                        n.enabled() && e.update()
                    }),
                    o
                }
                function a(e, t) {
                    var n = e.datum().active,
                    o = r(n);
                    e.classed("active", n).text(o.text),
                    t && t.colorModeType(o.type)
                }
                function r(e) {
                    return e ? s: l
                }
                var i, l = {
                    text: "Same color",
                    type: "same"
                },
                s = {
                    text: "Color gradient",
                    type: "gradient"
                },
                c = {},
                d = [];
                return c.setup = function(e, t, a, r) {
                    n(e, "pickandpin", "Pick & pin", "#pickAndPinOption", !1),
                    n(t, "nodescaling", "Node scaling", "#nodeScalingOption", !0),
                    n(a, "compactnotation", "Compact notation", "#compactNotationOption", !0);
                    var l = n(r, "colorexternals", "Color externals", "#colorExternalsOption", !0);
                    i = o(l, r)
                },
                c.reset = function() {
                    d.forEach(function(e) {
                        var t = e.datum().defaultState,
                        n = e.property("checked");
                        n !== t && (e.property("checked", t), e.on("click")(e.datum())),
                        e.datum().module.reset()
                    }),
                    i.datum().active = !0,
                    i.on("click")()
                },
                c
            }
        }).call(t, n(6))
    },
    293 : function(e, t, n) { (function(t) {
            var o = n(294);
            e.exports = function() {
                function e() {
                    r(),
                    t.select(window).on("hashchange",
                    function() {
                        var e = t.event.oldURL,
                        n = t.event.newURL;
                        if (e !== n) {
                            if (n === e + "#") return;
                            a(),
                            r()
                        }
                    }),
                    a()
                }
                function a() {
                    t.selectAll("#optionsMenu > li > a").attr("href", location.hash || "#")
                }
                function r() {
                    var e = location.hash.slice(1);
                    e || (e = b);
                    var o = t.selectAll(".select li").classed("selected-ontology", !1),
                    a = "iri=",
                    r = "file=";
                    if (e.substr(0, r.length) === r) {
                        var l = decodeURIComponent(e.slice(r.length));
                        c(l)
                    } else if (e.substr(0, a.length) === a) {
                        var s = decodeURIComponent(e.slice(a.length));
                        i("convert?iri=" + encodeURIComponent(s), s),
                        t.select("#converter-option").classed("selected-ontology", !0)
                    } else i(n(296)("./" + e + ".json"), e),
                    o.each(function() {
                        var n = t.select(this);
                        n.select("a").size() > 0 && n.select("a").attr("href") === "#" + e && n.classed("selected-ontology", !0)
                    })
                }
                function i(e, n) {
                    var o = C[e],
                    a = n.replace(/\/$/g, ""),
                    r = a.slice(a.lastIndexOf("/") + 1);
                    o ? (y(o, void 0, r), h(!0)) : (v(), t.xhr(e, "application/json",
                    function(t, n) {
                        var o, a, i = !t;
                        i ? (a = n.responseText, C[e] = a) : 404 === t.status && (o = "Connection to the OWL2VOWL interface could not be established."),
                        y(a, void 0, r),
                        h(i, t ? t.response: void 0, o),
                        m()
                    }))
                }
                function l() {
                    var e = t.select("#iri-converter-button"),
                    n = t.select("#iri-converter-input");
                    n.on("input",
                    function() {
                        f();
                        var t = "" === n.property("value");
                        e.attr("disabled", t || void 0)
                    }).on("click",
                    function() {
                        f()
                    }),
                    t.select("#iri-converter-form").on("submit",
                    function() {
                        return location.hash = "iri=" + n.property("value"),
                        n.property("value", ""),
                        n.on("input")(),
                        t.event.preventDefault(),
                        !1
                    })
                }
                function s() {
                    var e = t.select("#file-converter-input"),
                    n = t.select("#file-converter-label"),
                    o = t.select("#file-converter-button");
                    e.on("change",
                    function() {
                        var t = e.property("files");
                        t.length <= 0 ? (n.text("Select ontology file"), o.property("disabled", !0)) : (n.text(t[0].name), o.property("disabled", !1), f())
                    }),
                    o.on("click",
                    function() {
                        var t = e.property("files")[0];
                        if (!t) return ! 1;
                        var n = "file=" + t.name;
                        location.hash === "#" + n ? c() : location.hash = n
                    })
                }
                function c(e) {
                    var n = C[e];
                    if (n) return y(n, e),
                    void h(!0);
                    var o = t.select("#file-converter-input").property("files")[0];
                    return ! o || e && e !== o.name ? (y(void 0, void 0), void h(!1, void 0, 'No cached version of "' + e + '" was found. Please reupload the file.')) : (e = o.name, void(e.match(/\.json$/) ? d(o, e) : u(o, e)))
                }
                function d(e, t) {
                    var n = new FileReader;
                    n.readAsText(e),
                    n.onload = function() {
                        p(n.result, t),
                        h(!0)
                    }
                }
                function u(e, n) {
                    var o = t.select("#file-converter-button");
                    v(),
                    o.property("disabled", !0);
                    var a = new FormData;
                    a.append("ontology", e);
                    var r = new XMLHttpRequest;
                    r.open("POST", "convert", !0),
                    r.onload = function() {
                        o.property("disabled", !1),
                        200 === r.status ? (p(r.responseText, n), C[n] = r.responseText) : (y(void 0, void 0), h(!1, r.responseText)),
                        m()
                    },
                    r.send(a)
                }
                function p(e, t) {
                    var n = t.split(".")[0];
                    y(e, n)
                }
                function f() {
                    function e() {
                        n.style("display", void 0),
                        clearTimeout(g),
                        t.select(window).on("click", void 0).on("keydown", void 0),
                        n.on("mouseover", void 0)
                    }
                    var n = t.select("#select .toolTipMenu");
                    n.on("click",
                    function() {
                        t.event.stopPropagation()
                    }).on("keydown",
                    function() {
                        t.event.stopPropagation()
                    }),
                    n.style("display", "block"),
                    clearTimeout(g),
                    g = setTimeout(function() {
                        e()
                    },
                    3e3),
                    t.select(window).on("click",
                    function() {
                        e()
                    }).on("keydown",
                    function() {
                        e()
                    }),
                    n.on("mouseover",
                    function() {
                        e()
                    })
                }
                function v() {
                    w.classed("hidden", !0),
                    k.classed("hidden", !1)
                }
                function h(e, n, a) {
                    w.classed("hidden", e);
                    var r = t.select("#error-info");
                    a ? r.text(a) : r.html('Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target="_blank"href="http://mowl-power.cs.man.ac.uk:8080/validator/">OWL Validator</a>.');
                    var i = !n,
                    l = t.select("#error-description-button").classed("hidden", i).datum().open;
                    t.select("#error-description-container").classed("hidden", i || !l),
                    t.select("#error-description").text(o(n))
                }
                function m() {
                    k.classed("hidden", !0)
                }
                var g, y, x = {},
                b = "foaf",
                w = t.select("#loading-error"),
                k = t.select("#loading-progress"),
                C = {};
                return x.setup = function(n) {
                    y = n,
                    l(),
                    s();
                    var o = t.select("#error-description-button").datum({
                        open: !1
                    });
                    o.on("click",
                    function(e) {
                        var n = t.select("#error-description-container"),
                        o = t.select(this);
                        e.open = !e.open;
                        var a = e.open;
                        a ? o.text("Hide error details") : o.text("Show error details"),
                        n.classed("hidden", !a)
                    }),
                    e()
                },
                x
            }
        }).call(t, n(6))
    },
    294 : function(e, t, n) {
        function o(e) {
            return e = a(e),
            e && l.test(e) ? e.replace(i, r) : e
        }
        var a = n(188),
        r = n(295),
        i = /&(?:amp|lt|gt|quot|#39|#96);/g,
        l = RegExp(i.source);
        e.exports = o
    },
    295 : function(e, t) {
        function n(e) {
            return o[e]
        }
        var o = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        };
        e.exports = n
    },
    296 : function(e, t, n) {
        function o(e) {
            return n(a(e))
        }
        function a(e) {
            return r[e] ||
            function() {
                throw new Error("Cannot find module '" + e + "'.")
            } ()
        }
        var r = {
            "./benchmark.json": 297,
            "./docu.json": 298,
            "./foaf.json": 299,
            "./goodrelations.json": 300,
            "./muto.json": 301,
            "./ontovibe.json": 302,
            "./personasonto.json": 303,
            "./sioc.json": 304,
            "./template.json": 305
        };
        o.keys = function() {
            return Object.keys(r)
        },
        o.resolve = a,
        e.exports = o,
        o.id = 296
    },
    297 : function(e, t, n) {
        e.exports = n.p + "data/benchmark.json?d80f9a055584689d6a1dca604c5aaaf7"
    },
    298 : function(e, t, n) {
        e.exports = "/static/data/docu.json"
    },
    299 : function(e, t, n) {
        e.exports = "/static/data/foaf.json"
    },
    300 : function(e, t, n) {
        e.exports = n.p + "data/goodrelations.json?d78732ae60130622560e1132e2486fdc"
    },
    301 : function(e, t, n) {
        e.exports = n.p + "data/muto.json?98f40b4c0a0f47b365b6a882fff91c5b"
    },
    302 : function(e, t, n) {
        e.exports = n.p + "data/ontovibe.json?1f7da1c02cc8626a2866f36224e709f2"
    },
    303 : function(e, t, n) {
        e.exports = n.p + "data/personasonto.json?08cf11afba2a6346fc1ed959382f1af7"
    },
    304 : function(e, t, n) {
        e.exports = n.p + "data/sioc.json?f0c5510df5c9bfd0586e38f5fb26541f"
    },
    305 : function(e, t, n) {
        e.exports = n.p + "data/template.json?fcb0957581dd99fe6e67635fae53f180"
    },
    306 : function(e, t, n) { (function(t) {
            e.exports = function(e) {
                function n() {
                    o(),
                    a()
                }
                function o() {
                    r.classed("paused",
                    function(e) {
                        return e.paused
                    })
                }
                function a() {
                    r.datum().paused ? r.text("Resume") : r.text("Pause")
                }
                var r, i = {};
                return i.setup = function() {
                    r = t.select("#pause-button").datum({
                        paused: !1
                    }).on("click",
                    function(t) {
                        e.paused(!t.paused),
                        t.paused = !t.paused,
                        n()
                    }),
                    n()
                },
                i.reset = function() {
                    r.datum().paused = !1,
                    e.paused(!1),
                    n()
                },
                i
            }
        }).call(t, n(6))
    },
    307 : function(e, t, n) { (function(t) {
            e.exports = function(e) {
                function n() {
                    r.classDistance(i.classDistance()),
                    r.datatypeDistance(i.datatypeDistance()),
                    r.charge(i.charge()),
                    r.gravity(i.gravity()),
                    r.linkStrength(i.linkStrength()),
                    e.reset(),
                    o.forEach(function(e) {
                        e.reset()
                    }),
                    e.updateStyle()
                }
                var o, a = {},
                r = e.graphOptions(),
                i = webvowl.options();
                return a.setup = function(e) {
                    o = e,
                    t.select("#reset-button").on("click", n)
                },
                a
            }
        }).call(t, n(6))
    },
    308 : function(e, t, n) { (function(t) {
            e.exports = function(e) {
                function n() {
                    function e(e) {
                        e.classed("hidden", !0)
                    }
                    function n(e) {
                        e.classed("hidden", !1)
                    }
                    var o = t.selectAll(".accordion-trigger");
                    e(t.selectAll(".accordion-trigger:not(.accordion-trigger-active) + div")),
                    o.on("click",
                    function() {
                        var o = t.select(this),
                        a = t.selectAll(".accordion-trigger-active");
                        o.classed("accordion-trigger-active") ? (e(t.select(o.node().nextElementSibling)), o.classed("accordion-trigger-active", !1)) : (e(t.selectAll(".accordion-trigger-active + div")), a.classed("accordion-trigger-active", !1), n(t.select(o.node().nextElementSibling)), o.classed("accordion-trigger-active", !0))
                    })
                }
                function o(n) {
                    n = n || [],
                    n.sort(function(e, t) {
                        return e === webvowl.util.constants().LANG_IRIBASED ? -1 : t === webvowl.util.constants().LANG_IRIBASED ? 1 : e === webvowl.util.constants().LANG_UNDEFINED ? -1 : t === webvowl.util.constants().LANG_UNDEFINED ? 1 : e.localeCompare(t)
                    });
                    var o = t.select("#language").on("change",
                    function() {
                        e.language(t.event.target.value),
                        r(),
                        C.updateSelectionInformation(k)
                    });
                    o.selectAll("option").remove(),
                    o.selectAll("option").data(n).enter().append("option").attr("value",
                    function(e) {
                        return e
                    }).text(function(e) {
                        return e
                    }),
                    a(o, n, "en") || a(o, n, webvowl.util.constants().LANG_UNDEFINED) || a(o, n, webvowl.util.constants().LANG_IRIBASED)
                }
                function a(t, n, o) {
                    var a = n.indexOf(o);
                    return a >= 0 ? (t.property("selectedIndex", a), e.language(o), !0) : !1
                }
                function r() {
                    var n = j.textInLanguage(w.title, e.language());
                    t.select("#title").text(n || "No title available"),
                    t.select("#about").attr("href", w.iri).attr("target", "_blank").text(w.iri),
                    t.select("#version").text(w.version || "--");
                    var o = w.author;
                    "string" == typeof o ? t.select("#authors").text(o) : o instanceof Array ? t.select("#authors").text(o.join(", ")) : t.select("#authors").text("--");
                    var a = j.textInLanguage(w.description, e.language());
                    t.select("#description").text(a || "No description available.")
                }
                function i(e, n) {
                    e = e || {},
                    t.select("#classCount").text(e.classCount || n.classCount()),
                    t.select("#objectPropertyCount").text(e.objectPropertyCount || n.objectPropertyCount()),
                    t.select("#datatypePropertyCount").text(e.datatypePropertyCount || n.datatypePropertyCount()),
                    t.select("#individualCount").text(e.totalIndividualCount || n.totalIndividualCount()),
                    t.select("#nodeCount").text(n.nodeCount()),
                    t.select("#edgeCount").text(n.edgeCount())
                }
                function l(e) {
                    var n = t.select("#ontology-metadata");
                    n.selectAll("*").remove(),
                    s(n, e),
                    n.selectAll(".annotation").size() <= 0 && n.append("p").text("No annotations available.")
                }
                function s(e, n) {
                    n = n || {};
                    var o = [];
                    for (var a in n) n.hasOwnProperty(a) && o.push(n[a][0]);
                    e.selectAll(".annotation").remove(),
                    e.selectAll(".annotation").data(o).enter().append("p").classed("annotation", !0).classed("statisticDetails", !0).text(function(e) {
                        return e.identifier + ":"
                    }).append("span").each(function(e) {
                        v(t.select(this), e.value, "iri" === e.type ? e.value: void 0)
                    })
                }
                function c() {
                    d(!1, !1, !0)
                }
                function d(e, n, o) {
                    t.select("#classSelectionInformation").classed("hidden", !e),
                    t.select("#propertySelectionInformation").classed("hidden", !n),
                    t.select("#noSelectionInformation").classed("hidden", !o)
                }
                function u(e) {
                    p(),
                    f(t.select("#propname"), e.labelForCurrentLanguage(), e.iri()),
                    t.select("#typeProp").text(e.type()),
                    void 0 !== e.inverse() ? (t.select("#inverse").classed("hidden", !1), f(t.select("#inverse span"), e.inverse().labelForCurrentLanguage(), e.inverse().iri())) : t.select("#inverse").classed("hidden", !0);
                    var n = t.select("#propEquivUri");
                    x(n, e.equivalents()),
                    x(t.select("#subproperties"), e.subproperties()),
                    x(t.select("#superproperties"), e.superproperties()),
                    void 0 !== e.minCardinality() ? (t.select("#infoCardinality").classed("hidden", !0), t.select("#minCardinality").classed("hidden", !1), t.select("#minCardinality span").text(e.minCardinality()), t.select("#maxCardinality").classed("hidden", !1), void 0 !== e.maxCardinality() ? t.select("#maxCardinality span").text(e.maxCardinality()) : t.select("#maxCardinality span").text("*")) : void 0 !== e.cardinality() ? (t.select("#minCardinality").classed("hidden", !0), t.select("#maxCardinality").classed("hidden", !0), t.select("#infoCardinality").classed("hidden", !1), t.select("#infoCardinality span").text(e.cardinality())) : (t.select("#infoCardinality").classed("hidden", !0), t.select("#minCardinality").classed("hidden", !0), t.select("#maxCardinality").classed("hidden", !0)),
                    f(t.select("#domain"), e.domain().labelForCurrentLanguage(), e.domain().iri()),
                    f(t.select("#range"), e.range().labelForCurrentLanguage(), e.range().iri()),
                    h(e.attributes(), t.select("#propAttributes")),
                    b(t.select("#propDescription"), e.descriptionForCurrentLanguage()),
                    b(t.select("#propComment"), e.commentForCurrentLanguage()),
                    s(t.select("#propertySelectionInformation"), e.annotations())
                }
                function p() {
                    d(!1, !0, !1)
                }
                function f(e, n, o) {
                    var a = t.select(e.node().parentNode);
                    n ? (e.selectAll("*").remove(), v(e, n, o), a.classed("hidden", !1)) : a.classed("hidden", !0)
                }
                function v(e, t, n) {
                    var o;
                    o = n ? e.append("a").attr("href", n).attr("title", n).attr("target", "_blank") : e.append("span"),
                    o.text(t)
                }
                function h(e, n) {
                    var o = t.select(n.node().parentNode);
                    e && e.length > 0 && (m("object", e), m("datatype", e), m("rdf", e)),
                    e && e.length > 0 ? (n.text(e.join(", ")), o.classed("hidden", !1)) : o.classed("hidden", !0)
                }
                function m(e, t) {
                    var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1)
                }
                function g(e) {
                    y(),
                    f(t.select("#name"), e.labelForCurrentLanguage(), e.iri());
                    var n = t.select("#classEquivUri");
                    x(n, e.equivalents()),
                    t.select("#typeNode").text(e.type()),
                    x(t.select("#individuals"), e.individuals());
                    var o = t.select("#disjointNodes"),
                    a = t.select(o.node().parentNode);
                    void 0 !== e.disjointWith() ? (o.selectAll("*").remove(), e.disjointWith().forEach(function(e, t) {
                        t > 0 && o.append("span").text(", "),
                        v(o, e.labelForCurrentLanguage(), e.iri())
                    }), a.classed("hidden", !1)) : a.classed("hidden", !0),
                    h(e.attributes(), t.select("#classAttributes")),
                    b(t.select("#nodeDescription"), e.descriptionForCurrentLanguage()),
                    b(t.select("#nodeComment"), e.commentForCurrentLanguage()),
                    s(t.select("#classSelectionInformation"), e.annotations())
                }
                function y() {
                    d(!0, !1, !1)
                }
                function x(e, n) {
                    var o = t.select(e.node().parentNode);
                    n && n.length ? (e.selectAll("*").remove(), n.forEach(function(t, n) {
                        n > 0 && e.append("span").text(", "),
                        v(e, t.labelForCurrentLanguage(), t.iri())
                    }), o.classed("hidden", !1)) : o.classed("hidden", !0)
                }
                function b(e, n) {
                    var o = t.select(e.node().parentNode),
                    a = !!n;
                    n && e.text(n),
                    o.classed("hidden", !a)
                }
                var w, k, C = {},
                j = webvowl.util.languageTools(),
                S = webvowl.util.elementTools();
                return C.setup = function() {
                    n()
                },
                C.updateOntologyInformation = function(e, t) {
                    e = e || {},
                    w = e.header || {},
                    r(),
                    i(e.metrics, t),
                    l(w.other),
                    C.updateSelectionInformation(void 0),
                    o(w.languages)
                },
                C.updateSelectionInformation = function(e) {
                    if (k = e, !t.event || !t.event.defaultPrevented) {
                        var n = t.select("#selection-details-trigger").classed("accordion-trigger-active");
                        if (e && !n) t.select("#selection-details-trigger").node().click();
                        else if (!e && n) return void c();
                        S.isProperty(e) ? u(e) : S.isNode(e) && g(e)
                    }
                },
                C
            }
        }).call(t, n(6))
    }
});