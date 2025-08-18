{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/static/*", "/*.{png,jpg,gif,ico,css,js}"]
  },
  "auth": {
    "routes": [
      {
        "route": "/auth-callback",
        "rewrite": "/index.html"
      }
    ]
  }
}
