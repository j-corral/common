import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

import { RemoveFirstChar } from '@hoomies/fuel.functions.grep';

export type ParseMDXProps = {
  /**
   * @description MDX source text
   */
  source: string;
  /**
   * @description Enable replacements on parse
   */
  transform?: boolean;
  /**
   * @description Search (RegExp) and replace (string) occurrences inside the source
   */
  replacements?: Map<RegExp, string>;
  /**
   * @description Unique Search (RegExp) for special Components in the source
   * Then create a unique list of special Components that require dynamic import
   *
   * @return an Object : { source: parsedMDXSource, frontMatter: Matter metadata, componentNames: Special Components names};
   */
  searchComponents?: RegExp;
};

const defReplacements = new Map<RegExp, string>([
  [new RegExp(/(<\w+)\.(\w+)/g), '$1$2'],
  [new RegExp(/(\/\w+)\.(\w+>)/g), '$1$2'],
]);

const defSearchComp = new RegExp(/<\w+\.?\w+/g);

export async function ParseMDX({
  source,
  transform = true,
  replacements = defReplacements,
  searchComponents = defSearchComp,
}: ParseMDXProps) {
  try {
    // parse the source with Matter
    const { content, data } = matter(source);

    let replacedContent = content;

    if (transform) {
      replacements?.forEach((replace: string, search: RegExp) => {
        replacedContent = replacedContent.replace(search, replace);
      });
    }

    // Convert rewrited source into serialized object
    const mdxSource = await serialize(replacedContent, { scope: data });

    // Search for special Components in the source (useful for dynamic import process)
    const componentNames = [...new Set(replacedContent.match(searchComponents))].map(RemoveFirstChar);

    return { source: mdxSource, frontMatter: data, componentNames };
  } catch (e) {
    throw new Error('Unable to parse MDX source: ' + e.message);
  }
}
