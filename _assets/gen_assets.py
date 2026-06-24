#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为每套风格生成专属 hero 美术图 + 通用插画（CPA gpt-image-2）。
可断点续传：已存在的 _raw/<name>.png 跳过。生成后用 sips 转优化 jpg 由外部脚本完成。"""
import base64, json, os, time, urllib.request, urllib.error

ENDPOINT = os.environ.get("IMG_ENDPOINT", "http://127.0.0.1:8317/v1/images/generations")
API_KEY  = os.environ.get("HAHAHA_KEY", "hh-2f1df53e846347ac1dc5a95c5c1aaadf69aa683ce2892d47")
MODEL = "gpt-image-2"
RAW = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_raw")
os.makedirs(RAW, exist_ok=True)

NO_TEXT = " Absolutely no text, no words, no letters, no numbers, no logos, no watermark, no UI."

# name -> (prompt, size)  size in {1536x1024 wide, 1024x1024 square}
JOBS = {
  # 8 现有风格
  "cute-hero":        ("kawaii pastel illustration, a cheerful round mascot character among soft clouds, candy pink and sky blue, rounded shapes, adorable, soft shadows, flat 2D vector style" + NO_TEXT, "1536x1024"),
  "pixel-hero":       ("8-bit pixel art game scene, retro platformer landscape, bright green hills, blocky clouds, CRT retro game aesthetic, crisp pixels" + NO_TEXT, "1536x1024"),
  "enterprise-hero":  ("clean modern corporate abstract, soft business-blue geometric planes, professional, trustworthy, subtle depth, minimal" + NO_TEXT, "1536x1024"),
  "bside-hero":       ("minimal data-dashboard abstract, neutral grey with one blue accent, clean grid lines, analytical, flat, restrained" + NO_TEXT, "1536x1024"),
  "gov-hero":         ("solemn dignified abstract, deep party-red and government-blue, symmetrical, gold accent line, authoritative, clean, modern Chinese official aesthetic" + NO_TEXT, "1536x1024"),
  "darktech-hero":    ("dark futuristic tech abstract, neon cyan and violet glowing lines on near-black, terminal grid, depth, premium developer aesthetic" + NO_TEXT, "1536x1024"),
  "editorial-hero":   ("warm minimal editorial still life, soft paper tones, a single elegant object, generous negative space, magazine photography, terracotta accent, calm" + NO_TEXT, "1536x1024"),
  "neumorph-hero":    ("soft 3D clay render, monochrome light-grey rounded shapes with gentle dual soft shadows, tactile, calm, minimal soft-UI aesthetic" + NO_TEXT, "1536x1024"),
  # 8 新风格
  "glass-hero":       ("frosted glass morphism abstract, translucent layered panels, vivid blurred gradient behind (blue purple pink), light refraction, premium, depth" + NO_TEXT, "1536x1024"),
  "guochao-hero":     ("modern Chinese guochao art, traditional ink mountains and auspicious cloud patterns reimagined, vermilion red and indigo, gold lines, elegant new-Chinese style" + NO_TEXT, "1536x1024"),
  "luxury-hero":      ("luxury premium abstract, deep charcoal black with brushed gold accents, elegant marble texture, high-end editorial, sophisticated, minimal" + NO_TEXT, "1536x1024"),
  "brutalism-hero":   ("brutalist raw concrete texture, bold high-contrast black and one stark accent, harsh geometric blocks, exposed structure, monospace poster energy" + NO_TEXT, "1536x1024"),
  "cyberpunk-hero":   ("cyberpunk neon city at night, rain-soaked street, hot magenta and electric cyan glow, holographic haze, blade-runner mood, cinematic" + NO_TEXT, "1536x1024"),
  "japanese-hero":    ("japanese minimal muji aesthetic, calm beige and off-white still life, natural wood and linen textures, soft daylight, wabi-sabi, serene" + NO_TEXT, "1536x1024"),
  "material-hero":    ("google material design abstract, bold flat color blocks, layered paper elevation with crisp shadows, vibrant primary palette, clean geometric" + NO_TEXT, "1536x1024"),
  "clay-hero":        ("claymorphism 3D render, chunky soft clay shapes in pastel colors, playful rounded inflated forms, soft studio lighting, cute 3D" + NO_TEXT, "1536x1024"),
  # 通用插画（跨 Kit 复用）
  "product-shoe":     ("a single modern sneaker product shot on clean seamless light studio background, soft shadow, e-commerce hero, centered" + NO_TEXT, "1024x1024"),
  "product-watch":    ("a premium minimalist wristwatch product shot on neutral studio background, soft reflection, e-commerce, centered" + NO_TEXT, "1024x1024"),
  "food-bowl":        ("a beautiful healthy food bowl, top-down, fresh colorful ingredients, soft natural light, appetizing food photography" + NO_TEXT, "1024x1024"),
  "abstract-wave":    ("smooth flowing gradient mesh waves, soft blue violet teal, premium minimal wallpaper, no text" + NO_TEXT, "1536x1024"),
}

def gen(prompt, size, retries=8, timeout=240):
    body = json.dumps({"model":MODEL,"prompt":prompt,"size":size,"quality":"high","n":1}).encode()
    delay=4; last=None
    for a in range(1,retries+1):
        try:
            req=urllib.request.Request(ENDPOINT,data=body,method="POST",
                headers={"Authorization":f"Bearer {API_KEY}","Content-Type":"application/json"})
            with urllib.request.urlopen(req,timeout=timeout) as r:
                d=json.loads(r.read().decode())
            b=d.get("data",[{}])[0].get("b64_json")
            if b: return base64.b64decode(b)
            last="no b64"
        except Exception as e:
            last=f"{type(e).__name__}: {str(e)[:120]}"
        print(f"    …{a}/{retries} 失败 {last} 等{delay}s", flush=True); time.sleep(delay); delay=min(delay+3,20)
    raise RuntimeError(f"fail: {last}")

def main():
    names=list(JOBS); print(f"共 {len(names)} 张待生成", flush=True)
    for i,(name,(prompt,size)) in enumerate(JOBS.items(),1):
        out=os.path.join(RAW,name+".png")
        if os.path.exists(out) and os.path.getsize(out)>10000:
            print(f"[{i}/{len(names)}] {name} 已存在，跳过", flush=True); continue
        print(f"[{i}/{len(names)}] 生成 {name} ({size}) …", flush=True)
        t=time.time()
        try:
            png=gen(prompt,size); open(out,"wb").write(png)
            print(f"    ✓ {name} {len(png)//1024}KB {time.time()-t:.0f}s", flush=True)
        except Exception as e:
            print(f"    ✗ {name} {e}", flush=True)
    print("DONE", flush=True)

if __name__=="__main__": main()
