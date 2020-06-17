"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const react_1 = require("react");
const core_1 = require("@emotion/core");
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
    setActiveDropdownSetIsOpen: (activeDropdown) => undefined
});
const NavbarWrapper = styled_1.default.nav(({ theme, sticky, stickyCollapsed }) => ({
    display: 'block',
    background: theme.navbar.background,
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    padding: `${theme.navbar.padding} 0`,
    minHeight: theme.navbar.minHeight,
    textAlign: 'left',
    position: sticky ? ['fixed', 'sticky'] : 'relative',
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        position: stickyCollapsed ? ['fixed', 'sticky'] : 'relative'
    }
}));
const NavbarContents = styled_1.default.div({
    display: 'flex',
    margin: '0 auto',
    position: 'relative'
});
const NavbarChildren = styled_1.default.div({
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
});
const NavbarSkip = styled_1.default(button_1.default)({
    position: 'absolute',
    top: 0,
    left: '-9999px',
    zIndex: 9000,
    ':active, :focus': {
        left: 0
    }
});
const NavbarComp = react_1.forwardRef(({ as = 'nav', skipText = 'Skip to Content', sticky = false, stickyCollapsed = false, children }, ref) => {
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
    const isIE11 = typeof navigator !== 'undefined' &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('Trident/') !== -1;
    return (core_1.jsx(NavbarWrapper, { ref: ref, sticky: sticky, stickyCollapsed: stickyCollapsed },
        sticky && isIE11 && (core_1.jsx(core_1.Global, { styles: {
                body: {
                    marginTop: '60px'
                }
            } })),
        core_1.jsx(exports.NavbarContext.Provider, { value: context },
            core_1.jsx(NavbarContents, null,
                core_1.jsx(NavbarSkip, { primary: true, onClick: skipHandler }, skipText)),
            core_1.jsx(NavbarChildren, null, children))));
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
