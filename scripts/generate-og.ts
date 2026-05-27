import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, mkdirSync } from "fs";

const width = 1200;
const height = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#0f172a"/>
  <text x="80" y="260" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="#ffffff">John Trotta</text>
  <text x="80" y="320" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="500" fill="#3B82F6">VP of Technology</text>
  <text x="80" y="380" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#94a3b8">Infrastructure and Security Leadership</text>
  <line x1="80" y1="430" x2="400" y2="430" stroke="#3B82F6" stroke-width="3"/>
  <text x="80" y="480" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#64748b">CISSP · VCP · MCSE · CCNA</text>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: width },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

mkdirSync("public", { recursive: true });
writeFileSync("public/og-image.png", pngBuffer);
console.log(`Generated public/og-image.png (${pngBuffer.length} bytes)`);
