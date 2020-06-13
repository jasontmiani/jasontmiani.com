import React from 'react'
import Switcher from 'gatsby-theme-carbon';

function ShadowedCustomSwitcher() {

    return(
        <div>
        <Switcher>
        <SwitcherDivider>Kalzad</SwitcherDivider>
        <SwitcherLink href="https://jasontmiani.com/">Home</SwitcherLink>
        <SwitcherLink href="https://jasontmiani.com/about">
          About
        </SwitcherLink>
        <SwitcherLink href="https://jasontmiani.com/instagram">Instagram Feed</SwitcherLink>
        <SwitcherLink href="https://github.com/jasontmiani">
          Jason's Github Profile
        </SwitcherLink>
        </Switcher>
        </div>
    );
}


export default ShadowedCustomSwitcher;


