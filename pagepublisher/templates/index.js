<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
<title><%= filename %> sample implementation</title>
</head>
<body>
<div class="container">
<% for(var component in components){ %>
<div id="<%= components[component]%>"></div>
<%}%>
</div>
<%var str= '';for (var i=0; i < filename.split('/').length+1; i++){ str += "../"; } %>
<link rel="stylesheet" href="<%=str%>styles/bootstrap.min.css">
<link rel="stylesheet" href="<%=str%>styles/importer.css">
<script src="scripts/bundle.js"></script>
</body>
</html>
