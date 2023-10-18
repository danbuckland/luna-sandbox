import { compose, setDisplayName, mapProps } from 'recompose';
import classnames from 'classnames';
import React from 'react';

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

var addLunaClass = function addLunaClass(props) {
  return _extends({}, props, {
    className: classnames(props.className, 'ln-c-icon', props.fixed && 'ln-c-icon--fixed', props.size && "ln-c-icon--" + props.size),
    fixed: undefined
  });
};
var iconHandler = (
/* istanbul ignore next */
function (Component) {
  return (
    /* istanbul ignore next */
    compose(setDisplayName(Component.displayName || Component.name || 'Icon'), mapProps(addLunaClass))(Component)
  );
});

var Accessibility = function Accessibility(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M16.082 16.32l2.12 2.119a.96.96 0 0 0 1.357-1.358l-2.4-2.4a.96.96 0 0 0-.679-.281h-3.987l-1.306-7.838a.96.96 0 0 0-1.894.316l1.44 8.64a.96.96 0 0 0 .947.802h4.402z",
    fillRule: "nonzero"
  }), React.createElement("circle", {
    cx: "10.72",
    cy: "1.92",
    r: "1.92"
  }), React.createElement("path", {
    d: "M11.2 11.52h3.36a.96.96 0 1 0 0-1.92H11.2a.96.96 0 1 0 0 1.92zm-3.465.073C5.492 12.52 4 14.68 4 17.113c0 3.313 2.737 5.99 6.103 5.99 2.577 0 4.853-1.584 5.73-3.924a.96.96 0 1 0-1.798-.673c-.596 1.591-2.157 2.676-3.932 2.676-2.315 0-4.183-1.826-4.183-4.068 0-1.645 1.014-3.112 2.548-3.747a.96.96 0 0 0-.733-1.774z",
    fillRule: "nonzero"
  })));
};

Accessibility.defaultProps = {
  viewBox: "0 0 24 24"
};
var Accessibility$1 = iconHandler(Accessibility);

var Account = function Account(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12 9c1.658 0 3-1.342 3-3s-1.342-3-3-3-3 1.342-3 3 1.342 3 3 3zm0 2a5 5 0 0 1-5-5c0-2.763 2.238-5 5-5s5 2.237 5 5a5 5 0 0 1-5 5zm0 4c-4.652 0-9 2.5-9 5.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5c0-3-4.348-5.5-9-5.5zm0-2c4.59 0 11 2.512 11 7.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 20.5C1 15.512 7.41 13 12 13z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

Account.defaultProps = {
  viewBox: "0 0 24 24"
};
var Account$1 = iconHandler(Account);

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

var ArrowUpDown = function ArrowUpDown(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12.178 20.946l-6.219-6.293a.98.98 0 0 0-1.398 0 1.008 1.008 0 0 0 0 1.414l6.918 7a.98.98 0 0 0 1.398 0l6.917-7a1.008 1.008 0 0 0 0-1.414.98.98 0 0 0-1.397 0l-6.22 6.293zm0-18.172L5.959 9.067a.98.98 0 0 1-1.398 0 1.008 1.008 0 0 1 0-1.414l6.918-7a.98.98 0 0 1 1.398 0l6.917 7c.386.39.386 1.024 0 1.414a.98.98 0 0 1-1.397 0l-6.22-6.293z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

ArrowUpDown.defaultProps = {
  viewBox: "0 0 24 24"
};
var ArrowUpDown$1 = iconHandler(ArrowUpDown);

var AwardWinning = function AwardWinning(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M17.048 10V4.014c0-.005-.47-.01-1.41-.014H7.016C7.01 4 7.005 6 7 10c-.052 3.462 2.336 6 5.024 6 2.573 0 5.026-2.479 5.024-6zm-5.024 8C8.098 18 4.933 14.47 5 10l.001-5.986C5.001 2.902 5.903 2 7.015 2h10.019c1.112 0 2.014.902 2.014 2.014V10c.002 4.63-3.174 8-7.024 8z"
  }), React.createElement("path", {
    d: "M4.843 4C2.708 4 1 5.803 1 8s1.708 4 3.843 4a3.71 3.71 0 0 0 1.583-.354 1 1 0 0 0-.852-1.81 1.707 1.707 0 0 1-.731.164C3.837 10 3 9.116 3 8s.837-2 1.843-2a1 1 0 1 0 0-2zm12.717 7.623a3.668 3.668 0 0 0 1.62.377C21.304 12 23 10.196 23 8c0-2.196-1.696-4-3.82-4a1 1 0 1 0 0 2c.99 0 1.82.882 1.82 2 0 1.118-.83 2-1.82 2-.259 0-.509-.059-.74-.172-.495-.244-.197.676-.44 1.172-.243.496-.936.38-.44.623zM13 22v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0z"
  }), React.createElement("path", {
    d: "M9 23h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"
  })));
};

AwardWinning.defaultProps = {
  viewBox: "0 0 24 24"
};
var AwardWinning$1 = iconHandler(AwardWinning);

var Bag = function Bag(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M4.52 18.79c.115.698.718 1.21 1.425 1.21h11.99c.707 0 1.31-.512 1.425-1.21L21.137 8H2.743L4.52 18.79zM1.565 6h20.75a1 1 0 0 1 .987 1.162l-1.969 11.953A3.444 3.444 0 0 1 17.935 22H5.945a3.444 3.444 0 0 1-3.398-2.885L.578 7.162A1 1 0 0 1 1.565 6z"
  }), React.createElement("path", {
    d: "M17 6A5 5 0 0 0 7 6a1 1 0 1 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0z"
  })));
};

Bag.defaultProps = {
  viewBox: "0 0 24 24"
};
var Bag$1 = iconHandler(Bag);

var Basket = function Basket(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M4.505 9a1.444 1.444 0 0 0-1.425 1.68l1.5 9.11c.115.698.718 1.21 1.425 1.21h11.99c.707 0 1.31-.512 1.425-1.21l1.5-9.11A1.444 1.444 0 0 0 19.496 9H4.505zm0-2h14.99a3.444 3.444 0 0 1 3.399 4.004l-1.5 9.111a3.444 3.444 0 0 1-3.4 2.885H6.006a3.444 3.444 0 0 1-3.398-2.885l-1.5-9.11A3.444 3.444 0 0 1 4.504 7z"
  }), React.createElement("path", {
    d: "M17.831 6.915L15.82 1.262a1 1 0 1 0-1.884.67l2.01 5.653a1 1 0 1 0 1.885-.67zm-9.778.67l2.011-5.653a1 1 0 1 0-1.884-.67L6.169 6.915a1 1 0 0 0 1.884.67z"
  })));
};

Basket.defaultProps = {
  viewBox: "0 0 24 24"
};
var Basket$1 = iconHandler(Basket);

var Calendar = function Calendar(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M4 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4zm0-2h16a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
  }), React.createElement("path", {
    d: "M7 1v5a1 1 0 1 0 2 0V1a1 1 0 1 0-2 0zm8 0v5a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0zm-4.866 15.5a1 1 0 0 0 1.732 1l4.046-7a1 1 0 0 0-.866-1.5H9a1 1 0 1 0 0 2h4.313l-3.179 5.5z"
  })));
};

Calendar.defaultProps = {
  viewBox: "0 0 24 24"
};
var Calendar$1 = iconHandler(Calendar);

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

var ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"
  }));
};

ChevronLeft.defaultProps = {
  viewBox: "0 0 24 24"
};
var ChevronLeft$1 = iconHandler(ChevronLeft);

var ChevronRight = function ChevronRight(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
  }));
};

ChevronRight.defaultProps = {
  viewBox: "0 0 24 24"
};
var ChevronRight$1 = iconHandler(ChevronRight);

var ClickAndColleck = function ClickAndColleck(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M13.152 21h-6.91c-.769 0-1.587-.751-1.737-1.665L3.024 10.34C2.892 9.541 3.3 9 3.924 9h16.15c.628 0 1.034.536.902 1.339l-.6 2.545a1 1 0 1 0 1.947.457l.613-2.611C23.274 8.693 21.993 7 20.075 7H3.925C2.008 7 .727 8.7 1.05 10.665l1.482 8.995C2.836 21.508 4.459 23 6.242 23h6.91a1 1 0 0 0 0-2z",
    fillRule: "nonzero"
  }), React.createElement("path", {
    d: "M16.563 14.997l3.48 1.042a1.222 1.222 0 0 1 .257 2.231l-.173.099-1.682 1.748-.113.213a1.222 1.222 0 0 1-2.253-.234l-1.04-3.588a1.222 1.222 0 0 1 1.524-1.511z"
  }), React.createElement("path", {
    d: "M17.4 18.762l3.667 3.706a1 1 0 1 0 1.422-1.407l-3.667-3.706a1 1 0 1 0-1.422 1.407zm.431-11.847L15.82 1.262a1 1 0 1 0-1.884.67l2.01 5.653a1 1 0 1 0 1.885-.67zm-9.778.67l2.011-5.653a1 1 0 1 0-1.884-.67L6.169 6.915a1 1 0 0 0 1.884.67z",
    fillRule: "nonzero"
  })));
};

ClickAndColleck.defaultProps = {
  viewBox: "0 0 24 24"
};
var ClickAndCollect = iconHandler(ClickAndColleck);

var Comment = function Comment(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M12.071 17H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.061l1.98 2.67 2.03-2.67zM5 1h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-5.937l-3.042 4-2.967-4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z",
    fillRule: "nonzero"
  }), React.createElement("circle", {
    cx: "8",
    cy: "10",
    r: "1"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "1"
  }), React.createElement("circle", {
    cx: "16",
    cy: "10",
    r: "1"
  })));
};

Comment.defaultProps = {
  viewBox: "0 0 24 24"
};
var Comment$1 = iconHandler(Comment);

var Delete = function Delete(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M8 11v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0zm6 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0z"
  }), React.createElement("path", {
    d: "M3.062 10.992l-.06 7.498A4.474 4.474 0 0 0 7.439 23h9.086A4.474 4.474 0 0 0 21 18.526l-.035-7.53a1 1 0 0 0-2 .009l.035 7.51A2.476 2.476 0 0 1 16.525 21h-9.05a2.478 2.478 0 0 1-2.474-2.494l.06-7.498a1 1 0 0 0-2-.016zM2 8h20a1 1 0 0 0 0-2H2a1 1 0 1 0 0 2z"
  }), React.createElement("path", {
    d: "M8 6V5h1v1H8zm0 1a1 1 0 0 1-1-1l.002-2h.128a4.001 4.001 0 0 1 3.872-2.998L13.017 1a4 4 0 0 1 4 4v.075l-.018.944a1 1 0 1 1-2-.038l.018-.944V5a2 2 0 0 0-1.998-2l-2.016.002a2 2 0 0 0-2 1.999v1A1.005 1.005 0 0 1 7.998 7z"
  })));
};

Delete.defaultProps = {
  viewBox: "0 0 24 24"
};
var Delete$1 = iconHandler(Delete);

var Delivery = function Delivery(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M21 12.733l-4.169-4.377a1 1 0 0 1 1.449-1.379L23 11.933v2.845A3.222 3.222 0 0 1 19.778 18H4.222A3.222 3.222 0 0 1 1 14.778V5.222A3.222 3.222 0 0 1 4.222 2H12a3.222 3.222 0 0 1 3.222 3.222v7.111a1 1 0 1 1-2 0v-7.11C13.222 4.546 12.675 4 12 4H4.222C3.547 4 3 4.547 3 5.222v9.556C3 15.453 3.547 16 4.222 16h15.556c.675 0 1.222-.547 1.222-1.222v-2.045z",
    fillRule: "nonzero"
  }), React.createElement("circle", {
    cx: "18",
    cy: "21",
    r: "2"
  }), React.createElement("circle", {
    cx: "6",
    cy: "21",
    r: "2"
  })));
};

Delivery.defaultProps = {
  viewBox: "0 0 24 24"
};
var Delivery$1 = iconHandler(Delivery);

var Dislike = function Dislike(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M6 14H3.294A.294.294 0 0 1 3 13.706V4.294C3 4.132 3.132 4 3.294 4H6v10zm-2.706 2H8V2H3.294A2.294 2.294 0 0 0 1 4.294v9.412A2.294 2.294 0 0 0 3.294 16z"
  }), React.createElement("path", {
    d: "M8 14.817V3.777c3.83-.933 7.084-1.118 9.756-.57 1.792.367 2.68 1.059 3.038 2.01.184.489.223.949.199 1.746-.007.238-.009.28-.009.377V13c0 .738-1.043 2-1.684 2H14a1 1 0 0 0-1 1v4.447a.294.294 0 0 1-.207.28l-1.14.356a1.277 1.277 0 0 1-1.574-.767L8 14.817zM15 17h4.3c1.838 0 3.684-2.233 3.684-4V7.34c0-.068.001-.106.008-.317.031-1.041-.025-1.712-.327-2.511-.613-1.628-2.073-2.765-4.507-3.264-3.179-.652-6.982-.384-11.413.785A1 1 0 0 0 6 3v12a1 1 0 0 0 .065.354l2.143 5.669a3.277 3.277 0 0 0 4.041 1.97l1.14-.356A2.294 2.294 0 0 0 15 20.447V17z"
  })));
};

Dislike.defaultProps = {
  viewBox: "0 0 24 24"
};
var Dislike$1 = iconHandler(Dislike);

var Download = function Download(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M11 2v14a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z"
  }), React.createElement("path", {
    d: "M6.707 10.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L12 15.586l-5.293-5.293zM3 22h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z"
  })));
};

Download.defaultProps = {
  viewBox: "0 0 24 24"
};
var Download$1 = iconHandler(Download);

var Edit = function Edit(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M5.486 21.57L21.35 5.161l-2.877-2.778L2.6 18.798v2.772h2.886zM.6 18.01L17.034.994a2 2 0 0 1 2.828-.049l2.877 2.778a2 2 0 0 1 .05 2.828L6.355 23.568H.601V18.01z"
  }), React.createElement("path", {
    d: "M14.586 4l4.95 4.95 1.414-1.414L16 2.586z"
  })));
};

Edit.defaultProps = {
  viewBox: "0 0 24 24"
};
var Edit$1 = iconHandler(Edit);

var Favourites = function Favourites(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M12 7.402L9.906 5.34c-1.81-1.785-4.756-1.787-6.565-.004a4.472 4.472 0 0 0 .003 6.392l8.21 8.094a.642.642 0 0 0 .888 0l8.21-8.094a4.47 4.47 0 0 0 .003-6.392c-1.806-1.78-4.756-1.78-6.565.004L12 7.402zm.687-3.487c2.588-2.55 6.789-2.551 9.374-.003a6.47 6.47 0 0 1-.004 9.24l-8.21 8.094a2.642 2.642 0 0 1-3.696 0l-8.21-8.094a6.472 6.472 0 0 1-.003-9.24c2.588-2.55 6.785-2.549 9.373.003l.688.678.688-.678z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

Favourites.defaultProps = {
  viewBox: "0 0 24 24"
};
var Favourites$1 = iconHandler(Favourites);

var FirstPage = function FirstPage(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M17.7 15.89L13.82 12l3.89-3.89A.996.996 0 1 0 16.3 6.7l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 0 0-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
  }));
};

FirstPage.defaultProps = {
  viewBox: "0 0 24 24"
};
var FirstPage$1 = iconHandler(FirstPage);

var Freshness = function Freshness(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M2.946 2.838a.96.96 0 0 1 1.377-.98c.138.068.412.195.808.366a41.207 41.207 0 0 0 5.9 2.003c.47.12.95.236 1.503.364l.72.165.697.158c3.657.83 5.113 1.389 6.32 2.796 2.86 3.338 1.472 8.866-2.31 11.734-3.443 2.612-8.386 1.464-11.139-2.212a5.91 5.91 0 0 1-.25-.363c-.884-1.386-1.649-3.697-2.334-6.714a79.299 79.299 0 0 1-.96-5.038 87.194 87.194 0 0 1-.332-2.279zM5.092 4.29l.082.526c.266 1.67.58 3.345.936 4.914.64 2.812 1.35 4.962 2.08 6.107.057.09.114.17.169.245 2.155 2.879 5.914 3.751 8.443 1.833 2.982-2.261 4.061-6.562 2.01-8.954-.832-.972-2.05-1.439-5.286-2.174l-.697-.158-.729-.166a68.13 68.13 0 0 1-1.546-.375A43.12 43.12 0 0 1 5.092 4.29z"
  }), React.createElement("path", {
    d: "M11.684 12.427c1.295 3.044 4.614 5.284 10.566 5.825a.96.96 0 0 0 .174-1.912c-5.273-.48-7.966-2.297-8.973-4.665a.96.96 0 1 0-1.767.752z"
  })));
};

Freshness.defaultProps = {
  viewBox: "0 0 24 24"
};
var Freshness$1 = iconHandler(Freshness);

var Geolocation = function Geolocation(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z",
    fillRule: "nonzero"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), React.createElement("path", {
    d: "M11 20v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zm0-18v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm-7 9H2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm18 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z",
    fillRule: "nonzero"
  })));
};

Geolocation.defaultProps = {
  viewBox: "0 0 24 24"
};
var Geolocation$1 = iconHandler(Geolocation);

var GridView = function GridView(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    x: "4",
    y: "4",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "10",
    y: "4",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "16",
    y: "4",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "4",
    y: "10",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "10",
    y: "10",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "16",
    y: "10",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "4",
    y: "16",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "10",
    y: "16",
    width: "4",
    height: "4",
    rx: "1"
  }), React.createElement("rect", {
    x: "16",
    y: "16",
    width: "4",
    height: "4",
    rx: "1"
  })));
};

GridView.defaultProps = {
  viewBox: "0 0 24 24"
};
var GridView$1 = iconHandler(GridView);

var Home = function Home(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M8 16.944C8 14.887 9.377 13 12 13c2.624 0 4 1.883 4 3.944V21h2.244C19.23 21 20 20.256 20 19.368v-8.481c0-.436-.311-1.161-.645-1.484l-6.092-5.901a1.84 1.84 0 0 0-2.526 0l-6.092 5.9C4.308 9.73 4 10.447 4 10.888v8.481C4 20.26 4.767 21 5.756 21H8v-4.056zM5.756 23C3.68 23 2 21.382 2 19.368v-8.481c0-.987.53-2.22 1.253-2.92l6.092-5.902c1.467-1.42 3.843-1.42 5.31 0l6.092 5.901c.721.699 1.253 1.942 1.253 2.92v8.482C22 21.376 20.321 23 18.244 23H14v-6.056c0-.671-.351-1.944-2-1.944s-2 1.28-2 1.944V23H5.756z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

Home.defaultProps = {
  viewBox: "0 0 24 24"
};
var Home$1 = iconHandler(Home);

var Info = function Info(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M8 21a1 1 0 0 0 0 2h9c1.333 0 1.333-2 0-2h-4.5l1 1V10a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h3.5v10H8z",
    fillRule: "nonzero"
  }), React.createElement("circle", {
    cx: "12",
    cy: "4",
    r: "2"
  })));
};

Info.defaultProps = {
  viewBox: "0 0 24 24"
};
var Info$1 = iconHandler(Info);

var LandlinePhone = function LandlinePhone(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M11.485 20.029s-1.933-1.815-4.002-5.399c1.846 3.198 4.002 5.399 4.002 5.399 1.311 1.386 3.406 1.911 5.853.498l2.803-1.618c.562-.325.764-1.03.459-1.56l-1.616-2.798c-.31-.537-1.027-.7-1.593-.374l-3.266 1.885s-.891-.462-2.737-3.66c-1.846-3.197-1.79-4.18-1.79-4.18l3.266-1.885c.566-.326.783-1.03.473-1.567l-1.617-2.8c-.306-.53-1.018-.707-1.58-.383l-2.802 1.62c-2.447 1.412-3.04 3.49-2.495 5.318 0 0 .793 2.907 2.64 6.105-2.07-3.584-2.64-6.105-2.64-6.105",
    strokeWidth: "2",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

LandlinePhone.defaultProps = {
  viewBox: "0 0 24 24"
};
var LandlinePhone$1 = iconHandler(LandlinePhone);

var LastPage = function LastPage(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M6.29 8.11L10.18 12l-3.89 3.89A.996.996 0 1 0 7.7 17.3l4.59-4.59a.996.996 0 0 0 0-1.41L7.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
  }));
};

LastPage.defaultProps = {
  viewBox: "0 0 24 24"
};
var LastPage$1 = iconHandler(LastPage);

var Like = function Like(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M5 10H2.294a.294.294 0 0 0-.294.294v9.412c0 .162.132.294.294.294H5V10zM2.294 8H7v14H2.294A2.294 2.294 0 0 1 0 19.706v-9.412A2.294 2.294 0 0 1 2.294 8z"
  }), React.createElement("path", {
    d: "M7 9.183v11.04c3.83.933 7.084 1.118 9.756.57 1.736-.356 2.63-1.14 3.02-2.29.21-.62.256-1.203.231-2.126A11.605 11.605 0 0 1 20 16v-6c0-.443-.788-1-1.7-1H13a1 1 0 0 1-1-1V3.553a.294.294 0 0 0-.207-.28l-1.14-.356a1.277 1.277 0 0 0-1.574.767L7 9.183zM18.3 7c1.898 0 3.7 1.275 3.7 3v6c0 .066 0 .09.007.324.03 1.143-.03 1.92-.338 2.823-.619 1.824-2.082 3.107-4.511 3.605-3.179.652-6.982.384-11.413-.785A1 1 0 0 1 5 21V9a1 1 0 0 1 .065-.354l2.143-5.669a3.277 3.277 0 0 1 4.041-1.97l1.14.356A2.294 2.294 0 0 1 14 3.553V7h4.3z"
  })));
};

Like.defaultProps = {
  viewBox: "0 0 24 24"
};
var Like$1 = iconHandler(Like);

var List = function List(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7zm0-2h10a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z"
  }), React.createElement("path", {
    d: "M8 9h8a1 1 0 0 0 0-2H8a1 1 0 1 0 0 2zm0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z"
  })));
};

List.defaultProps = {
  viewBox: "0 0 24 24"
};
var List$1 = iconHandler(List);

var ListView = function ListView(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "5",
    cy: "18",
    r: "2"
  }), React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "2"
  }), React.createElement("circle", {
    cx: "5",
    cy: "6",
    r: "2"
  }), React.createElement("path", {
    d: "M10 19h10a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2zm0-6h10a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2zm0-6h10a1 1 0 0 0 0-2H10a1 1 0 1 0 0 2z",
    fillRule: "nonzero"
  })));
};

ListView.defaultProps = {
  viewBox: "0 0 24 24"
};
var ListView$1 = iconHandler(ListView);

var Measurement = function Measurement(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M16.234 2.612L3.007 15.839l4.773 4.773L21.007 7.385l-4.773-4.773zM16.94.49l6.187 6.187a1 1 0 0 1 0 1.414L8.487 22.733a1 1 0 0 1-1.414 0L.885 16.546a1 1 0 0 1 0-1.414L15.527.49a1 1 0 0 1 1.414 0z"
  }), React.createElement("path", {
    d: "M8.716 8.716l1.767 1.767a1 1 0 1 0 1.415-1.414L10.13 7.302a1 1 0 1 0-1.414 1.414zM5.18 12.251l2.652 2.652a1 1 0 0 0 1.414-1.414l-2.652-2.652a1 1 0 1 0-1.414 1.414zm7.071-7.071l2.652 2.652a1 1 0 0 0 1.414-1.414l-2.652-2.652a1 1 0 1 0-1.414 1.414z"
  })));
};

Measurement.defaultProps = {
  viewBox: "0 0 24 24"
};
var Measurement$1 = iconHandler(Measurement);

var Menu = function Menu(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M4 19h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H4a1 1 0 1 0 0 2z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

Menu.defaultProps = {
  viewBox: "0 0 24 24"
};
var Menu$1 = iconHandler(Menu);

var Messages = function Messages(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M4.5 5A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 19.5 5h-15zm0-2h15A3.5 3.5 0 0 1 23 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 1 17.5v-11A3.5 3.5 0 0 1 4.5 3z"
  }), React.createElement("path", {
    d: "M2.53 5.944l6.702 6.943a3.5 3.5 0 0 0 4.949.088c.044-.043.044-.043.087-.088l6.702-6.943a1 1 0 1 0-1.44-1.388l-6.7 6.942-.038.038a1.5 1.5 0 0 1-2.121-.038L3.97 4.556a1 1 0 1 0-1.44 1.388z"
  })));
};

Messages.defaultProps = {
  viewBox: "0 0 24 24"
};
var Messages$1 = iconHandler(Messages);

var Minus = function Minus(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M2 13h20a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

Minus.defaultProps = {
  viewBox: "0 0 24 24"
};
var Minus$1 = iconHandler(Minus);

var MobilePhone = function MobilePhone(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M7 3.993v16.014c0 .548.446.993.995.993h8.01a1 1 0 0 0 .995-.993V3.993A.995.995 0 0 0 16.005 3h-8.01A1 1 0 0 0 7 3.993zm-2 0A3 3 0 0 1 7.995 1h8.01A2.995 2.995 0 0 1 19 3.993v16.014A3 3 0 0 1 16.005 23h-8.01A2.995 2.995 0 0 1 5 20.007V3.993z"
  }), React.createElement("path", {
    d: "M5 7h14V5H5zm0 11h14v-2H5z"
  })));
};

MobilePhone.defaultProps = {
  viewBox: "0 0 24 24"
};
var MobilePhone$1 = iconHandler(MobilePhone);

var More = function More(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    transform: "rotate(90 6 12)",
    cx: "6",
    cy: "12",
    r: "2"
  }), React.createElement("circle", {
    transform: "rotate(90 12 12)",
    cx: "12",
    cy: "12",
    r: "2"
  }), React.createElement("circle", {
    transform: "rotate(90 18 12)",
    cx: "18",
    cy: "12",
    r: "2"
  })));
};

More.defaultProps = {
  viewBox: "0 0 24 24"
};
var More$1 = iconHandler(More);

var NewWindow = function NewWindow(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M12.707 13.707l8-8a1 1 0 1 0-1.414-1.414l-8 8a1 1 0 0 0 1.414 1.414z"
  }), React.createElement("path", {
    d: "M15 5h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2zm3 10.667v3.666c0 .92-.746 1.667-1.667 1.667H5.667C4.747 21 4 20.254 4 19.333V8.667C4 7.747 4.746 7 5.667 7h3.666a1 1 0 0 0 0-2H5.667A3.667 3.667 0 0 0 2 8.667v10.666A3.667 3.667 0 0 0 5.667 23h10.666A3.667 3.667 0 0 0 20 19.333v-3.666a1 1 0 1 0-2 0z"
  }), React.createElement("path", {
    d: "M20 4v6a1 1 0 0 0 2 0V4a1 1 0 0 0-2 0z"
  })));
};

NewWindow.defaultProps = {
  viewBox: "0 0 24 24"
};
var NewWindow$1 = iconHandler(NewWindow);

var Nfc = function Nfc(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M5.772 16.542c.644-1.137.985-2.4.985-3.724a7.627 7.627 0 0 0-1.26-4.207 1 1 0 0 0-1.669 1.103c.6.908.929 1.987.929 3.104 0 .974-.25 1.899-.725 2.738a1 1 0 1 0 1.74.986zm3.916 2.314c1.026-1.728 1.587-3.826 1.587-6.038 0-2.413-.668-4.714-1.863-6.506a1 1 0 1 0-1.664 1.11c.971 1.456 1.527 3.37 1.527 5.396 0 1.858-.466 3.602-1.307 5.016a1 1 0 1 0 1.72 1.022z"
  }), React.createElement("path", {
    d: "M13.074 21.291c1.72-2.097 2.718-5.173 2.718-8.473 0-3.55-1.158-6.848-3.106-8.93a1 1 0 1 0-1.46 1.366c1.58 1.69 2.566 4.497 2.566 7.564 0 2.856-.853 5.483-2.265 7.205a1 1 0 1 0 1.547 1.268z"
  }), React.createElement("path", {
    d: "M17.108 23.362c2.189-2.67 3.465-6.602 3.465-10.824 0-4.544-1.479-8.757-3.957-11.405a1 1 0 0 0-1.46 1.366c2.11 2.256 3.417 5.978 3.417 10.039 0 3.779-1.13 7.26-3.012 9.556a1 1 0 0 0 1.547 1.268z"
  })));
};

Nfc.defaultProps = {
  viewBox: "0 0 24 24"
};
var Nfc$1 = iconHandler(Nfc);

var Notification = function Notification(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M20.603 17.202C21.368 17.781 20.96 19 20 19H4c-.963 0-1.37-1.227-.597-1.802.042-.031.158-.136.324-.322.302-.337.61-.771.902-1.314.864-1.604 1.39-3.752 1.39-6.527C6.02 5.704 8.706 3 12.023 3c3.317 0 6.004 2.704 6.004 6.035 0 2.777.518 4.927 1.37 6.533.288.542.59.977.888 1.314.164.185.277.29.318.32zm-2.973-.697c-1.007-1.899-1.603-4.37-1.603-7.47 0-2.23-1.795-4.035-4.004-4.035-2.21 0-4.004 1.805-4.004 4.035 0 3.101-.606 5.575-1.629 7.475a10.31 10.31 0 0 1-.28.49h11.8c-.093-.156-.186-.32-.28-.495z"
  }), React.createElement("path", {
    d: "M8 19a4 4 0 1 0 8 0 1 1 0 0 0-2 0 2 2 0 1 1-4 0 1 1 0 0 0-2 0zm3-17v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z"
  })));
};

Notification.defaultProps = {
  viewBox: "0 0 24 24"
};
var Notification$1 = iconHandler(Notification);

var OverflowMenu = function OverflowMenu(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    transform: "rotate(90 12 6)",
    cx: "12",
    cy: "6",
    r: "2"
  }), React.createElement("circle", {
    transform: "rotate(90 12 12)",
    cx: "12",
    cy: "12",
    r: "2"
  }), React.createElement("circle", {
    transform: "rotate(90 12 18)",
    cx: "12",
    cy: "18",
    r: "2"
  })));
};

OverflowMenu.defaultProps = {
  viewBox: "0 0 24 24"
};
var OverflowMenu$1 = iconHandler(OverflowMenu);

var Plus = function Plus(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M11 2v20a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z"
  }), React.createElement("path", {
    d: "M2 13h20a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2z"
  })));
};

Plus.defaultProps = {
  viewBox: "0 0 24 24"
};
var Plus$1 = iconHandler(Plus);

var Print = function Print(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "17",
    cy: "14",
    r: "1"
  }), React.createElement("path", {
    d: "M9.158 5C8.518 5 8 5.518 8 6.158V9h8V6.158C16 5.518 15.482 5 14.842 5H9.158zm0-2h5.684A3.158 3.158 0 0 1 18 6.158V11H6V6.158A3.158 3.158 0 0 1 9.158 3z",
    fillRule: "nonzero"
  }), React.createElement("path", {
    d: "M4.413 16.165a1 1 0 0 1 1.002 1l.003.73.002.316.005.668c0 .205-.068.123.084.12h12.959c.225.004.112.132.112-.115l-.005-.66-.003-.318a121.04 121.04 0 0 1-.003-.741 1 1 0 0 1 1.003-1l1.422.004-.023-3.893c0-.588-.657-1.276-1.319-1.276H4.38C3.7 11 3 11.708 3 12.273l.01 3.896 1.403-.004zm16.162 2.043l.005.667c0 1.313-.73 2.143-2.125 2.125H5.523c-1.355.018-2.098-.881-2.098-2.112 0-.15-.003-.39-.005-.663v-.057l-1.404.004a1 1 0 0 1-1.003-.998L1 12.276C1 10.608 2.592 9 4.38 9h15.272c1.788 0 3.32 1.603 3.32 3.27L23 17.166a1 1 0 0 1-1.003 1.006l-1.423-.004v.04z",
    fillRule: "nonzero"
  })));
};

Print.defaultProps = {
  viewBox: "0 0 24 24"
};
var Print$1 = iconHandler(Print);

var Recipe = function Recipe(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M4.802 11.942l.198.266v8.542c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-8.299l.319-.296A5.316 5.316 0 0 0 19 8.25C19 5.344 16.723 3 13.929 3c-1.657 0-3.182.828-4.13 2.202l-.39.565-.669-.162a3.738 3.738 0 0 0-.883-.105C5.733 5.5 4 7.284 4 9.5c0 .898.285 1.748.802 2.442zM3 12.854A6.08 6.08 0 0 1 2 9.5c0-3.307 2.616-6 5.857-6 .233 0 .465.014.694.042C9.877 1.949 11.825 1 13.929 1 17.84 1 21 4.252 21 8.25a7.33 7.33 0 0 1-2 5.053v7.447A2.25 2.25 0 0 1 16.75 23H5.25A2.25 2.25 0 0 1 3 20.75v-7.896z"
  }), React.createElement("path", {
    d: "M8 14v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0zm4 0v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z"
  })));
};

Recipe.defaultProps = {
  viewBox: "0 0 24 24"
};
var Recipe$1 = iconHandler(Recipe);

var Scan = function Scan(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M5 9v6a1 1 0 0 0 2 0V9a1 1 0 1 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zM2 5h3a1 1 0 1 0 0-2H1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5zm20 0h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V5zM2 19h3a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3zm20 0h-3a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v3z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

Scan.defaultProps = {
  viewBox: "0 0 24 24"
};
var Scan$1 = iconHandler(Scan);

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

var Settings = function Settings(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M10.37 5.379a1 1 0 0 1-.669.962 6.625 6.625 0 0 0-2.02 1.132 1 1 0 0 1-1.095.114L4.405 6.454c-.017-.009-.065.005-.075.022L2.947 8.814l2.106 1.093a1 1 0 0 1 .523 1.069 5.648 5.648 0 0 0 .042 2.253 1 1 0 0 1-.486 1.089l-2.06 1.16 1.475 2.3c.01.015.051.025.072.013l2.138-1.203a1 1 0 0 1 1.098.077 6.67 6.67 0 0 0 2.062 1.065 1 1 0 0 1 .701.936L10.662 21c0 .002 1.003-.013 3.01-.046l-.043-2.334a1 1 0 0 1 .67-.962 6.625 6.625 0 0 0 2.02-1.132 1 1 0 0 1 1.095-.114l2.181 1.133c.017.009.065-.005.075-.022l1.383-2.338-2.106-1.093a1 1 0 0 1-.523-1.069 5.648 5.648 0 0 0-.042-2.253 1 1 0 0 1 .486-1.089l2.06-1.16-1.475-2.3c-.01-.015-.051-.025-.072-.013l-2.138 1.203a1 1 0 0 1-1.098-.077 6.668 6.668 0 0 0-2.062-1.065 1 1 0 0 1-.701-.936l-.04-2.163c-.002-.082-.105-.174-.27-.17l-2.743.044.042 2.334zM8.329 3.08a1.997 1.997 0 0 1 1.968-2.036L13.04 1c1.235-.02 2.28.913 2.302 2.134l.028 1.474c.505.206.989.458 1.443.752l1.587-.894a2.064 2.064 0 0 1 2.738.676l1.51 2.358a1.93 1.93 0 0 1-.695 2.74l-1.491.84a7.69 7.69 0 0 1 .029 1.56l1.54.801a1.928 1.928 0 0 1 .771 2.715l-1.41 2.386a2.072 2.072 0 0 1-2.72.779l-1.62-.843a8.625 8.625 0 0 1-1.41.797l.03 1.644a1.994 1.994 0 0 1-1.954 2.036l-3.031.05a2 2 0 0 1-2.025-1.967l-.03-1.646a8.668 8.668 0 0 1-1.444-.752l-1.587.894a2.064 2.064 0 0 1-2.738-.676L1.352 16.5a1.93 1.93 0 0 1 .695-2.74l1.491-.84a7.69 7.69 0 0 1-.029-1.56l-1.54-.801a1.928 1.928 0 0 1-.771-2.715l1.41-2.386a2.072 2.072 0 0 1 2.72-.779l1.62.843a8.625 8.625 0 0 1 1.41-.797l-.03-1.644z"
  }), React.createElement("path", {
    d: "M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  })));
};

Settings.defaultProps = {
  viewBox: "0 0 24 24"
};
var Settings$1 = iconHandler(Settings);

var StoreLocation = function StoreLocation(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M13.438 22.824a2.222 2.222 0 0 1-3.132-.256C5.451 16.85 3 12.368 3 9c0-5.288 3.87-9 9-9s9 3.712 9 9c0 3.369-2.451 7.85-7.306 13.568a2.222 2.222 0 0 1-.256.256zM19 9c0-4.164-2.956-7-7-7-4.044 0-7 2.836-7 7 0 2.758 2.261 6.891 6.83 12.274.08.094.22.105.314.026C16.739 15.89 19 11.758 19 9z"
  }), React.createElement("path", {
    d: "M12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  })));
};

StoreLocation.defaultProps = {
  viewBox: "0 0 24 24"
};
var StoreLocation$1 = iconHandler(StoreLocation);

var StoreLocation1 = function StoreLocation1(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M13.687 22.994a2.111 2.111 0 0 1-3.374 0C5.448 16.53 3 11.69 3 8.332 3 3.14 6.72 0 12 0c5.28 0 9 3.14 9 8.332 0 3.357-2.448 8.197-7.313 14.662zM19 8.332C19 4.327 16.243 2 12 2S5 4.327 5 8.332c0 2.79 2.293 7.323 6.911 13.46a.111.111 0 0 0 .156.022C16.707 15.654 19 11.12 19 8.332z",
    fillRule: "nonzero"
  }), React.createElement("text", {
    fontFamily: "MaryAnn-ExtraBold, Mary Ann",
    fontSize: "10",
    fontWeight: "600"
  }, React.createElement("tspan", {
    x: "9.79",
    y: "12"
  }, "1"))));
};

StoreLocation1.defaultProps = {
  viewBox: "0 0 24 24"
};
var StoreLocation1$1 = iconHandler(StoreLocation1);

var StoreLocation10 = function StoreLocation10(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M13.687 22.994a2.111 2.111 0 0 1-3.374 0C5.448 16.53 3 11.69 3 8.332 3 3.14 6.72 0 12 0c5.28 0 9 3.14 9 8.332 0 3.357-2.448 8.197-7.313 14.662zM19 8.332C19 4.327 16.243 2 12 2S5 4.327 5 8.332c0 2.79 2.293 7.323 6.911 13.46a.111.111 0 0 0 .156.022C16.707 15.654 19 11.12 19 8.332z",
    fillRule: "nonzero"
  }), React.createElement("text", {
    fontFamily: "MaryAnn-ExtraBold, Mary Ann",
    fontSize: "10",
    fontWeight: "600"
  }, React.createElement("tspan", {
    x: "6.91",
    y: "12"
  }, "10"))));
};

StoreLocation10.defaultProps = {
  viewBox: "0 0 24 24"
};
var StoreLocation10$1 = iconHandler(StoreLocation10);

var Tick = function Tick(props) {
  return React.createElement("svg", props, React.createElement("path", {
    d: "M3.285 15.51l3.505 3.58a2.6 2.6 0 0 0 3.927-.243L20.796 5.606a1 1 0 0 0-1.592-1.212L9.126 17.636a.6.6 0 0 1-.906.056L4.715 14.11a1 1 0 1 0-1.43 1.4z",
    stroke: "none",
    fillRule: "nonzero"
  }));
};

Tick.defaultProps = {
  viewBox: "0 0 24 24"
};
var Tick$1 = iconHandler(Tick);

var Time = function Time(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M13 6.5a1 1 0 0 0-2 0v6l4.8 3.6a1 1 0 0 0 1.2-1.6l-4-3v-5z"
  }), React.createElement("path", {
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 2C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z"
  })));
};

Time.defaultProps = {
  viewBox: "0 0 24 24"
};
var Time$1 = iconHandler(Time);

var Trolley = function Trolley(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "18",
    cy: "21",
    r: "2"
  }), React.createElement("circle", {
    cx: "8",
    cy: "21",
    r: "2"
  }), React.createElement("path", {
    d: "M4.304 6.57l1.907 8.309A1.445 1.445 0 0 0 7.62 16h10.567c.673 0 1.257-.465 1.408-1.12l1.16-5.046a2.667 2.667 0 0 0-2.598-3.264H4.304zm0 0h-1.26a1 1 0 0 1 0-2h15.112a4.667 4.667 0 0 1 4.548 5.713l-1.16 5.045A3.444 3.444 0 0 1 18.185 18H7.62a3.444 3.444 0 0 1-3.357-2.674L1.025 1.224a1 1 0 0 1 1.95-.448l1.33 5.794z",
    fillRule: "nonzero"
  })));
};

Trolley.defaultProps = {
  viewBox: "0 0 24 24"
};
var Trolley$1 = iconHandler(Trolley);

var Upload = function Upload(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M11 3v14a1 1 0 0 0 2 0V3a1 1 0 0 0-2 0z"
  }), React.createElement("path", {
    d: "M12 3.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L12 3.414zM3 22h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z"
  })));
};

Upload.defaultProps = {
  viewBox: "0 0 24 24"
};
var Upload$1 = iconHandler(Upload);

var VoiceSearch = function VoiceSearch(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M12 3a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm0-2a4 4 0 0 1 4 4v6a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4z"
  }), React.createElement("path", {
    d: "M4 12c0 3.903 3.613 7 8 7 4.387 0 8-3.097 8-7a1 1 0 0 0-2 0c0 2.724-2.655 5-6 5s-6-2.276-6-5a1 1 0 0 0-2 0z"
  }), React.createElement("path", {
    d: "M13 23v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0z"
  }), React.createElement("path", {
    d: "M9 24h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"
  })));
};

VoiceSearch.defaultProps = {
  viewBox: "0 0 24 24"
};
var VoiceSearch$1 = iconHandler(VoiceSearch);

var ZoomIn = function ZoomIn(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M23.207 21.793l-7.5-7.5a1 1 0 0 0-1.414 1.414l7.5 7.5a1 1 0 0 0 1.414-1.414z"
  }), React.createElement("path", {
    d: "M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18z"
  }), React.createElement("path", {
    d: "M5.5 10h7a1 1 0 0 0 0-2h-7a1 1 0 1 0 0 2z"
  }), React.createElement("path", {
    d: "M8 5.5v7a1 1 0 0 0 2 0v-7a1 1 0 1 0-2 0z"
  })));
};

ZoomIn.defaultProps = {
  viewBox: "0 0 24 24"
};
var ZoomIn$1 = iconHandler(ZoomIn);

var ZoomOut = function ZoomOut(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M23.207 21.793l-7.5-7.5a1 1 0 0 0-1.414 1.414l7.5 7.5a1 1 0 0 0 1.414-1.414z"
  }), React.createElement("path", {
    d: "M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18z"
  }), React.createElement("path", {
    d: "M5.5 10h7a1 1 0 0 0 0-2h-7a1 1 0 1 0 0 2z"
  })));
};

ZoomOut.defaultProps = {
  viewBox: "0 0 24 24"
};
var ZoomOut$1 = iconHandler(ZoomOut);

export { Accessibility$1 as Accessibility, Account$1 as Account, ArrowDown$1 as ArrowDown, ArrowLeft$1 as ArrowLeft, ArrowRight$1 as ArrowRight, ArrowUp$1 as ArrowUp, ArrowUpDown$1 as ArrowUpDown, AwardWinning$1 as AwardWinning, Bag$1 as Bag, Basket$1 as Basket, Calendar$1 as Calendar, Cancel$1 as Cancel, ChevronLeft$1 as ChevronLeft, ChevronRight$1 as ChevronRight, ClickAndCollect, Comment$1 as Comment, Delete$1 as Delete, Delivery$1 as Delivery, Dislike$1 as Dislike, Download$1 as Download, Edit$1 as Edit, Favourites$1 as Favourites, FirstPage$1 as FirstPage, Freshness$1 as Freshness, Geolocation$1 as Geolocation, GridView$1 as GridView, Home$1 as Home, Info$1 as Info, LandlinePhone$1 as LandlinePhone, LastPage$1 as LastPage, Like$1 as Like, List$1 as List, ListView$1 as ListView, Measurement$1 as Measurement, Menu$1 as Menu, Messages$1 as Messages, Minus$1 as Minus, MobilePhone$1 as MobilePhone, More$1 as More, NewWindow$1 as NewWindow, Nfc$1 as Nfc, Notification$1 as Notification, OverflowMenu$1 as OverflowMenu, Plus$1 as Plus, Print$1 as Print, Recipe$1 as Recipe, Scan$1 as Scan, Search$1 as Search, Settings$1 as Settings, StoreLocation$1 as StoreLocation, StoreLocation1$1 as StoreLocation1, StoreLocation10$1 as StoreLocation10, Tick$1 as Tick, Time$1 as Time, Trolley$1 as Trolley, Upload$1 as Upload, VoiceSearch$1 as VoiceSearch, ZoomIn$1 as ZoomIn, ZoomOut$1 as ZoomOut };
//# sourceMappingURL=index.js.map
