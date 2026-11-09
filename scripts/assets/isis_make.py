# Illustration de l’Accompagnement Isis : découpe le médaillon de l’affiche Instagram de Sarah
# (1024 x 1536) et le pose sur fond papier. Usage :
#   python scripts/assets/isis_make.py <affiche.jpeg> public/images
# Produit isis.webp (4:5, page du soin) et isis-carte.webp (4:3, carte de l’accueil).
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageChops
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
cx, cy, R = 252, 632, 190
crop = im.crop((cx-R, cy-R, cx+R, cy+R))           # 380 x 380
# masque : disque doux + effacement des branches fleuries à gauche (x source < 100)
def mask(size, scale):
    m = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(m)
    c = size/2
    steps = 40
    r_in, r_out = 158*scale, 186*scale
    for i in range(steps+1):
        r = r_out - (r_out-r_in)*i/steps
        d.ellipse((c-r, c-r, c+r, c+r), fill=int(255*i/steps))
    left = Image.new("L", (size, size), 255)
    dl = ImageDraw.Draw(left)
    x0 = (100-(cx-R))*scale
    for i in range(int(14*scale)):
        dl.line([(x0+i, 0), (x0+i, size)], fill=int(255*i/(14*scale)))
    dl.rectangle((0, 0, x0, size), fill=0)
    return ImageChops.multiply(m, left).filter(ImageFilter.GaussianBlur(2*scale))
paper = (250, 239, 229)
def build(w, h, scale, name):
    size = int(380*scale)
    big = crop.resize((size, size), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=1.6, percent=55, threshold=2))
    canvas = Image.new("RGB", (w, h), paper)
    # léger dégradé radial plus clair au centre, comme une feuille
    glow = Image.new("L", (w, h), 0); dg = ImageDraw.Draw(glow)
    for i in range(30):
        r = max(w, h)*0.75*(1-i/30)
        dg.ellipse((w/2-r, h/2-r, w/2+r, h/2+r), fill=int(70*i/30))
    canvas = Image.composite(Image.new("RGB", (w, h), (253, 246, 240)), canvas, glow.filter(ImageFilter.GaussianBlur(40)))
    canvas.paste(big, ((w-size)//2, (h-size)//2 + int(8*scale)), mask(size, scale))
    canvas.save(f"{out}/{name}", "WEBP", quality=86, method=6)
    print(name, canvas.size)
build(1000, 1250, 2.75, "isis.webp")
build(1280, 960, 2.15, "isis-carte.webp")
