<%var str= '../';for (var i=0; i < filename.split('/').length+1; i++){ str += "../"; } %>
var React = require('react');
<% for(var component in components){ %>
var Component<%=components[component]%> = require("<%=str%>component-factory/<%=components[component].substring(0, 1).toLowerCase()+components[component].substring(1, components[component].length)%>/views/<%=components[component].substring(0, 1).toLowerCase()+components[component].substring(1, components[component].length)%>").<%=components[component]%>;
React.render(<Component<%=components[component]%> data="foo-bar" />, document.getElementById("<%= components[component]%>"));
<%}%>
