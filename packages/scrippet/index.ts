// copy from https://fountain.io/dingus
export function scrippetize(text: string) {
  const scrippet_pattern_string =
    "[\\[<]scrippet[\\]>]([^]*?)[\\[<]\\/scrippet[\\]>]";
  const scrippet_pattern = new RegExp(scrippet_pattern_string, "i");
  const scrippet_pattern_g = new RegExp(scrippet_pattern_string, "gi");

  let matches;
  while ((matches = scrippet_pattern_g.exec(text))) {
    var output =
      "" +
      "\r\n" +
      matches[1]
        .replace(
          /<[^>]*>/g,
          ""
        ) /* remove any tags Wordpress or Markdown may dump into the scrippet */
        .replace(
          /\r/g,
          ""
        ) /* some basic character replacements to deal with bugs that Wordpress/Markdown introduce */
        .replace(/&amp;/g, "&")
        .replace(/\.{3}|É/g, "&#46;&#46;&#46;")
        .replace(/\-{2}|Ñ|Ð/g, "&#45;&#45;")
        .replace(
          /(INT|EXT|EST)([\.\-\s]+?)(.+?)([A-Za-z0-9\)\s\.])\n/gi,
          "<sceneheader>$1$2$3$4</sceneheader>" + "\r\n"
        ) /* Sceneheaders must start with INT or EXT */
        .replace(
          /\n([^<>\na-z]*?:|FADE TO BLACK\.|FADE OUT\.|CUT TO BLACK\.)[\s]??\n/g,
          "<transition>$1</transition>" + "\r\n"
        ) /* Catches transitions -- Looks for a colon, with some hard coded exceptions that don't use colons. */
        .replace(/\n([^<>\n]*?:[^\n]+?)\n/g, "<action>$1</action>" + "\r\n")
        .replace(
          /\n{2}(([^a-z\n\:]+?[\.\?\,\s\!]*?)\n{2}){1,2}/g,
          "\n" + "<action>$2</action>" + "\r\n"
        ) /* Catches multi-line action blocks -- looks for all caps without punctuation, then two Newlines -- This differentiates from character cues because Cues will only have a single break, then the dialogue/parenthetical. */
        .replace(
          /\n([^<>a-z\s][^a-z:\!\?]*?[^a-z\(\.\!\?:,][\s]??)\n/g,
          "<character>$1</character>"
        ) /* Catches character cues -- Looks for all caps, parenthesis (for O.S./V.O.), then a single newline. */
        .replace(
          /(\([^<>]*?\)[\s]??)\n/g,
          "<parenthetical>$1</parenthetical>"
        ) /* Catches parentheticals -- Just looks for text between parenthesis. */
        .replace(
          /(<character>.*<\/character>|<parenthetical>.*<\/parenthetical>)\n?([^<>\n]+?)\n/g,
          "$1<dialogue>$2</dialogue>" + "\r\n"
        ) /* Catches dialogue -- Must follow a character cue or parenthetical. */
        .replace(/([^<>]*?)\n/g, "<action>$1</action>" + "\r\n") /* Defaults */
        .replace(
          /<action>[\n\s]*?<\/action>/g,
          ""
        ) /* Hack - cleans up the mess the action regex is leaving behind.*/
        .replace(/\n/g, "") /* hide newlines from live posts */ +
      "\r\n";
    text = text.replace(scrippet_pattern, output);
  }
  return text;
}
