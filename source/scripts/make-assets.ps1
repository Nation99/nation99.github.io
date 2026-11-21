# Generates the static brand assets used by the site.
# Run from the project root: powershell -ExecutionPolicy Bypass -File scripts/make-assets.ps1
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$assets = Join-Path $root "assets"
New-Item -ItemType Directory -Force -Path $assets | Out-Null

$navy = [System.Drawing.Color]::FromArgb(11, 27, 51)
$navyLight = [System.Drawing.Color]::FromArgb(18, 42, 71)
$emerald = [System.Drawing.Color]::FromArgb(11, 143, 106)
$emeraldLight = [System.Drawing.Color]::FromArgb(53, 214, 164)
$amber = [System.Drawing.Color]::FromArgb(245, 166, 35)
$white = [System.Drawing.Color]::FromArgb(238, 245, 255)
$muted = [System.Drawing.Color]::FromArgb(166, 184, 206)

function New-RoundedPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $p.AddArc($x, $y, $d, $d, 180, 90)
  $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()
  return $p
}

function New-Icon([int]$size, [string]$file) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $g.Clear($navy)

  $accent = New-Object System.Drawing.SolidBrush $emerald
  $g.FillRectangle($accent, 0, [int]($size * 0.78), $size, [int]($size * 0.22))
  $accent.Dispose()

  $glow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(26, 53, 214, 164))
  $g.FillEllipse($glow, [int](-$size * 0.3), [int](-$size * 0.25), [int]($size * 1.15), [int]($size * 1.15))
  $glow.Dispose()

  $fontSize = [int]($size * 0.31)
  $font = New-Object System.Drawing.Font "Segoe UI", $fontSize, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
  $brush = New-Object System.Drawing.SolidBrush $white
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = [System.Drawing.RectangleF]::new(0, 0, [float]$size, [float]($size * 0.82))
  $g.DrawString("EFP", $font, $brush, $rect, $format)

  $dot = New-Object System.Drawing.SolidBrush $amber
  $dotSize = [math]::Max(4, [int]($size * 0.055))
  $g.FillEllipse($dot, [int]($size * 0.79), [int]($size * 0.15), $dotSize, $dotSize)
  $dot.Dispose()
  $brush.Dispose()
  $font.Dispose()
  $format.Dispose()

  $bmp.Save((Join-Path $assets $file), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

New-Icon 192 "icon-192.png"
New-Icon 512 "icon-512.png"
New-Icon 512 "logo.png"
New-Icon 180 "apple-touch-icon.png"

# Open Graph card
$og = New-Object System.Drawing.Bitmap 1200, 630
$g = [System.Drawing.Graphics]::FromImage($og)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$gradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle 0, 0, 1200, 630),
  $navy,
  [System.Drawing.Color]::FromArgb(15, 66, 72),
  15
)
$g.FillRectangle($gradient, 0, 0, 1200, 630)
$gradient.Dispose()

$glow1 = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(34, 53, 214, 164))
$g.FillEllipse($glow1, 760, -220, 720, 720)
$glow1.Dispose()
$glow2 = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(22, 245, 166, 35))
$g.FillEllipse($glow2, -180, 420, 560, 560)
$glow2.Dispose()

$linePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(60, 255, 255, 255)), 2
$g.DrawLine($linePen, 86, 470, 1114, 470)
$g.DrawEllipse($linePen, 986, 250, 210, 210)
$linePen.Dispose()

$markPath = New-RoundedPath 86 78 92 92 22
$markBrush = New-Object System.Drawing.SolidBrush $emerald
$g.FillPath($markBrush, $markPath)
$markBrush.Dispose()
$markPath.Dispose()

$markFont = New-Object System.Drawing.Font "Segoe UI", 34, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$markText = New-Object System.Drawing.SolidBrush $white
$g.DrawString("EFP", $markFont, $markText, 90, 108)
$markText.Dispose()
$markFont.Dispose()

$kickFont = New-Object System.Drawing.Font "Segoe UI", 24, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$kickBrush = New-Object System.Drawing.SolidBrush $emeraldLight
$g.DrawString("INDEPENDENT FOOTBALL ANALYTICS", $kickFont, $kickBrush, 88, 205)
$kickBrush.Dispose()
$kickFont.Dispose()

$titleFont = New-Object System.Drawing.Font "Segoe UI", 68, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$titleBrush = New-Object System.Drawing.SolidBrush $white
$g.DrawString("Elite Football Predictor", $titleFont, $titleBrush, 80, 252)
$titleBrush.Dispose()
$titleFont.Dispose()

$subFont = New-Object System.Drawing.Font "Segoe UI", 32, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)
$subBrush = New-Object System.Drawing.SolidBrush $muted
$g.DrawString("Football analytics and education, without the hype", $subFont, $subBrush, 84, 360)
$subBrush.Dispose()
$subFont.Dispose()

$tagFont = New-Object System.Drawing.Font "Segoe UI", 24, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$tagBrush = New-Object System.Drawing.SolidBrush $white
$g.DrawString("xG, tactics, probability, model limits", $tagFont, $tagBrush, 86, 500)
$tagBrush.Dispose()
$tagFont.Dispose()

$badgePath = New-RoundedPath 86 558 202 42 21
$badgeBrush = New-Object System.Drawing.SolidBrush $amber
$g.FillPath($badgeBrush, $badgePath)
$badgeBrush.Dispose()
$badgePath.Dispose()
$badgeFont = New-Object System.Drawing.Font "Segoe UI", 20, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$badgeText = New-Object System.Drawing.SolidBrush $navy
$g.DrawString("18+ ESTIMATES", $badgeFont, $badgeText, 105, 567)
$badgeText.Dispose()
$badgeFont.Dispose()

$urlFont = New-Object System.Drawing.Font "Segoe UI", 22, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)
$urlBrush = New-Object System.Drawing.SolidBrush $muted
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Far
$g.DrawString("elitefootballpredictor.com", $urlFont, $urlBrush, (New-Object System.Drawing.RectangleF 600, 562, 514, 40), $format)
$format.Dispose()
$urlBrush.Dispose()
$urlFont.Dispose()

$og.Save((Join-Path $assets "og-default.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$og.Dispose()

$svg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-labelledby="title">
  <title id="title">Elite Football Predictor</title>
  <rect width="64" height="64" rx="14" fill="#0b1b33"/>
  <circle cx="49" cy="14" r="3.2" fill="#f5a623"/>
  <path d="M10 44h44v10H10z" fill="#0b8f6a"/>
  <text x="32" y="38" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="700" fill="#eef5ff">EFP</text>
</svg>
'@
Set-Content -Path (Join-Path $assets "favicon.svg") -Value $svg -Encoding UTF8

Write-Output "Generated brand assets in $assets"
