<%var str= '../';for (var i=0; i < filename.split('/').length+1; i++){ str += "../"; } %>
var React = require('react');
var iso = require('iso');
iso.bootstrap(function (state, meta, node) {
  <% for(var component in components){ %>
    var Component<%=components[component]%> = require("<%=str%>component-factory/<%=components[component].substring(0, 1).toLowerCase()+components[component].substring(1, components[component].length)%>/scripts/components/<%=components[component].substring(0, 1).toLowerCase()+components[component].substring(1, components[component].length)%>.Component").<%=components[component]%>;
    React.render(React.createElement(Component<%=components[component]%>, { data: state[<%=component%>].title}) , document.getElementById("<%=components[component].substring(0, 1).toLowerCase()+components[component].substring(1, components[component].length)%>"));
  <%}%>
});
