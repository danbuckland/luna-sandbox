import uniqueId from 'lodash.uniqueid';
import { compose, setDisplayName, mapProps, withProps, withState, withHandlers, withPropsOnChange, setPropTypes } from 'recompose';
import classnames from 'classnames';
import React, { Children, Fragment, Component, cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import debounce from 'lodash.debounce';
import ReactDOM from 'react-dom';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var uuid = (function (prefix) {
  return uniqueId(prefix);
});

var addLunaClass = function addLunaClass(props) {
  return _extends({}, props, {
    className: classnames(props.className, 'ln-c-icon', props.fixed && 'ln-c-icon--fixed', props.size && "ln-c-icon--" + props.size),
    fixed: undefined
  });
};
var iconHandler = (
/* istanbul ignore next */
function (Component$$1) {
  return (
    /* istanbul ignore next */
    compose(setDisplayName(Component$$1.displayName || Component$$1.name || 'Icon'), mapProps(addLunaClass))(Component$$1)
  );
});

var ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12 14.586L4.707 7.293a1 1 0 0 0-1.414 1.414l8 8a1 1 0 0 0 1.414 0l8-8a1 1 0 1 0-1.414-1.414L12 14.586z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

ArrowDown.defaultProps = {
  viewBox: "0 0 24 24"
};
var ArrowDown$1 = iconHandler(ArrowDown);

var includes = (function (arr, searchElement) {
  if (!Array.isArray(arr)) {
    return false;
  }

  return arr.indexOf(searchElement) !== -1;
});

var filterProps = (function (props, filterList) {
  return Object.keys(props).reduce(function (newProps, prop) {
    var _extends2;

    if (includes(filterList, prop)) {
      return newProps;
    }

    return _extends({}, newProps, (_extends2 = {}, _extends2[prop] = props[prop], _extends2));
  }, {});
});

/**
 * Represents a single item in an accordion.
 * Wrap in [`Accordion`](#/Components/Accordion?id=accordion-1) for state management.
 */

var AccordionItem = function AccordionItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      titleElement = _ref.titleElement,
      defaultOpen = _ref.defaultOpen,
      propsOpen = _ref.open,
      standalone = _ref.standalone,
      id = _ref.id,
      onClick = _ref.onClick,
      handleClick = _ref.handleClick,
      respondAt = _ref.respondAt,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "title", "titleElement", "defaultOpen", "open", "standalone", "id", "onClick", "handleClick", "respondAt"]);

  var Heading = titleElement;
  var titleId = id;
  var bodyId = id + "-body";
  var clickHandler = onClick || handleClick;
  var open = propsOpen !== undefined ? propsOpen : defaultOpen;
  return React.createElement("div", _extends({}, filterProps(rest, ['multipleOpen']), {
    className: classnames(!respondAt && 'ln-c-accordion', respondAt && "ln-c-accordion@max-" + respondAt, className, open && 'is-open', standalone && 'ln-c-accordion--standalone')
  }), React.createElement("div", {
    className: "ln-c-accordion__head"
  }, React.createElement("button", {
    className: "ln-c-accordion__toggle",
    type: "button",
    onClick: clickHandler && function () {
      return clickHandler(open);
    },
    "aria-controls": bodyId,
    "aria-expanded": open,
    "aria-labelledby": titleId
  }, React.createElement(ArrowDown$1, {
    className: "ln-c-accordion__icon"
  })), React.createElement(Heading, {
    className: "ln-c-accordion__title",
    id: titleId
  }, title)), React.createElement("div", {
    className: "ln-c-accordion__body",
    role: "region",
    "aria-labelledby": titleId,
    id: bodyId
  }, (!!respondAt || open) && children));
};

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  titleElement: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  defaultOpen: PropTypes.bool,
  open: PropTypes.bool,
  standalone: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,

  /** @deprecated Use `onClick` */
  handleClick: PropTypes.func,

  /** Use to only show the content as an accordion until the specified breakpoint is reached */
  respondAt: PropTypes.string
};
AccordionItem.defaultProps = {
  className: undefined,
  titleElement: 'h4',
  defaultOpen: false,
  open: undefined,
  standalone: false,
  id: '',
  onClick: undefined,
  handleClick: undefined,
  respondAt: undefined
};
AccordionItem.displayName = 'AccordionItem';

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      hasInteracted: false,
      openItems: {}
    };
    _this.uuid = "ln-accordion-" + uuid();
    return _this;
  }

  var _proto = Accordion.prototype;

  _proto.getChildren = function getChildren() {
    if (this.props.title) {
      return React.createElement(AccordionItem, _extends({}, this.props, {
        id: this.getItemId(this.props.id, 0)
      }));
    }

    return this.props.children;
  };

  _proto.getItemId = function getItemId(itemId, index) {
    return itemId || this.uuid + "-" + index;
  };

  _proto.handleClick = function handleClick(itemId, open) {
    var multipleOpen = this.props.multipleOpen;
    this.setState(function (state) {
      var _extends2, _ref;

      return {
        hasInteracted: true,
        openItems: multipleOpen ? _extends({}, state.openItems, (_extends2 = {}, _extends2[itemId] = !open, _extends2)) : (_ref = {}, _ref[itemId] = !open, _ref)
      };
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        openItems = _this$state.openItems,
        hasInteracted = _this$state.hasInteracted;
    var _this$props = this.props,
        multipleOpen = _this$props.multipleOpen,
        titleElement = _this$props.titleElement,
        standalone = _this$props.standalone,
        respondAt = _this$props.respondAt;
    var itemProps = {
      titleElement: titleElement,
      standalone: standalone,
      respondAt: respondAt
    };
    var children = Children.map(this.getChildren(), function (child, index) {
      var id = _this2.getItemId(child.props.id, index);

      var open = openItems[id];

      if (!multipleOpen && hasInteracted) {
        open = open || false;
      }

      return React.cloneElement(child, _extends({}, itemProps, {
        id: id,
        open: open,
        onClick: function onClick(isOpen) {
          return _this2.handleClick(id, isOpen);
        }
      }));
    });
    return React.createElement(Fragment, null, children);
  };

  return Accordion;
}(Component);

Accordion.propTypes = {
  /** Array of `AccordionItems` or body contents if `title` prop set i.e. single accordion mode */
  children: PropTypes.node,

  /** Allow multipleOpen items to be open at one time */
  multipleOpen: PropTypes.bool,

  /** Element to use as title */
  titleElement: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

  /** Set to `true` to add spacing between items */
  standalone: PropTypes.bool,

  /** @see [`AccordionItem`](#/Components?id=accordion-item) */
  title: PropTypes.node,

  /** @see [`AccordionItem`](#/Components?id=accordion-item) */
  className: PropTypes.string,

  /** @see [`AccordionItem`](#/Components?id=accordion-item) */
  defaultOpen: PropTypes.bool,

  /** @see [`AccordionItem`](#/Components?id=accordion-item) */
  open: PropTypes.bool,

  /** @see [`AccordionItem`](#/Components?id=accordion-item) */
  id: PropTypes.string,

  /** @see [`AccordionItem`](#/Components?id=accordion-item) */
  onClick: PropTypes.func,

  /**
   * @see [`AccordionItem`](#/Components?id=accordion-item)
   * @deprecated Use `onClick`
   * */
  handleClick: PropTypes.func,

  /** @see [`AccordionItem`](#/Components?id=accordion-item) */
  respondAt: PropTypes.string
};
Accordion.defaultProps = {
  children: undefined,
  multipleOpen: false,
  titleElement: undefined,
  standalone: false,
  title: undefined,
  className: undefined,
  defaultOpen: false,
  open: undefined,
  id: undefined,
  onClick: undefined,
  handleClick: undefined,
  respondAt: undefined
};
Accordion.displayName = 'Accordion';

var Input = function Input(_ref) {
  var id = _ref.id,
      name = _ref.name,
      type = _ref.type,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      minLength = _ref.minLength,
      maxLength = _ref.maxLength,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      autoComplete = _ref.autoComplete,
      autoCapitalize = _ref.autoCapitalize,
      required = _ref.required,
      inputMode = _ref.inputMode,
      pattern = _ref.pattern,
      readOnly = _ref.readOnly,
      spellCheck = _ref.spellCheck,
      tabIndex = _ref.tabIndex,
      className = _ref.className,
      invalid = _ref.invalid,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "name", "type", "placeholder", "disabled", "onBlur", "onChange", "onFocus", "value", "defaultValue", "checked", "defaultChecked", "minLength", "maxLength", "min", "max", "step", "autoComplete", "autoCapitalize", "required", "inputMode", "pattern", "readOnly", "spellCheck", "tabIndex", "className", "invalid", "innerRef"]);

  return React.createElement("input", _extends({}, rest, {
    id: id || name,
    name: name,
    type: type,
    className: className,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    value: value,
    defaultValue: defaultValue,
    checked: checked,
    defaultChecked: defaultChecked,
    placeholder: placeholder,
    tabIndex: tabIndex,
    autoComplete: autoComplete,
    autoCapitalize: autoCapitalize,
    inputMode: inputMode,
    spellCheck: spellCheck,
    required: required,
    minLength: minLength,
    maxLength: maxLength,
    min: min,
    max: max,
    step: step,
    pattern: pattern,
    readOnly: readOnly,
    disabled: disabled,
    "aria-disabled": disabled || undefined,
    "aria-invalid": invalid || undefined,
    ref: innerRef
  }));
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  autoComplete: PropTypes.string,
  autoCapitalize: PropTypes.string,
  required: PropTypes.bool,
  inputMode: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string]),
  readOnly: PropTypes.bool,
  spellCheck: PropTypes.oneOf(['default', true, false]),
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
Input.defaultProps = {
  id: undefined,
  type: 'text',
  disabled: false,
  placeholder: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  checked: undefined,
  defaultChecked: undefined,
  minLength: undefined,
  maxLength: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
  autoComplete: undefined,
  autoCapitalize: undefined,
  required: undefined,
  inputMode: undefined,
  pattern: undefined,
  readOnly: false,
  spellCheck: undefined,
  tabIndex: undefined,
  className: undefined,
  invalid: undefined,
  innerRef: undefined
};
Input.displayName = 'Input';

var FormOption = function FormOption(_ref) {
  var label = _ref.label,
      hideLabel = _ref.hideLabel,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      inline = _ref.inline,
      type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "hideLabel", "className", "fullWidth", "inline", "type"]);

  var id = props.value ? props.name + "-" + props.value : props.name;
  return React.createElement("div", {
    className: classnames('ln-c-form-option', "ln-c-form-option--" + type, fullWidth && 'ln-c-form-option--full', inline && 'ln-c-form-option--inline', hideLabel && 'ln-c-form-option--hide-label', className)
  }, React.createElement(Input, _extends({
    type: type,
    className: "ln-c-form-option__input"
  }, props, {
    id: id
  })), React.createElement("label", {
    className: "ln-c-form-option__label",
    htmlFor: id
  }, React.createElement("span", null, label)));
};

FormOption.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  inline: PropTypes.bool,
  value: PropTypes.string
};
FormOption.defaultProps = {
  type: 'radio',
  label: undefined,
  hideLabel: false,
  className: undefined,
  fullWidth: false,
  inline: false,
  value: undefined
};
FormOption.displayName = 'FormOption';

var Checkbox = compose(setDisplayName('Checkbox'), withProps({
  type: 'checkbox'
}))(FormOption);

var InputAction = function InputAction(_ref) {
  var children = _ref.children;
  var element = React.Children.only(children);
  return React.cloneElement(element, {
    className: classnames('ln-c-input-group__action', element.props && element.props.className)
  });
};

InputAction.propTypes = {
  children: PropTypes.node
};
InputAction.defaultProps = {
  children: undefined
};
InputAction.displayName = 'InputAction';

var InputButton = function InputButton(_ref) {
  var children = _ref.children;
  var element = React.Children.only(children);
  return React.cloneElement(element, {
    className: classnames('ln-c-input-group__button', element.props && element.props.className)
  });
};

InputButton.propTypes = {
  children: PropTypes.node
};
InputButton.defaultProps = {
  children: undefined
};
InputButton.displayName = 'InputButton';

var InputControl = function InputControl(_ref) {
  var children = _ref.children;
  var element = React.Children.only(children);
  return React.cloneElement(element, {
    className: classnames('ln-c-input-group__control', element.props && element.props.className)
  });
};

InputControl.propTypes = {
  children: PropTypes.node
};
InputControl.defaultProps = {
  children: undefined
};
InputControl.displayName = 'InputControl';

var getComponentName = (function (component) {
  if (!component) return null;
  var type = component.type || component;

  if (typeof type === 'string') {
    return type;
  }

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }

  return null;
});

var InputGroup = function InputGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      hasIcon = _ref.hasIcon,
      hasAction = _ref.hasAction,
      hasButton = _ref.hasButton,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "hasIcon", "hasAction", "hasButton"]);

  var hasIconClass = hasIcon;
  var hasActionClass = hasAction;
  var hasButtonClass = hasButton;
  React.Children.forEach(children, function (child) {
    if (React.isValidElement(child)) {
      var componentName = getComponentName(child);

      if (componentName === 'InputIcon') {
        hasIconClass = true;
      }

      if (componentName === 'InputAction') {
        hasActionClass = true;
      }

      if (componentName === 'InputButton') {
        hasButtonClass = true;
      }
    }
  });
  return React.createElement("div", _extends({}, rest, {
    className: classnames('ln-c-input-group', hasIconClass && 'ln-c-input-group--has-icon', hasActionClass && 'ln-c-input-group--has-action', hasButtonClass && 'ln-c-input-group--has-button', className)
  }), children);
};

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
  hasAction: PropTypes.bool,
  hasButton: PropTypes.bool
};
InputGroup.defaultProps = {
  children: undefined,
  className: undefined,
  hasIcon: false,
  hasAction: false,
  hasButton: false
};
InputGroup.displayName = 'InputGroup';

var InputIcon = function InputIcon(_ref) {
  var children = _ref.children;
  var element = React.Children.only(children);
  return React.cloneElement(element, {
    className: classnames('ln-c-input-group__icon', element.props && element.props.className),
    'aria-hidden': true
  });
};

InputIcon.propTypes = {
  children: PropTypes.node
};
InputIcon.defaultProps = {
  children: undefined
};
InputIcon.displayName = 'InputIcon';

/**
 * Base component extended by all other button variants
 */

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      onClick = _ref.onClick,
      type = _ref.type,
      title = _ref.title,
      element = _ref.element,
      containerElement = _ref.containerElement,
      innerRef = _ref.innerRef,
      buttonRef = _ref.buttonRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "disabled", "fullWidth", "onClick", "type", "title", "element", "containerElement", "innerRef", "buttonRef"]);

  var buttonEl = containerElement || element;

  var props = _extends({}, rest, {
    className: classnames('ln-c-button', className, {
      'is-disabled': disabled,
      'ln-c-button--full': fullWidth
    }),
    'aria-disabled': disabled || undefined,
    role: 'button',
    title: title,
    onClick: onClick,
    ref: innerRef || buttonRef
  });

  if (buttonEl === 'button') {
    props = _extends({}, props, {
      disabled: disabled,
      type: type
    });
  }

  return React.isValidElement(buttonEl) ? React.cloneElement(buttonEl, props, children) : React.createElement(buttonEl, props, children);
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** @deprecated Use `element` */
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string,

  /** @deprecated Use `innerRef` */
  buttonRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
Button.defaultProps = {
  className: undefined,
  disabled: false,
  fullWidth: false,
  type: 'button',
  element: 'button',
  containerElement: undefined,
  title: undefined,
  buttonRef: undefined,
  innerRef: undefined
};
Button.displayName = 'Button';

/**
 * @see Extends [`Button`](#/Components/Button?id=button-1) by adding relevant style `className`
 */

var FilledButton = function FilledButton(props) {
  return React.createElement(Button, _extends({}, props, {
    className: classnames('ln-c-button--filled', props.className)
  }), props.children);
};

FilledButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
FilledButton.defaultProps = {
  className: undefined
};
FilledButton.displayName = 'FilledButton';

/**
 * @see Extends [`Button`](#/Components/Button?id=button-1) by adding relevant style `className`
 */

var TextButton = function TextButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  return React.createElement(Button, _extends({}, props, {
    className: classnames('ln-c-button--text', className)
  }), React.createElement("span", {
    className: "ln-c-button__underline"
  }, children));
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
TextButton.defaultProps = {
  className: undefined
};
TextButton.displayName = 'TextButton';

/**
 * @see Extends [`Button`](#/Components/Button?id=button-1) by adding relevant style `className`
 */

var LinkButton = function LinkButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  return React.createElement(Button, _extends({}, props, {
    className: classnames('ln-c-button--link', className)
  }), children);
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
LinkButton.defaultProps = {
  className: undefined
};
LinkButton.displayName = 'LinkButton';

/**
 * @see Extends [`Button`](#/Components/Button?id=button-1) by adding relevant style `className`
 */

var OutlinedButton = function OutlinedButton(props) {
  return React.createElement(Button, _extends({}, props, {
    className: classnames('ln-c-button--outlined', props.className)
  }), props.children);
};

OutlinedButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
OutlinedButton.defaultProps = {
  className: undefined
};
OutlinedButton.displayName = 'OutlinedButton';

var Cancel = function Cancel(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M4.293 5.707L18.435 19.85a1 1 0 0 0 1.414-1.414L5.707 4.293a1 1 0 0 0-1.414 1.414z"
  }), React.createElement("path", {
    d: "M18.435 4.293L4.293 18.435a1 1 0 0 0 1.414 1.414L19.85 5.707a1 1 0 1 0-1.414-1.414z"
  })));
};

Cancel.defaultProps = {
  viewBox: "0 0 24 24"
};
var Cancel$1 = iconHandler(Cancel);

/**
 * Helper button used primarily inside form controls that makes use of the
 * [`Cancel`](#/Icons) icon
 * @see Extends [`Button`](#/Components/Button?id=button-1)
 */

var CancelButton = function CancelButton(props) {
  return React.createElement(Button, props, React.createElement(Cancel$1, null));
};

CancelButton.displayName = 'CancelButton';

/**
 * @see Extends [`CancelButton`](#/Components?id=cancelbutton) with preset style `className` &
 * `title` for use with dismissable components
 */

var CloseButton = function CloseButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      title = _ref.title,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "onClick", "title"]);

  return React.createElement(CancelButton, _extends({}, rest, {
    className: classnames(className, 'ln-c-dismiss'),
    onClick: onClick,
    title: title
  }));
};

CloseButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
};
CloseButton.defaultProps = {
  className: undefined,
  title: 'Close'
};
CloseButton.displayName = 'CloseButton';

var Search = function Search(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M23.207 21.793l-7.5-7.5a1 1 0 0 0-1.414 1.414l7.5 7.5a1 1 0 0 0 1.414-1.414z"
  }), React.createElement("path", {
    d: "M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18z"
  })));
};

Search.defaultProps = {
  viewBox: "0 0 24 24"
};
var Search$1 = iconHandler(Search);

/**
 * @see Extends [`Button`](#/Components/Button?id=button-1) by adding relevant style `className`
 * @deprecated Use [`FilledButton`](#/Components/Button?id=filledbutton) instead
 */

var PrimaryButton = function PrimaryButton(props) {
  return React.createElement(Button, _extends({}, props, {
    className: classnames('ln-c-button--primary', props.className)
  }), props.children);
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
PrimaryButton.defaultProps = {
  className: undefined
};
PrimaryButton.displayName = 'PrimaryButton';

/**
 * Helper button to be used in combination with form inputs that makes use of the
 * [`Search`](#/Icons) icon
 * @see Extends [`Button`](#/Components/Button?id=button-1)
 */

var SearchButton = function SearchButton(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      inputAction = _ref.inputAction,
      rest = _objectWithoutPropertiesLoose(_ref, ["icon", "text", "inputAction"]);

  var ButtonElement = inputAction ? Button : PrimaryButton;
  return React.createElement(ButtonElement, _extends({
    type: "submit",
    className: "ln-u-hard-ends"
  }, rest), icon, React.createElement("span", {
    className: "ln-u-visually-hidden"
  }, text));
};

SearchButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  inputAction: PropTypes.bool
};
SearchButton.defaultProps = {
  icon: React.createElement(Search$1, null),
  text: 'Search',
  inputAction: false
};
SearchButton.displayName = 'SearchButton';

/* eslint-disable react/prefer-stateless-function */

var ToggleButtonGroup =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ToggleButtonGroup, _Component);

  function ToggleButtonGroup(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getChildren = function getChildren(children) {
    var _this2 = this;

    var _this$props = this.props,
        value = _this$props.value,
        disabled = _this$props.disabled,
        alpha = _this$props.alpha;
    return React.Children.map(children, function (child, index) {
      var childProps = child.props;
      return React.cloneElement(child, {
        index: index,
        disabled: disabled,
        alpha: alpha,
        active: childProps.value === value,
        onClick: _this2.handleClick
      });
    });
  };

  _proto.handleClick = function handleClick(event, value) {
    this.props.onChange(event, value, this.props.value);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        label = _this$props2.label,
        className = _this$props2.className,
        alpha = _this$props2.alpha,
        inline = _this$props2.inline;
    return React.createElement("div", {
      className: classnames(className, 'ln-c-toggle-button-group', alpha && 'ln-c-toggle-button-group--alpha', inline && 'ln-c-toggle-button-group--inline'),
      role: "group",
      "aria-label": label
    }, this.getChildren(children));
  };

  return ToggleButtonGroup;
}(Component);

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
ToggleButtonGroup.propTypes = {
  /** Array of `ToggleButton` components */
  children: PropTypes.node.isRequired,

  /** `aria-label` applied to the toggle button group (useful for screen readers) */
  label: PropTypes.node,

  /** The value of the item that is currently active / selected */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** On change handler */
  onChange: PropTypes.func.isRequired,

  /** Additional classes to be added to the top-level element */
  className: PropTypes.string,

  /** Displays the alpha styling variant */
  alpha: PropTypes.bool,

  /** Display using inline flex (sized to fit contents) */
  inline: PropTypes.bool,

  /** Disables all toggle button items */
  disabled: PropTypes.bool
};
ToggleButtonGroup.defaultProps = {
  label: undefined,
  value: undefined,
  className: undefined,
  alpha: false,
  inline: false,
  disabled: false
};

/**
 * @see [`ToggleButtonGroup`](#/Components/Button?id=togglebuttongroup) for a demo of toggle buttons used in a group.
 */

var ToggleButton = function ToggleButton(_ref) {
  var children = _ref.children,
      value = _ref.value,
      className = _ref.className,
      alpha = _ref.alpha,
      active = _ref.active,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      element = _ref.element,
      role = _ref.role,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "value", "className", "alpha", "active", "disabled", "onClick", "element", "role"]);

  var Item = element;

  var props = _extends({}, rest, {
    className: classnames(className, 'ln-c-toggle-button', alpha && 'ln-c-toggle-button--alpha', active && 'is-active', disabled && 'is-disabled'),
    role: role,
    onClick: onClick && function (event) {
      return onClick(event, value);
    },
    'aria-pressed': active,
    'aria-disabled': disabled
  });

  if (Item === 'button') {
    props.disabled = disabled;
    props.type = 'button';
  }

  return React.createElement(Item, props, children);
};

ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = {
  /** Content displayed by the item */
  children: PropTypes.node.isRequired,

  /** Value of the button when active */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /** Additional classes to be added to the top-level element */
  className: PropTypes.string,

  /** Displays the alpha styling variant */
  alpha: PropTypes.bool,

  /** Is active / selected */
  active: PropTypes.bool,

  /** Is disabled */
  disabled: PropTypes.bool,

  /** On click handler */
  onClick: PropTypes.func,

  /** Allows the top-level element to be customized */
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),

  /** `role` attribute */
  role: PropTypes.string
};
ToggleButton.defaultProps = {
  className: undefined,
  alpha: false,
  active: false,
  disabled: false,
  onClick: undefined,
  element: 'button',
  role: undefined
};

/**
 * @see Extends [`Button`](#/Components/Button?id=button-1) by adding relevant style `className`
 * @deprecated Use [`OutlinedButton`](#/Components/Button?id=outlinedbutton) or
 * [`TextButton`](#/Components/Button?id=textbutton) instead
 */

var SecondaryButton = function SecondaryButton(props) {
  return React.createElement(Button, _extends({}, props, {
    className: classnames('ln-c-button--secondary', props.className)
  }), props.children);
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
SecondaryButton.defaultProps = {
  className: undefined
};
SecondaryButton.displayName = 'SecondaryButton';

// Base

var TextInput = function TextInput(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["className"]);

  return React.createElement(Input, _extends({
    className: classnames('ln-c-text-input', className)
  }, props));
};

TextInput.propTypes = {
  className: PropTypes.string
};
TextInput.defaultProps = {
  className: undefined
};
TextInput.displayName = 'TextInput';

var Password = function Password(_ref) {
  var hasToggle = _ref.hasToggle,
      setTextVisibility = _ref.setTextVisibility,
      showText = _ref.showText,
      props = _objectWithoutPropertiesLoose(_ref, ["hasToggle", "setTextVisibility", "showText"]);

  return React.createElement(InputGroup, null, React.createElement(InputControl, null, React.createElement(TextInput, _extends({}, props, {
    type: showText ? 'text' : 'password'
  }))), hasToggle && setTextVisibility && React.createElement(InputAction, null, React.createElement(Button, {
    onClick: function onClick() {
      return setTextVisibility(!showText);
    }
  }, showText ? 'Hide' : 'Show', React.createElement("span", {
    className: "ln-u-visually-hidden"
  }, "password"))));
};

Password.propTypes = {
  showText: PropTypes.bool,
  hasToggle: PropTypes.bool,
  setTextVisibility: PropTypes.func
};
Password.defaultProps = {
  showText: false,
  hasToggle: false,
  setTextVisibility: undefined
};
Password.displayName = 'Password';
var Password$1 = compose(setDisplayName('Password'), withState('showText', 'setTextVisibility', false))(Password);

var RadioButton = compose(setDisplayName('RadioButton'), withProps({
  type: 'radio'
}))(FormOption);

var SearchInput = function SearchInput(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      action = _ref.action,
      button = _ref.button,
      hasIcon = _ref.hasIcon,
      hasAction = _ref.hasAction,
      hasButton = _ref.hasButton,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "icon", "action", "button", "hasIcon", "hasAction", "hasButton"]);

  return React.createElement(InputGroup, {
    className: className
  }, hasIcon && React.createElement(InputIcon, null, icon), React.createElement(InputControl, null, React.createElement(TextInput, _extends({
    type: "search"
  }, props))), hasAction && React.createElement(InputAction, null, action), hasButton && React.createElement(InputButton, null, button));
};

SearchInput.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  action: PropTypes.node,
  button: PropTypes.node,
  hasIcon: PropTypes.bool,
  hasAction: PropTypes.bool,
  hasButton: PropTypes.bool
};
SearchInput.defaultProps = {
  className: undefined,
  icon: React.createElement(Search$1, null),
  button: undefined,
  action: React.createElement(SearchButton, {
    inputAction: true
  }),
  hasIcon: false,
  hasAction: false,
  hasButton: false
};
SearchInput.displayName = 'SearchInput';

var DEFAULT_PLACEHOLDER = 'Please select';

var Select = function Select(_ref) {
  var name = _ref.name,
      options = _ref.options,
      required = _ref.required,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue,
      readOnly = _ref.readOnly,
      tabIndex = _ref.tabIndex,
      invalid = _ref.invalid,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["name", "options", "required", "disabled", "onBlur", "onChange", "onFocus", "value", "className", "placeholder", "defaultValue", "readOnly", "tabIndex", "invalid", "innerRef"]);

  return React.createElement("select", _extends({}, rest, {
    id: name,
    name: name,
    className: classnames('ln-c-select', className),
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    value: value,
    defaultValue: defaultValue,
    required: required,
    tabIndex: tabIndex,
    disabled: disabled,
    readOnly: readOnly,
    ref: innerRef,
    "aria-disabled": disabled || undefined,
    "aria-required": required === false ? required : undefined,
    "aria-invalid": invalid || undefined
  }), placeholder && React.createElement("option", {
    value: ""
  }, typeof placeholder === 'string' ? placeholder : DEFAULT_PLACEHOLDER), options.map(function (option) {
    return React.createElement("option", {
      key: name + "-" + option.value,
      value: option.value
    }, option.label);
  }));
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number,
  invalid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
Select.defaultProps = {
  disabled: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  placeholder: DEFAULT_PLACEHOLDER,
  className: undefined,
  required: undefined,
  readOnly: false,
  tabIndex: undefined,
  invalid: undefined,
  innerRef: undefined
};
Select.displayName = 'Select';

var TextArea = function TextArea(_ref) {
  var id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      minLength = _ref.minLength,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete,
      autoCapitalize = _ref.autoCapitalize,
      required = _ref.required,
      readOnly = _ref.readOnly,
      spellCheck = _ref.spellCheck,
      tabIndex = _ref.tabIndex,
      className = _ref.className,
      invalid = _ref.invalid,
      cols = _ref.cols,
      rows = _ref.rows,
      wrap = _ref.wrap,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "name", "placeholder", "disabled", "onBlur", "onChange", "onFocus", "value", "defaultValue", "minLength", "maxLength", "autoComplete", "autoCapitalize", "required", "readOnly", "spellCheck", "tabIndex", "className", "invalid", "cols", "rows", "wrap", "innerRef"]);

  return React.createElement("textarea", _extends({}, rest, {
    id: id || name,
    name: name,
    className: classnames('ln-c-text-input ln-c-text-input--textarea', className),
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    tabIndex: tabIndex,
    autoComplete: autoComplete,
    autoCapitalize: autoCapitalize,
    spellCheck: spellCheck,
    required: required,
    minLength: minLength,
    maxLength: maxLength,
    readOnly: readOnly,
    disabled: disabled,
    "aria-disabled": disabled || undefined,
    "aria-required": required === false ? required : undefined,
    "aria-invalid": invalid || undefined,
    cols: cols,
    rows: rows,
    wrap: wrap,
    ref: innerRef
  }));
};

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  autoComplete: PropTypes.string,
  autoCapitalize: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  spellCheck: PropTypes.oneOf(['default', true, false]),
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  wrap: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
TextArea.defaultProps = {
  id: undefined,
  disabled: false,
  placeholder: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  checked: undefined,
  defaultChecked: undefined,
  minLength: undefined,
  maxLength: undefined,
  autoComplete: undefined,
  autoCapitalize: undefined,
  required: undefined,
  readOnly: false,
  spellCheck: undefined,
  tabIndex: undefined,
  className: undefined,
  invalid: undefined,
  rows: undefined,
  cols: undefined,
  wrap: undefined,
  innerRef: undefined
};
TextArea.displayName = 'TextArea';

var ListItem = function ListItem(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "type"]);

  return React.createElement("li", _extends({}, rest, {
    className: classnames(className, (_classnames = {}, _classnames["ln-o-" + type + "-list__item"] = type, _classnames))
  }), children);
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['bare', 'inline', 'matrix', 'justified'])
};
ListItem.defaultProps = {
  className: undefined,
  type: undefined
};
ListItem.displayName = 'ListItem';

var List = function List(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      spaced = _ref.spaced,
      items = _ref.items,
      ordered = _ref.ordered,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "type", "spaced", "items", "ordered"]);

  var ListElement = ordered ? 'ol' : 'ul';
  var keys = [];
  return React.createElement(ListElement, _extends({}, rest, {
    className: classnames(className, (_classnames = {}, _classnames["ln-o-" + type + "-list"] = type, _classnames["ln-o-" + type + "-list--spaced"] = type && spaced, _classnames))
  }), items ? items.map(function (item, index) {
    var key = "listItem-" + (!includes(keys, item.toString()) ? item : index);
    keys.push(item.toString());
    return React.createElement(ListItem, {
      key: key,
      type: type
    }, item);
  }) : children);
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.node),
  type: PropTypes.oneOf(['bare', 'inline', 'matrix', 'justified']),
  spaced: PropTypes.bool,
  ordered: PropTypes.bool
};
List.defaultProps = {
  className: undefined,
  children: false,
  items: undefined,
  type: undefined,
  spaced: false,
  ordered: false
};
List.displayName = 'List';

var LabelInfo = function LabelInfo(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  return React.createElement("span", _extends({}, rest, {
    className: classnames('ln-c-label__info', className)
  }), children);
};

LabelInfo.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
LabelInfo.defaultProps = {
  className: undefined
};
LabelInfo.displayName = 'LabelInfo';

var DEFAULT_REQUIRED_INDICATOR = '';
var DEFAULT_OPTIONAL_INDICATOR = '(optional)';

var Label = function Label(_ref) {
  var element = _ref.element,
      htmlFor = _ref.htmlFor,
      requiredLabel = _ref.requiredLabel,
      optionalLabel = _ref.optionalLabel,
      children = _ref.children,
      className = _ref.className,
      hidden = _ref.hidden,
      rest = _objectWithoutPropertiesLoose(_ref, ["element", "htmlFor", "requiredLabel", "optionalLabel", "children", "className", "hidden"]);

  var Element = element;
  var indicator;

  if (optionalLabel !== undefined) {
    indicator = optionalLabel === true ? DEFAULT_OPTIONAL_INDICATOR : optionalLabel;
  }

  if (requiredLabel !== undefined) {
    indicator = requiredLabel === true ? DEFAULT_REQUIRED_INDICATOR : requiredLabel;
  }

  return React.createElement(Element, _extends({}, rest, {
    htmlFor: htmlFor,
    className: classnames(className, 'ln-c-label', hidden && 'ln-u-visually-hidden')
  }), children, indicator && React.createElement(LabelInfo, null, " ", indicator));
};

Label.propTypes = {
  element: PropTypes.oneOfType([PropTypes.oneOf(['label', 'legend']), PropTypes.func]),
  htmlFor: PropTypes.string.isRequired,
  requiredLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  optionalLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  hidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Label.defaultProps = {
  element: 'label',
  requiredLabel: undefined,
  optionalLabel: undefined,
  hidden: false,
  className: undefined
};
Label.displayName = 'Label';

var FieldInfo = function FieldInfo(_ref) {
  var id = _ref.id,
      children = _ref.children,
      error = _ref.error,
      warning = _ref.warning,
      className = _ref.className,
      displayFirst = _ref.displayFirst,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "children", "error", "warning", "className", "displayFirst"]);

  return React.createElement("div", _extends({}, rest, {
    id: id,
    className: classnames(className, 'ln-c-field-info', {
      'ln-c-field-info--validation-first': displayFirst,
      'ln-c-field-info--error': error || warning,
      'ln-c-field-info--extra': !error && !warning
    }),
    role: error || warning ? 'alert' : undefined
  }), children);
};

FieldInfo.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  className: PropTypes.string,
  displayFirst: PropTypes.bool
};
FieldInfo.defaultProps = {
  id: undefined,
  error: false,
  warning: false,
  className: undefined,
  displayFirst: false
};
FieldInfo.displayName = 'FieldInfo';

var FormGroup = function FormGroup(_ref) {
  var element = _ref.element,
      labelElement = _ref.labelElement,
      name = _ref.name,
      required = _ref.required,
      optional = _ref.optional,
      label = _ref.label,
      error = _ref.error,
      warning = _ref.warning,
      info = _ref.info,
      children = _ref.children,
      className = _ref.className,
      validationFirst = _ref.validationFirst,
      hideLabel = _ref.hideLabel,
      rest = _objectWithoutPropertiesLoose(_ref, ["element", "labelElement", "name", "required", "optional", "label", "error", "warning", "info", "children", "className", "validationFirst", "hideLabel"]);

  var Element = element;
  var hasError = !!error;
  var hasWarning = !!warning;
  return React.createElement(Element, _extends({}, rest, {
    className: classnames(className, 'ln-c-form-group', {
      'has-error': hasError,
      'has-warning': hasWarning
    })
  }), !!label && React.createElement(Label, {
    element: labelElement,
    htmlFor: name,
    requiredLabel: required,
    optionalLabel: optional,
    hidden: hideLabel
  }, label), !!info && React.createElement(FieldInfo, {
    id: name + "Info"
  }, info), (hasError || hasWarning) && React.createElement(FieldInfo, {
    id: name + "Validation",
    displayFirst: validationFirst,
    error: hasError,
    warning: hasWarning
  }, error || warning), children);
};

FormGroup.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  labelElement: Label.propTypes.element,
  name: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  optional: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  error: PropTypes.node,
  warning: PropTypes.node,
  info: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  validationFirst: PropTypes.bool
};
FormGroup.defaultProps = {
  element: 'div',
  labelElement: undefined,
  required: undefined,
  optional: undefined,
  label: undefined,
  hideLabel: false,
  info: undefined,
  warning: undefined,
  error: undefined,
  className: undefined,
  validationFirst: true
};
FormGroup.displayName = 'FormGroup';

var propTypes = _extends({}, FormGroup.propTypes);

delete propTypes.children;

var getRequiredFlag = (function (required, optional) {
  return required !== undefined || optional !== undefined ? !!required : undefined;
});

var getDescribedByIds = (function (_ref) {
  var name = _ref.name,
      info = _ref.info,
      error = _ref.error,
      warning = _ref.warning;
  return [info !== undefined && name + "Info", (error !== undefined || warning !== undefined) && name + "Validation"].filter(function (id) {
    return !!id;
  });
});

var getChecked = function getChecked(_ref) {
  var optionGroupValue = _ref.optionGroupValue,
      optionValue = _ref.optionValue,
      optionChecked = _ref.optionChecked;
  var checked;
  if (optionGroupValue !== undefined) checked = optionValue === optionGroupValue;
  if (optionChecked !== undefined) checked = optionChecked;
  return checked;
};

var FormOptionFieldInput = function FormOptionFieldInput(_ref2) {
  var option = _ref2.option,
      optionGroupValue = _ref2.optionGroupValue,
      props = _objectWithoutPropertiesLoose(_ref2, ["option", "optionGroupValue"]);

  return React.createElement(FormOption, _extends({}, props, {
    label: option.label,
    value: option.value,
    checked: getChecked({
      optionGroupValue: optionGroupValue,
      optionValue: option.value,
      optionChecked: option.checked
    }),
    defaultChecked: option.defaultChecked
  }));
};

FormOptionFieldInput.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.string,
    checked: PropTypes.bool
  }).isRequired,
  optionGroupValue: PropTypes.string
};
FormOptionFieldInput.defaultProps = {
  optionGroupValue: undefined
};
FormOptionFieldInput.displayName = 'FormOptionFieldInput';

var FormOptionField = function FormOptionField(_ref3) {
  var className = _ref3.className,
      required = _ref3.required,
      requiredLabel = _ref3.requiredLabel,
      optional = _ref3.optional,
      optionalLabel = _ref3.optionalLabel,
      validationFirst = _ref3.validationFirst,
      label = _ref3.label,
      hideLabel = _ref3.hideLabel,
      error = _ref3.error,
      warning = _ref3.warning,
      info = _ref3.info,
      options = _ref3.options,
      optionType = _ref3.optionType,
      listType = _ref3.listType,
      props = _objectWithoutPropertiesLoose(_ref3, ["className", "required", "requiredLabel", "optional", "optionalLabel", "validationFirst", "label", "hideLabel", "error", "warning", "info", "options", "optionType", "listType"]);

  var requiredFlag = getRequiredFlag(required, optional);
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error
  });
  var optionGroupValue = props.value !== undefined ? props.value.toString() : undefined;

  var optionInputProps = _extends({}, props, {
    type: optionType,
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined
  });

  return React.createElement(FormGroup, {
    element: "fieldset",
    labelElement: "legend",
    name: props.name,
    required: required,
    optional: optional,
    label: label,
    hideLabel: hideLabel,
    error: error,
    warning: warning,
    info: info,
    className: className,
    validationFirst: validationFirst
  }, options.length > 1 ? React.createElement(List, {
    type: listType
  }, options.map(function (option) {
    return React.createElement(ListItem, {
      type: listType,
      key: props.name + "-" + option.value
    }, React.createElement(FormOptionFieldInput, _extends({}, optionInputProps, {
      option: option,
      optionGroupValue: optionGroupValue,
      innerRef: option.innerRef
    })));
  })) : React.createElement(FormOptionFieldInput, _extends({}, optionInputProps, {
    option: options[0],
    optionGroupValue: optionGroupValue,
    innerRef: options[0].innerRef
  })));
};

FormOptionField.propTypes = _extends({}, propTypes, {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionType: PropTypes.oneOf(['radio', 'checkbox']),
  listType: PropTypes.string
});
FormOptionField.defaultProps = {
  optionType: 'radio',
  listType: 'bare'
};
FormOptionField.displayName = 'FormOptionField';

var CheckboxField = compose(setDisplayName('CheckboxField'), withProps({
  optionType: 'checkbox'
}))(FormOptionField);

var Card = function Card(_ref) {
  var className = _ref.className,
      padded = _ref.padded,
      hard = _ref.hard,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "padded", "hard", "children"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames('ln-c-card', className, {
      'ln-c-card--soft': padded === false || !hard
    })
  }), children);
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,

  /** @deprecated Use `hard` to reset padding */
  padded: PropTypes.bool,
  hard: PropTypes.bool
};
Card.defaultProps = {
  className: undefined,
  padded: true,
  hard: false
};
Card.displayName = 'Card';

var Fieldset = function Fieldset(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement(Card, _extends({}, rest, {
    className: className
  }), React.createElement("fieldset", null, children));
};

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
Fieldset.defaultProps = {
  children: undefined,
  className: undefined
};
Fieldset.displayName = 'Fieldset';

var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onSubmit = _ref.onSubmit,
      useBrowserValidation = _ref.useBrowserValidation,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "onSubmit", "useBrowserValidation"]);

  return React.createElement("form", _extends({}, rest, {
    noValidate: !useBrowserValidation,
    onSubmit: onSubmit,
    className: className
  }), children);
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  useBrowserValidation: PropTypes.bool
};
Form.defaultProps = {
  className: undefined,
  onSubmit: undefined,
  useBrowserValidation: false
};
Form.displayName = 'Form';

var Text = function Text(_ref) {
  var children = _ref.children,
      element = _ref.element,
      className = _ref.className,
      typeStyle = _ref.typeStyle,
      fixed = _ref.fixed,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "element", "className", "typeStyle", "fixed"]);

  var Element = element;
  return React.createElement(Element, _extends({}, rest, {
    className: classnames(typeStyle && "ln-u-" + typeStyle + (fixed ? '-fixed' : ''), className)
  }), children);
};

Text.propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  className: PropTypes.string,
  typeStyle: PropTypes.string,
  fixed: PropTypes.bool
};
Text.defaultProps = {
  children: undefined,
  element: 'span',
  className: undefined,
  typeStyle: undefined,
  fixed: false
};
Text.displayName = 'Text';

var Heading = function Heading(_ref) {
  var children = _ref.children,
      element = _ref.element,
      level = _ref.level,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "element", "level"]);

  var props = {};
  var hElement = element || "h" + level;

  if (typeof hElement !== 'string' || !/h[1-6]/i.test(hElement)) {
    props = {
      role: 'heading',
      'aria-level': level,
      typeStyle: "h" + level
    };
  }

  return React.createElement(Text, _extends({}, rest, {
    element: hElement
  }, props), children);
};

Heading.propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  level: PropTypes.number
};
Heading.defaultProps = {
  children: undefined,
  element: undefined,
  level: 1
};
Heading.displayName = 'Heading';

var createHeadingVariants = (function (level) {
  return compose(setDisplayName("Heading" + level), withProps({
    level: level
  }))(Heading);
});

/** @component */

var Heading1 = createHeadingVariants(1);
var Heading2 = createHeadingVariants(2);
var Heading3 = createHeadingVariants(3);
var Heading4 = createHeadingVariants(4);
var Heading5 = createHeadingVariants(5);
var Heading6 = createHeadingVariants(6);

var getDisplayName = function getDisplayName(typeStyle) {
  return "" + typeStyle.charAt(0).toUpperCase() + typeStyle.substring(1).replace('-', '');
};

var createTypeStyleVariant = (function (typeStyle) {
  return compose(setDisplayName(getDisplayName(typeStyle)), withProps({
    typeStyle: typeStyle
  }))(Text);
});

var Caption = createTypeStyleVariant('caption');
var Body1 = createTypeStyleVariant('body-1');
var Body2 = createTypeStyleVariant('body-2');
var ButtonText = createTypeStyleVariant('button');
var Display1 = createTypeStyleVariant('display-1');
var Display2 = createTypeStyleVariant('display-2');
var Display3 = createTypeStyleVariant('display-3');
var Display4 = createTypeStyleVariant('display-4');
var Display5 = createTypeStyleVariant('display-5');
var Display6 = createTypeStyleVariant('display-6');
var Display7 = createTypeStyleVariant('display-7');

var Legend = function Legend(_ref) {
  var children = _ref.children,
      headingLevel = _ref.headingLevel,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "headingLevel"]);

  return React.createElement(Heading, _extends({}, rest, {
    element: "legend",
    level: headingLevel
  }), children);
};

Legend.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fontStyle: PropTypes.string,
  headingLevel: PropTypes.number
};
Legend.defaultProps = {
  children: undefined,
  className: undefined,
  fontStyle: undefined,
  headingLevel: 3
};
Legend.displayName = 'Legend';

var DEFAULT_LEVELS = {
  0: {
    className: '',
    caption: 'Too short',
    test: function test() {
      return true;
    }
  },
  1: {
    className: 'is-level-1',
    caption: 'Bad',
    test: function test(value) {
      return value.length > 7;
    }
  },
  2: {
    className: 'is-level-2',
    caption: 'Ok',
    test: function test(value) {
      return value.length > 9;
    }
  },
  3: {
    className: 'is-level-3',
    caption: 'Good',
    test: function test(value) {
      return value.length > 11;
    }
  },
  4: {
    className: 'is-level-4',
    caption: 'Great',
    test: function test(value) {
      return value.length > 13;
    }
  }
};

var getLevel = function getLevel(value, levelMap) {
  var levels = Object.keys(levelMap);
  var reversedLevels = levels.reverse();

  if (value !== undefined) {
    for (var i = 0; i < levels.length; i += 1) {
      if (levelMap[reversedLevels[i]].test(value)) {
        return levelMap[reversedLevels[i]];
      }
    }
  }

  return levelMap[levels[0]];
};

var PasswordField =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PasswordField, _Component);

  function PasswordField(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      value: props.value || props.defaultValue || ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = PasswordField.prototype;

  _proto.handleChange = function handleChange(event) {
    this.setState({
      value: event.target.value
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        levels = _this$props.levels,
        strengthIndicator = _this$props.strengthIndicator,
        className = _this$props.className,
        required = _this$props.required,
        requiredLabel = _this$props.requiredLabel,
        optional = _this$props.optional,
        optionalLabel = _this$props.optionalLabel,
        validationFirst = _this$props.validationFirst,
        label = _this$props.label,
        hideLabel = _this$props.hideLabel,
        error = _this$props.error,
        warning = _this$props.warning,
        info = _this$props.info,
        props = _objectWithoutPropertiesLoose(_this$props, ["levels", "strengthIndicator", "className", "required", "requiredLabel", "optional", "optionalLabel", "validationFirst", "label", "hideLabel", "error", "warning", "info"]);

    var strengthIndicatorId = props.name + "StrengthIndicator";
    var requiredFlag = getRequiredFlag(required, optional);
    var describedBy = getDescribedByIds({
      name: props.name,
      info: info,
      warning: warning,
      error: error
    }).concat([strengthIndicatorId]);
    var level = getLevel(this.state.value, levels);
    return React.createElement(FormGroup, {
      name: props.name,
      required: required,
      optional: optional,
      label: label,
      hideLabel: hideLabel,
      error: error,
      warning: warning,
      info: info,
      className: className,
      validationFirst: validationFirst
    }, React.createElement(Password$1, _extends({
      required: requiredFlag,
      invalid: error !== undefined ? !!error : undefined,
      "aria-describedby": describedBy.join(' ')
    }, props, {
      value: this.state.value,
      onChange: this.handleChange
    })), strengthIndicator && React.createElement("div", {
      className: "ln-c-password-strength-meter " + level.className
    }, React.createElement("p", {
      id: strengthIndicatorId,
      className: "ln-c-password-strength-meter__label",
      "aria-live": "polite",
      "aria-atomic": "true"
    }, "Strength:", ' ', React.createElement("span", {
      className: "ln-c-password-strength-meter__value"
    }, level.caption))));
  };

  return PasswordField;
}(Component);

PasswordField.propTypes = _extends({}, propTypes, {
  levels: PropTypes.shape({}),
  strengthIndicator: PropTypes.bool
});
PasswordField.defaultProps = {
  levels: DEFAULT_LEVELS,
  strengthIndicator: false
};
PasswordField.displayName = 'PasswordField';

var RadioButtonField = compose(setDisplayName('RadioButtonField'), withProps({
  optionType: 'radio'
}))(FormOptionField);

var excludeProps = ['setValue', 'clearValue', 'setRef'];

var SearchField = function SearchField(_ref) {
  var className = _ref.className,
      required = _ref.required,
      requiredLabel = _ref.requiredLabel,
      optional = _ref.optional,
      optionalLabel = _ref.optionalLabel,
      validationFirst = _ref.validationFirst,
      label = _ref.label,
      hideLabel = _ref.hideLabel,
      error = _ref.error,
      warning = _ref.warning,
      info = _ref.info,
      labelElement = _ref.labelElement,
      button = _ref.button,
      element = _ref.element,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "required", "requiredLabel", "optional", "optionalLabel", "validationFirst", "label", "hideLabel", "error", "warning", "info", "labelElement", "button", "element"]);

  var requiredFlag = getRequiredFlag(required, optional);
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error
  });

  var inputProps = _extends({}, props, {
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined
  });

  return React.createElement(FormGroup, {
    name: props.name,
    required: required,
    optional: optional,
    label: label,
    hideLabel: hideLabel,
    error: error,
    warning: warning,
    info: info,
    className: className,
    validationFirst: validationFirst,
    labelElement: labelElement,
    element: element
  }, React.createElement(SearchInput, _extends({}, filterProps(inputProps, excludeProps), {
    button: button
  })));
};

SearchField.propTypes = _extends({}, propTypes, {
  button: PropTypes.node
});
SearchField.defaultProps = {
  button: React.createElement(SearchButton, null)
};
SearchField.displayName = 'SearchField';

var SelectField = function SelectField(_ref) {
  var className = _ref.className,
      required = _ref.required,
      requiredLabel = _ref.requiredLabel,
      optional = _ref.optional,
      optionalLabel = _ref.optionalLabel,
      validationFirst = _ref.validationFirst,
      label = _ref.label,
      hideLabel = _ref.hideLabel,
      error = _ref.error,
      warning = _ref.warning,
      info = _ref.info,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "required", "requiredLabel", "optional", "optionalLabel", "validationFirst", "label", "hideLabel", "error", "warning", "info"]);

  var requiredFlag = getRequiredFlag(required, optional);
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error
  });
  return React.createElement(FormGroup, {
    name: props.name,
    required: required,
    optional: optional,
    label: label,
    hideLabel: hideLabel,
    error: error,
    warning: warning,
    info: info,
    className: className,
    validationFirst: validationFirst
  }, React.createElement(Select, _extends({
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    "aria-describedby": describedBy.length > 0 ? describedBy.join(' ') : undefined
  }, props)));
};

SelectField.propTypes = propTypes;
SelectField.displayName = 'SelectField';

var TextAreaField =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TextAreaField, _Component);

  function TextAreaField(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      value: props.value || props.defaultValue || ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = TextAreaField.prototype;

  _proto.handleChange = function handleChange(event) {
    this.setState({
      value: event.target.value
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        characterCount = _this$props.characterCount,
        className = _this$props.className,
        required = _this$props.required,
        requiredLabel = _this$props.requiredLabel,
        optional = _this$props.optional,
        optionalLabel = _this$props.optionalLabel,
        validationFirst = _this$props.validationFirst,
        label = _this$props.label,
        hideLabel = _this$props.hideLabel,
        error = _this$props.error,
        warning = _this$props.warning,
        info = _this$props.info,
        props = _objectWithoutPropertiesLoose(_this$props, ["characterCount", "className", "required", "requiredLabel", "optional", "optionalLabel", "validationFirst", "label", "hideLabel", "error", "warning", "info"]);

    var counterId = props.name + "Counter";
    var requiredFlag = getRequiredFlag(required, optional);
    var describedBy = getDescribedByIds({
      name: props.name,
      info: info,
      warning: warning,
      error: error
    }).concat([counterId]);
    return React.createElement(FormGroup, {
      name: props.name,
      required: required,
      optional: optional,
      label: label,
      hideLabel: hideLabel,
      error: error,
      warning: warning,
      info: info,
      className: className,
      validationFirst: validationFirst
    }, React.createElement(TextArea, _extends({
      required: requiredFlag,
      invalid: error !== undefined ? !!error : undefined,
      "aria-describedby": describedBy.join(' ')
    }, props, {
      onChange: this.handleChange,
      value: this.state.value
    })), characterCount && props.maxLength && React.createElement("p", {
      id: counterId,
      "aria-live": "polite",
      "aria-atomic": "true"
    }, this.state.value.length, React.createElement("span", {
      className: "ln-u-visually-hidden"
    }, " out of "), React.createElement("span", {
      "aria-hidden": "true"
    }, " / "), props.maxLength));
  };

  return TextAreaField;
}(Component);

TextAreaField.propTypes = _extends({}, propTypes, {
  characterCount: PropTypes.bool
});
TextAreaField.defaultProps = {
  characterCount: false
};
TextAreaField.displayName = 'TextAreaField';

var TextInputField = function TextInputField(_ref) {
  var className = _ref.className,
      required = _ref.required,
      requiredLabel = _ref.requiredLabel,
      optional = _ref.optional,
      optionalLabel = _ref.optionalLabel,
      validationFirst = _ref.validationFirst,
      label = _ref.label,
      hideLabel = _ref.hideLabel,
      error = _ref.error,
      warning = _ref.warning,
      info = _ref.info,
      labelElement = _ref.labelElement,
      button = _ref.button,
      icon = _ref.icon,
      action = _ref.action,
      actionFirst = _ref.actionFirst,
      element = _ref.element,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "required", "requiredLabel", "optional", "optionalLabel", "validationFirst", "label", "hideLabel", "error", "warning", "info", "labelElement", "button", "icon", "action", "actionFirst", "element"]);

  var requiredFlag = getRequiredFlag(required, optional);
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error
  });
  return React.createElement(FormGroup, {
    name: props.name,
    required: required,
    optional: optional,
    label: label,
    hideLabel: hideLabel,
    error: error,
    warning: warning,
    info: info,
    className: className,
    validationFirst: validationFirst,
    labelElement: labelElement,
    element: element
  }, React.createElement(InputGroup, null, icon && React.createElement(InputIcon, null, icon), action && actionFirst && React.createElement(InputAction, null, action), React.createElement(InputControl, null, React.createElement(TextInput, _extends({
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    "aria-describedby": describedBy.length > 0 ? describedBy.join(' ') : undefined
  }, filterProps(props, ['setValue', 'clearValue', 'setRef', 'hasAction', 'onClear'])))), action && !actionFirst && React.createElement(InputAction, null, action), button && React.createElement(InputButton, null, button)));
};

TextInputField.propTypes = _extends({}, propTypes, {
  icon: PropTypes.node,
  action: PropTypes.node,
  button: PropTypes.node,
  actionFirst: PropTypes.bool
});
TextInputField.defaultProps = {
  icon: undefined,
  action: undefined,
  button: undefined,
  actionFirst: false
};
TextInputField.displayName = 'TextInputField';

var onChangeHandler = function onChangeHandler(_ref) {
  var onChange = _ref.onChange,
      setValue = _ref.setValue;
  return function (e) {
    if (onChange) {
      onChange(e);
    }

    setValue(e.target.value);
  };
};
var getClearActionProps = function getClearActionProps(value, clearValue) {
  return value.length > 0 ? {
    hasAction: true,
    action: React.createElement(CancelButton, {
      onClick: clearValue,
      "aria-label": "Clear the field"
    })
  } : {
    hasAction: false,
    action: undefined
  };
};
var setFieldGroupElement = function setFieldGroupElement(_ref2) {
  var setRef = _ref2.setRef;
  return {
    // eslint-disable-next-line react/prop-types, react/display-name
    element: function element(_ref3) {
      var children = _ref3.children,
          className = _ref3.className;
      return React.createElement("div", {
        ref: setRef,
        className: className
      }, children);
    }
  };
};

var withClear = function withClear(WrappedField) {
  /* istanbul ignore next */
  var WithClear = compose(setDisplayName('WithClear'), withState('value', 'setValue', function (_ref4) {
    var defaultValue = _ref4.defaultValue,
        _ref4$value = _ref4.value,
        value = _ref4$value === void 0 ? '' : _ref4$value;
    return defaultValue || value;
  }), withHandlers(function (_ref5) {
    var onClear = _ref5.onClear;
    var input;
    return {
      onChange: onChangeHandler,
      clearValue: function clearValue(_ref6) {
        var setValue = _ref6.setValue;
        return function () {
          setValue('');

          if (input) {
            input.focus();
          }

          if (onClear) {
            onClear();
          }
        };
      },
      setRef: function setRef() {
        return function (field) {
          if (field) {
            input = field.querySelector('input');
          }
        };
      }
    };
  }), withProps(function (_ref7) {
    var value = _ref7.value,
        clearValue = _ref7.clearValue;
    return _extends({}, getClearActionProps(value, clearValue));
  }), withPropsOnChange(function () {
    return false;
  }, setFieldGroupElement))(WrappedField);
  return WithClear;
};

var ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12 9.414l-7.293 7.293a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 1 1-1.414 1.414L12 9.414z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

ArrowUp.defaultProps = {
  viewBox: "0 0 24 24"
};
var ArrowUp$1 = iconHandler(ArrowUp);

var onKeyPress = (function (match, callback) {
  return function (e) {
    if (match.filter(function (key) {
      return e.key && e.key === key.name || e.keyCode && e.keyCode === key.code;
    }).length > 0) {
      callback(e);
    }
  };
});

var AutocompleteInputGroup = function AutocompleteInputGroup(_ref) {
  var getInputProps = _ref.getInputProps,
      getToggleButtonProps = _ref.getToggleButtonProps,
      getClearButtonProps = _ref.getClearButtonProps,
      selectedOption = _ref.selectedOption,
      selectedOptions = _ref.selectedOptions,
      isOpen = _ref.isOpen,
      placeholder = _ref.placeholder,
      describedBy = _ref.describedBy,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      getOptionValue = _ref.getOptionValue,
      icon = _ref.icon,
      action = _ref.action,
      hideInput = _ref.hideInput,
      autoComplete = _ref.autoComplete,
      rest = _objectWithoutPropertiesLoose(_ref, ["getInputProps", "getToggleButtonProps", "getClearButtonProps", "selectedOption", "selectedOptions", "isOpen", "placeholder", "describedBy", "onChange", "getOptionLabel", "getOptionValue", "icon", "action", "hideInput", "autoComplete"]);

  var selectedOptionsLength = selectedOptions.length;
  var isMultiple = selectedOptionsLength > 0;
  var clearButtonProps = getClearButtonProps();

  var handleBackspace = function handleBackspace(e) {
    if (e.target.value.length > 0 && !selectedOption) {
      return true;
    }

    if (isMultiple) {
      return clearButtonProps.onClick(selectedOptions[selectedOptionsLength - 1]);
    }

    return clearButtonProps.onClick();
  };

  var inputProps = getInputProps({
    onChange: onChange,
    onKeyDown: onKeyPress([{
      name: 'Backspace',
      code: 8
    }], handleBackspace),
    role: 'textbox'
  });
  return React.createElement(InputGroup, null, icon && React.createElement(InputIcon, null, icon), React.createElement(InputControl, null, React.createElement("div", {
    className: classnames('ln-c-autocomplete', isOpen && 'is-open')
  }, isMultiple && selectedOptions.map(function (item) {
    return React.createElement("span", {
      key: getOptionValue(item),
      className: "ln-c-autocomplete__selected-item"
    }, getOptionLabel(item), React.createElement("button", _extends({
      type: "button",
      className: "ln-c-autocomplete__clear-selected-item"
    }, clearButtonProps, {
      onClick: function onClick() {
        return clearButtonProps.onClick(item);
      }
    }), React.createElement(Cancel$1, {
      fixed: true
    })));
  }), !hideInput && React.createElement(Input, _extends({}, rest, {
    className: "ln-c-autocomplete__input",
    name: inputProps.id
  }, inputProps, {
    value: !isMultiple && selectedOption ? getOptionLabel(selectedOption) : inputProps.value,
    placeholder: placeholder,
    "aria-describedby": describedBy,
    autoComplete: autoComplete
  })))), (!hideInput && action || selectedOption) && React.createElement(InputAction, null, selectedOption ? React.createElement(Button, clearButtonProps, React.createElement(Cancel$1, null)) : action && React.createElement(Button, getToggleButtonProps(), isOpen ? React.createElement(ArrowUp$1, null) : React.createElement(ArrowDown$1, null))));
};

AutocompleteInputGroup.propTypes = {
  getInputProps: PropTypes.func.isRequired,
  getToggleButtonProps: PropTypes.func.isRequired,
  getClearButtonProps: PropTypes.func.isRequired,
  selectedOption: PropTypes.shape({}),
  selectedOptions: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool,
  placeholder: PropTypes.string,
  describedBy: PropTypes.string,
  onChange: PropTypes.func,
  getOptionLabel: PropTypes.func.isRequired,
  getOptionValue: PropTypes.func.isRequired,
  icon: PropTypes.node,
  action: PropTypes.bool,
  hideInput: PropTypes.bool,
  autoComplete: PropTypes.string
};
AutocompleteInputGroup.defaultProps = {
  selectedOption: undefined,
  selectedOptions: [],
  isOpen: false,
  placeholder: undefined,
  describedBy: undefined,
  onChange: undefined,
  icon: undefined,
  action: true,
  hideInput: false,
  autoComplete: 'off'
};
AutocompleteInputGroup.displayName = 'AutocompleteInputGroup';

var ResultList = function ResultList(_ref) {
  var getOptionLabel = _ref.getOptionLabel,
      getOptionValue = _ref.getOptionValue,
      getMenuProps = _ref.getMenuProps,
      getItemProps = _ref.getItemProps,
      options = _ref.options,
      isOpen = _ref.isOpen,
      selectedItem = _ref.selectedItem,
      highlightedIndex = _ref.highlightedIndex,
      optionRenderer = _ref.optionRenderer,
      verticalAlign = _ref.verticalAlign,
      className = _ref.className,
      noResultsMessage = _ref.noResultsMessage,
      rest = _objectWithoutPropertiesLoose(_ref, ["getOptionLabel", "getOptionValue", "getMenuProps", "getItemProps", "options", "isOpen", "selectedItem", "highlightedIndex", "optionRenderer", "verticalAlign", "className", "noResultsMessage"]);

  return React.createElement("ul", _extends({}, rest, getMenuProps(), {
    className: classnames('ln-c-dropdown-list', 'ln-c-dropdown-list--overlay', className)
  }), isOpen && (options.length > 0 ?
  /* eslint-disable jsx-a11y/role-supports-aria-props */
  options.map(function (option, index) {
    return React.createElement("li", _extends({
      className: classnames('ln-c-dropdown-list__item', verticalAlign && "ln-c-dropdown-list__item--align-" + verticalAlign, selectedItem === option && 'is-selected', highlightedIndex === index && 'is-hover')
    }, getItemProps({
      key: getOptionValue(option),
      item: option,
      index: index
    }), {
      "aria-selected": selectedItem === option || undefined
    }), optionRenderer ? optionRenderer(option) : getOptionLabel(option));
  }) : React.createElement("li", {
    className: classnames('ln-c-dropdown-list__item', 'ln-c-dropdown-list__item--message', verticalAlign && "ln-c-dropdown-list__item--align-" + verticalAlign)
  }, noResultsMessage)));
};

ResultList.propTypes = {
  getOptionLabel: PropTypes.func.isRequired,
  getOptionValue: PropTypes.func.isRequired,
  getMenuProps: PropTypes.func.isRequired,
  getItemProps: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool,
  optionRenderer: PropTypes.func,
  selectedItem: PropTypes.shape({}),
  highlightedIndex: PropTypes.number,
  verticalAlign: PropTypes.string,
  className: PropTypes.string,
  noResultsMessage: PropTypes.node
};
ResultList.defaultProps = {
  options: [],
  isOpen: false,
  optionRenderer: undefined,
  selectedItem: undefined,
  highlightedIndex: undefined,
  verticalAlign: 'center',
  className: undefined,
  noResultsMessage: 'No results found'
};
ResultList.displayName = 'ResultList';

var HiddenInput = function HiddenInput(_ref) {
  var multiSelect = _ref.multiSelect,
      name = _ref.name,
      value = _ref.value;

  if (multiSelect) {
    return React.createElement(Fragment, null, value.length > 0 ? value.map(function (optionValue) {
      return React.createElement("input", {
        key: optionValue,
        name: name + "[]",
        type: "hidden",
        value: optionValue
      });
    }) : React.createElement("input", {
      name: name + "[]",
      type: "hidden",
      value: ""
    }));
  }

  return React.createElement("input", {
    name: name,
    type: "hidden",
    value: value
  });
};

HiddenInput.propTypes = {
  multiSelect: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};
HiddenInput.defaultProps = {
  multiSelect: false,
  value: ''
};
HiddenInput.displayName = 'HiddenInput';

var getOptionLabel = function getOptionLabel(option) {
  return option ? option.label : '';
};

var getOptionValue = function getOptionValue(option) {
  return option ? option.value : '';
};

var matchOperators = /[|\\{}()[\]^$+*?.]/g;

var escapeStringRegExp = function escapeStringRegExp(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.replace(matchOperators, '\\$&');
};

var createFilter = function createFilter(inputValue, getOptionLabel) {
  return function (option) {
    return new RegExp(escapeStringRegExp(inputValue), 'gi').test(getOptionLabel(option));
  };
};

var AutocompleteFormGroup = function AutocompleteFormGroup(_ref) {
  var name = _ref.name,
      required = _ref.required,
      optional = _ref.optional,
      multiSelect = _ref.multiSelect,
      async = _ref.async,
      selectedOptions = _ref.selectedOptions,
      onClear = _ref.onClear,
      placeholder = _ref.placeholder,
      getOptionLabel$$1 = _ref.getOptionLabel,
      getOptionValue$$1 = _ref.getOptionValue,
      icon = _ref.icon,
      action = _ref.action,
      onChange = _ref.onChange,
      options = _ref.options,
      filter = _ref.filter,
      value = _ref.value,
      optionRenderer = _ref.optionRenderer,
      noResultsMessage = _ref.noResultsMessage,
      label = _ref.label,
      hideLabel = _ref.hideLabel,
      error = _ref.error,
      warning = _ref.warning,
      info = _ref.info,
      className = _ref.className,
      validationFirst = _ref.validationFirst,
      element = _ref.element,
      getInputProps = _ref.getInputProps,
      getItemProps = _ref.getItemProps,
      getLabelProps = _ref.getLabelProps,
      getMenuProps = _ref.getMenuProps,
      isOpen = _ref.isOpen,
      inputValue = _ref.inputValue,
      highlightedIndex = _ref.highlightedIndex,
      selectedItem = _ref.selectedItem,
      getToggleButtonProps = _ref.getToggleButtonProps,
      clearSelection = _ref.clearSelection,
      rest = _objectWithoutPropertiesLoose(_ref, ["name", "required", "optional", "multiSelect", "async", "selectedOptions", "onClear", "placeholder", "getOptionLabel", "getOptionValue", "icon", "action", "onChange", "options", "filter", "value", "optionRenderer", "noResultsMessage", "label", "hideLabel", "error", "warning", "info", "className", "validationFirst", "element", "getInputProps", "getItemProps", "getLabelProps", "getMenuProps", "isOpen", "inputValue", "highlightedIndex", "selectedItem", "getToggleButtonProps", "clearSelection"]);

  var requiredFlag = getRequiredFlag(required, optional);
  var describedBy = getDescribedByIds(_extends({
    name: name
  }, rest));
  return React.createElement(FormGroup, {
    labelElement: // eslint-disable-next-line jsx-a11y/label-has-for
    function labelElement(props) {
      return React.createElement("label", _extends({}, props, getLabelProps()));
    },
    name: name,
    required: required,
    optional: optional,
    label: label,
    hideLabel: hideLabel,
    error: error,
    warning: warning,
    info: info,
    className: className,
    validationFirst: validationFirst,
    element: element
  }, React.createElement(HiddenInput, {
    name: name,
    multiSelect: multiSelect,
    value: multiSelect ? selectedOptions.map(function (option) {
      return getOptionValue$$1(option);
    }) : getOptionValue$$1(selectedItem)
  }), React.createElement(AutocompleteInputGroup, _extends({
    getInputProps: getInputProps,
    getToggleButtonProps: getToggleButtonProps,
    getClearButtonProps: function getClearButtonProps(props) {
      return _extends({
        onClick: onClear || clearSelection,
        'aria-label': 'Clear the field'
      }, props);
    },
    selectedOption: !multiSelect ? selectedItem : undefined,
    selectedOptions: selectedOptions,
    isOpen: isOpen,
    required: requiredFlag,
    optional: optional,
    describedBy: describedBy.length > 0 ? describedBy.join(' ') : undefined,
    placeholder: placeholder,
    getOptionLabel: getOptionLabel$$1,
    getOptionValue: getOptionValue$$1,
    icon: icon,
    action: action,
    onChange: onChange,
    hideInput: !async && options.length === 0
  }, rest)), React.createElement(ResultList, {
    getMenuProps: getMenuProps,
    getItemProps: getItemProps,
    selectedItem: selectedItem,
    isOpen: isOpen,
    highlightedIndex: highlightedIndex,
    options: options.filter(filter(value || inputValue, getOptionLabel$$1)),
    optionRenderer: optionRenderer,
    getOptionLabel: getOptionLabel$$1,
    getOptionValue: getOptionValue$$1,
    noResultsMessage: noResultsMessage
  }));
};

AutocompleteFormGroup.propTypes = _extends({}, propTypes, {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  optionRenderer: PropTypes.func,
  hideLabel: PropTypes.bool,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  info: PropTypes.node,
  getOptionLabel: PropTypes.func,
  getOptionValue: PropTypes.func,
  filter: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  action: PropTypes.bool,
  multiSelect: PropTypes.bool,
  async: PropTypes.bool,
  value: PropTypes.string,
  selectedOptions: PropTypes.arrayOf(PropTypes.object),
  onClear: PropTypes.func,
  onSelect: PropTypes.func,
  getInputProps: PropTypes.func.isRequired,
  getItemProps: PropTypes.func.isRequired,
  getLabelProps: PropTypes.func.isRequired,
  getMenuProps: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  inputValue: PropTypes.string,
  highlightedIndex: PropTypes.number,
  selectedItem: PropTypes.shape({}),
  getToggleButtonProps: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired
});
AutocompleteFormGroup.defaultProps = {
  options: [],
  onChange: undefined,
  optionRenderer: undefined,
  hideLabel: false,
  required: undefined,
  optional: undefined,
  info: undefined,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  filter: createFilter,
  placeholder: undefined,
  icon: undefined,
  action: undefined,
  multiSelect: false,
  async: false,
  value: undefined,
  selectedOptions: [],
  onClear: undefined,
  onSelect: undefined,
  isOpen: false,
  inputValue: undefined,
  highlightedIndex: undefined,
  selectedItem: undefined
};
AutocompleteFormGroup.displayName = 'AutocompleteFormGroup';

var AutocompleteField = function AutocompleteField(_ref) {
  var onSelect = _ref.onSelect,
      defaultSelectedOption = _ref.defaultSelectedOption,
      props = _objectWithoutPropertiesLoose(_ref, ["onSelect", "defaultSelectedOption"]);

  return React.createElement(Downshift, {
    itemToString: props.getOptionLabel,
    onChange: onSelect,
    inputValue: props.value,
    defaultSelectedItem: defaultSelectedOption
  }, function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        getItemProps = _ref2.getItemProps,
        getLabelProps = _ref2.getLabelProps,
        getMenuProps = _ref2.getMenuProps,
        isOpen = _ref2.isOpen,
        inputValue = _ref2.inputValue,
        highlightedIndex = _ref2.highlightedIndex,
        selectedItem = _ref2.selectedItem,
        getToggleButtonProps = _ref2.getToggleButtonProps,
        clearSelection = _ref2.clearSelection;
    return React.createElement("div", null, React.createElement(AutocompleteFormGroup, _extends({
      getInputProps: getInputProps,
      getItemProps: getItemProps,
      getLabelProps: getLabelProps,
      getMenuProps: getMenuProps,
      isOpen: isOpen,
      inputValue: inputValue,
      highlightedIndex: highlightedIndex,
      selectedItem: selectedItem,
      getToggleButtonProps: getToggleButtonProps,
      clearSelection: clearSelection
    }, props)));
  });
};

AutocompleteField.propTypes = {
  getOptionLabel: PropTypes.func,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  defaultSelectedOption: PropTypes.shape({})
};
AutocompleteField.defaultProps = {
  getOptionLabel: getOptionLabel,
  value: undefined,
  onSelect: undefined,
  defaultSelectedOption: undefined
};
AutocompleteField.displayName = 'AutocompleteField';

var MultiAutocompleteField =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MultiAutocompleteField, _Component);

  function MultiAutocompleteField(props) {
    var _this;

    var defaultSelectedOptions = props.defaultSelectedOptions;
    _this = _Component.call(this, props) || this;
    _this.state = {
      inputValue: '',
      selectedOptions: defaultSelectedOptions
    };
    _this.handleClear = _this.handleClear.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.filterSelectedOptions = _this.filterSelectedOptions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = MultiAutocompleteField.prototype;

  _proto.handleClear = function handleClear(selectedOption) {
    var selectedOptions = this.state.selectedOptions;
    var onSelect = this.props.onSelect;
    var newSelectedOptions = selectedOptions.filter(function (option) {
      return option !== selectedOption;
    });
    this.setState({
      inputValue: '',
      selectedOptions: newSelectedOptions
    });

    if (onSelect) {
      onSelect(newSelectedOptions);
    }
  };

  _proto.handleInputChange = function handleInputChange(e) {
    var onChange = this.props.onChange;
    this.setState({
      inputValue: e.target.value
    });

    if (onChange) {
      onChange(e);
    }
  };

  _proto.handleSelect = function handleSelect(selectedOption) {
    var selectedOptions = this.state.selectedOptions;
    var onSelect = this.props.onSelect;
    var newSelectedOptions = selectedOptions.concat([selectedOption]);
    this.setState({
      inputValue: '',
      selectedOptions: newSelectedOptions
    });

    if (onSelect) {
      onSelect(newSelectedOptions);
    }
  };

  _proto.filterSelectedOptions = function filterSelectedOptions(option) {
    var selectedOptions = this.state.selectedOptions;
    return !selectedOptions.includes(option);
  };

  _proto.render = function render() {
    var _this$state = this.state,
        selectedOptions = _this$state.selectedOptions,
        inputValue = _this$state.inputValue;
    return React.createElement(AutocompleteField, _extends({}, filterProps(this.props, ['defaultSelectedOptions']), {
      options: this.props.options.filter(this.filterSelectedOptions),
      multiSelect: true,
      value: inputValue,
      selectedOptions: selectedOptions,
      onClear: this.handleClear,
      onSelect: this.handleSelect,
      onChange: this.handleInputChange
    }));
  };

  return MultiAutocompleteField;
}(Component);

MultiAutocompleteField.propTypes = {
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultSelectedOptions: PropTypes.arrayOf(PropTypes.object)
};
MultiAutocompleteField.defaultProps = {
  onChange: undefined,
  onSelect: undefined,
  options: [],
  defaultSelectedOptions: []
};
MultiAutocompleteField.displayName = 'MultiAutocompleteField';

var FlagWrapper = function FlagWrapper(_ref) {
  var className = _ref.className,
      children = _ref.children,
      respondAt = _ref.respondAt,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "respondAt"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, !respondAt && 'ln-o-flag', respondAt && "ln-o-flag@" + respondAt)
  }), children);
};

FlagWrapper.displayName = 'FlagWrapper';
FlagWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  respondAt: PropTypes.string
};
FlagWrapper.defaultProps = {
  className: undefined,
  respondAt: undefined
};

var FlagBody = function FlagBody(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      alignment = _ref.alignment,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "alignment"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-o-flag__body', (_classnames = {}, _classnames["ln-o-flag__body--" + alignment] = alignment, _classnames))
  }), children);
};

FlagBody.displayName = 'FlagBody';
FlagBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['top', 'bottom'])
};
FlagBody.defaultProps = {
  className: undefined,
  alignment: undefined
};

var FlagComponent = function FlagComponent(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      alignment = _ref.alignment,
      nowrap = _ref.nowrap,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "alignment", "nowrap"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-o-flag__component', (_classnames = {}, _classnames["ln-o-flag__component--" + alignment] = alignment, _classnames['ln-o-flag__component--nowrap'] = nowrap, _classnames))
  }), children);
};

FlagComponent.displayName = 'FlagComponent';
FlagComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['top', 'bottom']),
  nowrap: PropTypes.bool
};
FlagComponent.defaultProps = {
  className: undefined,
  alignment: undefined,
  nowrap: false
};

var Flag = {
  Wrapper: FlagWrapper,
  Body: FlagBody,
  Component: FlagComponent
};

var LoadingIcon = function LoadingIcon(_ref) {
  var className = _ref.className,
      inverted = _ref.inverted,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "inverted"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-c-loading-indicator', inverted && 'ln-c-loading-indicator--inverted')
  }), React.createElement("div", {
    className: "ln-c-loading-indicator__bar"
  }));
};

LoadingIcon.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool
};
LoadingIcon.defaultProps = {
  className: undefined,
  inverted: false
};
LoadingIcon.displayName = 'LoadingIcon';

var LoadingIndicator = function LoadingIndicator(_ref) {
  var message = _ref.message,
      className = _ref.className,
      inverted = _ref.inverted,
      rest = _objectWithoutPropertiesLoose(_ref, ["message", "className", "inverted"]);

  return React.createElement(Flag.Wrapper, _extends({}, rest, {
    className: className
  }), React.createElement(Flag.Component, null, React.createElement(LoadingIcon, {
    inverted: inverted
  })), React.createElement(Flag.Body, {
    className: "ln-u-margin-left*2"
  }, message));
};

LoadingIndicator.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  inverted: PropTypes.bool
};
LoadingIndicator.defaultProps = {
  message: 'Please wait, loading...',
  className: undefined,
  inverted: false
};
LoadingIndicator.displayName = 'LoadingIndicator';

var LoadingMessage = function LoadingMessage() {
  return React.createElement(LoadingIndicator, {
    message: "Loading..."
  });
};

LoadingMessage.displayName = 'LoadingMessage';

var AsyncAutocompleteField =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(AsyncAutocompleteField, _Component);

  function AsyncAutocompleteField(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      options: [],
      loading: false,
      inputValue: ''
    };
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getOptions = _this.getOptions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getNoResultsMessage = _this.getNoResultsMessage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = AsyncAutocompleteField.prototype;

  _proto.getOptions = function getOptions(value) {
    var _this2 = this;

    var loadOptions = this.props.loadOptions;
    this.setState({
      loading: true
    });
    loadOptions(value).then(function (options) {
      _this2.setState({
        options: options,
        loading: false
      });
    });
  };

  _proto.getNoResultsMessage = function getNoResultsMessage() {
    var _this$state = this.state,
        inputValue = _this$state.inputValue,
        loading = _this$state.loading;
    var _this$props = this.props,
        minChars = _this$props.minChars,
        placeholderMessage = _this$props.placeholderMessage,
        loadingMessage = _this$props.loadingMessage,
        noResultsMessage = _this$props.noResultsMessage;

    if (inputValue.length < minChars) {
      return placeholderMessage;
    }

    if (loading) {
      return loadingMessage;
    }

    return noResultsMessage;
  };

  _proto.handleInputChange = function handleInputChange(e) {
    var _this$props2 = this.props,
        minChars = _this$props2.minChars,
        debounceWait = _this$props2.debounceWait,
        onChange = _this$props2.onChange;
    var value = e.target.value;
    this.setState({
      inputValue: e.target.value,
      loading: true
    });

    if (value.length < minChars) {
      this.setState({
        options: []
      });
      return;
    }

    debounce(this.getOptions, debounceWait)(value);

    if (onChange) {
      onChange(e);
    }
  };

  _proto.render = function render() {
    var _this$state2 = this.state,
        inputValue = _this$state2.inputValue,
        options = _this$state2.options;
    var children = this.props.children;

    var props = _extends({}, filterProps(this.props, ['loadOptions', 'debounceWait', 'children', 'minChars', 'placeholderMessage', 'loadingMessage']), {
      inputValue: inputValue,
      async: true,
      options: options,
      onChange: this.handleInputChange,
      noResultsMessage: this.getNoResultsMessage()
    });

    if (children) {
      return React.cloneElement(React.Children.only(children), props);
    }

    return React.createElement(AutocompleteField, props);
  };

  return AsyncAutocompleteField;
}(Component);

AsyncAutocompleteField.propTypes = {
  loadOptions: PropTypes.func.isRequired,
  minChars: PropTypes.number,
  debounceWait: PropTypes.number,
  children: PropTypes.node,
  onChange: PropTypes.func,
  placeholderMessage: PropTypes.node,
  loadingMessage: PropTypes.node,
  noResultsMessage: PropTypes.node
};
AsyncAutocompleteField.defaultProps = {
  minChars: 2,
  debounceWait: 200,
  children: undefined,
  onChange: undefined,
  placeholderMessage: 'Start typing to search',
  loadingMessage: React.createElement(LoadingMessage, null),
  noResultsMessage: undefined
};
AsyncAutocompleteField.displayName = 'AsyncAutocompleteField';

var BreadcrumbsWrapper = function BreadcrumbsWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("nav", _extends({}, rest, {
    className: classnames('ln-c-breadcrumbs', className)
  }), React.createElement(List, {
    type: "inline",
    spaced: true
  }, children));
};

BreadcrumbsWrapper.displayName = 'BreadcrumbsWrapper';
BreadcrumbsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
BreadcrumbsWrapper.defaultProps = {
  className: undefined
};

var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var children = _ref.children,
      active = _ref.active,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "active"]);

  return React.createElement(ListItem, _extends({}, rest, {
    type: "inline"
  }), active ? children : React.createElement("span", {
    className: "ln-c-breadcrumbs__item"
  }, children));
};

BreadcrumbsItem.displayName = 'BreadcrumbsItem';
BreadcrumbsItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool
};
BreadcrumbsItem.defaultProps = {
  active: false
};

/** @deprecated Use BreadcrumbsWrapper & BreadcrumbsItem */

var Breadcrumbs = {
  Wrapper: BreadcrumbsWrapper,
  Item: BreadcrumbsItem
};

var ButtonGroupWrapper = function ButtonGroupWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-c-button-group', 'ln-o-clearfix')
  }), children);
};

ButtonGroupWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
ButtonGroupWrapper.defaultProps = {
  className: undefined
};
ButtonGroupWrapper.displayName = 'ButtonGroupWrapper';

var ButtonGroupPrimary = function ButtonGroupPrimary(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-c-button-group__primary')
  }), children);
};

ButtonGroupPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
ButtonGroupPrimary.defaultProps = {
  className: undefined
};
ButtonGroupPrimary.displayName = 'ButtonGroupPrimary';

var ButtonGroupSecondary = function ButtonGroupSecondary(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-c-button-group__secondary')
  }), children);
};

ButtonGroupSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
ButtonGroupSecondary.defaultProps = {
  className: undefined
};
ButtonGroupSecondary.displayName = 'ButtonGroupSecondary';

var ButtonGroup = {
  Wrapper: ButtonGroupWrapper,
  Primary: ButtonGroupPrimary,
  Secondary: ButtonGroupSecondary
};

var Container = function Container(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      fluid = _ref.fluid,
      free = _ref.free,
      size = _ref.size,
      soft = _ref.soft,
      clearfix = _ref.clearfix,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "fluid", "free", "size", "soft", "clearfix"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames('ln-o-container', (_classnames = {}, _classnames["ln-o-container--" + size] = size, _classnames['ln-o-container--soft'] = typeof soft === 'boolean' && soft, _classnames["ln-o-container--soft-" + soft] = typeof soft === 'string', _classnames['ln-o-container--fluid'] = fluid, _classnames['ln-o-container--free'] = free, _classnames['ln-o-clearfix'] = clearfix, _classnames), className)
  }), children);
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  soft: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fluid: PropTypes.bool,
  free: PropTypes.bool,
  clearfix: PropTypes.bool
};
Container.defaultProps = {
  children: undefined,
  className: undefined,
  size: undefined,
  soft: undefined,
  fluid: false,
  free: false,
  clearfix: false
};
Container.displayName = 'Container';

var NavigationWrapper = function NavigationWrapper(_ref) {
  var children = _ref.children,
      title = _ref.title,
      button = _ref.button,
      container = _ref.container,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "title", "button", "container", "className"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-c-navigation-wrapper')
  }), React.createElement(Container, _extends({}, container, {
    className: classnames(container.className, 'ln-u-hard-right'),
    clearfix: true
  }), button, !!title && React.createElement("h1", {
    className: "ln-c-navigation-wrapper__title"
  }, title), !!children && React.createElement("nav", {
    className: "ln-c-navigation-wrapper__inner"
  }, children)));
};

NavigationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.element,
  title: PropTypes.node,
  container: PropTypes.shape(Container.propTypes),
  className: PropTypes.string
};
NavigationWrapper.defaultProps = {
  button: undefined,
  title: undefined,
  container: Container.defaultProps,
  className: undefined
};
NavigationWrapper.displayName = 'NavigationWrapper';

var ClickAway =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ClickAway, _Component);

  function ClickAway(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.mounted = false;
    _this.selfNode = null;
    _this.handleClickAway = _this.handleClickAway.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = ClickAway.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.selfNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

    this.mounted = true;
    document.addEventListener('click', this.handleClickAway);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleClickAway);
  };

  _proto.handleClickAway = function handleClickAway(event) {
    var mounted = this.mounted,
        selfNode = this.selfNode;

    if (!mounted || !selfNode) {
      return;
    }

    if (document.documentElement && document.documentElement.contains(event.target) && !selfNode.contains(event.target)) {
      this.props.onClickAway(event);
    }
  };

  _proto.render = function render() {
    return Children.only(this.props.children);
  };

  return ClickAway;
}(Component);

ClickAway.propTypes = {
  onClickAway: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
ClickAway.displayName = 'ClickAway';

var NavigationDropdown = function NavigationDropdown(_ref) {
  var toggleOpen = _ref.toggleOpen,
      isOpen = _ref.isOpen,
      label = _ref.label,
      items = _ref.items,
      setOpen = _ref.setOpen,
      Element = _ref.Element,
      rest = _objectWithoutPropertiesLoose(_ref, ["toggleOpen", "isOpen", "label", "items", "setOpen", "Element"]);

  return React.createElement("li", _extends({
    className: "ln-c-navigation__item ln-c-navigation__item--has-dropdown",
    key: label + "-dropdown"
  }, filterProps(rest, ['activeClassName'])), React.createElement(ClickAway, {
    onClickAway: function onClickAway() {
      return setOpen(false);
    }
  }, React.cloneElement(Element, {
    className: classnames('ln-c-navigation__link ln-c-navigation__dropdown-toggle', isOpen && 'is-open', Element.props.className),
    onClick: function onClick(e) {
      e.stopPropagation();
      toggleOpen();
    }
  }, React.createElement(Fragment, null, label, React.createElement("span", {
    className: "ln-c-navigation__dropdown-icon"
  })))), React.createElement("div", {
    className: classnames('ln-c-navigation__dropdown', isOpen && 'is-open')
  }, React.createElement(Navigation, {
    items: items
  })));
};

NavigationDropdown.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  Element: PropTypes.node
};
NavigationDropdown.defaultProps = {
  Element: React.createElement("button", {
    type: "button"
  })
};
NavigationDropdown.displayName = 'NavigationDropdown';
var NavigationDropdown$1 = compose(setDisplayName(NavigationDropdown.displayName), withState('isOpen', 'setOpen', false), withHandlers({
  toggleOpen: function toggleOpen(_ref2) {
    var isOpen = _ref2.isOpen,
        setOpen = _ref2.setOpen;
    return function () {
      return setOpen(!isOpen);
    };
  }
}))(NavigationDropdown);

var Navigation = function Navigation(_ref) {
  var items = _ref.items,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["items", "className"]);

  return React.createElement("ul", _extends({}, rest, {
    className: className.list
  }), items.map(function (Element, index) {
    var key = Element.props.href || Element.props.to || Element.props.label || index;

    if (Element.type === 'li' || Element.type.displayName === NavigationDropdown$1.displayName) {
      return React.cloneElement(Element, {
        key: key
      });
    }

    return React.createElement("li", {
      key: key,
      className: className.item
    }, React.cloneElement(Element, {
      className: classnames(Element.props.className, className.link)
    }));
  }));
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.shape({
    list: PropTypes.string,
    item: PropTypes.string,
    link: PropTypes.string
  })
};
Navigation.defaultProps = {
  items: [],
  className: {
    list: 'ln-c-navigation',
    item: 'ln-c-navigation__item',
    link: 'ln-c-navigation__link'
  }
};
Navigation.displayName = 'NavigationList';

var MenuButton = function MenuButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "onClick"]);

  return React.createElement("button", _extends({}, rest, {
    type: "button",
    className: className,
    "aria-hidden": "true",
    tabIndex: "-1",
    onClick: onClick
  }), React.createElement("span", {
    className: "ln-navigation-toggle"
  }, React.createElement("span", {
    className: "ln-c-navigation-toggle__item"
  })));
};

MenuButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
MenuButton.defaultProps = {
  className: undefined
};
MenuButton.displayName = 'MenuButton';

var Navigation$1 = {
  Wrapper: NavigationWrapper,
  List: Navigation
};

var navigationClasses = {
  list: 'ln-c-topbar__list',
  item: 'ln-c-topbar__item',
  link: 'ln-o-bare-link ln-c-topbar__text'
};

var TopBar = function TopBar(_ref) {
  var logo = _ref.logo,
      items = _ref.items,
      meta = _ref.meta,
      className = _ref.className,
      toggle = _ref.toggle,
      hasDivider = _ref.hasDivider,
      container = _ref.container,
      rest = _objectWithoutPropertiesLoose(_ref, ["logo", "items", "meta", "className", "toggle", "hasDivider", "container"]);

  var createOnClickHandle = function createOnClickHandle(onClick) {
    return function (e) {
      toggle(false);

      if (onClick) {
        onClick(e);
      }
    };
  };

  var addOnClickHandler = function addOnClickHandler(menuItem) {
    return cloneElement(menuItem, {
      onClick: createOnClickHandle(menuItem.props.onClick)
    });
  };

  return React.createElement("div", _extends({}, rest, {
    className: classnames(className, 'ln-c-topbar', !hasDivider && 'ln-c-topbar--hide-divider')
  }), React.createElement(Container, _extends({}, container, {
    clearfix: true
  }), React.createElement("div", {
    className: "ln-o-flag"
  }, React.createElement("div", {
    className: "ln-o-flag__body"
  }, React.createElement(Navigation$1.List, {
    className: navigationClasses,
    items: logo ? [React.createElement("li", {
      key: "logo",
      className: "ln-c-topbar__item ln-c-topbar__item--logo"
    }, logo)].concat(items.map(addOnClickHandler)) : items.map(addOnClickHandler)
  })), meta && React.createElement("div", {
    className: "ln-o-flag__component"
  }, React.createElement("div", {
    className: "ln-c-topbar__text"
  }, meta)))));
};

TopBar.propTypes = {
  logo: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.node),
  meta: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  hasDivider: PropTypes.bool,
  container: PropTypes.shape(Container.propTypes)
};
TopBar.defaultProps = {
  logo: undefined,
  items: [],
  meta: undefined,
  className: undefined,
  hasDivider: true,
  container: undefined
};
TopBar.displayName = 'TopBar';

var toggleHandler = function toggleHandler(_ref) {
  var onExpandClick = _ref.onExpandClick,
      open = _ref.open;
  return function () {
    return onExpandClick(!open);
  };
};

var changeHandler = function changeHandler(_ref2) {
  var onChange = _ref2.onChange,
      changeValue = _ref2.changeValue;
  return function (e) {
    changeValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };
};

var submitHandler = function submitHandler(_ref3) {
  var onSubmit = _ref3.onSubmit,
      value = _ref3.value;
  return function (e) {
    onSubmit(value);
    e.preventDefault();
  };
};

var Search$2 = function Search(_ref) {
  var _classnames, _classnames2;

  var className = _ref.className,
      placeholder = _ref.placeholder,
      handleSubmit = _ref.handleSubmit,
      expandable = _ref.expandable,
      value = _ref.value,
      handleChange = _ref.handleChange,
      open = _ref.open,
      toggle = _ref.toggle,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      allowEmptySubmit = _ref.allowEmptySubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "placeholder", "handleSubmit", "expandable", "value", "handleChange", "open", "toggle", "onBlur", "onFocus", "allowEmptySubmit"]);

  return React.createElement(Form, _extends({}, filterProps(rest, ['changeValue', 'onExpandClick']), {
    onSubmit: handleSubmit,
    className: classnames('ln-c-search', (_classnames = {
      'ln-c-search--expandable': expandable,
      'is-open': open
    }, _classnames[className] = typeof className === 'string', _classnames[className.form] = !!className.form, _classnames))
  }), React.createElement("input", {
    type: "search",
    className: classnames('ln-c-search__input', 'ln-c-text-input', (_classnames2 = {}, _classnames2[className.input] = !!className.input, _classnames2)),
    placeholder: placeholder,
    value: value,
    onChange: handleChange,
    onBlur: onBlur,
    onFocus: onFocus
  }), React.createElement("button", {
    type: "submit",
    className: "ln-c-search__submit",
    disabled: !allowEmptySubmit && !value,
    "aria-disabled": !allowEmptySubmit && (!value || undefined)
  }, "Submit search query"), expandable && React.createElement("button", {
    type: "button",
    className: "ln-c-search--expandable__toggle",
    onClick: toggle
  }, "Open Search"));
};

Search$2.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    form: PropTypes.string,
    input: PropTypes.string
  })]),
  placeholder: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  expandable: PropTypes.bool,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  open: PropTypes.bool,
  toggle: PropTypes.func,
  allowEmptySubmit: PropTypes.bool
};
Search$2.defaultProps = {
  className: {},
  placeholder: 'Search',
  expandable: false,
  open: false,
  toggle: undefined,
  onBlur: undefined,
  onFocus: undefined,
  allowEmptySubmit: false
};
Search$2.displayName = 'Search';
var Search$3 = compose(setDisplayName('Search'), withState('value', 'changeValue', ''), withState('open', 'onExpandClick', false), withHandlers({
  toggle: toggleHandler,
  handleChange: changeHandler,
  handleSubmit: submitHandler
}))(Search$2);

var navigationClasses$1 = {
  list: 'ln-c-icon-nav',
  item: 'ln-c-icon-nav__item',
  link: 'ln-c-icon-nav__link'
};
var searchClasses = {
  form: 'ln-c-icon-nav__form',
  input: 'ln-c-icon-nav__text-input'
};

var IconNavigation = function IconNavigation(_ref) {
  var onSearchSubmit = _ref.onSearchSubmit,
      items = _ref.items,
      rest = _objectWithoutPropertiesLoose(_ref, ["onSearchSubmit", "items"]);

  return React.createElement(Navigation$1.List, _extends({}, rest, {
    className: navigationClasses$1,
    items: onSearchSubmit ? [React.createElement("li", {
      key: "search",
      className: "ln-c-icon-nav__item ln-c-icon-nav__item--fixed"
    }, React.createElement(Search$3, {
      className: searchClasses,
      onSubmit: onSearchSubmit,
      expandable: true
    }))].concat(items) : items
  }));
};

IconNavigation.propTypes = {
  onSearchSubmit: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.element)
};
IconNavigation.defaultProps = {
  onSearchSubmit: undefined,
  items: []
};
IconNavigation.displayName = 'IconNavigation';

var MainBar = function MainBar(_ref) {
  var logo = _ref.logo,
      toggle = _ref.toggle,
      menuItems = _ref.menuItems,
      iconNav = _ref.iconNav,
      onSearchSubmit = _ref.onSearchSubmit,
      className = _ref.className,
      topBar = _ref.topBar,
      container = _ref.container,
      rest = _objectWithoutPropertiesLoose(_ref, ["logo", "toggle", "menuItems", "iconNav", "onSearchSubmit", "className", "topBar", "container"]);

  var showIconNav = iconNav.length > 0 || onSearchSubmit;
  var showNavList = menuItems.length > 0;

  var createOnClickHandle = function createOnClickHandle(onClick) {
    return function (e) {
      toggle(false);

      if (onClick) {
        onClick(e);
      }
    };
  };

  var addOnClickHandler = function addOnClickHandler(menuItem) {
    return cloneElement(menuItem, {
      onClick: createOnClickHandle(menuItem.props.onClick)
    });
  };

  return React.createElement(Navigation$1.Wrapper, _extends({}, rest, {
    title: logo,
    button: iconNav.length > 0 || menuItems.length > 0 || Object.keys(topBar).length > 0 ? React.createElement(MenuButton, {
      className: "ln-c-header__toggle",
      onClick: toggle
    }) : undefined,
    container: container,
    className: className
  }), (showIconNav || showNavList) && [showIconNav && React.createElement(IconNavigation, {
    key: "iconNav",
    items: iconNav.map(addOnClickHandler),
    onSearchSubmit: onSearchSubmit
  }), showNavList > 0 && React.createElement(Navigation$1.List, {
    key: "mainNav",
    items: menuItems.map(addOnClickHandler)
  })]);
};

MainBar.propTypes = {
  logo: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  topBar: PropTypes.shape({}),
  iconNav: IconNavigation.propTypes.items,
  onSearchSubmit: IconNavigation.propTypes.onSearchSubmit,
  container: PropTypes.shape(Container.propTypes)
};
MainBar.defaultProps = {
  menuItems: [],
  className: undefined,
  topBar: {},
  iconNav: IconNavigation.defaultProps.items,
  onSearchSubmit: IconNavigation.defaultProps.onSearchSubmit,
  container: undefined
};
MainBar.displayName = 'MainBar';

var setHasOverlay = (function (visible, handler) {
  var className = 'has-overlay';

  if (!handler && typeof document === 'undefined') {
    return false;
  }

  var classHandler = handler || document.body.classList;

  if (visible) {
    return classHandler.add(className);
  }

  return classHandler.remove(className);
});

var toggleHandler$1 = (function (_ref) {
  var onMenuClick = _ref.onMenuClick,
      open = _ref.open;
  return function (forceState) {
    var newState = typeof forceState === 'boolean' ? forceState : !open;
    setHasOverlay(newState);
    return onMenuClick(newState);
  };
});

var Header = function Header(_ref) {
  var className = _ref.className,
      mainId = _ref.mainId,
      open = _ref.open,
      toggle = _ref.toggle,
      topBar = _ref.topBar,
      logo = _ref.logo,
      iconNav = _ref.iconNav,
      menuItems = _ref.menuItems,
      onSearchSubmit = _ref.onSearchSubmit,
      container = _ref.container,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "mainId", "open", "toggle", "topBar", "logo", "iconNav", "menuItems", "onSearchSubmit", "container"]);

  var containerProps = _extends({}, container, {
    soft: container.soft !== undefined ? container.soft : true
  });

  return React.createElement("header", _extends({}, filterProps(rest, ['onMenuClick']), {
    className: classnames('ln-c-header', className, {
      'is-open': open
    })
  }), React.createElement("a", {
    href: "#" + mainId,
    className: "ln-u-visually-hidden"
  }, "Skip Navigation"), React.createElement("button", {
    type: "button",
    className: "ln-c-header__toggle-overlay js-header-toggle",
    title: "Toggle Menu",
    "aria-hidden": "true",
    tabIndex: "-1",
    onClick: toggle
  }), React.createElement("div", {
    className: "ln-c-header__inner"
  }, Object.keys(topBar).length > 0 && React.createElement(TopBar, _extends({}, topBar, {
    toggle: toggle,
    hasDivider: iconNav.length > 0 || menuItems.length > 0,
    container: containerProps
  })), React.createElement(MainBar, {
    logo: logo,
    toggle: toggle,
    menuItems: menuItems,
    iconNav: iconNav,
    onSearchSubmit: onSearchSubmit,
    topBar: topBar,
    container: containerProps
  })));
};

Header.propTypes = _extends({
  mainId: PropTypes.string,
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  topBar: PropTypes.shape(_extends({}, TopBar.propTypes))
}, MainBar.propTypes, {
  iconNav: PropTypes.arrayOf(PropTypes.element),
  container: PropTypes.shape(Container.propTypes)
});
Header.defaultProps = _extends({
  mainId: 'main-content',
  className: undefined,
  topBar: {}
}, MainBar.defaultProps, {
  container: Container.defaultProps
});
Header.displayName = 'Header';
var Header$1 = compose(setPropTypes(_extends({}, Header.propTypes, {
  open: PropTypes.bool,
  toggle: PropTypes.func
})), setDisplayName('Header'), withState('open', 'onMenuClick', false), withHandlers({
  toggle: toggleHandler$1
}))(Header);

var HeaderBody = function HeaderBody(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className,
      flushTop = _ref.flushTop,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "id", "className", "flushTop"]);

  return React.createElement("div", _extends({}, rest, {
    id: id,
    className: classnames(className, 'ln-c-header-body', flushTop && 'ln-u-flush-top')
  }), children);
};

HeaderBody.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  flushTop: PropTypes.bool
};
HeaderBody.defaultProps = {
  children: undefined,
  id: 'main-content',
  className: undefined,
  flushTop: false
};
HeaderBody.displayName = 'HeaderBody';

/**
 * @deprecated Use [`SiteLayout`](#/Components/SiteLayout)
 */

var ColleagueLayout = function ColleagueLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      mainId = _ref.mainId,
      open = _ref.open,
      toggle = _ref.toggle,
      topBar = _ref.topBar,
      logo = _ref.logo,
      iconNav = _ref.iconNav,
      menuItems = _ref.menuItems,
      onSearchSubmit = _ref.onSearchSubmit,
      container = _ref.container,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "mainId", "open", "toggle", "topBar", "logo", "iconNav", "menuItems", "onSearchSubmit", "container"]);

  var headerProps = {
    mainId: mainId,
    open: open,
    toggle: toggle,
    topBar: topBar,
    logo: logo,
    iconNav: iconNav,
    menuItems: menuItems,
    onSearchSubmit: onSearchSubmit,
    container: container
  };
  return React.createElement("div", _extends({}, rest, {
    className: className
  }), React.createElement(Header$1, headerProps), React.createElement(HeaderBody, {
    className: "ln-u-soft-top"
  }, children));
};

ColleagueLayout.propTypes = _extends({
  children: PropTypes.node,
  className: PropTypes.string
}, Header$1.propTypes);
ColleagueLayout.defaultProps = {
  children: undefined,
  className: undefined
};
ColleagueLayout.displayName = 'ColleagueLayout';

var Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("footer", _extends({}, rest, {
    className: classnames('ln-c-footer', className)
  }), children);
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
Footer.defaultProps = {
  children: undefined,
  className: undefined
};
Footer.displayName = 'Footer';

var GridWrapper = function GridWrapper(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      matrix = _ref.matrix,
      reverse = _ref.reverse,
      equalHeight = _ref.equalHeight,
      gutterSize = _ref.gutterSize,
      verticalAlign = _ref.verticalAlign,
      horizontalAlign = _ref.horizontalAlign,
      element = _ref.element,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "matrix", "reverse", "equalHeight", "gutterSize", "verticalAlign", "horizontalAlign", "element"]);

  var Element = element;
  return React.createElement(Element, _extends({}, rest, {
    className: classnames(className, 'ln-o-grid', (_classnames = {
      'ln-o-grid--matrix': matrix,
      'ln-o-grid--reverse': reverse,
      'ln-o-grid--equal-height': equalHeight
    }, _classnames["ln-o-grid--gutter-" + gutterSize] = gutterSize, _classnames["ln-o-grid--" + verticalAlign] = verticalAlign, _classnames["ln-u-text-align-" + horizontalAlign] = horizontalAlign, _classnames))
  }), children);
};

GridWrapper.displayName = 'GridWrapper';
GridWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  matrix: PropTypes.bool,
  gutterSize: PropTypes.string,
  reverse: PropTypes.bool,
  equalHeight: PropTypes.bool,
  verticalAlign: PropTypes.oneOf(['middle', 'center', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['center', 'right']),
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};
GridWrapper.defaultProps = {
  className: undefined,
  matrix: false,
  gutterSize: undefined,
  reverse: false,
  equalHeight: false,
  verticalAlign: undefined,
  horizontalAlign: undefined,
  element: 'div'
};

var GridItem = function GridItem(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      offsetLeft = _ref.offsetLeft,
      offsetRight = _ref.offsetRight,
      element = _ref.element,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "size", "offsetLeft", "offsetRight", "element"]);

  var Element = element;
  var sizeClass = typeof size === 'object' ? Object.keys(size).map(function (breakpoint) {
    return breakpoint !== 'default' ? "ln-u-" + size[breakpoint] + "@" + breakpoint : "ln-u-" + size[breakpoint];
  }) : "ln-u-" + size;
  return React.createElement(Element, _extends({}, rest, {
    className: classnames(className, 'ln-o-grid__item', sizeClass, (_classnames = {}, _classnames["ln-u-pull-" + offsetLeft] = offsetLeft, _classnames["ln-u-push-" + offsetRight] = offsetRight, _classnames))
  }), children);
};

GridItem.displayName = 'GridItem';
GridItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  offsetLeft: PropTypes.string,
  offsetRight: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};
GridItem.defaultProps = {
  className: undefined,
  offsetLeft: undefined,
  offsetRight: undefined,
  element: 'div'
};

var Grid = {
  Wrapper: GridWrapper,
  Item: GridItem
};

if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector;
}

var hasParent = (function (element, selector) {
  var hasParent = false;

  for (var parent = element.parentNode; parent && parent !== document; parent = parent.parentNode) {
    if (parent.matches(selector)) {
      hasParent = true;
      break;
    }
  }

  return hasParent;
});

var SELECTORS = {
  CLOSE_BUTTON: '.ln-c-dismiss',
  MODAL_BODY: '.ln-c-modal__body'
};

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOverlayStateChange = _this.handleOverlayStateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handleOverlayStateChange();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var open = this.props.open;

    if (prevProps.open !== open) {
      this.handleOverlayStateChange(open);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var open = this.props.open;

    if (open) {
      this.handleOverlayStateChange(false);
    }
  };

  _proto.onClose = function onClose(e) {
    var _this$props = this.props,
        closeContainerElement = _this$props.closeContainerElement,
        handleClose = _this$props.handleClose;

    if (e.target === this.closeButtonEl || hasParent(e.target, SELECTORS.CLOSE_BUTTON) || e.target !== this.modalBodyEl && !hasParent(e.target, SELECTORS.MODAL_BODY)) {
      this.handleOverlayStateChange(false);

      if (handleClose) {
        handleClose(e);
      }

      if (closeContainerElement && closeContainerElement.onClick) {
        closeContainerElement.onClick(e);
      }

      e.stopPropagation();
    }
  };

  _proto.handleOverlayStateChange = function handleOverlayStateChange(openState) {
    var _this$props2 = this.props,
        setHasOverlay$$1 = _this$props2.setHasOverlay,
        open = _this$props2.open;
    setHasOverlay$$1(typeof openState === 'boolean' ? openState : open);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        children = _this$props3.children,
        className = _this$props3.className,
        open = _this$props3.open,
        hideCloseButton = _this$props3.hideCloseButton,
        handleClose = _this$props3.handleClose,
        closeContainerElement = _this$props3.closeContainerElement,
        rest = _objectWithoutPropertiesLoose(_this$props3, ["children", "className", "open", "hideCloseButton", "handleClose", "closeContainerElement"]);

    var overlayProps = open ? {
      tabIndex: 0,
      role: 'button',
      onClick: this.onClose,
      onKeyDown: onKeyPress([{
        name: 'Space',
        code: 32
      }, {
        name: 'Enter',
        code: 13
      }], this.onClose)
    } : {};
    return React.createElement("div", _extends({}, filterProps(rest, ['setHasOverlay', 'handleClose']), {
      className: classnames(className, 'ln-c-modal', {
        'is-open': open
      })
    }, overlayProps), React.createElement("div", {
      className: "ln-c-modal__body",
      ref: function ref(el) {
        _this2.modalBodyEl = el;
      }
    }, !hideCloseButton && React.createElement(CloseButton, {
      onClick: this.onClose,
      containerElement: closeContainerElement,
      buttonRef: function buttonRef(el) {
        _this2.closeButtonEl = el;
      }
    }), children));
  };

  return Modal;
}(PureComponent);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  handleClose: PropTypes.func,
  closeContainerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  setHasOverlay: PropTypes.func
};
Modal.defaultProps = {
  className: undefined,
  open: false,
  hideCloseButton: false,
  handleClose: undefined,
  closeContainerElement: undefined,
  setHasOverlay: setHasOverlay
};
Modal.displayName = 'Modal';

var NotificationList = function NotificationList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      open = _ref.open,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "open"]);

  return React.createElement(List, _extends({}, rest, {
    type: "bare",
    className: classnames(className, 'ln-c-activities', {
      'is-open': open
    })
  }), children);
};

NotificationList.displayName = 'NotificationList';
NotificationList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool
};
NotificationList.defaultProps = {
  className: undefined,
  open: false
};

var NotificationItem = function NotificationItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      notification = _ref.notification,
      handleClose = _ref.handleClose,
      open = _ref.open,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "notification", "handleClose", "open"]);

  return React.createElement(ListItem, _extends({}, rest, {
    type: "bare",
    className: classnames(className, 'ln-c-activities__item', {
      'ln-c-activities__item--notification': notification,
      'is-open': notification && open
    })
  }), notification && handleClose && React.createElement(CloseButton, {
    onClick: handleClose
  }), children);
};

NotificationItem.displayName = 'NotificationItem';
NotificationItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  notification: PropTypes.bool,
  open: PropTypes.bool,
  handleClose: PropTypes.func
};
NotificationItem.defaultProps = {
  className: undefined,
  notification: false,
  open: false,
  handleClose: undefined
};

var Notification = {
  List: NotificationList,
  Item: NotificationItem
};

var Page = function Page(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", _extends({}, rest, {
    className: classnames('ln-o-page', className)
  }), children);
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
Page.defaultProps = {
  children: undefined,
  className: undefined
};
Page.displayName = 'Page';

var PageBody = function PageBody(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "ln-o-page__body"
  }, children);
};

PageBody.propTypes = {
  children: PropTypes.node
};
PageBody.defaultProps = {
  children: undefined
};
PageBody.displayName = 'PageBody';

var PageHeader = function PageHeader(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "ln-o-page__header"
  }, children);
};

PageHeader.propTypes = {
  children: PropTypes.node
};
PageHeader.defaultProps = {
  children: undefined
};
PageHeader.displayName = 'PageHeader';

var PageFooter = function PageFooter(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "ln-o-page__footer"
  }, children);
};

PageFooter.propTypes = {
  children: PropTypes.node
};
PageFooter.defaultProps = {
  children: undefined
};
PageFooter.displayName = 'PageFooter';

var Pagination = function Pagination(_ref) {
  var className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      showFirstAndLast = _ref.showFirstAndLast,
      showPages = _ref.showPages,
      fullWidth = _ref.fullWidth;
  return React.createElement("nav", {
    className: classnames(className, 'ln-c-pagination', showFirstAndLast && 'ln-c-pagination--first-last', showPages && 'ln-c-pagination--pages', fullWidth && 'ln-c-pagination--full'),
    "aria-label": label
  }, React.createElement("ul", {
    className: "ln-c-pagination__list"
  }, children));
};

Pagination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  showFirstAndLast: PropTypes.bool,
  showPages: PropTypes.bool,
  fullWidth: PropTypes.bool
};
Pagination.defaultProps = {
  className: undefined,
  children: undefined,
  label: 'Page navigation',
  showFirstAndLast: false,
  showPages: false,
  fullWidth: false
};
Pagination.displayName = 'Pagination';

var FirstPage = function FirstPage(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M17.7 15.89L13.82 12l3.89-3.89A.996.996 0 1 0 16.3 6.7l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 0 0-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
  }));
};

FirstPage.defaultProps = {
  viewBox: "0 0 24 24"
};
var IconFirst = iconHandler(FirstPage);

var LastPage = function LastPage(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M6.29 8.11L10.18 12l-3.89 3.89A.996.996 0 1 0 7.7 17.3l4.59-4.59a.996.996 0 0 0 0-1.41L7.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
  }));
};

LastPage.defaultProps = {
  viewBox: "0 0 24 24"
};
var IconLast = iconHandler(LastPage);

var ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"
  }));
};

ChevronLeft.defaultProps = {
  viewBox: "0 0 24 24"
};
var IconPrevious = iconHandler(ChevronLeft);

var ChevronRight = function ChevronRight(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
  }));
};

ChevronRight.defaultProps = {
  viewBox: "0 0 24 24"
};
var IconNext = iconHandler(ChevronRight);

var _LINK_REL;

var POSITION_FIRST_CHILD = 'first-child';
var POSITION_LAST_CHILD = 'last-child';
var POSITION_ONLY_CHILD = 'only-child';
var ALL_POSITIONS = [POSITION_FIRST_CHILD, POSITION_LAST_CHILD, POSITION_ONLY_CHILD];
var TYPE_PREVIOUS = 'previous';
var TYPE_NEXT = 'next';
var TYPE_FIRST = 'first';
var TYPE_LAST = 'last';
var TYPE_PAGE = 'page';
var ALL_TYPES = [TYPE_PREVIOUS, TYPE_NEXT, TYPE_FIRST, TYPE_LAST, TYPE_PAGE];
var LINK_REL = (_LINK_REL = {}, _LINK_REL[TYPE_PREVIOUS] = 'prev', _LINK_REL[TYPE_NEXT] = 'next', _LINK_REL[TYPE_FIRST] = 'first', _LINK_REL[TYPE_LAST] = 'last', _LINK_REL);
var ELLIPSIS = '...';

var PaginationItem = function PaginationItem(_ref) {
  var children = _ref.children,
      type = _ref.type,
      className = _ref.className,
      page = _ref.page,
      onClick = _ref.onClick,
      href = _ref.href,
      disabled = _ref.disabled,
      element = _ref.element,
      position = _ref.position,
      current = _ref.current,
      label = _ref.label,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "type", "className", "page", "onClick", "href", "disabled", "element", "position", "current", "label"]);

  var Link = element;

  var linkProps = _extends({}, rest, {
    className: classnames('ln-c-pagination__link', className, {
      'is-disabled': disabled
    }),
    onClick: onClick ? function (e) {
      return onClick(page, e);
    } : undefined,
    disabled: disabled,
    page: page,
    'aria-label': label,
    'aria-current': current ? true : undefined
  });

  if (disabled) {
    Link = 'button';
    linkProps.type = 'button';
    linkProps['aria-disabled'] = true;
  }

  if (Link === 'a') {
    linkProps.href = href;
  }

  var listItemClassName = classnames('ln-c-pagination__item', "ln-c-pagination__item--" + type, position, current && 'is-current');
  return React.createElement("li", {
    className: listItemClassName
  }, React.createElement(Link, filterProps(linkProps, ['page']), children));
};

PaginationItem.displayName = 'PaginationItem';
PaginationItem.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(ALL_TYPES).isRequired,
  className: PropTypes.string,
  page: PropTypes.number,
  current: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  position: PropTypes.oneOf(ALL_POSITIONS)
};
PaginationItem.defaultProps = {
  className: undefined,
  page: undefined,
  current: false,
  onClick: undefined,
  href: undefined,
  disabled: false,
  element: 'a',
  position: undefined
};

var _TYPES;
var TYPES = (_TYPES = {}, _TYPES[TYPE_PREVIOUS] = {
  label: 'Previous',
  icon: IconPrevious,
  rel: LINK_REL[TYPE_PREVIOUS]
}, _TYPES[TYPE_NEXT] = {
  label: 'Next',
  icon: IconNext,
  rel: LINK_REL[TYPE_NEXT]
}, _TYPES[TYPE_FIRST] = {
  label: 'First',
  icon: IconFirst,
  rel: LINK_REL[TYPE_FIRST]
}, _TYPES[TYPE_LAST] = {
  label: 'Last',
  icon: IconLast,
  rel: LINK_REL[TYPE_LAST]
}, _TYPES);

var buildLabel = function buildLabel(type) {
  return TYPES[type].label + " page";
};

var PaginationControl = function PaginationControl(props) {
  var typeProps = TYPES[props.type];
  var Icon = typeProps.icon;
  return React.createElement(PaginationItem, _extends({}, props, {
    type: props.type,
    label: buildLabel(props.type),
    rel: typeProps.rel
  }), React.createElement(Icon, {
    "aria-hidden": true
  }));
};

PaginationControl.displayName = 'PaginationControl';
PaginationControl.propTypes = {
  type: PropTypes.oneOf(ALL_TYPES).isRequired
};
var PaginationPrevious = function PaginationPrevious(props) {
  return React.createElement(PaginationControl, _extends({}, props, {
    type: TYPE_PREVIOUS
  }));
};
PaginationPrevious.displayName = 'PaginationPrevious';
var PaginationNext = function PaginationNext(props) {
  return React.createElement(PaginationControl, _extends({}, props, {
    type: TYPE_NEXT
  }));
};
PaginationNext.displayName = 'PaginationNext';
var PaginationFirst = function PaginationFirst(props) {
  return React.createElement(PaginationControl, _extends({}, props, {
    type: TYPE_FIRST
  }));
};
PaginationFirst.displayName = 'PaginationFirst';
var PaginationLast = function PaginationLast(props) {
  return React.createElement(PaginationControl, _extends({}, props, {
    type: TYPE_LAST
  }));
};
PaginationLast.displayName = 'PaginationLast';

var range = function range(from, to) {
  var o = [];

  for (var i = from; i <= to; i += 1) {
    o.push(i);
  }

  return o;
};

var calcPages = function calcPages(current, total, plusOrMinus) {
  var core = 1 + 2 * plusOrMinus;
  var numOfSlots = core + 2 + 2;
  /* 2 ellipsis + (first + last) */
  // If it fits, I sits

  if (total <= numOfSlots) {
    return range(1, total);
  } // Pages


  var offset = plusOrMinus + 1 + 1;
  var middle = Math.min(Math.max(current, 1 + offset), total - offset);
  var pages = range(middle - plusOrMinus, middle + plusOrMinus); // Beginning

  if (pages[0] !== 1) {
    pages.splice(0, 0, 1);
    pages.splice(1, 0, pages[1] === 3 ? 2 : ELLIPSIS);
  } // End


  if (pages[pages.length - 1] !== total) {
    pages.push(total);
    pages.splice(-1, 0, pages[pages.length - 2] === total - 2 ? total - 1 : ELLIPSIS);
  }

  return pages;
};
var getPages = function getPages(current, total, plusOrMinus) {
  var pages = calcPages(current, total, plusOrMinus);

  var getPosition = function getPosition(prev, next) {
    var p = prev && prev !== ELLIPSIS;
    var n = next && next !== ELLIPSIS;
    if (!p && !n) return POSITION_ONLY_CHILD;
    if (!p) return POSITION_FIRST_CHILD;
    if (!n) return POSITION_LAST_CHILD;
    return undefined;
  };

  var o = [];
  var prev;
  var next;

  for (var i = 0; i < pages.length; i += 1) {
    var page = pages[i];
    next = i < pages.length - 1 ? pages[i + 1] : undefined;
    o.push({
      page: page,
      position: getPosition(prev, next)
    });
    prev = page;
  }

  return o;
}; // https://stackoverflow.com/a/31615643/186965

var calcOrdinal = function calcOrdinal(n) {
  var s = ['th', 'st', 'nd', 'rd'];
  var v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

var buildLabel$1 = function buildLabel(page, current) {
  return "" + (current ? 'Current page, ' : '') + calcOrdinal(page) + " page";
};

var PaginationPage = function PaginationPage(props) {
  return React.createElement(PaginationItem, _extends({}, props, {
    type: TYPE_PAGE,
    label: buildLabel$1(props.page, props.current)
  }), props.page);
};

PaginationPage.propTypes = {
  page: PropTypes.number,
  current: PropTypes.bool
};
PaginationPage.defaultProps = {
  page: undefined,
  current: false
};
PaginationPage.displayName = 'PaginationPage';

var PaginationEllipsis = function PaginationEllipsis() {
  return React.createElement("li", {
    className: "ln-c-pagination__item ln-c-pagination__item--ellipsis",
    "aria-hidden": true
  }, "\u2026");
};

PaginationEllipsis.displayName = 'PaginationEllipsis';

var PaginationInfo = function PaginationInfo(_ref) {
  var children = _ref.children,
      current = _ref.current,
      total = _ref.total;
  return React.createElement("li", {
    className: "ln-c-pagination__info",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, children || React.createElement(Fragment, null, React.createElement("span", {
    className: "ln-u-visually-hidden@max-xs"
  }, "Page\xA0"), current, " of ", total));
};

PaginationInfo.displayName = 'PaginationInfo';
PaginationInfo.propTypes = {
  children: PropTypes.node,
  current: PropTypes.number,
  total: PropTypes.number
};
PaginationInfo.defaultProps = {
  children: undefined,
  current: undefined,
  total: undefined
};

/* eslint-disable react/no-array-index-key */

var getLinkRel = function getLinkRel(_ref) {
  var page = _ref.page,
      current = _ref.current,
      total = _ref.total;

  if (page === 1) {
    return LINK_REL[TYPE_FIRST];
  }

  if (page === total) {
    return LINK_REL[TYPE_LAST];
  }

  if (page === current - 1) {
    return LINK_REL[TYPE_PREVIOUS];
  }

  if (page === current + 1) {
    return LINK_REL[TYPE_NEXT];
  }

  return undefined;
};

var PaginationPages = function PaginationPages(props) {
  var onChange = props.onChange,
      current = props.current,
      total = props.total,
      createHref = props.createHref,
      element = props.element,
      range = props.range;
  return getPages(current, total, range).map(function (_ref2, index) {
    var page = _ref2.page,
        position = _ref2.position;
    return page === ELLIPSIS ? React.createElement(PaginationEllipsis, {
      key: index
    }) : React.createElement(PaginationPage, {
      key: index,
      page: page,
      onClick: onChange,
      href: createHref(page),
      current: current === page,
      position: position,
      element: element,
      rel: getLinkRel({
        page: page,
        current: current,
        total: total
      })
    });
  });
};

PaginationPages.propTypes = {
  range: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  createHref: PropTypes.func,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func])
};
PaginationPages.defaultProps = {
  onChange: undefined,
  createHref: undefined
};

var Pagination$1 = function Pagination$$1(_ref) {
  var className = _ref.className,
      current = _ref.current,
      total = _ref.total,
      onChange = _ref.onChange,
      linkElement = _ref.linkElement,
      createHref = _ref.createHref,
      showFirstAndLast = _ref.showFirstAndLast,
      showPages = _ref.showPages,
      pageRange = _ref.pageRange,
      fullWidth = _ref.fullWidth;
  return React.createElement(Pagination, {
    className: className,
    showFirstAndLast: showFirstAndLast,
    showPages: showPages,
    fullWidth: fullWidth
  }, showFirstAndLast && React.createElement(PaginationFirst, {
    disabled: current <= 1,
    page: 1,
    element: linkElement,
    onClick: onChange,
    href: createHref(1)
  }), React.createElement(PaginationPrevious, {
    disabled: current <= 1,
    page: current - 1,
    element: linkElement,
    onClick: onChange,
    href: createHref(current - 1)
  }), React.createElement(PaginationInfo, {
    current: current,
    total: total
  }), showPages && React.createElement(PaginationPages, {
    range: pageRange,
    current: current,
    total: total,
    element: linkElement,
    onChange: onChange,
    createHref: createHref
  }), React.createElement(PaginationNext, {
    disabled: current >= total,
    page: current + 1,
    element: linkElement,
    onClick: onChange,
    href: createHref(current + 1)
  }), showFirstAndLast && React.createElement(PaginationLast, {
    disabled: current >= total,
    page: total,
    element: linkElement,
    onClick: onChange,
    href: createHref(total)
  }));
};

Pagination$1.propTypes = {
  /** Custom CSS classes */
  className: PropTypes.string,

  /** Currently selected page */
  current: PropTypes.number.isRequired,

  /** Total number of pages */
  total: PropTypes.number.isRequired,

  /* Called when current page number changes */
  onChange: PropTypes.func.isRequired,

  /** Element to be used as link */
  linkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),

  /** Function used to generate page link `href`s (page number passed as argument) */
  createHref: PropTypes.func,

  /** Show first and last page links i.e. `|<` and `>|` */
  showFirstAndLast: PropTypes.bool,

  /** Show page number buttons/links */
  showPages: PropTypes.bool,

  /** Number of page buttons/links displayed each side of the current page */
  pageRange: PropTypes.number,

  /** Resize to 100% width of the parent */
  fullWidth: PropTypes.bool
};
Pagination$1.defaultProps = {
  className: undefined,
  linkElement: 'a',
  createHref: function createHref(page) {
    return "#" + page;
  },
  showFirstAndLast: false,
  showPages: false,
  pageRange: 1,
  fullWidth: false
};
Pagination$1.displayName = 'Pagination';

var Section = function Section(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("section", _extends({}, rest, {
    className: classnames(className, 'ln-o-section')
  }), children);
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
Section.defaultProps = {
  children: undefined,
  className: undefined
};
Section.displayName = 'Section';

var SiteLayout = function SiteLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      bodyFlushTop = _ref.bodyFlushTop,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "bodyFlushTop"]);

  var header;
  var headerBody;
  var footer;
  var customHeader = false;
  React.Children.forEach(children, function (child) {
    if (React.isValidElement(child)) {
      var type = child.type;
      var componentName = getComponentName(child);

      if (type === Header$1 || componentName === getComponentName(Header$1)) {
        header = child;
        customHeader = type !== Header$1;
      }

      if (type === HeaderBody || componentName === getComponentName(HeaderBody)) {
        headerBody = child;
      }

      if (type === Footer || componentName === getComponentName(Footer)) {
        footer = child;
      }
    }
  });
  return React.createElement(Page, _extends({
    className: className
  }, rest), header && React.createElement(PageHeader, null, header), React.createElement(PageBody, null, headerBody || React.createElement(HeaderBody, {
    flushTop: bodyFlushTop || customHeader
  }, React.Children.map(children, function (child) {
    return child !== header && child !== footer && child;
  }))), footer && React.createElement(PageFooter, null, footer));
};

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bodyFlushTop: PropTypes.bool
};
SiteLayout.defaultProps = {
  className: undefined,
  bodyFlushTop: false
};
SiteLayout.displayName = 'SiteLayout';

var toSize = function toSize(large, squash) {
  if (large) {
    return 'lg';
  }

  return undefined;
};
/**
 * @deprecated Use [`Container`](#/Components/Container?id=container-1)
 */


var SiteWrap = function SiteWrap(_ref) {
  var padded = _ref.padded,
      className = _ref.className,
      children = _ref.children,
      large = _ref.large,
      squash = _ref.squash,
      rest = _objectWithoutPropertiesLoose(_ref, ["padded", "className", "children", "large", "squash"]);

  return React.createElement(Container, _extends({}, rest, {
    soft: padded,
    size: toSize(large, squash),
    className: classnames(className),
    clearfix: true
  }), children);
};

SiteWrap.propTypes = {
  padded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
  squash: PropTypes.bool
};
SiteWrap.defaultProps = {
  padded: false,
  large: false,
  squash: false,
  className: undefined
};
SiteWrap.displayName = 'SiteWrap';

// Deprecated.

var ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M14.586 12l-7.293 7.293a1 1 0 0 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8a1 1 0 1 0-1.414 1.414L14.586 12z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

ArrowRight.defaultProps = {
  viewBox: "0 0 24 24"
};
var ArrowRight$1 = iconHandler(ArrowRight);

var colours = {
  success: 'green',
  info: 'blue',
  warning: 'amber',
  danger: 'red',
  none: 'transparent'
};

var StatusCard = function StatusCard(_ref) {
  var _classnames;

  var className = _ref.className,
      link = _ref.link,
      onClick = _ref.onClick,
      status = _ref.status,
      children = _ref.children,
      element = _ref.element,
      containerElement = _ref.containerElement,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "link", "onClick", "status", "children", "element", "containerElement"]);

  var cardEl = containerElement || element;

  var props = _extends({}, rest, {
    className: classnames('ln-c-status-card', className, (_classnames = {
      'ln-c-status-card--link': link || onClick
    }, _classnames["ln-c-status-card--" + colours[status]] = colours[status], _classnames)),
    onClick: onClick
  });

  var body = React.createElement("div", null, React.createElement("div", {
    className: "ln-c-status-card__content"
  }, children), (link || onClick) && React.createElement("div", {
    className: "ln-c-status-card__chevron"
  }, React.createElement(ArrowRight$1, null)));
  return React.isValidElement(cardEl) ? React.cloneElement(cardEl, props, body) : React.createElement(onClick ? 'button' : cardEl, props, body);
};

StatusCard.propTypes = {
  className: PropTypes.string,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  status: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'none']),
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** @deprecated Use `element` */
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
StatusCard.defaultProps = {
  className: undefined,
  link: false,
  onClick: undefined,
  status: undefined,
  element: 'div',
  containerElement: undefined
};
StatusCard.displayName = 'StatusCard';

var TableContainer = function TableContainer(_ref) {
  var _classnames;

  var className = _ref.className,
      responsive = _ref.responsive,
      labels = _ref.labels,
      sortable = _ref.sortable,
      fixed = _ref.fixed,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "responsive", "labels", "sortable", "fixed", "children"]);

  return React.createElement("div", _extends({}, rest, {
    className: "ln-c-table-container"
  }), React.createElement("table", {
    className: classnames(className, 'ln-c-table', (_classnames = {}, _classnames["ln-c-table--responsive@" + responsive] = typeof responsive === 'string', _classnames['ln-c-table--responsive@md'] = typeof responsive !== 'string' && responsive, _classnames['ln-c-table--no-labels'] = !labels, _classnames['ln-c-table--sorted'] = sortable, _classnames['ln-c-table--fixed'] = fixed, _classnames))
  }, children));
};

TableContainer.propTypes = {
  className: PropTypes.string,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  labels: PropTypes.bool,
  sortable: PropTypes.bool,
  fixed: PropTypes.bool,
  children: PropTypes.node
};
TableContainer.defaultProps = {
  className: undefined,
  responsive: false,
  labels: true,
  sortable: false,
  fixed: false,
  children: undefined
};
TableContainer.displayName = 'TableContainer';

var TableCaption = function TableCaption(_ref) {
  var children = _ref.children,
      className = _ref.className,
      visuallyHidden = _ref.visuallyHidden,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "visuallyHidden"]);

  return React.createElement("caption", _extends({}, rest, {
    className: classnames('ln-c-table__caption', className, visuallyHidden && 'ln-u-visually-hidden')
  }), children);
};

TableCaption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  visuallyHidden: PropTypes.bool
};
TableCaption.defaultProps = {
  className: undefined,
  visuallyHidden: false
};
TableCaption.displayName = 'TableCaption';

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children,
      sortLabel = _ref.sortLabel,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "sortLabel", "className"]);

  return React.createElement("thead", _extends({}, rest, {
    className: classnames(className, 'ln-c-table__header'),
    "aria-label": sortLabel ? 'Sort by' : undefined
  }), children);
};

TableHeader.propTypes = {
  children: PropTypes.node,
  sortLabel: PropTypes.bool,
  className: PropTypes.string
};
TableHeader.defaultProps = {
  children: undefined,
  sortLabel: false,
  className: undefined
};
TableHeader.displayName = 'TableHeader';

var TableHeaderRow = function TableHeaderRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("tr", _extends({}, rest, {
    className: classnames(className, 'ln-c-table__row', 'ln-c-table__header-row')
  }), children);
};

TableHeaderRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
TableHeaderRow.defaultProps = {
  children: undefined,
  className: undefined
};
TableHeaderRow.displayName = 'TableHeaderRow';

var TableHeaderCell = function TableHeaderCell(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      onSort = _ref.onSort,
      sortDirection = _ref.sortDirection,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "align", "onSort", "sortDirection"]);

  return React.createElement("th", _extends({}, rest, {
    className: classnames('ln-c-table__header-cell', className, (_classnames = {
      'ln-c-table__header-cell--sortable': !!onSort
    }, _classnames["ln-c-table__header-cell--text-align-" + align] = align, _classnames))
  }), onSort ? React.createElement("button", {
    type: "button",
    className: classnames('ln-c-table__sort-button', {
      'is-active': !!sortDirection,
      'is-ascending': sortDirection === 'ascending'
    }),
    onClick: function onClick() {
      return onSort(sortDirection === 'ascending');
    }
  }, React.createElement("span", {
    className: "ln-c-table__sort-text",
    "aria-label": "Sort by"
  }, children)) : children);
};

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  onSort: PropTypes.func,
  sortDirection: PropTypes.oneOf(['ascending', 'descending']),
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center'])
};
TableHeaderCell.defaultProps = {
  children: undefined,
  onSort: undefined,
  sortDirection: undefined,
  className: undefined,
  align: undefined
};
TableHeaderCell.displayName = 'TableHeaderCell';

var TableBody = function TableBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("tbody", _extends({}, rest, {
    className: classnames(className, 'ln-c-table__body')
  }), children);
};

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node
};
TableBody.defaultProps = {
  children: undefined,
  className: undefined
};
TableBody.displayName = 'TableBody';

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("tr", _extends({}, rest, {
    className: classnames(className, 'ln-c-table__row')
  }), children);
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
TableRow.defaultProps = {
  children: undefined,
  className: undefined
};
TableRow.displayName = 'TableRow';

var TableCell = function TableCell(_ref) {
  var _classnames;

  var children = _ref.children,
      label = _ref.label,
      className = _ref.className,
      align = _ref.align,
      lastWhenStacked = _ref.lastWhenStacked,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "label", "className", "align", "lastWhenStacked"]);

  return React.createElement("td", _extends({}, rest, {
    className: classnames(className, 'ln-c-table__cell', (_classnames = {}, _classnames["ln-c-table__cell--text-align-" + align] = align, _classnames), lastWhenStacked && 'ln-c-table__cell--last-when-stacked'),
    "data-label": label
  }), children);
};

TableCell.propTypes = {
  /** Content to render within the cell */
  children: PropTypes.node,

  /** Label associated with the cell - used when displayed in a responsive "stacked" view */
  label: PropTypes.string,

  /** Add custom classes e.g. for styling purposes */
  className: PropTypes.string,

  /** Horizontally aligns the table cell contents */
  align: PropTypes.oneOf(['left', 'right', 'center']),

  /** Displays at the bottom in responsive mode when "stack" view showing (e.g. on mobile) */
  lastWhenStacked: PropTypes.bool
};
TableCell.defaultProps = {
  children: undefined,
  label: undefined,
  className: undefined,
  align: undefined,
  lastWhenStacked: false
};
TableCell.displayName = 'TableCell';

var sortAlphabetically = function sortAlphabetically(accessor, sortValue, ascending) {
  return function (a, b) {
    var valueA = accessor(a)[sortValue];
    var valueB = accessor(b)[sortValue];

    if (valueA < valueB) {
      return ascending ? -1 : 1;
    }

    if (valueA > valueB) {
      return ascending ? 1 : -1;
    }

    return 0;
  };
};

var sort = function sort(_ref) {
  var data = _ref.data,
      sorted = _ref.sorted;

  if (Object.keys(sorted).length > 0) {
    var sortFunction = typeof sorted.sortValue === 'function' ? sorted.sortValue(sorted.accessor, sorted.ascending) : sortAlphabetically(sorted.accessor, sorted.sortValue, sorted.ascending);
    return {
      data: data.sort(sortFunction)
    };
  }

  return {};
};

var sortDataHandler = function sortDataHandler(_ref2) {
  var setSorted = _ref2.setSorted;
  return function (sortOptions) {
    return setSorted(sortOptions);
  };
};

var DEFAULT_CELL_DATA_PROPERTY = 'value';

var buildAccessor = function buildAccessor(accessor) {
  if (typeof accessor === 'function') {
    return accessor;
  }

  if (typeof accessor === 'string') {
    return function (row) {
      var _ref;

      return _ref = {}, _ref[DEFAULT_CELL_DATA_PROPERTY] = row[accessor], _ref;
    };
  }

  return function (row) {
    return row;
  };
};

var buildAccessors = function buildAccessors(columns) {
  return columns.reduce(function (acc, curr) {
    acc[curr.name] = buildAccessor(curr.accessor);
    return acc;
  }, {});
};

var buildColClassName = function buildColClassName(columns) {
  return columns.reduce(function (classNames, column) {
    var _extends2;

    return _extends({}, classNames, (_extends2 = {}, _extends2[column.name] = typeof column.className === 'object' ? column.className : {
      th: column.className,
      td: column.className
    }, _extends2));
  }, {});
};
/**
 * The `column` prop definition can be customised with the following options:
 *
 * - `renderHead`: `node` - what to display in the column heading, by default column name is displayed
 * - `accessor`: `func` - access deeply nested data structures or apply transformations to data should follow the format `data => ({ value: data.email.toLowerCase() })`
 * - `render`: `node` - determine how the cell contents are output, receives props defined by the `accessor` function so may contain multiple pieces of row data e.g. `props => <span><b>{props.label}</b> {props.unit}</span>`
 * - `sort`: `string` or `func` - String value that determines what value returned by the `accessor` has alphabetical sorting applied to it, alternatively passing a function allows for custom sorting (`accessor`: `func`, `ascending`: bool) => [sort function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
 * - `sortable`: `bool` - determines whether this column is sortable or not. Overrides top level `<Table />` prop `sortable`
 * - `className`: `string` or `obj` - adds a custom class to the cells within that column, can provide an object (`{ th: 'header', td: 'body' }`) to have different classes for header & body cells.
 *
 */


var Table = function Table(_ref2) {
  var columns = _ref2.columns,
      data = _ref2.data,
      className = _ref2.className,
      responsive = _ref2.responsive,
      labels = _ref2.labels,
      sortable = _ref2.sortable,
      sortData = _ref2.sortData,
      sorted = _ref2.sorted,
      caption = _ref2.caption,
      visuallyHiddenCaption = _ref2.visuallyHiddenCaption,
      fixed = _ref2.fixed,
      rest = _objectWithoutPropertiesLoose(_ref2, ["columns", "data", "className", "responsive", "labels", "sortable", "sortData", "sorted", "caption", "visuallyHiddenCaption", "fixed"]);

  var accessors = buildAccessors(columns);
  var colClassNames = buildColClassName(columns);
  var isSortable = sortable || columns.filter(function (c) {
    return c.sortable;
  }).length > 0;
  return React.createElement(TableContainer, _extends({
    className: className,
    responsive: responsive,
    labels: labels,
    sortable: sortable
  }, filterProps(rest, ['setSorted'])), caption && React.createElement(TableCaption, {
    visuallyHidden: visuallyHiddenCaption
  }, caption), React.createElement(TableHeader, {
    sortLabel: responsive && isSortable
  }, React.createElement(TableHeaderRow, null, columns.map(function (column) {
    var sortDirection;

    if (sorted.column === column.name) {
      sortDirection = sorted.ascending ? 'ascending' : 'descending';
    }

    return React.createElement(TableHeaderCell, {
      key: column.name,
      sortDirection: sortDirection,
      onSort: column.sortable || column.sortable === undefined && sortable ? function (ascendingActive) {
        return sortData({
          column: column.name,
          accessor: accessors[column.name],
          ascending: !ascendingActive,
          sortValue: column.sort || DEFAULT_CELL_DATA_PROPERTY
        });
      } : undefined,
      align: column.align,
      className: colClassNames[column.name].th
    }, column.renderHead === undefined ? column.name : column.renderHead);
  }))), React.createElement(TableBody, null, data.map(function (row) {
    return React.createElement(TableRow, {
      key: JSON.stringify(row)
    }, columns.map(function (column) {
      var cellData = accessors[column.name](row);
      return React.createElement(TableCell, {
        key: column.name,
        align: column.align,
        className: colClassNames[column.name].td,
        label: responsive && labels && !column.hideLabel ? column.name : undefined,
        lastWhenStacked: responsive && column.lastWhenStacked
      }, column.render ? column.render(cellData) : cellData[DEFAULT_CELL_DATA_PROPERTY]);
    }));
  })));
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    renderHead: PropTypes.node,
    accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    sort: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    sortable: PropTypes.bool,
    render: PropTypes.func,

    /** Displays this cell at the bottom when stack view presented - requires top-level `responsive` prop to be enabled */
    lastWhenStacked: PropTypes.bool
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  labels: PropTypes.bool,
  sortable: PropTypes.bool,
  sortData: PropTypes.func,
  sorted: PropTypes.shape({
    column: PropTypes.string,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    ascending: PropTypes.bool
  }),
  caption: PropTypes.node,
  visuallyHiddenCaption: PropTypes.bool,
  fixed: PropTypes.bool
};
Table.defaultProps = {
  className: undefined,
  responsive: false,
  labels: true,
  sortable: false,
  sortData: undefined,
  sorted: {},
  caption: undefined,
  visuallyHiddenCaption: false,
  fixed: false
};
Table.displayName = 'Table';
var Table$1 = compose(setDisplayName('Table'), withState('sorted', 'setSorted', {}), withHandlers({
  sortData: sortDataHandler
}), withProps(sort))(Table);

var ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M9.414 12l7.293-7.293a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 1 0 1.414-1.414L9.414 12z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

ArrowLeft.defaultProps = {
  viewBox: "0 0 24 24"
};
var ArrowLeft$1 = iconHandler(ArrowLeft);

var TabLink = function TabLink(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      element = _ref.element,
      containerElement = _ref.containerElement,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      rest = _objectWithoutPropertiesLoose(_ref, ["active", "children", "className", "element", "containerElement", "onClick", "onFocus"]);

  var tabEl = containerElement || element;

  var props = _extends({}, rest, {
    className: classnames('ln-c-tabs__link', className, {
      'is-active': active
    }),
    role: 'tab',
    'aria-selected': active,
    onClick: onClick,
    onFocus: onFocus
  });

  return React.isValidElement(tabEl) ? React.cloneElement(tabEl, props, children) : React.createElement(tabEl, props, children);
};

TabLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** @deprecated Use `element` */
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func
};
TabLink.defaultProps = {
  active: false,
  className: undefined,
  element: 'button',
  containerElement: undefined,
  onClick: undefined,
  onFocus: undefined
};
TabLink.displayName = 'TabLink';

var TabList = function TabList(_ref) {
  var className = _ref.className,
      children = _ref.children,
      fill = _ref.fill,
      deep = _ref.deep,
      showPrevArrow = _ref.showPrevArrow,
      showNextArrow = _ref.showNextArrow,
      animateDistance = _ref.animateDistance,
      getChildren = _ref.getChildren,
      onArrowClick = _ref.onArrowClick,
      onTabLinkFocus = _ref.onTabLinkFocus,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children", "fill", "deep", "showPrevArrow", "showNextArrow", "animateDistance", "getChildren", "onArrowClick", "onTabLinkFocus"]);

  var isResponsive = !fill && React.Children.count(children) > 1 && onArrowClick;
  var transform = isResponsive && animateDistance ? "translateX(" + animateDistance + "%)" : undefined;

  if (getChildren) {
    getChildren(children);
  }

  return React.createElement("nav", _extends({}, filterProps(rest, ['visibleTabs']), {
    className: classnames('ln-c-tabs', className, {
      'ln-c-tabs--fill': fill,
      'ln-c-tabs--deep': deep,
      'has-prev-arrow': showPrevArrow,
      'has-next-arrow': showNextArrow
    })
  }), React.createElement("div", {
    className: "ln-c-tabs__list-wrap"
  }, React.createElement("div", {
    className: "ln-c-tabs__list",
    role: "tablist",
    style: {
      transform: transform
    }
  }, isResponsive ? React.Children.map(children, function (child, index) {
    /* eslint-disable react/prop-types */
    var props = {
      key: index
    };

    if (child.type === TabLink) {
      props.onFocus = onTabLinkFocus;
    }

    return React.cloneElement(child, props);
    /* eslint-enable react/prop-types */
  }) : children), isResponsive && [React.createElement("button", {
    type: "button",
    key: "arrowPrev",
    className: "ln-c-tabs__link ln-c-tabs__link--arrow ln-c-tabs__link--arrow-prev",
    tabIndex: "-1",
    onClick: function onClick() {
      return onArrowClick(false);
    }
  }, React.createElement(ArrowLeft$1, null)), React.createElement("button", {
    type: "button",
    key: "arrowNext",
    className: "ln-c-tabs__link ln-c-tabs__link--arrow ln-c-tabs__link--arrow-next",
    tabIndex: "-1",
    onClick: function onClick() {
      return onArrowClick(true);
    }
  }, React.createElement(ArrowRight$1, null))]));
};

TabList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fill: PropTypes.bool,
  deep: PropTypes.bool,
  showPrevArrow: PropTypes.bool,
  showNextArrow: PropTypes.bool,
  animateDistance: PropTypes.number,
  getChildren: PropTypes.func,
  onArrowClick: PropTypes.func,
  onTabLinkFocus: PropTypes.func
};
TabList.defaultProps = {
  className: undefined,
  fill: false,
  deep: false,
  showPrevArrow: false,
  showNextArrow: false,
  animateDistance: 0,
  getChildren: undefined,
  onArrowClick: undefined,
  onTabLinkFocus: undefined
};
TabList.displayName = 'TabList';

var getAnimateDistance = function getAnimateDistance(selectedPageIndex, remainingTabs, tabsPerPage) {
  if (selectedPageIndex === undefined) {
    return 0;
  }

  var animateDistance = selectedPageIndex * -100;

  if (remainingTabs < 0) {
    animateDistance += remainingTabs * -1 * (100 / tabsPerPage);
  }

  return animateDistance;
};

var getElementDimensions = function getElementDimensions(element) {
  if (!element.getBoundingClientRect) {
    return {};
  }

  return element.getBoundingClientRect();
};

var ARROW_WIDTH = 48;
var VISIBLE_TABS = 2;

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      animateDistance: 0,
      selectedIndex: 0,
      numberOfTabs: 0,
      remainingTabs: 0
    };
    _this.handleArrowClick = _this.handleArrowClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTabLinkFocus = _this.handleTabLinkFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.isResponsiveEnabled = _this.isResponsiveEnabled.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setSelectedTab = _this.setSelectedTab.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getNumberOfTabs = _this.getNumberOfTabs.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getNumberOfRemainingTabs = _this.getNumberOfRemainingTabs.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = Tabs.prototype;

  _proto.getNumberOfTabs = function getNumberOfTabs(children) {
    var _this2 = this;

    var numberOfTabs = this.state.numberOfTabs;
    var tabs = React.Children.count(children);

    if (tabs !== numberOfTabs) {
      this.setState({
        numberOfTabs: tabs
      }, function () {
        _this2.setState({
          remainingTabs: _this2.getNumberOfRemainingTabs()
        });
      });
    }
  };

  _proto.getNumberOfRemainingTabs = function getNumberOfRemainingTabs() {
    var _this$state = this.state,
        numberOfTabs = _this$state.numberOfTabs,
        selectedIndex = _this$state.selectedIndex;
    return numberOfTabs - (selectedIndex + 1) * VISIBLE_TABS;
  };

  _proto.setSelectedTab = function setSelectedTab(selectedIndex) {
    var _this3 = this;

    this.setState({
      selectedIndex: selectedIndex
    }, function () {
      var remainingTabs = _this3.getNumberOfRemainingTabs();

      _this3.setState({
        remainingTabs: remainingTabs,
        animateDistance: getAnimateDistance(selectedIndex, remainingTabs, VISIBLE_TABS)
      });
    });
  };

  _proto.isResponsiveEnabled = function isResponsiveEnabled() {
    var numberOfTabs = this.state.numberOfTabs;
    var fill = this.props.fill;
    return !fill && numberOfTabs > VISIBLE_TABS;
  };

  _proto.handleArrowClick = function handleArrowClick(next) {
    var modifier = next ? 1 : -1;
    this.setSelectedTab(this.state.selectedIndex + modifier);
  };

  _proto.handleTabLinkFocus = function handleTabLinkFocus(e) {
    if (this.isResponsiveEnabled()) {
      var _getElementDimensions = getElementDimensions(this.wrapper),
          wrapperX = _getElementDimensions.x,
          wrapperWidth = _getElementDimensions.width;

      var _getElementDimensions2 = getElementDimensions(e.target),
          focussedX = _getElementDimensions2.x,
          focussedWidth = _getElementDimensions2.width;

      if (focussedX + focussedWidth >= wrapperX + wrapperWidth) {
        this.setSelectedTab(this.state.selectedIndex + 1);
      } else if (focussedX + focussedWidth <= wrapperX + ARROW_WIDTH) {
        this.setSelectedTab(this.state.selectedIndex - 1);
      }
    }
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$state2 = this.state,
        selectedIndex = _this$state2.selectedIndex,
        remainingTabs = _this$state2.remainingTabs,
        animateDistance = _this$state2.animateDistance;
    var responsiveProps = {};

    if (this.isResponsiveEnabled()) {
      responsiveProps = {
        showNextArrow: remainingTabs > 0,
        showPrevArrow: selectedIndex > 0,
        animateDistance: animateDistance
      };
    }

    return React.createElement("div", {
      ref: function ref(wrapper) {
        _this4.wrapper = wrapper;
      }
    }, React.createElement(TabList, _extends({
      onArrowClick: this.handleArrowClick,
      onTabLinkFocus: this.handleTabLinkFocus,
      getChildren: this.getNumberOfTabs
    }, responsiveProps, this.props)));
  };

  return Tabs;
}(Component);

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  fill: PropTypes.bool
};
Tabs.defaultProps = {
  fill: false
};
Tabs.displayName = 'Tabs';

var TabPanel = function TabPanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      active = _ref.active,
      inactive = _ref.inactive,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "active", "inactive"]);

  var activeState = active || !inactive;
  return React.createElement("div", _extends({}, rest, {
    role: "tabpanel",
    "aria-hidden": !activeState,
    className: classnames(className, !activeState && 'ln-u-hidden')
  }), children);
};

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  /** @deprecated Use inactive */
  active: PropTypes.bool,
  inactive: PropTypes.bool
};
TabPanel.defaultProps = {
  children: undefined,
  className: undefined,
  active: undefined,
  inactive: false
};
TabPanel.displayName = 'TabPanel';

export { Accordion, AccordionItem, AutocompleteField, MultiAutocompleteField, AsyncAutocompleteField, Breadcrumbs, BreadcrumbsWrapper, BreadcrumbsItem, Button, FilledButton, TextButton, LinkButton, OutlinedButton, CancelButton, CloseButton, SearchButton, ToggleButtonGroup, ToggleButton, PrimaryButton, SecondaryButton, ButtonGroup, ButtonGroupWrapper, ButtonGroupPrimary, ButtonGroupSecondary, Card, ColleagueLayout, HeaderBody as MainSection, Container, Flag, FlagWrapper, FlagBody, FlagComponent, Footer, CheckboxField, FieldInfo, Fieldset, Form, FormGroup, Label, LabelInfo, Legend, PasswordField, RadioButtonField, SearchField, SelectField, TextAreaField, TextInputField, withClear, Grid, GridWrapper, GridItem, Header$1 as Header, Header as HeaderComponent, HeaderBody, IconNavigation, MainBar, TopBar, Checkbox, FormOption, Input, InputAction, InputButton, InputControl, InputGroup, InputIcon, Password$1 as Password, Password as PasswordComponent, RadioButton, SearchInput, Select, TextArea, TextInput, List, ListItem, LoadingIndicator, LoadingIcon, Modal, Navigation$1 as Navigation, NavigationWrapper, Navigation as NavigationList, MenuButton, NavigationDropdown$1 as NavigationDropdown, NavigationDropdown as NavigationDropdownComponent, Notification, NotificationList, NotificationItem, Page, PageBody, PageHeader, PageFooter, Pagination as PaginationNav, PaginationPrevious, PaginationNext, PaginationFirst, PaginationLast, PaginationPage, PaginationEllipsis, PaginationInfo, Pagination$1 as Pagination, Search$3 as Search, Search$2 as SearchComponent, Section, SiteLayout, SiteWrap, StatusCard, Table$1 as Table, Table as TableComponent, TableContainer, TableBody, TableCaption, TableCell, TableHeader, TableHeaderCell, TableHeaderRow, TableRow, Tabs, TabList, TabLink, TabPanel, Text, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Caption, Body1, Body2, ButtonText, Display1, Display2, Display3, Display4, Display5, Display6, Display7 };
//# sourceMappingURL=index.js.map
