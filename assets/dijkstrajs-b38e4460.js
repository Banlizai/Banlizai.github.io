var r,t={};r={single_source_shortest_paths:function(t,e,o){var s={},u={};u[e]=0;var n,i,a,h,p,f,_,c=r.PriorityQueue.make();for(c.push(e,0);!c.empty();)for(a in i=(n=c.pop()).value,h=n.cost,p=t[i]||{})p.hasOwnProperty(a)&&(f=h+p[a],_=u[a],(void 0===u[a]||_>f)&&(u[a]=f,c.push(a,f),s[a]=i));if(void 0!==o&&void 0===u[o]){var v=["Could not find a path from ",e," to ",o,"."].join("");throw new Error(v)}return s},extract_shortest_path_from_predecessor_list:function(r,t){for(var e=[],o=t;o;)e.push(o),r[o],o=r[o];return e.reverse(),e},find_path:function(t,e,o){var s=r.single_source_shortest_paths(t,e,o);return r.extract_shortest_path_from_predecessor_list(s,o)},PriorityQueue:{make:function(t){var e,o=r.PriorityQueue,s={};for(e in t=t||{},o)o.hasOwnProperty(e)&&(s[e]=o[e]);return s.queue=[],s.sorter=t.sorter||o.default_sorter,s},default_sorter:function(r,t){return r.cost-t.cost},push:function(r,t){var e={value:r,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}},{get exports(){return t},set exports(r){t=r}}.exports=r;export{t as d};
