import http.server
import socketserver
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(os.path.join(ROOT, "dist"))

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".mjs": "application/javascript",
        ".js": "application/javascript",
    }

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, *args):
        pass

PORT = 4173
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Serving dist/ at http://127.0.0.1:{PORT}", flush=True)
    httpd.serve_forever()
