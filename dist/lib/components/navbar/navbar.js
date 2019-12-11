"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const react_1 = require("react");
const core_1 = require("@emotion/core");
const styled_1 = require("../../../theme/styled");
const emotion_theming_1 = require("emotion-theming");
const button_1 = require("../button/button");
const navbar_item_1 = require("./navbar-item");
const navbar_brand_1 = require("./navbar-brand");
const navbar_border_1 = require("./navbar-border");
const navbar_dropdown_1 = require("./navbar-dropdown");
const navbar_container_1 = require("./navbar-container");
const navbar_inner_container_1 = require("./navbar-inner-container");
const navbar_toggle_1 = require("./navbar-toggle");
exports.NavbarContext = react_1.createContext({
    expanded: false,
    toggleExpanded: () => {
        return;
    },
    setActiveDropdownSetIsOpen: (activeDropdown) => undefined
});
const NavbarWrapper = styled_1.default.nav(({ theme }) => ({
    display: 'block',
    background: theme.navbar.background,
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    padding: `${theme.navbar.padding} 0`,
    minHeight: theme.navbar.minHeight,
    textAlign: 'left'
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
const NavbarComp = react_1.forwardRef(({ as = 'nav', skipText = 'Skip to Content', sticky = false, stickyCollapsed = false, theme, children }, ref) => {
    const [[activeDropdownSetIsOpen], setActiveDropdownSetIsOpen] = react_1.useState([]);
    const [expanded, setExpanded] = react_1.useState(false);
    const navbarWrapperStyles = [
        core_1.css({
            position: sticky ? ['fixed', 'sticky'] : 'relative',
            [`@media (max-width: ${theme.navbar.collapseAt})`]: {
                position: stickyCollapsed ? ['fixed', 'sticky'] : 'relative'
            }
        })
    ];
    const navbarSkipStyles = core_1.css({
        position: 'absolute',
        top: 0,
        left: '-9999px',
        zIndex: 9000,
        ':active, :focus': {
            left: 0
        }
    });
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
    return (core_1.jsx(NavbarWrapper, { css: navbarWrapperStyles, ref: ref },
        sticky && isIE11 && (core_1.jsx(core_1.Global, { styles: {
                body: {
                    marginTop: '60px'
                }
            } })),
        core_1.jsx(exports.NavbarContext.Provider, { value: context },
            core_1.jsx(NavbarContents, null,
                core_1.jsx(button_1.default, { primary: true, css: navbarSkipStyles, onClick: skipHandler }, skipText)),
            core_1.jsx(NavbarChildren, null, children))));
});
const Navbar = Object.assign(emotion_theming_1.withTheme(NavbarComp), {
    Brand: navbar_brand_1.default,
    Border: navbar_border_1.default,
    InnerContainer: navbar_inner_container_1.default,
    Container: navbar_container_1.default,
    Dropdown: navbar_dropdown_1.default,
    Item: navbar_item_1.default,
    Toggle: navbar_toggle_1.default
});
exports.default = Navbar;
