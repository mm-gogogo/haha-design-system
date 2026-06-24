#!/usr/bin/env bash
# 下载无版权真实照片(picsum/Unsplash 派生) + 头像(pravatar)，供各 Kit 演示「图片如何应用」。
# 全部为可商用免费图源。picsum 需 -L 跟随重定向。
set -e
cd "$(dirname "$0")"
mkdir -p photos avatars

dl(){ curl -fsSL -m 40 "$1" -o "$2" && echo "  ✓ $2 ($(du -h "$2"|cut -f1))" || echo "  ✗ $2"; }

echo "== 通用照片（横图 1200x800）=="
for s in workspace city mountain ocean forest coffee desk street food travel tech architecture; do
  dl "https://picsum.photos/seed/ds-$s/1200/800" "photos/$s.jpg"
done

echo "== 宽幅 hero（1600x720）=="
for s in studio summit gallery; do
  dl "https://picsum.photos/seed/ds-hero-$s/1600/720" "photos/hero-$s.jpg"
done

echo "== 竖图（720x960）+ 方图（800x800）=="
for s in portrait1 portrait2; do dl "https://picsum.photos/seed/ds-$s/720/960" "photos/$s.jpg"; done
for s in square1 square2 square3; do dl "https://picsum.photos/seed/ds-$s/800/800" "photos/$s.jpg"; done

echo "== 头像（pravatar 256）=="
for i in 1 5 8 12 15 23 33 47; do
  dl "https://i.pravatar.cc/256?img=$i" "avatars/a$i.jpg"
done

echo "完成：照片 $(ls photos|wc -l|tr -d ' ') 张 / 头像 $(ls avatars|wc -l|tr -d ' ') 张 / 共 $(du -sh .|cut -f1)"
