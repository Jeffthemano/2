(function(a) {
    var d = window.AmazonUIPageJS || window.P,
        e = d._namespace || d.attributeErrors,
        b = e ? e("AuthenticationPortalInlineAssets", "") : d;
    b.guardFatal ? b.guardFatal(a)(b, window) : b.execute(function() {
        a(b, window)
    })
})(function(a, d, e) {
    a.when("A", "ready").register("cross-domain-sso", function(b) {
        var c = b.state("central-identity-provider-state");
        if (c && c.sloDomainsToPing && Array.isArray(c.sloDomainsToPing))
            for (var c = c.sloDomainsToPing, a = 0; a < c.length; a++) 0 < c[a].length && b.post("https://" + c[a] + "/ap/sso/clear", {
                withCredentials: !0
            })
    })
});