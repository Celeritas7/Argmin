/* @ds-bundle: {"format":4,"namespace":"ArgminDesignSystem_b29498","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"GlyphTile","sourcePath":"components/display/GlyphTile.jsx"},{"name":"Metric","sourcePath":"components/display/Metric.jsx"},{"name":"Overline","sourcePath":"components/display/Overline.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"StepTimeline","sourcePath":"components/navigation/StepTimeline.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"ef82768c9f09","components/display/Card.jsx":"25212eda5861","components/display/Chip.jsx":"c0872eda1231","components/display/GlyphTile.jsx":"faf7435e8e8b","components/display/Metric.jsx":"c2ddd93587c2","components/display/Overline.jsx":"08fcb6e821bc","components/display/Tag.jsx":"4f80742040a8","components/forms/Button.jsx":"1932a59941a1","components/forms/SegmentedControl.jsx":"ba297a7596ec","components/forms/Select.jsx":"22858515316a","components/forms/TextInput.jsx":"5c163917f77e","components/navigation/StepTimeline.jsx":"b6753dc463e1","components/navigation/Tabs.jsx":"c8178d9ba6ea","components/navigation/TopNav.jsx":"eeeb0c915df2","ui_kits/argmin/EditorScreen.jsx":"6be9ebb0d7a8","ui_kits/argmin/GiftsScreen.jsx":"567977b7378d","ui_kits/argmin/HomeScreen.jsx":"07e8d552d4f1","ui_kits/argmin/ResultsScreen.jsx":"c18413faaedc","ui_kits/argmin/SavedScreen.jsx":"869f6e5a97f1","ui_kits/argmin/data.jsx":"5aae49870df7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArgminDesignSystem_b29498 = window.ArgminDesignSystem_b29498 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const TONES = {
  ok: 'var(--ok)',
  warn: 'var(--warn)',
  accent: 'var(--accent)',
  blue: 'var(--blue)',
  teal: 'var(--teal)',
  rose: 'var(--rose)',
  purple: 'var(--purple)'
};
function Badge({
  tone = 'neutral',
  small,
  solid,
  children,
  style
}) {
  const c = TONES[tone];
  let s = {
    flex: 'none',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
    fontSize: small ? '10.5px' : '11.5px',
    padding: small ? '2.5px 7px' : '4px 10px',
    borderRadius: small ? '5px' : 'var(--r-badge,6px)',
    display: 'inline-block'
  };
  if (solid && c) Object.assign(s, {
    background: c,
    color: '#fff',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px'
  });else if (c) Object.assign(s, {
    color: c,
    background: `color-mix(in oklab, ${c} ${tone === 'warn' ? 10 : 14}%, var(--surface))`,
    border: `1px solid color-mix(in oklab, ${c} 35%, var(--line))`
  });else Object.assign(s, {
    color: 'var(--ink)',
    background: 'var(--head)',
    border: '1px solid var(--line)'
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  padding = '18px',
  radius,
  shadow,
  ic,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: radius || 'var(--r-card,12px)',
      padding,
      boxShadow: shadow ? 'var(--shadow-card)' : 'none',
      ...(ic ? {
        '--ic': `var(--${ic})`
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
const css = `.am-chip{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12.5px;font-weight:500;padding:7px 13px;border-radius:999px;cursor:pointer;border:1px solid var(--line);background:var(--surface);color:var(--ink);transition:border-color .15s}
.am-chip:hover{border-color:var(--mut)}
.am-chip-sel{border-color:var(--accent);background:var(--accent);color:#fff}
.am-chip-sel:hover{border-color:var(--accent)}
.am-chip-rank{font-size:12px;padding:3px 10px 3px 4px}
.am-chip-rank:hover{border-color:var(--mut)}`;
function ensure() {
  if (typeof document !== 'undefined' && !document.getElementById('am-chip-css')) {
    const s = document.createElement('style');
    s.id = 'am-chip-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function Chip({
  selected,
  rank,
  onClick,
  children,
  style
}) {
  ensure();
  const hasRank = rank != null;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    className: 'am-chip' + (selected ? ' am-chip-sel' : '') + (hasRank ? ' am-chip-rank' : ''),
    style: hasRank && rank === 1 ? {
      borderColor: 'color-mix(in oklab, var(--accent) 45%, var(--line))',
      ...style
    } : style
  }, hasRank && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 16,
      height: 16,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      background: rank === 1 ? 'var(--accent)' : 'var(--head)',
      color: rank === 1 ? '#fff' : 'var(--mut)'
    }
  }, rank), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/GlyphTile.jsx
try { (() => {
function GlyphTile({
  ic = 'blue',
  size = 'md',
  children,
  style
}) {
  const w = size === 'sm' ? {
    w: 24,
    h: 18
  } : {
    w: 66,
    h: 48
  };
  const c = `var(--${ic})`;
  if (size === 'sm') return /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: c,
      ...style
    }
  }, children);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: w.w,
      height: w.h,
      borderRadius: 'var(--r-tile,10px)',
      background: `color-mix(in oklab, ${c} 9%, var(--surface))`,
      boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${c} 20%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: c,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GlyphTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/GlyphTile.jsx", error: String((e && e.message) || e) }); }

// components/display/Metric.jsx
try { (() => {
function Metric({
  label,
  value,
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--mut)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-metric,42px)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: 'var(--accent)'
    }
  }, value), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--mut)'
    }
  }, note));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Metric.jsx", error: String((e && e.message) || e) }); }

// components/display/Overline.jsx
try { (() => {
function Overline({
  children,
  count,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.06em',
      color: 'var(--mut)',
      ...style
    }
  }, children, count != null && /*#__PURE__*/React.createElement("span", null, " \xB7 ", count));
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Overline.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const TONES = {
  warn: 'var(--warn)',
  teal: 'var(--teal)',
  ok: 'var(--ok)',
  accent: 'var(--accent)',
  blue: 'var(--blue)',
  rose: 'var(--rose)',
  purple: 'var(--purple)'
};
function Tag({
  tone = 'warn',
  children,
  style
}) {
  const c = TONES[tone] || tone;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9.5px',
      letterSpacing: '0.04em',
      color: c,
      border: `1px solid color-mix(in oklab, ${c} 40%, var(--line))`,
      background: `color-mix(in oklab, ${c} 8%, var(--surface))`,
      borderRadius: 'var(--r-tag-sm,4px)',
      padding: '1.5px 5px',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const css = `.am-btn{cursor:pointer;font-family:var(--font-sans);transition:border-color .15s,color .15s,background .15s,filter .15s}
.am-btn:disabled{opacity:.45;cursor:default;pointer-events:none}
.am-btn-primary{padding:8px 16px;border:none;border-radius:var(--r-btn,8px);background:var(--accent);color:#fff;font-size:12.5px;font-weight:600;box-shadow:var(--shadow-btn)}
.am-btn-primary:hover{filter:brightness(1.1)}
.am-btn-secondary{padding:8px 13px;border:1px solid var(--line);border-radius:var(--r-btn,8px);background:var(--surface);color:var(--ink);font-size:12.5px;font-weight:500}
.am-btn-secondary:hover{border-color:var(--mut)}
.am-btn-dashed{padding:8px;border:1px dashed var(--line);border-radius:var(--r-tile,10px);background:none;color:var(--mut);font-size:12px;font-weight:500}
.am-btn-dashed:hover{border-color:var(--accent);color:var(--accent);background:color-mix(in oklab, var(--accent) 5%, var(--surface))}
.am-btn-pill{padding:7px 12px;border:1px solid var(--line);border-radius:999px;background:var(--surface);color:var(--mut);font-size:12.5px;font-weight:500}
.am-btn-pill:hover{border-color:var(--mut);color:var(--ink)}
.am-btn-ink{padding:7px 13px;border:none;border-radius:var(--r-select,7px);background:var(--ink);color:var(--bg);font-size:12px;font-weight:600}
.am-btn-ink:hover{filter:brightness(1.15)}`;
function ensure() {
  if (typeof document !== 'undefined' && !document.getElementById('am-btn-css')) {
    const s = document.createElement('style');
    s.id = 'am-btn-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function Button({
  variant = 'primary',
  children,
  onClick,
  disabled,
  title,
  style
}) {
  ensure();
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'am-btn am-btn-' + variant,
    onClick: onClick,
    disabled: disabled,
    title: title,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-btn,8px)',
      overflow: 'hidden',
      width: 'fit-content',
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label,
      act = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => onChange && onChange(v),
      style: {
        padding: '8px 13px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: '12.5px',
        fontWeight: 500,
        background: act ? 'var(--ink)' : 'var(--surface)',
        color: act ? 'var(--bg)' : 'var(--mut)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  value,
  onChange,
  mono,
  small,
  style
}) {
  return /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      padding: small ? '4px 6px' : '6px 8px',
      border: '1px solid var(--line)',
      borderRadius: small ? '6px' : 'var(--r-select,7px)',
      background: 'var(--surface)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: mono ? 600 : 500,
      outline: 'none',
      cursor: 'pointer',
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
const css = `.am-in{outline:none;font-family:var(--font-sans);box-sizing:border-box}
.am-in-field{padding:8px 11px;border:1px solid var(--line);border-radius:var(--r-btn,8px);background:var(--surface);font-size:12.5px}
.am-in-field:focus{border-color:var(--mut)}
.am-in-cell{border:none;background:none;text-align:right;padding:0 14px;font-family:var(--font-mono);font-size:14px}
.am-in-cell:focus{background:var(--head)}
.am-in-title{font-size:21px;font-weight:600;letter-spacing:-0.01em;background:none;border:none;padding:2px 0}
.am-in-title:focus{background:var(--head);border-radius:6px}
.am-in-mono{font-family:var(--font-mono)}`;
function ensure() {
  if (typeof document !== 'undefined' && !document.getElementById('am-in-css')) {
    const s = document.createElement('style');
    s.id = 'am-in-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function TextInput({
  variant = 'field',
  mono,
  value,
  onChange,
  placeholder,
  inputMode,
  title,
  style
}) {
  ensure();
  return /*#__PURE__*/React.createElement("input", {
    className: 'am-in am-in-' + variant + (mono ? ' am-in-mono' : ''),
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    inputMode: inputMode,
    title: title,
    style: style
  });
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepTimeline.jsx
try { (() => {
function StepTimeline({
  steps = [],
  active = 0,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, steps.map((s, i) => {
    const act = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onSelect && onSelect(i),
      style: {
        padding: '12px 14px',
        borderRadius: 'var(--r-tile,10px)',
        cursor: 'pointer',
        background: act ? 'color-mix(in oklab, var(--accent) 6%, var(--surface))' : 'var(--surface)',
        boxShadow: act ? 'inset 0 0 0 1.5px var(--accent)' : 'inset 0 0 0 1px var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 22,
        height: 22,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        ...(act ? {
          background: 'var(--accent)',
          color: '#fff'
        } : {
          boxShadow: 'inset 0 0 0 1px var(--line)',
          color: 'var(--mut)'
        })
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, s.label), s.sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11.5px',
        color: 'var(--mut)'
      }
    }, s.sub)), s.zt && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--mut)'
      }
    }, s.zt)));
  }));
}
Object.assign(__ds_scope, { StepTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepTimeline.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active = 0,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--line)',
      ...style
    }
  }, items.map((t, i) => {
    const act = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onChange && onChange(i),
      style: {
        position: 'relative',
        padding: '10px 2px',
        marginRight: i < items.length - 1 ? 24 : 0,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: '13.5px',
        fontWeight: 500,
        color: act ? 'var(--ink)' : 'var(--mut)'
      }
    }, /*#__PURE__*/React.createElement("span", null, typeof t === 'string' ? t : t.label), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: act ? 'var(--accent)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
const css = `.am-nav-link{position:relative;padding:0 12px;background:none;border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;color:var(--mut)}
.am-nav-link:hover{color:var(--ink)}
.am-nav-link.act{color:var(--ink)}
.am-nav-theme{display:flex;align-items:center;gap:7px;padding:6px 12px;border:1px solid var(--line);border-radius:999px;background:var(--surface);cursor:pointer;font-family:var(--font-sans);font-size:12px;font-weight:500;color:var(--mut)}
.am-nav-theme:hover{border-color:var(--mut)}`;
function ensure() {
  if (typeof document !== 'undefined' && !document.getElementById('am-nav-css')) {
    const s = document.createElement('style');
    s.id = 'am-nav-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function TopNav({
  links = [],
  onBrand,
  themeLabel,
  onTheme,
  right
}) {
  ensure();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      height: 'var(--nav-h,54px)',
      padding: '0 22px',
      borderBottom: '1px solid var(--line)',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBrand,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--ink)',
      transform: 'rotate(45deg)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '-0.02em'
    }
  }, "argmin")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      marginLeft: 10,
      alignSelf: 'stretch'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: 'am-nav-link' + (l.active ? ' act' : ''),
    onClick: l.onClick
  }, l.label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 0,
      height: 2,
      background: l.active ? 'var(--accent)' : 'transparent'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), right, themeLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "am-nav-theme",
    onClick: onTheme
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--ink)',
      display: 'block'
    }
  }), themeLabel));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/argmin/EditorScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  TextInput,
  SegmentedControl
} = window.ArgminDesignSystem_b29498;
const cellW = 96,
  rowH = 48,
  headH = 40;
function HCell({
  v,
  onCh,
  w = cellW
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: w,
      height: headH,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      borderBottom: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: onCh,
    style: {
      width: '100%',
      textAlign: 'center',
      background: 'none',
      border: 'none',
      outline: 'none',
      fontSize: 12,
      fontWeight: 600,
      padding: 0
    }
  }));
}
function EditorScreen({
  onSolve,
  onHome
}) {
  const [title, setTitle] = React.useState('Denver network');
  const [mode, setMode] = React.useState('Matrix');
  const ex = KIT.ex;
  const [src, setSrc] = React.useState([...ex.src]);
  const [dst, setDst] = React.useState([...ex.dst]);
  const [costs, setCosts] = React.useState(ex.costs.map(r => [...r]));
  const [supply, setSupply] = React.useState([...ex.supply]);
  const [demand, setDemand] = React.useState([...ex.demand]);
  const fmt = n => (+n || 0).toLocaleString('en-US');
  const ts = supply.reduce((a, b) => a + (+b || 0), 0),
    td = demand.reduce((a, b) => a + (+b || 0), 0),
    bal = ts === td;
  const upd = (set, arr, i, v, num) => {
    const a = [...arr];
    a[i] = num ? v === '' ? 0 : +v || 0 : v;
    set(a);
  };
  const updCost = (r, c, v) => {
    const a = costs.map(x => [...x]);
    a[r][c] = v === '' ? 0 : +v || 0;
    setCosts(a);
  };
  const numIn = {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    textAlign: 'right',
    padding: '0 14px',
    background: 'none',
    border: 'none',
    outline: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: 14
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Input editor \u2014 transportation",
    style: {
      maxWidth: 1020,
      margin: '0 auto',
      padding: '28px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mut)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      cursor: 'pointer'
    }
  }, "Problems"), " / Transportation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    variant: "title",
    value: title,
    onChange: e => setTitle(e.target.value),
    style: {
      minWidth: 180,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Load example"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Paste data"), /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ['Matrix', 'Graph'],
    value: mode,
    onChange: setMode
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: onSolve
  }, "Solve \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '12px 0 18px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: bal ? 'ok' : 'warn'
  }, bal ? `Balanced · ${fmt(ts)} supply = ${fmt(td)} demand` : `Unbalanced by ${fmt(Math.abs(ts - td))} · ${ts > td ? 'supply exceeds demand' : 'demand exceeds supply'}`), !bal && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      padding: '4px 9px',
      fontSize: '11.5px',
      fontWeight: 600,
      color: 'var(--accent)',
      borderColor: 'var(--accent)'
    }
  }, ts > td ? '+ Add dummy destination' : '+ Add dummy source'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--mut)'
    }
  }, src.length, " sources \xD7 ", dst.length, " destinations")), /*#__PURE__*/React.createElement(Card, null, mode === 'Matrix' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      border: '1px solid var(--line)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: headH,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      borderBottom: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      color: 'var(--mut)'
    }
  }, "cost / unit"), dst.map((d, i) => /*#__PURE__*/React.createElement(HCell, {
    key: i,
    v: d,
    onCh: e => upd(setDst, dst, i, e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 104,
      height: headH,
      background: 'var(--head)',
      borderBottom: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 14,
      boxSizing: 'border-box',
      fontSize: '11.5px',
      fontWeight: 600
    }
  }, "Supply")), src.map((s, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: rowH,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      borderBottom: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: s,
    onChange: e => upd(setSrc, src, r, e.target.value),
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      outline: 'none',
      fontSize: '12.5px',
      fontWeight: 600,
      padding: '0 12px'
    }
  })), costs[r].map((v, c) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      width: cellW,
      height: rowH,
      borderRight: '1px solid var(--line2)',
      borderBottom: '1px solid var(--line2)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => updCost(r, c, e.target.value),
    inputMode: "numeric",
    style: numIn
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 104,
      height: rowH,
      background: 'var(--head)',
      borderBottom: '1px solid var(--line2)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: supply[r],
    onChange: e => upd(setSupply, supply, r, e.target.value, 1),
    inputMode: "numeric",
    style: {
      ...numIn,
      fontWeight: 500
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 44,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      boxSizing: 'border-box',
      fontSize: '11.5px',
      fontWeight: 600
    }
  }, "Demand"), demand.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: cellW,
      height: 44,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => upd(setDemand, demand, i, e.target.value, 1),
    inputMode: "numeric",
    style: {
      ...numIn,
      fontWeight: 500
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 104,
      height: 44,
      background: 'var(--head)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 14,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: bal ? 'var(--ok)' : 'var(--warn)',
      fontWeight: 600
    }
  }, bal ? '✓ ' + fmt(ts) : fmt(ts) + ' / ' + fmt(td))))), /*#__PURE__*/React.createElement(Button, {
    variant: "dashed",
    style: {
      marginTop: 8,
      width: '100%',
      boxSizing: 'border-box'
    }
  }, "+ Add source"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, "Click any cell to edit \u2014 Tab moves across. Names are editable too. The matrix and the graph are two views of the same model.")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "640",
    height: Math.max(66 + (src.length - 1) * 108 + 66, 48 + (dst.length - 1) * 92 + 66, 300),
    style: {
      maxWidth: '100%'
    }
  }, costs.map((row, r) => row.map((cost, c) => {
    const y1 = 66 + r * 108,
      y2 = 48 + c * 92,
      t = [0.24, 0.42, 0.6, 0.78][c % 4];
    return /*#__PURE__*/React.createElement("g", {
      key: r + '_' + c
    }, /*#__PURE__*/React.createElement("line", {
      x1: 148,
      y1: y1,
      x2: 490,
      y2: y2,
      stroke: "var(--line)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("text", {
      x: 148 + 342 * t,
      y: y1 + (y2 - y1) * t - 4,
      style: {
        font: "500 10px var(--font-mono)",
        fill: 'var(--mut)'
      }
    }, cost));
  })), src.map((n, i) => /*#__PURE__*/React.createElement("g", {
    key: 's' + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 120,
    cy: 66 + i * 108,
    r: 28,
    fill: "var(--head)",
    stroke: "var(--line)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 120,
    y: 70 + i * 108,
    textAnchor: "middle",
    style: {
      font: "600 12px var(--font-mono)",
      fill: 'var(--ink)'
    }
  }, fmt(supply[i])), /*#__PURE__*/React.createElement("text", {
    x: 84,
    y: 70 + i * 108,
    textAnchor: "end",
    style: {
      font: "500 12px var(--font-sans)",
      fill: 'var(--mut)'
    }
  }, n))), dst.map((n, i) => /*#__PURE__*/React.createElement("g", {
    key: 'd' + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 520,
    cy: 48 + i * 92,
    r: 28,
    fill: "var(--head)",
    stroke: "var(--line)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 520,
    y: 52 + i * 92,
    textAnchor: "middle",
    style: {
      font: "600 12px var(--font-mono)",
      fill: 'var(--ink)'
    }
  }, fmt(demand[i])), /*#__PURE__*/React.createElement("text", {
    x: 556,
    y: 52 + i * 92,
    style: {
      font: "500 12px var(--font-sans)",
      fill: 'var(--mut)'
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, "Each edge carries its unit cost. Sources on the left (supply inside the node), destinations on the right (demand). Switch back to Matrix to edit values."))));
}
Object.assign(window, {
  EditorScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/argmin/EditorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/argmin/GiftsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  TextInput,
  SegmentedControl,
  Overline
} = window.ArgminDesignSystem_b29498;
const gfCol = i => `var(--cat-${i % 6 + 1})`;
function GiftsScreen({
  onHome
}) {
  const [title, setTitle] = React.useState('My gift list');
  const [view, setView] = React.useState('Matrix');
  const [friends, setFriends] = React.useState(['Mara', 'Noah', 'Priya']);
  const [gifts, setGifts] = React.useState([{
    n: 'Wool scarf',
    q: 1
  }, {
    n: 'Coffee sampler',
    q: 1
  }, {
    n: 'Board game',
    q: 2
  }, {
    n: 'Scented candle',
    q: 1
  }, {
    n: 'Photo book',
    q: 3
  }, {
    n: 'Chocolate box',
    q: 1
  }]);
  const [given, setGiven] = React.useState([{
    g: 0,
    to: 1
  }, {
    g: 2,
    to: 0
  }, {
    g: 2,
    to: 2
  }, {
    g: 4,
    to: 0
  }]);
  const history = [{
    n: 'Scented candle',
    to: 1,
    when: 'Birthday ’25'
  }, {
    n: 'Photo book',
    to: 2,
    when: 'Holidays ’25'
  }, {
    n: 'Chocolate box',
    to: 0,
    when: 'Holidays ’25'
  }];
  const [drag, setDrag] = React.useState(null),
    [over, setOver] = React.useState(null),
    [newG, setNewG] = React.useState('');
  const qOf = i => Math.max(1, +gifts[i].q || 1);
  const usedOf = i => given.filter(x => x.g === i).length;
  const leftOf = i => qOf(i) - usedOf(i);
  const total = gifts.reduce((a, x) => a + Math.max(1, +x.q || 1), 0),
    done = given.length,
    leftN = total - done;
  const assign = (gi, fi) => {
    if (leftOf(gi) > 0) setGiven([...given, {
      g: gi,
      to: fi
    }]);
  };
  const unassign = (gi, fi) => {
    const vi = given.findIndex(x => x.g === gi && x.to === fi);
    if (vi >= 0) setGiven(given.filter((_, i) => i !== vi));
  };
  const cellBtn = {
    width: '100%',
    height: '100%',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  };
  const headH = 40,
    rowH = 44,
    colW = 104;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Gift assignment board",
    style: {
      maxWidth: 1020,
      margin: '0 auto',
      padding: '28px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mut)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      cursor: 'pointer'
    }
  }, "Problems"), " / Gift assignment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    variant: "title",
    value: title,
    onChange: e => setTitle(e.target.value),
    style: {
      minWidth: 180,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ['Board', 'Matrix'],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      const counts = friends.map((_, fi) => given.filter(g => g.to === fi).length);
      const add = [];
      gifts.forEach((g, gi) => {
        let left = Math.max(1, +g.q || 1) - given.filter(y => y.g === gi).length;
        while (left-- > 0) {
          let m = 0;
          counts.forEach((c, i) => {
            if (c < counts[m]) m = i;
          });
          add.push({
            g: gi,
            to: m
          });
          counts[m]++;
        }
      });
      setGiven([...given, ...add]);
    }
  }, "Spread evenly")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '12px 0 18px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: leftN === 0 ? 'ok' : 'warn'
  }, leftN === 0 ? `All ${total} gifts assigned` : `${done} of ${total} gifts assigned`), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--mut)'
    }
  }, gifts.length, " gifts \xD7 ", friends.length, " friends")), view === 'Matrix' ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      border: '1px solid var(--line)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 190,
      height: headH,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      borderBottom: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      color: 'var(--mut)'
    }
  }, "gift / friend"), friends.map((f, fi) => /*#__PURE__*/React.createElement("div", {
    key: fi,
    style: {
      width: colW,
      height: headH,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      borderBottom: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      fontSize: 12,
      fontWeight: 600
    }
  }, f)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: headH,
      background: 'var(--head)',
      borderBottom: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 14,
      boxSizing: 'border-box',
      fontSize: '11.5px',
      fontWeight: 600
    }
  }, "In pile")), gifts.map((g, gi) => {
    const left = leftOf(g ? gi : gi);
    return /*#__PURE__*/React.createElement("div", {
      key: gi,
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 190,
        height: rowH,
        background: 'var(--head)',
        borderRight: '1px solid var(--line2)',
        borderBottom: '1px solid var(--line2)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingLeft: 12,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: gfCol(gi)
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: '12.5px',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, g.n), qOf(gi) > 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        color: 'var(--mut)',
        paddingRight: 10
      }
    }, "\xD7", qOf(gi))), friends.map((f, fi) => {
      const has = given.some(x => x.g === gi && x.to === fi);
      const can = has || left > 0;
      return /*#__PURE__*/React.createElement("div", {
        key: fi,
        style: {
          width: colW,
          height: rowH,
          borderRight: '1px solid var(--line2)',
          borderBottom: '1px solid var(--line2)',
          boxSizing: 'border-box'
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => has ? unassign(gi, fi) : assign(gi, fi),
        title: has ? `Take back from ${f}` : can ? `Give to ${f}` : 'None left in pile',
        disabled: !can,
        style: {
          ...cellBtn,
          cursor: can ? 'pointer' : 'default'
        },
        onMouseEnter: e => {
          if (can && !has) e.currentTarget.firstChild.style.opacity = 1;
        },
        onMouseLeave: e => {
          if (!has) e.currentTarget.firstChild.style.opacity = 0;
        }
      }, has ? /*#__PURE__*/React.createElement("span", {
        style: {
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: gfCol(gi)
        }
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          width: 12,
          height: 12,
          borderRadius: '50%',
          border: `1.5px dashed ${can ? 'var(--mut)' : 'var(--line2)'}`,
          boxSizing: 'border-box',
          opacity: 0,
          transition: 'opacity .12s'
        }
      })));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 96,
        height: rowH,
        background: 'var(--head)',
        borderBottom: '1px solid var(--line2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 14,
        boxSizing: 'border-box',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: left === 0 ? 'var(--ok)' : 'var(--ink)',
        fontWeight: 600
      }
    }, left === 0 ? '✓ 0' : left));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 190,
      height: 40,
      background: 'var(--head)',
      borderRight: '1px solid var(--line2)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      boxSizing: 'border-box',
      fontSize: '11.5px',
      fontWeight: 600
    }
  }, "Received"), friends.map((f, fi) => {
    const c = given.filter(x => x.to === fi).length;
    return /*#__PURE__*/React.createElement("div", {
      key: fi,
      style: {
        width: colW,
        height: 40,
        background: 'var(--head)',
        borderRight: '1px solid var(--line2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: c === 0 ? 'var(--warn)' : 'var(--mut)'
      }
    }, c);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 40,
      background: 'var(--head)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 14,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: leftN === 0 ? 'var(--ok)' : 'var(--warn)',
      fontWeight: 600
    }
  }, leftN === 0 ? '✓ 0' : leftN)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, "Each dot is one handed-out copy \u2014 click an empty cell to give that gift, click a dot to take it back. The board and the matrix are two views of the same list.")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "14px 16px",
    style: {
      width: 280,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    count: leftN
  }, "GIFTS LEFT"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, gifts.map((g, gi) => {
    const left = leftOf(gi);
    if (left <= 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: gi,
      draggable: true,
      onDragStart: () => setDrag(gi),
      onDragEnd: () => {
        setDrag(null);
        setOver(null);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '7px 10px',
        border: '1px solid var(--line)',
        borderRadius: 8,
        background: 'var(--surface)',
        fontSize: '12.5px',
        fontWeight: 500,
        cursor: 'grab',
        userSelect: 'none',
        opacity: drag === gi ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: gfCol(gi)
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, g.n), left > 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        color: 'var(--mut)'
      }
    }, "\xD7", left));
  }), leftN === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      border: '1px dashed color-mix(in oklab, var(--ok) 45%, var(--line))',
      borderRadius: 9,
      fontSize: '12.5px',
      lineHeight: 1.45,
      color: 'var(--ok)',
      fontWeight: 600
    }
  }, "All gifts assigned \u2014 nothing left to keep in your head.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "New gift\u2026",
    value: newG,
    onChange: e => setNewG(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && newG.trim()) {
        setGifts([...gifts, {
          n: newG.trim(),
          q: 1
        }]);
        setNewG('');
      }
    },
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      if (newG.trim()) {
        setGifts([...gifts, {
          n: newG.trim(),
          q: 1
        }]);
        setNewG('');
      }
    }
  }, "Add"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 320,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
      gap: 14
    }
  }, friends.map((f, fi) => {
    const mine = given.map((x, vi) => ({
      x,
      vi
    })).filter(o => o.x.to === fi);
    return /*#__PURE__*/React.createElement(Card, {
      key: fi,
      padding: "12px 14px",
      style: {
        outline: over === fi ? '2px solid var(--accent)' : 'none'
      },
      onDragOver: e => {
        e.preventDefault();
        setOver(fi);
      },
      onDragLeave: () => setOver(o => o === fi ? null : o),
      onDrop: e => {
        e.preventDefault();
        if (drag != null) assign(drag, fi);
        setDrag(null);
        setOver(null);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 13,
        fontWeight: 600
      }
    }, f), /*#__PURE__*/React.createElement(Badge, {
      tone: mine.length === 0 ? 'warn' : 'ok'
    }, mine.length === 0 ? 'none yet' : mine.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        minHeight: 44
      }
    }, mine.map(o => /*#__PURE__*/React.createElement("span", {
      key: o.vi,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '6px 9px',
        border: '1px solid var(--line)',
        borderRadius: 8,
        background: 'var(--head)',
        fontSize: '12.5px',
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: gfCol(o.x.g)
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, gifts[o.x.g] ? gifts[o.x.g].n : '?'), /*#__PURE__*/React.createElement("button", {
      onClick: () => setGiven(given.filter((_, i) => i !== o.vi)),
      title: "Take back",
      style: {
        flex: 'none',
        width: 16,
        height: 16,
        border: 'none',
        borderRadius: 5,
        background: 'none',
        cursor: 'pointer',
        fontSize: '10.5px',
        lineHeight: 1,
        color: 'var(--mut)',
        padding: 0
      }
    }, "\xD7"))), mine.length === 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--mut)',
        padding: '6px 0'
      }
    }, "Drop a gift here")), history.some(h => h.to === fi) && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        paddingTop: 8,
        borderTop: '1px dashed var(--line)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, history.filter(h => h.to === fi).map((h, hi) => /*#__PURE__*/React.createElement("span", {
      key: hi,
      title: `Already got this — ${h.when}`,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '4px 9px',
        fontSize: 12,
        color: 'var(--mut)',
        opacity: 0.75
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 8,
        height: 8,
        borderRadius: '50%',
        border: '1.5px solid var(--mut)',
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        textDecoration: 'line-through',
        textDecorationColor: 'var(--line)'
      }
    }, h.n), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px'
      }
    }, h.when)))));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFriends([...friends, 'Friend ' + (friends.length + 1)]),
    style: {
      minHeight: 110,
      border: '1px dashed var(--line)',
      borderRadius: 12,
      background: 'none',
      cursor: 'pointer',
      fontSize: '12.5px',
      fontWeight: 500,
      color: 'var(--mut)'
    }
  }, "+ Add friend"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, "Drag a gift onto a friend \u2014 each copy leaves the pile as you give it. Switch to Matrix to review who already got what.")));
}
Object.assign(window, {
  GiftsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/argmin/GiftsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/argmin/HomeScreen.jsx
try { (() => {
const {
  Card,
  Tag,
  GlyphTile,
  Chip,
  Button
} = window.ArgminDesignSystem_b29498;
function ModelRow({
  m,
  ic,
  first,
  onOpen
}) {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(m.id),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '11px 8px',
      margin: '0 -8px',
      borderRadius: 9,
      cursor: 'pointer',
      background: hov ? 'var(--head)' : 'transparent',
      borderTop: first ? 'none' : '1px solid var(--line2)'
    }
  }, /*#__PURE__*/React.createElement(GlyphTile, {
    ic: ic,
    style: {
      transform: hov ? 'scale(1.03)' : 'none',
      transition: 'transform .22s ease'
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: m.g
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13.5px',
      fontWeight: 500
    }
  }, m.name), m.tag && /*#__PURE__*/React.createElement(Tag, {
    tone: m.tagTone || 'warn'
  }, m.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 1.35,
      color: 'var(--mut)'
    }
  }, m.desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mut)'
    }
  }, "\u203A"));
}
function HomeScreen({
  onOpen
}) {
  const [wizOpen, setWizOpen] = React.useState(false);
  const [wiz, setWiz] = React.useState(null);
  const recs = {
    ship: {
      t: 'Transportation problem',
      w: 'You have sources with supply, destinations with demand, and a cost for each pair. If goods pass through depots on the way, pick transshipment instead.',
      id: 'transportation'
    },
    pick: {
      t: 'Knapsack (0/1)',
      w: 'You are selecting items under a budget or capacity limit. If you must cover every requirement with the fewest choices, look at set covering.',
      id: 'knapsack'
    },
    route: {
      t: 'Vehicle routing',
      w: 'Several vehicles with capacity limits, each covering part of the stops. A single vehicle visiting every stop once is a travelling salesman problem.',
      id: 'vrp'
    },
    pair: {
      t: 'Assignment problem',
      w: 'One-to-one pairing at least total cost. If both sides rank each other instead of having costs, use stable matching.',
      id: 'assignment'
    }
  };
  const chips = [['ship', 'I\u2019m moving or shipping things'], ['pick', 'I\u2019m choosing items under a limit'], ['route', 'I\u2019m planning visits or routes'], ['pair', 'I\u2019m pairing people or tasks']];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Home \u2014 problem picker",
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '44px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 300
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 27,
      fontWeight: 600,
      letterSpacing: '-0.015em'
    }
  }, "What are you optimising?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--mut)',
      maxWidth: 580,
      textWrap: 'pretty'
    }
  }, "Pick a model below. Argmin solves it and shows every step of the working \u2014 not just the answer.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-network.svg",
    width: "300",
    height: "128",
    alt: "",
    style: {
      flex: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 0 28px',
      border: '1px dashed var(--line)',
      borderRadius: 12,
      background: 'var(--surface)',
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Not sure which one?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--mut)'
    }
  }, "Answer one question and we'll point you at the right model."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setWizOpen(!wizOpen)
  }, wizOpen ? 'Hide' : 'Help me choose')), wizOpen && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--mut)'
    }
  }, "What are you trying to decide?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, chips.map(([k, l]) => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    selected: wiz === k,
    onClick: () => setWiz(k)
  }, l))), wiz && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      padding: '14px 16px',
      border: '1px solid var(--line)',
      borderRadius: 10,
      background: 'var(--head)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13.5px',
      fontWeight: 600
    }
  }, recs[wiz].t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontSize: '12.5px',
      lineHeight: 1.5,
      color: 'var(--mut)',
      textWrap: 'pretty'
    }
  }, recs[wiz].w)), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onOpen(recs[wiz].id)
  }, "Open the editor \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))',
      gap: 20
    }
  }, KIT.categories.map(cat => /*#__PURE__*/React.createElement(Card, {
    key: cat.name,
    shadow: true,
    radius: "var(--r-card-lg)",
    ic: cat.ic,
    padding: "20px 20px 10px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: `var(--${cat.ic})`,
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600
    }
  }, cat.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: `var(--${cat.ic})`,
      background: `color-mix(in oklab, var(--${cat.ic}) 10%, var(--surface))`,
      padding: '2px 7px',
      borderRadius: 5
    }
  }, cat.count, " models")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 8px',
      fontSize: '12.5px',
      color: 'var(--mut)'
    }
  }, cat.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, cat.models.map((m, i) => /*#__PURE__*/React.createElement(ModelRow, {
    key: m.id,
    m: m,
    ic: cat.ic,
    first: i === 0,
    onOpen: onOpen
  })))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/argmin/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/argmin/ResultsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Tabs,
  StepTimeline,
  Metric,
  Overline
} = window.ArgminDesignSystem_b29498;
const fmt = n => (+n || 0).toLocaleString('en-US');
function AllocMatrix({
  alloc,
  deltas,
  entering,
  opt,
  hover,
  setHover
}) {
  const ex = KIT.ex;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 504
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 10,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      color: 'var(--mut)'
    }
  }, "cost / route"), ex.dst.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 96,
      height: 36,
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 5,
      paddingTop: 8,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      color: 'var(--mut)'
    }
  }, ex.demand[i])))), ex.src.map((s, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 64,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 10,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      fontWeight: 600
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      color: 'var(--mut)'
    }
  }, fmt(ex.supply[r]))), ex.dst.map((_, c) => {
    const k = r + ',' + c,
      a = alloc[k],
      d = deltas ? deltas[k] : undefined,
      ent = entering === k,
      hov = hover === k;
    let ring = 'inset 0 0 0 0.5px var(--line2)';
    if (ent) ring = 'inset 0 0 0 2px var(--accent)';else if (hov) ring = 'inset 0 0 0 2px var(--accent)';
    const bg = a != null ? opt ? 'color-mix(in oklab, var(--accent) 15%, var(--surface))' : 'color-mix(in oklab, var(--ink) 8%, var(--surface))' : 'var(--surface)';
    return /*#__PURE__*/React.createElement("div", {
      key: c,
      onMouseEnter: setHover ? () => setHover(k) : undefined,
      onMouseLeave: setHover ? () => setHover(null) : undefined,
      style: {
        position: 'relative',
        width: 96,
        height: 64,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: bg,
        boxShadow: ring,
        cursor: a && setHover ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 5,
        right: 7,
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        color: 'var(--mut)'
      }
    }, ex.costs[r][c]), a != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 17,
        fontWeight: 600,
        color: opt ? 'color-mix(in oklab, var(--accent) 80%, var(--ink))' : 'var(--ink)'
      }
    }, fmt(a)), a == null && d !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        bottom: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 500,
        color: d < 0 ? 'var(--accent)' : 'var(--mut)'
      }
    }, d > 0 ? '+' + d : '−' + -d));
  }))));
}
function ResultsScreen({
  onEdit,
  onHome
}) {
  const [tab, setTab] = React.useState(0);
  const [step, setStep] = React.useState(1);
  const [hover, setHover] = React.useState(null);
  const ex = KIT.ex,
    S = KIT.steps,
    cs = S[Math.min(step, S.length - 1)];
  const aL = [78, 168, 258],
    aR = [52, 136, 220, 304];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Results \u2014 solve output",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '28px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--mut)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      cursor: 'pointer'
    }
  }, "Problems"), " / Transportation / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, "Results")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, "Denver network"), /*#__PURE__*/React.createElement(Badge, {
    tone: "ok",
    solid: true
  }, "\u2713 EXACT OPTIMUM"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--mut)'
    }
  }, "MODI \xB7 from North-West Corner \xB7 2 iterations"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onEdit
  }, "Edit data"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Save")), /*#__PURE__*/React.createElement(Metric, {
    label: "min Z =",
    value: "2,850",
    note: "total shipping cost \u2014 down from 4,400 at the initial solution",
    style: {
      marginTop: 14
    }
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Answer', 'Steps', 'Insight'],
    active: tab,
    onChange: setTab,
    style: {
      marginTop: 20
    }
  }), tab === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 22,
      marginTop: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepTimeline, {
    steps: S,
    active: step,
    onSelect: setStep
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      width: 30,
      height: 28,
      padding: 0
    },
    onClick: () => setStep(Math.max(0, step - 1))
  }, "\u2039"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      width: 30,
      height: 28,
      padding: 0
    },
    onClick: () => setStep(Math.min(S.length - 1, step + 1))
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, step + 1, " / ", S.length))), /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px",
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      flex: 1,
      minWidth: 220
    }
  }, cs.label, cs.sub ? ' — ' + cs.sub : ''), cs.meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 'none',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '3px 8px',
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, m))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 18px',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--mut)',
      maxWidth: 620,
      textWrap: 'pretty'
    }
  }, cs.note), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(AllocMatrix, {
    alloc: cs.alloc,
    deltas: cs.deltas,
    entering: cs.entering,
    opt: cs.opt
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      marginTop: 16,
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: 'color-mix(in oklab, var(--ink) 8%, var(--surface))',
      boxShadow: 'inset 0 0 0 1px var(--line)'
    }
  }), "allocated units"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      boxShadow: 'inset 0 0 0 2px var(--accent)'
    }
  }), "entering cell"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, "\u0394"), "cost change per unit if an empty route enters")))), tab === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(480px,1fr))',
      gap: 22,
      marginTop: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement(Overline, null, "ALLOCATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(AllocMatrix, {
    alloc: KIT.final,
    opt: true,
    hover: hover,
    setHover: setHover
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, "6 of 12 routes used \xB7 every supply and demand met exactly \xB7 hover a cell to trace it in the diagram")), /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement(Overline, null, "FLOW DIAGRAM"), /*#__PURE__*/React.createElement("svg", {
    width: "470",
    height: "356",
    style: {
      maxWidth: '100%',
      marginTop: 6
    }
  }, Object.entries(KIT.final).map(([k, u]) => {
    const [r, c] = k.split(',').map(Number);
    const on = hover === k;
    return /*#__PURE__*/React.createElement("g", {
      key: k
    }, /*#__PURE__*/React.createElement("line", {
      x1: 124,
      y1: aL[r],
      x2: 336,
      y2: aR[c],
      stroke: on ? 'var(--accent)' : 'color-mix(in oklab, var(--accent) 55%, var(--mut))',
      strokeWidth: 1.5 + u / 55,
      strokeLinecap: "round",
      opacity: on ? 1 : 0.7,
      style: {
        cursor: 'pointer'
      },
      onMouseEnter: () => setHover(k),
      onMouseLeave: () => setHover(null)
    }), /*#__PURE__*/React.createElement("text", {
      x: 124 + (336 - 124) * 0.55,
      y: aL[r] + (aR[c] - aL[r]) * 0.55 - 7,
      textAnchor: "middle",
      style: {
        font: (on ? '600' : '500') + " 11px var(--font-mono)",
        fill: on ? 'var(--accent)' : 'var(--mut)'
      }
    }, fmt(u)));
  }), KIT.ex.src.map((n, i) => /*#__PURE__*/React.createElement("g", {
    key: 's' + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 96,
    cy: aL[i],
    r: 26,
    fill: "var(--head)",
    stroke: "var(--line)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 96,
    y: aL[i] + 4,
    textAnchor: "middle",
    style: {
      font: "600 11.5px var(--font-mono)",
      fill: 'var(--ink)'
    }
  }, fmt(ex.supply[i])), /*#__PURE__*/React.createElement("text", {
    x: 62,
    y: aL[i] + 4,
    textAnchor: "end",
    style: {
      font: "500 11.5px var(--font-sans)",
      fill: 'var(--mut)'
    }
  }, n))), KIT.ex.dst.map((n, i) => /*#__PURE__*/React.createElement("g", {
    key: 'd' + i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 364,
    cy: aR[i],
    r: 26,
    fill: "var(--head)",
    stroke: "var(--line)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 364,
    y: aR[i] + 4,
    textAnchor: "middle",
    style: {
      font: "600 11.5px var(--font-mono)",
      fill: 'var(--ink)'
    }
  }, fmt(ex.demand[i])), /*#__PURE__*/React.createElement("text", {
    x: 398,
    y: aR[i] + 4,
    style: {
      font: "500 11.5px var(--font-sans)",
      fill: 'var(--mut)'
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11.5px',
      color: 'var(--mut)'
    }
  }, "Edge width \u221D units shipped \xB7 hover a route to trace it in the matrix"))), tab === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))',
      gap: 22,
      marginTop: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600
    }
  }, "Shadow prices"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 14px',
      fontSize: '12.5px',
      lineHeight: 1.5,
      color: 'var(--mut)',
      textWrap: 'pretty'
    }
  }, "What one extra unit of supply or demand would do to total cost, relative to Denver (u = 0)."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 6
    }
  }, "WAREHOUSES u\u1D62"), [['Denver', '0'], ['Chicago', '4'], ['Atlanta', '2']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '5px 0',
      borderTop: '1px solid var(--line2)',
      fontSize: '12.5px'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 6
    }
  }, "SHOPS v\u2C7C"), [['Boston', '−2'], ['Newark', '1'], ['Miami', '1'], ['Austin', '0']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '5px 0',
      borderTop: '1px solid var(--line2)',
      fontSize: '12.5px'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, v)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600
    }
  }, "Unused routes \u2014 reduced costs"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 14px',
      fontSize: '12.5px',
      lineHeight: 1.5,
      color: 'var(--mut)',
      textWrap: 'pretty'
    }
  }, "How much each unused route's cost must fall before it would enter the plan."), [['Chicago → Newark', '+1', 1], ['Denver → Austin', '+4'], ['Denver → Boston', '+5'], ['Chicago → Austin', '+5'], ['Denver → Miami', '+6'], ['Atlanta → Boston', '+8']].map(([l, v, hot]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 0',
      borderTop: '1px solid var(--line2)',
      fontSize: '12.5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: hot ? 600 : 400
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: hot ? 600 : 400
    }
  }, v)), hot && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11.5px',
      color: 'var(--mut)',
      paddingBottom: 6
    }
  }, "Closest to entering \u2014 watch this rate.")))), /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600
    }
  }, "How stable is this answer?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 12px',
      fontSize: '12.5px',
      lineHeight: 1.5,
      color: 'var(--mut)',
      textWrap: 'pretty'
    }
  }, "Ranges the plan survives \u2014 beyond them a different allocation becomes optimal."), ['Denver → Newark rate can rise from 1 to 5 before the plan changes (Denver → Austin would enter).', 'Chicago → Boston is safe up to 7 (from 2).', 'All 7 supply and demand constraints are binding — the problem is balanced, so there is no slack anywhere.', 'The optimum is unique: no empty route prices at exactly Δ = 0.'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '8px 0',
      borderTop: '1px solid var(--line2)',
      fontSize: '12.5px',
      lineHeight: 1.5
    }
  }, t)))));
}
Object.assign(window, {
  ResultsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/argmin/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/argmin/SavedScreen.jsx
try { (() => {
const {
  Badge,
  GlyphTile
} = window.ArgminDesignSystem_b29498;
const savedCols = '1.5fr 1.1fr 0.7fr 0.8fr 1.5fr 0.7fr';
function SavedRow({
  r,
  first,
  onOpen
}) {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'grid',
      gridTemplateColumns: savedCols,
      gap: 12,
      padding: '13px 18px',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '12.5px',
      borderTop: first ? 'none' : '1px solid var(--line2)',
      background: hov ? 'var(--head)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(GlyphTile, {
    size: "sm",
    ic: r.ic
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: r.g,
    w: 24,
    h: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mut)'
    }
  }, r.model), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--mut)'
    }
  }, r.size), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      textAlign: 'right'
    }
  }, r.obj), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    small: true,
    style: {
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      boxSizing: 'border-box'
    }
  }, r.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mut)',
      textAlign: 'right'
    }
  }, r.upd));
}
function SavedScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Saved problems",
    style: {
      maxWidth: 960,
      margin: '0 auto',
      padding: '44px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 27,
      fontWeight: 600,
      letterSpacing: '-0.015em'
    }
  }, "Saved problems"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 22px',
      fontSize: 14,
      color: 'var(--mut)'
    }
  }, "Your past models \u2014 click one to reopen its solution."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: savedCols,
      gap: 12,
      padding: '10px 18px',
      background: 'var(--head)',
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.06em',
      color: 'var(--mut)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "NAME"), /*#__PURE__*/React.createElement("span", null, "MODEL"), /*#__PURE__*/React.createElement("span", null, "SIZE"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "OBJECTIVE"), /*#__PURE__*/React.createElement("span", null, "METHOD"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "UPDATED")), KIT.saved.map((r, i) => /*#__PURE__*/React.createElement(SavedRow, {
    key: r.name,
    r: r,
    first: i === 0,
    onOpen: i === 0 ? onOpen : undefined
  }))));
}
Object.assign(window, {
  SavedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/argmin/SavedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/argmin/data.jsx
try { (() => {
// Argmin UI kit — shared demo data (from problems/*/data.js in the source repo)
const KIT = {
  categories: [{
    name: 'Network flow',
    ic: 'blue',
    count: 6,
    desc: 'Move things through a network at least cost.',
    models: [{
      id: 'transportation',
      g: 'transportation',
      name: 'Transportation',
      desc: 'Ship goods from warehouses to shops at least cost.'
    }, {
      id: 'assignment',
      g: 'assignment',
      name: 'Assignment',
      desc: 'Give each worker exactly one task, minimising total cost.'
    }, {
      id: 'transshipment',
      g: 'transshipment',
      name: 'Transshipment',
      desc: 'Route goods through intermediate depots on the way.'
    }, {
      id: 'mincostflow',
      g: 'mincostflow',
      name: 'Minimum cost flow',
      desc: 'Push a required amount through a network as cheaply as possible.'
    }, {
      id: 'maxflow',
      g: 'maxflow',
      name: 'Maximum flow',
      desc: 'Find the most that can move from source to sink.'
    }, {
      id: 'shortestpath',
      g: 'shortestpath',
      name: 'Shortest path',
      desc: 'Cheapest route between two points in a network.'
    }]
  }, {
    name: 'Selection',
    ic: 'teal',
    count: 3,
    desc: 'Choose the best subset under limits.',
    models: [{
      id: 'knapsack',
      g: 'knapsack',
      name: 'Knapsack',
      tag: 'NP-HARD',
      desc: 'Pick the best items that fit a budget or weight — 0/1 and bounded.'
    }, {
      id: 'setcovering',
      g: 'setcovering',
      name: 'Set covering',
      tag: 'NP-HARD',
      desc: 'Choose the fewest sets that cover every requirement.'
    }, {
      id: 'binpacking',
      g: 'binpacking',
      name: 'Bin packing',
      tag: 'NP-HARD',
      desc: 'Fit items into the fewest containers.'
    }]
  }, {
    name: 'Routing & sequencing',
    ic: 'rose',
    count: 3,
    desc: 'Order and route work well.',
    models: [{
      id: 'tsp',
      g: 'tsp',
      name: 'Travelling salesman',
      tag: 'NP-HARD',
      desc: 'Visit every stop once and return, minimising distance.'
    }, {
      id: 'vrp',
      g: 'vrp',
      name: 'Vehicle routing',
      tag: 'NP-HARD',
      desc: 'Split stops across a fleet with capacity limits.'
    }, {
      id: 'jobseq',
      g: 'jobseq',
      name: 'Job sequencing',
      desc: 'Order jobs on machines to finish soonest.'
    }]
  }, {
    name: 'Matching',
    ic: 'purple',
    count: 3,
    desc: 'Pair two sides so nobody is left worse off.',
    models: [{
      id: 'stable',
      g: 'stable',
      name: 'Stable matching',
      desc: 'Pair two sides by preference so no pair wants to defect — Gale–Shapley.'
    }, {
      id: 'bipartite',
      g: 'bipartite',
      name: 'Bipartite matching',
      desc: 'Match as many pairs as possible across two groups.'
    }, {
      id: 'gifts',
      g: 'gifts',
      name: 'Gift assignment',
      tag: 'BOARD',
      tagTone: 'teal',
      desc: 'List gifts by name and hand them out — each one leaves the pile as you give it.'
    }]
  }],
  ex: {
    src: ['Denver', 'Chicago', 'Atlanta'],
    dst: ['Boston', 'Newark', 'Miami', 'Austin'],
    costs: [[3, 1, 7, 4], [2, 6, 5, 9], [8, 3, 3, 2]],
    supply: [300, 400, 500],
    demand: [250, 350, 400, 200]
  },
  final: {
    '0,1': 300,
    '1,0': 250,
    '1,2': 150,
    '2,1': 50,
    '2,2': 250,
    '2,3': 200
  },
  steps: [{
    label: 'Initial solution',
    sub: 'North-West Corner',
    zt: '4,400',
    meta: ['Z = 4,400', '6 basic cells = m+n−1 → non-degenerate'],
    alloc: {
      '0,0': 250,
      '0,1': 50,
      '1,1': 300,
      '1,2': 100,
      '2,2': 300,
      '2,3': 200
    },
    note: 'Fill from the top-left, exhausting each row\u2019s supply and each column\u2019s demand in turn. Fast but cost-blind — it lands at Z = 4,400. With 6 basic cells (= m+n−1) the solution is non-degenerate, so MODI can price every empty cell.'
  }, {
    label: 'Iteration 1',
    sub: 'enter Chicago → Boston',
    zt: '2,900',
    meta: ['Δ = −6', 'θ = 250', 'Z 4,400 → 2,900'],
    entering: '1,0',
    alloc: {
      '0,0': 250,
      '0,1': 50,
      '1,1': 300,
      '1,2': 100,
      '2,2': 300,
      '2,3': 200
    },
    deltas: {
      '0,2': 7,
      '0,3': 5,
      '1,0': -6,
      '1,3': 5,
      '2,0': 2,
      '2,1': -1
    },
    note: 'Duals u and v are computed from the 6 basic cells, then every empty cell is priced: Δ = c − u − v. Chicago → Boston prices at Δ = −6 — every unit rerouted there saves 6. Shifting θ = 250 units around the closed loop drops cost to 2,900.'
  }, {
    label: 'Iteration 2',
    sub: 'enter Atlanta → Newark',
    zt: '2,850',
    meta: ['Δ = −1', 'θ = 50', 'Z 2,900 → 2,850'],
    entering: '2,1',
    alloc: {
      '0,1': 300,
      '1,0': 250,
      '1,1': 50,
      '1,2': 100,
      '2,2': 300,
      '2,3': 200
    },
    deltas: {
      '0,0': 6,
      '0,2': 7,
      '0,3': 5,
      '1,3': 5,
      '2,0': 8,
      '2,1': -1
    },
    note: 'One cell still prices negative: Atlanta → Newark at Δ = −1. The loop through Chicago\u2019s row shifts θ = 50 units and removes the last inefficiency.'
  }, {
    label: 'Optimality check',
    sub: 'all Δ ≥ 0 — proven optimal',
    zt: '✓',
    opt: true,
    meta: ['all Δᵢⱼ ≥ 0', 'Z* = 2,850', 'unique optimum'],
    alloc: {
      '0,1': 300,
      '1,0': 250,
      '1,2': 150,
      '2,1': 50,
      '2,2': 250,
      '2,3': 200
    },
    deltas: {
      '0,0': 5,
      '0,2': 6,
      '0,3': 4,
      '1,1': 1,
      '1,3': 5,
      '2,0': 8
    },
    note: 'Every empty cell now has Δ ≥ 0 — no reroute can cut cost further, which proves optimality. No Δ equals 0, so this optimum is unique.'
  }],
  saved: [{
    g: 'transportation',
    ic: 'blue',
    name: 'Denver network',
    model: 'Transportation',
    size: '3×4',
    obj: '2,850',
    badge: 'EXACT · MODI',
    tone: 'ok',
    upd: '2 h ago'
  }, {
    g: 'assignment',
    ic: 'blue',
    name: 'Crew rota — March',
    model: 'Assignment',
    size: '6×6',
    obj: '41.0 h',
    badge: 'EXACT · HUNGARIAN',
    tone: 'ok',
    upd: 'yesterday'
  }, {
    g: 'binpacking',
    ic: 'teal',
    name: 'Pallet loading',
    model: 'Bin packing',
    size: '48 items',
    obj: '11 bins',
    badge: 'HEURISTIC · FFD · LB 10',
    tone: 'warn',
    upd: '3 d ago'
  }, {
    g: 'tsp',
    ic: 'rose',
    name: 'Sales loop — Q3',
    model: 'Travelling salesman',
    size: '12 stops',
    obj: '342 km',
    badge: 'HEURISTIC · 2-OPT · ≤3%',
    tone: 'warn',
    upd: '2 w ago'
  }, {
    g: 'shortestpath',
    ic: 'blue',
    name: 'Campus shuttle',
    model: 'Shortest path',
    size: '24 nodes',
    obj: '17.4 km',
    badge: 'EXACT · DIJKSTRA',
    tone: 'ok',
    upd: '3 w ago'
  }]
};
// Glyph: fetches an assets/glyphs SVG and inlines it so currentColor tints apply
function Glyph({
  name,
  w = 50,
  h = 34
}) {
  const [svg, setSvg] = React.useState(null);
  React.useEffect(() => {
    let on = true;
    fetch('../../assets/glyphs/' + name + '.svg').then(r => r.text()).then(t => {
      if (on) setSvg(t.replace('width="38" height="26"', `width="${w}" height="${h}"`));
    });
    return () => {
      on = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    },
    dangerouslySetInnerHTML: {
      __html: svg || `<svg width="${w}" height="${h}"></svg>`
    }
  });
}
Object.assign(window, {
  KIT,
  Glyph
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/argmin/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.GlyphTile = __ds_scope.GlyphTile;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.StepTimeline = __ds_scope.StepTimeline;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
