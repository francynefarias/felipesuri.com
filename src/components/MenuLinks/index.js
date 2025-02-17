import React from "react";

import links from "./content";

import * as S from "./styled";

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => {
        return (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              cover
              direction="right"
              duration={0.6}
              bg="#373636"
              to={link.url}
              title={link.label}
              target={link.target}
              activeClassName="active"
              rel="noopener noreferrer"
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        );
      })}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
