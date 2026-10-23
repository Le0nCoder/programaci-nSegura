from http.server import HTTPServer, SimpleHTTPRequestHandler

class Servidor(SimpleHTTPRequestHandler):
	def end_headers(self):
		self.send_header('X-Content-Type-Options', 'nosniff')
		self.send_header('Referrer-Policy', 'no-referrer')
		self.send_header('X-Frame-Options', 'DENY')
		self.send_header('Content-Security-Policy', 
				"defautl-src 'self'; script-src 'self'")
		super().end_headers()


HTTPServer(('127.0.0.1', 8000), Servidor).serve_forever()
