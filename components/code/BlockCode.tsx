import { codeToHtml } from "shiki"
import {
  transformerNotationHighlight,
  transformerNotationDiff
} from "@shikijs/transformers"
import type { BundledLanguage, BundledTheme } from "shiki";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from "geist/font/sans";
import { CopyButton } from "@/components";
import './BlockCode.css'

interface Props {
  code: string;
  filename?: string;
  lang?: BundledLanguage;
  theme?: BundledTheme
}

export default async function BlockCode({
  code,
  filename,
  lang = "javascript",
  theme = "catppuccin-mocha",
}: Props) {
  
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  })

  return (
    <div className="bg-[#1b1e28] overflow-hidden rounded-lg">

      <div className={`${GeistSans.className} bg-[#262638]`}>
        {
          filename && (
            <div className="text-[13px] flex justify-between items-center h-12 py-2 px-4 text-zinc-300">
              {filename}
              <CopyButton code={code} />
            </div>
          )
        }
      </div>
      <div className={`[&_.highlighted]:bg-[#404053] border-t border-zinc-600  ${GeistMono.className}`} dangerouslySetInnerHTML={{ __html: html }} />

    </div>
  )
}