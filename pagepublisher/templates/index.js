<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
<title><%= filename %> sample implementation</title>
</head>
<body>
<% for(var component in components){ %>
  <div id="<%= components[component]%>"></div>
<%}%>
</body>
</html>
