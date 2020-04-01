(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{338:function(e,t,a){"use strict";a.r(t);var i=a(29),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"memory-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-optimization"}},[e._v("#")]),e._v(" Memory optimization")]),e._v(" "),a("p",[e._v("In order to provide a better performance, V2Ray has a caching mechanism. It caches part of the traffic data when there are apparent speed differences between upstream and downstream. As a practical example, if you are downloading some videos, the speed from website to your proxy server is 500 Mbps, and the proxy server has only 50 Mbps to your home broadband. V2Ray will download the video to VPS in prior and then relay these data to your desktop computer. By default, V2Ray has a cache size of 10 MBytes per connection (the default cache is now up to 512 KBytes), which means that if the task of downloading opens 32 threads, V2Ray will cache up to 320 MBytes of data. As a result, VPS with only 256 MBytes or even 128 MBytes of memory will suffer from the cache mechanism. Fortunately, the size of the cache can be modified. Reducing the size of the cache would reduce memory usage and is friendly to small memory machines.")]),e._v(" "),a("h2",{attrs:{id:"modify-the-cache-usage-quota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-cache-usage-quota"}},[e._v("#")]),e._v(" Modify the cache usage quota")]),e._v(" "),a("h3",{attrs:{id:"by-editing-the-environmental-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#by-editing-the-environmental-variables"}},[e._v("#")]),e._v(" By editing the environmental variables")]),e._v(" "),a("p",[e._v("(** Note: After multiple versions of iterative optimisations, V2Ray's memory footprint has been dramatically reduced. Now, the default cache size is only 512 KBytes; the cache parameter is not applicable through environment variables. **)")]),e._v(" "),a("p",[e._v("On you VPS, edit /etc/systemd/system/v2ray.service , edit "),a("code",[e._v("ExecStart=/usr/bin/v2ray/v2ray -config /etc/v2ray/config.json")]),e._v("  as  "),a("code",[e._v("ExecStart=/usr/bin/env v2ray.ray.buffer.size=1 /usr/bin/v2ray/v2ray -config /etc/v2ray/config.json")]),e._v(". Then save it, excute the following command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl daemon-reload && sudo systemctl restart v2ray.service\n")])])]),a("p",[e._v("The above v2ray.ray.buffer.size is the cached variable. If it is set to 1, it doesn't matter much (personal feeling, no actual test comparison).")]),e._v(" "),a("h3",{attrs:{id:"change-cache-quota-in-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-cache-quota-in-configuration-file"}},[e._v("#")]),e._v(" Change cache quota in configuration file")]),e._v(" "),a("p",[e._v("In the above modification of the cache size by environment variables, there is a problem that the unit of v2ray.ray.buffer.size is Mbytes, and the minimum can only be changed to 1 Mbytes. If it is changed to 0, it means that the cache is unlimited. However, the cache size can also be modified in the configuration file. The unit is Kbytes. If it is set to 0 in the configuration, it means that the cache is disabled. For those who need to set the cache to be smaller, you can refer to the local policy section of V2Ray official documentation. The configuration is relatively simple. It would not be discussed here.")]),e._v(" "),a("h4",{attrs:{id:"updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[e._v("#")]),e._v(" Updates")]),e._v(" "),a("ul",[a("li",[e._v("2018-05-01 Initial release")]),e._v(" "),a("li",[e._v("2018-08-02 Add modify configuration file quota setting")]),e._v(" "),a("li",[e._v("2018-11-11 v2ray.ray.buffer.size deprecated")])])])}),[],!1,null,null,null);t.default=o.exports}}]);