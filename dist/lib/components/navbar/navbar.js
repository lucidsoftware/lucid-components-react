"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarContext = void 0;
const react_1 = __importStar(require("react"));
const styled_1 = __importDefault(require("../../../theme/styled"));
const button_1 = __importDefault(require("../button/button"));
const navbar_item_1 = __importDefault(require("./navbar-item"));
const navbar_brand_1 = __importDefault(require("./navbar-brand"));
const navbar_border_1 = __importDefault(require("./navbar-border"));
const navbar_dropdown_1 = __importStar(require("./navbar-dropdown"));
const navbar_dropdown_container_1 = __importDefault(require("./navbar-dropdown-container"));
const navbar_container_1 = __importDefault(require("./navbar-container"));
const navbar_inner_container_1 = __importDefault(require("./navbar-inner-container"));
const navbar_toggle_1 = __importDefault(require("./navbar-toggle"));
const navbar_dropdown_group_1 = __importDefault(require("./navbar-dropdown-group"));
exports.NavbarContext = react_1.createContext({
    expanded: false,
    toggleExpanded: () => {
        return;
    },
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    setActiveDropdownSetIsOpen: (activeDropdown) => undefined
});
const NavbarContents = styled_1.default.div({
    label: 'navbarContents',
    display: 'flex',
    margin: '0 auto',
    position: 'relative'
});
const NavbarChildren = styled_1.default.div(({ theme }) => ({
    label: 'navbarChildren',
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: `${theme.navbar.padding} 0`,
    minHeight: theme.navbar.minHeight,
    textAlign: 'left'
}));
const NavbarSkip = styled_1.default(button_1.default)({
    position: 'absolute',
    top: 0,
    left: '-9999px',
    zIndex: 9000,
    ':active, :focus': {
        left: 0
    }
});
const NavbarComp = react_1.forwardRef(({ skipText = 'Skip to Content', children }, forwardedRef) => {
    const [[activeDropdownSetIsOpen], setActiveDropdownSetIsOpen] = react_1.useState([]);
    const [expanded, setExpanded] = react_1.useState(false);
    const skipHandler = () => {
        const firstHeader = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
        if (firstHeader) {
            firstHeader.setAttribute('tabindex', '-1');
            firstHeader.focus();
        }
    };
    const context = {
        setActiveDropdownSetIsOpen: ([dropdownSetIsOpen]) => {
            if (!activeDropdownSetIsOpen) {
                setActiveDropdownSetIsOpen([dropdownSetIsOpen]);
            }
            else if (activeDropdownSetIsOpen !== dropdownSetIsOpen) {
                activeDropdownSetIsOpen(false);
                setActiveDropdownSetIsOpen([dropdownSetIsOpen]);
            }
        },
        expanded,
        toggleExpanded: () => setExpanded(!expanded)
    };
    return (react_1.default.createElement(exports.NavbarContext.Provider, { value: context },
        react_1.default.createElement(NavbarContents, null,
            react_1.default.createElement(NavbarSkip, { primary: true, onClick: skipHandler }, skipText)),
        react_1.default.createElement(NavbarChildren, { ref: forwardedRef }, children)));
});
NavbarComp.displayName = 'NavbarComp';
const Navbar = Object.assign(NavbarComp, {
    Brand: navbar_brand_1.default,
    Border: navbar_border_1.default,
    InnerContainer: navbar_inner_container_1.default,
    Container: navbar_container_1.default,
    Dropdown: navbar_dropdown_1.default,
    DropdownContext: navbar_dropdown_1.NavbarDropdownContext,
    DropdownContainer: navbar_dropdown_container_1.default,
    DropdownGroup: navbar_dropdown_group_1.default,
    Item: navbar_item_1.default,
    Toggle: navbar_toggle_1.default
});
exports.default = Navbar;
