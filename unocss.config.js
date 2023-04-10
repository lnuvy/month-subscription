module.exports = {
  theme: {
    colors: {
      black: "var(--black)",
      white: "var(--white)",
      strong: "var(--strong)",
      accent: "var(--accent)",
      main: "var(--main)",
      normal: "var(--normal)",
      disabled: "var(--disabled)",
      guide: "var(--guide)",
      error: "var(--error)",
      base: {
        100: "var(--base-100)",
        200: "var(--base-200)",
        300: "var(--base-300)",
      },
      line: {
        100: "var(--line-100)",
        200: "var(--line-200)",
        // 한울 - 추가함
        300: "var(--line-300)",
      },
      icon: {
        basic: "var(--icon-basic)",
        img: "var(--icon-img)",
      },
      brand: {
        primary: "var(--brand-primary)",
        secondary: "var(--brand-secondary)",
      },
    },
  },
  rules: [
    // gap
    [/^gap-(\w+)$/, ([, d]) => ({ gap: `${Number(d) / 10}rem` })],
    // color
    [/^bdc-(\w+)$/, ([, d]) => ({ "border-color": `#${d}}` })],
    [/^bgc-(\w+)$/, ([, d]) => ({ "background-color": `#${d}` })],
    [/^cl-(\w+)$/, ([, d]) => ({ color: `#${d}}` })],
    // font
    [/^fs-(\d+)$/, ([, d]) => ({ "font-size": `${Number(d) / 10}rem` })],
    // width
    [/^w-(\d+)$/, ([, d]) => ({ width: `${Number(d)}rem` })],
    [/^h-(\d+)$/, ([, d]) => ({ height: `${Number(d)}rem` })],
    // margin
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 10}rem` })],
    [/^ml-(\d+)$/, ([, d]) => ({ "margin-left": `${Number(d) / 10}rem` })],
    [/^mr-(\d+)$/, ([, d]) => ({ "margin-right": `${Number(d) / 10}rem` })],
    [/^mt-(\d+)$/, ([, d]) => ({ "margin-top": `${Number(d) / 10}rem` })],
    [/^mb-(\d+)$/, ([, d]) => ({ "margin-bottom": `${Number(d) / 10}rem` })],
    [
      /^mv-(\d+)$/,
      ([, d]) => ({
        "margin-left": `${Number(d) / 10}rem`,
        "margin-right": `${Number(d) / 10}rem`,
      }),
    ],
    [
      /^mh-(\d+)$/,
      ([, d]) => ({
        "margin-bottom": `${Number(d) / 10}rem`,
        "margin-top": `${Number(d) / 10}rem`,
      }),
    ],
    // padding
    [/^p-(\d+)$/, ([, d]) => ({ padding: `${Number(d) / 10}rem` })],
    [/^pl-(\d+)$/, ([, d]) => ({ "padding-left": `${Number(d) / 10}rem` })],
    [/^pr-(\d+)$/, ([, d]) => ({ "padding-right": `${Number(d) / 10}rem` })],
    [/^pt-(\d+)$/, ([, d]) => ({ "padding-top": `${Number(d) / 10}rem` })],
    [/^pb-(\d+)$/, ([, d]) => ({ "padding-bottom": `${Number(d) / 10}rem` })],
    [
      /^pv-(\d+)$/,
      ([, d]) => ({
        "padding-left": `${Number(d) / 10}rem`,
        "padding-right": `${Number(d) / 10}rem`,
      }),
    ],
    [
      /^ph-(\d+)$/,
      ([, d]) => ({
        "padding-bottom": `${Number(d) / 10}rem`,
        "padding-top": `${Number(d) / 10}rem`,
      }),
    ],
    // border
    [
      /^radius-(\d+)$/,
      ([, d]) => ({ "border-radius": `${Number(d) / 10}rem` }),
    ],
    // flex
    [/^flex-(\d+)$/, ([, d]) => ({ flex: `${d}` })],
  ],
};
