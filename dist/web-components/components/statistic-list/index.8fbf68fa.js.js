import { g as genComponentStyleHook, m as merge, K as Keyframe, a as genPresetColor, r as resetComponent$1, b as reactExports, C as ConfigContext, i as isPresetColor, c as classNames, d as cloneElement, e as CSSMotion, w as wrapperRaf, f as KeyCode, h as composeRef, R as React, s as supportRef, _ as _objectWithoutProperties, j as _slicedToArray, T as Trigger$1, k as _extends, l as _defineProperty$1, u as useMemo, n as isEqual, o as _objectSpread2$1, p as _toConsumableArray, q as isVisible$1, t as useMergedState, v as warningOnce, x as useComposeRef, y as _inherits, z as _createSuper, A as _classCallCheck, B as _createClass, D as omit$1, F as ForwardOverflow, E as toArray, G as _typeof$1, H as o, I as canUseDom, J as index, L as contains, M as useLayoutEffect, N as useSafeState, O as _asyncToGenerator, P as _regeneratorRuntime, Q as isMobile, S as _assertThisInitialized, U as findDOMNode, V as reactDomExports, W as AntdIcon, X as useLayoutUpdateEffect, Y as useEvent, Z as RefResizeObserver, $ as getTransitionName$1, a0 as initSlideMotion, a1 as textEllipsis, a2 as genFocusStyle, a3 as useSize, a4 as CloseOutlined, a5 as useBreakpoint$2, a6 as useForceUpdate, a7 as _unsupportedIterableToArray, a8 as createTheme, a9 as theme, aa as ConfigProvider, ab as useStyleRegister, ac as jsxRuntimeExports, ad as Tooltip, ae as Row, af as Col, ag as version, ah as noteOnce, ai as RightOutlined, aj as factory } from "../../factory-2339badb.js";
const antStatusProcessing = new Keyframe("antStatusProcessing", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(2.4)",
    opacity: 0
  }
});
const antZoomBadgeIn = new Keyframe("antZoomBadgeIn", {
  "0%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1) translate(50%, -50%)"
  }
});
const antZoomBadgeOut = new Keyframe("antZoomBadgeOut", {
  "0%": {
    transform: "scale(1) translate(50%, -50%)"
  },
  "100%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  }
});
const antNoWrapperZoomBadgeIn = new Keyframe("antNoWrapperZoomBadgeIn", {
  "0%": {
    transform: "scale(0)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)"
  }
});
const antNoWrapperZoomBadgeOut = new Keyframe("antNoWrapperZoomBadgeOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0)",
    opacity: 0
  }
});
const antBadgeLoadingCircle = new Keyframe("antBadgeLoadingCircle", {
  "0%": {
    transformOrigin: "50%"
  },
  "100%": {
    transform: "translate(50%, -50%) rotate(360deg)",
    transformOrigin: "50%"
  }
});
const genSharedBadgeStyle = (token2) => {
  const {
    componentCls,
    iconCls,
    antCls,
    badgeFontHeight,
    badgeShadowSize,
    badgeHeightSm,
    motionDurationSlow,
    badgeStatusSize,
    marginXS,
    badgeRibbonOffset
  } = token2;
  const numberPrefixCls = `${antCls}-scroll-number`;
  const ribbonPrefixCls = `${antCls}-ribbon`;
  const ribbonWrapperPrefixCls = `${antCls}-ribbon-wrapper`;
  const colorPreset = genPresetColor(token2, (colorKey, _ref) => {
    let {
      darkColor
    } = _ref;
    return {
      [`${componentCls}-color-${colorKey}`]: {
        background: darkColor
      }
    };
  });
  const statusRibbonPreset = genPresetColor(token2, (colorKey, _ref2) => {
    let {
      darkColor
    } = _ref2;
    return {
      [`&${ribbonPrefixCls}-color-${colorKey}`]: {
        background: darkColor,
        color: darkColor
      }
    };
  });
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent$1(token2)), {
      position: "relative",
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1,
      [`${componentCls}-count`]: {
        zIndex: token2.badgeZIndex,
        minWidth: token2.badgeHeight,
        height: token2.badgeHeight,
        color: token2.badgeTextColor,
        fontWeight: token2.badgeFontWeight,
        fontSize: token2.badgeFontSize,
        lineHeight: `${token2.badgeHeight}px`,
        whiteSpace: "nowrap",
        textAlign: "center",
        background: token2.badgeColor,
        borderRadius: token2.badgeHeight / 2,
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token2.badgeShadowColor}`,
        transition: `background ${token2.motionDurationMid}`,
        a: {
          color: token2.badgeTextColor
        },
        "a:hover": {
          color: token2.badgeTextColor
        },
        "a:hover &": {
          background: token2.badgeColorHover
        }
      },
      [`${componentCls}-count-sm`]: {
        minWidth: badgeHeightSm,
        height: badgeHeightSm,
        fontSize: token2.badgeFontSizeSm,
        lineHeight: `${badgeHeightSm}px`,
        borderRadius: badgeHeightSm / 2
      },
      [`${componentCls}-multiple-words`]: {
        padding: `0 ${token2.paddingXS}px`
      },
      [`${componentCls}-dot`]: {
        zIndex: token2.badgeZIndex,
        width: token2.badgeDotSize,
        minWidth: token2.badgeDotSize,
        height: token2.badgeDotSize,
        background: token2.badgeColor,
        borderRadius: "100%",
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token2.badgeShadowColor}`
      },
      [`${componentCls}-dot${numberPrefixCls}`]: {
        transition: `background ${motionDurationSlow}`
      },
      [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        transform: "translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`${iconCls}-spin`]: {
          animationName: antBadgeLoadingCircle,
          animationDuration: token2.motionDurationMid,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }
      },
      [`&${componentCls}-status`]: {
        lineHeight: "inherit",
        verticalAlign: "baseline",
        [`${componentCls}-status-dot`]: {
          position: "relative",
          top: -1,
          display: "inline-block",
          width: badgeStatusSize,
          height: badgeStatusSize,
          verticalAlign: "middle",
          borderRadius: "50%"
        },
        [`${componentCls}-status-success`]: {
          backgroundColor: token2.colorSuccess
        },
        [`${componentCls}-status-processing`]: {
          position: "relative",
          color: token2.colorPrimary,
          backgroundColor: token2.colorPrimary,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            borderWidth: badgeShadowSize,
            borderStyle: "solid",
            borderColor: "inherit",
            borderRadius: "50%",
            animationName: antStatusProcessing,
            animationDuration: token2.badgeProcessingDuration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            content: '""'
          }
        },
        [`${componentCls}-status-default`]: {
          backgroundColor: token2.colorTextPlaceholder
        },
        [`${componentCls}-status-error`]: {
          backgroundColor: token2.colorError
        },
        [`${componentCls}-status-warning`]: {
          backgroundColor: token2.colorWarning
        },
        [`${componentCls}-status-text`]: {
          marginInlineStart: marginXS,
          color: token2.colorText,
          fontSize: token2.fontSize
        }
      }
    }), colorPreset), {
      [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
        animationName: antZoomBadgeIn,
        animationDuration: token2.motionDurationSlow,
        animationTimingFunction: token2.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`${componentCls}-zoom-leave`]: {
        animationName: antZoomBadgeOut,
        animationDuration: token2.motionDurationSlow,
        animationTimingFunction: token2.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`&${componentCls}-not-a-wrapper`]: {
        [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
          animationName: antNoWrapperZoomBadgeIn,
          animationDuration: token2.motionDurationSlow,
          animationTimingFunction: token2.motionEaseOutBack
        },
        [`${componentCls}-zoom-leave`]: {
          animationName: antNoWrapperZoomBadgeOut,
          animationDuration: token2.motionDurationSlow,
          animationTimingFunction: token2.motionEaseOutBack
        },
        [`&:not(${componentCls}-status)`]: {
          verticalAlign: "middle"
        },
        [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
          transform: "none"
        },
        [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
          position: "relative",
          top: "auto",
          display: "block",
          transformOrigin: "50% 50%"
        }
      },
      [`${numberPrefixCls}`]: {
        overflow: "hidden",
        [`${numberPrefixCls}-only`]: {
          position: "relative",
          display: "inline-block",
          height: token2.badgeHeight,
          transition: `all ${token2.motionDurationSlow} ${token2.motionEaseOutBack}`,
          WebkitTransformStyle: "preserve-3d",
          WebkitBackfaceVisibility: "hidden",
          [`> p${numberPrefixCls}-only-unit`]: {
            height: token2.badgeHeight,
            margin: 0,
            WebkitTransformStyle: "preserve-3d",
            WebkitBackfaceVisibility: "hidden"
          }
        },
        [`${numberPrefixCls}-symbol`]: {
          verticalAlign: "top"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
          transform: "translate(-50%, -50%)"
        }
      }
    }),
    [`${ribbonWrapperPrefixCls}`]: {
      position: "relative"
    },
    [`${ribbonPrefixCls}`]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent$1(token2)), {
      position: "absolute",
      top: marginXS,
      padding: `0 ${token2.paddingXS}px`,
      color: token2.colorPrimary,
      lineHeight: `${badgeFontHeight}px`,
      whiteSpace: "nowrap",
      backgroundColor: token2.colorPrimary,
      borderRadius: token2.borderRadiusSM,
      [`${ribbonPrefixCls}-text`]: {
        color: token2.colorTextLightSolid
      },
      [`${ribbonPrefixCls}-corner`]: {
        position: "absolute",
        top: "100%",
        width: badgeRibbonOffset,
        height: badgeRibbonOffset,
        color: "currentcolor",
        border: `${badgeRibbonOffset / 2}px solid`,
        transform: token2.badgeRibbonCornerTransform,
        transformOrigin: "top",
        filter: token2.badgeRibbonCornerFilter
      }
    }), statusRibbonPreset), {
      [`&${ribbonPrefixCls}-placement-end`]: {
        insetInlineEnd: -badgeRibbonOffset,
        borderEndEndRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineEnd: 0,
          borderInlineEndColor: "transparent",
          borderBlockEndColor: "transparent"
        }
      },
      [`&${ribbonPrefixCls}-placement-start`]: {
        insetInlineStart: -badgeRibbonOffset,
        borderEndStartRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineStart: 0,
          borderBlockEndColor: "transparent",
          borderInlineStartColor: "transparent"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
};
const useStyle$c = genComponentStyleHook("Badge", (token2) => {
  const {
    fontSize,
    lineHeight,
    fontSizeSM,
    lineWidth,
    marginXS,
    colorBorderBg
  } = token2;
  const badgeFontHeight = Math.round(fontSize * lineHeight);
  const badgeShadowSize = lineWidth;
  const badgeZIndex = "auto";
  const badgeHeight = badgeFontHeight - 2 * badgeShadowSize;
  const badgeTextColor = token2.colorBgContainer;
  const badgeFontWeight = "normal";
  const badgeFontSize = fontSizeSM;
  const badgeColor = token2.colorError;
  const badgeColorHover = token2.colorErrorHover;
  const badgeHeightSm = fontSize;
  const badgeDotSize = fontSizeSM / 2;
  const badgeFontSizeSm = fontSizeSM;
  const badgeStatusSize = fontSizeSM / 2;
  const badgeToken = merge(token2, {
    badgeFontHeight,
    badgeShadowSize,
    badgeZIndex,
    badgeHeight,
    badgeTextColor,
    badgeFontWeight,
    badgeFontSize,
    badgeColor,
    badgeColorHover,
    badgeShadowColor: colorBorderBg,
    badgeHeightSm,
    badgeDotSize,
    badgeFontSizeSm,
    badgeStatusSize,
    badgeProcessingDuration: "1.2s",
    badgeRibbonOffset: marginXS,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: "scaleY(0.75)",
    badgeRibbonCornerFilter: `brightness(75%)`
  });
  return [genSharedBadgeStyle(badgeToken)];
});
const Ribbon = (_ref) => {
  let {
    className,
    prefixCls: customizePrefixCls,
    style,
    color,
    children,
    text,
    placement = "end"
  } = _ref;
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("ribbon", customizePrefixCls);
  const colorInPreset = isPresetColor(color, false);
  const ribbonCls = classNames(prefixCls, `${prefixCls}-placement-${placement}`, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-color-${color}`]: colorInPreset
  }, className);
  const [wrapSSR, hashId] = useStyle$c(prefixCls);
  const colorStyle = {};
  const cornerColorStyle = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
    className: classNames(`${prefixCls}-wrapper`, hashId)
  }, children, /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames(ribbonCls, hashId),
    style: Object.assign(Object.assign({}, colorStyle), style)
  }, /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-text`
  }, text), /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-corner`,
    style: cornerColorStyle
  }))));
};
const Ribbon$1 = Ribbon;
function UnitNumber(_ref) {
  let {
    prefixCls,
    value,
    current,
    offset: offset2 = 0
  } = _ref;
  let style;
  if (offset2) {
    style = {
      position: "absolute",
      top: `${offset2}00%`,
      left: 0
    };
  }
  return /* @__PURE__ */ reactExports.createElement("span", {
    style,
    className: classNames(`${prefixCls}-only-unit`, {
      current
    })
  }, value);
}
function getOffset$2(start, end, unit) {
  let index2 = start;
  let offset2 = 0;
  while ((index2 + 10) % 10 !== end) {
    index2 += unit;
    offset2 += unit;
  }
  return offset2;
}
function SingleNumber(props) {
  const {
    prefixCls,
    count: originCount,
    value: originValue
  } = props;
  const value = Number(originValue);
  const count = Math.abs(originCount);
  const [prevValue, setPrevValue] = reactExports.useState(value);
  const [prevCount, setPrevCount] = reactExports.useState(count);
  const onTransitionEnd = () => {
    setPrevValue(value);
    setPrevCount(count);
  };
  reactExports.useEffect(() => {
    const timeout = setTimeout(() => {
      onTransitionEnd();
    }, 1e3);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  let unitNodes;
  let offsetStyle;
  if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
    unitNodes = [/* @__PURE__ */ reactExports.createElement(UnitNumber, Object.assign({}, props, {
      key: value,
      current: true
    }))];
    offsetStyle = {
      transition: "none"
    };
  } else {
    unitNodes = [];
    const end = value + 10;
    const unitNumberList = [];
    for (let index2 = value; index2 <= end; index2 += 1) {
      unitNumberList.push(index2);
    }
    const prevIndex = unitNumberList.findIndex((n2) => n2 % 10 === prevValue);
    unitNodes = unitNumberList.map((n2, index2) => {
      const singleUnit = n2 % 10;
      return /* @__PURE__ */ reactExports.createElement(UnitNumber, Object.assign({}, props, {
        key: n2,
        value: singleUnit,
        offset: index2 - prevIndex,
        current: index2 === prevIndex
      }));
    });
    const unit = prevCount < count ? 1 : -1;
    offsetStyle = {
      transform: `translateY(${-getOffset$2(prevValue, value, unit)}00%)`
    };
  }
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-only`,
    style: offsetStyle,
    onTransitionEnd
  }, unitNodes);
}
var __rest$3 = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const ScrollNumber = /* @__PURE__ */ reactExports.forwardRef((_a, ref) => {
  var {
    prefixCls: customizePrefixCls,
    count,
    className,
    motionClassName,
    style,
    title,
    show,
    component: Component = "sup",
    children
  } = _a, restProps = __rest$3(_a, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("scroll-number", customizePrefixCls);
  const newProps = Object.assign(Object.assign({}, restProps), {
    "data-show": show,
    style,
    className: classNames(prefixCls, className, motionClassName),
    title
  });
  let numberNodes = count;
  if (count && Number(count) % 1 === 0) {
    const numberList = String(count).split("");
    numberNodes = numberList.map((num, i) => /* @__PURE__ */ reactExports.createElement(SingleNumber, {
      prefixCls,
      count: Number(count),
      value: num,
      // eslint-disable-next-line react/no-array-index-key
      key: numberList.length - i
    }));
  }
  if (style && style.borderColor) {
    newProps.style = Object.assign(Object.assign({}, style), {
      boxShadow: `0 0 0 1px ${style.borderColor} inset`
    });
  }
  if (children) {
    return cloneElement(children, (oriProps) => ({
      className: classNames(`${prefixCls}-custom-component`, oriProps === null || oriProps === void 0 ? void 0 : oriProps.className, motionClassName)
    }));
  }
  return /* @__PURE__ */ reactExports.createElement(Component, Object.assign({}, newProps, {
    ref
  }), numberNodes);
});
const ScrollNumber$1 = ScrollNumber;
var __rest$2 = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const InternalBadge = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    scrollNumberPrefixCls: customizeScrollNumberPrefixCls,
    children,
    status,
    text,
    color,
    count = null,
    overflowCount = 99,
    dot = false,
    size = "default",
    title,
    offset: offset2,
    style,
    className,
    rootClassName,
    showZero = false
  } = props, restProps = __rest$2(props, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "rootClassName", "showZero"]);
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("badge", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$c(prefixCls);
  const numberedDisplayCount = count > overflowCount ? `${overflowCount}+` : count;
  const isZero = numberedDisplayCount === "0" || numberedDisplayCount === 0;
  const ignoreCount = count === null || isZero && !showZero;
  const hasStatus = (status !== null && status !== void 0 || color !== null && color !== void 0) && ignoreCount;
  const showAsDot = dot && !isZero;
  const mergedCount = showAsDot ? "" : numberedDisplayCount;
  const isHidden = reactExports.useMemo(() => {
    const isEmpty = mergedCount === null || mergedCount === void 0 || mergedCount === "";
    return (isEmpty || isZero && !showZero) && !showAsDot;
  }, [mergedCount, isZero, showZero, showAsDot]);
  const countRef = reactExports.useRef(count);
  if (!isHidden) {
    countRef.current = count;
  }
  const livingCount = countRef.current;
  const displayCountRef = reactExports.useRef(mergedCount);
  if (!isHidden) {
    displayCountRef.current = mergedCount;
  }
  const displayCount = displayCountRef.current;
  const isDotRef = reactExports.useRef(showAsDot);
  if (!isHidden) {
    isDotRef.current = showAsDot;
  }
  const mergedStyle = reactExports.useMemo(() => {
    if (!offset2) {
      return Object.assign({}, style);
    }
    const offsetStyle = {
      marginTop: offset2[1]
    };
    if (direction === "rtl") {
      offsetStyle.left = parseInt(offset2[0], 10);
    } else {
      offsetStyle.right = -parseInt(offset2[0], 10);
    }
    return Object.assign(Object.assign({}, offsetStyle), style);
  }, [direction, offset2, style]);
  const titleNode = title !== null && title !== void 0 ? title : typeof livingCount === "string" || typeof livingCount === "number" ? livingCount : void 0;
  const statusTextNode = isHidden || !text ? null : /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-status-text`
  }, text);
  const displayNode = !livingCount || typeof livingCount !== "object" ? void 0 : cloneElement(livingCount, (oriProps) => ({
    style: Object.assign(Object.assign({}, mergedStyle), oriProps.style)
  }));
  const isInternalColor = isPresetColor(color, false);
  const statusCls = classNames({
    [`${prefixCls}-status-dot`]: hasStatus,
    [`${prefixCls}-status-${status}`]: !!status,
    [`${prefixCls}-color-${color}`]: isInternalColor
  });
  const statusStyle = {};
  if (color && !isInternalColor) {
    statusStyle.color = color;
    statusStyle.background = color;
  }
  const badgeClassName = classNames(prefixCls, {
    [`${prefixCls}-status`]: hasStatus,
    [`${prefixCls}-not-a-wrapper`]: !children,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId);
  if (!children && hasStatus) {
    const statusTextColor = mergedStyle.color;
    return wrapSSR(/* @__PURE__ */ reactExports.createElement("span", Object.assign({}, restProps, {
      className: badgeClassName,
      style: mergedStyle
    }), /* @__PURE__ */ reactExports.createElement("span", {
      className: statusCls,
      style: statusStyle
    }), text && /* @__PURE__ */ reactExports.createElement("span", {
      style: {
        color: statusTextColor
      },
      className: `${prefixCls}-status-text`
    }, text)));
  }
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("span", Object.assign({
    ref
  }, restProps, {
    className: badgeClassName
  }), children, /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    visible: !isHidden,
    motionName: `${prefixCls}-zoom`,
    motionAppear: false,
    motionDeadline: 1e3
  }, (_ref) => {
    let {
      className: motionClassName,
      ref: scrollNumberRef
    } = _ref;
    const scrollNumberPrefixCls = getPrefixCls("scroll-number", customizeScrollNumberPrefixCls);
    const isDot = isDotRef.current;
    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: isDot,
      [`${prefixCls}-count`]: !isDot,
      [`${prefixCls}-count-sm`]: size === "small",
      [`${prefixCls}-multiple-words`]: !isDot && displayCount && displayCount.toString().length > 1,
      [`${prefixCls}-status-${status}`]: !!status,
      [`${prefixCls}-color-${color}`]: isInternalColor
    });
    let scrollNumberStyle = Object.assign({}, mergedStyle);
    if (color && !isInternalColor) {
      scrollNumberStyle = scrollNumberStyle || {};
      scrollNumberStyle.background = color;
    }
    return /* @__PURE__ */ reactExports.createElement(ScrollNumber$1, {
      prefixCls: scrollNumberPrefixCls,
      show: !isHidden,
      motionClassName,
      className: scrollNumberCls,
      count: displayCount,
      title: titleNode,
      style: scrollNumberStyle,
      key: "scrollNumber",
      ref: scrollNumberRef
    }, displayNode);
  }), statusTextNode));
};
const Badge = /* @__PURE__ */ reactExports.forwardRef(InternalBadge);
Badge.Ribbon = Ribbon$1;
const Badge$1 = Badge;
var ESC$1 = KeyCode.ESC, TAB = KeyCode.TAB;
function useAccessibility$1(_ref) {
  var visible = _ref.visible, triggerRef = _ref.triggerRef, onVisibleChange = _ref.onVisibleChange, autoFocus = _ref.autoFocus, overlayRef = _ref.overlayRef;
  var focusMenuRef = reactExports.useRef(false);
  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus2() {
    if (visible) {
      var _triggerRef$current, _triggerRef$current$f;
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 ? void 0 : _triggerRef$current$f.call(_triggerRef$current);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(false);
    }
  };
  var focusMenu = function focusMenu2() {
    var _overlayRef$current;
    if ((_overlayRef$current = overlayRef.current) !== null && _overlayRef$current !== void 0 && _overlayRef$current.focus) {
      overlayRef.current.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  var handleKeyDown = function handleKeyDown2(event) {
    switch (event.keyCode) {
      case ESC$1:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB: {
        var focusResult = false;
        if (!focusMenuRef.current) {
          focusResult = focusMenu();
        }
        if (focusResult) {
          event.preventDefault();
        } else {
          handleCloseMenuAndReturnFocus();
        }
        break;
      }
    }
  };
  reactExports.useEffect(function() {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
      if (autoFocus) {
        wrapperRaf(focusMenu, 3);
      }
      return function() {
        window.removeEventListener("keydown", handleKeyDown);
        focusMenuRef.current = false;
      };
    }
    return function() {
      focusMenuRef.current = false;
    };
  }, [visible]);
}
var Overlay = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var overlay = props.overlay, arrow = props.arrow, prefixCls = props.prefixCls;
  var overlayNode = reactExports.useMemo(function() {
    var overlayElement;
    if (typeof overlay === "function") {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  }, [overlay]);
  var composedRef = composeRef(ref, overlayNode === null || overlayNode === void 0 ? void 0 : overlayNode.ref);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, arrow && /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-arrow")
  }), /* @__PURE__ */ React.cloneElement(overlayNode, {
    ref: supportRef(overlayNode) ? composedRef : void 0
  }));
});
var autoAdjustOverflow$1 = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements$1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  }
};
var _excluded$g = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function Dropdown(props, ref) {
  var _children$props;
  var _props$arrow = props.arrow, arrow = _props$arrow === void 0 ? false : _props$arrow, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-dropdown" : _props$prefixCls, transitionName = props.transitionName, animation = props.animation, align = props.align, _props$placement = props.placement, placement = _props$placement === void 0 ? "bottomLeft" : _props$placement, _props$placements = props.placements, placements2 = _props$placements === void 0 ? placements$1 : _props$placements, getPopupContainer = props.getPopupContainer, showAction = props.showAction, hideAction = props.hideAction, overlayClassName = props.overlayClassName, overlayStyle = props.overlayStyle, visible = props.visible, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? ["hover"] : _props$trigger, autoFocus = props.autoFocus, overlay = props.overlay, children = props.children, onVisibleChange = props.onVisibleChange, otherProps = _objectWithoutProperties(props, _excluded$g);
  var _React$useState = React.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), triggerVisible = _React$useState2[0], setTriggerVisible = _React$useState2[1];
  var mergedVisible = "visible" in props ? visible : triggerVisible;
  var triggerRef = React.useRef(null);
  var overlayRef = React.useRef(null);
  var childRef = React.useRef(null);
  React.useImperativeHandle(ref, function() {
    return triggerRef.current;
  });
  var handleVisibleChange = function handleVisibleChange2(newVisible) {
    setTriggerVisible(newVisible);
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(newVisible);
  };
  useAccessibility$1({
    visible: mergedVisible,
    triggerRef: childRef,
    onVisibleChange: handleVisibleChange,
    autoFocus,
    overlayRef
  });
  var onClick = function onClick2(e2) {
    var onOverlayClick = props.onOverlayClick;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e2);
    }
  };
  var getMenuElement = function getMenuElement2() {
    return /* @__PURE__ */ React.createElement(Overlay, {
      ref: overlayRef,
      overlay,
      prefixCls,
      arrow
    });
  };
  var getMenuElementOrLambda = function getMenuElementOrLambda2() {
    if (typeof overlay === "function") {
      return getMenuElement;
    }
    return getMenuElement();
  };
  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger2() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger, alignPoint2 = props.alignPoint;
    if ("minOverlayWidthMatchTrigger" in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint2;
  };
  var getOpenClassName = function getOpenClassName2() {
    var openClassName = props.openClassName;
    if (openClassName !== void 0) {
      return openClassName;
    }
    return "".concat(prefixCls, "-open");
  };
  var childrenNode = /* @__PURE__ */ React.cloneElement(children, {
    className: classNames((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, mergedVisible && getOpenClassName()),
    ref: supportRef(children) ? composeRef(childRef, children.ref) : void 0
  });
  var triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf("contextMenu") !== -1) {
    triggerHideAction = ["click"];
  }
  return /* @__PURE__ */ React.createElement(Trigger$1, _extends({
    builtinPlacements: placements2
  }, otherProps, {
    prefixCls,
    ref: triggerRef,
    popupClassName: classNames(overlayClassName, _defineProperty$1({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    action: trigger,
    showAction,
    hideAction: triggerHideAction,
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? "minWidth" : "",
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: handleVisibleChange,
    onPopupClick: onClick,
    getPopupContainer
  }), childrenNode);
}
const Dropdown$1 = /* @__PURE__ */ React.forwardRef(Dropdown);
var IdContext = /* @__PURE__ */ reactExports.createContext(null);
function getMenuId(uuid2, eventKey) {
  if (uuid2 === void 0) {
    return null;
  }
  return "".concat(uuid2, "-").concat(eventKey);
}
function useMenuId(eventKey) {
  var id = reactExports.useContext(IdContext);
  return getMenuId(id, eventKey);
}
var _excluded$f = ["children", "locked"];
var MenuContext = /* @__PURE__ */ reactExports.createContext(null);
function mergeProps(origin, target) {
  var clone2 = _objectSpread2$1({}, origin);
  Object.keys(target).forEach(function(key) {
    var value = target[key];
    if (value !== void 0) {
      clone2[key] = value;
    }
  });
  return clone2;
}
function InheritableContextProvider(_ref) {
  var children = _ref.children, locked = _ref.locked, restProps = _objectWithoutProperties(_ref, _excluded$f);
  var context = reactExports.useContext(MenuContext);
  var inheritableContext = useMemo(function() {
    return mergeProps(context, restProps);
  }, [context, restProps], function(prev, next) {
    return !locked && (prev[0] !== next[0] || !isEqual(prev[1], next[1], true));
  });
  return /* @__PURE__ */ reactExports.createElement(MenuContext.Provider, {
    value: inheritableContext
  }, children);
}
var EmptyList = [];
var PathRegisterContext = /* @__PURE__ */ reactExports.createContext(null);
function useMeasure() {
  return reactExports.useContext(PathRegisterContext);
}
var PathTrackerContext = /* @__PURE__ */ reactExports.createContext(EmptyList);
function useFullPath(eventKey) {
  var parentKeyPath = reactExports.useContext(PathTrackerContext);
  return reactExports.useMemo(function() {
    return eventKey !== void 0 ? [].concat(_toConsumableArray(parentKeyPath), [eventKey]) : parentKeyPath;
  }, [parentKeyPath, eventKey]);
}
var PathUserContext = /* @__PURE__ */ reactExports.createContext(null);
var PrivateContext = /* @__PURE__ */ reactExports.createContext({});
function focusable(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (isVisible$1(node)) {
    var nodeName = node.nodeName.toLowerCase();
    var isFocusableElement = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(nodeName) || // Editable element
      node.isContentEditable || // Anchor with href element
      nodeName === "a" && !!node.getAttribute("href")
    );
    var tabIndexAttr = node.getAttribute("tabindex");
    var tabIndexNum = Number(tabIndexAttr);
    var tabIndex = null;
    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    }
    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }
    return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
  }
  return false;
}
function getFocusNodeList(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var res = _toConsumableArray(node.querySelectorAll("*")).filter(function(child) {
    return focusable(child, includePositive);
  });
  if (focusable(node, includePositive)) {
    res.unshift(node);
  }
  return res;
}
var LEFT$1 = KeyCode.LEFT, RIGHT = KeyCode.RIGHT, UP = KeyCode.UP, DOWN = KeyCode.DOWN, ENTER = KeyCode.ENTER, ESC = KeyCode.ESC, HOME = KeyCode.HOME, END = KeyCode.END;
var ArrowKeys = [UP, DOWN, LEFT$1, RIGHT];
function getOffset$1(mode, isRootLevel, isRtl, which) {
  var _inline, _horizontal, _vertical, _offsets;
  var prev = "prev";
  var next = "next";
  var children = "children";
  var parent = "parent";
  if (mode === "inline" && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }
  var inline = (_inline = {}, _defineProperty$1(_inline, UP, prev), _defineProperty$1(_inline, DOWN, next), _inline);
  var horizontal = (_horizontal = {}, _defineProperty$1(_horizontal, LEFT$1, isRtl ? next : prev), _defineProperty$1(_horizontal, RIGHT, isRtl ? prev : next), _defineProperty$1(_horizontal, DOWN, children), _defineProperty$1(_horizontal, ENTER, children), _horizontal);
  var vertical = (_vertical = {}, _defineProperty$1(_vertical, UP, prev), _defineProperty$1(_vertical, DOWN, next), _defineProperty$1(_vertical, ENTER, children), _defineProperty$1(_vertical, ESC, parent), _defineProperty$1(_vertical, LEFT$1, isRtl ? children : parent), _defineProperty$1(_vertical, RIGHT, isRtl ? parent : children), _vertical);
  var offsets = {
    inline,
    horizontal,
    vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  var type = (_offsets = offsets["".concat(mode).concat(isRootLevel ? "" : "Sub")]) === null || _offsets === void 0 ? void 0 : _offsets[which];
  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };
    case next:
      return {
        offset: 1,
        sibling: true
      };
    case parent:
      return {
        offset: -1,
        sibling: false
      };
    case children:
      return {
        offset: 1,
        sibling: false
      };
    default:
      return null;
  }
}
function findContainerUL(element) {
  var current = element;
  while (current) {
    if (current.getAttribute("data-menu-list")) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function getFocusElement(activeElement, elements) {
  var current = activeElement || document.activeElement;
  while (current) {
    if (elements.has(current)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function getFocusableElements(container, elements) {
  var list = getFocusNodeList(container, true);
  return list.filter(function(ele) {
    return elements.has(ele);
  });
}
function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
  var offset2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!parentQueryContainer) {
    return null;
  }
  var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements);
  var count = sameLevelFocusableMenuElementList.length;
  var focusIndex = sameLevelFocusableMenuElementList.findIndex(function(ele) {
    return focusMenuElement === ele;
  });
  if (offset2 < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset2 > 0) {
    focusIndex += 1;
  }
  focusIndex = (focusIndex + count) % count;
  return sameLevelFocusableMenuElementList[focusIndex];
}
function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
  var rafRef = reactExports.useRef();
  var activeRef = reactExports.useRef();
  activeRef.current = activeKey;
  var cleanRaf = function cleanRaf2() {
    wrapperRaf.cancel(rafRef.current);
  };
  reactExports.useEffect(function() {
    return function() {
      cleanRaf();
    };
  }, []);
  return function(e2) {
    var which = e2.which;
    if ([].concat(ArrowKeys, [ENTER, ESC, HOME, END]).includes(which)) {
      var elements;
      var key2element;
      var element2key;
      var refreshElements = function refreshElements2() {
        elements = /* @__PURE__ */ new Set();
        key2element = /* @__PURE__ */ new Map();
        element2key = /* @__PURE__ */ new Map();
        var keys = getKeys();
        keys.forEach(function(key) {
          var element = document.querySelector("[data-menu-id='".concat(getMenuId(id, key), "']"));
          if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
          }
        });
        return elements;
      };
      refreshElements();
      var activeElement = key2element.get(activeKey);
      var focusMenuElement = getFocusElement(activeElement, elements);
      var focusMenuKey = element2key.get(focusMenuElement);
      var offsetObj = getOffset$1(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which);
      if (!offsetObj && which !== HOME && which !== END) {
        return;
      }
      if (ArrowKeys.includes(which) || [HOME, END].includes(which)) {
        e2.preventDefault();
      }
      var tryFocus = function tryFocus2(menuElement) {
        if (menuElement) {
          var focusTargetElement = menuElement;
          var link = menuElement.querySelector("a");
          if (link !== null && link !== void 0 && link.getAttribute("href")) {
            focusTargetElement = link;
          }
          var targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);
          cleanRaf();
          rafRef.current = wrapperRaf(function() {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };
      if ([HOME, END].includes(which) || offsetObj.sibling || !focusMenuElement) {
        var parentQueryContainer;
        if (!focusMenuElement || mode === "inline") {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        }
        var targetElement;
        var focusableElements = getFocusableElements(parentQueryContainer, elements);
        if (which === HOME) {
          targetElement = focusableElements[0];
        } else if (which === END) {
          targetElement = focusableElements[focusableElements.length - 1];
        } else {
          targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset);
        }
        tryFocus(targetElement);
      } else if (offsetObj.inlineTrigger) {
        triggerAccessibilityOpen(focusMenuKey);
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = wrapperRaf(function() {
          refreshElements();
          var controlId = focusMenuElement.getAttribute("aria-controls");
          var subQueryContainer = document.getElementById(controlId);
          var targetElement2 = getNextFocusElement(subQueryContainer, elements);
          tryFocus(targetElement2);
        }, 5);
      } else if (offsetObj.offset < 0) {
        var keyPath = getKeyPath(focusMenuKey, true);
        var parentKey = keyPath[keyPath.length - 2];
        var parentMenuElement = key2element.get(parentKey);
        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    }
    originOnKeyDown === null || originOnKeyDown === void 0 ? void 0 : originOnKeyDown(e2);
  };
}
function nextSlice(callback) {
  Promise.resolve().then(callback);
}
var PATH_SPLIT = "__RC_UTIL_PATH_SPLIT__";
var getPathStr = function getPathStr2(keyPath) {
  return keyPath.join(PATH_SPLIT);
};
var getPathKeys = function getPathKeys2(keyPathStr) {
  return keyPathStr.split(PATH_SPLIT);
};
var OVERFLOW_KEY = "rc-menu-more";
function useKeyRecords() {
  var _React$useState = reactExports.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), internalForceUpdate = _React$useState2[1];
  var key2pathRef = reactExports.useRef(/* @__PURE__ */ new Map());
  var path2keyRef = reactExports.useRef(/* @__PURE__ */ new Map());
  var _React$useState3 = reactExports.useState([]), _React$useState4 = _slicedToArray(_React$useState3, 2), overflowKeys = _React$useState4[0], setOverflowKeys = _React$useState4[1];
  var updateRef = reactExports.useRef(0);
  var destroyRef = reactExports.useRef(false);
  var forceUpdate = function forceUpdate2() {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };
  var registerPath = reactExports.useCallback(function(key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    var id = updateRef.current;
    nextSlice(function() {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  var unregisterPath = reactExports.useCallback(function(key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  var refreshOverflowKeys = reactExports.useCallback(function(keys) {
    setOverflowKeys(keys);
  }, []);
  var getKeyPath = reactExports.useCallback(function(eventKey, includeOverflow) {
    var fullPath = key2pathRef.current.get(eventKey) || "";
    var keys = getPathKeys(fullPath);
    if (includeOverflow && overflowKeys.includes(keys[0])) {
      keys.unshift(OVERFLOW_KEY);
    }
    return keys;
  }, [overflowKeys]);
  var isSubPathKey = reactExports.useCallback(function(pathKeys, eventKey) {
    return pathKeys.some(function(pathKey) {
      var pathKeyList = getKeyPath(pathKey, true);
      return pathKeyList.includes(eventKey);
    });
  }, [getKeyPath]);
  var getKeys = function getKeys2() {
    var keys = _toConsumableArray(key2pathRef.current.keys());
    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }
    return keys;
  };
  var getSubPathKeys = reactExports.useCallback(function(key) {
    var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
    var pathKeys = /* @__PURE__ */ new Set();
    _toConsumableArray(path2keyRef.current.keys()).forEach(function(pathKey) {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });
    return pathKeys;
  }, []);
  reactExports.useEffect(function() {
    return function() {
      destroyRef.current = true;
    };
  }, []);
  return {
    // Register
    registerPath,
    unregisterPath,
    refreshOverflowKeys,
    // Util
    isSubPathKey,
    getKeyPath,
    getKeys,
    getSubPathKeys
  };
}
function useMemoCallback(func) {
  var funRef = reactExports.useRef(func);
  funRef.current = func;
  var callback = reactExports.useCallback(function() {
    var _funRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_funRef$current = funRef.current) === null || _funRef$current === void 0 ? void 0 : _funRef$current.call.apply(_funRef$current, [funRef].concat(args));
  }, []);
  return func ? callback : void 0;
}
var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;
function useUUID(id) {
  var _useMergedState = useMergedState(id, {
    value: id
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), uuid2 = _useMergedState2[0], setUUID = _useMergedState2[1];
  reactExports.useEffect(function() {
    internalId += 1;
    var newId = "".concat(uniquePrefix, "-").concat(internalId);
    setUUID("rc-menu-uuid-".concat(newId));
  }, []);
  return uuid2;
}
function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  var _React$useContext = reactExports.useContext(MenuContext), activeKey = _React$useContext.activeKey, onActive = _React$useContext.onActive, onInactive = _React$useContext.onInactive;
  var ret = {
    active: activeKey === eventKey
  };
  if (!disabled) {
    ret.onMouseEnter = function(domEvent) {
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
        key: eventKey,
        domEvent
      });
      onActive(eventKey);
    };
    ret.onMouseLeave = function(domEvent) {
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
        key: eventKey,
        domEvent
      });
      onInactive(eventKey);
    };
  }
  return ret;
}
function useDirectionStyle(level) {
  var _React$useContext = reactExports.useContext(MenuContext), mode = _React$useContext.mode, rtl = _React$useContext.rtl, inlineIndent = _React$useContext.inlineIndent;
  if (mode !== "inline") {
    return null;
  }
  var len = level;
  return rtl ? {
    paddingRight: len * inlineIndent
  } : {
    paddingLeft: len * inlineIndent
  };
}
function Icon(_ref) {
  var icon = _ref.icon, props = _ref.props, children = _ref.children;
  var iconNode;
  if (typeof icon === "function") {
    iconNode = /* @__PURE__ */ reactExports.createElement(icon, _objectSpread2$1({}, props));
  } else {
    iconNode = icon;
  }
  return iconNode || children || null;
}
var _excluded$e = ["item"];
function warnItemProp(_ref) {
  var item = _ref.item, restInfo = _objectWithoutProperties(_ref, _excluded$e);
  Object.defineProperty(restInfo, "item", {
    get: function get2() {
      warningOnce(false, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future.");
      return item;
    }
  });
  return restInfo;
}
var _excluded$d = ["title", "attribute", "elementRef"], _excluded2$4 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], _excluded3 = ["active"];
var LegacyMenuItem = /* @__PURE__ */ function(_React$Component) {
  _inherits(LegacyMenuItem2, _React$Component);
  var _super = _createSuper(LegacyMenuItem2);
  function LegacyMenuItem2() {
    _classCallCheck(this, LegacyMenuItem2);
    return _super.apply(this, arguments);
  }
  _createClass(LegacyMenuItem2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, title = _this$props.title, attribute = _this$props.attribute, elementRef = _this$props.elementRef, restProps = _objectWithoutProperties(_this$props, _excluded$d);
      var passedProps = omit$1(restProps, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      warningOnce(!attribute, "`attribute` of Menu.Item is deprecated. Please pass attribute directly.");
      return /* @__PURE__ */ reactExports.createElement(ForwardOverflow.Item, _extends({}, attribute, {
        title: typeof title === "string" ? title : void 0
      }, passedProps, {
        ref: elementRef
      }));
    }
  }]);
  return LegacyMenuItem2;
}(reactExports.Component);
var InternalMenuItem = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _classNames;
  var style = props.style, className = props.className, eventKey = props.eventKey;
  props.warnKey;
  var disabled = props.disabled, itemIcon = props.itemIcon, children = props.children, role = props.role, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onFocus = props.onFocus, restProps = _objectWithoutProperties(props, _excluded2$4);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = reactExports.useContext(MenuContext), prefixCls = _React$useContext.prefixCls, onItemClick = _React$useContext.onItemClick, contextDisabled = _React$useContext.disabled, overflowDisabled = _React$useContext.overflowDisabled, contextItemIcon = _React$useContext.itemIcon, selectedKeys = _React$useContext.selectedKeys, onActive = _React$useContext.onActive;
  var _React$useContext2 = reactExports.useContext(PrivateContext), _internalRenderMenuItem = _React$useContext2._internalRenderMenuItem;
  var itemCls = "".concat(prefixCls, "-item");
  var legacyMenuItemRef = reactExports.useRef();
  var elementRef = reactExports.useRef();
  var mergedDisabled = contextDisabled || disabled;
  var mergedEleRef = useComposeRef(ref, elementRef);
  var connectedKeys = useFullPath(eventKey);
  var getEventInfo = function getEventInfo2(e2) {
    return {
      key: eventKey,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: _toConsumableArray(connectedKeys).reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e2
    };
  };
  var mergedItemIcon = itemIcon || contextItemIcon;
  var _useActive = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave), active = _useActive.active, activeProps = _objectWithoutProperties(_useActive, _excluded3);
  var selected = selectedKeys.includes(eventKey);
  var directionStyle = useDirectionStyle(connectedKeys.length);
  var onInternalClick = function onInternalClick2(e2) {
    if (mergedDisabled) {
      return;
    }
    var info = getEventInfo(e2);
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  };
  var onInternalKeyDown = function onInternalKeyDown2(e2) {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e2);
    if (e2.which === KeyCode.ENTER) {
      var info = getEventInfo(e2);
      onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
      onItemClick(info);
    }
  };
  var onInternalFocus = function onInternalFocus2(e2) {
    onActive(eventKey);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e2);
  };
  var optionRoleProps = {};
  if (props.role === "option") {
    optionRoleProps["aria-selected"] = selected;
  }
  var renderNode = /* @__PURE__ */ reactExports.createElement(LegacyMenuItem, _extends({
    ref: legacyMenuItemRef,
    elementRef: mergedEleRef,
    role: role === null ? "none" : role || "menuitem",
    tabIndex: disabled ? null : -1,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId
  }, restProps, activeProps, optionRoleProps, {
    component: "li",
    "aria-disabled": disabled,
    style: _objectSpread2$1(_objectSpread2$1({}, directionStyle), style),
    className: classNames(itemCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(itemCls, "-active"), active), _defineProperty$1(_classNames, "".concat(itemCls, "-selected"), selected), _defineProperty$1(_classNames, "".concat(itemCls, "-disabled"), mergedDisabled), _classNames), className),
    onClick: onInternalClick,
    onKeyDown: onInternalKeyDown,
    onFocus: onInternalFocus
  }), children, /* @__PURE__ */ reactExports.createElement(Icon, {
    props: _objectSpread2$1(_objectSpread2$1({}, props), {}, {
      isSelected: selected
    }),
    icon: mergedItemIcon
  }));
  if (_internalRenderMenuItem) {
    renderNode = _internalRenderMenuItem(renderNode, props, {
      selected
    });
  }
  return renderNode;
});
function MenuItem(props, ref) {
  var eventKey = props.eventKey;
  var measure = useMeasure();
  var connectedKeyPath = useFullPath(eventKey);
  reactExports.useEffect(function() {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function() {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  if (measure) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(InternalMenuItem, _extends({}, props, {
    ref
  }));
}
const MenuItem$1 = /* @__PURE__ */ reactExports.forwardRef(MenuItem);
var _excluded$c = ["className", "children"];
var InternalSubMenuList = function InternalSubMenuList2(_ref, ref) {
  var className = _ref.className, children = _ref.children, restProps = _objectWithoutProperties(_ref, _excluded$c);
  var _React$useContext = reactExports.useContext(MenuContext), prefixCls = _React$useContext.prefixCls, mode = _React$useContext.mode, rtl = _React$useContext.rtl;
  return /* @__PURE__ */ reactExports.createElement("ul", _extends({
    className: classNames(prefixCls, rtl && "".concat(prefixCls, "-rtl"), "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === "inline" ? "inline" : "vertical"), className),
    role: "menu"
  }, restProps, {
    "data-menu-list": true,
    ref
  }), children);
};
var SubMenuList = /* @__PURE__ */ reactExports.forwardRef(InternalSubMenuList);
SubMenuList.displayName = "SubMenuList";
var _excluded$b = ["label", "children", "key", "type"];
function parseChildren(children, keyPath) {
  return toArray(children).map(function(child, index2) {
    if (/* @__PURE__ */ reactExports.isValidElement(child)) {
      var _eventKey, _child$props;
      var key = child.key;
      var eventKey = (_eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _eventKey !== void 0 ? _eventKey : key;
      var emptyKey = eventKey === null || eventKey === void 0;
      if (emptyKey) {
        eventKey = "tmp_key-".concat([].concat(_toConsumableArray(keyPath), [index2]).join("-"));
      }
      var cloneProps = {
        key: eventKey,
        eventKey
      };
      return /* @__PURE__ */ reactExports.cloneElement(child, cloneProps);
    }
    return child;
  });
}
function convertItemsToNodes(list) {
  return (list || []).map(function(opt, index2) {
    if (opt && _typeof$1(opt) === "object") {
      var _ref = opt, label = _ref.label, children = _ref.children, key = _ref.key, type = _ref.type, restProps = _objectWithoutProperties(_ref, _excluded$b);
      var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index2);
      if (children || type === "group") {
        if (type === "group") {
          return /* @__PURE__ */ reactExports.createElement(MenuItemGroup, _extends({
            key: mergedKey
          }, restProps, {
            title: label
          }), convertItemsToNodes(children));
        }
        return /* @__PURE__ */ reactExports.createElement(SubMenu, _extends({
          key: mergedKey
        }, restProps, {
          title: label
        }), convertItemsToNodes(children));
      }
      if (type === "divider") {
        return /* @__PURE__ */ reactExports.createElement(Divider$1, _extends({
          key: mergedKey
        }, restProps));
      }
      return /* @__PURE__ */ reactExports.createElement(MenuItem$1, _extends({
        key: mergedKey
      }, restProps), label);
    }
    return null;
  }).filter(function(opt) {
    return opt;
  });
}
function parseItems(children, items, keyPath) {
  var childNodes = children;
  if (items) {
    childNodes = convertItemsToNodes(items);
  }
  return parseChildren(childNodes, keyPath);
}
function addEventListenerWrap(target, eventType, cb, option) {
  var callback = o.unstable_batchedUpdates ? function run(e2) {
    o.unstable_batchedUpdates(cb, e2);
  } : cb;
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }
  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, option);
      }
    }
  };
}
var Portal = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var didUpdate = props.didUpdate, getContainer = props.getContainer, children = props.children;
  var parentRef = reactExports.useRef();
  var containerRef = reactExports.useRef();
  reactExports.useImperativeHandle(ref, function() {
    return {};
  });
  var initRef = reactExports.useRef(false);
  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  }
  reactExports.useEffect(function() {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  reactExports.useEffect(function() {
    if (containerRef.current.parentNode === null && parentRef.current !== null) {
      parentRef.current.appendChild(containerRef.current);
    }
    return function() {
      var _containerRef$current, _containerRef$current2;
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /* @__PURE__ */ o.createPortal(children, containerRef.current) : null;
});
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread2$1(_objectSpread2$1({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements2 = Object.keys(builtinPlacements);
  for (var i = 0; i < placements2.length; i += 1) {
    var placement = placements2[i];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return "";
}
function getMotion$1(_ref) {
  var prefixCls = _ref.prefixCls, motion2 = _ref.motion, animation = _ref.animation, transitionName = _ref.transitionName;
  if (motion2) {
    return motion2;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function Mask(props) {
  var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, mask = props.mask, maskMotion = props.maskMotion, maskAnimation = props.maskAnimation, maskTransitionName = props.maskTransitionName;
  if (!mask) {
    return null;
  }
  var motion2 = {};
  if (maskMotion || maskTransitionName || maskAnimation) {
    motion2 = _objectSpread2$1({
      motionAppear: true
    }, getMotion$1({
      motion: maskMotion,
      prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends({}, motion2, {
    visible,
    removeOnLeave: true
  }), function(_ref) {
    var className = _ref.className;
    return /* @__PURE__ */ reactExports.createElement("div", {
      style: {
        zIndex
      },
      className: classNames("".concat(prefixCls, "-mask"), className)
    });
  });
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var vendorPrefix;
var jsCssMap = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function getVendorPrefix() {
  if (vendorPrefix !== void 0) {
    return vendorPrefix;
  }
  vendorPrefix = "";
  var style = document.createElement("p").style;
  var testProp = "Transform";
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
}
function setTransitionProperty(node, value) {
  var name2 = getTransitionName();
  if (name2) {
    node.style[name2] = value;
    if (name2 !== "transitionProperty") {
      node.style.transitionProperty = value;
    }
  }
}
function setTransform(node, value) {
  var name2 = getTransformName();
  if (name2) {
    node.style[name2] = value;
    if (name2 !== "transform") {
      node.style.transform = value;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(","), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(","), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = "none";
  elem.offsetHeight;
  elem.style.display = originalStyle;
}
function css(el, name2, v) {
  var value = v;
  if (_typeof(name2) === "object") {
    for (var i in name2) {
      if (name2.hasOwnProperty(i)) {
        css(el, i, name2[i]);
      }
    }
    return void 0;
  }
  if (typeof value !== "undefined") {
    if (typeof value === "number") {
      value = "".concat(value, "px");
    }
    el.style[name2] = value;
    return void 0;
  }
  return getComputedStyleX(el, name2);
}
function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = Math.floor(box.left);
  y = Math.floor(box.top);
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w) {
  return getScroll(w);
}
function getScrollTop(w) {
  return getScroll(w, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj == obj.window;
}
function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function _getComputedStyle(elem, name2, cs) {
  var computedStyle = cs;
  var val = "";
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name2) || computedStyle[name2];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = "currentStyle";
var RUNTIME_STYLE = "runtimeStyle";
var LEFT = "left";
var PX = "px";
function _getComputedStyleIE(elem, name2) {
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name2];
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name2)) {
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
    style[LEFT] = name2 === "fontSize" ? "1em" : ret || 0;
    ret = style.pixelLeft + PX;
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === "left") {
    return option.useCssRight ? "right" : dir;
  }
  return option.useCssBottom ? "bottom" : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === "left") {
    return "right";
  } else if (dir === "right") {
    return "left";
  } else if (dir === "top") {
    return "bottom";
  } else if (dir === "bottom") {
    return "top";
  }
}
function setLeftTop(elem, offset2, option) {
  if (css(elem, "position") === "static") {
    elem.style.position = "relative";
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection("left", option);
  var verticalProperty = getOffsetDirection("top", option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== "left") {
    presetH = 999;
  }
  if (verticalProperty !== "top") {
    presetV = 999;
  }
  var originalTransition = "";
  var originalOffset = getOffset(elem);
  if ("left" in offset2 || "top" in offset2) {
    originalTransition = getTransitionProperty(elem) || "";
    setTransitionProperty(elem, "none");
  }
  if ("left" in offset2) {
    elem.style[oppositeHorizontalProperty] = "";
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ("top" in offset2) {
    elem.style[oppositeVerticalProperty] = "";
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset2) {
    if (offset2.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset2 = key === "left" ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset2 + off;
      } else {
        originalStyle[dir] = preset2 - off;
      }
    }
  }
  css(elem, originalStyle);
  forceRelayout(elem);
  if ("left" in offset2 || "top" in offset2) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset2) {
    if (offset2.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset2[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset2) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ("left" in offset2) {
    resultXY.x = originalXY.x + offset2.left - originalOffset.left;
  }
  if ("top" in offset2) {
    resultXY.y = originalXY.y + offset2.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset2, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset2.left.toFixed(0);
    var tTop = offset2.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset2, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset2);
  } else {
    setLeftTop(elem, offset2, option);
  }
}
function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, "boxSizing") === "border-box";
}
var BOX_MODELS = ["margin", "border", "padding"];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name2;
  for (name2 in options) {
    if (options.hasOwnProperty(name2)) {
      old[name2] = style[name2];
      style[name2] = options[name2];
    }
  }
  callback.call(elem);
  for (name2 in options) {
    if (options.hasOwnProperty(name2)) {
      style[name2] = old[name2];
    }
  }
}
function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === "border") {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
each(["Width", "Height"], function(name2) {
  domUtils["doc".concat(name2)] = function(refWin) {
    var d = refWin.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      d.documentElement["scroll".concat(name2)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      d.body["scroll".concat(name2)],
      domUtils["viewport".concat(name2)](d)
    );
  };
  domUtils["viewport".concat(name2)] = function(win) {
    var prop = "client".concat(name2);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
  };
});
function getWH(elem, name2, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name2 === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name2 === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name2 === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  var borderBoxValue = name2 === "width" ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === void 0 || borderBoxValue <= 0) {
    borderBoxValue = void 0;
    cssBoxValue = getComputedStyleX(elem, name2);
    if (cssBoxValue === null || cssBoxValue === void 0 || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name2] || 0;
    }
    cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
  }
  if (extra === void 0) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ["border", "padding"], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which) : getPBMWidth(elem, ["margin"], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(void 0, args);
  } else {
    swap(elem, cssShow, function() {
      val = getWH.apply(void 0, args);
    });
  }
  return val;
}
each(["width", "height"], function(name2) {
  var first = name2.charAt(0).toUpperCase() + name2.slice(1);
  domUtils["outer".concat(first)] = function(el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name2, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name2 === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[name2] = function(elem, v) {
    var val = v;
    if (val !== void 0) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ["padding", "border"], which);
        }
        return css(elem, name2, val);
      }
      return void 0;
    }
    return elem && getWHIgnoreDisplay(elem, name2, CONTENT_INDEX);
  };
});
function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== "undefined") {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow,
  each,
  css,
  clone: function clone(obj) {
    var i;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge2() {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? void 0 : arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
var getParent2 = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, "position");
  var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === "html" ? null : getParent2(element);
  }
  for (parent = getParent2(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent2(parent)) {
    positionStyle = utils.css(parent, "position");
    if (positionStyle !== "static") {
      return parent;
    }
  }
  return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (
    parent = getParent$1(element);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    parent && parent !== body && parent !== doc;
    parent = getParent$1(parent)
  ) {
    var positionStyle = utils.css(parent, "position");
    if (positionStyle === "fixed") {
      return true;
    }
  }
  return false;
}
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;
  while (el) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
      var pos = utils.offset(el);
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(
        visibleRect.right,
        // consider area without scrollBar
        pos.left + el.clientWidth
      );
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, "position");
    if (position === "absolute") {
      element.style.position = "fixed";
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === "hidden") {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === "hidden") {
    documentHeight = win.innerHeight;
  }
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}
function getRegion(node) {
  var offset2;
  var w;
  var h2;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset2 = utils.offset(node);
    w = utils.outerWidth(node);
    h2 = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset2 = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h2 = utils.viewportHeight(win);
  }
  offset2.width = w;
  offset2.height = h2;
  return offset2;
}
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h2 = region.height;
  var x = region.left;
  var y = region.top;
  if (V === "c") {
    y += h2 / 2;
  } else if (V === "b") {
    y += h2;
  }
  if (H === "c") {
    x += w / 2;
  } else if (H === "r") {
    x += w;
  }
  return {
    left: x,
    top: y
  };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset2, targetOffset2) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset2[0] - targetOffset2[0]),
    top: Math.round(elRegion.top - diff[1] + offset2[1] - targetOffset2[1])
  };
}
function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function(p2) {
    ret.push(p2.replace(reg, function(m2) {
      return map[m2];
    }));
  });
  return ret;
}
function flipOffset(offset2, index2) {
  offset2[index2] = -offset2[index2];
  return offset2;
}
function convertOffset(str, offsetLen) {
  var n2;
  if (/%$/.test(str)) {
    n2 = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n2 = parseInt(str, 10);
  }
  return n2 || 0;
}
function normalizeOffset(offset2, el) {
  offset2[0] = convertOffset(offset2[0], el.width);
  offset2[1] = convertOffset(offset2[1], el.height);
}
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset2 = align.offset || [0, 0];
  var targetOffset2 = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset2 = [].concat(offset2);
  targetOffset2 = [].concat(targetOffset2);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  var elRegion = getRegion(source);
  normalizeOffset(offset2, elRegion);
  normalizeOffset(targetOffset2, tgtRegion);
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset2);
  var newElRegion = utils.merge(elRegion, elFuturePos);
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        var newPoints = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
        var newOffset = flipOffset(offset2, 0);
        var newTargetOffset = flipOffset(targetOffset2, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset2 = newOffset;
          targetOffset2 = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        var _newPoints = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
        var _newOffset = flipOffset(offset2, 1);
        var _newTargetOffset = flipOffset(targetOffset2, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset2 = _newOffset;
          targetOffset2 = _newTargetOffset;
        }
      }
    }
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset2);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
      }
      points = _newPoints2;
      offset2 = align.offset || [0, 0];
      targetOffset2 = align.targetOffset || [0, 0];
    }
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
  }
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points,
    offset: offset2,
    targetOffset: targetOffset2,
    overflow: newOverflowCfg
  };
}
function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ("pageX" in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ("pageY" in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
  var points = [align.points[0], "cc"];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points
  }), pointInView);
}
const useBuffer = function(callback, buffer) {
  var calledRef = React.useRef(false);
  var timeoutRef = React.useRef(null);
  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }
  function trigger(force) {
    cancelTrigger();
    if (!calledRef.current || force === true) {
      if (callback(force) === false) {
        return;
      }
      calledRef.current = true;
      timeoutRef.current = window.setTimeout(function() {
        calledRef.current = false;
      }, buffer);
    } else {
      timeoutRef.current = window.setTimeout(function() {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }
  return [trigger, function() {
    calledRef.current = false;
    cancelTrigger();
  }];
};
function isSamePoint(prev, next) {
  if (prev === next)
    return true;
  if (!prev || !next)
    return false;
  if ("pageX" in next && "pageY" in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }
  if ("clientX" in next && "clientY" in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }
  return false;
}
function restoreFocus(activeElement, container) {
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;
  function onResize(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), target = _ref2[0].target;
    if (!document.documentElement.contains(target))
      return;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      Promise.resolve().then(function() {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }
    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }
  var resizeObserver = new index(onResize);
  if (element) {
    resizeObserver.observe(element);
  }
  return function() {
    resizeObserver.disconnect();
  };
}
function getElement(func) {
  if (typeof func !== "function")
    return null;
  return func();
}
function getPoint(point) {
  if (_typeof$1(point) !== "object" || !point)
    return null;
  return point;
}
var Align = function Align2(_ref, ref) {
  var children = _ref.children, disabled = _ref.disabled, target = _ref.target, align = _ref.align, onAlign = _ref.onAlign, monitorWindowResize = _ref.monitorWindowResize, _ref$monitorBufferTim = _ref.monitorBufferTime, monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = React.useRef({});
  var nodeRef = React.useRef();
  var childNode = React.Children.only(children);
  var forceAlignPropsRef = React.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.align = align;
  forceAlignPropsRef.current.onAlign = onAlign;
  var _useBuffer = useBuffer(function() {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current, latestDisabled = _forceAlignPropsRef$c.disabled, latestTarget = _forceAlignPropsRef$c.target, latestAlign = _forceAlignPropsRef$c.align, latestOnAlign = _forceAlignPropsRef$c.onAlign;
    var source = nodeRef.current;
    if (!latestDisabled && latestTarget && source) {
      var _result;
      var _element = getElement(latestTarget);
      var _point = getPoint(latestTarget);
      cacheRef.current.element = _element;
      cacheRef.current.point = _point;
      cacheRef.current.align = latestAlign;
      var _document = document, activeElement = _document.activeElement;
      if (_element && isVisible$1(_element)) {
        _result = alignElement(source, _element, latestAlign);
      } else if (_point) {
        _result = alignPoint(source, _point, latestAlign);
      }
      restoreFocus(activeElement, source);
      if (latestOnAlign && _result) {
        latestOnAlign(source, _result);
      }
      return true;
    }
    return false;
  }, monitorBufferTime), _useBuffer2 = _slicedToArray(_useBuffer, 2), _forceAlign = _useBuffer2[0], cancelForceAlign = _useBuffer2[1];
  var _React$useState = React.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
  var _React$useState3 = React.useState(), _React$useState4 = _slicedToArray(_React$useState3, 2), point = _React$useState4[0], setPoint = _React$useState4[1];
  useLayoutEffect(function() {
    setElement(getElement(target));
    setPoint(getPoint(target));
  });
  React.useEffect(function() {
    if (cacheRef.current.element !== element || !isSamePoint(cacheRef.current.point, point) || !isEqual(cacheRef.current.align, align)) {
      _forceAlign();
    }
  });
  React.useEffect(function() {
    var cancelFn = monitorResize(nodeRef.current, _forceAlign);
    return cancelFn;
  }, [nodeRef.current]);
  React.useEffect(function() {
    var cancelFn = monitorResize(element, _forceAlign);
    return cancelFn;
  }, [element]);
  React.useEffect(function() {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]);
  React.useEffect(function() {
    if (monitorWindowResize) {
      var cancelFn = addEventListenerWrap(window, "resize", _forceAlign);
      return cancelFn.remove;
    }
  }, [monitorWindowResize]);
  React.useEffect(function() {
    return function() {
      cancelForceAlign();
    };
  }, []);
  React.useImperativeHandle(ref, function() {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  });
  if (/* @__PURE__ */ React.isValidElement(childNode)) {
    childNode = /* @__PURE__ */ React.cloneElement(childNode, {
      ref: composeRef(childNode.ref, nodeRef)
    });
  }
  return childNode;
};
var RcAlign = /* @__PURE__ */ React.forwardRef(Align);
RcAlign.displayName = "Align";
var StatusQueue = ["measure", "alignPre", "align", null, "motion"];
const useVisibleStatus = function(visible, doMeasure) {
  var _useState = useSafeState(null), _useState2 = _slicedToArray(_useState, 2), status = _useState2[0], setInternalStatus = _useState2[1];
  var rafRef = reactExports.useRef();
  function setStatus(nextStatus) {
    setInternalStatus(nextStatus, true);
  }
  function cancelRaf() {
    wrapperRaf.cancel(rafRef.current);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = wrapperRaf(function() {
      setStatus(function(prev) {
        switch (status) {
          case "align":
            return "motion";
          case "motion":
            return "stable";
        }
        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  reactExports.useEffect(function() {
    setStatus("measure");
  }, [visible]);
  reactExports.useEffect(function() {
    switch (status) {
      case "measure":
        doMeasure();
        break;
    }
    if (status) {
      rafRef.current = wrapperRaf(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var index2, nextStatus;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index2 = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index2 + 1];
                if (nextStatus && index2 !== -1) {
                  setStatus(nextStatus);
                }
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  reactExports.useEffect(function() {
    return function() {
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
};
const useStretchStyle = function(stretch) {
  var _React$useState = reactExports.useState({
    width: 0,
    height: 0
  }), _React$useState2 = _slicedToArray(_React$useState, 2), targetSize = _React$useState2[0], setTargetSize = _React$useState2[1];
  function measureStretch(element) {
    var tgtWidth = element.offsetWidth, tgtHeight = element.offsetHeight;
    var _element$getBoundingC = element.getBoundingClientRect(), width = _element$getBoundingC.width, height = _element$getBoundingC.height;
    if (Math.abs(tgtWidth - width) < 1 && Math.abs(tgtHeight - height) < 1) {
      tgtWidth = width;
      tgtHeight = height;
    }
    setTargetSize({
      width: tgtWidth,
      height: tgtHeight
    });
  }
  var style = reactExports.useMemo(function() {
    var sizeStyle = {};
    if (stretch) {
      var width = targetSize.width, height = targetSize.height;
      if (stretch.indexOf("height") !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf("minHeight") !== -1 && height) {
        sizeStyle.minHeight = height;
      }
      if (stretch.indexOf("width") !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf("minWidth") !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }
    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
};
var PopupInner = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var visible = props.visible, prefixCls = props.prefixCls, className = props.className, style = props.style, children = props.children, zIndex = props.zIndex, stretch = props.stretch, destroyPopupOnHide = props.destroyPopupOnHide, forceRender = props.forceRender, align = props.align, point = props.point, getRootDomNode = props.getRootDomNode, getClassNameFromAlign = props.getClassNameFromAlign, onAlign = props.onAlign, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, onTouchStart = props.onTouchStart, onClick = props.onClick;
  var alignRef = reactExports.useRef();
  var elementRef = reactExports.useRef();
  var _useState = reactExports.useState(), _useState2 = _slicedToArray(_useState, 2), alignedClassName = _useState2[0], setAlignedClassName = _useState2[1];
  var _useStretchStyle = useStretchStyle(stretch), _useStretchStyle2 = _slicedToArray(_useStretchStyle, 2), stretchStyle = _useStretchStyle2[0], measureStretchStyle = _useStretchStyle2[1];
  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  }
  var _useVisibleStatus = useVisibleStatus(visible, doMeasure), _useVisibleStatus2 = _slicedToArray(_useVisibleStatus, 2), status = _useVisibleStatus2[0], goNextStatus = _useVisibleStatus2[1];
  var _useState3 = reactExports.useState(0), _useState4 = _slicedToArray(_useState3, 2), alignTimes = _useState4[0], setAlignTimes = _useState4[1];
  var prepareResolveRef = reactExports.useRef();
  useLayoutEffect(function() {
    if (status === "alignPre") {
      setAlignTimes(0);
    }
  }, [status]);
  function getAlignTarget() {
    if (point) {
      return point;
    }
    return getRootDomNode;
  }
  function forceAlign() {
    var _alignRef$current;
    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }
  function onInternalAlign(popupDomNode, matchAlign) {
    var nextAlignedClassName = getClassNameFromAlign(matchAlign);
    if (alignedClassName !== nextAlignedClassName) {
      setAlignedClassName(nextAlignedClassName);
    }
    setAlignTimes(function(val) {
      return val + 1;
    });
    if (status === "align") {
      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  }
  useLayoutEffect(function() {
    if (status === "align") {
      if (alignTimes < 3) {
        forceAlign();
      } else {
        goNextStatus(function() {
          var _prepareResolveRef$cu;
          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }
    }
  }, [alignTimes]);
  var motion2 = _objectSpread2$1({}, getMotion$1(props));
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function(eventName) {
    var originHandler = motion2[eventName];
    motion2[eventName] = function(element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });
  function onShowPrepare() {
    return new Promise(function(resolve) {
      prepareResolveRef.current = resolve;
    });
  }
  reactExports.useEffect(function() {
    if (!motion2.motionName && status === "motion") {
      goNextStatus();
    }
  }, [motion2.motionName, status]);
  reactExports.useImperativeHandle(ref, function() {
    return {
      forceAlign,
      getElement: function getElement2() {
        return elementRef.current;
      }
    };
  });
  var mergedStyle = _objectSpread2$1(_objectSpread2$1({}, stretchStyle), {}, {
    zIndex,
    opacity: status === "motion" || status === "stable" || !visible ? void 0 : 0,
    // Cannot interact with disappearing elements
    // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
    pointerEvents: !visible && status !== "stable" ? "none" : void 0
  }, style);
  var alignDisabled = true;
  if (align !== null && align !== void 0 && align.points && (status === "align" || status === "stable")) {
    alignDisabled = false;
  }
  var childNode = children;
  if (reactExports.Children.count(children) > 1) {
    childNode = /* @__PURE__ */ reactExports.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends({
    visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion2, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide,
    forceRender
  }), function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    var mergedClassName = classNames(prefixCls, className, alignedClassName, motionClassName);
    return /* @__PURE__ */ reactExports.createElement(RcAlign, {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align,
      onAlign: onInternalAlign
    }, /* @__PURE__ */ reactExports.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter,
      onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      onClick,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = "PopupInner";
var MobilePopupInner = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, children = props.children, _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName, popupStyle = _props$mobile.popupStyle, _props$mobile$popupMo = _props$mobile.popupMotion, popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo, popupRender = _props$mobile.popupRender, onClick = props.onClick;
  var elementRef = reactExports.useRef();
  reactExports.useImperativeHandle(ref, function() {
    return {
      forceAlign: function forceAlign() {
      },
      getElement: function getElement2() {
        return elementRef.current;
      }
    };
  });
  var mergedStyle = _objectSpread2$1({
    zIndex
  }, popupStyle);
  var childNode = children;
  if (reactExports.Children.count(children) > 1) {
    childNode = /* @__PURE__ */ reactExports.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }
  if (popupRender) {
    childNode = popupRender(childNode);
  }
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends({
    visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    var mergedClassName = classNames(prefixCls, popupClassName, motionClassName);
    return /* @__PURE__ */ reactExports.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onClick,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = "MobilePopupInner";
var _excluded$a = ["visible", "mobile"];
var Popup = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var visible = _ref.visible, mobile = _ref.mobile, props = _objectWithoutProperties(_ref, _excluded$a);
  var _useState = reactExports.useState(visible), _useState2 = _slicedToArray(_useState, 2), innerVisible = _useState2[0], serInnerVisible = _useState2[1];
  var _useState3 = reactExports.useState(false), _useState4 = _slicedToArray(_useState3, 2), inMobile = _useState4[0], setInMobile = _useState4[1];
  var cloneProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    visible: innerVisible
  });
  reactExports.useEffect(function() {
    serInnerVisible(visible);
    if (visible && mobile) {
      setInMobile(isMobile());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /* @__PURE__ */ reactExports.createElement(MobilePopupInner, _extends({}, cloneProps, {
    mobile,
    ref
  })) : /* @__PURE__ */ reactExports.createElement(PopupInner, _extends({}, cloneProps, {
    ref
  }));
  return /* @__PURE__ */ reactExports.createElement("div", null, /* @__PURE__ */ reactExports.createElement(Mask, cloneProps), popupNode);
});
Popup.displayName = "Popup";
var TriggerContext = /* @__PURE__ */ reactExports.createContext(null);
function noop$1() {
}
function returnEmptyString() {
  return "";
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
var ALL_HANDLERS = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
function generateTrigger(PortalComponent) {
  var Trigger2 = /* @__PURE__ */ function(_React$Component) {
    _inherits(Trigger3, _React$Component);
    var _super = _createSuper(Trigger3);
    function Trigger3(props) {
      var _this;
      _classCallCheck(this, Trigger3);
      _this = _super.call(this, props);
      _defineProperty$1(_assertThisInitialized(_this), "popupRef", /* @__PURE__ */ reactExports.createRef());
      _defineProperty$1(_assertThisInitialized(_this), "triggerRef", /* @__PURE__ */ reactExports.createRef());
      _defineProperty$1(_assertThisInitialized(_this), "portalContainer", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "attachId", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "clickOutsideHandler", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "touchOutsideHandler", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "contextMenuOutsideHandler1", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "contextMenuOutsideHandler2", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "mouseDownTimeout", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "focusTime", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "preClickTime", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "preTouchTime", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "delayTimer", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "hasPopupMouseDown", void 0);
      _defineProperty$1(_assertThisInitialized(_this), "onMouseEnter", function(e2) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;
        _this.fireEvents("onMouseEnter", e2);
        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e2);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseMove", function(e2) {
        _this.fireEvents("onMouseMove", e2);
        _this.setPoint(e2);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseLeave", function(e2) {
        _this.fireEvents("onMouseLeave", e2);
        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onPopupMouseEnter", function() {
        _this.clearDelayTimer();
      });
      _defineProperty$1(_assertThisInitialized(_this), "onPopupMouseLeave", function(e2) {
        var _this$popupRef$curren;
        if (e2.relatedTarget && !e2.relatedTarget.setTimeout && contains((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e2.relatedTarget)) {
          return;
        }
        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onFocus", function(e2) {
        _this.fireEvents("onFocus", e2);
        _this.clearDelayTimer();
        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();
          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onMouseDown", function(e2) {
        _this.fireEvents("onMouseDown", e2);
        _this.preClickTime = Date.now();
      });
      _defineProperty$1(_assertThisInitialized(_this), "onTouchStart", function(e2) {
        _this.fireEvents("onTouchStart", e2);
        _this.preTouchTime = Date.now();
      });
      _defineProperty$1(_assertThisInitialized(_this), "onBlur", function(e2) {
        _this.fireEvents("onBlur", e2);
        _this.clearDelayTimer();
        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onContextMenu", function(e2) {
        e2.preventDefault();
        _this.fireEvents("onContextMenu", e2);
        _this.setPopupVisible(true, e2);
      });
      _defineProperty$1(_assertThisInitialized(_this), "onContextMenuClose", function() {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onClick", function(event) {
        _this.fireEvents("onClick", event);
        if (_this.focusTime) {
          var preTime;
          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }
          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }
          _this.focusTime = 0;
        }
        _this.preClickTime = 0;
        _this.preTouchTime = 0;
        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }
        var nextVisible = !_this.state.popupVisible;
        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onPopupMouseDown", function() {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function() {
          _this.hasPopupMouseDown = false;
        }, 0);
        if (_this.context) {
          var _this$context;
          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "onDocumentClick", function(event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }
        var target = event.target;
        var root = _this.getRootDomNode();
        var popupNode = _this.getPopupDomNode();
        if (
          // mousedown on the target should also close popup when action is contextMenu.
          // https://github.com/ant-design/ant-design/issues/29853
          (!contains(root, target) || _this.isContextMenuOnly()) && !contains(popupNode, target) && !_this.hasPopupMouseDown
        ) {
          _this.close();
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "getRootDomNode", function() {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;
        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }
        try {
          var domNode = findDOMNode(_this.triggerRef.current);
          if (domNode) {
            return domNode;
          }
        } catch (err) {
        }
        return o.findDOMNode(_assertThisInitialized(_this));
      });
      _defineProperty$1(_assertThisInitialized(_this), "getPopupClassNameFromAlign", function(align) {
        var className = [];
        var _this$props = _this.props, popupPlacement = _this$props.popupPlacement, builtinPlacements = _this$props.builtinPlacements, prefixCls = _this$props.prefixCls, alignPoint2 = _this$props.alignPoint, getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;
        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
        }
        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }
        return className.join(" ");
      });
      _defineProperty$1(_assertThisInitialized(_this), "getComponent", function() {
        var _this$props2 = _this.props, prefixCls = _this$props2.prefixCls, destroyPopupOnHide = _this$props2.destroyPopupOnHide, popupClassName = _this$props2.popupClassName, onPopupAlign = _this$props2.onPopupAlign, popupMotion = _this$props2.popupMotion, popupAnimation = _this$props2.popupAnimation, popupTransitionName = _this$props2.popupTransitionName, popupStyle = _this$props2.popupStyle, mask = _this$props2.mask, maskAnimation = _this$props2.maskAnimation, maskTransitionName = _this$props2.maskTransitionName, maskMotion = _this$props2.maskMotion, zIndex = _this$props2.zIndex, popup = _this$props2.popup, stretch = _this$props2.stretch, alignPoint2 = _this$props2.alignPoint, mobile = _this$props2.mobile, forceRender = _this$props2.forceRender, onPopupClick = _this$props2.onPopupClick;
        var _this$state = _this.state, popupVisible = _this$state.popupVisible, point = _this$state.point;
        var align = _this.getPopupAlign();
        var mouseProps = {};
        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }
        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }
        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /* @__PURE__ */ reactExports.createElement(Popup, _extends({
          prefixCls,
          destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint2 && point,
          className: popupClassName,
          align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask,
          zIndex,
          transitionName: popupTransitionName,
          maskAnimation,
          maskTransitionName,
          maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile,
          forceRender,
          onClick: onPopupClick
        }), typeof popup === "function" ? popup() : popup);
      });
      _defineProperty$1(_assertThisInitialized(_this), "attachParent", function(popupContainer) {
        wrapperRaf.cancel(_this.attachId);
        var _this$props3 = _this.props, getPopupContainer = _this$props3.getPopupContainer, getDocument2 = _this$props3.getDocument;
        var domNode = _this.getRootDomNode();
        var mountNode;
        if (!getPopupContainer) {
          mountNode = getDocument2(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          mountNode = getPopupContainer(domNode);
        }
        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          _this.attachId = wrapperRaf(function() {
            _this.attachParent(popupContainer);
          });
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "getContainer", function() {
        if (!_this.portalContainer) {
          var getDocument2 = _this.props.getDocument;
          var popupContainer = getDocument2(_this.getRootDomNode()).createElement("div");
          popupContainer.style.position = "absolute";
          popupContainer.style.top = "0";
          popupContainer.style.left = "0";
          popupContainer.style.width = "100%";
          _this.portalContainer = popupContainer;
        }
        _this.attachParent(_this.portalContainer);
        return _this.portalContainer;
      });
      _defineProperty$1(_assertThisInitialized(_this), "setPoint", function(point) {
        var alignPoint2 = _this.props.alignPoint;
        if (!alignPoint2 || !point)
          return;
        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      });
      _defineProperty$1(_assertThisInitialized(_this), "handlePortalUpdate", function() {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      });
      _defineProperty$1(_assertThisInitialized(_this), "triggerContextValue", {
        onPopupMouseDown: _this.onPopupMouseDown
      });
      var _popupVisible;
      if ("popupVisible" in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }
      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible
      };
      ALL_HANDLERS.forEach(function(h2) {
        _this["fire".concat(h2)] = function(e2) {
          _this.fireEvents(h2, e2);
        };
      });
      return _this;
    }
    _createClass(Trigger3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state;
        if (state.popupVisible) {
          var currentDocument;
          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
          }
          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick);
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextMenuClose);
          }
          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = addEventListenerWrap(window, "blur", this.onContextMenuClose);
          }
          return;
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        wrapperRaf.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement, popupAlign = props.popupAlign, builtinPlacements = props.builtinPlacements;
        if (popupPlacement && builtinPlacements) {
          return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
        }
        return popupAlign;
      }
    }, {
      key: "setPopupVisible",
      value: (
        /**
         * @param popupVisible    Show or not the popup element
         * @param event           SyntheticEvent, used for `pointAlign`
         */
        function setPopupVisible(popupVisible, event) {
          var alignPoint2 = this.props.alignPoint;
          var prevPopupVisible = this.state.popupVisible;
          this.clearDelayTimer();
          if (prevPopupVisible !== popupVisible) {
            if (!("popupVisible" in this.props)) {
              this.setState({
                popupVisible,
                prevPopupVisible
              });
            }
            this.props.onPopupVisibleChange(popupVisible);
          }
          if (alignPoint2 && event && popupVisible) {
            this.setPoint(event);
          }
        }
      )
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;
        var delay = delayS * 1e3;
        this.clearDelayTimer();
        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function() {
            _this2.setPopupVisible(visible, point);
            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;
        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }
        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props, action = _this$props4.action, showAction = _this$props4.showAction;
        return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function isContextMenuOnly() {
        var action = this.props.action;
        return action === "contextMenu" || action.length === 1 && action[0] === "contextMenu";
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props, action = _this$props5.action, showAction = _this$props5.showAction;
        return action.indexOf("contextMenu") !== -1 || showAction.indexOf("contextMenu") !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props, action = _this$props6.action, hideAction = _this$props6.hideAction;
        return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props, action = _this$props7.action, showAction = _this$props7.showAction;
        return action.indexOf("hover") !== -1 || showAction.indexOf("mouseEnter") !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props, action = _this$props8.action, hideAction = _this$props8.hideAction;
        return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseLeave") !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props, action = _this$props9.action, showAction = _this$props9.showAction;
        return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props, action = _this$props10.action, hideAction = _this$props10.hideAction;
        return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;
          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e2) {
        var childCallback = this.props.children.props[type];
        if (childCallback) {
          childCallback(e2);
        }
        var callback = this.props[type];
        if (callback) {
          callback(e2);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props, children = _this$props11.children, forceRender = _this$props11.forceRender, alignPoint2 = _this$props11.alignPoint, className = _this$props11.className, autoDestroy = _this$props11.autoDestroy;
        var child = reactExports.Children.only(children);
        var newChildProps = {
          key: "trigger"
        };
        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains("onContextMenu");
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains("onClick");
          newChildProps.onMouseDown = this.createTwoChains("onMouseDown");
          newChildProps.onTouchStart = this.createTwoChains("onTouchStart");
        }
        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter;
          if (alignPoint2) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains("onMouseEnter");
        }
        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains("onMouseLeave");
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains("onFocus");
          newChildProps.onBlur = this.createTwoChains("onBlur");
        }
        var childrenClassName = classNames(child && child.props && child.props.className, className);
        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }
        var cloneProps = _objectSpread2$1({}, newChildProps);
        if (supportRef(child)) {
          cloneProps.ref = composeRef(this.triggerRef, child.ref);
        }
        var trigger = /* @__PURE__ */ reactExports.cloneElement(child, cloneProps);
        var portal;
        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /* @__PURE__ */ reactExports.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }
        if (!popupVisible && autoDestroy) {
          portal = null;
        }
        return /* @__PURE__ */ reactExports.createElement(TriggerContext.Provider, {
          value: this.triggerContextValue
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};
        if (popupVisible !== void 0 && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }
        return newState;
      }
    }]);
    return Trigger3;
  }(reactExports.Component);
  _defineProperty$1(Trigger2, "contextType", TriggerContext);
  _defineProperty$1(Trigger2, "defaultProps", {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop$1,
    afterPopupVisibleChange: noop$1,
    onPopupAlign: noop$1,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  });
  return Trigger2;
}
const Trigger = generateTrigger(Portal);
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
function getMotion(mode, motion2, defaultMotions) {
  if (motion2) {
    return motion2;
  }
  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }
  return void 0;
}
var popupPlacementMap = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function PopupTrigger(_ref) {
  var prefixCls = _ref.prefixCls, visible = _ref.visible, children = _ref.children, popup = _ref.popup, popupClassName = _ref.popupClassName, popupOffset = _ref.popupOffset, disabled = _ref.disabled, mode = _ref.mode, onVisibleChange = _ref.onVisibleChange;
  var _React$useContext = reactExports.useContext(MenuContext), getPopupContainer = _React$useContext.getPopupContainer, rtl = _React$useContext.rtl, subMenuOpenDelay = _React$useContext.subMenuOpenDelay, subMenuCloseDelay = _React$useContext.subMenuCloseDelay, builtinPlacements = _React$useContext.builtinPlacements, triggerSubMenuAction = _React$useContext.triggerSubMenuAction, forceSubMenuRender = _React$useContext.forceSubMenuRender, rootClassName = _React$useContext.rootClassName, motion2 = _React$useContext.motion, defaultMotions = _React$useContext.defaultMotions;
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), innerVisible = _React$useState2[0], setInnerVisible = _React$useState2[1];
  var placement = rtl ? _objectSpread2$1(_objectSpread2$1({}, placementsRtl), builtinPlacements) : _objectSpread2$1(_objectSpread2$1({}, placements), builtinPlacements);
  var popupPlacement = popupPlacementMap[mode];
  var targetMotion = getMotion(mode, motion2, defaultMotions);
  var targetMotionRef = reactExports.useRef(targetMotion);
  if (mode !== "inline") {
    targetMotionRef.current = targetMotion;
  }
  var mergedMotion = _objectSpread2$1(_objectSpread2$1({}, targetMotionRef.current), {}, {
    leavedClassName: "".concat(prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  });
  var visibleRef = reactExports.useRef();
  reactExports.useEffect(function() {
    visibleRef.current = wrapperRaf(function() {
      setInnerVisible(visible);
    });
    return function() {
      wrapperRaf.cancel(visibleRef.current);
    };
  }, [visible]);
  return /* @__PURE__ */ reactExports.createElement(Trigger, {
    prefixCls,
    popupClassName: classNames("".concat(prefixCls, "-popup"), _defineProperty$1({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName, rootClassName),
    stretch: mode === "horizontal" ? "minWidth" : null,
    getPopupContainer,
    builtinPlacements: placement,
    popupPlacement,
    popupVisible: innerVisible,
    popup,
    popupAlign: popupOffset && {
      offset: popupOffset
    },
    action: disabled ? [] : [triggerSubMenuAction],
    mouseEnterDelay: subMenuOpenDelay,
    mouseLeaveDelay: subMenuCloseDelay,
    onPopupVisibleChange: onVisibleChange,
    forceRender: forceSubMenuRender,
    popupMotion: mergedMotion
  }, children);
}
function InlineSubMenuList(_ref) {
  var id = _ref.id, open = _ref.open, keyPath = _ref.keyPath, children = _ref.children;
  var fixedMode = "inline";
  var _React$useContext = reactExports.useContext(MenuContext), prefixCls = _React$useContext.prefixCls, forceSubMenuRender = _React$useContext.forceSubMenuRender, motion2 = _React$useContext.motion, defaultMotions = _React$useContext.defaultMotions, mode = _React$useContext.mode;
  var sameModeRef = reactExports.useRef(false);
  sameModeRef.current = mode === fixedMode;
  var _React$useState = reactExports.useState(!sameModeRef.current), _React$useState2 = _slicedToArray(_React$useState, 2), destroy = _React$useState2[0], setDestroy = _React$useState2[1];
  var mergedOpen = sameModeRef.current ? open : false;
  reactExports.useEffect(function() {
    if (sameModeRef.current) {
      setDestroy(false);
    }
  }, [mode]);
  var mergedMotion = _objectSpread2$1({}, getMotion(fixedMode, motion2, defaultMotions));
  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  }
  var originOnVisibleChanged = mergedMotion.onVisibleChanged;
  mergedMotion.onVisibleChanged = function(newVisible) {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }
    return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
  };
  if (destroy) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(InheritableContextProvider, {
    mode: fixedMode,
    locked: !sameModeRef.current
  }, /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends({
    visible: mergedOpen
  }, mergedMotion, {
    forceRender: forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }), function(_ref2) {
    var motionClassName = _ref2.className, motionStyle = _ref2.style;
    return /* @__PURE__ */ reactExports.createElement(SubMenuList, {
      id,
      className: motionClassName,
      style: motionStyle
    }, children);
  }));
}
var _excluded$9 = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], _excluded2$3 = ["active"];
var InternalSubMenu = function InternalSubMenu2(props) {
  var _classNames;
  var style = props.style, className = props.className, title = props.title, eventKey = props.eventKey;
  props.warnKey;
  var disabled = props.disabled, internalPopupClose = props.internalPopupClose, children = props.children, itemIcon = props.itemIcon, expandIcon = props.expandIcon, popupClassName = props.popupClassName, popupOffset = props.popupOffset, onClick = props.onClick, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onTitleClick = props.onTitleClick, onTitleMouseEnter = props.onTitleMouseEnter, onTitleMouseLeave = props.onTitleMouseLeave, restProps = _objectWithoutProperties(props, _excluded$9);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = reactExports.useContext(MenuContext), prefixCls = _React$useContext.prefixCls, mode = _React$useContext.mode, openKeys = _React$useContext.openKeys, contextDisabled = _React$useContext.disabled, overflowDisabled = _React$useContext.overflowDisabled, activeKey = _React$useContext.activeKey, selectedKeys = _React$useContext.selectedKeys, contextItemIcon = _React$useContext.itemIcon, contextExpandIcon = _React$useContext.expandIcon, onItemClick = _React$useContext.onItemClick, onOpenChange = _React$useContext.onOpenChange, onActive = _React$useContext.onActive;
  var _React$useContext2 = reactExports.useContext(PrivateContext), _internalRenderSubMenuItem = _React$useContext2._internalRenderSubMenuItem;
  var _React$useContext3 = reactExports.useContext(PathUserContext), isSubPathKey = _React$useContext3.isSubPathKey;
  var connectedPath = useFullPath();
  var subMenuPrefixCls = "".concat(prefixCls, "-submenu");
  var mergedDisabled = contextDisabled || disabled;
  var elementRef = reactExports.useRef();
  var popupRef = reactExports.useRef();
  var mergedItemIcon = itemIcon || contextItemIcon;
  var mergedExpandIcon = expandIcon || contextExpandIcon;
  var originOpen = openKeys.includes(eventKey);
  var open = !overflowDisabled && originOpen;
  var childrenSelected = isSubPathKey(selectedKeys, eventKey);
  var _useActive = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave), active = _useActive.active, activeProps = _objectWithoutProperties(_useActive, _excluded2$3);
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), childrenActive = _React$useState2[0], setChildrenActive = _React$useState2[1];
  var triggerChildrenActive = function triggerChildrenActive2(newActive) {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };
  var onInternalMouseEnter = function onInternalMouseEnter2(domEvent) {
    triggerChildrenActive(true);
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
      key: eventKey,
      domEvent
    });
  };
  var onInternalMouseLeave = function onInternalMouseLeave2(domEvent) {
    triggerChildrenActive(false);
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
      key: eventKey,
      domEvent
    });
  };
  var mergedActive = reactExports.useMemo(function() {
    if (active) {
      return active;
    }
    if (mode !== "inline") {
      return childrenActive || isSubPathKey([activeKey], eventKey);
    }
    return false;
  }, [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]);
  var directionStyle = useDirectionStyle(connectedPath.length);
  var onInternalTitleClick = function onInternalTitleClick2(e2) {
    if (mergedDisabled) {
      return;
    }
    onTitleClick === null || onTitleClick === void 0 ? void 0 : onTitleClick({
      key: eventKey,
      domEvent: e2
    });
    if (mode === "inline") {
      onOpenChange(eventKey, !originOpen);
    }
  };
  var onMergedItemClick = useMemoCallback(function(info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  });
  var onPopupVisibleChange = function onPopupVisibleChange2(newVisible) {
    if (mode !== "inline") {
      onOpenChange(eventKey, newVisible);
    }
  };
  var onInternalFocus = function onInternalFocus2() {
    onActive(eventKey);
  };
  var popupId = domDataId && "".concat(domDataId, "-popup");
  var titleNode = /* @__PURE__ */ reactExports.createElement("div", _extends({
    role: "menuitem",
    style: directionStyle,
    className: "".concat(subMenuPrefixCls, "-title"),
    tabIndex: mergedDisabled ? null : -1,
    ref: elementRef,
    title: typeof title === "string" ? title : null,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
    "aria-expanded": open,
    "aria-haspopup": true,
    "aria-controls": popupId,
    "aria-disabled": mergedDisabled,
    onClick: onInternalTitleClick,
    onFocus: onInternalFocus
  }, activeProps), title, /* @__PURE__ */ reactExports.createElement(Icon, {
    icon: mode !== "horizontal" ? mergedExpandIcon : null,
    props: _objectSpread2$1(_objectSpread2$1({}, props), {}, {
      isOpen: open,
      // [Legacy] Not sure why need this mark
      isSubMenu: true
    })
  }, /* @__PURE__ */ reactExports.createElement("i", {
    className: "".concat(subMenuPrefixCls, "-arrow")
  })));
  var triggerModeRef = reactExports.useRef(mode);
  if (mode !== "inline" && connectedPath.length > 1) {
    triggerModeRef.current = "vertical";
  } else {
    triggerModeRef.current = mode;
  }
  if (!overflowDisabled) {
    var triggerMode = triggerModeRef.current;
    titleNode = /* @__PURE__ */ reactExports.createElement(PopupTrigger, {
      mode: triggerMode,
      prefixCls: subMenuPrefixCls,
      visible: !internalPopupClose && open && mode !== "inline",
      popupClassName,
      popupOffset,
      popup: /* @__PURE__ */ reactExports.createElement(
        InheritableContextProvider,
        {
          mode: triggerMode === "horizontal" ? "vertical" : triggerMode
        },
        /* @__PURE__ */ reactExports.createElement(SubMenuList, {
          id: popupId,
          ref: popupRef
        }, children)
      ),
      disabled: mergedDisabled,
      onVisibleChange: onPopupVisibleChange
    }, titleNode);
  }
  var listNode = /* @__PURE__ */ reactExports.createElement(ForwardOverflow.Item, _extends({
    role: "none"
  }, restProps, {
    component: "li",
    style,
    className: classNames(subMenuPrefixCls, "".concat(subMenuPrefixCls, "-").concat(mode), className, (_classNames = {}, _defineProperty$1(_classNames, "".concat(subMenuPrefixCls, "-open"), open), _defineProperty$1(_classNames, "".concat(subMenuPrefixCls, "-active"), mergedActive), _defineProperty$1(_classNames, "".concat(subMenuPrefixCls, "-selected"), childrenSelected), _defineProperty$1(_classNames, "".concat(subMenuPrefixCls, "-disabled"), mergedDisabled), _classNames)),
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), titleNode, !overflowDisabled && /* @__PURE__ */ reactExports.createElement(InlineSubMenuList, {
    id: popupId,
    open,
    keyPath: connectedPath
  }, children));
  if (_internalRenderSubMenuItem) {
    listNode = _internalRenderSubMenuItem(listNode, props, {
      selected: childrenSelected,
      active: mergedActive,
      open,
      disabled: mergedDisabled
    });
  }
  return /* @__PURE__ */ reactExports.createElement(InheritableContextProvider, {
    onItemClick: onMergedItemClick,
    mode: mode === "horizontal" ? "vertical" : mode,
    itemIcon: mergedItemIcon,
    expandIcon: mergedExpandIcon
  }, listNode);
};
function SubMenu(props) {
  var eventKey = props.eventKey, children = props.children;
  var connectedKeyPath = useFullPath(eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();
  reactExports.useEffect(function() {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function() {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  var renderNode;
  if (measure) {
    renderNode = childList;
  } else {
    renderNode = /* @__PURE__ */ reactExports.createElement(InternalSubMenu, props, childList);
  }
  return /* @__PURE__ */ reactExports.createElement(PathTrackerContext.Provider, {
    value: connectedKeyPath
  }, renderNode);
}
var _excluded$8 = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"];
var EMPTY_LIST = [];
var Menu = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _childList$, _classNames;
  var _ref = props, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-menu" : _ref$prefixCls, rootClassName = _ref.rootClassName, style = _ref.style, className = _ref.className, _ref$tabIndex = _ref.tabIndex, tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex, items = _ref.items, children = _ref.children, direction = _ref.direction, id = _ref.id, _ref$mode = _ref.mode, mode = _ref$mode === void 0 ? "vertical" : _ref$mode, inlineCollapsed = _ref.inlineCollapsed, disabled = _ref.disabled, disabledOverflow = _ref.disabledOverflow, _ref$subMenuOpenDelay = _ref.subMenuOpenDelay, subMenuOpenDelay = _ref$subMenuOpenDelay === void 0 ? 0.1 : _ref$subMenuOpenDelay, _ref$subMenuCloseDela = _ref.subMenuCloseDelay, subMenuCloseDelay = _ref$subMenuCloseDela === void 0 ? 0.1 : _ref$subMenuCloseDela, forceSubMenuRender = _ref.forceSubMenuRender, defaultOpenKeys = _ref.defaultOpenKeys, openKeys = _ref.openKeys, activeKey = _ref.activeKey, defaultActiveFirst = _ref.defaultActiveFirst, _ref$selectable = _ref.selectable, selectable = _ref$selectable === void 0 ? true : _ref$selectable, _ref$multiple = _ref.multiple, multiple = _ref$multiple === void 0 ? false : _ref$multiple, defaultSelectedKeys = _ref.defaultSelectedKeys, selectedKeys = _ref.selectedKeys, onSelect = _ref.onSelect, onDeselect = _ref.onDeselect, _ref$inlineIndent = _ref.inlineIndent, inlineIndent = _ref$inlineIndent === void 0 ? 24 : _ref$inlineIndent, motion2 = _ref.motion, defaultMotions = _ref.defaultMotions, _ref$triggerSubMenuAc = _ref.triggerSubMenuAction, triggerSubMenuAction = _ref$triggerSubMenuAc === void 0 ? "hover" : _ref$triggerSubMenuAc, builtinPlacements = _ref.builtinPlacements, itemIcon = _ref.itemIcon, expandIcon = _ref.expandIcon, _ref$overflowedIndica = _ref.overflowedIndicator, overflowedIndicator = _ref$overflowedIndica === void 0 ? "..." : _ref$overflowedIndica, overflowedIndicatorPopupClassName = _ref.overflowedIndicatorPopupClassName, getPopupContainer = _ref.getPopupContainer, onClick = _ref.onClick, onOpenChange = _ref.onOpenChange, onKeyDown = _ref.onKeyDown;
  _ref.openAnimation;
  _ref.openTransitionName;
  var _internalRenderMenuItem = _ref._internalRenderMenuItem, _internalRenderSubMenuItem = _ref._internalRenderSubMenuItem, restProps = _objectWithoutProperties(_ref, _excluded$8);
  var childList = reactExports.useMemo(function() {
    return parseItems(children, items, EMPTY_LIST);
  }, [children, items]);
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mounted = _React$useState2[0], setMounted = _React$useState2[1];
  var containerRef = reactExports.useRef();
  var uuid2 = useUUID(id);
  var isRtl = direction === "rtl";
  var _useMergedState = useMergedState(defaultOpenKeys, {
    value: openKeys,
    postState: function postState(keys) {
      return keys || EMPTY_LIST;
    }
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedOpenKeys = _useMergedState2[0], setMergedOpenKeys = _useMergedState2[1];
  var triggerOpenKeys = function triggerOpenKeys2(keys) {
    var forceFlush = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    function doUpdate() {
      setMergedOpenKeys(keys);
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(keys);
    }
    if (forceFlush) {
      reactDomExports.flushSync(doUpdate);
    } else {
      doUpdate();
    }
  };
  var _React$useState3 = reactExports.useState(mergedOpenKeys), _React$useState4 = _slicedToArray(_React$useState3, 2), inlineCacheOpenKeys = _React$useState4[0], setInlineCacheOpenKeys = _React$useState4[1];
  var mountRef = reactExports.useRef(false);
  var _React$useMemo = reactExports.useMemo(function() {
    if ((mode === "inline" || mode === "vertical") && inlineCollapsed) {
      return ["vertical", inlineCollapsed];
    }
    return [mode, false];
  }, [mode, inlineCollapsed]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), mergedMode = _React$useMemo2[0], mergedInlineCollapsed = _React$useMemo2[1];
  var isInlineMode = mergedMode === "inline";
  var _React$useState5 = reactExports.useState(mergedMode), _React$useState6 = _slicedToArray(_React$useState5, 2), internalMode = _React$useState6[0], setInternalMode = _React$useState6[1];
  var _React$useState7 = reactExports.useState(mergedInlineCollapsed), _React$useState8 = _slicedToArray(_React$useState7, 2), internalInlineCollapsed = _React$useState8[0], setInternalInlineCollapsed = _React$useState8[1];
  reactExports.useEffect(function() {
    setInternalMode(mergedMode);
    setInternalInlineCollapsed(mergedInlineCollapsed);
    if (!mountRef.current) {
      return;
    }
    if (isInlineMode) {
      setMergedOpenKeys(inlineCacheOpenKeys);
    } else {
      triggerOpenKeys(EMPTY_LIST);
    }
  }, [mergedMode, mergedInlineCollapsed]);
  var _React$useState9 = reactExports.useState(0), _React$useState10 = _slicedToArray(_React$useState9, 2), lastVisibleIndex = _React$useState10[0], setLastVisibleIndex = _React$useState10[1];
  var allVisible = lastVisibleIndex >= childList.length - 1 || internalMode !== "horizontal" || disabledOverflow;
  reactExports.useEffect(function() {
    if (isInlineMode) {
      setInlineCacheOpenKeys(mergedOpenKeys);
    }
  }, [mergedOpenKeys]);
  reactExports.useEffect(function() {
    mountRef.current = true;
    return function() {
      mountRef.current = false;
    };
  }, []);
  var _useKeyRecords = useKeyRecords(), registerPath = _useKeyRecords.registerPath, unregisterPath = _useKeyRecords.unregisterPath, refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys, isSubPathKey = _useKeyRecords.isSubPathKey, getKeyPath = _useKeyRecords.getKeyPath, getKeys = _useKeyRecords.getKeys, getSubPathKeys = _useKeyRecords.getSubPathKeys;
  var registerPathContext = reactExports.useMemo(function() {
    return {
      registerPath,
      unregisterPath
    };
  }, [registerPath, unregisterPath]);
  var pathUserContext = reactExports.useMemo(function() {
    return {
      isSubPathKey
    };
  }, [isSubPathKey]);
  reactExports.useEffect(function() {
    refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function(child) {
      return child.key;
    }));
  }, [lastVisibleIndex, allVisible]);
  var _useMergedState3 = useMergedState(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
    value: activeKey
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedActiveKey = _useMergedState4[0], setMergedActiveKey = _useMergedState4[1];
  var onActive = useMemoCallback(function(key) {
    setMergedActiveKey(key);
  });
  var onInactive = useMemoCallback(function() {
    setMergedActiveKey(void 0);
  });
  reactExports.useImperativeHandle(ref, function() {
    return {
      list: containerRef.current,
      focus: function focus(options) {
        var _childList$find;
        var shouldFocusKey = mergedActiveKey !== null && mergedActiveKey !== void 0 ? mergedActiveKey : (_childList$find = childList.find(function(node) {
          return !node.props.disabled;
        })) === null || _childList$find === void 0 ? void 0 : _childList$find.key;
        if (shouldFocusKey) {
          var _containerRef$current, _containerRef$current2, _containerRef$current3;
          (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.querySelector("li[data-menu-id='".concat(getMenuId(uuid2, shouldFocusKey), "']"))) === null || _containerRef$current2 === void 0 ? void 0 : (_containerRef$current3 = _containerRef$current2.focus) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.call(_containerRef$current2, options);
        }
      }
    };
  });
  var _useMergedState5 = useMergedState(defaultSelectedKeys || [], {
    value: selectedKeys,
    // Legacy convert key to array
    postState: function postState(keys) {
      if (Array.isArray(keys)) {
        return keys;
      }
      if (keys === null || keys === void 0) {
        return EMPTY_LIST;
      }
      return [keys];
    }
  }), _useMergedState6 = _slicedToArray(_useMergedState5, 2), mergedSelectKeys = _useMergedState6[0], setMergedSelectKeys = _useMergedState6[1];
  var triggerSelection = function triggerSelection2(info) {
    if (selectable) {
      var targetKey = info.key;
      var exist = mergedSelectKeys.includes(targetKey);
      var newSelectKeys;
      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter(function(key) {
            return key !== targetKey;
          });
        } else {
          newSelectKeys = [].concat(_toConsumableArray(mergedSelectKeys), [targetKey]);
        }
      } else {
        newSelectKeys = [targetKey];
      }
      setMergedSelectKeys(newSelectKeys);
      var selectInfo = _objectSpread2$1(_objectSpread2$1({}, info), {}, {
        selectedKeys: newSelectKeys
      });
      if (exist) {
        onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectInfo);
      } else {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectInfo);
      }
    }
    if (!multiple && mergedOpenKeys.length && internalMode !== "inline") {
      triggerOpenKeys(EMPTY_LIST);
    }
  };
  var onInternalClick = useMemoCallback(function(info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    triggerSelection(info);
  });
  var onInternalOpenChange = useMemoCallback(function(key, open) {
    var newOpenKeys = mergedOpenKeys.filter(function(k2) {
      return k2 !== key;
    });
    if (open) {
      newOpenKeys.push(key);
    } else if (internalMode !== "inline") {
      var subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter(function(k2) {
        return !subPathKeys.has(k2);
      });
    }
    if (!isEqual(mergedOpenKeys, newOpenKeys, true)) {
      triggerOpenKeys(newOpenKeys, true);
    }
  });
  var getInternalPopupContainer = useMemoCallback(getPopupContainer);
  var triggerAccessibilityOpen = function triggerAccessibilityOpen2(key, open) {
    var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };
  var onInternalKeyDown = useAccessibility(internalMode, mergedActiveKey, isRtl, uuid2, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown);
  reactExports.useEffect(function() {
    setMounted(true);
  }, []);
  var privateContext = reactExports.useMemo(function() {
    return {
      _internalRenderMenuItem,
      _internalRenderSubMenuItem
    };
  }, [_internalRenderMenuItem, _internalRenderSubMenuItem]);
  var wrappedChildList = internalMode !== "horizontal" || disabledOverflow ? childList : (
    // Need wrap for overflow dropdown that do not response for open
    childList.map(function(child, index2) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ reactExports.createElement(InheritableContextProvider, {
          key: child.key,
          overflowDisabled: index2 > lastVisibleIndex
        }, child)
      );
    })
  );
  var container = /* @__PURE__ */ reactExports.createElement(ForwardOverflow, _extends({
    id,
    ref: containerRef,
    prefixCls: "".concat(prefixCls, "-overflow"),
    component: "ul",
    itemComponent: MenuItem$1,
    className: classNames(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(internalMode), className, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-inline-collapsed"), internalInlineCollapsed), _defineProperty$1(_classNames, "".concat(prefixCls, "-rtl"), isRtl), _classNames), rootClassName),
    dir: direction,
    style,
    role: "menu",
    tabIndex,
    data: wrappedChildList,
    renderRawItem: function renderRawItem(node) {
      return node;
    },
    renderRawRest: function renderRawRest(omitItems) {
      var len = omitItems.length;
      var originOmitItems = len ? childList.slice(-len) : null;
      return /* @__PURE__ */ reactExports.createElement(SubMenu, {
        eventKey: OVERFLOW_KEY,
        title: overflowedIndicator,
        disabled: allVisible,
        internalPopupClose: len === 0,
        popupClassName: overflowedIndicatorPopupClassName
      }, originOmitItems);
    },
    maxCount: internalMode !== "horizontal" || disabledOverflow ? ForwardOverflow.INVALIDATE : ForwardOverflow.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function onVisibleChange(newLastIndex) {
      setLastVisibleIndex(newLastIndex);
    },
    onKeyDown: onInternalKeyDown
  }, restProps));
  return /* @__PURE__ */ reactExports.createElement(PrivateContext.Provider, {
    value: privateContext
  }, /* @__PURE__ */ reactExports.createElement(IdContext.Provider, {
    value: uuid2
  }, /* @__PURE__ */ reactExports.createElement(InheritableContextProvider, {
    prefixCls,
    rootClassName,
    mode: internalMode,
    openKeys: mergedOpenKeys,
    rtl: isRtl,
    disabled,
    motion: mounted ? motion2 : null,
    defaultMotions: mounted ? defaultMotions : null,
    activeKey: mergedActiveKey,
    onActive,
    onInactive,
    selectedKeys: mergedSelectKeys,
    inlineIndent,
    subMenuOpenDelay,
    subMenuCloseDelay,
    forceSubMenuRender,
    builtinPlacements,
    triggerSubMenuAction,
    getPopupContainer: getInternalPopupContainer,
    itemIcon,
    expandIcon,
    onItemClick: onInternalClick,
    onOpenChange: onInternalOpenChange
  }, /* @__PURE__ */ reactExports.createElement(PathUserContext.Provider, {
    value: pathUserContext
  }, container), /* @__PURE__ */ reactExports.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": true
  }, /* @__PURE__ */ reactExports.createElement(PathRegisterContext.Provider, {
    value: registerPathContext
  }, childList)))));
});
var _excluded$7 = ["className", "title", "eventKey", "children"], _excluded2$2 = ["children"];
var InternalMenuItemGroup = function InternalMenuItemGroup2(_ref) {
  var className = _ref.className, title = _ref.title;
  _ref.eventKey;
  var children = _ref.children, restProps = _objectWithoutProperties(_ref, _excluded$7);
  var _React$useContext = reactExports.useContext(MenuContext), prefixCls = _React$useContext.prefixCls;
  var groupPrefixCls = "".concat(prefixCls, "-item-group");
  return /* @__PURE__ */ reactExports.createElement("li", _extends({
    role: "presentation"
  }, restProps, {
    onClick: function onClick(e2) {
      return e2.stopPropagation();
    },
    className: classNames(groupPrefixCls, className)
  }), /* @__PURE__ */ reactExports.createElement("div", {
    role: "presentation",
    className: "".concat(groupPrefixCls, "-title"),
    title: typeof title === "string" ? title : void 0
  }, title), /* @__PURE__ */ reactExports.createElement("ul", {
    role: "group",
    className: "".concat(groupPrefixCls, "-list")
  }, children));
};
function MenuItemGroup(_ref2) {
  var children = _ref2.children, props = _objectWithoutProperties(_ref2, _excluded2$2);
  var connectedKeyPath = useFullPath(props.eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();
  if (measure) {
    return childList;
  }
  return /* @__PURE__ */ reactExports.createElement(InternalMenuItemGroup, omit$1(props, ["warnKey"]), childList);
}
function Divider$1(_ref) {
  var className = _ref.className, style = _ref.style;
  var _React$useContext = reactExports.useContext(MenuContext), prefixCls = _React$useContext.prefixCls;
  var measure = useMeasure();
  if (measure) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement("li", {
    className: classNames("".concat(prefixCls, "-item-divider"), className),
    style
  });
}
var ExportMenu = Menu;
ExportMenu.Item = MenuItem$1;
ExportMenu.SubMenu = SubMenu;
ExportMenu.ItemGroup = MenuItemGroup;
ExportMenu.Divider = Divider$1;
var EllipsisOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
const EllipsisOutlinedSvg = EllipsisOutlined$2;
var EllipsisOutlined = function EllipsisOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon, _extends({}, props, {
    ref,
    icon: EllipsisOutlinedSvg
  }));
};
const EllipsisOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(EllipsisOutlined);
const Element = (props) => {
  const {
    prefixCls,
    className,
    style,
    size,
    shape
  } = props;
  const sizeCls = classNames({
    [`${prefixCls}-lg`]: size === "large",
    [`${prefixCls}-sm`]: size === "small"
  });
  const shapeCls = classNames({
    [`${prefixCls}-circle`]: shape === "circle",
    [`${prefixCls}-square`]: shape === "square",
    [`${prefixCls}-round`]: shape === "round"
  });
  const sizeStyle = reactExports.useMemo(() => typeof size === "number" ? {
    width: size,
    height: size,
    lineHeight: `${size}px`
  } : {}, [size]);
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(prefixCls, sizeCls, shapeCls, className),
    style: Object.assign(Object.assign({}, sizeStyle), style)
  });
};
const Element$1 = Element;
const skeletonClsLoading = new Keyframe(`ant-skeleton-loading`, {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
});
const genSkeletonElementCommonSize = (size) => ({
  height: size,
  lineHeight: `${size}px`
});
const genSkeletonElementAvatarSize = (size) => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonColor = (token2) => ({
  background: token2.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: skeletonClsLoading,
  animationDuration: token2.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
});
const genSkeletonElementInputSize = (size) => Object.assign({
  width: size * 5,
  minWidth: size * 5
}, genSkeletonElementCommonSize(size));
const genSkeletonElementAvatar = (token2) => {
  const {
    skeletonAvatarCls,
    color,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token2;
  return {
    [`${skeletonAvatarCls}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: color
    }, genSkeletonElementAvatarSize(controlHeight)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: "50%"
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
  };
};
const genSkeletonElementInput = (token2) => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    color
  } = token2;
  return {
    [`${skeletonInputCls}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: color,
      borderRadius: borderRadiusSM
    }, genSkeletonElementInputSize(controlHeight)),
    [`${skeletonInputCls}-lg`]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG)),
    [`${skeletonInputCls}-sm`]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM))
  };
};
const genSkeletonElementImageSize = (size) => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonElementImage = (token2) => {
  const {
    skeletonImageCls,
    imageSizeBase,
    color,
    borderRadiusSM
  } = token2;
  return {
    [`${skeletonImageCls}`]: Object.assign(Object.assign({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      background: color,
      borderRadius: borderRadiusSM
    }, genSkeletonElementImageSize(imageSizeBase * 2)), {
      [`${skeletonImageCls}-path`]: {
        fill: "#bfbfbf"
      },
      [`${skeletonImageCls}-svg`]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
        maxWidth: imageSizeBase * 4,
        maxHeight: imageSizeBase * 4
      }),
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: "50%"
    }
  };
};
const genSkeletonElementButtonShape = (token2, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token2;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: "50%"
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
const genSkeletonElementButtonSize = (size) => Object.assign({
  width: size * 2,
  minWidth: size * 2
}, genSkeletonElementCommonSize(size));
const genSkeletonElementButton = (token2) => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    color
  } = token2;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [`${skeletonButtonCls}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: color,
      borderRadius: borderRadiusSM,
      width: controlHeight * 2,
      minWidth: controlHeight * 2
    }, genSkeletonElementButtonSize(controlHeight))
  }, genSkeletonElementButtonShape(token2, controlHeight, skeletonButtonCls)), {
    [`${skeletonButtonCls}-lg`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG))
  }), genSkeletonElementButtonShape(token2, controlHeightLG, `${skeletonButtonCls}-lg`)), {
    [`${skeletonButtonCls}-sm`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM))
  }), genSkeletonElementButtonShape(token2, controlHeightSM, `${skeletonButtonCls}-sm`));
};
const genBaseStyle = (token2) => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    color,
    padding,
    marginSM,
    borderRadius,
    skeletonTitleHeight,
    skeletonBlockRadius,
    skeletonParagraphLineHeight,
    controlHeightXS,
    skeletonParagraphMarginTop
  } = token2;
  return {
    [`${componentCls}`]: {
      display: "table",
      width: "100%",
      [`${componentCls}-header`]: {
        display: "table-cell",
        paddingInlineEnd: padding,
        verticalAlign: "top",
        // Avatar
        [`${skeletonAvatarCls}`]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: color
        }, genSkeletonElementAvatarSize(controlHeight)),
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: "50%"
        },
        [`${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
        [`${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
      },
      [`${componentCls}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [`${skeletonTitleCls}`]: {
          width: "100%",
          height: skeletonTitleHeight,
          background: color,
          borderRadius: skeletonBlockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [`${skeletonParagraphCls}`]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: skeletonParagraphLineHeight,
            listStyle: "none",
            background: color,
            borderRadius: skeletonBlockRadius,
            "+ li": {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${componentCls}-content`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-content`]: {
      // Title
      [`${skeletonTitleCls}`]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: skeletonParagraphMarginTop
        }
      }
    },
    // Skeleton element
    [`${componentCls}${componentCls}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, genSkeletonElementButton(token2)), genSkeletonElementAvatar(token2)), genSkeletonElementInput(token2)), genSkeletonElementImage(token2)),
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: "100%",
      [`${skeletonButtonCls}`]: {
        width: "100%"
      },
      [`${skeletonInputCls}`]: {
        width: "100%"
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonImageCls}
      `]: Object.assign({}, genSkeletonColor(token2))
    }
  };
};
const useStyle$b = genComponentStyleHook("Skeleton", (token2) => {
  const {
    componentCls
  } = token2;
  const skeletonToken = merge(token2, {
    skeletonAvatarCls: `${componentCls}-avatar`,
    skeletonTitleCls: `${componentCls}-title`,
    skeletonParagraphCls: `${componentCls}-paragraph`,
    skeletonButtonCls: `${componentCls}-button`,
    skeletonInputCls: `${componentCls}-input`,
    skeletonImageCls: `${componentCls}-image`,
    imageSizeBase: token2.controlHeight * 1.5,
    skeletonTitleHeight: token2.controlHeight / 2,
    skeletonBlockRadius: token2.borderRadiusSM,
    skeletonParagraphLineHeight: token2.controlHeight / 2,
    skeletonParagraphMarginTop: token2.marginLG + token2.marginXXS,
    borderRadius: 100,
    skeletonLoadingBackground: `linear-gradient(90deg, ${token2.color} 25%, ${token2.colorGradientEnd} 37%, ${token2.color} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return [genBaseStyle(skeletonToken)];
}, (token2) => {
  const {
    colorFillContent,
    colorFill
  } = token2;
  return {
    color: colorFillContent,
    colorGradientEnd: colorFill
  };
});
const SkeletonAvatar = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    shape = "circle",
    size = "default"
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$b(prefixCls);
  const otherProps = omit$1(props, ["prefixCls", "className"]);
  const cls = classNames(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, rootClassName, hashId);
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
    className: cls
  }, /* @__PURE__ */ reactExports.createElement(Element$1, Object.assign({
    prefixCls: `${prefixCls}-avatar`,
    shape,
    size
  }, otherProps))));
};
const SkeletonAvatar$1 = SkeletonAvatar;
const SkeletonButton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block = false,
    size = "default"
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$b(prefixCls);
  const otherProps = omit$1(props, ["prefixCls"]);
  const cls = classNames(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, rootClassName, hashId);
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
    className: cls
  }, /* @__PURE__ */ reactExports.createElement(Element$1, Object.assign({
    prefixCls: `${prefixCls}-button`,
    size
  }, otherProps))));
};
const SkeletonButton$1 = SkeletonButton;
var DotChartOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "dot-chart", "theme": "outlined" };
const DotChartOutlinedSvg = DotChartOutlined$2;
var DotChartOutlined = function DotChartOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon, _extends({}, props, {
    ref,
    icon: DotChartOutlinedSvg
  }));
};
const DotChartOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(DotChartOutlined);
const SkeletonNode = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$b(prefixCls);
  const cls = classNames(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, hashId, className, rootClassName);
  const content = children !== null && children !== void 0 ? children : /* @__PURE__ */ reactExports.createElement(DotChartOutlined$1, null);
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
    className: cls
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames(`${prefixCls}-image`, className),
    style
  }, content)));
};
const SkeletonNode$1 = SkeletonNode;
const path = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";
const SkeletonImage = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$b(prefixCls);
  const cls = classNames(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, rootClassName, hashId);
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
    className: cls
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames(`${prefixCls}-image`, className),
    style
  }, /* @__PURE__ */ reactExports.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${prefixCls}-image-svg`
  }, /* @__PURE__ */ reactExports.createElement("path", {
    d: path,
    className: `${prefixCls}-image-path`
  })))));
};
const SkeletonImage$1 = SkeletonImage;
const SkeletonInput = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block,
    size = "default"
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$b(prefixCls);
  const otherProps = omit$1(props, ["prefixCls"]);
  const cls = classNames(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, rootClassName, hashId);
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
    className: cls
  }, /* @__PURE__ */ reactExports.createElement(Element$1, Object.assign({
    prefixCls: `${prefixCls}-input`,
    size
  }, otherProps))));
};
const SkeletonInput$1 = SkeletonInput;
const Paragraph = (props) => {
  const getWidth = (index2) => {
    const {
      width,
      rows: rows2 = 2
    } = props;
    if (Array.isArray(width)) {
      return width[index2];
    }
    if (rows2 - 1 === index2) {
      return width;
    }
    return void 0;
  };
  const {
    prefixCls,
    className,
    style,
    rows
  } = props;
  const rowList = _toConsumableArray(Array(rows)).map((_, index2) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ reactExports.createElement("li", {
      key: index2,
      style: {
        width: getWidth(index2)
      }
    })
  ));
  return /* @__PURE__ */ reactExports.createElement("ul", {
    className: classNames(prefixCls, className),
    style
  }, rowList);
};
const Paragraph$1 = Paragraph;
const Title = (_ref) => {
  let {
    prefixCls,
    className,
    width,
    style
  } = _ref;
  return /* @__PURE__ */ reactExports.createElement("h3", {
    className: classNames(prefixCls, className),
    style: Object.assign({
      width
    }, style)
  });
};
const Title$1 = Title;
function getComponentProps(prop) {
  if (prop && typeof prop === "object") {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return {
      size: "large",
      shape: "square"
    };
  }
  return {
    size: "large",
    shape: "circle"
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: "38%"
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: "50%"
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  if (!hasAvatar || !hasTitle) {
    basicProps.width = "61%";
  }
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
const Skeleton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    style,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$b(prefixCls);
  if (loading || !("loading" in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = Object.assign(Object.assign({
        prefixCls: `${prefixCls}-avatar`
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      avatarNode = /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-header`
      }, /* @__PURE__ */ reactExports.createElement(Element$1, Object.assign({}, avatarProps)));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      let $title;
      if (hasTitle) {
        const titleProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-title`
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /* @__PURE__ */ reactExports.createElement(Title$1, Object.assign({}, titleProps));
      }
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-paragraph`
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /* @__PURE__ */ reactExports.createElement(Paragraph$1, Object.assign({}, paragraphProps));
      }
      contentNode = /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-content`
      }, $title, paragraphNode);
    }
    const cls = classNames(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-round`]: round
    }, className, rootClassName, hashId);
    return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
      className: cls,
      style
    }, avatarNode, contentNode));
  }
  return typeof children !== "undefined" ? children : null;
};
Skeleton.Button = SkeletonButton$1;
Skeleton.Avatar = SkeletonAvatar$1;
Skeleton.Input = SkeletonInput$1;
Skeleton.Image = SkeletonImage$1;
Skeleton.Node = SkeletonNode$1;
const Skeleton$1 = Skeleton;
var PlusOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
const PlusOutlinedSvg = PlusOutlined$2;
var PlusOutlined = function PlusOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon, _extends({}, props, {
    ref,
    icon: PlusOutlinedSvg
  }));
};
const PlusOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(PlusOutlined);
const TabContext = /* @__PURE__ */ reactExports.createContext(null);
var TabPane$4 = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var prefixCls = _ref.prefixCls, className = _ref.className, style = _ref.style, id = _ref.id, active = _ref.active, tabKey = _ref.tabKey, children = _ref.children;
  return /* @__PURE__ */ reactExports.createElement("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style,
    className: classNames(prefixCls, active && "".concat(prefixCls, "-active"), className),
    ref
  }, children);
});
var _excluded$6 = ["key", "forceRender", "style", "className"];
function TabPanelList(_ref) {
  var id = _ref.id, activeKey = _ref.activeKey, animated = _ref.animated, tabPosition = _ref.tabPosition, destroyInactiveTabPane = _ref.destroyInactiveTabPane;
  var _React$useContext = reactExports.useContext(TabContext), prefixCls = _React$useContext.prefixCls, tabs = _React$useContext.tabs;
  var tabPaneAnimated = animated.tabPane;
  var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames("".concat(prefixCls, "-content-holder"))
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), _defineProperty$1({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated))
  }, tabs.map(function(_ref2) {
    var key = _ref2.key, forceRender = _ref2.forceRender, paneStyle = _ref2.style, paneClassName = _ref2.className, restTabProps = _objectWithoutProperties(_ref2, _excluded$6);
    var active = key === activeKey;
    return /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends({
      key,
      visible: active,
      forceRender,
      removeOnLeave: !!destroyInactiveTabPane,
      leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
    }, animated.tabPaneMotion), function(_ref3, ref) {
      var motionStyle = _ref3.style, motionClassName = _ref3.className;
      return /* @__PURE__ */ reactExports.createElement(TabPane$4, _extends({}, restTabProps, {
        prefixCls: tabPanePrefixCls,
        id,
        tabKey: key,
        animated: tabPaneAnimated,
        active,
        style: _objectSpread2$1(_objectSpread2$1({}, paneStyle), motionStyle),
        className: classNames(paneClassName, motionClassName),
        ref
      }));
    });
  })));
}
var DEFAULT_SIZE$1 = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return reactExports.useMemo(function() {
    var _tabs$;
    var map = /* @__PURE__ */ new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE$1;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key);
      if (!data) {
        var _tabs;
        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE$1;
      }
      var entity = map.get(key) || _objectSpread2$1({}, data);
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key, entity);
    }
    return map;
  }, [tabs.map(function(tab) {
    return tab.key;
  }).join("_"), tabSizes, holderScrollWidth]);
}
function useSyncState(defaultState, onChange) {
  var stateRef = reactExports.useRef(defaultState);
  var _React$useState = reactExports.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), forceUpdate = _React$useState2[1];
  function setState(updater) {
    var newValue = typeof updater === "function" ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }
  return [stateRef.current, setState];
}
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL$1 = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL$1);
function useTouchMove(ref, onOffset) {
  var _useState = reactExports.useState(), _useState2 = _slicedToArray(_useState, 2), touchPosition = _useState2[0], setTouchPosition = _useState2[1];
  var _useState3 = reactExports.useState(0), _useState4 = _slicedToArray(_useState3, 2), lastTimestamp = _useState4[0], setLastTimestamp = _useState4[1];
  var _useState5 = reactExports.useState(0), _useState6 = _slicedToArray(_useState5, 2), lastTimeDiff = _useState6[0], setLastTimeDiff = _useState6[1];
  var _useState7 = reactExports.useState(), _useState8 = _slicedToArray(_useState7, 2), lastOffset = _useState8[0], setLastOffset = _useState8[1];
  var motionRef = reactExports.useRef();
  function onTouchStart(e2) {
    var _e$touches$ = e2.touches[0], screenX = _e$touches$.screenX, screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }
  function onTouchMove(e2) {
    if (!touchPosition)
      return;
    e2.preventDefault();
    var _e$touches$2 = e2.touches[0], screenX = _e$touches$2.screenX, screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition)
      return;
    setTouchPosition(null);
    setLastOffset(null);
    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE)
        return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function() {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL$1, currentY * REFRESH_INTERVAL$1);
      }, REFRESH_INTERVAL$1);
    }
  }
  var lastWheelDirectionRef = reactExports.useRef();
  function onWheel(e2) {
    var deltaX = e2.deltaX, deltaY = e2.deltaY;
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === "x" ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = "x";
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = "y";
    }
    if (onOffset(-mixed, -mixed)) {
      e2.preventDefault();
    }
  }
  var touchEventsRef = reactExports.useRef(null);
  touchEventsRef.current = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onWheel
  };
  reactExports.useEffect(function() {
    function onProxyTouchStart(e2) {
      touchEventsRef.current.onTouchStart(e2);
    }
    function onProxyTouchMove(e2) {
      touchEventsRef.current.onTouchMove(e2);
    }
    function onProxyTouchEnd(e2) {
      touchEventsRef.current.onTouchEnd(e2);
    }
    function onProxyWheel(e2) {
      touchEventsRef.current.onWheel(e2);
    }
    document.addEventListener("touchmove", onProxyTouchMove, {
      passive: false
    });
    document.addEventListener("touchend", onProxyTouchEnd, {
      passive: false
    });
    ref.current.addEventListener("touchstart", onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener("wheel", onProxyWheel);
    return function() {
      document.removeEventListener("touchmove", onProxyTouchMove);
      document.removeEventListener("touchend", onProxyTouchEnd);
    };
  }, []);
}
function useUpdate(callback) {
  var _useState = reactExports.useState(0), _useState2 = _slicedToArray(_useState, 2), count = _useState2[0], setCount = _useState2[1];
  var effectRef = reactExports.useRef(0);
  var callbackRef = reactExports.useRef();
  callbackRef.current = callback;
  useLayoutUpdateEffect(function() {
    var _callbackRef$current;
    (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef);
  }, [count]);
  return function() {
    if (effectRef.current !== count) {
      return;
    }
    effectRef.current += 1;
    setCount(effectRef.current);
  };
}
function useUpdateState(defaultState) {
  var batchRef = reactExports.useRef([]);
  var _useState3 = reactExports.useState({}), _useState4 = _slicedToArray(_useState3, 2), forceUpdate = _useState4[1];
  var state = reactExports.useRef(typeof defaultState === "function" ? defaultState() : defaultState);
  var flushUpdate = useUpdate(function() {
    var current = state.current;
    batchRef.current.forEach(function(callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });
  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }
  return [state.current, updater];
}
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
  var tabs = _ref.tabs, tabPosition = _ref.tabPosition, rtl = _ref.rtl;
  var charUnit;
  var position;
  var transformSize;
  if (["top", "bottom"].includes(tabPosition)) {
    charUnit = "width";
    position = rtl ? "right" : "left";
    transformSize = Math.abs(transform);
  } else {
    charUnit = "height";
    position = "top";
    transformSize = -transform;
  }
  return reactExports.useMemo(function() {
    if (!tabs.length) {
      return [0, 0];
    }
    var len = tabs.length;
    var endIndex = len;
    for (var i = 0; i < len; i += 1) {
      var offset2 = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
      if (offset2[position] + offset2[charUnit] > transformSize + visibleTabContentValue) {
        endIndex = i - 1;
        break;
      }
    }
    var startIndex = 0;
    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE;
      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }
    return [startIndex, endIndex];
  }, [tabOffsets, visibleTabContentValue, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, transformSize, tabPosition, tabs.map(function(tab) {
    return tab.key;
  }).join("_"), rtl]);
}
function stringify(obj) {
  var tgt;
  if (obj instanceof Map) {
    tgt = {};
    obj.forEach(function(v, k2) {
      tgt[k2] = v;
    });
  } else {
    tgt = obj;
  }
  return JSON.stringify(tgt);
}
var RC_TABS_DOUBLE_QUOTE = "TABS_DQ";
function genDataNodeKey(key) {
  return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls, editable = _ref.editable, locale = _ref.locale, style = _ref.style;
  if (!editable || editable.showAdd === false) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement("button", {
    ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || "Add tab",
    onClick: function onClick(event) {
      editable.onEdit("add", {
        event
      });
    }
  }, editable.addIcon || "+");
}
const AddButton$1 = /* @__PURE__ */ reactExports.forwardRef(AddButton);
var ExtraContent = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var position = _ref.position, prefixCls = _ref.prefixCls, extra = _ref.extra;
  if (!extra)
    return null;
  var content;
  var assertExtra = {};
  if (_typeof$1(extra) === "object" && !/* @__PURE__ */ reactExports.isValidElement(extra)) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }
  if (position === "right") {
    content = assertExtra.right;
  }
  if (position === "left") {
    content = assertExtra.left;
  }
  return content ? /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(prefixCls, "-extra-content"),
    ref
  }, content) : null;
});
function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls, id = _ref.id, tabs = _ref.tabs, locale = _ref.locale, mobile = _ref.mobile, _ref$moreIcon = _ref.moreIcon, moreIcon = _ref$moreIcon === void 0 ? "More" : _ref$moreIcon, moreTransitionName = _ref.moreTransitionName, style = _ref.style, className = _ref.className, editable = _ref.editable, tabBarGutter = _ref.tabBarGutter, rtl = _ref.rtl, removeAriaLabel = _ref.removeAriaLabel, onTabClick = _ref.onTabClick, getPopupContainer = _ref.getPopupContainer, popupClassName = _ref.popupClassName;
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), open = _useState2[0], setOpen = _useState2[1];
  var _useState3 = reactExports.useState(null), _useState4 = _slicedToArray(_useState3, 2), selectedKey = _useState4[0], setSelectedKey = _useState4[1];
  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  function onRemoveTab(event, key) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit("remove", {
      key,
      event
    });
  }
  var menu = /* @__PURE__ */ reactExports.createElement(ExportMenu, {
    onClick: function onClick(_ref2) {
      var key = _ref2.key, domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    prefixCls: "".concat(dropdownPrefix, "-menu"),
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== void 0 ? dropdownAriaLabel : "expanded dropdown"
  }, tabs.map(function(tab) {
    var removable = editable && tab.closable !== false && !tab.disabled;
    return /* @__PURE__ */ reactExports.createElement(MenuItem$1, {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, /* @__PURE__ */ reactExports.createElement("span", null, tab.label), removable && /* @__PURE__ */ reactExports.createElement("button", {
      type: "button",
      "aria-label": removeAriaLabel || "remove",
      tabIndex: 0,
      className: "".concat(dropdownPrefix, "-menu-item-remove"),
      onClick: function onClick(e2) {
        e2.stopPropagation();
        onRemoveTab(e2, tab.key);
      }
    }, tab.closeIcon || editable.removeIcon || "×"));
  }));
  function selectOffset(offset2) {
    var enabledTabs = tabs.filter(function(tab2) {
      return !tab2.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function(tab2) {
      return tab2.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;
    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset2 + len) % len;
      var tab = enabledTabs[selectedIndex];
      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }
  function onKeyDown(e2) {
    var which = e2.which;
    if (!open) {
      if ([KeyCode.DOWN, KeyCode.SPACE, KeyCode.ENTER].includes(which)) {
        setOpen(true);
        e2.preventDefault();
      }
      return;
    }
    switch (which) {
      case KeyCode.UP:
        selectOffset(-1);
        e2.preventDefault();
        break;
      case KeyCode.DOWN:
        selectOffset(1);
        e2.preventDefault();
        break;
      case KeyCode.ESC:
        setOpen(false);
        break;
      case KeyCode.SPACE:
      case KeyCode.ENTER:
        if (selectedKey !== null)
          onTabClick(selectedKey, e2);
        break;
    }
  }
  reactExports.useEffect(function() {
    var ele = document.getElementById(selectedItemId);
    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  reactExports.useEffect(function() {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]);
  var moreStyle = _defineProperty$1({}, rtl ? "marginRight" : "marginLeft", tabBarGutter);
  if (!tabs.length) {
    moreStyle.visibility = "hidden";
    moreStyle.order = 1;
  }
  var overlayClassName = classNames(_defineProperty$1({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /* @__PURE__ */ reactExports.createElement(Dropdown$1, {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ["hover"],
    visible: tabs.length ? open : false,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: classNames(overlayClassName, popupClassName),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer
  }, /* @__PURE__ */ reactExports.createElement("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown
  }, moreIcon));
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames("".concat(prefixCls, "-nav-operations"), className),
    style,
    ref
  }, moreNode, /* @__PURE__ */ reactExports.createElement(AddButton$1, {
    prefixCls,
    locale,
    editable
  }));
}
const OperationNode$1 = /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef(OperationNode), function(_, next) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    next.tabMoving
  );
});
function TabNode(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls, id = _ref.id, active = _ref.active, _ref$tab = _ref.tab, key = _ref$tab.key, label = _ref$tab.label, disabled = _ref$tab.disabled, closeIcon = _ref$tab.closeIcon, closable = _ref.closable, renderWrapper = _ref.renderWrapper, removeAriaLabel = _ref.removeAriaLabel, editable = _ref.editable, onClick = _ref.onClick, onFocus = _ref.onFocus, style = _ref.style;
  var tabPrefix = "".concat(prefixCls, "-tab");
  var removable = editable && closable !== false && !disabled;
  function onInternalClick(e2) {
    if (disabled) {
      return;
    }
    onClick(e2);
  }
  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit("remove", {
      key,
      event
    });
  }
  var node = /* @__PURE__ */ reactExports.createElement("div", {
    key,
    "data-node-key": genDataNodeKey(key),
    className: classNames(tabPrefix, (_classNames = {}, _defineProperty$1(_classNames, "".concat(tabPrefix, "-with-remove"), removable), _defineProperty$1(_classNames, "".concat(tabPrefix, "-active"), active), _defineProperty$1(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style,
    onClick: onInternalClick
  }, /* @__PURE__ */ reactExports.createElement("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick2(e2) {
      e2.stopPropagation();
      onInternalClick(e2);
    },
    onKeyDown: function onKeyDown(e2) {
      if ([KeyCode.SPACE, KeyCode.ENTER].includes(e2.which)) {
        e2.preventDefault();
        onInternalClick(e2);
      }
    },
    onFocus
  }, label), removable && /* @__PURE__ */ reactExports.createElement("button", {
    type: "button",
    "aria-label": removeAriaLabel || "remove",
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick2(e2) {
      e2.stopPropagation();
      onRemoveTab(e2);
    }
  }, closeIcon || editable.removeIcon || "×"));
  return renderWrapper ? renderWrapper(node) : node;
}
var getSize = function getSize2(refObj) {
  var _ref = refObj.current || {}, _ref$offsetWidth = _ref.offsetWidth, offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth, _ref$offsetHeight = _ref.offsetHeight, offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;
  return [offsetWidth, offsetHeight];
};
var getUnitValue = function getUnitValue2(size, tabPositionTopOrBottom) {
  return size[tabPositionTopOrBottom ? 0 : 1];
};
function TabNavList(props, ref) {
  var _classNames;
  var _React$useContext = reactExports.useContext(TabContext), prefixCls = _React$useContext.prefixCls, tabs = _React$useContext.tabs;
  var className = props.className, style = props.style, id = props.id, animated = props.animated, activeKey = props.activeKey, rtl = props.rtl, extra = props.extra, editable = props.editable, locale = props.locale, tabPosition = props.tabPosition, tabBarGutter = props.tabBarGutter, children = props.children, onTabClick = props.onTabClick, onTabScroll = props.onTabScroll;
  var containerRef = reactExports.useRef();
  var extraLeftRef = reactExports.useRef();
  var extraRightRef = reactExports.useRef();
  var tabsWrapperRef = reactExports.useRef();
  var tabListRef = reactExports.useRef();
  var operationsRef = reactExports.useRef();
  var innerAddButtonRef = reactExports.useRef();
  var tabPositionTopOrBottom = tabPosition === "top" || tabPosition === "bottom";
  var _useSyncState = useSyncState(0, function(next, prev) {
    if (tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? "left" : "right"
      });
    }
  }), _useSyncState2 = _slicedToArray(_useSyncState, 2), transformLeft = _useSyncState2[0], setTransformLeft = _useSyncState2[1];
  var _useSyncState3 = useSyncState(0, function(next, prev) {
    if (!tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? "top" : "bottom"
      });
    }
  }), _useSyncState4 = _slicedToArray(_useSyncState3, 2), transformTop = _useSyncState4[0], setTransformTop = _useSyncState4[1];
  var _useState = reactExports.useState([0, 0]), _useState2 = _slicedToArray(_useState, 2), containerExcludeExtraSize = _useState2[0], setContainerExcludeExtraSize = _useState2[1];
  var _useState3 = reactExports.useState([0, 0]), _useState4 = _slicedToArray(_useState3, 2), tabContentSize = _useState4[0], setTabContentSize = _useState4[1];
  var _useState5 = reactExports.useState([0, 0]), _useState6 = _slicedToArray(_useState5, 2), addSize = _useState6[0], setAddSize = _useState6[1];
  var _useState7 = reactExports.useState([0, 0]), _useState8 = _slicedToArray(_useState7, 2), operationSize = _useState8[0], setOperationSize = _useState8[1];
  var _useUpdateState = useUpdateState(/* @__PURE__ */ new Map()), _useUpdateState2 = _slicedToArray(_useUpdateState, 2), tabSizes = _useUpdateState2[0], setTabSizes = _useUpdateState2[1];
  var tabOffsets = useOffsets(tabs, tabSizes, tabContentSize[0]);
  var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
  var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
  var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
  var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
  var needScroll = containerExcludeExtraSizeValue < tabContentSizeValue + addSizeValue;
  var visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;
  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;
  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
  } else {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  }
  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }
    if (value > transformMax) {
      return transformMax;
    }
    return value;
  }
  var touchMovingRef = reactExports.useRef();
  var _useState9 = reactExports.useState(), _useState10 = _slicedToArray(_useState9, 2), lockAnimation = _useState10[0], setLockAnimation = _useState10[1];
  function doLockAnimation() {
    setLockAnimation(Date.now());
  }
  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }
  useTouchMove(tabsWrapperRef, function(offsetX, offsetY) {
    function doMove(setState, offset2) {
      setState(function(value) {
        var newValue = alignInRange(value + offset2);
        return newValue;
      });
    }
    if (!needScroll) {
      return false;
    }
    if (tabPositionTopOrBottom) {
      doMove(setTransformLeft, offsetX);
    } else {
      doMove(setTransformTop, offsetY);
    }
    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  reactExports.useEffect(function() {
    clearTouchMoving();
    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function() {
        setLockAnimation(0);
      }, 100);
    }
    return clearTouchMoving;
  }, [lockAnimation]);
  var _useVisibleRange = useVisibleRange(
    tabOffsets,
    // Container
    visibleTabContentValue,
    // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop,
    // Tabs
    tabContentSizeValue,
    // Add
    addSizeValue,
    // Operation
    operationSizeValue,
    _objectSpread2$1(_objectSpread2$1({}, props), {}, {
      tabs
    })
  ), _useVisibleRange2 = _slicedToArray(_useVisibleRange, 2), visibleStart = _useVisibleRange2[0], visibleEnd = _useVisibleRange2[1];
  var scrollToTab = useEvent(function() {
    var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (tabPositionTopOrBottom) {
      var newTransform = transformLeft;
      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
          newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
        }
      } else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
        newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
      }
      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      var _newTransform = transformTop;
      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
        _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
      }
      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  });
  var tabNodeStyle = {};
  if (tabPosition === "top" || tabPosition === "bottom") {
    tabNodeStyle[rtl ? "marginRight" : "marginLeft"] = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }
  var tabNodes = tabs.map(function(tab, i) {
    var key = tab.key;
    return /* @__PURE__ */ reactExports.createElement(TabNode, {
      id,
      prefixCls,
      key,
      tab,
      style: i === 0 ? void 0 : tabNodeStyle,
      closable: tab.closable,
      editable,
      active: key === activeKey,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      onClick: function onClick(e2) {
        onTabClick(key, e2);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation();
        if (!tabsWrapperRef.current) {
          return;
        }
        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }
        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  var updateTabSizes = function updateTabSizes2() {
    return setTabSizes(function() {
      var newSizes = /* @__PURE__ */ new Map();
      tabs.forEach(function(_ref2) {
        var _tabListRef$current;
        var key = _ref2.key;
        var btnNode = (_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.querySelector('[data-node-key="'.concat(genDataNodeKey(key), '"]'));
        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  };
  reactExports.useEffect(function() {
    updateTabSizes();
  }, [tabs.map(function(tab) {
    return tab.key;
  }).join("_")]);
  var onListHolderResize = useUpdate(function() {
    var containerSize = getSize(containerRef);
    var extraLeftSize = getSize(extraLeftRef);
    var extraRightSize = getSize(extraRightRef);
    setContainerExcludeExtraSize([containerSize[0] - extraLeftSize[0] - extraRightSize[0], containerSize[1] - extraLeftSize[1] - extraRightSize[1]]);
    var newAddSize = getSize(innerAddButtonRef);
    setAddSize(newAddSize);
    var newOperationSize = getSize(operationsRef);
    setOperationSize(newOperationSize);
    var tabContentFullSize = getSize(tabListRef);
    setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);
    updateTabSizes();
  });
  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat(_toConsumableArray(startHiddenTabs), _toConsumableArray(endHiddenTabs));
  var _useState11 = reactExports.useState(), _useState12 = _slicedToArray(_useState11, 2), inkStyle = _useState12[0], setInkStyle = _useState12[1];
  var activeTabOffset = tabOffsets.get(activeKey);
  var inkBarRafRef = reactExports.useRef();
  function cleanInkBarRaf() {
    wrapperRaf.cancel(inkBarRafRef.current);
  }
  reactExports.useEffect(function() {
    var newInkStyle = {};
    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }
        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = wrapperRaf(function() {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]);
  reactExports.useEffect(function() {
    scrollToTab();
  }, [activeKey, transformMin, transformMax, stringify(activeTabOffset), stringify(tabOffsets), tabPositionTopOrBottom]);
  reactExports.useEffect(function() {
    onListHolderResize();
  }, [rtl]);
  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;
  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft !== transformMax;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = transformLeft !== transformMin;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = transformTop !== transformMin;
  }
  return /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: onListHolderResize
  }, /* @__PURE__ */ reactExports.createElement("div", {
    ref: useComposeRef(ref, containerRef),
    role: "tablist",
    className: classNames("".concat(prefixCls, "-nav"), className),
    style,
    onKeyDown: function onKeyDown() {
      doLockAnimation();
    }
  }, /* @__PURE__ */ reactExports.createElement(ExtraContent, {
    ref: extraLeftRef,
    position: "left",
    extra,
    prefixCls
  }), /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames(wrapPrefix, (_classNames = {}, _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: onListHolderResize
  }, /* @__PURE__ */ reactExports.createElement("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? "none" : void 0
    }
  }, tabNodes, /* @__PURE__ */ reactExports.createElement(AddButton$1, {
    ref: innerAddButtonRef,
    prefixCls,
    locale,
    editable,
    style: _objectSpread2$1(_objectSpread2$1({}, tabNodes.length === 0 ? void 0 : tabNodeStyle), {}, {
      visibility: hasDropdown ? "hidden" : null
    })
  }), /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames("".concat(prefixCls, "-ink-bar"), _defineProperty$1({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  })))), /* @__PURE__ */ reactExports.createElement(OperationNode$1, _extends({}, props, {
    removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
    ref: operationsRef,
    prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName,
    tabMoving: !!lockAnimation
  })), /* @__PURE__ */ reactExports.createElement(ExtraContent, {
    ref: extraRightRef,
    position: "right",
    extra,
    prefixCls
  })));
}
const TabNavList$1 = /* @__PURE__ */ reactExports.forwardRef(TabNavList);
var _excluded$5 = ["renderTabBar"], _excluded2$1 = ["label", "key"];
function TabNavListWrapper(_ref) {
  var renderTabBar = _ref.renderTabBar, restProps = _objectWithoutProperties(_ref, _excluded$5);
  var _React$useContext = reactExports.useContext(TabContext), tabs = _React$useContext.tabs;
  if (renderTabBar) {
    var tabNavBarProps = _objectSpread2$1(_objectSpread2$1({}, restProps), {}, {
      // Legacy support. We do not use this actually
      panes: tabs.map(function(_ref2) {
        var label = _ref2.label, key = _ref2.key, restTabProps = _objectWithoutProperties(_ref2, _excluded2$1);
        return /* @__PURE__ */ reactExports.createElement(TabPane$4, _extends({
          tab: label,
          key,
          tabKey: key
        }, restTabProps));
      })
    });
    return renderTabBar(tabNavBarProps, TabNavList$1);
  }
  return /* @__PURE__ */ reactExports.createElement(TabNavList$1, restProps);
}
function useAnimateConfig$1() {
  var animated = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: false
    };
  } else {
    mergedAnimated = _objectSpread2$1({
      inkBar: true
    }, _typeof$1(animated) === "object" ? animated : {});
  }
  if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === void 0) {
    mergedAnimated.tabPane = true;
  }
  if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
    mergedAnimated.tabPane = false;
  }
  return mergedAnimated;
}
var _excluded$4 = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName"];
var uuid = 0;
function Tabs$1(_ref, ref) {
  var _classNames;
  var id = _ref.id, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-tabs" : _ref$prefixCls, className = _ref.className, items = _ref.items, direction = _ref.direction, activeKey = _ref.activeKey, defaultActiveKey = _ref.defaultActiveKey, editable = _ref.editable, animated = _ref.animated, _ref$tabPosition = _ref.tabPosition, tabPosition = _ref$tabPosition === void 0 ? "top" : _ref$tabPosition, tabBarGutter = _ref.tabBarGutter, tabBarStyle = _ref.tabBarStyle, tabBarExtraContent = _ref.tabBarExtraContent, locale = _ref.locale, moreIcon = _ref.moreIcon, moreTransitionName = _ref.moreTransitionName, destroyInactiveTabPane = _ref.destroyInactiveTabPane, renderTabBar = _ref.renderTabBar, onChange = _ref.onChange, onTabClick = _ref.onTabClick, onTabScroll = _ref.onTabScroll, getPopupContainer = _ref.getPopupContainer, popupClassName = _ref.popupClassName, restProps = _objectWithoutProperties(_ref, _excluded$4);
  var tabs = reactExports.useMemo(function() {
    return (items || []).filter(function(item) {
      return item && _typeof$1(item) === "object" && "key" in item;
    });
  }, [items]);
  var rtl = direction === "rtl";
  var mergedAnimated = useAnimateConfig$1(animated);
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), mobile = _useState2[0], setMobile = _useState2[1];
  reactExports.useEffect(function() {
    setMobile(isMobile());
  }, []);
  var _useMergedState = useMergedState(function() {
    var _tabs$;
    return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
  }, {
    value: activeKey,
    defaultValue: defaultActiveKey
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedActiveKey = _useMergedState2[0], setMergedActiveKey = _useMergedState2[1];
  var _useState3 = reactExports.useState(function() {
    return tabs.findIndex(function(tab) {
      return tab.key === mergedActiveKey;
    });
  }), _useState4 = _slicedToArray(_useState3, 2), activeIndex = _useState4[0], setActiveIndex = _useState4[1];
  reactExports.useEffect(function() {
    var newActiveIndex = tabs.findIndex(function(tab) {
      return tab.key === mergedActiveKey;
    });
    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }
    setActiveIndex(newActiveIndex);
  }, [tabs.map(function(tab) {
    return tab.key;
  }).join("_"), mergedActiveKey, activeIndex]);
  var _useMergedState3 = useMergedState(null, {
    value: id
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedId = _useMergedState4[0], setMergedId = _useMergedState4[1];
  reactExports.useEffect(function() {
    if (!id) {
      setMergedId("rc-tabs-".concat(uuid));
      uuid += 1;
    }
  }, []);
  function onInternalTabClick(key, e2) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e2);
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange === null || onChange === void 0 ? void 0 : onChange(key);
    }
  }
  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition,
    rtl,
    mobile
  };
  var tabNavBar;
  var tabNavBarProps = _objectSpread2$1(_objectSpread2$1({}, sharedProps), {}, {
    editable,
    locale,
    moreIcon,
    moreTransitionName,
    tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: null,
    getPopupContainer,
    popupClassName
  });
  return /* @__PURE__ */ reactExports.createElement(TabContext.Provider, {
    value: {
      tabs,
      prefixCls
    }
  }, /* @__PURE__ */ reactExports.createElement("div", _extends({
    ref,
    id,
    className: classNames(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-mobile"), mobile), _defineProperty$1(_classNames, "".concat(prefixCls, "-editable"), editable), _defineProperty$1(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /* @__PURE__ */ reactExports.createElement(TabNavListWrapper, _extends({}, tabNavBarProps, {
    renderTabBar
  })), /* @__PURE__ */ reactExports.createElement(TabPanelList, _extends({
    destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}
var ForwardTabs = /* @__PURE__ */ reactExports.forwardRef(Tabs$1);
const TabPane$2 = () => null;
const TabPane$3 = TabPane$2;
const motion = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true
};
function useAnimateConfig(prefixCls) {
  let animated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inkBar: true,
    tabPane: false
  };
  let mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = Object.assign({
      inkBar: true
    }, typeof animated === "object" ? animated : {});
  }
  if (mergedAnimated.tabPane) {
    mergedAnimated.tabPaneMotion = Object.assign(Object.assign({}, motion), {
      motionName: getTransitionName$1(prefixCls, "switch")
    });
  }
  return mergedAnimated;
}
var __rest$1 = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
function filter$1(items) {
  return items.filter((item) => item);
}
function useLegacyItems$1(items, children) {
  if (items) {
    return items;
  }
  const childrenItems = toArray(children).map((node) => {
    if (/* @__PURE__ */ reactExports.isValidElement(node)) {
      const {
        key,
        props
      } = node;
      const _a = props || {}, {
        tab
      } = _a, restProps = __rest$1(_a, ["tab"]);
      const item = Object.assign(Object.assign({
        key: String(key)
      }, restProps), {
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter$1(childrenItems);
}
const genMotionStyle = (token2) => {
  const {
    componentCls,
    motionDurationSlow
  } = token2;
  return [
    {
      [componentCls]: {
        [`${componentCls}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${motionDurationSlow}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${motionDurationSlow}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [initSlideMotion(token2, "slide-up"), initSlideMotion(token2, "slide-down")]
  ];
};
const genMotionStyle$1 = genMotionStyle;
const genCardStyle = (token2) => {
  const {
    componentCls,
    tabsCardHorizontalPadding,
    tabsCardHeadBackground,
    tabsCardGutter,
    colorBorderSecondary
  } = token2;
  return {
    [`${componentCls}-card`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: 0,
          padding: tabsCardHorizontalPadding,
          background: tabsCardHeadBackground,
          border: `${token2.lineWidth}px ${token2.lineType} ${colorBorderSecondary}`,
          transition: `all ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
        },
        [`${componentCls}-tab-active`]: {
          color: token2.colorPrimary,
          background: token2.colorBgContainer
        },
        [`${componentCls}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginLeft: {
              _skip_check_: true,
              value: `${tabsCardGutter}px`
            }
          }
        }
      },
      [`&${componentCls}-top`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `${token2.borderRadiusLG}px ${token2.borderRadiusLG}px 0 0`
          },
          [`${componentCls}-tab-active`]: {
            borderBottomColor: token2.colorBgContainer
          }
        }
      },
      [`&${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `0 0 ${token2.borderRadiusLG}px ${token2.borderRadiusLG}px`
          },
          [`${componentCls}-tab-active`]: {
            borderTopColor: token2.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${componentCls}-left, &${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginTop: `${tabsCardGutter}px`
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token2.borderRadiusLG}px 0 0 ${token2.borderRadiusLG}px`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderRightColor: {
              _skip_check_: true,
              value: token2.colorBgContainer
            }
          }
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token2.borderRadiusLG}px ${token2.borderRadiusLG}px 0`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: true,
              value: token2.colorBgContainer
            }
          }
        }
      }
    }
  };
};
const genDropdownStyle = (token2) => {
  const {
    componentCls,
    tabsHoverColor,
    dropdownEdgeChildVerticalPadding
  } = token2;
  return {
    [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, resetComponent$1(token2)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: token2.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${componentCls}-dropdown-menu`]: {
        maxHeight: token2.tabsDropdownHeight,
        margin: 0,
        padding: `${dropdownEdgeChildVerticalPadding}px 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: true,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: token2.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: token2.borderRadiusLG,
        outline: "none",
        boxShadow: token2.boxShadowSecondary,
        "&-item": Object.assign(Object.assign({}, textEllipsis), {
          display: "flex",
          alignItems: "center",
          minWidth: token2.tabsDropdownWidth,
          margin: 0,
          padding: `${token2.paddingXXS}px ${token2.paddingSM}px`,
          color: token2.colorText,
          fontWeight: "normal",
          fontSize: token2.fontSize,
          lineHeight: token2.lineHeight,
          cursor: "pointer",
          transition: `all ${token2.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: true,
              value: token2.marginSM
            },
            color: token2.colorTextDescription,
            fontSize: token2.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: tabsHoverColor
            }
          },
          "&:hover": {
            background: token2.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: token2.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
};
const genPositionStyle = (token2) => {
  const {
    componentCls,
    margin,
    colorBorderSecondary
  } = token2;
  return {
    // ========================== Top & Bottom ==========================
    [`${componentCls}-top, ${componentCls}-bottom`]: {
      flexDirection: "column",
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        margin: `0 0 ${margin}px 0`,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: true,
            value: 0
          },
          left: {
            _skip_check_: true,
            value: 0
          },
          borderBottom: `${token2.lineWidth}px ${token2.lineType} ${colorBorderSecondary}`,
          content: "''"
        },
        [`${componentCls}-ink-bar`]: {
          height: token2.lineWidthBold,
          "&-animated": {
            transition: `width ${token2.motionDurationSlow}, left ${token2.motionDurationSlow},
            right ${token2.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: token2.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token2.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token2.boxShadowTabsOverflowRight
          },
          [`&${componentCls}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${componentCls}-top`]: {
      [`> ${componentCls}-nav,
        > div > ${componentCls}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${componentCls}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${componentCls}-bottom`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        marginTop: `${margin}px`,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${componentCls}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${componentCls}-left, ${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        flexDirection: "column",
        minWidth: token2.controlHeight * 1.25,
        // >>>>>>>>>>> Tab
        [`${componentCls}-tab`]: {
          padding: `${token2.paddingXS}px ${token2.paddingLG}px`,
          textAlign: "center"
        },
        [`${componentCls}-tab + ${componentCls}-tab`]: {
          margin: `${token2.margin}px 0 0 0`
        },
        // >>>>>>>>>>> Nav
        [`${componentCls}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token2.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: token2.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: token2.boxShadowTabsOverflowBottom
          },
          [`&${componentCls}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${componentCls}-ink-bar`]: {
          width: token2.lineWidthBold,
          "&-animated": {
            transition: `height ${token2.motionDurationSlow}, top ${token2.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-list, ${componentCls}-nav-operations`]: {
          flex: "1 0 auto",
          flexDirection: "column"
        }
      }
    },
    [`${componentCls}-left`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-ink-bar`]: {
          right: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        marginLeft: {
          _skip_check_: true,
          value: `-${token2.lineWidth}px`
        },
        borderLeft: {
          _skip_check_: true,
          value: `${token2.lineWidth}px ${token2.lineType} ${token2.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingLeft: {
            _skip_check_: true,
            value: token2.paddingLG
          }
        }
      }
    },
    [`${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        [`${componentCls}-ink-bar`]: {
          left: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: true,
          value: -token2.lineWidth
        },
        borderRight: {
          _skip_check_: true,
          value: `${token2.lineWidth}px ${token2.lineType} ${token2.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingRight: {
            _skip_check_: true,
            value: token2.paddingLG
          }
        }
      }
    }
  };
};
const genSizeStyle = (token2) => {
  const {
    componentCls,
    padding
  } = token2;
  return {
    [componentCls]: {
      "&-small": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token2.paddingXS}px 0`,
            fontSize: token2.fontSize
          }
        }
      },
      "&-large": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${padding}px 0`,
            fontSize: token2.fontSizeLG
          }
        }
      }
    },
    [`${componentCls}-card`]: {
      [`&${componentCls}-small`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token2.paddingXXS * 1.5}px ${padding}px`
          }
        },
        [`&${componentCls}-bottom`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `0 0 ${token2.borderRadius}px ${token2.borderRadius}px`
          }
        },
        [`&${componentCls}-top`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `${token2.borderRadius}px ${token2.borderRadius}px 0 0`
          }
        },
        [`&${componentCls}-right`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token2.borderRadius}px ${token2.borderRadius}px 0`
            }
          }
        },
        [`&${componentCls}-left`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token2.borderRadius}px 0 0 ${token2.borderRadius}px`
            }
          }
        }
      },
      [`&${componentCls}-large`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token2.paddingXS}px ${padding}px ${token2.paddingXXS * 1.5}px`
          }
        }
      }
    }
  };
};
const genTabStyle = (token2) => {
  const {
    componentCls,
    tabsActiveColor,
    tabsHoverColor,
    iconCls,
    tabsHorizontalGutter
  } = token2;
  const tabCls = `${componentCls}-tab`;
  return {
    [tabCls]: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: `${token2.paddingSM}px 0`,
      fontSize: `${token2.fontSize}px`,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      "&-btn, &-remove": Object.assign({
        "&:focus:not(:focus-visible), &:active": {
          color: tabsActiveColor
        }
      }, genFocusStyle(token2)),
      "&-btn": {
        outline: "none",
        transition: "all 0.3s"
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: true,
          value: -token2.marginXXS
        },
        marginLeft: {
          _skip_check_: true,
          value: token2.marginXS
        },
        color: token2.colorTextDescription,
        fontSize: token2.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${token2.motionDurationSlow}`,
        "&:hover": {
          color: token2.colorTextHeading
        }
      },
      "&:hover": {
        color: tabsHoverColor
      },
      [`&${tabCls}-active ${tabCls}-btn`]: {
        color: token2.colorPrimary,
        textShadow: token2.tabsActiveTextShadow
      },
      [`&${tabCls}-disabled`]: {
        color: token2.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
        "&:focus, &:active": {
          color: token2.colorTextDisabled
        }
      },
      [`& ${tabCls}-remove ${iconCls}`]: {
        margin: 0
      },
      [iconCls]: {
        marginRight: {
          _skip_check_: true,
          value: token2.marginSM
        }
      }
    },
    [`${tabCls} + ${tabCls}`]: {
      margin: {
        _skip_check_: true,
        value: `0 0 0 ${tabsHorizontalGutter}px`
      }
    }
  };
};
const genRtlStyle = (token2) => {
  const {
    componentCls,
    tabsHorizontalGutter,
    iconCls,
    tabsCardGutter
  } = token2;
  const rtlCls = `${componentCls}-rtl`;
  return {
    [rtlCls]: {
      direction: "rtl",
      [`${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: {
            _skip_check_: true,
            value: `0 0 0 ${tabsHorizontalGutter}px`
          },
          [`${componentCls}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          },
          [iconCls]: {
            marginRight: {
              _skip_check_: true,
              value: 0
            },
            marginLeft: {
              _skip_check_: true,
              value: `${token2.marginSM}px`
            }
          },
          [`${componentCls}-tab-remove`]: {
            marginRight: {
              _skip_check_: true,
              value: `${token2.marginXS}px`
            },
            marginLeft: {
              _skip_check_: true,
              value: `-${token2.marginXXS}px`
            },
            [iconCls]: {
              margin: 0
            }
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav`]: {
          order: 1
        },
        [`> ${componentCls}-content-holder`]: {
          order: 0
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav`]: {
          order: 0
        },
        [`> ${componentCls}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${componentCls}-card${componentCls}-top, &${componentCls}-card${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginRight: {
              _skip_check_: true,
              value: `${tabsCardGutter}px`
            },
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          }
        }
      }
    },
    [`${componentCls}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-menu-item`]: {
      [`${componentCls}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: true,
          value: "right"
        }
      }
    }
  };
};
const genTabsStyle = (token2) => {
  const {
    componentCls,
    tabsCardHorizontalPadding,
    tabsCardHeight,
    tabsCardGutter,
    tabsHoverColor,
    tabsActiveColor,
    colorBorderSecondary
  } = token2;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent$1(token2)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${componentCls}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${token2.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${componentCls}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${token2.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${componentCls}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${componentCls}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${componentCls}-nav-more`]: {
          position: "relative",
          padding: tabsCardHorizontalPadding,
          background: "transparent",
          border: 0,
          color: token2.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: true,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token2.controlHeightLG / 8,
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${componentCls}-nav-add`]: Object.assign({
          minWidth: `${tabsCardHeight}px`,
          marginLeft: {
            _skip_check_: true,
            value: `${tabsCardGutter}px`
          },
          padding: `0 ${token2.paddingXS}px`,
          background: "transparent",
          border: `${token2.lineWidth}px ${token2.lineType} ${colorBorderSecondary}`,
          borderRadius: `${token2.borderRadiusLG}px ${token2.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: token2.colorText,
          transition: `all ${token2.motionDurationSlow} ${token2.motionEaseInOut}`,
          "&:hover": {
            color: tabsHoverColor
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: tabsActiveColor
          }
        }, genFocusStyle(token2))
      },
      [`${componentCls}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${componentCls}-ink-bar`]: {
        position: "absolute",
        background: token2.colorPrimary,
        pointerEvents: "none"
      }
    }), genTabStyle(token2)), {
      // =========================== TabPanes ===========================
      [`${componentCls}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${componentCls}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${componentCls}-tabpane`]: {
        outline: "none",
        "&-hidden": {
          display: "none"
        }
      }
    }),
    [`${componentCls}-centered`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-nav-wrap`]: {
          [`&:not([class*='${componentCls}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
};
const useStyle$a = genComponentStyleHook("Tabs", (token2) => {
  const tabsCardHeight = token2.controlHeightLG;
  const tabsToken = merge(token2, {
    tabsHoverColor: token2.colorPrimaryHover,
    tabsActiveColor: token2.colorPrimaryActive,
    tabsCardHorizontalPadding: `${(tabsCardHeight - Math.round(token2.fontSize * token2.lineHeight)) / 2 - token2.lineWidth}px ${token2.padding}px`,
    tabsCardHeight,
    tabsCardGutter: token2.marginXXS / 2,
    tabsHorizontalGutter: 32,
    tabsCardHeadBackground: token2.colorFillAlter,
    dropdownEdgeChildVerticalPadding: token2.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120
  });
  return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), genMotionStyle$1(tabsToken)];
}, (token2) => ({
  zIndexPopup: token2.zIndexPopupBase + 50
}));
var __rest = globalThis && globalThis.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
function Tabs(_a) {
  var {
    type,
    className,
    rootClassName,
    size: customSize,
    onEdit,
    hideAdd,
    centered,
    addIcon,
    popupClassName,
    children,
    items,
    animated
  } = _a, props = __rest(_a, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "popupClassName", "children", "items", "animated"]);
  const {
    prefixCls: customizePrefixCls,
    moreIcon = /* @__PURE__ */ reactExports.createElement(EllipsisOutlined$1, null)
  } = props;
  const {
    direction,
    getPrefixCls,
    getPopupContainer
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tabs", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$a(prefixCls);
  let editable;
  if (type === "editable-card") {
    editable = {
      onEdit: (editType, _ref) => {
        let {
          key,
          event
        } = _ref;
        onEdit === null || onEdit === void 0 ? void 0 : onEdit(editType === "add" ? event : key, editType);
      },
      removeIcon: /* @__PURE__ */ reactExports.createElement(CloseOutlined, null),
      addIcon: addIcon || /* @__PURE__ */ reactExports.createElement(PlusOutlined$1, null),
      showAdd: hideAdd !== true
    };
  }
  const rootPrefixCls = getPrefixCls();
  const mergedItems = useLegacyItems$1(items, children);
  const mergedAnimated = useAnimateConfig(prefixCls, animated);
  const size = useSize(customSize);
  return wrapSSR(/* @__PURE__ */ reactExports.createElement(ForwardTabs, Object.assign({
    direction,
    getPopupContainer,
    moreTransitionName: `${rootPrefixCls}-slide-up`
  }, props, {
    items: mergedItems,
    className: classNames({
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-card`]: ["card", "editable-card"].includes(type),
      [`${prefixCls}-editable-card`]: type === "editable-card",
      [`${prefixCls}-centered`]: centered
    }, className, rootClassName, hashId),
    popupClassName: classNames(popupClassName, hashId),
    editable,
    moreIcon,
    prefixCls,
    animated: mergedAnimated
  })));
}
Tabs.TabPane = TabPane$3;
function useBreakpoint$1() {
  return useBreakpoint$2();
}
const Grid = {
  useBreakpoint: useBreakpoint$1
};
var QuestionCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, "name": "question-circle", "theme": "outlined" };
const QuestionCircleOutlinedSvg = QuestionCircleOutlined$2;
var QuestionCircleOutlined = function QuestionCircleOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon, _extends({}, props, {
    ref,
    icon: QuestionCircleOutlinedSvg
  }));
};
const QuestionCircleOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(QuestionCircleOutlined);
var InfoCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, "name": "info-circle", "theme": "outlined" };
const InfoCircleOutlinedSvg = InfoCircleOutlined$2;
var InfoCircleOutlined = function InfoCircleOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon, _extends({}, props, {
    ref,
    icon: InfoCircleOutlinedSvg
  }));
};
const InfoCircleOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(InfoCircleOutlined);
const StatisticNumber = (props) => {
  const {
    value,
    formatter,
    precision,
    decimalSeparator,
    groupSeparator = "",
    prefixCls
  } = props;
  let valueNode;
  if (typeof formatter === "function") {
    valueNode = formatter(value);
  } else {
    const val = String(value);
    const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
    if (!cells || val === "-") {
      valueNode = val;
    } else {
      const negative = cells[1];
      let int = cells[2] || "0";
      let decimal = cells[4] || "";
      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
      if (typeof precision === "number") {
        decimal = decimal.padEnd(precision, "0").slice(0, precision > 0 ? precision : 0);
      }
      if (decimal) {
        decimal = `${decimalSeparator}${decimal}`;
      }
      valueNode = [/* @__PURE__ */ reactExports.createElement("span", {
        key: "int",
        className: `${prefixCls}-content-value-int`
      }, negative, int), decimal && /* @__PURE__ */ reactExports.createElement("span", {
        key: "decimal",
        className: `${prefixCls}-content-value-decimal`
      }, decimal)];
    }
  }
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-content-value`
  }, valueNode);
};
const StatisticNumber$1 = StatisticNumber;
const genStatisticStyle = (token2) => {
  const {
    componentCls,
    marginXXS,
    padding,
    colorTextDescription,
    titleFontSize,
    colorTextHeading,
    contentFontSize,
    fontFamily
  } = token2;
  return {
    [`${componentCls}`]: Object.assign(Object.assign({}, resetComponent$1(token2)), {
      [`${componentCls}-title`]: {
        marginBottom: marginXXS,
        color: colorTextDescription,
        fontSize: titleFontSize
      },
      [`${componentCls}-skeleton`]: {
        paddingTop: padding
      },
      [`${componentCls}-content`]: {
        color: colorTextHeading,
        fontSize: contentFontSize,
        fontFamily,
        [`${componentCls}-content-value`]: {
          display: "inline-block",
          direction: "ltr"
        },
        [`${componentCls}-content-prefix, ${componentCls}-content-suffix`]: {
          display: "inline-block"
        },
        [`${componentCls}-content-prefix`]: {
          marginInlineEnd: marginXXS
        },
        [`${componentCls}-content-suffix`]: {
          marginInlineStart: marginXXS
        }
      }
    })
  };
};
const useStyle$9 = genComponentStyleHook("Statistic", (token2) => {
  const statisticToken = merge(token2, {});
  return [genStatisticStyle(statisticToken)];
}, (token2) => {
  const {
    fontSizeHeading3,
    fontSize
  } = token2;
  return {
    titleFontSize: fontSize,
    contentFontSize: fontSizeHeading3
  };
});
const timeUnits = [
  ["Y", 1e3 * 60 * 60 * 24 * 365],
  ["M", 1e3 * 60 * 60 * 24 * 30],
  ["D", 1e3 * 60 * 60 * 24],
  ["H", 1e3 * 60 * 60],
  ["m", 1e3 * 60],
  ["s", 1e3],
  ["S", 1]
  // million seconds
];
function formatTimeStr(duration, format) {
  let leftDuration = duration;
  const escapeRegex = /\[[^\]]*]/g;
  const keepList = (format.match(escapeRegex) || []).map((str) => str.slice(1, -1));
  const templateText = format.replace(escapeRegex, "[]");
  const replacedText = timeUnits.reduce((current, _ref) => {
    let [name2, unit] = _ref;
    if (current.includes(name2)) {
      const value = Math.floor(leftDuration / unit);
      leftDuration -= value * unit;
      return current.replace(new RegExp(`${name2}+`, "g"), (match) => {
        const len = match.length;
        return value.toString().padStart(len, "0");
      });
    }
    return current;
  }, templateText);
  let index2 = 0;
  return replacedText.replace(escapeRegex, () => {
    const match = keepList[index2];
    index2 += 1;
    return match;
  });
}
function formatCountdown(value, config) {
  const {
    format = ""
  } = config;
  const target = new Date(value).getTime();
  const current = Date.now();
  const diff = Math.max(target - current, 0);
  return formatTimeStr(diff, format);
}
const REFRESH_INTERVAL = 1e3 / 30;
function getTime(value) {
  return new Date(value).getTime();
}
const Countdown = (props) => {
  const {
    value,
    format = "HH:mm:ss",
    onChange,
    onFinish
  } = props;
  const forceUpdate = useForceUpdate();
  const countdown = reactExports.useRef(null);
  const stopTimer = () => {
    onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    if (countdown.current) {
      clearInterval(countdown.current);
      countdown.current = null;
    }
  };
  const syncTimer = () => {
    const timestamp = getTime(value);
    if (timestamp >= Date.now()) {
      countdown.current = setInterval(() => {
        forceUpdate();
        onChange === null || onChange === void 0 ? void 0 : onChange(timestamp - Date.now());
        if (timestamp < Date.now()) {
          stopTimer();
        }
      }, REFRESH_INTERVAL);
    }
  };
  reactExports.useEffect(() => {
    syncTimer();
    return () => {
      if (countdown.current) {
        clearInterval(countdown.current);
        countdown.current = null;
      }
    };
  }, [value]);
  const formatter = (formatValue, config) => formatCountdown(formatValue, Object.assign(Object.assign({}, config), {
    format
  }));
  const valueRender = (node) => cloneElement(node, {
    title: void 0
  });
  return /* @__PURE__ */ reactExports.createElement(Statistic$4, Object.assign({}, props, {
    valueRender,
    formatter
  }));
};
const Countdown$1 = /* @__PURE__ */ reactExports.memo(Countdown);
const Statistic$3 = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    valueStyle,
    value = 0,
    title,
    valueRender,
    prefix,
    suffix,
    loading = false,
    onMouseEnter,
    onMouseLeave,
    decimalSeparator = ".",
    groupSeparator = ","
  } = props;
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("statistic", customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$9(prefixCls);
  const valueNode = /* @__PURE__ */ reactExports.createElement(StatisticNumber$1, Object.assign({
    decimalSeparator,
    groupSeparator,
    prefixCls
  }, props, {
    value
  }));
  const cls = classNames(prefixCls, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId);
  return wrapSSR(/* @__PURE__ */ reactExports.createElement("div", {
    className: cls,
    style,
    onMouseEnter,
    onMouseLeave
  }, title && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-title`
  }, title), /* @__PURE__ */ reactExports.createElement(Skeleton$1, {
    paragraph: false,
    loading,
    className: `${prefixCls}-skeleton`
  }, /* @__PURE__ */ reactExports.createElement("div", {
    style: valueStyle,
    className: `${prefixCls}-content`
  }, prefix && /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-content-prefix`
  }, prefix), valueRender ? valueRender(valueNode) : valueNode, suffix && /* @__PURE__ */ reactExports.createElement("span", {
    className: `${prefixCls}-content-suffix`
  }, suffix)))));
};
Statistic$3.Countdown = Countdown$1;
const Statistic$4 = Statistic$3;
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e = reactExports;
function h(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var k = "function" === typeof Object.is ? Object.is : h, l = e.useState, m = e.useEffect, n = e.useLayoutEffect, p = e.useDebugValue;
function q(a, b) {
  var d = b(), f = l({ inst: { value: d, getSnapshot: b } }), c = f[0].inst, g = f[1];
  n(function() {
    c.value = d;
    c.getSnapshot = b;
    r(c) && g({ inst: c });
  }, [a, d, b]);
  m(function() {
    r(c) && g({ inst: c });
    return a(function() {
      r(c) && g({ inst: c });
    });
  }, [a]);
  p(d);
  return d;
}
function r(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var d = b();
    return !k(a, d);
  } catch (f) {
    return true;
  }
}
function t(a, b) {
  return b();
}
var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
const SWRGlobalState = /* @__PURE__ */ new WeakMap();
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const noop = () => {
};
const UNDEFINED = (
  /*#__NOINLINE__*/
  noop()
);
const OBJECT = Object;
const isUndefined = (v) => v === UNDEFINED;
const isFunction = (v) => typeof v == "function";
const mergeObjects = (a, b) => ({
  ...a,
  ...b
});
const STR_UNDEFINED = "undefined";
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const createCacheHelper = (cache2, key) => {
  const state = SWRGlobalState.get(cache2);
  return [
    // Getter
    () => !isUndefined(key) && cache2.get(key) || EMPTY_CACHE,
    // Setter
    (info) => {
      if (!isUndefined(key)) {
        const prev = cache2.get(key);
        if (!(key in INITIAL_CACHE)) {
          INITIAL_CACHE[key] = prev;
        }
        state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
      }
    },
    // Subscriber
    state[6],
    // Get server cache snapshot
    () => {
      if (!isUndefined(key)) {
        if (key in INITIAL_CACHE)
          return INITIAL_CACHE[key];
      }
      return !isUndefined(key) && cache2.get(key) || EMPTY_CACHE;
    }
  ];
};
const table = /* @__PURE__ */ new WeakMap();
let counter = 0;
const stableHash = (arg) => {
  const type = typeof arg;
  const constructor = arg && arg.constructor;
  const isDate = constructor == Date;
  let result;
  let index2;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index2 = 0; index2 < arg.length; index2++) {
        result += stableHash(arg[index2]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      const keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index2 = keys.pop())) {
        if (!isUndefined(arg[index2])) {
          result += index2 + ":" + stableHash(arg[index2]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
let online = true;
const isOnline = () => online;
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  noop,
  noop
];
const isVisible = () => {
  const visibilityState = isDocumentDefined && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
const initFocus = (callback) => {
  if (isDocumentDefined) {
    document.addEventListener("visibilitychange", callback);
  }
  onWindowEvent("focus", callback);
  return () => {
    if (isDocumentDefined) {
      document.removeEventListener("visibilitychange", callback);
    }
    offWindowEvent("focus", callback);
  };
};
const initReconnect = (callback) => {
  const onOnline = () => {
    online = true;
    callback();
  };
  const onOffline = () => {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return () => {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
const preset = {
  isOnline,
  isVisible
};
const defaultConfigOptions = {
  initFocus,
  initReconnect
};
!React.useId;
const IS_SERVER = !isWindowDefined || "Deno" in window;
const navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
const slowConnection = !IS_SERVER && navigatorConnection && ([
  "slow-2g",
  "2g"
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
const serialize = (key) => {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  const args = key;
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  return [
    key,
    args
  ];
};
let __timestamp = 0;
const getTimestamp = () => ++__timestamp;
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
async function internalMutate(...args) {
  const [cache2, _key, _data, _opts] = args;
  const options = mergeObjects({
    populateCache: true,
    throwOnError: true
  }, typeof _opts === "boolean" ? {
    revalidate: _opts
  } : _opts || {});
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const revalidate = options.revalidate !== false;
  const rollbackOnError = (error) => {
    return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache2.keys();
    for (let keyIt = it.next(); !keyIt.done; keyIt = it.next()) {
      const key = keyIt.value;
      if (
        // Skip the special useSWRInfinite and useSWRSubscription keys.
        !/^\$(inf|sub)\$/.test(key) && keyFilter(cache2.get(key)._k)
      ) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    const [key] = serialize(_k);
    if (!key)
      return;
    const [get2, set] = createCacheHelper(cache2, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
    const revalidators = EVENT_REVALIDATORS[key];
    const startRevalidate = () => {
      if (revalidate) {
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get2().data);
        }
      }
      return get2().data;
    };
    if (args.length < 3) {
      return startRevalidate();
    }
    let data = _data;
    let error;
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [
      beforeMutationTs,
      0
    ];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get2();
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData) ? displayedData : currentData;
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData) ? optimisticData(committedData) : optimisticData;
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      try {
        data = data(committedData);
      } catch (err) {
        error = err;
      }
    }
    if (data && isFunction(data.then)) {
      data = await data.catch((err) => {
        error = err;
      });
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error)
          throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        populateCache = true;
        data = committedData;
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    if (populateCache) {
      if (!error) {
        if (isFunction(populateCache)) {
          data = populateCache(data, committedData);
        }
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    MUTATION[key][1] = getTimestamp();
    const res = await startRevalidate();
    set({
      _c: UNDEFINED
    });
    if (error) {
      if (throwOnError)
        throw error;
      return;
    }
    return populateCache ? res : data;
  }
}
const revalidateAllKeys = (revalidators, type) => {
  for (const key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
const initCache = (provider, options) => {
  if (!SWRGlobalState.has(provider)) {
    const opts = mergeObjects(defaultConfigOptions, options);
    const EVENT_REVALIDATORS = {};
    const mutate2 = internalMutate.bind(UNDEFINED, provider);
    let unmount = noop;
    const subscriptions = {};
    const subscribe = (key, callback) => {
      const subs = subscriptions[key] || [];
      subscriptions[key] = subs;
      subs.push(callback);
      return () => subs.splice(subs.indexOf(callback), 1);
    };
    const setter = (key, value, prev) => {
      provider.set(key, value);
      const subs = subscriptions[key];
      if (subs) {
        for (const fn of subs) {
          fn(value, prev);
        }
      }
    };
    const initProvider = () => {
      if (!SWRGlobalState.has(provider)) {
        SWRGlobalState.set(provider, [
          EVENT_REVALIDATORS,
          {},
          {},
          {},
          mutate2,
          setter,
          subscribe
        ]);
        if (!IS_SERVER) {
          const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
          const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
          unmount = () => {
            releaseFocus && releaseFocus();
            releaseReconnect && releaseReconnect();
            SWRGlobalState.delete(provider);
          };
        }
      }
    };
    initProvider();
    return [
      provider,
      mutate2,
      initProvider,
      unmount
    ];
  }
  return [
    provider,
    SWRGlobalState.get(provider)[4]
  ];
};
const onErrorRetry = (_, __, config, revalidate, opts) => {
  const maxRetryCount = config.errorRetryCount;
  const currentRetryCount = opts.retryCount;
  const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
const compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
const [cache, mutate] = initCache(/* @__PURE__ */ new Map());
mergeObjects(
  {
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    // providers
    compare,
    isPaused: () => false,
    cache,
    mutate,
    fallback: {}
  },
  // use web preset by default
  preset
);
reactExports.createContext({});
const enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = () => {
  if (enableDevtools) {
    window.__SWR_DEVTOOLS_REACT__ = React;
  }
};
const middleware = (useSWRNext) => (key_, fetcher_, config) => {
  const fetcher = fetcher_ && ((...args) => {
    const [key] = serialize(key_);
    const [, , , PRELOAD] = SWRGlobalState.get(cache);
    const req = PRELOAD[key];
    if (req) {
      delete PRELOAD[key];
      return req;
    }
    return fetcher_(...args);
  });
  return useSWRNext(key_, fetcher, config);
};
use.concat(middleware);
setupDevTools();
function _createForOfIteratorHelper(o2, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (!it) {
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it)
        o2 = it;
      var i = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n2() {
          if (i >= o2.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o2[i++]
          };
        },
        e: function e2(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s() {
      it = it.call(o2);
    },
    n: function n2() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e2(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
const zhCN = {
  moneySymbol: "￥",
  deleteThisLine: "删除此行",
  copyThisLine: "复制此行",
  form: {
    lightFilter: {
      more: "更多筛选",
      clear: "清除",
      confirm: "确认",
      itemUnit: "项"
    }
  },
  tableForm: {
    search: "查询",
    reset: "重置",
    submit: "提交",
    collapsed: "展开",
    expand: "收起",
    inputPlaceholder: "请输入",
    selectPlaceholder: "请选择"
  },
  alert: {
    clear: "取消选择",
    selected: "已选择",
    item: "项"
  },
  pagination: {
    total: {
      range: "第",
      total: "条/总共",
      item: "条"
    }
  },
  tableToolBar: {
    leftPin: "固定在列首",
    rightPin: "固定在列尾",
    noPin: "不固定",
    leftFixedTitle: "固定在左侧",
    rightFixedTitle: "固定在右侧",
    noFixedTitle: "不固定",
    reset: "重置",
    columnDisplay: "列展示",
    columnSetting: "列设置",
    fullScreen: "全屏",
    exitFullScreen: "退出全屏",
    reload: "刷新",
    density: "密度",
    densityDefault: "正常",
    densityLarger: "默认",
    densityMiddle: "中等",
    densitySmall: "紧凑"
  },
  stepsForm: {
    next: "下一步",
    prev: "上一步",
    submit: "提交"
  },
  loginForm: {
    submitText: "登录"
  },
  editableTable: {
    onlyOneLineEditor: "只能同时编辑一行",
    action: {
      save: "保存",
      cancel: "取消",
      delete: "删除",
      add: "添加一行数据"
    }
  },
  switch: {
    open: "打开",
    close: "关闭"
  }
};
function get(source, path2, defaultValue) {
  var paths = path2.replace(/\[(\d+)\]/g, ".$1").split(".");
  var result = source;
  var message = defaultValue;
  var _iterator = _createForOfIteratorHelper(paths), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var p2 = _step.value;
      message = Object(result)[p2];
      result = Object(result)[p2];
      if (message === void 0) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return message;
}
var createIntl = function createIntl2(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale
  };
};
var zhCNIntl = createIntl("zh_CN", zhCN);
var _theme$defaultAlgorit;
var defaultToken = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911",
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff7875",
  colorInfo: "#1677ff",
  colorTextBase: "#000",
  colorBgBase: "#fff",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  fontSize: 14,
  lineWidth: 1,
  lineType: "solid",
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInQuint: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  borderRadius: 4,
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  controlHeight: 32,
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  opacityImage: 1,
  wireframe: false,
  "blue-1": "#e6f4ff",
  "blue-2": "#bae0ff",
  "blue-3": "#91caff",
  "blue-4": "#69b1ff",
  "blue-5": "#4096ff",
  "blue-6": "#1677ff",
  "blue-7": "#0958d9",
  "blue-8": "#003eb3",
  "blue-9": "#002c8c",
  "blue-10": "#001d66",
  "purple-1": "#f9f0ff",
  "purple-2": "#efdbff",
  "purple-3": "#d3adf7",
  "purple-4": "#b37feb",
  "purple-5": "#9254de",
  "purple-6": "#722ed1",
  "purple-7": "#531dab",
  "purple-8": "#391085",
  "purple-9": "#22075e",
  "purple-10": "#120338",
  "cyan-1": "#e6fffb",
  "cyan-2": "#b5f5ec",
  "cyan-3": "#87e8de",
  "cyan-4": "#5cdbd3",
  "cyan-5": "#36cfc9",
  "cyan-6": "#13c2c2",
  "cyan-7": "#08979c",
  "cyan-8": "#006d75",
  "cyan-9": "#00474f",
  "cyan-10": "#002329",
  "green-1": "#f6ffed",
  "green-2": "#d9f7be",
  "green-3": "#b7eb8f",
  "green-4": "#95de64",
  "green-5": "#73d13d",
  "green-6": "#52c41a",
  "green-7": "#389e0d",
  "green-8": "#237804",
  "green-9": "#135200",
  "green-10": "#092b00",
  "magenta-1": "#fff0f6",
  "magenta-2": "#ffd6e7",
  "magenta-3": "#ffadd2",
  "magenta-4": "#ff85c0",
  "magenta-5": "#f759ab",
  "magenta-6": "#eb2f96",
  "magenta-7": "#c41d7f",
  "magenta-8": "#9e1068",
  "magenta-9": "#780650",
  "magenta-10": "#520339",
  "pink-1": "#fff0f6",
  "pink-2": "#ffd6e7",
  "pink-3": "#ffadd2",
  "pink-4": "#ff85c0",
  "pink-5": "#f759ab",
  "pink-6": "#eb2f96",
  "pink-7": "#c41d7f",
  "pink-8": "#9e1068",
  "pink-9": "#780650",
  "pink-10": "#520339",
  "red-1": "#fff1f0",
  "red-2": "#ffccc7",
  "red-3": "#ffa39e",
  "red-4": "#ff7875",
  "red-5": "#ff4d4f",
  "red-6": "#f5222d",
  "red-7": "#cf1322",
  "red-8": "#a8071a",
  "red-9": "#820014",
  "red-10": "#5c0011",
  "orange-1": "#fff7e6",
  "orange-2": "#ffe7ba",
  "orange-3": "#ffd591",
  "orange-4": "#ffc069",
  "orange-5": "#ffa940",
  "orange-6": "#fa8c16",
  "orange-7": "#d46b08",
  "orange-8": "#ad4e00",
  "orange-9": "#873800",
  "orange-10": "#612500",
  "yellow-1": "#feffe6",
  "yellow-2": "#ffffb8",
  "yellow-3": "#fffb8f",
  "yellow-4": "#fff566",
  "yellow-5": "#ffec3d",
  "yellow-6": "#fadb14",
  "yellow-7": "#d4b106",
  "yellow-8": "#ad8b00",
  "yellow-9": "#876800",
  "yellow-10": "#614700",
  "volcano-1": "#fff2e8",
  "volcano-2": "#ffd8bf",
  "volcano-3": "#ffbb96",
  "volcano-4": "#ff9c6e",
  "volcano-5": "#ff7a45",
  "volcano-6": "#fa541c",
  "volcano-7": "#d4380d",
  "volcano-8": "#ad2102",
  "volcano-9": "#871400",
  "volcano-10": "#610b00",
  "geekblue-1": "#f0f5ff",
  "geekblue-2": "#d6e4ff",
  "geekblue-3": "#adc6ff",
  "geekblue-4": "#85a5ff",
  "geekblue-5": "#597ef7",
  "geekblue-6": "#2f54eb",
  "geekblue-7": "#1d39c4",
  "geekblue-8": "#10239e",
  "geekblue-9": "#061178",
  "geekblue-10": "#030852",
  "gold-1": "#fffbe6",
  "gold-2": "#fff1b8",
  "gold-3": "#ffe58f",
  "gold-4": "#ffd666",
  "gold-5": "#ffc53d",
  "gold-6": "#faad14",
  "gold-7": "#d48806",
  "gold-8": "#ad6800",
  "gold-9": "#874d00",
  "gold-10": "#613400",
  "lime-1": "#fcffe6",
  "lime-2": "#f4ffb8",
  "lime-3": "#eaff8f",
  "lime-4": "#d3f261",
  "lime-5": "#bae637",
  "lime-6": "#a0d911",
  "lime-7": "#7cb305",
  "lime-8": "#5b8c00",
  "lime-9": "#3f6600",
  "lime-10": "#254000",
  colorText: "rgba(0, 0, 0, 0.88)",
  colorTextSecondary: "rgba(0, 0, 0, 0.65)",
  colorTextTertiary: "rgba(0, 0, 0, 0.45)",
  colorTextQuaternary: "rgba(0, 0, 0, 0.25)",
  colorFill: "rgba(0, 0, 0, 0.15)",
  colorFillSecondary: "rgba(0, 0, 0, 0.06)",
  colorFillTertiary: "rgba(0, 0, 0, 0.04)",
  colorFillQuaternary: "rgba(0, 0, 0, 0.02)",
  colorBgLayout: "hsl(220,23%,97%)",
  colorBgContainer: "#ffffff",
  colorBgElevated: "#ffffff",
  colorBgSpotlight: "rgba(0, 0, 0, 0.85)",
  colorBorder: "#d9d9d9",
  colorBorderSecondary: "#f0f0f0",
  colorPrimaryBg: "#e6f4ff",
  colorPrimaryBgHover: "#bae0ff",
  colorPrimaryBorder: "#91caff",
  colorPrimaryBorderHover: "#69b1ff",
  colorPrimaryHover: "#4096ff",
  colorPrimaryActive: "#0958d9",
  colorPrimaryTextHover: "#4096ff",
  colorPrimaryText: "#1677ff",
  colorPrimaryTextActive: "#0958d9",
  colorSuccessBg: "#f6ffed",
  colorSuccessBgHover: "#d9f7be",
  colorSuccessBorder: "#b7eb8f",
  colorSuccessBorderHover: "#95de64",
  colorSuccessHover: "#95de64",
  colorSuccessActive: "#389e0d",
  colorSuccessTextHover: "#73d13d",
  colorSuccessText: "#52c41a",
  colorSuccessTextActive: "#389e0d",
  colorErrorBg: "#fff2f0",
  colorErrorBgHover: "#fff1f0",
  colorErrorBorder: "#ffccc7",
  colorErrorBorderHover: "#ffa39e",
  colorErrorHover: "#ffa39e",
  colorErrorActive: "#d9363e",
  colorErrorTextHover: "#ff7875",
  colorErrorText: "#ff4d4f",
  colorErrorTextActive: "#d9363e",
  colorWarningBg: "#fffbe6",
  colorWarningBgHover: "#fff1b8",
  colorWarningBorder: "#ffe58f",
  colorWarningBorderHover: "#ffd666",
  colorWarningHover: "#ffd666",
  colorWarningActive: "#d48806",
  colorWarningTextHover: "#ffc53d",
  colorWarningText: "#faad14",
  colorWarningTextActive: "#d48806",
  colorInfoBg: "#e6f4ff",
  colorInfoBgHover: "#bae0ff",
  colorInfoBorder: "#91caff",
  colorInfoBorderHover: "#69b1ff",
  colorInfoHover: "#69b1ff",
  colorInfoActive: "#0958d9",
  colorInfoTextHover: "#4096ff",
  colorInfoText: "#1677ff",
  colorInfoTextActive: "#0958d9",
  colorBgMask: "rgba(0, 0, 0, 0.45)",
  colorWhite: "#fff",
  sizeXXL: 48,
  sizeXL: 32,
  sizeLG: 24,
  sizeMD: 20,
  sizeMS: 16,
  size: 16,
  sizeSM: 12,
  sizeXS: 8,
  sizeXXS: 4,
  controlHeightSM: 24,
  controlHeightXS: 16,
  controlHeightLG: 40,
  motionDurationFast: "0.1s",
  motionDurationMid: "0.2s",
  motionDurationSlow: "0.3s",
  fontSizes: [12, 14, 16, 20, 24, 30, 38, 46, 56, 68],
  lineHeights: [1.6666666666666667, 1.5714285714285714, 1.5, 1.4, 1.3333333333333333, 1.2666666666666666, 1.2105263157894737, 1.173913043478261, 1.1428571428571428, 1.1176470588235294],
  lineWidthBold: 2,
  borderRadiusXS: 1,
  borderRadiusSM: 4,
  borderRadiusLG: 8,
  borderRadiusOuter: 4,
  colorLink: "#1677ff",
  colorLinkHover: "#69b1ff",
  colorLinkActive: "#0958d9",
  colorFillContent: "rgba(0, 0, 0, 0.06)",
  colorFillContentHover: "rgba(0, 0, 0, 0.15)",
  colorFillAlter: "rgba(0, 0, 0, 0.02)",
  colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
  colorBorderBg: "#ffffff",
  colorSplit: "rgba(5, 5, 5, 0.06)",
  colorTextPlaceholder: "rgba(0, 0, 0, 0.25)",
  colorTextDisabled: "rgba(0, 0, 0, 0.25)",
  colorTextHeading: "rgba(0, 0, 0, 0.88)",
  colorTextLabel: "rgba(0, 0, 0, 0.65)",
  colorTextDescription: "rgba(0, 0, 0, 0.45)",
  colorTextLightSolid: "#fff",
  colorHighlight: "#ff7875",
  colorBgTextHover: "rgba(0, 0, 0, 0.06)",
  colorBgTextActive: "rgba(0, 0, 0, 0.15)",
  colorIcon: "rgba(0, 0, 0, 0.45)",
  colorIconHover: "rgba(0, 0, 0, 0.88)",
  colorErrorOutline: "rgba(255, 38, 5, 0.06)",
  colorWarningOutline: "rgba(255, 215, 5, 0.1)",
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  fontSizeIcon: 12,
  lineHeight: 1.5714285714285714,
  lineHeightLG: 1.5,
  lineHeightSM: 1.6666666666666667,
  lineHeightHeading1: 1.2105263157894737,
  lineHeightHeading2: 1.2666666666666666,
  lineHeightHeading3: 1.3333333333333333,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  controlOutlineWidth: 2,
  controlInteractiveSize: 16,
  controlItemBgHover: "rgba(0, 0, 0, 0.04)",
  controlItemBgActive: "#e6f4ff",
  controlItemBgActiveHover: "#bae0ff",
  controlItemBgActiveDisabled: "rgba(0, 0, 0, 0.15)",
  controlTmpOutline: "rgba(0, 0, 0, 0.02)",
  controlOutline: "rgba(5, 145, 255, 0.1)",
  fontWeightStrong: 600,
  opacityLoading: 0.65,
  linkDecoration: "none",
  linkHoverDecoration: "none",
  linkFocusDecoration: "none",
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 8,
  paddingXXS: 4,
  paddingXS: 8,
  paddingSM: 12,
  padding: 16,
  paddingMD: 20,
  paddingLG: 24,
  paddingXL: 32,
  paddingContentHorizontalLG: 24,
  paddingContentVerticalLG: 16,
  paddingContentHorizontal: 16,
  paddingContentVertical: 12,
  paddingContentHorizontalSM: 16,
  paddingContentVerticalSM: 8,
  marginXXS: 4,
  marginXS: 8,
  marginSM: 12,
  margin: 16,
  marginMD: 20,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)",
  boxShadowSecondary: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  screenXS: 480,
  screenXSMin: 480,
  screenXSMax: 479,
  screenSM: 576,
  screenSMMin: 576,
  screenSMMax: 575,
  screenMD: 768,
  screenMDMin: 768,
  screenMDMax: 767,
  screenLG: 992,
  screenLGMin: 992,
  screenLGMax: 991,
  screenXL: 1200,
  screenXLMin: 1200,
  screenXLMax: 1199,
  screenXXL: 1600,
  screenXXLMin: 1600,
  screenXXLMax: 1599,
  boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
  boxShadowCard: "0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)",
  boxShadowDrawerRight: "-6px 0 16px 0 rgba(0, 0, 0, 0.08),-3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerLeft: "6px 0 16px 0 rgba(0, 0, 0, 0.08),3px 0 6px -4px rgba(0, 0, 0, 0.12),9px 0 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerUp: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerDown: "0 -6px 16px 0 rgba(0, 0, 0, 0.08),0 -3px 6px -4px rgba(0, 0, 0, 0.12),0 -9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
  _tokenKey: "19w80ff",
  _hashId: "css-dev-only-do-not-override-i2zu9q"
};
var hashCode = function hashCode2(str) {
  var seed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
var emptyTheme = createTheme(function(token2) {
  return token2;
});
var token = {
  theme: emptyTheme,
  token: _objectSpread2$1(_objectSpread2$1({}, defaultToken), theme === null || theme === void 0 ? void 0 : (_theme$defaultAlgorit = theme.defaultAlgorithm) === null || _theme$defaultAlgorit === void 0 ? void 0 : _theme$defaultAlgorit.call(theme, theme === null || theme === void 0 ? void 0 : theme.defaultSeed)),
  hashId: "pro-".concat(hashCode(JSON.stringify(defaultToken)))
};
var useToken$1 = function useToken() {
  return token;
};
const batToken = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defaultToken,
  emptyTheme,
  hashCode,
  token,
  useToken: useToken$1
}, Symbol.toStringTag, { value: "Module" }));
var genTheme = function genTheme2() {
  if (typeof theme === "undefined" || !theme)
    return batToken;
  return theme;
};
var proTheme = genTheme();
var useToken2 = proTheme.useToken;
var resetComponent = function resetComponent2(token2) {
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: token2.colorText,
    fontSize: token2.fontSize,
    lineHeight: token2.lineHeight,
    listStyle: "none"
  };
};
function useStyle$8(componentName, styleFn) {
  var _token$proComponentsC;
  var _useContext = reactExports.useContext(ProProvider), _useContext$token = _useContext.token, token2 = _useContext$token === void 0 ? {} : _useContext$token;
  var _useContext2 = reactExports.useContext(ProProvider), _useContext2$hashId = _useContext2.hashId, hashId = _useContext2$hashId === void 0 ? "" : _useContext2$hashId, provideTheme = _useContext2.theme;
  var _useToken = useToken2(), antdToken = _useToken.token;
  var _useContext3 = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext3.getPrefixCls;
  if (!token2.layout) {
    token2 = _objectSpread2$1({}, antdToken);
  }
  token2.proComponentsCls = (_token$proComponentsC = token2.proComponentsCls) !== null && _token$proComponentsC !== void 0 ? _token$proComponentsC : ".".concat(getPrefixCls("pro"));
  token2.antCls = ".".concat(getPrefixCls());
  return {
    wrapSSR: useStyleRegister({
      theme: provideTheme,
      token: token2,
      hashId,
      path: [componentName]
    }, function() {
      return styleFn(token2);
    }),
    hashId
  };
}
var ProConfigContext = /* @__PURE__ */ React.createContext({
  intl: _objectSpread2$1(_objectSpread2$1({}, zhCNIntl), {}, {
    locale: "default"
  }),
  valueTypeMap: {},
  theme: emptyTheme,
  hashed: true,
  dark: false,
  token: defaultToken
});
ProConfigContext.Consumer;
ProConfigContext.displayName = "ProProvider";
var ProProvider = ProConfigContext;
var genProStyle$4 = function genProStyle(token2) {
  return _defineProperty$1({}, token2.componentCls, {
    display: "inline-flex",
    alignItems: "center",
    maxWidth: "100%",
    "&-icon": {
      display: "block",
      marginInlineStart: "4px",
      cursor: "pointer",
      "&:hover": {
        color: token2.colorPrimary
      }
    },
    "&-title": {
      display: "inline-flex",
      flex: "1"
    },
    "&-subtitle ": {
      marginInlineStart: 8,
      color: token2.colorTextSecondary,
      fontWeight: "normal",
      fontSize: token2.fontSize,
      whiteSpace: "nowrap"
    },
    "&-title-ellipsis": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      wordBreak: "keep-all"
    }
  });
};
function useStyle$7(prefixCls) {
  return useStyle$8("LabelIconTip", function(token2) {
    var proToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle$4(proToken)];
  });
}
var LabelIconTip = /* @__PURE__ */ React.memo(function(props) {
  var label = props.label, tooltip = props.tooltip, ellipsis = props.ellipsis, subTitle = props.subTitle;
  var _useContext = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls("pro-core-label-tip");
  var _useStyle = useStyle$7(className), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  if (!tooltip && !subTitle) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: label
    });
  }
  var tooltipProps = typeof tooltip === "string" || /* @__PURE__ */ React.isValidElement(tooltip) ? {
    title: tooltip
  } : tooltip;
  var icon = (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.icon) || /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCircleOutlined$1, {});
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: classNames(className, hashId),
    onMouseDown: function onMouseDown(e2) {
      return e2.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(e2) {
      return e2.stopPropagation();
    },
    onMouseMove: function onMouseMove(e2) {
      return e2.stopPropagation();
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: classNames("".concat(className, "-title"), hashId, _defineProperty$1({}, "".concat(className, "-title-ellipsis"), ellipsis)),
      children: label
    }), subTitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "".concat(className, "-subtitle ").concat(hashId),
      children: subTitle
    }), tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, _objectSpread2$1(_objectSpread2$1({}, tooltipProps), {}, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "".concat(className, "-icon ").concat(hashId),
        children: icon
      })
    }))]
  }));
});
function omit(obj, fields) {
  var shallowCopy = Object.assign({}, obj);
  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
var genProStyle$3 = function genProStyle2(token2) {
  var _layoutHorizonta, _layoutInline, _token$componentCls;
  return _defineProperty$1({}, token2.componentCls, (_token$componentCls = {
    display: "flex",
    fontSize: token2.fontSize,
    "& + &": {
      marginBlockStart: 4
    },
    "&-tip": {
      marginInlineStart: 4
    },
    "&-wrapper": _defineProperty$1({
      display: "flex",
      width: "100%"
    }, "".concat(token2.componentCls, "-status"), {
      width: "14px"
    }),
    "&-icon": {
      marginInlineEnd: 16
    },
    "&-trend-icon": {
      width: 0,
      height: 0,
      borderInlineEnd: "3.5px solid transparent",
      borderBlockEnd: "9px solid #000",
      borderInlineStart: "3.5px solid transparent",
      "&-up": {
        transform: "rotate(0deg)"
      },
      "&-down": {
        transform: "rotate(180deg)"
      }
    },
    "&-content": _defineProperty$1({
      width: "100%"
    }, "".concat(token2.antCls, "-statistic-content"), {
      "&-value-int": {
        fontSize: token2.fontSizeHeading3
      }
    }),
    "&-description": {
      width: "100%"
    }
  }, _defineProperty$1(_token$componentCls, "".concat(token2.antCls, "-statistic-title"), {
    color: token2.colorText
  }), _defineProperty$1(_token$componentCls, "&-trend-up", _defineProperty$1({}, "".concat(token2.antCls, "-statistic-content"), _defineProperty$1({
    color: "#f5222d"
  }, "".concat(token2.componentCls, "-trend-icon"), {
    borderBlockEndColor: "#f5222d"
  }))), _defineProperty$1(_token$componentCls, "&-trend-down", _defineProperty$1({}, "".concat(token2.antCls, "-statistic-content"), _defineProperty$1({
    color: "#389e0d"
  }, "".concat(token2.componentCls, "-trend-icon"), {
    borderBlockEndColor: "#52c41a"
  }))), _defineProperty$1(_token$componentCls, "& &-layout-horizontal", (_layoutHorizonta = {
    display: "flex",
    justifyContent: "space-between"
  }, _defineProperty$1(_layoutHorizonta, "".concat(token2.antCls, "-statistic-title"), {
    marginBlockEnd: 0
  }), _defineProperty$1(_layoutHorizonta, "".concat(token2.antCls, "-statistic-content-value"), {
    fontWeight: 500
  }), _defineProperty$1(_layoutHorizonta, "".concat(token2.antCls, "-statistic-title,").concat(token2.antCls, "-statistic-content,").concat(token2.antCls, "-statistic-content-suffix,").concat(token2.antCls, "-statistic-content-prefix,").concat(token2.antCls, "-statistic-content-value-decimal"), {
    fontSize: token2.fontSize
  }), _layoutHorizonta)), _defineProperty$1(_token$componentCls, "& &-layout-inline", (_layoutInline = {
    display: "inline-flex",
    color: token2.colorTextSecondary
  }, _defineProperty$1(_layoutInline, "".concat(token2.antCls, "-statistic-title"), {
    marginInlineEnd: "6px",
    marginBlockEnd: 0
  }), _defineProperty$1(_layoutInline, "".concat(token2.antCls, "-statistic-content"), {
    color: token2.colorTextSecondary
  }), _defineProperty$1(_layoutInline, "".concat(token2.antCls, "-statistic-title,").concat(token2.antCls, "-statistic-content,").concat(token2.antCls, "-statistic-content-suffix,").concat(token2.antCls, "-statistic-content-prefix,").concat(token2.antCls, "-statistic-content-value-decimal"), {
    fontSize: token2.fontSizeSM
  }), _layoutInline)), _token$componentCls));
};
function useStyle$6(prefixCls) {
  return useStyle$8("Statistic", function(token2) {
    var proListToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle$3(proListToken)];
  });
}
var _excluded$3 = ["className", "layout", "style", "description", "children", "title", "tip", "status", "trend", "prefix", "icon"];
var Statistic$1 = function Statistic(props) {
  var _classNames;
  var className = props.className, _props$layout = props.layout, layout = _props$layout === void 0 ? "inline" : _props$layout, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, description = props.description;
  props.children;
  var title = props.title, tip = props.tip, status = props.status, trend = props.trend, prefix = props.prefix, icon = props.icon, others = _objectWithoutProperties(props, _excluded$3);
  var _useContext = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls("pro-card-statistic");
  var _useStyle = useStyle$6(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var classString = classNames(prefixCls, className, hashId);
  var statusClass = classNames("".concat(prefixCls, "-status"), hashId);
  var iconClass = classNames("".concat(prefixCls, "-icon"), hashId);
  var wrapperClass = classNames("".concat(prefixCls, "-wrapper"), hashId);
  var contentClass = classNames("".concat(prefixCls, "-content"), hashId);
  var statisticClassName = classNames(hashId, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-layout-").concat(layout), layout), _defineProperty$1(_classNames, "".concat(prefixCls, "-trend-").concat(trend), trend), _classNames));
  var tipDom = tip && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {
    title: tip,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuestionCircleOutlined$1, {
      className: "".concat(prefixCls, "-tip ").concat(hashId)
    })
  });
  var trendIconClassName = classNames("".concat(prefixCls, "-trend-icon"), hashId, _defineProperty$1({}, "".concat(prefixCls, "-trend-icon-").concat(trend), trend));
  var trendDom = trend && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: trendIconClassName
  });
  var statusDom = status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: statusClass,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge$1, {
      status,
      text: null
    })
  });
  var iconDom = icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: iconClass,
    children: icon
  });
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: classString,
    style,
    children: [iconDom, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: wrapperClass,
      children: [statusDom, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: contentClass,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Statistic$4, _objectSpread2$1({
          title: (title || tipDom) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [title, tipDom]
          }),
          prefix: (trendDom || prefix) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [trendDom, prefix]
          }),
          className: statisticClassName
        }, others)), description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefixCls, "-description ").concat(hashId),
          children: description
        })]
      })]
    })]
  }));
};
const Statistic$2 = Statistic$1;
var genActionsStyle = function genActionsStyle2(token2) {
  var _div, _$concat;
  var componentCls = token2.componentCls, antCls = token2.antCls;
  return _defineProperty$1({}, "".concat(componentCls, "-actions"), (_$concat = {
    marginBlock: 0,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 0,
    listStyle: "none",
    display: "flex",
    gap: 8,
    background: token2.colorBgContainer,
    borderBlockStart: "".concat(token2.lineWidth, "px ").concat(token2.lineType, " ").concat(token2.colorSplit),
    minHeight: 42
  }, _defineProperty$1(_$concat, "& > *", {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    display: "flex",
    cursor: "pointer",
    color: token2.colorTextSecondary,
    transition: "color 0.3s",
    "&:hover": {
      color: token2.colorPrimaryHover
    }
  }), _defineProperty$1(_$concat, "& > li > div", {
    flex: 1,
    width: "100%",
    marginBlock: token2.marginSM,
    marginInline: 0,
    color: token2.colorTextSecondary,
    textAlign: "center",
    a: {
      color: token2.colorTextSecondary,
      transition: "color 0.3s",
      "&:hover": {
        color: token2.colorPrimaryHover
      }
    },
    div: (_div = {
      position: "relative",
      display: "block",
      minWidth: 32,
      fontSize: token2.fontSize,
      lineHeight: token2.lineHeight,
      cursor: "pointer",
      "&:hover": {
        color: token2.colorPrimaryHover,
        transition: "color 0.3s"
      }
    }, _defineProperty$1(_div, "a:not(".concat(antCls, "-btn),\n            > .anticon"), {
      display: "inline-block",
      width: "100%",
      color: token2.colorTextSecondary,
      lineHeight: "22px",
      transition: "color 0.3s",
      "&:hover": {
        color: token2.colorPrimaryHover
      }
    }), _defineProperty$1(_div, ".anticon", {
      fontSize: token2.cardActionIconSize,
      lineHeight: "22px"
    }), _div),
    "&:not(:last-child)": {
      borderInlineEnd: "".concat(token2.lineWidth, "px ").concat(token2.lineType, " ").concat(token2.colorSplit)
    }
  }), _$concat));
};
function useStyle$5(prefixCls) {
  return useStyle$8("ProCardActions", function(token2) {
    var proCardActionsToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls),
      cardActionIconSize: 16
    });
    return [genActionsStyle(proCardActionsToken)];
  });
}
var ProCardActions = function ProCardActions2(props) {
  var actions = props.actions, prefixCls = props.prefixCls;
  var _useStyle = useStyle$5(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  if (Array.isArray(actions) && actions !== null && actions !== void 0 && actions.length) {
    return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
      className: classNames("".concat(prefixCls, "-actions"), hashId),
      children: actions.map(function(action, index2) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
            style: {
              width: "".concat(100 / actions.length, "%"),
              padding: 0,
              margin: 0
            },
            className: classNames("".concat(prefixCls, "-actions-item"), hashId),
            children: action
          }, "action-".concat(index2))
        );
      })
    }));
  }
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
    className: classNames("".concat(prefixCls, "-actions"), hashId),
    children: actions
  }));
};
const Actions = ProCardActions;
var cardLoading = new Keyframe("card-loading", {
  "0%": {
    backgroundPosition: "0 50%"
  },
  "50%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
});
var genProStyle$2 = function genProStyle3(token2) {
  var _token$componentCls;
  return _defineProperty$1({}, token2.componentCls, (_token$componentCls = {
    "&-loading": {
      overflow: "hidden"
    },
    "&-loading &-body": {
      userSelect: "none"
    }
  }, _defineProperty$1(_token$componentCls, "".concat(token2.componentCls, "-loading-content"), {
    width: "100%",
    p: {
      marginBlock: 0,
      marginInline: 0
    }
  }), _defineProperty$1(_token$componentCls, "".concat(token2.componentCls, "-loading-block"), {
    height: "14px",
    marginBlock: "4px",
    background: "linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))",
    backgroundSize: "600% 600%",
    borderRadius: token2.borderRadius,
    animationName: cardLoading,
    animationDuration: "1.4s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite"
  }), _token$componentCls));
};
function useStyle$4(prefixCls) {
  return useStyle$8("ProCardLoading", function(token2) {
    var proToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle$2(proToken)];
  });
}
var Loading = function Loading2(props) {
  var style = props.style, prefix = props.prefix;
  var _useStyle = useStyle$4(prefix || "ant-pro-card"), wrapSSR = _useStyle.wrapSSR;
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "".concat(prefix, "-loading-content"),
    style,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Row, {
      gutter: 8,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 22,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, {
      gutter: 8,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 8,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 15,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, {
      gutter: 8,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 6,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 18,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, {
      gutter: 8,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 13,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 9,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, {
      gutter: 8,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 4,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 3,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Col, {
        span: 16,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "".concat(prefix, "-loading-block")
        })
      })]
    })]
  }));
};
const Loading$1 = Loading;
var _excluded$2 = ["tab", "children"], _excluded2 = ["key", "tab", "tabKey", "disabled", "destroyInactiveTabPane", "children", "className", "style", "cardProps"];
function filter(items) {
  return items.filter(function(item) {
    return item;
  });
}
function useLegacyItems(items, children, tabs) {
  if (items) {
    return items.map(function(item) {
      return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, _objectSpread2$1(_objectSpread2$1({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
          children: item.children
        }))
      });
    });
  }
  noteOnce(!tabs, "Tabs.TabPane is deprecated. Please use `items` directly.");
  var childrenItems = toArray(children).map(function(node) {
    if (/* @__PURE__ */ React.isValidElement(node)) {
      var key = node.key, props = node.props;
      var _ref = props || {}, tab = _ref.tab, tempChild = _ref.children, restProps = _objectWithoutProperties(_ref, _excluded$2);
      var item = _objectSpread2$1(_objectSpread2$1({
        key: String(key)
      }, restProps), {}, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, _objectSpread2$1(_objectSpread2$1({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
          children: tempChild
        })),
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
var TabPane = function TabPane2(props) {
  var _useContext = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  if (version.startsWith("5")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  } else {
    var key = props.key, tab = props.tab, tabKey = props.tabKey, disabled = props.disabled, destroyInactiveTabPane = props.destroyInactiveTabPane, children = props.children, className = props.className, style = props.style, cardProps = props.cardProps, rest = _objectWithoutProperties(props, _excluded2);
    var prefixCls = getPrefixCls("pro-card-tabpane");
    var tabPaneClassName = classNames(prefixCls, className);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs.TabPane, _objectSpread2$1(_objectSpread2$1({
      tabKey,
      tab,
      className: tabPaneClassName,
      style,
      disabled,
      destroyInactiveTabPane
    }, rest), {}, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, _objectSpread2$1(_objectSpread2$1({}, cardProps), {}, {
        children
      }))
    }), key);
  }
};
if (typeof process !== "undefined" && false) {
  TabPane.displayName = "DeprecatedTabPane";
}
const TabPane$1 = TabPane;
var genActiveStyle = function genActiveStyle2(token2) {
  return {
    backgroundColor: token2.controlItemBgActive,
    borderColor: token2.controlOutline
  };
};
var genProCardStyle = function genProCardStyle2(token2) {
  var _objectSpread22, _$concat2, _$concat9, _ref;
  var componentCls = token2.componentCls;
  return _ref = {}, _defineProperty$1(_ref, componentCls, _objectSpread2$1(_objectSpread2$1({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    marginBlock: 0,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 0,
    backgroundColor: token2.colorBgContainer,
    borderRadius: token2.borderRadius
  }, resetComponent === null || resetComponent === void 0 ? void 0 : resetComponent(token2)), {}, (_objectSpread22 = {
    "&-box-shadow": {
      boxShadow: "0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017",
      borderColor: "transparent"
    },
    "&-col": {
      width: "100%"
    },
    "&-border": {
      border: "".concat(token2.lineWidth, "px ").concat(token2.lineType, " ").concat(token2.colorSplit)
    },
    "&-hoverable": _defineProperty$1({
      cursor: "pointer",
      transition: "box-shadow 0.3s, border-color 0.3s",
      "&:hover": {
        borderColor: "transparent",
        boxShadow: "0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017"
      }
    }, "&".concat(componentCls, "-checked:hover"), {
      borderColor: token2.controlOutline
    }),
    "&-checked": _objectSpread2$1(_objectSpread2$1({}, genActiveStyle(token2)), {}, {
      "&::after": {
        position: "absolute",
        insetBlockStart: 2,
        insetInlineEnd: 2,
        width: 0,
        height: 0,
        border: "6px solid ".concat(token2.colorPrimary),
        borderBlockEnd: "6px solid transparent",
        borderInlineStart: "6px solid transparent",
        borderStartEndRadius: 2,
        content: '""'
      }
    }),
    "&:focus": _objectSpread2$1({}, genActiveStyle(token2)),
    "&&-size-small": _defineProperty$1({}, componentCls, {
      "&-header": {
        paddingInline: token2.paddingSM,
        paddingBlock: token2.paddingXS,
        paddingBlockEnd: 0,
        "&-border": {
          paddingBlockEnd: token2.paddingXS
        }
      },
      "&-title": {
        fontSize: token2.fontSize
      },
      "&-body": {
        paddingInline: token2.paddingSM,
        paddingBlock: token2.paddingSM
      }
    }),
    "&&-ghost": _defineProperty$1({
      backgroundColor: "transparent"
    }, "> ".concat(componentCls), {
      "&-header": {
        paddingInlineEnd: 0,
        paddingBlockEnd: token2.padding,
        paddingInlineStart: 0
      },
      "&-body": {
        paddingBlock: 0,
        paddingInline: 0,
        backgroundColor: "transparent"
      }
    }),
    "&&-split > &-body": {
      paddingBlock: 0,
      paddingInline: 0
    },
    "&&-contain-card > &-body": {
      display: "flex"
    }
  }, _defineProperty$1(_objectSpread22, "".concat(componentCls, "-body-direction-column"), {
    flexDirection: "column"
  }), _defineProperty$1(_objectSpread22, "".concat(componentCls, "-body-wrap"), {
    flexWrap: "wrap"
  }), _defineProperty$1(_objectSpread22, "&&-collapse", _defineProperty$1({}, "> ".concat(componentCls), {
    "&-header": {
      paddingBlockEnd: token2.padding,
      borderBlockEnd: 0
    },
    "&-body": {
      display: "none"
    }
  })), _defineProperty$1(_objectSpread22, "".concat(componentCls, "-header"), {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: token2.paddingLG,
    paddingBlock: token2.padding,
    paddingBlockEnd: 0,
    "&-border": {
      "&": {
        paddingBlockEnd: token2.padding
      },
      borderBlockEnd: "".concat(token2.lineWidth, "px ").concat(token2.lineType, " ").concat(token2.colorSplit)
    },
    "&-collapsible": {
      cursor: "pointer"
    }
  }), _defineProperty$1(_objectSpread22, "".concat(componentCls, "-title"), {
    color: token2.colorText,
    fontWeight: 500,
    fontSize: token2.fontSizeLG,
    lineHeight: token2.lineHeight
  }), _defineProperty$1(_objectSpread22, "".concat(componentCls, "-extra"), {
    color: token2.colorText
  }), _defineProperty$1(_objectSpread22, "".concat(componentCls, "-type-inner"), _defineProperty$1({}, "".concat(componentCls, "-header"), {
    backgroundColor: token2.colorFillAlter
  })), _defineProperty$1(_objectSpread22, "".concat(componentCls, "-collapsible-icon"), {
    marginInlineEnd: token2.marginXS,
    color: token2.colorIconHover,
    ":hover": {
      color: token2.colorPrimaryHover
    },
    "& svg": {
      transition: "transform ".concat(token2.motionDurationMid)
    }
  }), _defineProperty$1(_objectSpread22, "".concat(componentCls, "-body"), {
    display: "block",
    boxSizing: "border-box",
    height: "100%",
    paddingInline: token2.paddingLG,
    paddingBlock: token2.padding,
    "&-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }), _objectSpread22))), _defineProperty$1(_ref, "".concat(componentCls, "-col"), (_$concat2 = {}, _defineProperty$1(_$concat2, "&".concat(componentCls, "-split-vertical"), {
    borderInlineEnd: "".concat(token2.lineWidth, "px ").concat(token2.lineType, " ").concat(token2.colorSplit)
  }), _defineProperty$1(_$concat2, "&".concat(componentCls, "-split-horizontal"), {
    borderBlockEnd: "".concat(token2.lineWidth, "px ").concat(token2.lineType, " ").concat(token2.colorSplit)
  }), _$concat2)), _defineProperty$1(_ref, "".concat(componentCls, "-tabs"), (_$concat9 = {}, _defineProperty$1(_$concat9, "".concat(token2.antCls, "-tabs-top > ").concat(token2.antCls, "-tabs-nav"), _defineProperty$1({
    marginBlockEnd: 0
  }, "".concat(token2.antCls, "-tabs-nav-list"), {
    marginBlockStart: token2.marginXS,
    paddingInlineStart: token2.padding
  })), _defineProperty$1(_$concat9, "".concat(token2.antCls, "-tabs-bottom > ").concat(token2.antCls, "-tabs-nav"), _defineProperty$1({
    marginBlockEnd: 0
  }, "".concat(token2.antCls, "-tabs-nav-list"), {
    paddingInlineStart: token2.padding
  })), _defineProperty$1(_$concat9, "".concat(token2.antCls, "-tabs-left"), _defineProperty$1({}, "".concat(token2.antCls, "-tabs-content-holder"), _defineProperty$1({}, "".concat(token2.antCls, "-tabs-content"), _defineProperty$1({}, "".concat(token2.antCls, "-tabs-tabpane"), {
    paddingInlineStart: 0
  })))), _defineProperty$1(_$concat9, "".concat(token2.antCls, "-tabs-left > ").concat(token2.antCls, "-tabs-nav"), _defineProperty$1({
    marginInlineEnd: 0
  }, "".concat(token2.antCls, "-tabs-nav-list"), {
    paddingBlockStart: token2.padding
  })), _defineProperty$1(_$concat9, "".concat(token2.antCls, "-tabs-right"), _defineProperty$1({}, "".concat(token2.antCls, "-tabs-content-holder"), _defineProperty$1({}, "".concat(token2.antCls, "-tabs-content"), _defineProperty$1({}, "".concat(token2.antCls, "-tabs-tabpane"), {
    paddingInlineStart: 0
  })))), _defineProperty$1(_$concat9, "".concat(token2.antCls, "-tabs-right > ").concat(token2.antCls, "-tabs-nav"), _defineProperty$1({}, "".concat(token2.antCls, "-tabs-nav-list"), {
    paddingBlockStart: token2.padding
  })), _$concat9)), _ref;
};
var GRID_COLUMNS = 24;
var genColStyle = function genColStyle2(index2, token2) {
  var componentCls = token2.componentCls;
  if (index2 === 0) {
    return _defineProperty$1({}, "".concat(componentCls, "-col-0"), {
      display: "none"
    });
  }
  return _defineProperty$1({}, "".concat(componentCls, "-col-").concat(index2), {
    flexShrink: 0,
    width: "".concat(index2 / GRID_COLUMNS * 100, "%")
  });
};
var genGridStyle = function genGridStyle2(token2) {
  return Array(GRID_COLUMNS + 1).fill(1).map(function(_, index2) {
    return genColStyle(index2, token2);
  });
};
function useStyle$3(prefixCls) {
  return useStyle$8("ProCard", function(token2) {
    var proCardToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProCardStyle(proCardToken), genGridStyle(proCardToken)];
  });
}
var _excluded$1 = ["className", "style", "bodyStyle", "headStyle", "title", "subTitle", "extra", "tip", "wrap", "layout", "loading", "gutter", "tooltip", "split", "headerBordered", "bordered", "boxShadow", "children", "size", "actions", "ghost", "hoverable", "direction", "collapsed", "collapsible", "collapsibleIconRender", "defaultCollapsed", "onCollapse", "checked", "onChecked", "tabs", "type"];
var useBreakpoint = Grid.useBreakpoint;
var Card = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _classNames2, _classNames3, _classNames4;
  var className = props.className, style = props.style, _props$bodyStyle = props.bodyStyle, bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle, _props$headStyle = props.headStyle, headStyle = _props$headStyle === void 0 ? {} : _props$headStyle, title = props.title, subTitle = props.subTitle, extra = props.extra, tip = props.tip, _props$wrap = props.wrap, wrap = _props$wrap === void 0 ? false : _props$wrap, layout = props.layout, loading = props.loading, _props$gutter = props.gutter, gutter = _props$gutter === void 0 ? 0 : _props$gutter, tooltip = props.tooltip, split = props.split, _props$headerBordered = props.headerBordered, headerBordered = _props$headerBordered === void 0 ? false : _props$headerBordered, _props$bordered = props.bordered, bordered = _props$bordered === void 0 ? false : _props$bordered, _props$boxShadow = props.boxShadow, boxShadow = _props$boxShadow === void 0 ? false : _props$boxShadow, children = props.children, size = props.size, actions = props.actions, _props$ghost = props.ghost, ghost = _props$ghost === void 0 ? false : _props$ghost, _props$hoverable = props.hoverable, hoverable = _props$hoverable === void 0 ? false : _props$hoverable, direction = props.direction, controlCollapsed = props.collapsed, _props$collapsible = props.collapsible, collapsible = _props$collapsible === void 0 ? false : _props$collapsible, collapsibleIconRender = props.collapsibleIconRender, _props$defaultCollaps = props.defaultCollapsed, defaultCollapsed = _props$defaultCollaps === void 0 ? false : _props$defaultCollaps, onCollapse = props.onCollapse, checked = props.checked, onChecked = props.onChecked, tabs = props.tabs, type = props.type, rest = _objectWithoutProperties(props, _excluded$1);
  var _useContext = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var screens = useBreakpoint();
  var _useMergedState = useMergedState(defaultCollapsed, {
    value: controlCollapsed,
    onChange: onCollapse
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), collapsed = _useMergedState2[0], setCollapsed = _useMergedState2[1];
  var responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];
  var ModifyTabItemsContant = useLegacyItems(tabs === null || tabs === void 0 ? void 0 : tabs.items, children, tabs);
  var getNormalizedGutter = function getNormalizedGutter2(gut) {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gut) ? gut : [gut, 0];
    normalizedGutter.forEach(function(g, index2) {
      if (_typeof$1(g) === "object") {
        for (var i = 0; i < responsiveArray.length; i += 1) {
          var breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== void 0) {
            results[index2] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index2] = g || 0;
      }
    });
    return results;
  };
  var getStyle = function getStyle2(withStyle, appendStyle) {
    return withStyle ? appendStyle : {};
  };
  var getColSpanStyle = function getColSpanStyle2(colSpan) {
    var span = colSpan;
    if (_typeof$1(colSpan) === "object") {
      for (var i = 0; i < responsiveArray.length; i += 1) {
        var breakpoint = responsiveArray[i];
        if (screens[breakpoint] && colSpan[breakpoint] !== void 0) {
          span = colSpan[breakpoint];
          break;
        }
      }
    }
    var colSpanStyle = getStyle(typeof span === "string" && /\d%|\dpx/i.test(span), {
      width: span,
      flexShrink: 0
    });
    return {
      span,
      colSpanStyle
    };
  };
  var prefixCls = getPrefixCls("pro-card");
  var _useStyle = useStyle$3(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var _getNormalizedGutter = getNormalizedGutter(gutter), _getNormalizedGutter2 = _slicedToArray(_getNormalizedGutter, 2), horizontalGutter = _getNormalizedGutter2[0], verticalGutter = _getNormalizedGutter2[1];
  var containProCard = false;
  var childrenArray = React.Children.toArray(children);
  var childrenModified = childrenArray.map(function(element, index2) {
    var _element$type;
    if (element !== null && element !== void 0 && (_element$type = element.type) !== null && _element$type !== void 0 && _element$type.isProCard) {
      var _classNames;
      containProCard = true;
      var colSpan = element.props.colSpan;
      var _getColSpanStyle = getColSpanStyle(colSpan), span = _getColSpanStyle.span, colSpanStyle = _getColSpanStyle.colSpanStyle;
      var columnClassName = classNames(["".concat(prefixCls, "-col")], hashId, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-split-vertical"), split === "vertical" && index2 !== childrenArray.length - 1), _defineProperty$1(_classNames, "".concat(prefixCls, "-split-horizontal"), split === "horizontal" && index2 !== childrenArray.length - 1), _defineProperty$1(_classNames, "".concat(prefixCls, "-col-").concat(span), typeof span === "number" && span >= 0 && span <= 24), _classNames));
      var wrappedElement = wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        style: _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, colSpanStyle), getStyle(horizontalGutter > 0, {
          paddingInlineEnd: horizontalGutter / 2,
          paddingInlineStart: horizontalGutter / 2
        })), getStyle(verticalGutter > 0, {
          paddingBlockStart: verticalGutter / 2,
          paddingBlockEnd: verticalGutter / 2
        })),
        className: columnClassName,
        children: /* @__PURE__ */ React.cloneElement(element)
      }));
      return /* @__PURE__ */ React.cloneElement(wrappedElement, {
        key: "pro-card-col-".concat((element === null || element === void 0 ? void 0 : element.key) || index2)
      });
    }
    return element;
  });
  var cardCls = classNames("".concat(prefixCls), className, hashId, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-border"), bordered), _defineProperty$1(_classNames2, "".concat(prefixCls, "-box-shadow"), boxShadow), _defineProperty$1(_classNames2, "".concat(prefixCls, "-contain-card"), containProCard), _defineProperty$1(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty$1(_classNames2, "".concat(prefixCls, "-split"), split === "vertical" || split === "horizontal"), _defineProperty$1(_classNames2, "".concat(prefixCls, "-ghost"), ghost), _defineProperty$1(_classNames2, "".concat(prefixCls, "-hoverable"), hoverable), _defineProperty$1(_classNames2, "".concat(prefixCls, "-size-").concat(size), size), _defineProperty$1(_classNames2, "".concat(prefixCls, "-type-").concat(type), type), _defineProperty$1(_classNames2, "".concat(prefixCls, "-collapse"), collapsed), _defineProperty$1(_classNames2, "".concat(prefixCls, "-checked"), checked), _classNames2));
  var bodyCls = classNames("".concat(prefixCls, "-body"), hashId, (_classNames3 = {}, _defineProperty$1(_classNames3, "".concat(prefixCls, "-body-center"), layout === "center"), _defineProperty$1(_classNames3, "".concat(prefixCls, "-body-direction-column"), split === "horizontal" || direction === "column"), _defineProperty$1(_classNames3, "".concat(prefixCls, "-body-wrap"), wrap && containProCard), _classNames3));
  var cardBodyStyle = bodyStyle;
  var loadingDOM = /* @__PURE__ */ React.isValidElement(loading) ? loading : /* @__PURE__ */ jsxRuntimeExports.jsx(Loading$1, {
    prefix: prefixCls,
    style: bodyStyle.padding === 0 || bodyStyle.padding === "0px" ? {
      padding: 24
    } : void 0
  });
  var collapsibleButton = collapsible && controlCollapsed === void 0 && (collapsibleIconRender ? collapsibleIconRender({
    collapsed
  }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RightOutlined, {
    rotate: !collapsed ? 90 : void 0,
    className: "".concat(prefixCls, "-collapsible-icon ").concat(hashId)
  }));
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsxs("div", _objectSpread2$1(_objectSpread2$1({
    className: cardCls,
    style,
    ref,
    onClick: function onClick(e2) {
      var _rest$onClick;
      onChecked === null || onChecked === void 0 ? void 0 : onChecked(e2);
      rest === null || rest === void 0 ? void 0 : (_rest$onClick = rest.onClick) === null || _rest$onClick === void 0 ? void 0 : _rest$onClick.call(rest, e2);
    }
  }, omit(rest, ["prefixCls", "colSpan"])), {}, {
    children: [(title || extra || collapsibleButton) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: classNames("".concat(prefixCls, "-header"), hashId, (_classNames4 = {}, _defineProperty$1(_classNames4, "".concat(prefixCls, "-header-border"), headerBordered || type === "inner"), _defineProperty$1(_classNames4, "".concat(prefixCls, "-header-collapsible"), collapsibleButton), _classNames4)),
      style: headStyle,
      onClick: function onClick() {
        if (collapsibleButton)
          setCollapsed(!collapsed);
      },
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "".concat(prefixCls, "-title ").concat(hashId),
        children: [collapsibleButton, /* @__PURE__ */ jsxRuntimeExports.jsx(LabelIconTip, {
          label: title,
          tooltip: tooltip || tip,
          subTitle
        })]
      }), extra && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "".concat(prefixCls, "-extra ").concat(hashId),
        children: extra
      })]
    }), tabs ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "".concat(prefixCls, "-tabs ").concat(hashId),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, _objectSpread2$1(_objectSpread2$1({
        onChange: tabs.onChange
      }, tabs), {}, {
        // @ts-ignore
        items: ModifyTabItemsContant,
        children: loading ? loadingDOM : children
      }))
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: bodyCls,
      style: cardBodyStyle,
      children: loading ? loadingDOM : childrenModified
    }), actions ? /* @__PURE__ */ jsxRuntimeExports.jsx(Actions, {
      actions,
      prefixCls
    }) : null]
  })));
});
const Card$1 = Card;
var genDividerStyle = function genDividerStyle2(token2) {
  var componentCls = token2.componentCls;
  return _defineProperty$1({}, componentCls, {
    "&-divider": {
      flex: "none",
      width: token2.lineWidth,
      marginInline: token2.marginXS,
      marginBlock: token2.marginLG,
      backgroundColor: token2.colorSplit,
      "&-horizontal": {
        width: "initial",
        height: token2.lineWidth,
        marginInline: token2.marginLG,
        marginBlock: token2.marginXS
      }
    },
    "&&-size-small &-divider": {
      marginBlock: token2.marginLG,
      marginInline: token2.marginXS,
      "&-horizontal": {
        marginBlock: token2.marginXS,
        marginInline: token2.marginLG
      }
    }
  });
};
function useStyle$2(prefixCls) {
  return useStyle$8("ProCardDivider", function(token2) {
    var proCardDividerToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genDividerStyle(proCardDividerToken)];
  });
}
var ProCardDivider = function ProCardDivider2(props) {
  var _useContext = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var proCardPrefixCls = getPrefixCls("pro-card");
  var prefixCls = "".concat(proCardPrefixCls, "-divider");
  var _useStyle = useStyle$2(proCardPrefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var className = props.className, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, type = props.type;
  var classString = classNames(prefixCls, className, hashId, _defineProperty$1({}, "".concat(prefixCls, "-").concat(type), type));
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: classString,
    style
  }));
};
const Divider = ProCardDivider;
var genProStyle$1 = function genProStyle4(token2) {
  return _defineProperty$1({}, token2.componentCls, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBlock: token2.marginLG,
    marginInline: 0,
    color: token2.colorText,
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "38px"
  });
};
function useStyle$1(prefixCls) {
  return useStyle$8("ProCardOperation", function(token2) {
    var proToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle$1(proToken)];
  });
}
var ProCardOperation = function ProCardOperation2(props) {
  var className = props.className, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, children = props.children;
  var _useContext = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls("pro-card-operation");
  var _useStyle = useStyle$1(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var classString = classNames(prefixCls, className, hashId);
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: classString,
    style,
    children
  }));
};
const Operation = ProCardOperation;
var genProStyle5 = function genProStyle6(token2) {
  return _defineProperty$1({}, token2.componentCls, {
    "&-chart": {
      display: "flex",
      flexDirection: "column",
      marginBlockStart: 8,
      marginBlockEnd: 8,
      "&-left": {
        marginBlockStart: 0,
        marginInlineEnd: "16px"
      },
      "&-right": {
        marginBlockStart: 0,
        marginInlineStart: "16px"
      }
    },
    "&-content": {
      display: "flex",
      flexDirection: "column",
      "&-horizontal": _defineProperty$1({
        flexDirection: "row"
      }, "".concat(token2.componentCls, "-chart"), {
        alignItems: "center",
        alignSelf: "flex-start"
      })
    },
    "&-footer": {
      marginBlockStart: 8,
      paddingBlockStart: "16px",
      borderBlockStart: "rgba(0, 0, 0, 0.08) solid ".concat(token2.colorBorder)
    }
  });
};
function useStyle(prefixCls) {
  return useStyle$8("StatisticCard", function(token2) {
    var proListToken = _objectSpread2$1(_objectSpread2$1({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle5(proListToken)];
  });
}
var _excluded = ["children", "statistic", "className", "chart", "chartPlacement", "footer"];
var StatisticCard = function StatisticCard2(props) {
  var _classNames;
  var children = props.children, statistic = props.statistic, className = props.className, chart = props.chart, chartPlacement = props.chartPlacement, footer = props.footer, others = _objectWithoutProperties(props, _excluded);
  var _useContext = reactExports.useContext(ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls("pro-statistic-card");
  var _useStyle = useStyle(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var classString = classNames(prefixCls, className, hashId);
  var statisticDom = statistic && /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic$2, _objectSpread2$1({
    layout: "vertical"
  }, statistic));
  var chartCls = classNames("".concat(prefixCls, "-chart"), hashId, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-chart-left"), chartPlacement === "left" && chart && statistic), _defineProperty$1(_classNames, "".concat(prefixCls, "-chart-right"), chartPlacement === "right" && chart && statistic), _classNames));
  var chartDom = chart && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: chartCls,
    children: chart
  });
  var contentCls = classNames("".concat(prefixCls, "-content "), hashId, _defineProperty$1({}, "".concat(prefixCls, "-content-horizontal"), chartPlacement === "left" || chartPlacement === "right"));
  var contentDom = (chartDom || statisticDom) && (chartPlacement === "left" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: contentCls,
    children: [chartDom, statisticDom]
  }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: contentCls,
    children: [statisticDom, chartDom]
  }));
  var footerDom = footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "".concat(prefixCls, "-footer ").concat(hashId),
    children: footer
  });
  return wrapSSR(/* @__PURE__ */ jsxRuntimeExports.jsxs(Card$1, _objectSpread2$1(_objectSpread2$1({
    className: classString
  }, others), {}, {
    children: [contentDom, children, footerDom]
  })));
};
var Group$1 = function Group(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticCard, _objectSpread2$1({
    bodyStyle: {
      padding: 0
    }
  }, props));
};
StatisticCard.Statistic = Statistic$2;
StatisticCard.Divider = Divider;
StatisticCard.Operation = Operation;
StatisticCard.isProCard = true;
StatisticCard.Group = Group$1;
const StatisticCard$1 = StatisticCard;
var Group2 = function Group3(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, _objectSpread2$1({
    bodyStyle: {
      padding: 0
    }
  }, props));
};
var ProCard = Card$1;
ProCard.isProCard = true;
ProCard.Divider = Divider;
ProCard.TabPane = TabPane$1;
ProCard.Group = Group2;
const ProCard$1 = ProCard;
const { Statistic: Statistic2 } = StatisticCard$1;
const StatisticList = () => {
  const [responsive, setResponsive] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RefResizeObserver,
    {
      onResize: (offset2) => {
        setResponsive(offset2.width < 596);
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ProCard$1, { split: responsive ? "horizontal" : "vertical", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatisticCard$1,
          {
            colSpan: responsive ? 24 : 6,
            title: "财年业绩目标",
            statistic: {
              value: 82.6,
              suffix: "亿",
              description: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic2, { title: "日同比", value: "6.47%", trend: "up" })
            },
            chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg",
                alt: "进度条",
                width: "100%"
              }
            ),
            footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Statistic2,
                {
                  value: "70.98%",
                  title: "财年业绩完成率",
                  layout: "horizontal"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Statistic2,
                {
                  value: "86.98%",
                  title: "去年同期业绩完成率",
                  layout: "horizontal"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Statistic2,
                {
                  value: "88.98%",
                  title: "前年同期业绩完成率",
                  layout: "horizontal"
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          StatisticCard$1.Group,
          {
            colSpan: responsive ? 24 : 18,
            direction: responsive ? "column" : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatisticCard$1,
                {
                  statistic: {
                    title: "财年总收入",
                    value: 601987768,
                    description: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic2, { title: "日同比", value: "6.15%", trend: "up" })
                  },
                  chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg",
                      alt: "折线图",
                      width: "100%"
                    }
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Statistic2,
                    {
                      title: "大盘总收入",
                      value: 1982312,
                      layout: "vertical",
                      description: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic2, { title: "日同比", value: "6.15%", trend: "down" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatisticCard$1,
                {
                  statistic: {
                    title: "当日排名",
                    value: 6,
                    description: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic2, { title: "日同比", value: "3.85%", trend: "down" })
                  },
                  chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg",
                      alt: "折线图",
                      width: "100%"
                    }
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Statistic2,
                    {
                      title: "近7日收入",
                      value: 17458,
                      layout: "vertical",
                      description: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic2, { title: "日同比", value: "6.47%", trend: "up" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatisticCard$1,
                {
                  statistic: {
                    title: "财年业绩收入排名",
                    value: 2,
                    description: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic2, { title: "日同比", value: "6.47%", trend: "up" })
                  },
                  chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg",
                      alt: "折线图",
                      width: "100%"
                    }
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Statistic2,
                    {
                      title: "月付费个数",
                      value: 601,
                      layout: "vertical",
                      description: /* @__PURE__ */ jsxRuntimeExports.jsx(Statistic2, { title: "日同比", value: "6.47%", trend: "down" })
                    }
                  )
                }
              )
            ]
          }
        )
      ] })
    },
    "resize-observer"
  );
};
const name = "baomax-components-statistic-list";
factory(name, StatisticList);
export {
  name as default
};
