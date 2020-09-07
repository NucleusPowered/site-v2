var d = (function() {

    var cookieEntry = "v2-perm-type";
    var preferredPermission = "LuckPerms";

    // Permission command data
    var permissions = {
        PermissionsEx: {
            url: "https://forums.spongepowered.org/t/permissionsex-v2-0-api-5/6198",
            docs: "https://github.com/PEXPlugins/PermissionsEx/tree/master/doc",
            github: "https://github.com/PEXPlugins/PermissionsEx",
            user: "/pex user %user% permission %perm% 1",
            group: "/pex group %user% permission %perm% 1",
            userOption: "/pex user %user% option %option% %value%",
            groupOption: "/pex group %user% option %option% %value%"
        },
        LuckPerms: {
            url: "https://ore.spongepowered.org/Luck/LuckPerms",
            docs: "https://github.com/lucko/LuckPerms/wiki",
            github: "https://github.com/lucko/LuckPerms",
            user: "/lp user %user% permission set %perm% true",
            group: "/lp group %user% permission set %perm% true",
            userOption: "/lp user %user% meta set %option% %value%",
            groupOption: "/lp group %user% meta set %option% %value%",
            userPrefix: "/lp user %user% meta addprefix [priority] %value%", // LuckPerms has a different handler.
            groupPrefix: "/lp group %user% meta addprefix [priority] %value%" // LuckPerms has a different handler.
        }
    };

    // (Some of) these quotes are from an old server website I used to run. They are a throwback to then
    var quotes = [
        "Nucleus, it's what's for dinner!", // Austin Powers - The Spy Who Shagged Me
        "Just a spoonful of Nucleus makes the medicine go down.", // Mary Poppins
        "Nucleus: The plugin that is never gonna give you up, nor let you down!",
        "Nucleus: Where you buy one, you get one free. I said, you buy one, you get one free!",
        "Nucleus: Have no fear, the Security Duck is here!",
        "Nucleus: Or maybe not, who knows?",
        "Nucleus: And that, as they say, is that.",
        "Nucleus: Eliminating the Kenco Curse, one step at a time.",
        "Nucleus: Loved for many things. But not the puns. Never the puns.",
        "Nucleus: The answer to the question, \"Which came first, the chicken or the egg?\"",
        "Nucleus: Where Rick Astley manages to get through with unanimous support. (We\'re never going to give him up!)",
        "Nucleus: Where rivers are big. Unless they are small rivers. Then they are quite small.",
        "Nucleus: Where Wednesday hasn\'t been seen since Thursday.",
        "To Nucleus... and beyond!", // Toy Story
        "May the Nucleus be with you!", // Star Wars
        "The Nucleus never bothered me anyway", // Frozen
        "Nucleus: It'll load. Eventually.",
        "Nucleus: it's the other, other white meat!", // Austin Powers - The Spy Who Shagged Me
        "Know this, Luke... I am your Nucleus!", // Star Wars
        "Nucleus. No commercials, NO MERCY!", // Anchorman
        "Nucleus: It's one louder, isn't it?", // Spinal Tap
        "Nucleus: It goes up to 11.", // Spinal Tap
        "The time-traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: Nucleus!", // Back to the Future: Part II
        "PRAISE NUCLEUS", // Guild Wars 2, Path of Fire (everyone seems to praise Joko)
        "For the glory of Nucleus", // NieR Automata
        "With-Nucleus-by-my-side", // Final Fantasy X, there is a moment where Tidus says "with Yuna by my side" rather quickly...
        "To right the countless wrongs of our days, we shine this light of true redemption, that this place may become as paradise. Oh, what a wonderful Nucleus such would be..." // The World Ends With You
    ];

    var recalcPermissionBoxes = function(objectToUse) {
        // Specification, class="permissioncommand", data-cmd="user,group" - where the first one that exists is used.
        // data-var-* - replacement tokens.
        $('.permissioncommand').each(function(index, element) {
            var el = $(element);
            var types = el.attr("data-cmd").split(',');
            var arrayLength = types.length;
            var cmd = null;
            for (var i = 0; i < arrayLength; i++) {
                if (objectToUse[types[i]] !== undefined || objectToUse[types[i]] != null) {
                    cmd = objectToUse[types[i]];
                    break;
                }
            }

            if (cmd == null) {
                el.html("<em>Unable to load.</em>")
                return;
            }

            $.each(getReplacements(el), function(index, val) {
                cmd = cmd.replace(new RegExp(val.key, "g"), val.value);
            });

            $(element).html(cmd)
        });
    };

    var getReplacements = function($node) {
        var attrs = [];
        $.each( $node[0].attributes, function ( index, attribute ) {
            if (attribute.name.startsWith("data-var-")) {
                var s = "%" + attribute.name.replace(/data-var-/g, '') + "%";
                attrs.push({key: s, value: attribute.value});
            }
        });

        return attrs;
    };

    var onPermChangeClick = function(object, type) {
        document.cookie = cookieEntry + "=" + type + ";samesite=strict;path=/";
        recalcPermissionBoxes(object);
        $("#permswitchbtn").text("Permissions: " + type);
        $("a[data-permtype]").removeClass("active");
        $("a[data-permtype='"+ type +"']").addClass("active");
    };

    var regen = function() {
        var ra = Math.floor((Math.random() * quotes.length));
        $('#qs-quote').text(quotes[ra]);
    };

    var initPerm = function() {
        var perm = getPermissionCookie();
        var p = permissions[perm];
        if (p === undefined) {
            p = permissions[preferredPermission];
        }
        onPermChangeClick(p, perm);

        var string = "";
        var keys = getKeys(permissions);
        for(var i=0; i< keys.length; i++) {
            // <button type="button" class="btn btn-default">
            var type = perm === keys[i];
            if (type) {
                string += "<a class=\"dropdown-item active\" href=\"#\" data-permtype=\"" + keys[i] + "\">" + keys[i] + "</a>"
            } else {
                string += "<a class=\"dropdown-item\" href=\"#\" data-permtype=\"" + keys[i] + "\">" + keys[i] + "</a>"
            }
        }

        $("#permplugins").html(string)
    };

    var getPermissionCookie = function() {
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cookieEntry + "=") == 0) {
                return c.substring((cookieEntry + "=").length,c.length);
            }
        }
        return preferredPermission;
    };

    // http://stackoverflow.com/a/16837352
    var getKeys = function(obj) {
        var keys = [];
        for(key in obj) {
            keys.push(key);
        }

        return keys;
    };

    var runScrollLogic = function() {
        let h = $("#pageheader");
        if (h.length !== 0) {
            // Top banner
            if (h[0].getBoundingClientRect().top > 10 && $(".pageheadertop:hidden").length === 0) {
                $(".pageheadertop").fadeOut(200, function () {
                    $(".doclinksec").fadeIn(200);
                });
            } else if (h[0].getBoundingClientRect().top <= 10 && $(".pageheadertop:visible").length === 0) {
                $(".doclinksec").fadeOut(200, function () {
                    $(".pageheadertop").fadeIn(200);
                });
            }
        }

        // Re-adjust size on right hand side.
        let rhs = $(".toc-wrap");
        if (rhs.length !== 0) {
            // Get the top of the box
            let parent = $(".toc-l");
            let bounding = parent[0].getBoundingClientRect();
            let bottom = bounding.bottom;
            let top = bounding.top;
            let cssTop = parseInt(rhs.css("top"), 10);
            let txt;
            let h3h = Math.ceil($(".toc-l h3")[0].getBoundingClientRect().height);
            let tt = $(".toc-wrap-a");
            if (bottom > (window.innerHeight || document.documentElement.clientHeight)) {
                txt = "100vh";
            } else {
                txt = bottom.toString() + "px";
            }
            if (top > cssTop) {
                rhs.css("max-height", "calc("  + txt + " - " + (top + 15) + "px)");
                tt.css("max-height", "calc("  + txt + " - " + (top + 15 ) + "px - " + (h3h + 10) + "px)");
            } else {
                // bottom on screen
                rhs.css("max-height", "calc(" + txt + " - " + (cssTop + 15) + "px");
                tt.css("max-height", "calc(" + txt + " - " + (cssTop + 15) + "px - " + (h3h + 10) + "px)");
            }

           //.css("max-height", (t - h3h) + "px");
        }
    };

    return {
        init: function() {
            regen();
            initPerm();
            $('#qs-quote').click(function() {
                regen();
            });

            $('#permplugins a').click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                var type = $(e.target).attr("data-permtype");
                if (type !== undefined) {
                    if (permissions[type] !== undefined) {
                        onPermChangeClick(permissions[type], type);
                    }
                }
            });
//pageheader
            var header = $(".toplinesticky");
            if (header.length > 0) {
                runScrollLogic();
                document.addEventListener(
                    'scroll',
                    function(e) { runScrollLogic(); },
                    { passive: true });
            }
        }
    }

})();

// On page complete.
$(document).ready(function() {
    d.init();
});
