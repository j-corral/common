export type GrepProps = {
  /**
   * @description The text to analyze
   */
  content: string;
  /**
   * @description The items to search in the content
   */
  pattern: RegExp;
  /**
   * @description Remove duplicates from the result
   */
  unique?: boolean;
};

export function Grep({ content, pattern, unique = true }: GrepProps) {
  if (unique) {
    return [...new Set(content.match(pattern))];
  }

  return content.match(pattern);
}

export function RemoveFirstChar(v) {
  return v.trim().substring(1);
}
