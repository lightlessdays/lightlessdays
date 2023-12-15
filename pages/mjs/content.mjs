import { a as Za, b as Ta, c as Ea } from "./chunk-ZGOLLQPH.mjs";
import { a as Zr } from "./chunk-ROCLNFIH.mjs";
import { a as Fa, c as Lr } from "./chunk-XOYI23HP.mjs";
import { a as Ca, b as Vr, c as Hr } from "./chunk-MR7AJCYU.mjs";
import { a as Da, b as Aa, c as za } from "./chunk-6RQEMMF7.mjs";
import { a as He, b as Le, c as Ze } from "./chunk-GK4TS2HO.mjs";
import {
  d as zr,
  e as Wa,
  f as Ra,
  g as Na,
  h as ja,
  i as Ia,
  j as Ma,
  k as ke,
  o as hr,
  p as Qe,
  q as Fr,
  r as Va,
  s as Ha,
  t as La,
} from "./chunk-XRN3GF36.mjs";
import "./chunk-42U43NKG.mjs";
import { a as r, b as p } from "./chunk-2ZQLXL4D.mjs";
import {
  $ as se,
  B as ya,
  F as wa,
  G as ue,
  J as $,
  K as Dr,
  M as a,
  P as ge,
  R as q,
  S as Ge,
  V as oe,
  W as va,
  X as ba,
  Y as Ar,
  Z as ze,
  b as Mr,
  ba as Xe,
  c as O,
  d as pa,
  f as ha,
  fa as xe,
  g as X,
  ga as W,
  ha as _a,
  i as ua,
  ia as Pa,
  j as De,
  ja as Sa,
  k as Se,
  l as ce,
  la as ka,
  m as Ue,
  n as pe,
  na as Fe,
  o as H,
  p as Q,
  pa as Oa,
  qa as Ve,
  r as ie,
  ra as le,
  s as o,
  sa as A,
  t as J,
  ta as ye,
  u as ga,
  ua as L,
  v as he,
  y as Ae,
  z as xa,
} from "./chunk-VFLRZJU7.mjs";
import "./chunk-ELYU6EKT.mjs";
var ur = () => typeof document == "object";
function qt() {
  if (ur()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function Yt() {
  if (ur()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function qa() {
  if (ur()) return !document[Yt()];
}
function Ya() {
  if (!ur()) return;
  let [e, t] = Q(qa()),
    l = () => t(qa());
  return (
    Se(() => {
      let n = qt();
      return (
        document.addEventListener(n, l, !1),
        () => {
          document.removeEventListener(n, l);
        }
      );
    }),
    e
  );
}
function R(e) {
  let {
      slots: t,
      startFrom: l,
      direction: n,
      effectsOptions: m,
      autoPlayControl: d,
      dragControl: u,
      alignment: x,
      gap: f,
      padding: s,
      paddingPerSide: g,
      paddingTop: h,
      paddingRight: z,
      paddingBottom: i,
      paddingLeft: b,
      itemAmount: k,
      fadeOptions: M,
      intervalControl: C,
      transitionControl: _,
      arrowOptions: P,
      borderRadius: y,
      progressOptions: j,
      style: Oe,
    } = e,
    {
      effectsOpacity: F,
      effectsScale: ee,
      effectsRotate: me,
      effectsPerspective: _e,
      effectsHover: U,
    } = m,
    {
      fadeContent: G,
      overflow: V,
      fadeWidth: D,
      fadeInset: re,
      fadeAlpha: Ce,
    } = M,
    {
      showMouseControls: T,
      arrowSize: Y,
      arrowRadius: or,
      arrowFill: sr,
      leftArrow: ae,
      rightArrow: Pe,
      arrowShouldSpace: E = !0,
      arrowShouldFadeIn: lr = !1,
      arrowPosition: I,
      arrowPadding: de,
      arrowGap: Jr,
      arrowPaddingTop: Ke,
      arrowPaddingRight: mt,
      arrowPaddingBottom: dt,
      arrowPaddingLeft: ct,
    } = P,
    {
      showProgressDots: pt,
      dotSize: Ur,
      dotsInset: Gr,
      dotsRadius: ht,
      dotsPadding: ut,
      dotsGap: gt,
      dotsFill: xt,
      dotsBackground: yt,
      dotsActiveOpacity: wt,
      dotsOpacity: vt,
      dotsBlur: Xr,
    } = j,
    bt = g ? `${h}px ${z}px ${i}px ${b}px` : `${s}px`,
    te = Dr.current() === Dr.canvas,
    We = Mr.count(t) > 0,
    w = n === "left" || n === "right",
    fr = n === "right" || n === "bottom";
  if (!We)
    return p("section", {
      style: Kt,
      children: [
        r("div", { style: Bt, children: "\u2B50\uFE0F" }),
        r("p", { style: Jt, children: "Connect to Content" }),
        r("p", {
          style: Ut,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let Be = H(null),
    N = pe(() => t.map((c) => ha()), [t]),
    Pr = H(void 0),
    [v, _t] = Q({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [Pt, Qr] = Q(!1),
    [St, $r] = Q(d),
    [kt, ea] = Q(!1),
    [Re, ra] = Q(!1),
    Sr = [],
    aa = 4;
  te && (aa = 1);
  let ta = ua(() => {
    ya.read(() => {
      if (We && Be.current) {
        let c = t.length - 1,
          B = w ? Be.current.offsetWidth : Be.current.offsetHeight,
          Z = N[0].current
            ? w
              ? N[0].current.offsetLeft
              : N[0].current.offsetTop
            : 0,
          Me =
            (N[c].current
              ? w
                ? N[c].current.offsetLeft + N[c].current.offsetWidth
                : N[c].current.offsetTop + N[c].current.offsetHeight
              : 0) -
            Z +
            f,
          cr = N[0].current
            ? w
              ? N[0].current.offsetWidth
              : N[0].current.offsetHeight
            : 0,
          jr = N[0].current ? N[0].current.offsetWidth : 0,
          Ir = N[0].current ? N[0].current.offsetHeight : 0;
        _t({
          parent: B,
          children: Me,
          item: cr,
          itemWidth: jr,
          itemHeight: Ir,
        });
      }
    });
  }, [We]);
  Ue(() => {
    We && ta();
  }, [We, k]);
  let kr = H(!0);
  Se(
    () =>
      Ca(Be.current, ({ contentSize: c }) => {
        !kr.current && (c.width || c.height) && (ta(), ra(!0)),
          (kr.current = !1);
      }),
    []
  ),
    Se(() => {
      if (Re) {
        let c = setTimeout(() => ra(!1), 500);
        return () => clearTimeout(c);
      }
    }, [Re]);
  let Ne = t?.length,
    mr = te ? 0 : v?.children,
    Or = v?.item + f,
    Ot = l * Or,
    [K, Je] = Q(l + Ne),
    [Ct, na] = Q(!1),
    ia = Ya(),
    oa = fr ? 1 : -1,
    je = ga(mr),
    sa = w ? -l * (v?.itemWidth + f) : -l * (v?.itemHeight + f),
    Cr = () => oa * K * Or,
    Wr = te
      ? 0
      : he(je, (c) => {
          let B = Ae(-mr, -mr * 2, c);
          return isNaN(B) ? 0 : B;
        }),
    Wt = Ae(0, Ne, K),
    Rt = Ae(0, -Ne, K);
  Ue(() => {
    v?.children !== null && !kr.current && Re && je.set(Cr());
  }, [v, mr, oa, Ot, K, Or, Re]);
  let la = () => {
      te ||
        !We ||
        !v.parent ||
        Ct ||
        (je.get() !== Cr() && xa(je, Cr(), _),
        d &&
          St &&
          (Pr.current = setTimeout(() => {
            Je(K + 1), la();
          }, C * 1e3)));
    },
    Ie = (c) => {
      Je(fr ? K - c : K + c);
    },
    Nt = (c) => {
      let B = Ae(0, Ne, K),
        Z = Ae(0, -Ne, K),
        ne = c - B,
        Me = c - Math.abs(Z);
      Je(fr ? K - Me : K + ne);
    },
    jt = () => {
      na(!0);
    },
    It = (c, { offset: B, velocity: Z }) => {
      na(!1);
      let ne = w ? B.x : B.y,
        Me = 200,
        cr = w ? Z.x : Z.y,
        jr = ne < -v.item / 2,
        Ir = ne > v.item / 2,
        Et = Math.abs(ne),
        pr = Math.round(Et / v.item),
        ca = pr === 0 ? 1 : pr;
      cr > Me ? Ie(-ca) : cr < -Me ? Ie(ca) : (jr && Ie(pr), Ir && Ie(-pr));
    };
  Se(() => {
    if (!(!ia || Re)) return la(), () => Pr.current && clearTimeout(Pr.current);
  }, [Sr, ia, Re]);
  let Mt = 0,
    fa = `calc(${100 / k}% - ${f}px + ${f / k}px)`;
  for (let c = 0; c < aa; c++)
    Sr.push(
      ...Mr.map(t, (B, Z) => {
        let ne;
        return (
          Z === 0 && (ne = N[0]),
          Z === t.length - 1 && (ne = N[1]),
          r(
            Qt,
            {
              ref: N[Z],
              slideKey: c + Z + "lg",
              index: c,
              width: w && k > 1 ? fa : "100%",
              height: w ? "100%" : k > 1 ? fa : "100%",
              size: v,
              child: B,
              numChildren: t?.length,
              wrappedValue: Wr,
              childCounter: Mt++,
              gap: f,
              isCanvas: te,
              isHorizontal: w,
              effectsOpacity: F,
              effectsScale: ee,
              effectsRotate: me,
              children: c + Z,
            },
            c + Z + "lg"
          )
        );
      })
    );
  let Dt = w ? "to right" : "to bottom",
    ma = D / 2,
    At = 100 - D / 2,
    zt = Xt(re, 0, ma),
    Ft = 100 - re,
    Rr = `linear-gradient(${Dt}, rgba(0, 0, 0, ${Ce}) ${zt}%, rgba(0, 0, 0, 1) ${ma}%, rgba(0, 0, 0, 1) ${At}%, rgba(0, 0, 0, ${Ce}) ${Ft}%)`,
    Nr = [],
    dr = {};
  if (pt) {
    for (let c = 0; c < t?.length; c++)
      Nr.push(
        r(
          $t,
          {
            dotStyle: { ...rn, width: Ur, height: Ur, backgroundColor: xt },
            buttonStyle: Tr,
            selectedOpacity: wt,
            opacity: vt,
            onClick: () => Nt(c),
            wrappedIndex: Wt,
            wrappedIndexInverted: Rt,
            total: Ne,
            index: c,
            gap: gt,
            padding: ut,
            isHorizontal: w,
            isInverted: fr,
          },
          c
        )
      );
    Xr > 0 &&
      (dr.backdropFilter =
        dr.WebkitBackdropFilter =
        dr.MozBackdropFilter =
          `blur(${Xr}px)`);
  }
  let Vt = u
      ? {
          drag: w ? "x" : "y",
          onDragStart: jt,
          onDragEnd: It,
          dragDirectionLock: !0,
          values: { x: je, y: je },
          dragMomentum: !1,
        }
      : {},
    Ht = I === "top-left" || I === "top-mid" || I === "top-right",
    Lt = I === "bottom-left" || I === "bottom-mid" || I === "bottom-right",
    Zt = I === "top-left" || I === "bottom-left",
    Tt = I === "top-right" || I === "bottom-right",
    da = I === "top-mid" || I === "bottom-mid" || I === "auto";
  return p("section", {
    style: {
      ...Ka,
      padding: bt,
      WebkitMaskImage: G ? Rr : void 0,
      MozMaskImage: G ? Rr : void 0,
      maskImage: G ? Rr : void 0,
      opacity: v?.item !== null ? 1 : 0,
      userSelect: "none",
    },
    onMouseEnter: () => {
      Qr(!0), U || $r(!1);
    },
    onMouseLeave: () => {
      Qr(!1), U || $r(!0);
    },
    onMouseDown: (c) => {
      c.preventDefault(), ea(!0);
    },
    onMouseUp: () => ea(!1),
    children: [
      r("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: V ? "visible" : "hidden",
          borderRadius: y,
          userSelect: "none",
          perspective: te ? "none" : _e,
        },
        children: r(o.ul, {
          ref: Be,
          ...Vt,
          style: {
            ...Ka,
            gap: f,
            placeItems: x,
            x: w ? (te ? sa : Wr) : 0,
            y: w ? 0 : te ? sa : Wr,
            flexDirection: w ? "row" : "column",
            transformStyle: me !== 0 && !te ? "preserve-3d" : void 0,
            cursor: u ? (kt ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...Oe,
          },
          children: Sr,
        }),
      }),
      p("fieldset", {
        style: { ...Gt },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          p(o.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: w ? "row" : "column",
              justifyContent: E ? "space-between" : "center",
              gap: E ? "unset" : Jr,
              opacity: lr ? 0 : 1,
              alignItems: "center",
              inset: de,
              top: E ? de : Ht ? Ke : "unset",
              left: E ? de : Zt ? ct : da ? 0 : "unset",
              right: E ? de : Tt ? mt : da ? 0 : "unset",
              bottom: E ? de : Lt ? dt : "unset",
            },
            animate: lr && { opacity: Pt ? 1 : 0 },
            transition: _,
            children: [
              r(o.button, {
                type: "button",
                style: {
                  ...Tr,
                  backgroundColor: sr,
                  width: Y,
                  height: Y,
                  borderRadius: or,
                  rotate: w ? 0 : 90,
                  display: T ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => Ie(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: r("img", {
                  width: Y,
                  height: Y,
                  src:
                    ae ||
                    "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              r(o.button, {
                type: "button",
                style: {
                  ...Tr,
                  backgroundColor: sr,
                  width: Y,
                  height: Y,
                  borderRadius: or,
                  rotate: w ? 0 : 90,
                  display: T ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => Ie(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: r("img", {
                  width: Y,
                  height: Y,
                  src:
                    Pe ||
                    "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          Nr.length > 1
            ? r("div", {
                style: {
                  ...en,
                  left: w ? "50%" : Gr,
                  top: w ? "unset" : "50%",
                  transform: w ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: w ? "row" : "column",
                  bottom: w ? Gr : "unset",
                  borderRadius: ht,
                  backgroundColor: yt,
                  userSelect: "none",
                  ...dr,
                },
                children: Nr,
              })
            : null,
        ],
      }),
    ],
  });
}
R.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
ge(R, {
  slots: {
    type: a.Array,
    title: "Content",
    control: { type: a.ComponentInstance },
  },
  direction: {
    type: a.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: R.defaultProps.direction,
  },
  autoPlayControl: { type: a.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: a.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (e) => !e.autoPlayControl,
  },
  dragControl: { type: a.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: a.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: R.defaultProps.startFrom,
  },
  effectsOptions: {
    type: a.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: a.Number,
        title: "Opacity",
        defaultValue: R.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: a.Number,
        title: "Scale",
        defaultValue: R.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: a.Number,
        title: "Perspective",
        defaultValue: R.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: a.Number,
        title: "Rotate",
        defaultValue: R.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: a.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: R.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: a.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  itemAmount: {
    type: a.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: R.defaultProps.itemAmount,
  },
  gap: { type: a.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: a.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: a.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: a.Transition,
    defaultValue: R.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: a.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: a.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: a.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: a.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: a.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: a.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: a.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: a.Boolean,
        title: "Show",
        defaultValue: R.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: a.Color,
        title: "Fill",
        hidden: (e) => !e.showMouseControls,
        defaultValue: R.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: a.Image,
        title: "Previous",
        hidden: (e) => !e.showMouseControls,
      },
      rightArrow: {
        type: a.Image,
        title: "Next",
        hidden: (e) => !e.showMouseControls,
      },
      arrowSize: {
        type: a.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: R.defaultProps.arrowOptions.arrowSize,
        hidden: (e) => !e.showMouseControls,
      },
      arrowRadius: {
        type: a.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: a.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldSpace: {
        type: a.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: R.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (e) => !e.showMouseControls,
      },
      arrowPosition: {
        type: a.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
      arrowPadding: {
        type: a.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: a.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "bottom-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: a.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: a.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: a.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-right" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-right" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: a.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: a.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: a.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: a.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsInset: {
        type: a.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsGap: {
        type: a.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsPadding: {
        type: a.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsFill: {
        type: a.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBackground: {
        type: a.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsRadius: {
        type: a.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsOpacity: {
        type: a.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsActiveOpacity: {
        type: a.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBlur: {
        type: a.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
    },
  },
});
var Ka = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Kt = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Bt = { fontSize: 32, marginBottom: 10 },
  Jt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Ut = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Tr = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  Gt = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Xt = (e, t, l) => Math.min(Math.max(e, t), l),
  Qt = X(function (t, l) {
    var n, m;
    let {
        slideKey: d,
        width: u,
        height: x,
        child: f,
        size: s,
        gap: g,
        wrappedValue: h,
        numChildren: z,
        childCounter: i,
        isCanvas: b,
        effects: k,
        effectsOpacity: M,
        effectsScale: C,
        effectsRotate: _,
        isHorizontal: P,
        isLast: y,
        index: j,
      } = t,
      Oe = (s?.item + g) * i,
      F = [-s?.item, 0, s?.parent - s?.item + g, s?.parent].map((D) => D - Oe),
      ee = !b && he(h, F, [-_, 0, 0, _]),
      me = !b && he(h, F, [_, 0, 0, -_]),
      _e = !b && he(h, F, [M, 1, 1, M]),
      U = !b && he(h, F, [C, 1, 1, C]),
      G = !b && he(h, F, [1, 1, 0, 0]),
      V = !b && he(h, (D) => D >= F[1] && D <= F[2]);
    return (
      Se(() => {
        if (V)
          return V.onChange((D) => {
            l.current.setAttribute("aria-hidden", !D);
          });
      }, []),
      r(J, {
        inherit: "id",
        children: r("li", {
          style: { display: "contents" },
          "aria-hidden": j !== 0,
          children: pa(
            f,
            {
              ref: l,
              key: d + "child",
              style: {
                ...((n = f.props) === null || n === void 0 ? void 0 : n.style),
                flexShrink: 0,
                userSelect: "none",
                width: u,
                height: x,
                opacity: _e,
                scale: U,
                originX: P ? G : 0.5,
                originY: P ? 0.5 : G,
                rotateY: P ? ee : 0,
                rotateX: P ? 0 : me,
              },
              layoutId: f.props.layoutId
                ? f.props.layoutId + "-original-" + j
                : void 0,
            },
            (m = f.props) === null || m === void 0 ? void 0 : m.children
          ),
        }),
      })
    );
  });
function $t({
  selectedOpacity: e,
  opacity: t,
  total: l,
  index: n,
  wrappedIndex: m,
  wrappedIndexInverted: d,
  dotStyle: u,
  buttonStyle: x,
  gap: f,
  padding: s,
  isHorizontal: g,
  isInverted: h,
  ...z
}) {
  let i = m === n;
  h && (i = Math.abs(d) === n);
  let b = f / 2,
    k = !g && n > 0 ? b : s,
    M = !g && n !== l - 1 ? b : s,
    C = g && n !== l - 1 ? b : s,
    _ = g && n > 0 ? b : s;
  return r("button", {
    "aria-label": `Scroll to page ${n + 1}`,
    type: "button",
    ...z,
    style: { ...x, padding: `${k}px ${C}px ${M}px ${_}px` },
    children: r(o.div, {
      style: { ...u },
      initial: !1,
      animate: { opacity: i ? e : t },
      transition: { duration: 0.3 },
    }),
  });
}
var en = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  rn = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
var an = L(ke),
  tn = L(hr),
  nn = [
    "Mn0_n3g8X",
    "iESmAvIUu",
    "VZgM9rfrC",
    "ej26u1ciP",
    "d3iDLlnMB",
    "BRNKLlwDG",
  ],
  on = {
    BRNKLlwDG: "framer-v-1ytgab3",
    d3iDLlnMB: "framer-v-1xxnx44",
    ej26u1ciP: "framer-v-ekcqb3",
    iESmAvIUu: "framer-v-i6z7ey",
    Mn0_n3g8X: "framer-v-riori5",
    VZgM9rfrC: "framer-v-1oydsib",
  };
function $e(e, ...t) {
  let l = {};
  return t?.forEach((n) => n && Object.assign(l, e[n])), l;
}
var sn = {
    default: {
      delay: 0,
      duration: 0.5,
      ease: [0.44, 0, 0.56, 1],
      type: "tween",
    },
  },
  er = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  ln = (e, t) => `translate(-50%, -50%) ${t}`,
  fn = ({ value: e, children: t }) => {
    let l = De(ie),
      n = e ?? l.transition,
      m = pe(() => ({ ...l, transition: n }), [JSON.stringify(n)]);
    return r(ie.Provider, { value: m, children: t });
  },
  mn = {
    "Hover Centre": "iESmAvIUu",
    "Hover left": "VZgM9rfrC",
    "Hover Main": "Mn0_n3g8X",
    "Hover Right": "ej26u1ciP",
    "Mobile open": "BRNKLlwDG",
    Mobile: "d3iDLlnMB",
  },
  dn = ({
    desktopLink: e,
    height: t,
    id: l,
    link: n,
    mainThumbnailImage: m,
    projectTitle: d,
    service: u,
    width: x,
    ...f
  }) => {
    var s, g, h, z, i;
    return {
      ...f,
      A_8ZeWmv6: n ?? f.A_8ZeWmv6,
      CMrS8_mAQ:
        (s = u ?? f.CMrS8_mAQ) !== null && s !== void 0 ? s : "Service",
      frfPrtFTd: e ?? f.frfPrtFTd,
      RGLMjf97t:
        (g = m ?? f.RGLMjf97t) !== null && g !== void 0
          ? g
          : {
              src: new URL(
                "https://framerusercontent.com/images/sADkQVlDih0ksnxz69C7U8pWYA.png"
              ).href,
              srcSet: `${
                new URL(
                  "https://framerusercontent.com/images/sADkQVlDih0ksnxz69C7U8pWYA.png?scale-down-to=512"
                ).href
              } 512w, ${
                new URL(
                  "https://framerusercontent.com/images/sADkQVlDih0ksnxz69C7U8pWYA.png?scale-down-to=1024"
                ).href
              } 1024w, ${
                new URL(
                  "https://framerusercontent.com/images/sADkQVlDih0ksnxz69C7U8pWYA.png"
                ).href
              } 2000w`,
            },
      variant:
        (z = (h = mn[f.variant]) !== null && h !== void 0 ? h : f.variant) !==
          null && z !== void 0
          ? z
          : "Mn0_n3g8X",
      YNyZrUkmD:
        (i = d ?? f.YNyZrUkmD) !== null && i !== void 0 ? i : "Project Title",
    };
  },
  cn = (e, t) => t.join("-") + e.layoutDependency,
  pn = X(function (e, t) {
    let { activeLocale: l } = ue(),
      {
        style: n,
        className: m,
        layoutId: d,
        variant: u,
        YNyZrUkmD: x,
        CMrS8_mAQ: f,
        RGLMjf97t: s,
        frfPrtFTd: g,
        A_8ZeWmv6: h,
        ...z
      } = dn(e),
      {
        baseVariant: i,
        classNames: b,
        gestureVariant: k,
        setGestureState: M,
        setVariant: C,
        transition: _,
        variants: P,
      } = Fe({
        cycleOrder: nn,
        defaultVariant: "Mn0_n3g8X",
        transitions: sn,
        variant: u,
        variantClassNames: on,
      }),
      y = cn(e, P),
      { activeVariantCallback: j, delay: Oe } = _a(i),
      F = j(async (...T) => {
        C("iESmAvIUu");
      }),
      ee = j(async (...T) => {
        C("Mn0_n3g8X");
      }),
      me = j(async (...T) => {
        C("VZgM9rfrC");
      }),
      _e = j(async (...T) => {
        C("ej26u1ciP");
      }),
      U = j(async (...T) => {
        C("BRNKLlwDG");
      }),
      G = j(async (...T) => {
        C("d3iDLlnMB");
      }),
      V = () => i !== "BRNKLlwDG",
      D = () => i !== "d3iDLlnMB",
      re = () => i === "BRNKLlwDG",
      Ce = ce();
    return r(J, {
      id: d ?? Ce,
      children: r(o.div, {
        initial: u,
        animate: P,
        onHoverStart: () => M({ isHovered: !0 }),
        onHoverEnd: () => M({ isHovered: !1 }),
        onTapStart: () => M({ isPressed: !0 }),
        onTap: () => M({ isPressed: !1 }),
        onTapCancel: () => M({ isPressed: !1 }),
        className: q("framer-oY3Zx", Ze, Na, b),
        style: { display: "contents" },
        children: r(fn, {
          value: _,
          children: r(Ar, {
            href: g,
            openInNewTab: !1,
            ...$e(
              { BRNKLlwDG: { href: void 0 }, d3iDLlnMB: { href: void 0 } },
              i,
              k
            ),
            children: r(o.a, {
              ...z,
              className: `${q("framer-riori5", m)} framer-610mki`,
              "data-framer-name": "Hover Main",
              "data-highlight": !0,
              layoutDependency: y,
              layoutId: "Mn0_n3g8X",
              onMouseEnter: F,
              ref: t,
              style: { backgroundColor: "rgba(0, 0, 0, 0)", ...n },
              variants: {
                ej26u1ciP: {
                  backgroundColor:
                    "var(--token-d012346d-fdf6-4c7c-a8a9-3a74b3903d38, rgb(24, 24, 24))",
                },
                iESmAvIUu: {
                  backgroundColor:
                    "var(--token-d012346d-fdf6-4c7c-a8a9-3a74b3903d38, rgb(24, 24, 24))",
                },
                VZgM9rfrC: {
                  backgroundColor:
                    "var(--token-d012346d-fdf6-4c7c-a8a9-3a74b3903d38, rgb(24, 24, 24))",
                },
              },
              ...$e(
                {
                  BRNKLlwDG: {
                    "data-framer-name": "Mobile open",
                    "data-highlight": void 0,
                    onMouseEnter: void 0,
                  },
                  d3iDLlnMB: {
                    "data-framer-name": "Mobile",
                    "data-highlight": void 0,
                    onMouseEnter: void 0,
                  },
                  ej26u1ciP: {
                    "data-framer-name": "Hover Right",
                    onMouseLeave: ee,
                  },
                  iESmAvIUu: {
                    "data-framer-name": "Hover Centre",
                    onMouseLeave: ee,
                  },
                  VZgM9rfrC: {
                    "data-framer-name": "Hover left",
                    onMouseLeave: ee,
                  },
                },
                i,
                k
              ),
              children: p(o.div, {
                className: "framer-xawjzv",
                "data-framer-name": "Main wrapper",
                layoutDependency: y,
                layoutId: "ACU59raLC",
                children: [
                  V() &&
                    p(o.div, {
                      className: "framer-owhry0",
                      layoutDependency: y,
                      layoutId: "lKR3V9hET",
                      children: [
                        D() &&
                          r(o.div, {
                            className: "framer-5hw22b",
                            "data-framer-name": "Left box",
                            "data-highlight": !0,
                            layoutDependency: y,
                            layoutId: "wy3pY4cLp",
                            onMouseEnter: me,
                          }),
                        D() &&
                          r(o.div, {
                            className: "framer-1kk3zpd",
                            "data-framer-name": "Centre Box",
                            "data-highlight": !0,
                            layoutDependency: y,
                            layoutId: "m5bC0wlgD",
                            onMouseEnter: F,
                          }),
                        D() &&
                          r(o.div, {
                            className: "framer-16mkimh",
                            "data-framer-name": "Right Box",
                            "data-highlight": !0,
                            layoutDependency: y,
                            layoutId: "aQZIH7fyZ",
                            onMouseEnter: _e,
                          }),
                      ],
                    }),
                  p(o.div, {
                    className: "framer-9tf4mf",
                    "data-framer-name": "Content",
                    layoutDependency: y,
                    layoutId: "uURq9NMvU",
                    children: [
                      p(o.div, {
                        className: "framer-qmry32",
                        layoutDependency: y,
                        layoutId: "r2k7HW0pX",
                        children: [
                          r(A, {
                            __fromCanvasComponent: !0,
                            children: r(O, {
                              children: r(o.h4, {
                                className: "framer-styles-preset-dizfiw",
                                "data-styles-preset": "K0LbzS1UM",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n)",
                                },
                                children: "Project Title",
                              }),
                            }),
                            className: "framer-1up4jp9",
                            "data-framer-name": "Project 1",
                            layoutDependency: y,
                            layoutId: "gV9N4JFrY",
                            style: {
                              "--extracted-1eung3n":
                                "var(--token-0df086db-04f5-4a87-9495-2913abcb64b8, rgb(255, 255, 255))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            text: x,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          r(o.div, {
                            className: "framer-yldsrg-container",
                            layoutDependency: y,
                            layoutId: "mb9OPUPDb-container",
                            children: r(ke, {
                              height: "100%",
                              id: "mb9OPUPDb",
                              layoutId: "mb9OPUPDb",
                              style: { height: "100%", width: "100%" },
                              variant: "YlPxYzy7t",
                              width: "100%",
                            }),
                          }),
                          r(A, {
                            __fromCanvasComponent: !0,
                            children: r(O, {
                              children: r(o.p, {
                                className: "framer-styles-preset-16avwaz",
                                "data-styles-preset": "rc1HeYerV",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv)",
                                },
                                children: "Service",
                              }),
                            }),
                            className: "framer-b9sxlv",
                            "data-framer-name": "Service",
                            layoutDependency: y,
                            layoutId: "Bd0K74G03",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, rgb(167, 167, 167))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            text: f,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      r(o.div, {
                        className: "framer-1ae6clx-container",
                        layoutDependency: y,
                        layoutId: "kD4XAmtRG-container",
                        style: { rotate: 360 },
                        variants: {
                          ej26u1ciP: { rotate: 308 },
                          iESmAvIUu: { rotate: 308 },
                          VZgM9rfrC: { rotate: 308 },
                        },
                        children: r(hr, {
                          color: "rgb(255, 255, 255)",
                          height: "100%",
                          iconSearch: "arrow ",
                          iconSelection: "arrow-right",
                          id: "kD4XAmtRG",
                          layoutId: "kD4XAmtRG",
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                          ...$e(
                            {
                              BRNKLlwDG: {
                                iconSelection: "arrow-up-circle",
                                onClick: G,
                              },
                              d3iDLlnMB: {
                                iconSelection: "arrow-down-circle",
                                onClick: U,
                              },
                            },
                            i,
                            k
                          ),
                        }),
                      }),
                    ],
                  }),
                  V() &&
                    r(o.div, {
                      className: "framer-9hcyzu-container",
                      layoutDependency: y,
                      layoutId: "cnInWdm84-container",
                      children: r(ke, {
                        height: "100%",
                        id: "cnInWdm84",
                        layoutId: "cnInWdm84",
                        style: { height: "100%", width: "100%" },
                        variant: "YlPxYzy7t",
                        width: "100%",
                      }),
                    }),
                  D() &&
                    r(Ar, {
                      ...$e({ BRNKLlwDG: { href: h } }, i, k),
                      children: r(le, {
                        background: {
                          alt: "",
                          fit: "stretch",
                          sizes: "51px",
                          ...er(s),
                        },
                        className: "framer-136iw8y framer-610mki",
                        "data-framer-name": "Main Thumbnail Image",
                        layoutDependency: y,
                        layoutId: "METwBvMy2",
                        style: {
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                          opacity: 0,
                          rotate: 0,
                        },
                        transformTemplate: ln,
                        variants: {
                          BRNKLlwDG: {
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            opacity: 1,
                          },
                          ej26u1ciP: { opacity: 1, rotate: 9 },
                          iESmAvIUu: { opacity: 1 },
                          VZgM9rfrC: { opacity: 1, rotate: -7 },
                        },
                        ...$e(
                          {
                            BRNKLlwDG: {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "stretch",
                                sizes: "min(390px, 100vw)",
                                ...er(s),
                              },
                              transformTemplate: void 0,
                            },
                            ej26u1ciP: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                sizes: "304px",
                                ...er(s),
                              },
                              transformTemplate: void 0,
                            },
                            iESmAvIUu: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                sizes: "304px",
                                ...er(s),
                              },
                              transformTemplate: void 0,
                            },
                            VZgM9rfrC: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                sizes: "304px",
                                ...er(s),
                              },
                              transformTemplate: void 0,
                            },
                          },
                          i,
                          k
                        ),
                        children:
                          re() &&
                          r(o.div, {
                            className: "framer-11bkkvm",
                            layoutDependency: y,
                            layoutId: "HcVkYfAvm",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.44) 100%)",
                              borderBottomLeftRadius: 16,
                              borderBottomRightRadius: 16,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            },
                            children: r(o.div, {
                              className: "framer-5nmx29",
                              "data-framer-name": "Icon wrapper",
                              layoutDependency: y,
                              layoutId: "o4I1zpcvh",
                              style: {
                                backgroundColor: "rgb(255, 255, 255)",
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                              },
                              children: r(o.div, {
                                className: "framer-5dlveg-container",
                                layoutDependency: y,
                                layoutId: "CS82yEWa_-container",
                                children: r(hr, {
                                  color:
                                    'var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, rgb(18, 18, 18)) /* {"name":"Primary/Grey 6"} */',
                                  height: "100%",
                                  iconSearch: "Home",
                                  iconSelection: "arrow-up-right",
                                  id: "CS82yEWa_",
                                  layoutId: "CS82yEWa_",
                                  mirrored: !1,
                                  selectByList: !0,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  hn = [
    '.framer-oY3Zx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-oY3Zx .framer-610mki { display: block; }",
    ".framer-oY3Zx .framer-riori5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 1120px; }",
    ".framer-oY3Zx .framer-xawjzv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 48px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-oY3Zx .framer-owhry0 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",
    ".framer-oY3Zx .framer-5hw22b { bottom: 0px; flex: none; left: 0px; position: absolute; top: 0px; width: 581px; z-index: 1; }",
    ".framer-oY3Zx .framer-1kk3zpd { bottom: 0px; flex: none; left: calc(50.93666369313116% - 20px / 2); position: absolute; top: 0px; width: 20px; z-index: 1; }",
    ".framer-oY3Zx .framer-16mkimh { bottom: 0px; flex: none; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 540px; z-index: 1; }",
    ".framer-oY3Zx .framer-9tf4mf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-oY3Zx .framer-qmry32 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 31px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 672px; }",
    ".framer-oY3Zx .framer-1up4jp9, .framer-oY3Zx .framer-b9sxlv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-oY3Zx .framer-yldsrg-container { flex: none; height: 32px; position: relative; width: 1px; }",
    ".framer-oY3Zx .framer-1ae6clx-container, .framer-oY3Zx .framer-5dlveg-container { flex: none; height: 32px; position: relative; width: 32px; }",
    ".framer-oY3Zx .framer-9hcyzu-container { flex: none; height: 1px; position: relative; width: 100%; z-index: 1; }",
    ".framer-oY3Zx .framer-136iw8y { aspect-ratio: 0.7728337236533958 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 66px); left: 98%; position: absolute; top: 50%; width: 51px; z-index: 1; }",
    ".framer-oY3Zx .framer-11bkkvm { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-oY3Zx .framer-5nmx29 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 80px); justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 80px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oY3Zx .framer-riori5, .framer-oY3Zx .framer-xawjzv, .framer-oY3Zx .framer-qmry32, .framer-oY3Zx .framer-11bkkvm, .framer-oY3Zx .framer-5nmx29 { gap: 0px; } .framer-oY3Zx .framer-riori5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-oY3Zx .framer-riori5 > :first-child, .framer-oY3Zx .framer-xawjzv > :first-child { margin-top: 0px; } .framer-oY3Zx .framer-riori5 > :last-child, .framer-oY3Zx .framer-xawjzv > :last-child { margin-bottom: 0px; } .framer-oY3Zx .framer-xawjzv > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-oY3Zx .framer-qmry32 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-oY3Zx .framer-qmry32 > :first-child, .framer-oY3Zx .framer-11bkkvm > :first-child, .framer-oY3Zx .framer-5nmx29 > :first-child { margin-left: 0px; } .framer-oY3Zx .framer-qmry32 > :last-child, .framer-oY3Zx .framer-11bkkvm > :last-child, .framer-oY3Zx .framer-5nmx29 > :last-child { margin-right: 0px; } .framer-oY3Zx .framer-11bkkvm > *, .framer-oY3Zx .framer-5nmx29 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-oY3Zx.framer-v-i6z7ey .framer-9tf4mf, .framer-oY3Zx.framer-v-1oydsib .framer-9tf4mf, .framer-oY3Zx.framer-v-ekcqb3 .framer-9tf4mf { padding: 0px 24px 0px 24px; }",
    ".framer-oY3Zx.framer-v-i6z7ey .framer-136iw8y { aspect-ratio: unset; height: 343px; left: calc(59.85727029438004% - 304px / 2); top: calc(48.14814814814817% - 343px / 2); width: 304px; }",
    ".framer-oY3Zx.framer-v-1oydsib .framer-136iw8y { aspect-ratio: unset; bottom: -90px; height: 343px; left: 373px; top: unset; width: 304px; }",
    ".framer-oY3Zx.framer-v-ekcqb3 .framer-136iw8y { aspect-ratio: unset; height: 343px; left: 702px; top: -132px; width: 304px; }",
    ".framer-oY3Zx.framer-v-1xxnx44 .framer-riori5, .framer-oY3Zx.framer-v-1ytgab3 .framer-riori5 { width: 390px; }",
    ".framer-oY3Zx.framer-v-1xxnx44 .framer-xawjzv, .framer-oY3Zx.framer-v-1ytgab3 .framer-xawjzv { gap: 32px; padding: 32px 0px 0px 0px; }",
    ".framer-oY3Zx.framer-v-1xxnx44 .framer-qmry32, .framer-oY3Zx.framer-v-1ytgab3 .framer-qmry32 { gap: 14px; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oY3Zx.framer-v-1xxnx44 .framer-xawjzv, .framer-oY3Zx.framer-v-1xxnx44 .framer-qmry32 { gap: 0px; } .framer-oY3Zx.framer-v-1xxnx44 .framer-xawjzv > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-oY3Zx.framer-v-1xxnx44 .framer-xawjzv > :first-child { margin-top: 0px; } .framer-oY3Zx.framer-v-1xxnx44 .framer-xawjzv > :last-child { margin-bottom: 0px; } .framer-oY3Zx.framer-v-1xxnx44 .framer-qmry32 > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-oY3Zx.framer-v-1xxnx44 .framer-qmry32 > :first-child { margin-left: 0px; } .framer-oY3Zx.framer-v-1xxnx44 .framer-qmry32 > :last-child { margin-right: 0px; } }",
    ".framer-oY3Zx.framer-v-1ytgab3 .framer-136iw8y { align-content: center; align-items: center; aspect-ratio: unset; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 219px; justify-content: center; left: unset; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; top: unset; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oY3Zx.framer-v-1ytgab3 .framer-xawjzv, .framer-oY3Zx.framer-v-1ytgab3 .framer-qmry32, .framer-oY3Zx.framer-v-1ytgab3 .framer-136iw8y { gap: 0px; } .framer-oY3Zx.framer-v-1ytgab3 .framer-xawjzv > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-oY3Zx.framer-v-1ytgab3 .framer-xawjzv > :first-child { margin-top: 0px; } .framer-oY3Zx.framer-v-1ytgab3 .framer-xawjzv > :last-child { margin-bottom: 0px; } .framer-oY3Zx.framer-v-1ytgab3 .framer-qmry32 > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-oY3Zx.framer-v-1ytgab3 .framer-qmry32 > :first-child, .framer-oY3Zx.framer-v-1ytgab3 .framer-136iw8y > :first-child { margin-left: 0px; } .framer-oY3Zx.framer-v-1ytgab3 .framer-qmry32 > :last-child, .framer-oY3Zx.framer-v-1ytgab3 .framer-136iw8y > :last-child { margin-right: 0px; } .framer-oY3Zx.framer-v-1ytgab3 .framer-136iw8y > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ...Le,
    ...Ra,
  ],
  rr = xe(pn, hn, "framer-oY3Zx"),
  qr = rr;
rr.displayName = "Project Item";
rr.defaultProps = { height: 129, width: 1120 };
ge(rr, {
  variant: {
    options: [
      "Mn0_n3g8X",
      "iESmAvIUu",
      "VZgM9rfrC",
      "ej26u1ciP",
      "d3iDLlnMB",
      "BRNKLlwDG",
    ],
    optionTitles: [
      "Hover Main",
      "Hover Centre",
      "Hover left",
      "Hover Right",
      "Mobile",
      "Mobile open",
    ],
    title: "Variant",
    type: a.Enum,
  },
  YNyZrUkmD: {
    defaultValue: "Project Title",
    displayTextArea: !1,
    title: "Project Title",
    type: a.String,
  },
  CMrS8_mAQ: {
    defaultValue: "Service",
    displayTextArea: !1,
    title: "Service",
    type: a.String,
  },
  RGLMjf97t: {
    __defaultAssetReference:
      "data:framer/asset-reference,sADkQVlDih0ksnxz69C7U8pWYA.png?originalFilename=Rectangle+1155.png&preferredSize=auto",
    title: "Main Thumbnail image",
    type: a.ResponsiveImage,
  },
  frfPrtFTd: { title: "Desktop-Link", type: a.Link },
  A_8ZeWmv6: { title: "Link", type: a.Link },
});
ye(rr, [...an, ...tn, ...He, ...Wa]);
var un = ["D9WyfOdkQ", "qPyCZFJPH"],
  gn = { D9WyfOdkQ: "framer-v-fwc0eh", qPyCZFJPH: "framer-v-u7rmer" };
function gr(e, ...t) {
  let l = {};
  return t?.forEach((n) => n && Object.assign(l, e[n])), l;
}
var xn = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Ja = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  yn = ({ value: e, children: t }) => {
    let l = De(ie),
      n = e ?? l.transition,
      m = pe(() => ({ ...l, transition: n }), [JSON.stringify(n)]);
    return r(ie.Provider, { value: m, children: t });
  },
  wn = { "Variant 1": "D9WyfOdkQ", "Variant 2": "qPyCZFJPH" },
  vn = ({
    description: e,
    height: t,
    id: l,
    image: n,
    title: m,
    width: d,
    ...u
  }) => {
    var x, f, s, g, h;
    return {
      ...u,
      BitZAPxrD:
        (x = m ?? u.BitZAPxrD) !== null && x !== void 0 ? x : "Mobile UI",
      hJm6KRhN5:
        (f = e ?? u.hJm6KRhN5) !== null && f !== void 0
          ? f
          : "Delivering seamless mobile experiences.",
      PXS29Ry8C:
        (s = n ?? u.PXS29Ry8C) !== null && s !== void 0
          ? s
          : {
              src: new URL(
                "https://framerusercontent.com/images/SuADtnSR0p22Tj8QLhLd7Jz6ZY.svg"
              ).href,
            },
      variant:
        (h = (g = wn[u.variant]) !== null && g !== void 0 ? g : u.variant) !==
          null && h !== void 0
          ? h
          : "D9WyfOdkQ",
    };
  },
  bn = (e, t) => t.join("-") + e.layoutDependency,
  _n = X(function (e, t) {
    let { activeLocale: l } = ue(),
      {
        style: n,
        className: m,
        layoutId: d,
        variant: u,
        PXS29Ry8C: x,
        BitZAPxrD: f,
        hJm6KRhN5: s,
        ...g
      } = vn(e),
      {
        baseVariant: h,
        classNames: z,
        gestureVariant: i,
        setGestureState: b,
        setVariant: k,
        transition: M,
        variants: C,
      } = Fe({
        cycleOrder: un,
        defaultVariant: "D9WyfOdkQ",
        transitions: xn,
        variant: u,
        variantClassNames: gn,
      }),
      _ = bn(e, C),
      P = ce();
    return r(J, {
      id: d ?? P,
      children: r(o.div, {
        initial: u,
        animate: C,
        onHoverStart: () => b({ isHovered: !0 }),
        onHoverEnd: () => b({ isHovered: !1 }),
        onTapStart: () => b({ isPressed: !0 }),
        onTap: () => b({ isPressed: !1 }),
        onTapCancel: () => b({ isPressed: !1 }),
        className: q("framer-i9SNd", Ze, z),
        style: { display: "contents" },
        children: r(yn, {
          value: M,
          children: p(o.div, {
            ...g,
            className: q("framer-fwc0eh", m),
            "data-framer-name": "Variant 1",
            layoutDependency: _,
            layoutId: "D9WyfOdkQ",
            ref: t,
            style: {
              backgroundColor:
                "var(--token-d012346d-fdf6-4c7c-a8a9-3a74b3903d38, rgb(24, 24, 24))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...n,
            },
            variants: { qPyCZFJPH: { backgroundColor: "rgb(24, 24, 24)" } },
            ...gr({ qPyCZFJPH: { "data-framer-name": "Variant 2" } }, h, i),
            children: [
              r(o.div, {
                className: "framer-1ds5jke",
                layoutDependency: _,
                layoutId: "NRy_XD2mr",
                style: {
                  backgroundColor:
                    "var(--token-6f88af0f-7e6c-4e20-8afc-dfd248b518df, rgb(44, 44, 44))",
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                },
                variants: {
                  qPyCZFJPH: {
                    backgroundColor:
                      "var(--token-14318185-110c-4021-be6a-1a98b6577153, rgb(77, 77, 77))",
                  },
                },
                children: r(le, {
                  background: { alt: "", fit: "fill", sizes: "32px", ...Ja(x) },
                  className: "framer-17y07lv",
                  layoutDependency: _,
                  layoutId: "PdZtQls4B",
                  ...gr(
                    {
                      qPyCZFJPH: {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "24px",
                          ...Ja(x),
                        },
                      },
                    },
                    h,
                    i
                  ),
                }),
              }),
              p(o.div, {
                className: "framer-14312uc",
                "data-framer-name": "Content",
                layoutDependency: _,
                layoutId: "sBo3ARlSl",
                children: [
                  r(A, {
                    __fromCanvasComponent: !0,
                    children: r(O, {
                      children: r(o.h2, {
                        style: {
                          "--font-selector": "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNjAw",
                          "--framer-font-family":
                            '"Plus Jakarta Sans", sans-serif',
                          "--framer-font-size": "20px",
                          "--framer-font-weight": "600",
                          "--framer-letter-spacing": "-0.025em",
                          "--framer-line-height": "1.5em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-1of0zx5)",
                        },
                        children: "Mobile UI",
                      }),
                    }),
                    className: "framer-f5uqa",
                    fonts: ["GF;Plus Jakarta Sans-600"],
                    layoutDependency: _,
                    layoutId: "qBEpxQ4nc",
                    style: {
                      "--extracted-1of0zx5": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: f,
                    variants: {
                      qPyCZFJPH: {
                        "--extracted-1eung3n": "rgb(255, 255, 255)",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...gr(
                      {
                        qPyCZFJPH: {
                          children: r(O, {
                            children: r(o.h4, {
                              className: "framer-styles-preset-dizfiw",
                              "data-styles-preset": "K0LbzS1UM",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-1eung3n)",
                              },
                              children: "Mobile UI",
                            }),
                          }),
                          fonts: void 0,
                        },
                      },
                      h,
                      i
                    ),
                  }),
                  r(A, {
                    __fromCanvasComponent: !0,
                    children: r(O, {
                      children: r(o.h3, {
                        style: {
                          "--font-selector":
                            "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                          "--framer-font-family":
                            '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                          "--framer-font-size": "20px",
                          "--framer-line-height": "1.4em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-a0htzi)",
                        },
                        children: "Delivering seamless mobile experiences.",
                      }),
                    }),
                    className: "framer-aeng2b",
                    fonts: ["GF;Plus Jakarta Sans-regular"],
                    layoutDependency: _,
                    layoutId: "ZCqtKBdiN",
                    style: {
                      "--extracted-a0htzi":
                        "var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, rgb(167, 167, 167))",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: s,
                    variants: {
                      qPyCZFJPH: {
                        "--extracted-a0htzi":
                          "var(--token-94d84307-4707-4bdf-9297-e0d258de723a, rgb(92, 92, 92)) ",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...gr(
                      {
                        qPyCZFJPH: {
                          children: r(O, {
                            children: r(o.h3, {
                              style: {
                                "--font-selector":
                                  "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-line-height": "1.4em",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-a0htzi)",
                              },
                              children:
                                "Delivering seamless mobile experiences.",
                            }),
                          }),
                        },
                      },
                      h,
                      i
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Pn = [
    '.framer-i9SNd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-i9SNd .framer-z2saxb { display: block; }",
    ".framer-i9SNd .framer-fwc0eh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 48px 48px 48px 48px; position: relative; width: 320px; }",
    ".framer-i9SNd .framer-1ds5jke { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 56px; }",
    ".framer-i9SNd .framer-17y07lv { flex: none; height: 32px; overflow: visible; position: relative; width: 32px; }",
    ".framer-i9SNd .framer-14312uc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-i9SNd .framer-f5uqa, .framer-i9SNd .framer-aeng2b { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-i9SNd .framer-fwc0eh, .framer-i9SNd .framer-1ds5jke, .framer-i9SNd .framer-14312uc { gap: 0px; } .framer-i9SNd .framer-fwc0eh > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-i9SNd .framer-fwc0eh > :first-child, .framer-i9SNd .framer-14312uc > :first-child { margin-top: 0px; } .framer-i9SNd .framer-fwc0eh > :last-child, .framer-i9SNd .framer-14312uc > :last-child { margin-bottom: 0px; } .framer-i9SNd .framer-1ds5jke > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-i9SNd .framer-1ds5jke > :first-child { margin-left: 0px; } .framer-i9SNd .framer-1ds5jke > :last-child { margin-right: 0px; } .framer-i9SNd .framer-14312uc > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }",
    ".framer-i9SNd.framer-v-u7rmer .framer-fwc0eh { align-content: flex-start; align-items: flex-start; gap: 24px; justify-content: flex-start; padding: 32px 32px 32px 32px; width: min-content; }",
    ".framer-i9SNd.framer-v-u7rmer .framer-17y07lv { height: 24px; width: 24px; }",
    ".framer-i9SNd.framer-v-u7rmer .framer-14312uc { gap: 24px; justify-content: flex-start; width: 256px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-i9SNd.framer-v-u7rmer .framer-fwc0eh, .framer-i9SNd.framer-v-u7rmer .framer-14312uc { gap: 0px; } .framer-i9SNd.framer-v-u7rmer .framer-fwc0eh > *, .framer-i9SNd.framer-v-u7rmer .framer-14312uc > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-i9SNd.framer-v-u7rmer .framer-fwc0eh > :first-child, .framer-i9SNd.framer-v-u7rmer .framer-14312uc > :first-child { margin-top: 0px; } .framer-i9SNd.framer-v-u7rmer .framer-fwc0eh > :last-child, .framer-i9SNd.framer-v-u7rmer .framer-14312uc > :last-child { margin-bottom: 0px; } }",
    ...Le,
  ],
  ar = xe(_n, Pn, "framer-i9SNd"),
  Te = ar;
ar.displayName = "Service Card";
ar.defaultProps = { height: 258, width: 320 };
ge(ar, {
  variant: {
    options: ["D9WyfOdkQ", "qPyCZFJPH"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: a.Enum,
  },
  PXS29Ry8C: {
    __defaultAssetReference:
      "data:framer/asset-reference,SuADtnSR0p22Tj8QLhLd7Jz6ZY.svg?originalFilename=smartphone-svgrepo-com.svg&preferredSize=auto",
    title: "Image",
    type: a.ResponsiveImage,
  },
  BitZAPxrD: {
    defaultValue: "Mobile UI",
    displayTextArea: !1,
    title: "Title",
    type: a.String,
  },
  hJm6KRhN5: {
    defaultValue: "Delivering seamless mobile experiences.",
    displayTextArea: !1,
    title: "Description",
    type: a.String,
  },
});
ye(ar, [
  {
    family: "Plus Jakarta Sans",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/Spl8ABwT_:default",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNShXUEKi4Rw.ttf",
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNShXUEKi4Rw.ttf",
    weight: "600",
  },
  {
    family: "Plus Jakarta Sans",
    moduleAsset: {
      localModuleIdentifier: "local-module:canvasComponent/Spl8ABwT_:default",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NShXUEKi4Rw.ttf",
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NShXUEKi4Rw.ttf",
    weight: "400",
  },
  ...He,
]);
Ve.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-regular",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-italic",
]);
var Ua = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/l5rmuyByM:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NShXUEKi4Rw.ttf",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NShXUEKi4Rw.ttf",
      weight: "400",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/l5rmuyByM:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNShXUEKi4Rw.ttf",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNShXUEKi4Rw.ttf",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/l5rmuyByM:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_QMq2oR82k.ttf",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_QMq2oR82k.ttf",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/l5rmuyByM:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_QMq2oR82k.ttf",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0lCR_QMq2oR82k.ttf",
      weight: "400",
    },
  ],
  Ga = [
    '.framer-KMGXu .framer-styles-preset-xpbma0:not(.rich-text-wrapper), .framer-KMGXu .framer-styles-preset-xpbma0.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #141415; --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-KMGXu .framer-styles-preset-xpbma0:not(.rich-text-wrapper), .framer-KMGXu .framer-styles-preset-xpbma0.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #141415; --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-KMGXu .framer-styles-preset-xpbma0:not(.rich-text-wrapper), .framer-KMGXu .framer-styles-preset-xpbma0.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #141415; --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  Xa = "framer-KMGXu";
var kn = ["BgwG7_xKw"],
  On = { BgwG7_xKw: "framer-v-1bgct9q" };
var Cn = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Wn = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  Rn = ({ value: e, children: t }) => {
    let l = De(ie),
      n = e ?? l.transition,
      m = pe(() => ({ ...l, transition: n }), [JSON.stringify(n)]);
    return r(ie.Provider, { value: m, children: t });
  },
  Nn = ({
    feedback: e,
    height: t,
    id: l,
    image: n,
    name: m,
    status: d,
    width: u,
    ...x
  }) => {
    var f, s, g, h;
    return {
      ...x,
      Al2RJDWkM:
        (f = n ?? x.Al2RJDWkM) !== null && f !== void 0
          ? f
          : {
              src: new URL(
                "https://framerusercontent.com/images/CNUZiGgyC9GehBlCSREu88yjBE.png"
              ).href,
            },
      EWzDmqYDg:
        (s = m ?? x.EWzDmqYDg) !== null && s !== void 0 ? s : "Albert mores",
      IZo73mm3R:
        (g = e ?? x.IZo73mm3R) !== null && g !== void 0
          ? g
          : "Maya gave our app a much-needed makeover. It\u2019s never looked so good!",
      mq0nqOvpE:
        (h = d ?? x.mq0nqOvpE) !== null && h !== void 0
          ? h
          : "President of Sales",
    };
  },
  jn = (e, t) => t.join("-") + e.layoutDependency,
  In = X(function (e, t) {
    let { activeLocale: l } = ue(),
      {
        style: n,
        className: m,
        layoutId: d,
        variant: u,
        Al2RJDWkM: x,
        IZo73mm3R: f,
        EWzDmqYDg: s,
        mq0nqOvpE: g,
        ...h
      } = Nn(e),
      {
        baseVariant: z,
        classNames: i,
        gestureVariant: b,
        setGestureState: k,
        setVariant: M,
        transition: C,
        variants: _,
      } = Fe({
        cycleOrder: kn,
        defaultVariant: "BgwG7_xKw",
        transitions: Cn,
        variant: u,
        variantClassNames: On,
      }),
      P = jn(e, _),
      y = ce();
    return r(J, {
      id: d ?? y,
      children: r(o.div, {
        initial: u,
        animate: _,
        onHoverStart: () => k({ isHovered: !0 }),
        onHoverEnd: () => k({ isHovered: !1 }),
        onTapStart: () => k({ isPressed: !0 }),
        onTap: () => k({ isPressed: !1 }),
        onTapCancel: () => k({ isPressed: !1 }),
        className: q("framer-iHlV4", za, Ze, Xa, i),
        style: { display: "contents" },
        children: r(Rn, {
          value: C,
          children: p(o.div, {
            ...h,
            className: q("framer-1bgct9q", m),
            "data-framer-name": "Variant 1",
            layoutDependency: P,
            layoutId: "BgwG7_xKw",
            ref: t,
            style: { ...n },
            children: [
              r(Oa, {
                className: "framer-1i5yq7f",
                "data-framer-name": "Frame 1321314541",
                layout: "position",
                layoutDependency: P,
                layoutId: "zUkSigiHi",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 21"><path d="M 4.948 20.405 C -3.857 16.176 2.143 6.098 6.879 0.829 C 7.282 0.381 7.985 0.417 8.361 0.887 L 8.535 1.105 C 9.023 1.715 8.652 2.729 8.034 3.208 C 6.127 4.688 4.913 8.1 4.359 10.49 C 4.231 11.04 4.615 11.566 5.174 11.643 C 6.136 11.775 7.27 11.924 7.84 11.979 C 8.043 11.998 8.249 12.066 8.413 12.187 C 13.996 16.309 6.769 19.968 5.36 20.447 C 5.223 20.493 5.078 20.467 4.948 20.405 Z" fill="rgb(219,251,12)" stroke-width="2" stroke="rgb(219,251,12)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 20.008 20.405 C 11.202 16.176 17.202 6.098 21.939 0.829 C 22.341 0.381 23.044 0.417 23.421 0.887 L 23.595 1.105 C 24.083 1.715 23.712 2.729 23.094 3.208 C 21.186 4.688 19.973 8.1 19.419 10.49 C 19.291 11.04 19.674 11.566 20.234 11.643 C 21.196 11.775 22.329 11.924 22.9 11.979 C 23.102 11.998 23.309 12.066 23.473 12.187 C 29.055 16.309 21.828 19.968 20.419 20.447 C 20.283 20.493 20.137 20.467 20.008 20.405 Z" fill="rgb(219,251,12)" stroke-width="2" stroke="rgb(219,251,12)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                svgContentId: 792135390,
                withExternalLayout: !0,
              }),
              r(o.div, {
                className: "framer-1x3it08",
                "data-framer-name": "Frame 1321314536",
                layoutDependency: P,
                layoutId: "kgQ_kECS8",
                children: r(A, {
                  __fromCanvasComponent: !0,
                  children: r(O, {
                    children: r(o.p, {
                      className: "framer-styles-preset-k3p3qa",
                      "data-styles-preset": "bkYb0PLCo",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv)",
                      },
                      children:
                        "Maya gave our app a much-needed makeover. It\u2019s never looked so good!",
                    }),
                  }),
                  className: "framer-qz9xxd",
                  "data-framer-name":
                    "Lorem ipsum dolor sit amet consectetur. Elit enim magna id rutrum vivamus tortor scelerisque cras malesuada. Viverra feugiat mauris pulvinar vitae.",
                  layoutDependency: P,
                  layoutId: "nS2PEN8ix",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-0df086db-04f5-4a87-9495-2913abcb64b8, rgb(255, 255, 255))",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: f,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              p(o.div, {
                className: "framer-9pz0n8",
                "data-framer-name": "Frame 1321314539",
                layoutDependency: P,
                layoutId: "LqXdwuF34",
                children: [
                  r(le, {
                    background: {
                      alt: "",
                      fit: "fill",
                      sizes: "32px",
                      ...Wn(x),
                    },
                    className: "framer-1wi9zke",
                    "data-framer-name": "Ellipse 1250",
                    layoutDependency: P,
                    layoutId: "nGhaQUb2g",
                    style: {
                      borderBottomLeftRadius: "100%",
                      borderBottomRightRadius: "100%",
                      borderTopLeftRadius: "100%",
                      borderTopRightRadius: "100%",
                    },
                  }),
                  p(o.div, {
                    className: "framer-1xoo7y3",
                    "data-framer-name": "Frame 1321314538",
                    layoutDependency: P,
                    layoutId: "yPcVQScxh",
                    children: [
                      r(A, {
                        __fromCanvasComponent: !0,
                        children: r(O, {
                          children: r(o.h4, {
                            className: "framer-styles-preset-dizfiw",
                            "data-styles-preset": "K0LbzS1UM",
                            style: {
                              "--framer-text-color": "var(--extracted-1eung3n)",
                            },
                            children: "Albert mores",
                          }),
                        }),
                        className: "framer-1ydwhiz",
                        "data-framer-name": "Albert mores",
                        layoutDependency: P,
                        layoutId: "hr60WhPXM",
                        style: {
                          "--extracted-1eung3n":
                            "var(--token-0df086db-04f5-4a87-9495-2913abcb64b8, rgb(255, 255, 255))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        text: s,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      r(A, {
                        __fromCanvasComponent: !0,
                        children: r(O, {
                          children: r(o.p, {
                            className: "framer-styles-preset-xpbma0",
                            "data-styles-preset": "l5rmuyByM",
                            style: {
                              "--framer-text-color": "var(--extracted-r6o4lv)",
                            },
                            children: "President of Sales",
                          }),
                        }),
                        className: "framer-19xkr8g",
                        "data-framer-name": "President of Sales",
                        layoutDependency: P,
                        layoutId: "pgVE4F2h2",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, rgb(167, 167, 167))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        text: g,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Mn = [
    '.framer-iHlV4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-iHlV4 .framer-13emcd2 { display: block; }",
    ".framer-iHlV4 .framer-1bgct9q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 300px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 605px; }",
    ".framer-iHlV4 .framer-1i5yq7f { flex: none; height: 21px; position: relative; width: 26px; }",
    ".framer-iHlV4 .framer-1x3it08 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 59px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-iHlV4 .framer-qz9xxd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 70%; word-break: break-word; word-wrap: break-word; }",
    ".framer-iHlV4 .framer-9pz0n8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-iHlV4 .framer-1wi9zke { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }",
    ".framer-iHlV4 .framer-1xoo7y3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-iHlV4 .framer-1ydwhiz, .framer-iHlV4 .framer-19xkr8g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-iHlV4 .framer-1bgct9q, .framer-iHlV4 .framer-1x3it08, .framer-iHlV4 .framer-9pz0n8, .framer-iHlV4 .framer-1xoo7y3 { gap: 0px; } .framer-iHlV4 .framer-1bgct9q > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-iHlV4 .framer-1bgct9q > :first-child, .framer-iHlV4 .framer-1xoo7y3 > :first-child { margin-top: 0px; } .framer-iHlV4 .framer-1bgct9q > :last-child, .framer-iHlV4 .framer-1xoo7y3 > :last-child { margin-bottom: 0px; } .framer-iHlV4 .framer-1x3it08 > * { margin: 0px; margin-left: calc(59px / 2); margin-right: calc(59px / 2); } .framer-iHlV4 .framer-1x3it08 > :first-child, .framer-iHlV4 .framer-9pz0n8 > :first-child { margin-left: 0px; } .framer-iHlV4 .framer-1x3it08 > :last-child, .framer-iHlV4 .framer-9pz0n8 > :last-child { margin-right: 0px; } .framer-iHlV4 .framer-9pz0n8 > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-iHlV4 .framer-1xoo7y3 > * { margin: 0px; margin-bottom: calc(1px / 2); margin-top: calc(1px / 2); } }",
    ...Aa,
    ...Le,
    ...Ga,
  ],
  tr = xe(In, Mn, "framer-iHlV4"),
  xr = tr;
tr.displayName = "Slider Item";
tr.defaultProps = { height: 189, width: 605 };
ge(tr, {
  Al2RJDWkM: {
    __defaultAssetReference:
      "data:framer/asset-reference,CNUZiGgyC9GehBlCSREu88yjBE.png?originalFilename=Ellipse+1250.png&preferredSize=auto",
    title: "Image",
    type: a.ResponsiveImage,
  },
  IZo73mm3R: {
    defaultValue:
      "Maya gave our app a much-needed makeover. It\u2019s never looked so good!",
    displayTextArea: !1,
    title: "Feedback",
    type: a.String,
  },
  EWzDmqYDg: {
    defaultValue: "Albert mores",
    displayTextArea: !1,
    title: "Name",
    type: a.String,
  },
  mq0nqOvpE: {
    defaultValue: "President of Sales",
    displayTextArea: !1,
    title: "Status",
    type: a.String,
  },
});
ye(tr, [...Da, ...He, ...Ua]);
Ve.loadWebFontsFromSelectors([
  "GF;Plus Jakarta Sans-500",
  "GF;Plus Jakarta Sans-700",
  "GF;Plus Jakarta Sans-700italic",
  "GF;Plus Jakarta Sans-500italic",
]);
var Qa = [
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/aUVtebijX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m07NShXUEKi4Rw.ttf",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m07NShXUEKi4Rw.ttf",
      weight: "500",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/aUVtebijX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNShXUEKi4Rw.ttf",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNShXUEKi4Rw.ttf",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/aUVtebijX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_QMq2oR82k.ttf",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_QMq2oR82k.ttf",
      weight: "700",
    },
    {
      family: "Plus Jakarta Sans",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/aUVtebijX:default",
        url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0XCR_QMq2oR82k.ttf",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ0XCR_QMq2oR82k.ttf",
      weight: "500",
    },
  ],
  $a = [
    '.framer-Yr3O7 .framer-styles-preset-1imfrp7:not(.rich-text-wrapper), .framer-Yr3O7 .framer-styles-preset-1imfrp7.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 2.7px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #2d2e2f; --framer-text-decoration: none; --framer-text-transform: uppercase; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-Yr3O7 .framer-styles-preset-1imfrp7:not(.rich-text-wrapper), .framer-Yr3O7 .framer-styles-preset-1imfrp7.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 2.7px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #2d2e2f; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-Yr3O7 .framer-styles-preset-1imfrp7:not(.rich-text-wrapper), .framer-Yr3O7 .framer-styles-preset-1imfrp7.rich-text-wrapper p { --framer-font-family: "Plus Jakarta Sans", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 2.7px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #2d2e2f; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
  ],
  et = "framer-Yr3O7";
Ve.loadWebFontsFromSelectors([
  "GF;Playfair Display-700italic",
  "GF;Playfair Display-900italic",
  "GF;Playfair Display-900italic",
  "GF;Playfair Display-700italic",
]);
var rt = [
    {
      family: "Playfair Display",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/IOxMGW7Ij:default",
        url: "https://fonts.gstatic.com/s/playfairdisplay/v36/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_k-UbtbK-F2rA0s.ttf",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/playfairdisplay/v36/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_k-UbtbK-F2rA0s.ttf",
      weight: "700",
    },
    {
      family: "Playfair Display",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/IOxMGW7Ij:default",
        url: "https://fonts.gstatic.com/s/playfairdisplay/v36/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_gGUbtbK-F2rA0s.ttf",
      },
      style: "italic",
      url: "https://fonts.gstatic.com/s/playfairdisplay/v36/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_gGUbtbK-F2rA0s.ttf",
      weight: "900",
    },
  ],
  at = [
    '.framer-fq1Ug .framer-styles-preset-3ervg:not(.rich-text-wrapper), .framer-fq1Ug .framer-styles-preset-3ervg.rich-text-wrapper h1 { --framer-font-family: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-family-bold: "Playfair Display", serif; --framer-font-family-bold-italic: "Playfair Display", serif; --framer-font-family-italic: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-size: 80px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, #a7a7a7); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1439px) and (min-width: 1200px) { .framer-fq1Ug .framer-styles-preset-3ervg:not(.rich-text-wrapper), .framer-fq1Ug .framer-styles-preset-3ervg.rich-text-wrapper h1 { --framer-font-family: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-family-bold: "Playfair Display", serif; --framer-font-family-bold-italic: "Playfair Display", serif; --framer-font-family-italic: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-size: 68px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, #a7a7a7); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-fq1Ug .framer-styles-preset-3ervg:not(.rich-text-wrapper), .framer-fq1Ug .framer-styles-preset-3ervg.rich-text-wrapper h1 { --framer-font-family: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-family-bold: "Playfair Display", serif; --framer-font-family-bold-italic: "Playfair Display", serif; --framer-font-family-italic: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-size: 48px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, #a7a7a7); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-fq1Ug .framer-styles-preset-3ervg:not(.rich-text-wrapper), .framer-fq1Ug .framer-styles-preset-3ervg.rich-text-wrapper h1 { --framer-font-family: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-family-bold: "Playfair Display", serif; --framer-font-family-bold-italic: "Playfair Display", serif; --framer-font-family-italic: "Playfair Display", "Playfair Display Placeholder", serif; --framer-font-size: 27px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, #a7a7a7); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  tt = "framer-fq1Ug";
var zn = L(zr),
  Fn = Ge(le),
  yr = Ge(A),
  Vn = L(Qe),
  nr = Ge(o.div),
  Hn = L(Vr),
  fe = Ge(oe),
  Ln = L(Hr),
  Zn = L(Te),
  Tn = L(ke),
  En = L(qr),
  qn = L(xr),
  Yn = L(R),
  Kn = L(Fr);
var st = {
    H1SM6Ucjk: "(min-width: 810px) and (max-width: 1199px)",
    ojSnFd2h4: "(max-width: 809px)",
    wWsJgCkMo: "(min-width: 1200px) and (max-width: 1439px)",
    xL2R7XMFK: "(min-width: 1440px)",
  },
  Bn = () => typeof document < "u",
  lt = {
    H1SM6Ucjk: "framer-v-jhobnl",
    ojSnFd2h4: "framer-v-1el267y",
    wWsJgCkMo: "framer-v-1c0izu3",
    xL2R7XMFK: "framer-v-c6y5cm",
  };
Bn() && Sa("wWsJgCkMo", st, lt);
var Jn = { default: { duration: 0 } },
  Ye = { delay: 0.1, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Un = { opacity: 0, rotate: 0, scale: 1, transition: Ye, x: 0, y: -64 },
  S = (e, t) => `perspective(1200px) ${t}`,
  wr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Ye,
    x: 0,
    y: 0,
  },
  vr = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: -64 },
  Gn = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 138 },
  Yr = { delay: 0.2, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Xn = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 117 },
  Qn = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 80 },
  $n = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 72 },
  Kr = { delay: 0.4, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  nt = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 46 },
  ei = { opacity: 1, rotate: 0, scale: 1, x: 0, y: 28 },
  ri = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 48 },
  ai = { delay: 0.7, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  it = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 47 },
  ot = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 26 },
  ti = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 70 },
  ni = { delay: 1, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ii = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 52 },
  oi = { delay: 1.2, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  si = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 56 },
  Ee = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 150 },
  ft = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  li = { opacity: 0, rotate: 0, scale: 1, transition: ft, x: 0, y: 150 },
  fi = { delay: 1.5, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Br = { opacity: 0, rotate: 0, scale: 1, x: -150, y: 0 },
  mi = { opacity: 0, rotate: 0, scale: 1, x: 150, y: 0 },
  ir = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 0 },
  qe = (e, t) => {
    if (!(!e || typeof e != "object")) return { ...e, alt: t };
  },
  di = { delay: 0.5, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ci = { delay: 0.8, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  pi = { delay: 1.1, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  hi = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  ui = ({ query: e, children: t }) => {
    let l = ka(e);
    return t(l);
  },
  gi = { delay: 0.3, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  xi = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  br = Zr(),
  yi = {
    "Desktop ": "xL2R7XMFK",
    "Desktop-Primary": "wWsJgCkMo",
    Phone: "ojSnFd2h4",
    Tablet: "H1SM6Ucjk",
  },
  wi = ({ height: e, id: t, width: l, ...n }) => {
    var m, d;
    return {
      ...n,
      variant:
        (d = (m = yi[n.variant]) !== null && m !== void 0 ? m : n.variant) !==
          null && d !== void 0
          ? d
          : "wWsJgCkMo",
    };
  },
  vi = X(function (e, t) {
    let { activeLocale: l } = ue(),
      {
        style: n,
        className: m,
        layoutId: d,
        variant: u,
        rpxoWv0emTMkspWEXe: x,
        o8CJ9Jd7_TMkspWEXe: f,
        hq9gihCbUTMkspWEXe: s,
        CtvVowLnHTMkspWEXe: g,
        idTMkspWEXe: h,
        ...z
      } = wi(e);
    Ue(() => {
      let ae = Zr(void 0, l);
      if (((document.title = ae.title || ""), ae.viewport)) {
        var Pe;
        (Pe = document.querySelector('meta[name="viewport"]')) === null ||
          Pe === void 0 ||
          Pe.setAttribute("content", ae.viewport);
      }
      ae.bodyClassName &&
        (Array.from(document.body.classList)
          .filter((E) => E.startsWith("framer-body-"))
          .map((E) => document.body.classList.remove(E)),
        document.body.classList.add(ae.bodyClassName));
    }, [void 0, l]);
    let [i, b] = Pa(u, st, !1),
      k = void 0,
      M = Jn.default,
      C = $("j8QzBFzKh"),
      _ = H(null),
      P = $("J7zMkk4TX"),
      y = H(null),
      j = wa(),
      Oe = $("r5ppkTooL"),
      F = H(null),
      ee = $("h0nnB5RqH"),
      me = H(null),
      _e = $("jcMvLOtAh"),
      U = H(null),
      G = $("O9FQUrPsp"),
      V = H(null),
      D = $("nHD6heolD"),
      re = H(null),
      Ce = $("q3bFZjd_O"),
      T = H(null),
      Y = H(null),
      or = $("DYnX31p0U"),
      sr = ce();
    return r(va.Provider, {
      value: { primaryVariantId: "wWsJgCkMo", variantClassNames: lt },
      children: r(J, {
        id: d ?? sr,
        children: p(o.div, {
          className: q("framer-WndPO", La, tt, et, Ea, Ma),
          style: { display: "contents" },
          children: [
            p(o.div, {
              ...z,
              className: q("framer-1c0izu3", m),
              ref: t,
              style: { ...n },
              children: [
                r(W, {
                  breakpoint: i,
                  overrides: {
                    H1SM6Ucjk: {
                      "data-framer-appear-id": "1tvki1a",
                      animate: se("animate", "1tvki1a", wr, "jhobnl"),
                      initial: se("initial", "1tvki1a", vr, "jhobnl"),
                      transformTemplate: Xe("1tvki1a", S),
                    },
                    ojSnFd2h4: {
                      "data-framer-appear-id": "pl9kfv",
                      animate: se("animate", "pl9kfv", wr, "1el267y"),
                      initial: se("initial", "pl9kfv", vr, "1el267y"),
                      transformTemplate: Xe("pl9kfv", S),
                    },
                    xL2R7XMFK: {
                      "data-framer-appear-id": "1jrclky",
                      animate: se("animate", "1jrclky", wr, "c6y5cm"),
                      initial: se("initial", "1jrclky", vr, "c6y5cm"),
                      transformTemplate: Xe("1jrclky", S),
                    },
                  },
                  children: r(oe, {
                    animate: se("animate", "133wje9", wr, "1c0izu3"),
                    className: "framer-133wje9-container",
                    "data-framer-appear-id": "133wje9",
                    exit: Un,
                    id: C,
                    initial: se("initial", "133wje9", vr, "1c0izu3"),
                    layoutScroll: !0,
                    ref: _,
                    transformTemplate: Xe("133wje9", S),
                    children: r(W, {
                      breakpoint: i,
                      overrides: { ojSnFd2h4: { variant: "TqlV2KFd7" } },
                      children: r(zr, {
                        height: "100%",
                        id: "j8QzBFzKh",
                        layoutId: "j8QzBFzKh",
                        s0RPW2aVI: "rgb(255, 255, 255)",
                        style: { height: "100%", width: "100%" },
                        variant: "VMbq_odBm",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                r("div", {
                  className: "framer-7mh4ld",
                  "data-framer-name": "Hero",
                  id: P,
                  name: "Hero",
                  ref: y,
                  children: r("div", {
                    className: "framer-1pmxmz",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: p("div", {
                      className: "framer-13wui1i",
                      "data-framer-name": "Hero content wrapper",
                      name: "Hero content wrapper",
                      children: [
                        p("div", {
                          className: "framer-1e72lty",
                          "data-framer-name": "Titles",
                          name: "Titles",
                          children: [
                            r(W, {
                              breakpoint: i,
                              overrides: {
                                H1SM6Ucjk: {
                                  __framer__enter: Xn,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 159,
                                    intrinsicWidth: 304.5,
                                    pixelHeight: 318,
                                    pixelWidth: 609,
                                    sizes: "185px",
                                    src: new URL(
                                      "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png?scale-down-to=512"
                                    ).href,
                                    srcSet: `${
                                      new URL(
                                        "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png?scale-down-to=512"
                                      ).href
                                    } 512w, ${
                                      new URL(
                                        "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png"
                                      ).href
                                    } 609w`,
                                  },
                                },
                                ojSnFd2h4: {
                                  __framer__enter: Qn,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 159,
                                    intrinsicWidth: 304.5,
                                    pixelHeight: 318,
                                    pixelWidth: 609,
                                    sizes: "131px",
                                    src: new URL(
                                      "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png?scale-down-to=512"
                                    ).href,
                                    srcSet: `${
                                      new URL(
                                        "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png?scale-down-to=512"
                                      ).href
                                    } 512w, ${
                                      new URL(
                                        "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png"
                                      ).href
                                    } 609w`,
                                  },
                                },
                              },
                              children: r(Fn, {
                                __framer__animate: { transition: Yr },
                                __framer__animateOnce: !0,
                                __framer__enter: Gn,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 159,
                                  intrinsicWidth: 304.5,
                                  pixelHeight: 318,
                                  pixelWidth: 609,
                                  sizes: "224px",
                                  src: new URL(
                                    "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png?scale-down-to=512"
                                  ).href,
                                  srcSet: `${
                                    new URL(
                                      "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png?scale-down-to=512"
                                    ).href
                                  } 512w, ${
                                    new URL(
                                      "https://framerusercontent.com/images/0l51MHwk4A30i41HKeuQYABr4.png"
                                    ).href
                                  } 609w`,
                                },
                                className: "framer-1h0xlt5",
                                "data-framer-name": "main_hero_image",
                                name: "main_hero_image",
                                transformTemplate: S,
                              }),
                            }),
                            r("div", {
                              className: "framer-mz6yo7",
                              children: r(W, {
                                breakpoint: i,
                                overrides: {
                                  H1SM6Ucjk: { __framer__enter: nt },
                                  ojSnFd2h4: { __framer__enter: ei },
                                },
                                children: r(yr, {
                                  __framer__animate: { transition: Kr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: $n,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: r(O, {
                                    children: r("h1", {
                                      className: "framer-styles-preset-flt34s",
                                      "data-styles-preset": "LvgAMJctF",
                                      children: "Dhruv Badaya",
                                    }),
                                  }),
                                  className: "framer-rs0l28",
                                  "data-framer-name": "Dhruv",
                                  name: "Dhruv",
                                  transformTemplate: S,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            r("div", {
                              className: "framer-uyhpzz",
                              children: r(W, {
                                breakpoint: i,
                                overrides: {
                                  H1SM6Ucjk: { __framer__enter: it },
                                  ojSnFd2h4: { __framer__enter: ot },
                                },
                                children: r(yr, {
                                  __framer__animate: { transition: ai },
                                  __framer__animateOnce: !0,
                                  __framer__enter: ri,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: r(O, {
                                    children: r("h1", {
                                      className: "framer-styles-preset-3ervg",
                                      "data-styles-preset": "IOxMGW7Ij",
                                      children: "Fullstack Freelancer",
                                    }),
                                  }),
                                  className: "framer-2tdyvv",
                                  "data-framer-name": "Fullstack Freelancer",
                                  name: "Fullstack Freelancer",
                                  transformTemplate: S,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            r("div", {
                              className: "framer-lvd92b",
                              children: r(W, {
                                breakpoint: i,
                                overrides: {
                                  H1SM6Ucjk: { __framer__enter: it },
                                  ojSnFd2h4: { __framer__enter: ot },
                                },
                                children: r(yr, {
                                  __framer__animate: { transition: ni },
                                  __framer__animateOnce: !0,
                                  __framer__enter: ti,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: r(O, {
                                    children: r("h1", {
                                      className: "framer-styles-preset-flt34s",
                                      "data-styles-preset": "LvgAMJctF",
                                      children: "Based in Delhi, India",
                                    }),
                                  }),
                                  className: "framer-hru8xc",
                                  "data-framer-name":
                                    "Based in Delhi, India",
                                  name: "Based in Delhi, India",
                                  transformTemplate: S,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                        r(W, {
                          breakpoint: i,
                          overrides: {
                            H1SM6Ucjk: { __framer__enter: si },
                            ojSnFd2h4: { __framer__enter: nt },
                          },
                          children: p(nr, {
                            __framer__animate: { transition: oi },
                            __framer__animateOnce: !0,
                            __framer__enter: ii,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-ozyzms",
                            "data-framer-name": "Button wrapper",
                            name: "Button wrapper",
                            transformTemplate: S,
                            children: [
                              r(oe, {
                                className: "framer-1n93kfn-container",
                                children: r(W, {
                                  breakpoint: i,
                                  overrides: {
                                    ojSnFd2h4: { variant: "GuPQSJL17" },
                                  },
                                  children: r(Qe, {
                                    aICEdQbHt: !1,
                                    bpjnw__J5: "arrow-up-right",
                                    c8yX9Nh77: "Contact me",
                                    height: "100%",
                                    id: "qqwPiW6IO",
                                    ki2F3m_Fw: !1,
                                    KypcVSal4: "arrow-up-right",
                                    layoutId: "qqwPiW6IO",
                                    qO8rEw8CY: ze(
                                      { webPageId: "SeU9aLefy" },
                                      j
                                    ),
                                    variant: "P9G1Owavr",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              r(oe, {
                                className: "framer-cnrkl7-container",
                                children: r(W, {
                                  breakpoint: i,
                                  overrides: {
                                    ojSnFd2h4: { variant: "AgT9S1VfA" },
                                  },
                                  children: r(Qe, {
                                    aICEdQbHt: !1,
                                    bpjnw__J5: "arrow-up-right",
                                    c8yX9Nh77: "View work",
                                    height: "100%",
                                    id: "Ay_ZuZGGP",
                                    iz10z5nw6: ze(
                                      { webPageId: "KJgWNsaO4" },
                                      j
                                    ),
                                    ki2F3m_Fw: !1,
                                    KypcVSal4: "arrow-up-right",
                                    layoutId: "Ay_ZuZGGP",
                                    variant: "bKg0NVXr8",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                r(W, {
                  breakpoint: i,
                  overrides: {
                    ojSnFd2h4: {
                      __framer__animate: { transition: fi },
                      __framer__exit: void 0,
                    },
                  },
                  children: r(fe, {
                    __framer__animate: { transition: ft },
                    __framer__animateOnce: !0,
                    __framer__enter: Ee,
                    __framer__exit: li,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0,
                    __perspectiveFX: !1,
                    __targetOpacity: 1,
                    className: "framer-12opm7u-container",
                    id: Oe,
                    ref: F,
                    transformTemplate: S,
                    children: r(W, {
                      breakpoint: i,
                      overrides: {
                        H1SM6Ucjk: { variant: "Ij33I7zP6" },
                        ojSnFd2h4: { variant: "Ij33I7zP6" },
                      },
                      children: r(Vr, {
                        height: "100%",
                        id: "r5ppkTooL",
                        layoutId: "r5ppkTooL",
                        style: { width: "100%" },
                        variant: "bR0PUa_KD",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                r(oe, {
                  className: "framer-1dsyy8m-container",
                  id: ee,
                  ref: me,
                  children: r(W, {
                    breakpoint: i,
                    overrides: {
                      H1SM6Ucjk: { variant: "lRnCWkluV" },
                      ojSnFd2h4: { variant: "GfaBJGgav" },
                    },
                    children: r(Hr, {
                      height: "100%",
                      id: "h0nnB5RqH",
                      layoutId: "h0nnB5RqH",
                      style: { width: "100%" },
                      variant: "WzvLB_AQE",
                      width: "100%",
                      xlq77Xqpw: "My Skills",
                    }),
                  }),
                }),
                r("div", {
                  className: "framer-1qizapm",
                  "data-framer-name": "About me",
                  id: _e,
                  name: "About me",
                  ref: U,
                  children: r("div", {
                    className: "framer-u92bn6",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: p("div", {
                      className: "framer-1f7mogu",
                      "data-framer-name": "About me wrapper",
                      name: "About me wrapper",
                      children: [
                        p(nr, {
                          __framer__animate: { transition: Ye },
                          __framer__animateOnce: !0,
                          __framer__enter: Br,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__targets: [{ ref: U, target: "animate" }],
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-pk6h3u",
                          "data-framer-name": "Content wrapper",
                          name: "Content wrapper",
                          transformTemplate: S,
                          children: [
                            r(A, {
                              __fromCanvasComponent: !0,
                              children: r(O, {
                                children: r("p", {
                                  className: "framer-styles-preset-1imfrp7",
                                  "data-styles-preset": "aUVtebijX",
                                  style: {
                                    "--framer-text-color":
                                      "var(--token-7baaeb02-a85b-4b94-a7d5-49a6dd7e0a1a, rgb(225, 250, 82))",
                                  },
                                  children: "About Me",
                                }),
                              }),
                              className: "framer-122auv9",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            r(A, {
                              __fromCanvasComponent: !0,
                              children: r(O, {
                                children: p("h3", {
                                  className: "framer-styles-preset-asxsfi",
                                  "data-styles-preset": "ZXosrtRJG",
                                  children: [
                                    "I\u2019m a",
                                    r("span", {
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, rgb(167, 167, 167))",
                                      },
                                      children: " Product designer",
                                    }),
                                    " and ",
                                    r("span", {
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, rgb(167, 167, 167))",
                                      },
                                      children: "Creative Web Developer",
                                    }),
                                    "  Expert with amazing Design Thinking and UX Research skills to create simple User-centered Design with a passion for solving problems through simple & interactive designs.",
                                  ],
                                }),
                              }),
                              className: "framer-19sfjj3",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        r(nr, {
                          __framer__animate: { transition: Kr },
                          __framer__animateOnce: !0,
                          __framer__enter: mi,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__targets: [{ ref: U, target: "animate" }],
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-15qsm0j",
                          "data-framer-name": "Image Wrapper",
                          name: "Image Wrapper",
                          transformTemplate: S,
                          children: r(le, {
                            background: {
                              alt: "About me image",
                              fit: "fill",
                              intrinsicHeight: 3456,
                              intrinsicWidth: 4608,
                              loading: "lazy",
                              pixelHeight: 3456,
                              pixelWidth: 4608,
                              src: new URL(
                                "https://framerusercontent.com/images/ZMLS3Wxxr6tp5uzS3xKIcFOOi9c.jpg?scale-down-to=1024"
                              ).href,
                            },
                            className: "framer-1ohp8sw",
                            "data-framer-name": "Image",
                            name: "Image",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                r("div", {
                  className: "framer-1xiglih",
                  "data-framer-name": "Service",
                  id: G,
                  name: "Service",
                  ref: V,
                  children: r("div", {
                    className: "framer-2j5fcg",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: r("div", {
                      className: "framer-1flmntl",
                      "data-framer-name": "About me wrapper",
                      name: "About me wrapper",
                      children: p("div", {
                        className: "framer-1t9rbdp",
                        "data-framer-name": "Content wrapper",
                        name: "Content wrapper",
                        children: [
                          r(nr, {
                            __framer__animate: { transition: Ye },
                            __framer__animateOnce: !0,
                            __framer__enter: Br,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__targets: [{ ref: V, target: "animate" }],
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1odu43r",
                            "data-framer-name": "Tile",
                            name: "Tile",
                            transformTemplate: S,
                            children: r(A, {
                              __fromCanvasComponent: !0,
                              children: p(O, {
                                children: [
                                  r("h2", {
                                    className: "framer-styles-preset-5yd4nc",
                                    "data-styles-preset": "y4Z6IHEqt",
                                    children: "Service I",
                                  }),
                                  r("h2", {
                                    className: "framer-styles-preset-5yd4nc",
                                    "data-styles-preset": "y4Z6IHEqt",
                                    children: "Provide",
                                  }),
                                ],
                              }),
                              className: "framer-sjgvu4",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          p("div", {
                            className: "framer-h1dzda",
                            children: [
                              r(fe, {
                                __framer__animate: { transition: Yr },
                                __framer__animateOnce: !0,
                                __framer__enter: ir,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__targets: [
                                  { ref: V, target: "animate" },
                                ],
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-8mntwv-container",
                                transformTemplate: S,
                                children: r(Te, {
                                  BitZAPxrD: "Interaction Design",
                                  height: "100%",
                                  hJm6KRhN5:
                                    "Optimizing user interactions and flows.",
                                  id: "w5qlP0KJQ",
                                  layoutId: "w5qlP0KJQ",
                                  PXS29Ry8C: qe(
                                    {
                                      src: new URL(
                                        "https://framerusercontent.com/images/MuiSq4YD3KlDdwrdmxcvHNXNM.svg"
                                      ).href,
                                    },
                                    ""
                                  ),
                                  style: { width: "100%" },
                                  variant: "qPyCZFJPH",
                                  width: "100%",
                                }),
                              }),
                              r(fe, {
                                __framer__animate: { transition: di },
                                __framer__animateOnce: !0,
                                __framer__enter: ir,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__targets: [
                                  { ref: V, target: "animate" },
                                ],
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-v60y3h-container",
                                transformTemplate: S,
                                children: r(W, {
                                  breakpoint: i,
                                  overrides: {
                                    H1SM6Ucjk: {
                                      hJm6KRhN5:
                                        "Delivering seamless mobile experiences.",
                                    },
                                  },
                                  children: r(Te, {
                                    BitZAPxrD: "Mobile UI",
                                    height: "100%",
                                    hJm6KRhN5:
                                      "Optimizing user interactions and flows.",
                                    id: "btuz5ioVY",
                                    layoutId: "btuz5ioVY",
                                    PXS29Ry8C: qe(
                                      {
                                        src: new URL(
                                          "https://framerusercontent.com/images/uZYO6kfZUTeF2oueEyfcoZufA.svg"
                                        ).href,
                                      },
                                      ""
                                    ),
                                    style: { width: "100%" },
                                    variant: "qPyCZFJPH",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              r(fe, {
                                __framer__animate: { transition: ci },
                                __framer__animateOnce: !0,
                                __framer__enter: ir,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__targets: [
                                  { ref: V, target: "animate" },
                                ],
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-q9usv7-container",
                                transformTemplate: S,
                                children: r(Te, {
                                  BitZAPxrD: "Web Design",
                                  height: "100%",
                                  hJm6KRhN5:
                                    "Crafting beautiful, responsive websites.",
                                  id: "palxYPQ05",
                                  layoutId: "palxYPQ05",
                                  PXS29Ry8C: qe(
                                    {
                                      src: new URL(
                                        "https://framerusercontent.com/images/Q1O5acvyyJ2MQWC202OB9TTaJdI.svg"
                                      ).href,
                                    },
                                    ""
                                  ),
                                  style: { width: "100%" },
                                  variant: "qPyCZFJPH",
                                  width: "100%",
                                }),
                              }),
                              r(fe, {
                                __framer__animate: { transition: pi },
                                __framer__animateOnce: !0,
                                __framer__enter: ir,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__targets: [
                                  { ref: V, target: "animate" },
                                ],
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-twfv0x-container",
                                transformTemplate: S,
                                children: r(Te, {
                                  BitZAPxrD: "Branding",
                                  height: "100%",
                                  hJm6KRhN5:
                                    "Delivering seamless mobile experiences.",
                                  id: "tAzJp3aVC",
                                  layoutId: "tAzJp3aVC",
                                  PXS29Ry8C: qe(
                                    {
                                      src: new URL(
                                        "https://framerusercontent.com/images/KLJGBUUZGTsX9aizKnZvcHTvsM.svg"
                                      ).href,
                                    },
                                    ""
                                  ),
                                  style: { width: "100%" },
                                  variant: "qPyCZFJPH",
                                  width: "100%",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                r("div", {
                  className: "framer-8h3ys0",
                  "data-framer-name": "Featured",
                  id: D,
                  name: "Featured",
                  ref: re,
                  children: r("div", {
                    className: "framer-fj0er8",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: p("div", {
                      className: "framer-1oc1064",
                      "data-framer-name": "Service wrapper",
                      name: "Service wrapper",
                      children: [
                        p(nr, {
                          __framer__animate: { transition: Ye },
                          __framer__animateOnce: !0,
                          __framer__enter: Br,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__targets: [{ ref: re, target: "animate" }],
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-8a5dw1",
                          "data-framer-name": "Titles",
                          name: "Titles",
                          transformTemplate: S,
                          children: [
                            r(A, {
                              __fromCanvasComponent: !0,
                              children: r(O, {
                                children: p("h2", {
                                  className: "framer-styles-preset-5yd4nc",
                                  "data-styles-preset": "y4Z6IHEqt",
                                  children: [
                                    "Featured ",
                                    r("span", {
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-f6f2ae72-7fab-4869-9733-7d8c12c26e00, rgb(167, 167, 167))",
                                      },
                                      children: "Projects",
                                    }),
                                  ],
                                }),
                              }),
                              className: "framer-7ucxxm",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            r(oe, {
                              className: "framer-o7r4jc-container",
                              children: r(ke, {
                                height: "100%",
                                id: "CH4U__AOL",
                                layoutId: "CH4U__AOL",
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          ],
                        }),
                        r("div", {
                          className: "framer-xckw63",
                          children: r(ui, {
                            query: {
                              from: { data: Fa, type: "Collection" },
                              limit: { type: "LiteralValue", value: 3 },
                              select: [
                                { name: "rpxoWv0em", type: "Identifier" },
                                { name: "o8CJ9Jd7_", type: "Identifier" },
                                { name: "hq9gihCbU", type: "Identifier" },
                                { name: "CtvVowLnH", type: "Identifier" },
                                { name: "id", type: "Identifier" },
                              ],
                            },
                            children: (ae) =>
                              ae.map(
                                (
                                  {
                                    rpxoWv0em: Pe,
                                    o8CJ9Jd7_: E,
                                    hq9gihCbU: lr,
                                    CtvVowLnH: I,
                                    id: de,
                                  },
                                  Jr
                                ) => {
                                  var Ke;
                                  return r(
                                    J,
                                    {
                                      id: `TMkspWEXe-${de}`,
                                      children: r(ba.Provider, {
                                        value: { CtvVowLnH: I },
                                        children: r(fe, {
                                          __framer__animate: { transition: Yr },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Ee,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__targets: [
                                            { ref: re, target: "animate" },
                                          ],
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: "framer-111o7w4-container",
                                          transformTemplate: S,
                                          children: r(W, {
                                            breakpoint: i,
                                            overrides: {
                                              ojSnFd2h4: {
                                                variant: "d3iDLlnMB",
                                              },
                                            },
                                            children: r(qr, {
                                              A_8ZeWmv6: ze(
                                                {
                                                  pathVariables: {
                                                    CtvVowLnH: I,
                                                  },
                                                  webPageId: "G2GbGIVbl",
                                                },
                                                j
                                              ),
                                              CMrS8_mAQ:
                                                (Ke = Lr.o8CJ9Jd7_) === null ||
                                                Ke === void 0
                                                  ? void 0
                                                  : Ke.call(Lr, E, l),
                                              frfPrtFTd: ze(
                                                {
                                                  pathVariables: {
                                                    CtvVowLnH: I,
                                                  },
                                                  webPageId: "G2GbGIVbl",
                                                },
                                                j
                                              ),
                                              height: "100%",
                                              id: "a6dpRauCH",
                                              layoutId: "a6dpRauCH",
                                              RGLMjf97t: hi(lr),
                                              style: { width: "100%" },
                                              variant: "Mn0_n3g8X",
                                              width: "100%",
                                              YNyZrUkmD: Pe,
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    de
                                  );
                                }
                              ),
                          }),
                        }),
                        r(W, {
                          breakpoint: i,
                          overrides: {
                            ojSnFd2h4: { __framer__threshold: 0.5 },
                            xL2R7XMFK: {
                              __framer__enter: Ee,
                              __framer__threshold: 0.5,
                            },
                          },
                          children: r(fe, {
                            __framer__animate: { transition: Kr },
                            __framer__animateOnce: !0,
                            __framer__enter: ir,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__targets: [{ ref: re, target: "animate" }],
                            __framer__threshold: 1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1oxqxga-container",
                            transformTemplate: S,
                            children: r(W, {
                              breakpoint: i,
                              overrides: {
                                ojSnFd2h4: {
                                  aICEdQbHt: !1,
                                  ki2F3m_Fw: !0,
                                  variant: "AgT9S1VfA",
                                },
                              },
                              children: r(Qe, {
                                aICEdQbHt: !0,
                                bpjnw__J5: "arrow-up-right",
                                c8yX9Nh77: "View more",
                                height: "100%",
                                id: "mJQmNcJAs",
                                iz10z5nw6: ze({ webPageId: "KJgWNsaO4" }, j),
                                ki2F3m_Fw: !1,
                                KypcVSal4: "arrow-up-right",
                                layoutId: "mJQmNcJAs",
                                variant: "bKg0NVXr8",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                r("div", {
                  className: "framer-1jf1472",
                  "data-framer-name": "Testimonials",
                  id: Ce,
                  name: "Testimonials",
                  ref: T,
                  children: r("div", {
                    className: "framer-1jalpau",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: p("div", {
                      className: "framer-iworfp",
                      "data-framer-name": "Testimonial Wrapper",
                      name: "Testimonial Wrapper",
                      children: [
                        r(yr, {
                          __framer__animate: { transition: Ye },
                          __framer__animateOnce: !0,
                          __framer__enter: Ee,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__targets: [{ ref: T, target: "animate" }],
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: r(O, {
                            children: r("h2", {
                              className: "framer-styles-preset-5yd4nc",
                              "data-styles-preset": "y4Z6IHEqt",
                              children: "Happy Clients",
                            }),
                          }),
                          className: "framer-178ozry",
                          "data-framer-name": "Happy Clients",
                          name: "Happy Clients",
                          transformTemplate: S,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        r(fe, {
                          __framer__animate: { transition: gi },
                          __framer__animateOnce: !0,
                          __framer__enter: Ee,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__targets: [{ ref: T, target: "animate" }],
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-amp4ji-container",
                          transformTemplate: S,
                          children: r(W, {
                            breakpoint: i,
                            overrides: {
                              ojSnFd2h4: {
                                arrowOptions: {
                                  arrowFill:
                                    'var(--token-6f88af0f-7e6c-4e20-8afc-dfd248b518df, rgb(44, 44, 44)) /* {"name":"Grey 4"} */',
                                  arrowGap: 24,
                                  arrowPadding: 0,
                                  arrowPaddingBottom: 0,
                                  arrowPaddingLeft: 0,
                                  arrowPaddingRight: 0,
                                  arrowPaddingTop: 0,
                                  arrowPosition: "bottom-mid",
                                  arrowRadius: 40,
                                  arrowShouldFadeIn: !1,
                                  arrowShouldSpace: !0,
                                  arrowSize: 40,
                                  showMouseControls: !0,
                                },
                              },
                              xL2R7XMFK: {
                                alignment: "flex-start",
                                intervalControl: 1.5,
                              },
                            },
                            children: r(R, {
                              alignment: "center",
                              arrowOptions: {
                                arrowFill:
                                  'var(--token-6f88af0f-7e6c-4e20-8afc-dfd248b518df, rgb(44, 44, 44)) /* {"name":"Grey 4"} */',
                                arrowGap: 10,
                                arrowPadding: 20,
                                arrowPaddingBottom: 0,
                                arrowPaddingLeft: 0,
                                arrowPaddingRight: 0,
                                arrowPaddingTop: 0,
                                arrowPosition: "auto",
                                arrowRadius: 40,
                                arrowShouldFadeIn: !1,
                                arrowShouldSpace: !0,
                                arrowSize: 40,
                                showMouseControls: !0,
                              },
                              autoPlayControl: !0,
                              borderRadius: 0,
                              direction: "left",
                              dragControl: !1,
                              effectsOptions: {
                                effectsHover: !0,
                                effectsOpacity: 1,
                                effectsPerspective: 1200,
                                effectsRotate: 0,
                                effectsScale: 1,
                              },
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !1,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !1,
                              },
                              gap: 20,
                              height: "100%",
                              id: "iAbhCgRwI",
                              intervalControl: 2.8,
                              itemAmount: 1,
                              layoutId: "iAbhCgRwI",
                              padding: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingPerSide: !0,
                              paddingRight: 0,
                              paddingTop: 0,
                              progressOptions: {
                                dotsActiveOpacity: 1,
                                dotsBackground: "rgba(0, 0, 0, 0.2)",
                                dotsBlur: 0,
                                dotsFill: "rgb(255, 255, 255)",
                                dotsGap: 10,
                                dotsInset: 10,
                                dotSize: 10,
                                dotsOpacity: 0.5,
                                dotsPadding: 10,
                                dotsRadius: 50,
                                showProgressDots: !1,
                              },
                              slots: [
                                r(oe, {
                                  className: "framer-1rqhoj-container",
                                  children: r(xr, {
                                    Al2RJDWkM: qe(
                                      {
                                        src: new URL(
                                          "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=4096"
                                        ).href,
                                        srcSet: `${
                                          new URL(
                                            "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512"
                                          ).href
                                        } 512w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=1024"
                                          ).href
                                        } 1024w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=2048"
                                          ).href
                                        } 2048w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=4096"
                                          ).href
                                        } 4096w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg"
                                          ).href
                                        } 5184w`,
                                      },
                                      ""
                                    ),
                                    EWzDmqYDg: "Marina Sandy",
                                    height: "100%",
                                    id: "uE3YQ5txI",
                                    IZo73mm3R:
                                      "Maya gave our app a much-needed makeover. It\u2019s never looked so good! With proper visual hierarchy and consistency",
                                    layoutId: "uE3YQ5txI",
                                    mq0nqOvpE: "President of Sales",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                                r(oe, {
                                  className: "framer-1r76h8f-container",
                                  children: r(xr, {
                                    Al2RJDWkM: qe(
                                      {
                                        src: new URL(
                                          "https://framerusercontent.com/images/TiDwSKaaxBq3prXxaH8FRzebdGk.jpg?scale-down-to=4096"
                                        ).href,
                                        srcSet: `${
                                          new URL(
                                            "https://framerusercontent.com/images/TiDwSKaaxBq3prXxaH8FRzebdGk.jpg?scale-down-to=512"
                                          ).href
                                        } 341w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/TiDwSKaaxBq3prXxaH8FRzebdGk.jpg?scale-down-to=1024"
                                          ).href
                                        } 682w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/TiDwSKaaxBq3prXxaH8FRzebdGk.jpg?scale-down-to=2048"
                                          ).href
                                        } 1365w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/TiDwSKaaxBq3prXxaH8FRzebdGk.jpg?scale-down-to=4096"
                                          ).href
                                        } 2730w, ${
                                          new URL(
                                            "https://framerusercontent.com/images/TiDwSKaaxBq3prXxaH8FRzebdGk.jpg"
                                          ).href
                                        } 3648w`,
                                      },
                                      ""
                                    ),
                                    EWzDmqYDg: "Julia Robert",
                                    height: "100%",
                                    id: "K9MdfrqFC",
                                    IZo73mm3R:
                                      "A visionary designer! Transformed our platform into a work of art. With proper visual hierarchy and consistency",
                                    layoutId: "K9MdfrqFC",
                                    mq0nqOvpE: "Brand Manager",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              ],
                              startFrom: 0,
                              style: { height: "100%", width: "100%" },
                              transitionControl: {
                                damping: 40,
                                stiffness: 200,
                                type: "spring",
                              },
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                r(fe, {
                  __framer__animate: { transition: xi },
                  __framer__animateOnce: !0,
                  __framer__enter: Ee,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__targets: [{ ref: Y, target: "animate" }],
                  __framer__threshold: 0.5,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  className: "framer-epsxjz-container",
                  id: or,
                  ref: Y,
                  transformTemplate: S,
                  children: r(W, {
                    breakpoint: i,
                    overrides: {
                      H1SM6Ucjk: { variant: "pnkw60KBb" },
                      ojSnFd2h4: { variant: "RrxvZ9Ek9" },
                    },
                    children: r(Fr, {
                      cpgJEAaqt: "www.instagram.com",
                      gdQ7LAYi1: "https://www.pinterest.com",
                      height: "100%",
                      id: "DYnX31p0U",
                      layoutId: "DYnX31p0U",
                      RarUQvdkG: "www.facebook.com",
                      style: { width: "100%" },
                      variant: "eUs8ynhif",
                      VdpkQjoA9: "www.twitter.com",
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            r("div", { id: "overlay" }),
          ],
        }),
      }),
    });
  }),
  bi = [
    '.framer-WndPO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${br.bodyClassName} { background: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, rgb(18, 18, 18)); }`,
    ".framer-WndPO .framer-g4pbtn { display: block; }",
    ".framer-WndPO .framer-1c0izu3 { align-content: center; align-items: center; background-color: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, #121212); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".framer-WndPO .framer-133wje9-container { flex: none; height: 64px; left: 0px; position: fixed; right: 0px; top: 0px; transform: perspective(1200px); z-index: 8; }",
    ".framer-WndPO .framer-7mh4ld { align-content: center; align-items: center; background-color: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, #121212); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 150px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-WndPO .framer-1pmxmz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1120px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-WndPO .framer-13wui1i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 860px; }",
    ".framer-WndPO .framer-1e72lty { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-WndPO .framer-1h0xlt5 { aspect-ratio: 1.6230366492146597 / 1; border-bottom-left-radius: 107px; border-bottom-right-radius: 107px; border-top-left-radius: 107px; border-top-right-radius: 107px; flex: none; height: var(--framer-aspect-ratio-supported, 138px); overflow: visible; position: relative; transform: perspective(1200px); width: 224px; z-index: 1; }",
    ".framer-WndPO .framer-mz6yo7, .framer-WndPO .framer-uyhpzz, .framer-WndPO .framer-lvd92b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-WndPO .framer-rs0l28, .framer-WndPO .framer-2tdyvv, .framer-WndPO .framer-hru8xc { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; transform: perspective(1200px); white-space: pre; width: auto; }",
    ".framer-WndPO .framer-ozyzms { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-WndPO .framer-1n93kfn-container, .framer-WndPO .framer-cnrkl7-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-WndPO .framer-12opm7u-container, .framer-WndPO .framer-111o7w4-container, .framer-WndPO .framer-epsxjz-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-WndPO .framer-1dsyy8m-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-WndPO .framer-1qizapm, .framer-WndPO .framer-1xiglih, .framer-WndPO .framer-8h3ys0 { align-content: center; align-items: center; background-color: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, #121212); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-WndPO .framer-u92bn6, .framer-WndPO .framer-2j5fcg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1120px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-WndPO .framer-1f7mogu, .framer-WndPO .framer-1flmntl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-WndPO .framer-pk6h3u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-WndPO .framer-122auv9, .framer-WndPO .framer-sjgvu4, .framer-WndPO .framer-7ucxxm { --framer-paragraph-spacing: 0px; -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-WndPO .framer-19sfjj3 { --framer-paragraph-spacing: 0px; -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 509px; word-break: break-word; word-wrap: break-word; }",
    ".framer-WndPO .framer-15qsm0j { align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 553px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 556px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-WndPO .framer-1ohp8sw { flex: none; height: 100%; position: relative; width: 100%; }",
    ".framer-WndPO .framer-1t9rbdp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 260px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-WndPO .framer-1odu43r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-WndPO .framer-h1dzda { display: grid; flex: 1 0 0px; gap: 24px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-WndPO .framer-8mntwv-container, .framer-WndPO .framer-v60y3h-container, .framer-WndPO .framer-q9usv7-container, .framer-WndPO .framer-twfv0x-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-WndPO .framer-fj0er8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1120px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-WndPO .framer-1oc1064 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 132px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-WndPO .framer-8a5dw1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-WndPO .framer-o7r4jc-container { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }",
    ".framer-WndPO .framer-xckw63 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-WndPO .framer-1oxqxga-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: auto; }",
    ".framer-WndPO .framer-1jf1472 { align-content: center; align-items: center; background-color: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, #121212); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-WndPO .framer-1jalpau { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1120px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-WndPO .framer-iworfp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: 417px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-WndPO .framer-178ozry { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre; width: auto; }",
    ".framer-WndPO .framer-amp4ji-container { flex: 1 0 0px; height: 1px; min-height: 300px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-WndPO .framer-1rqhoj-container, .framer-WndPO .framer-1r76h8f-container { height: auto; position: relative; width: 605px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-WndPO .framer-1c0izu3, .framer-WndPO .framer-7mh4ld, .framer-WndPO .framer-1pmxmz, .framer-WndPO .framer-13wui1i, .framer-WndPO .framer-1e72lty, .framer-WndPO .framer-mz6yo7, .framer-WndPO .framer-uyhpzz, .framer-WndPO .framer-lvd92b, .framer-WndPO .framer-ozyzms, .framer-WndPO .framer-1qizapm, .framer-WndPO .framer-u92bn6, .framer-WndPO .framer-pk6h3u, .framer-WndPO .framer-15qsm0j, .framer-WndPO .framer-1xiglih, .framer-WndPO .framer-2j5fcg, .framer-WndPO .framer-1t9rbdp, .framer-WndPO .framer-1odu43r, .framer-WndPO .framer-8h3ys0, .framer-WndPO .framer-fj0er8, .framer-WndPO .framer-1oc1064, .framer-WndPO .framer-8a5dw1, .framer-WndPO .framer-xckw63, .framer-WndPO .framer-1jf1472, .framer-WndPO .framer-1jalpau, .framer-WndPO .framer-iworfp { gap: 0px; } .framer-WndPO .framer-1c0izu3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-WndPO .framer-1c0izu3 > :first-child, .framer-WndPO .framer-7mh4ld > :first-child, .framer-WndPO .framer-13wui1i > :first-child, .framer-WndPO .framer-1e72lty > :first-child, .framer-WndPO .framer-pk6h3u > :first-child, .framer-WndPO .framer-1odu43r > :first-child, .framer-WndPO .framer-1oc1064 > :first-child, .framer-WndPO .framer-xckw63 > :first-child, .framer-WndPO .framer-1jf1472 > :first-child, .framer-WndPO .framer-1jalpau > :first-child, .framer-WndPO .framer-iworfp > :first-child { margin-top: 0px; } .framer-WndPO .framer-1c0izu3 > :last-child, .framer-WndPO .framer-7mh4ld > :last-child, .framer-WndPO .framer-13wui1i > :last-child, .framer-WndPO .framer-1e72lty > :last-child, .framer-WndPO .framer-pk6h3u > :last-child, .framer-WndPO .framer-1odu43r > :last-child, .framer-WndPO .framer-1oc1064 > :last-child, .framer-WndPO .framer-xckw63 > :last-child, .framer-WndPO .framer-1jf1472 > :last-child, .framer-WndPO .framer-1jalpau > :last-child, .framer-WndPO .framer-iworfp > :last-child { margin-bottom: 0px; } .framer-WndPO .framer-7mh4ld > *, .framer-WndPO .framer-1odu43r > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-WndPO .framer-1pmxmz > *, .framer-WndPO .framer-mz6yo7 > *, .framer-WndPO .framer-uyhpzz > *, .framer-WndPO .framer-lvd92b > *, .framer-WndPO .framer-u92bn6 > *, .framer-WndPO .framer-15qsm0j > *, .framer-WndPO .framer-2j5fcg > *, .framer-WndPO .framer-fj0er8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-WndPO .framer-1pmxmz > :first-child, .framer-WndPO .framer-mz6yo7 > :first-child, .framer-WndPO .framer-uyhpzz > :first-child, .framer-WndPO .framer-lvd92b > :first-child, .framer-WndPO .framer-ozyzms > :first-child, .framer-WndPO .framer-1qizapm > :first-child, .framer-WndPO .framer-u92bn6 > :first-child, .framer-WndPO .framer-15qsm0j > :first-child, .framer-WndPO .framer-1xiglih > :first-child, .framer-WndPO .framer-2j5fcg > :first-child, .framer-WndPO .framer-1t9rbdp > :first-child, .framer-WndPO .framer-8h3ys0 > :first-child, .framer-WndPO .framer-fj0er8 > :first-child, .framer-WndPO .framer-8a5dw1 > :first-child { margin-left: 0px; } .framer-WndPO .framer-1pmxmz > :last-child, .framer-WndPO .framer-mz6yo7 > :last-child, .framer-WndPO .framer-uyhpzz > :last-child, .framer-WndPO .framer-lvd92b > :last-child, .framer-WndPO .framer-ozyzms > :last-child, .framer-WndPO .framer-1qizapm > :last-child, .framer-WndPO .framer-u92bn6 > :last-child, .framer-WndPO .framer-15qsm0j > :last-child, .framer-WndPO .framer-1xiglih > :last-child, .framer-WndPO .framer-2j5fcg > :last-child, .framer-WndPO .framer-1t9rbdp > :last-child, .framer-WndPO .framer-8h3ys0 > :last-child, .framer-WndPO .framer-fj0er8 > :last-child, .framer-WndPO .framer-8a5dw1 > :last-child { margin-right: 0px; } .framer-WndPO .framer-13wui1i > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-WndPO .framer-1e72lty > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-WndPO .framer-ozyzms > *, .framer-WndPO .framer-8a5dw1 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-WndPO .framer-1qizapm > *, .framer-WndPO .framer-1xiglih > *, .framer-WndPO .framer-8h3ys0 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-WndPO .framer-pk6h3u > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-WndPO .framer-1t9rbdp > * { margin: 0px; margin-left: calc(260px / 2); margin-right: calc(260px / 2); } .framer-WndPO .framer-1oc1064 > * { margin: 0px; margin-bottom: calc(132px / 2); margin-top: calc(132px / 2); } .framer-WndPO .framer-xckw63 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-WndPO .framer-1jf1472 > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-WndPO .framer-1jalpau > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-WndPO .framer-iworfp > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } }",
    "@media (min-width: 1200px) and (max-width: 1439px) { .framer-WndPO .hidden-1c0izu3 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-WndPO .hidden-jhobnl { display: none !important; } .${br.bodyClassName} { background: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, rgb(18, 18, 18)); } .framer-WndPO .framer-1c0izu3 { width: 810px; } .framer-WndPO .framer-13wui1i { width: min-content; } .framer-WndPO .framer-1h0xlt5 { height: var(--framer-aspect-ratio-supported, 114px); width: 185px; } .framer-WndPO .framer-1f7mogu { flex-direction: column; gap: 64px; justify-content: flex-start; } .framer-WndPO .framer-pk6h3u, .framer-WndPO .framer-19sfjj3 { width: 100%; } .framer-WndPO .framer-15qsm0j { height: 509px; width: 729px; } .framer-WndPO .framer-1t9rbdp { flex-direction: column; gap: 64px; } .framer-WndPO .framer-h1dzda { flex: none; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-WndPO .framer-1f7mogu, .framer-WndPO .framer-1t9rbdp { gap: 0px; } .framer-WndPO .framer-1f7mogu > *, .framer-WndPO .framer-1t9rbdp > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-WndPO .framer-1f7mogu > :first-child, .framer-WndPO .framer-1t9rbdp > :first-child { margin-top: 0px; } .framer-WndPO .framer-1f7mogu > :last-child, .framer-WndPO .framer-1t9rbdp > :last-child { margin-bottom: 0px; } }}`,
    `@media (max-width: 809px) { .framer-WndPO .hidden-1el267y { display: none !important; } .${br.bodyClassName} { background: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, rgb(18, 18, 18)); } .framer-WndPO .framer-1c0izu3 { width: 390px; } .framer-WndPO .framer-7mh4ld { padding: 100px 16px 50px 16px; } .framer-WndPO .framer-13wui1i { gap: 32px; width: min-content; } .framer-WndPO .framer-1h0xlt5 { height: var(--framer-aspect-ratio-supported, 81px); width: 131px; } .framer-WndPO .framer-ozyzms { gap: 16px; } .framer-WndPO .framer-1qizapm, .framer-WndPO .framer-1xiglih, .framer-WndPO .framer-8h3ys0 { flex-direction: column; padding: 50px 16px 50px 16px; } .framer-WndPO .framer-u92bn6, .framer-WndPO .framer-2j5fcg, .framer-WndPO .framer-fj0er8 { flex: none; width: 100%; } .framer-WndPO .framer-1f7mogu { flex-direction: column; gap: 40px; justify-content: flex-start; } .framer-WndPO .framer-pk6h3u, .framer-WndPO .framer-19sfjj3 { width: 100%; } .framer-WndPO .framer-15qsm0j { height: 395px; width: 100%; } .framer-WndPO .framer-1t9rbdp { flex-direction: column; gap: 40px; } .framer-WndPO .framer-h1dzda { flex: none; grid-template-columns: repeat(1, minmax(200px, 1fr)); height: 1104px; width: 100%; } .framer-WndPO .framer-1oc1064 { gap: 40px; } .framer-WndPO .framer-1jf1472 { padding: 50px 16px 0px 16px; } .framer-WndPO .framer-1jalpau { overflow: visible; } .framer-WndPO .framer-iworfp { gap: 40px; overflow: visible; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-WndPO .framer-13wui1i, .framer-WndPO .framer-ozyzms, .framer-WndPO .framer-1qizapm, .framer-WndPO .framer-1f7mogu, .framer-WndPO .framer-1xiglih, .framer-WndPO .framer-1t9rbdp, .framer-WndPO .framer-8h3ys0, .framer-WndPO .framer-1oc1064, .framer-WndPO .framer-iworfp { gap: 0px; } .framer-WndPO .framer-13wui1i > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-WndPO .framer-13wui1i > :first-child, .framer-WndPO .framer-1qizapm > :first-child, .framer-WndPO .framer-1f7mogu > :first-child, .framer-WndPO .framer-1xiglih > :first-child, .framer-WndPO .framer-1t9rbdp > :first-child, .framer-WndPO .framer-8h3ys0 > :first-child, .framer-WndPO .framer-1oc1064 > :first-child, .framer-WndPO .framer-iworfp > :first-child { margin-top: 0px; } .framer-WndPO .framer-13wui1i > :last-child, .framer-WndPO .framer-1qizapm > :last-child, .framer-WndPO .framer-1f7mogu > :last-child, .framer-WndPO .framer-1xiglih > :last-child, .framer-WndPO .framer-1t9rbdp > :last-child, .framer-WndPO .framer-8h3ys0 > :last-child, .framer-WndPO .framer-1oc1064 > :last-child, .framer-WndPO .framer-iworfp > :last-child { margin-bottom: 0px; } .framer-WndPO .framer-ozyzms > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-WndPO .framer-ozyzms > :first-child { margin-left: 0px; } .framer-WndPO .framer-ozyzms > :last-child { margin-right: 0px; } .framer-WndPO .framer-1qizapm > *, .framer-WndPO .framer-1xiglih > *, .framer-WndPO .framer-8h3ys0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-WndPO .framer-1f7mogu > *, .framer-WndPO .framer-1t9rbdp > *, .framer-WndPO .framer-1oc1064 > *, .framer-WndPO .framer-iworfp > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }}`,
    `@media (min-width: 1440px) { .framer-WndPO .hidden-c6y5cm { display: none !important; } .${br.bodyClassName} { background: var(--token-72367584-7ffa-4df8-b4b3-a2546e87ad24, rgb(18, 18, 18)); } .framer-WndPO .framer-1c0izu3 { width: 1440px; }}`,
    ...Ha,
    ...at,
    ...$a,
    ...Ta,
    ...Ia,
  ],
  _r = xe(vi, bi, "framer-WndPO"),
  Po = _r;
_r.displayName = "Home";
_r.defaultProps = { height: 4901.5, width: 1200 };
ye(_r, [
  ...zn,
  ...Vn,
  ...Hn,
  ...Ln,
  ...Zn,
  ...Tn,
  ...En,
  ...qn,
  ...Yn,
  ...Kn,
  ...Va,
  ...rt,
  ...Qa,
  ...Za,
  ...ja,
]);
var So = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameroOKM_zNmS",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"H1SM6Ucjk":{"layout":["fixed","auto"]},"ojSnFd2h4":{"layout":["fixed","auto"]},"xL2R7XMFK":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1200",
        framerContractVersion: "1",
        framerResponsiveScreen: "",
        framerImmutableVariables: "false",
        framerIntrinsicHeight: "4901.5",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { So as __FramerMetadata__, Po as default };
//# sourceMappingURL=65dDvh4K8bqOXgPA8NX9YPqRRXx3bBQPfkJ4YWLCky0.C6GUMDIP.mjs.map
