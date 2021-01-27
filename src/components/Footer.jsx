import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonLink from './ButtonLink';
import Link from './Link';
import BannerLogo from './BannerLogo';
import Text from './Text';
import footerMenuSchema from '../constants/footerMenu';

function Menu({ labelId, schema, themeColor }) {
  return (
    <MenuList style={{ margin: '0 20px' }}>
      <MenuItem>
        <Text
          component="h6"
          variant="h6"
          style={{ color: themeColor }}
          id={labelId}
        />
      </MenuItem>
      {schema.map(item => (
        <MenuItem key={item.id}>
          <Link href={item.href} external={item.external}>
            <Text id={item.id} />
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default function Footer({ authenticated = false }) {
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '32px 20px 12px 20px',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '0 20px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <BannerLogo />
        <ButtonLink
          href="https://community.wildbook.org/"
          external
          display="marketing"
        >
          <FormattedMessage id="COMMUNITY_FORUMS" />
        </ButtonLink>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '8px 0 24px 0',
        }}
      >
        <Menu
          labelId="ACCOUNT"
          themeColor={themeColor}
          schema={
            authenticated
              ? footerMenuSchema.accountAuthenticated
              : footerMenuSchema.accountUnauthenticated
          }
        />
        <Menu
          labelId="RESOURCES"
          themeColor={themeColor}
          schema={footerMenuSchema.resources}
        />
        <Menu
          labelId="CONTRIBUTE"
          themeColor={themeColor}
          schema={footerMenuSchema.contribute}
        />
        <Menu
          labelId="SOCIAL"
          themeColor={themeColor}
          schema={footerMenuSchema.social}
        />
      </div>
      <div
        style={{
          width: '100%',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text variant="caption" id="COPYRIGHT_LINE" />
      </div>
    </div>
  );
}
