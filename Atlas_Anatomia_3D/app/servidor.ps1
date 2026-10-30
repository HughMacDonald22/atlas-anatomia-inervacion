# Servidor local mínimo para el Atlas Anatómico 3D (no requiere instalar nada)
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8765
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$port/")
$l.Start()
Start-Process "http://localhost:$port/index.html"
Write-Host "Atlas abierto en http://localhost:$port  (cierra esta ventana para detenerlo)"
$types = @{'.html'='text/html; charset=utf-8';'.js'='text/javascript';'.json'='application/json';'.wasm'='application/wasm';'.glb'='model/gltf-binary';'.txt'='text/plain'}
while ($l.IsListening) {
  $c = $l.GetContext()
  $p = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath.TrimStart('/'))
  if ($p -eq '') { $p = 'index.html' }
  $f = Join-Path $root $p
  if ((Test-Path $f -PathType Leaf) -and ((Resolve-Path $f).Path.StartsWith($root))) {
    $b = [IO.File]::ReadAllBytes($f); $e = [IO.Path]::GetExtension($f).ToLower()
    $c.Response.ContentType = if ($types[$e]) { $types[$e] } else { 'application/octet-stream' }
    $c.Response.OutputStream.Write($b, 0, $b.Length)
  } else { $c.Response.StatusCode = 404 }
  $c.Response.Close()
}
